#TCValidator

#### Node JS için TC kimlik bilgileri doğrulama araçı.

## Kullanımı
```
npm install @abdurrahmana/tcvalidator
```
```
const validator = require('@abdurrahmana/tcvalidator')

validator.validate(11111111111,'Abdurrahman','Aydın',1900).then((result)=>{
    console.log(result) // true or false
})
```
