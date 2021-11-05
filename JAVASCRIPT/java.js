
var logger = require("./logger");

Array.prototype.map2 = function(callback){
    var output =[];
    var arrayLength = this.length;
   for(var i = 0 ; i<arrayLength ; i++){
       var result = callback(this[i],i);
       output.push(result);
   }
  return output;
}
var names = ['thuong', 'thuc','thong'];

var htmls = names.map2(function(name){
   return `<h2>${name}<\h2>`;
});


console.log(logger.log('thong'));