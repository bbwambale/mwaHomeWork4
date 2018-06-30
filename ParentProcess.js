const {fork} = require('child_process');
const http = require('http');
const{Subject} = require('rxjs');
const subject = new Subject();
const url = require('url');


function displayText(reqres){
    let urlo = url.parse(reqres.req.url, true);
    if(urlo.pathname === "/"){
        const childProcess = fork('childToFork.js');
        childProcess.send(urlo.query.url);
        childProcess.on('message', (response)=>{
            reqres.res.end(`${response}`);
        });
    }
}

subject.subscribe(displayText);

http.createServer((req, res) =>{
    subject.next({req : req, res : res});
}).listen(7676);