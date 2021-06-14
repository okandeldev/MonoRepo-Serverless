require('custom-env').env();   
const AWS = require('aws-sdk');
export let invokeLambda = async (lambdaFunctionName,{endpoint, httpMethod, body,query,stageVariables}) => { 
    let payloadStr;
    payloadStr = JSON.stringify( 
    {
        "body": JSON.stringify(body||{}),
        "resource": "/{proxy+}",
        "path": endpoint,
        "httpMethod": httpMethod,
        "isBase64Encoded": false,
        "queryStringParameters": query||{},
        "pathParameters": {
          "proxy": endpoint
        },
        "stageVariables": stageVariables||{},
        "headers": {
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
          "Accept-Encoding": "gzip, deflate, sdch",
          "Accept-Language": "en-US,en;q=0.8",
          "Cache-Control": "max-age=0",
          "CloudFront-Forwarded-Proto": "https",
          "CloudFront-Is-Desktop-Viewer": "true",
          "CloudFront-Is-Mobile-Viewer": "false",
          "CloudFront-Is-SmartTV-Viewer": "false",
          "CloudFront-Is-Tablet-Viewer": "false",
          "CloudFront-Viewer-Country": "US",
          "Host": "1234567890.execute-api.us-east-1.amazonaws.com",
          "Upgrade-Insecure-Requests": "1",
          "User-Agent": "Custom User Agent String",
          "Via": "1.1 08f323deadbeefa7af34d5feb414ce27.cloudfront.net (CloudFront)",
          "X-Amz-Cf-Id": "cDehVQoZnx43VYQb9j2-nvCh-9z396Uhbp027Y2JvkCPNLmGJHqlaA==",
          "X-Forwarded-For": "127.0.0.1, 127.0.0.2",
          "X-Forwarded-Port": "443",
          "X-Forwarded-Proto": "https"
        } 
      }
      , null, 2)
        
    let params = {
        FunctionName   : lambdaFunctionName,               /* string type, required */
        // ClientContext  : '',                            /* 'STRING_VALUE' */
        InvocationType : 'RequestResponse',                /* string type: 'Event' (async)| 'RequestResponse' (sync) | 'DryRun' (validate parameters y permissions) */
        // InvocationType : 'Event', 
        LogType        : 'None',                           /* string type: 'None' | 'Tail' */ 
        Payload        : payloadStr,                       /* Buffer.from('...') || 'JSON_STRING' */ /* Strings will be Base-64 encoded on your behalf */
        //  Qualifier      : '',                           /* STRING_VALUE' */
    };
    console.log('***** start invoke',payloadStr);
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