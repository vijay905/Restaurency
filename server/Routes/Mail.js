const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const router = require('express').Router();

router.post('/send', async(req,res)=>{

    // const OAuth2Client = new google.auth.OAuth2(process.env.clientId,process.env.clientSecret,process.env.redirectURI)
    // OAuth2Client.setCredentials({refresh_token:process.env.refreshToken})

   

    // const accessToken = await OAuth2Client.getAccessToken();

    let mailTransporter = nodemailer.createTransport({
        // service: 'gmail',

        host: 'smtp.123-reg.co.in',
        port :587,

        auth: {
            // type: 'OAuth2',
            user: process.env.acc_gmail,
            pass: process.env.acc_pass,
            // clientId: process.env.clientId,
            // clientSecret: process.env.clientSecret,
            // refreshToken: process.env.refreshtoken,
            // accessToken: accessToken
        }
    });

    let mailDetails = {
        from: req.body.email,
        to: process.env.acc_gmail,
        subject:req.body.subject,
        
        
        html:   `<h2>Mail From ${req.body.name}</h2>
                <p>${req.body.message}<p>
                <p>Click Here to Reply:- ${req.body.email}<p>`
    };

   

    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log(err );
            console.log('Error Occurs');
            res.send({
                Status:'Error'
            })
        } else {
            console.log('Email sent successfully');
            res.send({
                Status:"SucessFully"
            })
        }
    });
   

})

module.exports = router;