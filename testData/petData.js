const {UniqueGenerator} = require('../utils/UniqueGenerator.js')

function getPetData(){
    return{
   petName : UniqueGenerator.getFakeData('firstname')
    }

}
module.exports = {getPetData}




