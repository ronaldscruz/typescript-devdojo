import { EmailVerifier } from "./EmailVerifier";
import { UrlVerifier } from "./UrlVerifier";

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
   console.log(`Email: ${email} | ${ EmailVerifier.isValid(email) ? `Valid` : `Invalid` }`)
})

urls.map(url => {
   console.log(`URL: ${url} | ${ UrlVerifier.isValid(url) ? `Valid` : `Invalid` }`)
})
