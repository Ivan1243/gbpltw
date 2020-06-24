const express = require('express')
const app = express()
const port = 3000

app.use(express.static('img'))

app.get('/', (request, response) => {
    response.send('Hello!')
})

function test() {
    console.log('test');
}

app.get('/123', (request, response) => {
    response.send( '<script> function clicked() {' + 
                  'var status = 0; ' + 
                  'for(var ind = 0; ind < 5; ind++) {' +
                  'setTimeout( function timer(){' +
                  'status = 1 - status; ' +
                  'alert(status); ' +
                  '}, ind*2000 );' +
                  '}' +
                  'document.getElementsByName("abc")[0].style.color="white";' +
                  '}' +
    '</script>' +              
    '<style type="text/css">' +
   'TABLE {' +
    'width: 300px;' +
   ' border: 1px solid black; ' +
   ' border-bottom: none; ' +
  ' }' +
   'TD {' +          
   ' border-bottom: 1px solid black;' +
  ' }' +
'</style>' +
'<table>' +
'<tr name = "abc" onclick ="clicked()" bgcolor="lightblue">' +
'<td>бабочка</td>' +
'</tr>' +
'<tr>' +
'<td name = "img" onclick = "img()"><img src="img_w.jpg" alt="butterfly"></td>' +
'</tr>' +
'</table>' )
});


app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})