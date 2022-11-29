const input = require('readline-sync')

var masukkannilai = input.question('masukan nilai:')

if(isNaN(masukkannilai)){
}else{

    if(masukkannilai %2){
        console.log('GANJIL')
     }else{
        console.log('GENAP')
     }
    }