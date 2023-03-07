const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId
// const asyncLocalStorage = require('../../services/als.service')

async function query(filterBy) {
    try {
        const criteria = _buildCriteria(filterBy)
        const collection = await dbService.getCollection('review')
        // const reviews = await collection.find(criteria).toArray()
        var reviews = await collection.aggregate([
            {
                $match: criteria
            },
            {
                $lookup:
                {
                    localField: 'byUserId',
                    from: 'user',
                    foreignField: '_id',
                    as: 'byUser'
                }
            },
            {
                $unwind: '$byUser'
            },
            {
                $lookup:
                {
                    localField: 'aboutEntityId',
                    from: 'entity',
                    foreignField: '_id',
                    as: 'aboutEntity'
                }
            },
            {
                $unwind: '$aboutEntity'
            }
        ]).toArray()
        reviews = reviews.map(review => {
            review.byUser = { _id: review.byUser._id, fullname: review.byUser.fullname }
            review.aboutEntity = { _id: review.aboutEntity._id, fullname: review.aboutEntity.name, price: review.aboutEntity.price }
            delete review.byUserId
            delete review.aboutEntityId
            return review
        })
        console.log('reviews:', reviews)
        return reviews
    } catch (err) {
        logger.error('cannot find reviews', err)
        throw err
    }
}

async function remove(reviewId) {
    try {
        const store = asyncLocalStorage.getStore()
        const { loggedinUser } = store
        const collection = await dbService.getCollection('review')
        // remove only if user is owner/admin
        const criteria = { _id: ObjectId(reviewId) }
        if (!loggedinUser.isAdmin) criteria.byUserId = ObjectId(loggedinUser._id)
        const { deletedCount } = await collection.deleteOne(criteria)
        return deletedCount
    } catch (err) {
        logger.error(`cannot remove review ${reviewId}`, err)
        throw err
    }
}

async function add(review) {
    try {
        const reviewToAdd = {
            byUserId: ObjectId(review.userId),
            aboutEntityId: ObjectId(review.entityId),
            txt: review.txt
        }
        const collection = await dbService.getCollection('review')
        await collection.insertOne(reviewToAdd)
        return reviewToAdd
    } catch (err) {
        logger.error('cannot insert review', err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    let criteria = {}
    // if (filterBy.byUserId) criteria.byUserId = filterBy.byUserId
    if (filterBy.aboutEntityId) criteria.aboutEntityId = ObjectId(filterBy.aboutEntityId) 
    console.log('criteria:', criteria)
    return criteria
}

module.exports = {
    query,
    remove,
    add
}


