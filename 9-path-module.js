const path = require('path')

// prints the delimiter for paths (in this case its /)
console.log(path.delimiter)

// shows the file path using the current directory we are in as the root
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

// shows just the base of the filepath, which in this case is test.txt
const base = path.basename(filePath)
console.log(base)

// show the absolute path of the test.txt file
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)