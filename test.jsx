var fs = require('fs') // require is a special function provided by node
var path = require('path')
var myNumber = undefined // we don't know what the number is yet since it is stored in a file

function addOne(callback) {
  fs.readFile(path.join(__dirname, 'number.txt'), function doneReading(err, fileContents) {
    //myNumber = parseInt(fileContents)
    
    console.log(fileContents)
    myNumber++
    callback()
  })
}

function logMyNumber() {
    console.log(myNumber)
}

addOne(logMyNumber)


