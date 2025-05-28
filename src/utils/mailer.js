import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.MY_EMAIL_HOST,
    pass: process.env.MAIL_SERVICE_PSW,
  },
});

const sendMailVerification = async (toEmail, verificationUrl) => {
  const rs = await transporter.sendMail({
    from: `"Hệ thống Shoe Shop" <${process.env.MY_EMAIL_HOST}>`,
    to: toEmail,
    subject: "Xác nhận tài khoản của bạn",
    html: `<p>Vui lòng nhấp vào <a href="${verificationUrl}">liên kết này</a> để xác nhận email của bạn.</p>`,
  });
  return rs;
};

const sendMailVerification_V2 = async (toEmail, verificationUrl) => {
  const rs = await transporter.sendMail({
    from: `"Hệ thống Shoe Shop [VKU]" <${process.env.MY_EMAIL_HOST}>`, 
    to: toEmail,
    subject: "XÁC NHẬN TÀI KHOẢN CỦA BẠN",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <h2 style="color: #007bff; text-align: center;">Xác nhận tài khoản Shoe Shop [VKU]</h2>
        <p style="font-size: 16px; line-height: 1.5;">
          Xin chào,
        </p>
        <p style="font-size: 16px; line-height: 1.5;">
          Cảm ơn bạn đã đăng ký tài khoản tại Shoe Shop [VKU]. Vui lòng nhấp vào nút dưới đây để xác nhận email của bạn và hoàn tất quá trình đăng ký:
        </p>
        <div style="text-align: center; margin: 20px 0;">
          <a href="${verificationUrl}" style="display: inline-block; padding: 12px 24px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 5px; font-size: 16px; font-weight: bold;">
            Xác nhận Email
          </a>
        </div>
        <p style="font-size: 16px; line-height: 1.5;">
          Nếu nút trên không hoạt động, bạn có thể sao chép và dán liên kết sau vào trình duyệt:
          <br>
          <a href="${verificationUrl}" style="color: #007bff; word-break: break-all;">${verificationUrl}</a>
        </p>
        <p style="font-size: 16px; line-height: 1.5; margin-top: 20px;">
          <strong>Cảm ơn bạn</strong> đã lựa chọn Shoe Shop [VKU]. Chúng tôi rất mong được phục vụ bạn!
        </p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 14px; line-height: 1.5; color: #666; text-align: center;">
          Trân trọng,<br>
          <strong>Đội ngũ Shoe Shop [VKU]</strong><br>
          <a href="https://shoeshop-vku.com" style="color: #007bff; text-decoration: none;">shoeshop-vku.com</a>
        </p>
      </div>
    `,
  });
  return rs;
};

export default transporter;
export { sendMailVerification, sendMailVerification_V2 };