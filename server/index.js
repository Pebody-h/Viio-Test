import app from './src/config.js'
import { conn } from './src/db.js'
import 'dotenv/config'
import { swaggerDocs } from './swagger.js'

const PORT = process.env.SERVER_PORT || 3001

app.listen(PORT, async () => {
  await conn.sync({force: false, alter: false});
  console.log(`server listening at ${PORT}`);
  swaggerDocs(app, PORT);
})


// Creacion del servidor con itrm-tools
// Dejo activo la creacion manual pero aqui dejare comentado la creacion del servidos con itrm-tools
// import {
//     APIRequestBuilder,
//     APIService,
//     ExpressStandardConfiguration,
//     GetRequest,
//     RequestContext,
//     RequestParameterType,
//     SequelizeConnection,
//     SimpleAPIRouter
// } from 'itrm-tools';

// const apiService = new APIService({
//   name: 'test',
//   port: 8150,
//   express: new ExpressStandardConfiguration()
// })

// const validConnection = new SequelizeConnection({
//   database: 'render-json',
//   username: 'root',
//   host: '127.0.0.1',
//   dialect: 'postgres'
// });

// apiService.init()
// class TestRequest extends GetRequest {
//   constructor(builder) {
//       super(builder.buildApiRequestConfig("/test/:method/type"));
//   }

//   async apply(req, res) {
//       return res.json({
//           ms: '0qwibcdbc'
//       })
//   }
// }


// export class TestRequestBuilder extends APIRequestBuilder {
//   constructor() {
//       super();
//   }
//   buildParams() {
//       return [{
//           context: RequestContext.QUERY,
//           properties: [{ name: "value", type: RequestParameterType.STRING }]
//       }, {
//           context: RequestContext.QUERY,
//           properties: [{ name: "option", type: RequestParameterType.STRING }]
//       }, {
//           context: RequestContext.QUERY,
//           properties: [
//               { name: "x", type: RequestParameterType.STRING },
//               { name: "y", type: RequestParameterType.STRING }
//           ]
//       }, {
//           context: RequestContext.PARAMS,
//           properties: [{ name: "method", type: RequestParameterType.STRING }]
//       }, {
//           context: RequestContext.HEADERS,
//           properties: [{ name: "x-header", type: RequestParameterType.STRING }]
//       }
//       ];
//   }
//   buildDocDetails() {
//       return {
//           description: "Get Request",
//           samples: [{
//               status: 200,
//               input: { x: 5, y: 2 },
//               output: {
//                   message: "hola cómo estás"
//               }
//           }, {
//               status: 400,
//               input: { x: 5 },
//               output: {
//                   message: "Falta la y",
//                   error: "Missing parameters",
//               }
//           }]
//       }
//   }
//   buildApiRequestConfig(path) {
//       return {
//           path: path,
//           params: this.buildParams(),
//           details: this.buildDocDetails()
//       }
//   }
// }

// const request = new TestRequest(new TestRequestBuilder())
// const route = new SimpleAPIRouter('/test')
// route.init()
// route.addRequest(request)
// route.addRequest(request)
// apiService.addRouter(route);
// apiService.enableDocumentation()
// apiService.run(() => { })
//   .then(async (response) => {
//       await validConnection.connect()
//       const s = await validConnection.sync();
//       aqui se crean las querys
//       console.log(response)
//   });
