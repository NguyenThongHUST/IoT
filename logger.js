
const EvenEmitter  = require('events') ; 

class Logger extends EvenEmitter {
     log(message){
        console.log(message);
        this.emit("messageLogged", {id: 1, url: "https/thong.com"});
    }
}




module.exports = Logger ;