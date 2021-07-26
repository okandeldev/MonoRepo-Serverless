require('custom-env').env();   
const AWS = require('aws-sdk');
export let invokeLambda = async (lambdaFunctionName,{endpoint, httpMethod, body,query,stageVariables}) => { 
    let data = {
        "resource": endpoint,
        "path": endpoint,
        "httpMethod": httpMethod,
        "headers": {
            "Accept": "*/*",
            "Accept-Encoding": "deflate, gzip", 
            "Content-Type": "application/json", 
        },
        "queryStringParameters": query||{},
        "pathParameters": null,
        "stageVariables": stageVariables|| null, 
        "requestContext": {  
            "resourcePath": endpoint,
            "httpMethod": httpMethod, 
        }, 
        "body": body||{},
        "isBase64Encoded": true
    } 
    let payloadStr = JSON.stringify( data , null, 2) 
    let params = {
        FunctionName   : lambdaFunctionName,               /* string type, required */
        // ClientContext  : '',                            /* 'STRING_VALUE' */
        InvocationType : 'RequestResponse',                /* string type: 'Event' (async)| 'RequestResponse' (sync) | 'DryRun' (validate parameters y permissions) */
        // InvocationType : 'Event', 
        LogType        : 'None',                           /* string type: 'None' | 'Tail' */ 
        Payload        : payloadStr,                       /* Buffer.from('...') || 'JSON_STRING' */ /* Strings will be Base-64 encoded on your behalf */
        //  Qualifier      : '',                           /* STRING_VALUE' */
    };
    console.log('***** start invoke lamda, Data:',payloadStr);
    AWS.config.region = process.env.AWS_region;
    AWS.config.update({
      region: process.env.AWS_region,
      accessKeyId: process.env.AWS_accessKeyId,
      secretAccessKey: process.env.AWS_secretAccessKey,
      //endpoint: new AWS.Endpoint('/'),
    });
    var lambda = new AWS.Lambda(); 
    const lambdaResult = await lambda.invoke(params).promise();  
    return lambdaResult;
 };