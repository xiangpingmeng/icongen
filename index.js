var lwip = require('lwip');


var filePath = process.argv[2];
var destFolder = process.argv[3];

if(destFolder == null){
    destFolder = "icons/";
}
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


    lwip.open(filePath, function(err, image){

        for(var i = 0;i < imageNames.length;i++){

            var width = imageNames[i][0];
            var height = imageNames[i][1];
            var fileName = imageNames[i][2];
            console.log(fileName)
            var batch = image.batch()
            batch.resize(width,height).writeFile(destFolder + fileName,function(err,image){})

//            batch.resize(width,height,function(err,image){
//
//                batch.writeFile(fileName,function(err){
//
////                    test
//
//                });
//
//            });

        }

    });

