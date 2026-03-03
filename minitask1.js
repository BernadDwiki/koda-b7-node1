const moment = require("moment")

function dateConversion(tanggal){
    const isValid = moment(tanggal, 'DD-MM-YYYY', true).isValid();
    if(isValid){
        const tanggalBaru = moment(tanggal, "DD-MM-YYYY").format("DD/MM/YYYY")
        return tanggalBaru
    } else{
        return "Format Tanggal Salah"
    }
}

module.exports = dateConversion
