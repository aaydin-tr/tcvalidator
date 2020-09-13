const tcValidator = require('./index')


tcValidator.validate(11111111111, 'Ali', 'Veli', 1900).then((result) => {
    console.log(result)
})

