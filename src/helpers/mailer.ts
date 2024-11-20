import bcrypt from 'bcryptjs'
import User from '@/models/userModel'
import { dbconn } from '@/dbConfig/dbConfig'
import nodemailer from 'nodemailer'

dbconn()

export async function sendMail({ email, emailType, userId }: any) {
    const hashedToken = await bcrypt.hash(userId.toString(), 10);
    const currentTime = new Date();
    const expiryTime = new Date(currentTime.getTime() + (1 * 60 * 1000)); // 1 hour from now

    try {
        if (emailType === 'REST') {
            console.log("hashedToken" + hashedToken + "type: " + typeof(hashedToken))
            console.log("hashedToken" + expiryTime + "type: " + typeof(expiryTime))
            await User.findByIdAndUpdate(userId, {
                forgotpasswordToken: hashedToken,
                forgotpasswordTokenExpiry: expiryTime // Ensure this is a Date object
            },
            { new: true });
        } else if (emailType === 'VERIFY') {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpiry: expiryTime // Ensure this is a Date object
            });
        }
    } catch (error: any) {
        throw new Error(error.message);
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT as string, 10), // Cast as string and then parse
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    const mailOptions = { 
        from: process.env.SENDER_EMAIL,
        to: email,
        subject: emailType === 'REST' ? 'Reset Password' : 'Verify Email',
        html: `<p>Click <a href="http://localhost:3000/${emailType === 'REST' ? 'resetpassword' : 'verifyemail'}?token=${hashedToken}">here</a> to ${emailType === 'REST' ? 'reset your password' : 'verify your email'}</p>
               <p>http://localhost:3000/${emailType === 'REST' ? 'resetpassword' : 'verifyemail'}?token=${hashedToken}</p>`
    };
    
    console.log("mailOptions" + mailOptions)
    const emailResponse = await transport.sendMail(mailOptions);
    return emailResponse;
}
