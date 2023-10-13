const express = require ('express');
// const satelize = require('satelize');
const cors = require('cors');
const ipRouter = require('./routes/router');

app = express();


app.use(express.static('./public'));
app.use(cors());


app.use(ipRouter);

//console.log(ipd.latitude);


// app.get('/ip',(req,res) => {
//     console.log(req.ip);
// });

// app.get('/api/v1',(req,res) => {
//     const ipd = satelize.satelize({ip: '119.82.114.82' },(err,ipdetails) => {
//         if(err) res.status(404).send('error');//later
//         return ipdetails;
//         })
//     res.send(ipd);
// });

//server
port =3000;
app.listen(port,'127.0.0.1',()=>{
    console.log('server running');
});