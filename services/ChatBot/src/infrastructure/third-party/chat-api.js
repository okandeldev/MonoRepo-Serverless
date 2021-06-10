require('custom-env').env();

// chat-api configuration
export let config = {
    // API reference URL
    apiUrl: process.env.CHATAPI_APIURL,
    // API token from your personal cabinet
    token: process.env.CHATAPI_TOKEN,
}