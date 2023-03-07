const entityService = require('./entity.service.js')
const logger = require('../../services/logger.service')

async function getEntitys(req, res) {
    try {
        logger.debug('Getting entitys')
        const { filterBy } = JSON.parse(req.query.params)
        const entitys = await entityService.query(filterBy)
        res.json(entitys)
    } catch (err) {
        logger.error('Failed to get entitys', err)
        res.status(500).send({ err: 'Failed to get entitys' })
    }
}

async function getEntityById(req, res) {
    try {
        const entityId = req.params.id
        const entity = await entityService.getById(entityId)
        res.json(entity)
    } catch (err) {
        logger.error('Failed to get entity', err)
        res.status(500).send({ err: 'Failed to get entity' })
    }
}

async function removeEntity(req, res) {
    try {
        const entityId = req.params.id
        const removedId = await entityService.remove(entityId)
        res.send(removedId)
    } catch (err) {
        logger.error('Failed to remove entity', err)
        res.status(500).send({ err: 'Failed to remove entity' })
    }
}

async function addEntity(req, res) {
    const { loggedinUser } = req

    try {
        const entity = req.body
        entity.owner = loggedinUser
        const addedEntity = await entityService.add(entity)
        res.json(addedEntity)
    } catch (err) {
        logger.error('Failed to add entity', err)
        res.status(500).send({ err: 'Failed to add entity' })
    }
}

async function updateEntity(req, res) {
    try {
        const entity = req.body
        console.log('entity:', entity)
        const updatedEntity = await entityService.update(entity)
        res.json(updatedEntity)
    } catch (err) {
        logger.error('Failed to update entity', err)
        res.status(500).send({ err: 'Failed to update entity' })

    }
}

module.exports = {
    getEntitys,
    getEntityById,
    removeEntity,
    addEntity,
    updateEntity
}
