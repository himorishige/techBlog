const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');

let server;

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  if (!server) {
    server = awsServerlessExpress.createServer(app);
  }
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
