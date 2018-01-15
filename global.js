//var sData = 'Wisen';
const strint = require('./strint.js');
const readline = require('readline');



try {

//  const rl = readline.createInterface({
//    input: process.stdin,
//  });
  for(var i = 0; i < 1; i++){
    var base = Math.floor(Math.random() * 10000);
    var exponent = Math.floor(Math.random() * 100);

    var re = Math.pow(base,exponent);
    var re_str = strint.pwr(base+"",exponent+"");

    if(re + "" !== re_str)
    {
      console.log(`i = ${i}`);
      console.log(`${base} : Exponent = ${exponent}`);
      console.log(`Math.pow = ${re} : strint.pwr = ${re_str}`);
    }

  }

}
catch (e)
{
  console.log(e);
}
