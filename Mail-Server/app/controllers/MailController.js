const { transporter } = require('../config/NodeMailer')



const mailController=async (req, res) => {
    const userEnquiry = req.body
    //  console.log(userEnquiry)
    var obj = {
        status: 1,
        msg: 'Enquiry Submitted'
    }
    const info=await transporter.sendMail({
        from: `"Portflio" <${process.env.EMAIL}>`, // sender address
        to: process.env.EMAIL, // list of receivers
        subject: "Enquiry Message", // Subject line
        text: userEnquiry.subject, // plain text body
        html: ` <html>
                 <head>
                 <title>${userEnquiry.subject}</title>
                 </head>
                    <body>
                         <table border=1>
                          <thead>
                                <tr>
                                    <th>User Email</th>
                                     <td>${userEnquiry.email}</td>
                                </tr>
                                <tr>
                                    <th>Subject</th>
                                    <td>${userEnquiry.subject}</td>
                                </tr>
                                <tr>
                                    <th>Message</th>
                                     <td>${userEnquiry.message}</td>
                                </tr>
                            </thead>
                        </table>
                     </body>
                </html>
                       `, // html body  
    }).then(()=>{
        res.send(obj)
    })
    .catch(err=>{
       console.log(err)
    })
}

module.exports={mailController}