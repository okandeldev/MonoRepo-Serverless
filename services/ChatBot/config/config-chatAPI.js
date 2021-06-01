require('custom-env').env();

// chat-api configuration
module.exports = {
    // API reference URL
    apiUrl: process.env.CHATAPI_APIURL,
    // API token from your personal cabinet
    token: process.env.CHATAPI_TOKEN,
}