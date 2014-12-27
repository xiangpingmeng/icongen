var lwip = require('lwip');

if(process.argv.length < 3){

    console.log("Usage: icgen <filename>")
    process.kill()

}
var filePath = process.argv[2];
var destFolder = process.argv[3];

if(destFolder == null){
    destFolder = "icons/";
}
// obtain an image object:

var imageNames = [

    [29,29,"Icon-29.png"],
    [58,58,"Icon-29@2x.png"],
    [87,87,"Icon-29@3x.png"],
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

function resizeImage(width,height,sourcePath,destPath){

    lwip.open(sourcePath, function(err, image){

        image.batch().resize(width,height).writeFile(destPath,function(err,message){})

    });

}


for(var i = 0;i < imageNames.length;i++){

    var width = imageNames[i][0];
    var height = imageNames[i][1];
    var fileName = imageNames[i][2];

    resizeImage(width,height,filePath,destFolder + fileName);

}


