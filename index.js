const e = require('express');

exports.validate = (tc, name, surname, yearOfBirth) => {
    return new Promise(
        function (resolve, reject) {

            const soap = require('soap');
            const URL = 'https://tckimlik.nvi.gov.tr/service/kpspublic.asmx?WSDL';

            const values = {
                TCKimlikNo: tc,
                Ad: name,
                Soyad: surname,
                DogumYili: yearOfBirth
            };

            soap.createClient(URL, (err, client) => {
                client.TCKimlikNoDogrula(values, (err, result) => {
                    if (result.TCKimlikNoDogrulaResult) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                });
            });

        }
    ).catch(err => {

    })
}



