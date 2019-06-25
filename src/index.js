import '@babel/polyfill/noConflict'
import server from './server'

server.start({port:process.env.PORT || 5000},() => {
    console.log('The server is up!')
})