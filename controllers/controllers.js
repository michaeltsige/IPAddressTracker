const satelize = require('satelize');


exports.sendIp = (req,res) => {
    const ipd = satelize.satelize({ip: '119.82.114.82' },(err,ipdetails) => {
        if(err) res.status(404).send('error');//later
        return ipdetails;
        });
    res.send(ipd);
}

exports.getIp = (req,res) => {
    console.log(req.ip);
}