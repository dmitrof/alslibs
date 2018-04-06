/**
 * Created by Дмитрий on 21.01.2018.
 */
var http = require("http");


let requestService = function(options)
{
    console.log("rest::getJSON");
    return new Promise((resolve, reject) => {
        var req = http.request(options, function(res)
        {
            var output = '';
            console.log(options.host + ':' + res.statusCode);
            res.setEncoding('utf8');

            res.on('data', function (chunk) {
                output += chunk;
            });

            res.on('end', function() {
                var obj = JSON.parse(output);
                resolve({success:true, message:"request successful", data:obj});
            });
        });

        req.on('error', function(err) {
            reject({success:false, message:"request failed", data:{}})
        });

        req.end();
    });

};

module.exports = {
    nodeUtils : require('./util/nodeUtils'),
    requestService : requestService,
};
