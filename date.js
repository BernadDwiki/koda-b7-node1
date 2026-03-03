const moment = require("moment")
let regexStrip = /^\d{2}-\d{2}-\d{4}$/;

function dateConversion(tanggal){
    if(regexStrip.test(tanggal)){
        const tanggalBaru = moment(tanggal, "DD-MM-YYYY").format("DD/MM/YYYY")
        return tanggalBaru
    } else{
        return "Format Tanggal Salah"
    }
}

module.exports = dateConversion