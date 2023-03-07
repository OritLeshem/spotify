const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const utilService = require('../../services/util.service')
const ObjectId = require('mongodb').ObjectId

async function query(filterBy) {
    try {
        const criteria = _buildCriteria(filterBy)
        const collection = await dbService.getCollection('entity')
        var entitys = await collection.find(criteria).toArray()
        return entitys
    } catch (err) {
        logger.error('cannot find entitys', err)
        throw err
    }
}

async function getById(entityId) {
    try {
        const collection = await dbService.getCollection('entity')
        const entity = collection.findOne({ _id: ObjectId(entityId) })
        return entity
    } catch (err) {
        logger.error(`while finding entity ${entityId}`, err)
        throw err
    }
}

async function remove(entityId) {
    try {
        const collection = await dbService.getCollection('entity')
        await collection.deleteOne({ _id: ObjectId(entityId) })
        return entityId
    } catch (err) {
        logger.error(`cannot remove entity ${entityId}`, err)
        throw err
    }
}

async function add(entity) {
    try {
        const collection = await dbService.getCollection('entity')
        await collection.insertOne(entity)
        return entity
    } catch (err) {
        logger.error('cannot insert entity', err)
        throw err
    }
}

async function update(entity) {
    try {
        const entityToSave = {
            title: entity.title,
            price: entity.price
        }
        const collection = await dbService.getCollection('entity')
        await collection.updateOne({ _id: ObjectId(entity._id) }, { $set: entityToSave })
        return entity
    } catch (err) {
        logger.error(`cannot update entity ${entity._id}`, err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    let criteria = {}
    if (filterBy.txt) {
        criteria.txt = { $regex: filterBy.txt, $options: 'i' }
    }
    if (filterBy.price) {
        criteria.price = { $lte: +filterBy.price || Infinity }
    }
    // if (filterBy?.labels?.length) {
    //   criteria.lables = { $all: filterBy.labels }
    // }

    return criteria
}

module.exports = {
    query,
    getById,
    remove,
    add,
    update
}
