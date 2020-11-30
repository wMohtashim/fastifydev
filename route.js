async function routes (fastify, options) {
    // const collection = fastify.mongo.db.collection('test_collection')

    fastify.get('/', async (request, reply) => {
        const params = request.params
        return{ hello : "world"}
    })

    fastify.get('/:waleed', async (request, reply) => {
        const params = request.params
        return{ hello : params}
    })

    // fastify.get('/animals', async (request, reply) => {
    //     const result = await collection.find().toArray()
    //     if (result.length === 0) {
    //       throw new Error('No documents found')
    //     }
    //     return result
    // })

    // fastify.get('/animals/:animal', async (request, reply) => {
    //     const result = await collection.findOne({ animal: request.params.animal })
    //     if (result === null) {
    //       throw new Error('Invalid value')
    //     }
    //     return result
    // })
}
  
module.exports = routes