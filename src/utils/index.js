import { copyRight } from "../config/utils.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*])[A-Za-z\d@#$%^&*]{6,}$/;

const saltRounds = 10;

const HTML_VERIFY_FAILED = `
        <!DOCTYPE html>
        <html lang="vi">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Lỗi xác nhận email</title>
        </head>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <h2 style="color: #dc3545; text-align: center;">Lỗi xác nhận email</h2>
          <p style="font-size: 16px; line-height: 1.5; text-align: center;">
            Bạn đã xác minh xong, vui lòng bỏ qua email này.
          </p>
          <div style="text-align: center; margin: 20px 0;">
            <a href="https://shoeshop-vku.com" style="display: inline-block; padding: 12px 24px; background-color: #dc3545; color: #ffffff; text-decoration: none; border-radius: 5px; font-size: 16px; font-weight: bold;">
              Quay lại trang chủ
            </a>
          </div>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 14px; line-height: 1.5; color: #666; text-align: center;">
            Trân trọng,<br>
            <strong>Đội ngũ Shoe Shop [VKU] - ${copyRight}</strong><br>
            <a href="https://shoeshop-vku.com" style="color: #007bff; text-decoration: none;">shoeshop-vku.com</a>
          </p>
        </body>
        </html>
      `;

const HTML_ORDER_SUCCESS = `
<!DOCTYPE html>
<html>
  <body style="font-family: Arial, sans-serif; line-height: 1.6;">
    <img src="https://vku.udn.vn/wp-content/uploads/2023/07/Logo.svg" alt="Shoe Shop Logo" style="width: 300px; margin-bottom: 20px;">
    <h1>Đơn hàng của bạn đã được xác nhận</h1>
    <h2>Shoe Shop VKU Cảm ơn bạn đã đặt hàng!</h2>
    <p><strong>Mã khách hàng:</strong> <span style="color: #555;">userId</span></p>

    <h3>Chi tiết đơn hàng:</h3>
    <table style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr>
          <th style="border: 1px solid #ddd; padding: 8px;">Sản phẩm</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Số lượng</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Đơn giá ($)</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Màu</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Size</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">
            VANS OLD SKOOL CLASSIC BLACK/WHITE
          </td>
          <td style="border: 1px solid #ddd; padding: 8px;">4</td>
          <td style="border: 1px solid #ddd; padding: 8px;">120</td>
          <td style="border: 1px solid #ddd; padding: 8px;">white</td>
          <td style="border: 1px solid #ddd; padding: 8px;">36, 38</td>
        </tr>
        <!-- Dòng hiển thị tổng tiền -->
        <tr>
          <td colspan="4" style="border: 1px solid #ddd; padding: 8px; text-align: right;"><strong>Tổng cộng:</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;"><strong>480 ₫</strong></td>
        </tr>
      </tbody>
    </table>

    <p style="margin-top: 20px;">
      Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với bộ phận chăm sóc khách hàng của chúng tôi.
    </p>

    <p style="color: #888;">Trân trọng,<br/>Đội ngũ cửa hàng</p>
  </body>
</html>

`;

export { emailRegex, passwordRegex, saltRounds, HTML_VERIFY_FAILED };
