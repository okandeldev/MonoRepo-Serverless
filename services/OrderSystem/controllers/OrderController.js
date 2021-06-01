require('custom-env').env(); 
const { container, setup } = require('./infrastructure/config/di-setup');
setup()
module.exports.endpoint = (event, context, callback) => {
  const orderService =   container.resolve("orderService"); 
  const querystring = event.queryStringParameters;
  const id = querystring.id;
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      body: orderService.get(id),
    }),
  };

  callback(null, response);
};
  