

const os = require('os');
const {from} = require('rxjs');

function myPcCheck(){
    return new Promise(function(resolve, reject){
        let cpuCores = os.cpus().length;
        let cpuMemory = os.totalmem() * 1e-9;
          console.log('Checking your System!');
         if(cpuCores<2){
           reject('Processor not Supported!');
         }
         else if(cpuMemory < 4){
             reject('The App Needs Atleast 4GB of RAM');
         }
           else{
               resolve('System is checked Sucessfully!');
           }
    });
}

myPcCheck().then(data => console.log(data))
            .catch(error => console.log(error));
//console.log('checking your System!');

//using Observable
from(myPcCheck()).subscribe((data)=>console.log(data));
