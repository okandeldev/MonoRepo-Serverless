require('custom-env').env();   
const AWS = require('aws-sdk');
export let invokeLambda = async (lambdaFunctionName,endpoint, payload) => { 
    let payloadStr;
    if (typeof payload === 'string')
    { 
        payloadStr = payload;
    }
    else
    {
        payloadStr = JSON.stringify(payload, null, 2); 
    } 
    let params = {
        FunctionName   : lambdaFunctionName,               /* string type, required */
        // ClientContext  : '',                            /* 'STRING_VALUE' */
        InvocationType : 'RequestResponse',                /* string type: 'Event' (async)| 'RequestResponse' (sync) | 'DryRun' (validate parameters y permissions) */
        // InvocationType : 'Event', 
        LogType        : 'None',                           /* string type: 'None' | 'Tail' */ 
        Payload        : payloadStr,                       /* Buffer.from('...') || 'JSON_STRING' */ /* Strings will be Base-64 encoded on your behalf */
        //  Qualifier      : '',                           /* STRING_VALUE' */
    };
   
    AWS.config.region = process.env.AWS_region;
    AWS.config.update({
      region: process.env.AWS_region,
      accessKeyId: process.env.AWS_accessKeyId,
      secretAccessKey: process.env.AWS_secretAccessKey,
      //endpoint: new AWS.Endpoint('/'),
    });
    var lambda = new AWS.Lambda(); 
    const lambdaResult = await lambda.invoke(params).promise(); 
    console.log('Results from invoking lambda ' + lambdaFunctionName + ': ' , JSON.stringify(lambdaResult, null, 2) );
 
    // If you use LogType = 'Tail', you'll obtain the logs in lambdaResult.LogResult.
    // If you use 'None', there will not exist that field in the response.
    if (lambdaResult.LogResult)
    {
        console.log('Logs of lambda execution: ',  Buffer.from(lambdaResult.LogResult, 'base64').toString());
    }
 
    console.log('invokeLambdaSync::lambdaResult: ', lambdaResult); 
    console.log('<<< Returning from invokeLambda, with lambdaResult: ', JSON.stringify(lambdaResult, null, 2));
 
    // The actual value returned by the lambda it is lambdaResult.Payload
    // There are other fields (some of them are optional)
    return lambdaResult;
 };