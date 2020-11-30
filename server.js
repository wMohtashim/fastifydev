// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
// fastify.get('/', async (request, reply) => {
//     return { hello: 'world' }
// })


// fastify.route({
//     method: 'GET',
//     url: '/about',
//     schema: {
//         querystring: {
//             about : {type: 'string'}
//         },
//         response:{
//             200:{
//                 type: 'object',
//                 properties:{
//                     about:{type:'string'}
//                 }
//             }
//         }      
//     },
//     handler: async(req,reply) =>{
//         return{ about:"waleed" }
//     }
// })


// fastify.route({
//     method: 'GET',
//     url: '/',
//     schema: {
//         // request needs to have a querystring with a `name` parameter
//         querystring:{
//             name: {type: 'string'}
//         },
//         response:{
//             200:{
//                 type: 'object',
//                 properties:{
//                     hello: {type: 'string'}
//                 }
//             }            
//         }

//     },
//     preHandler: async(req,reply)=>{

//     },
//     handler: async(req,reply)=>{
//         return{ hello: 'waleed'}
//     }
// })

// fastify.register(require('./db-conector'))
fastify.register(require('./route'))




// Run the server!
const start = async () => {
    try {
      await fastify.listen(3000)
      fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
}
start()