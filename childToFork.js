const fs = require('fs');

process.on('message', (path) => {
    console.log('My text file is: ' + path);
    fs.readFile(path, (err, data)=>{
        if(err) throw err;
        process.send(data.toString());
    });
})