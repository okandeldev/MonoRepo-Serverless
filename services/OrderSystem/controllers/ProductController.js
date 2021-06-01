require('custom-env').env(); 
const { container, setup } = require('./infrastructure/config/di-setup');
setup()
module.exports.endpoint = (event, context, callback) => {
  const productService =   container.resolve("productService"); 
  const querystring = event.queryStringParameters;
  const keyword = querystring.keyword;
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      body: productService.findAll(keyword),
    }),
  };

  callback(null, response);
};
  