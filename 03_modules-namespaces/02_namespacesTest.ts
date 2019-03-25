import EmailValidator = Validation.EmailValidator
import UrlValidator = Validation.UrlValidator

let emails = [
   'ronald@',
   'lpalas@email',
   'bfrag@email.com'
]

let urls = [
   'totaljerkface.com',
   'www.fastcoding.com.br',
   'https:///randomurl.com'
]

emails.map(email => {
   console.log(`Email: ${email} | ${ EmailValidator.isValid(email) ? `Valid` : `Invalid` }`)
})

// Email: ronald@ | Invalid 
// Email: lpalas@email | Invalid 
// Email: bfrag@email.com | Valid 


urls.map(url => {
   console.log(`URL: ${url} | ${ UrlValidator.isValid(url) ? `Valid` : `Invalid` }`)
})

// URL: totaljerkface.com | Invalid
// URL: www.fastcoding.com.br | Valid
// URL: https:///randomurl.com | Invalid
