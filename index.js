#!/usr/bin/env node


var lwip = require('lwip');
var program = require('commander');
var fs = require("fs");

var pjson = require('./package.json');


program
    .version(pjson.version)
    .usage("icongen [options] <file>\n\n         icongen is an easy tool for app developer to generate icons.")
    .option("-d, --dest","specify the destination folder of the generated icons.").parse(process.argv);

var filePath = program.args[0] || null;
if(filePath == null){

    program.help();
}
var destFolder = program.dest || "icons";
fs.exists(destFolder,function(exists){

    if(exists == false){
        
        fs.mkdir(destFolder,null);
    }

});

// obtain an image object:

var imageNames = [

    [29,29,"Icon-Small.png"],
    [58,58,"Icon-Small@2x.png"],
    [87,87,"Icon-Small@3x.png"],
    [40,40,"Icon-40.png"],
    [80,80,"Icon-40@2x.png"],
    [120,120,"Icon-40@3x.png"],
    [60,60,"Icon-60@2x.png"],
    [90,90,"Icon-60@3x.png"],
    [76,76,"Icon-76.png"],
    [152,152,"Icon-76@2x.png"],
    [72,72,"Icon-72.png"],
    [144,144,"Icon-72@2x.png"],
    [50,50,"Icon-50.png"],
    [100,100,"Icon-50@2x.png"]

]

var processing = false;
var iconProcessed = 0;

function processImage(buffer,width,height,dest){
    
    lwip.open(buffer, 'png', function(err, image){

        image.resize(width,height,function(err,image){

          image.writeFile(dest,function(err){

              if(!err){
                  iconProcessed++;
                  if(iconProcessed >= imageNames.length){
                      console.log(iconProcessed + " icons generated at " + __dirname + "/" + destFolder + "/");
                  }
              }

          });

        });

    });

}

fs.readFile(filePath, function(err, buffer){

    for(var i = 0;i < imageNames.length;i++){

        var width = imageNames[i][0];
        var height = imageNames[i][1];
        var fileName = imageNames[i][2];

        processImage(buffer,width,height,destFolder + "/" + fileName);

    }
    
});

