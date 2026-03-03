let regexStrip = /^\d{2}-\d{2}-\d{4}$/;

function dateConversion(tanggal){
    let [day, month, year] = tanggal.split('-');
    if(regexStrip.test(tanggal)){
        let formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
    } else{
        return "Format Tanggal Salah"
    }
}

module.exports = dateConversion