# 🎓 Hệ Thống Thi Trắc Nghiệm — Đoàn TNCS Hồ Chí Minh

Website thi trắc nghiệm hoàn chỉnh, chạy thuần HTML/CSS/JS, không cần backend.

## 📁 Cấu Trúc File

```
quiz-system/
├── index.html       ← File chính, mở trực tiếp bằng trình duyệt
├── questions.js     ← Ngân hàng 200 câu hỏi
└── README.md        ← Hướng dẫn này
```

---

## 🚀 Cách Chạy Nhanh

### Cách 1: Mở trực tiếp (Đơn giản nhất)
```
Chỉ cần mở file index.html bằng Chrome/Edge/Firefox
```

### Cách 2: Deploy lên GitHub Pages (Khuyến nghị cho hội trường)
1. Tạo repo mới trên GitHub
2. Upload 2 file: `index.html` và `questions.js`
3. Vào Settings → Pages → chọn branch `main`
4. Truy cập URL: `https://tenban.github.io/ten-repo`

---

## ⚙️ Cấu Hình Bài Thi

Mở `index.html`, tìm phần `CONFIG` (khoảng dòng 550):

```javascript
const CONFIG = {
  NUM_QUESTIONS: 20,      // Số câu mỗi bài thi
  TIME_MINUTES:  15,      // Phút làm bài
  PASS_SCORE:    10,      // Điểm đạt (trên 20)
  ALLOW_CHANGE:  true,    // true = cho phép đổi đáp án

  SHEET_URL: 'YOUR_URL_HERE',  // URL Google Sheets Web App
  SEND_TO_SHEET: false,        // Đặt true khi đã cấu hình
};
```

---

## 📊 Kết Nối Google Sheets (Lưu Kết Quả Thi)

### Bước 1: Tạo Google Sheets
1. Vào https://sheets.google.com → Tạo sheet mới
2. Thêm tiêu đề hàng 1:
   ```
   A1: Thời gian | B1: Họ tên | C1: Chức vụ | D1: Đơn vị | E1: SĐT | F1: Điểm | G1: Kết quả | H1: Đúng | I1: Sai | J1: Bỏ
   ```

### Bước 2: Tạo Apps Script
1. Extensions → Apps Script
2. Xóa hết, dán code này:

```javascript
function doGet(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheets()[0];
  const p = e.parameter;
  sheet.appendRow([
    p.time, p.name, p.title, p.unit, p.phone,
    p.score + '/' + p.total, p.passed,
    p.correct, p.wrong, p.skip
  ]);
  return ContentService.createTextOutput('OK');
}
```

### Bước 3: Deploy
1. Deploy → New deployment → Web App
2. Execute as: **Me** | Access: **Anyone**
3. Copy URL → dán vào `SHEET_URL` trong `index.html`
4. Đặt `SEND_TO_SHEET: true`

---

## ➕ Thêm/Sửa Câu Hỏi

Mở `questions.js`, thêm vào mảng `QUESTION_BANK`:

```javascript
{
  text: "Câu hỏi của bạn?",
  options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
  correct: 0   // 0=A, 1=B, 2=C, 3=D
},
```

---

## 🔒 Tính Năng Bảo Mật

| Tính năng | Trạng thái |
|-----------|------------|
| Chặn chuột phải, kéo thả, chọn text | ✅ |
| Chặn F1–F12 / DevTools | ✅ |
| Chặn Ctrl+U, Ctrl+S, Ctrl+P, Ctrl+A | ✅ |
| Chặn Ctrl+Shift+I/J/C/K | ✅ |
| Chặn PrintScreen + xoá clipboard | ✅ |
| Chặn Win+Shift+S (Snipping Tool) | ✅ |
| **Anti-camera moiré layer** (lòe ảnh chụp từ điện thoại) | ✅ |
| **Live watermark** chéo màn hình in tên thí sinh | ✅ |
| Phát hiện DevTools mở → ẩn nội dung | ✅ |
| Chặn Ctrl+P (in trang) | ✅ |
| Cảnh báo thoát tab — **3 lần tự nộp** | ✅ |
| Random 20/200 câu + xáo trộn đáp án | ✅ |
| Tự nộp khi hết giờ | ✅ |
| Phím tắt 1·2·3·4 chọn đáp án, ←→ chuyển câu | ✅ |

### 🛡️ Cơ chế chống chụp ảnh điện thoại
Hệ thống dùng 3 lớp chồng nhau:
1. **`#antiCamLayer`** — vân sọc 1px nháy ~20Hz với `mix-blend-mode: difference`. Mắt người không thấy nhưng cảm biến CMOS điện thoại sẽ tạo moiré/rolling-shutter → ảnh chụp bị sọc đen, lòe, mờ đục.
2. **`#antiCamLayer2`** — vân sọc dọc trượt chậm chồng lên bằng `overlay`.
3. **`#liveWatermark`** — 14 dòng watermark chéo in `Tên • SĐT • Đơn vị • KHÔNG CHỤP • Thời gian` — ảnh chụp nào cũng dính, rất khó xoá.

---

## 🎨 Tùy Chỉnh Giao Diện

Tìm phần `:root` trong `<style>` để đổi màu:
```css
--red:  #D0021B;    /* Màu đỏ chủ đạo */
--blue: #0047AB;    /* Màu xanh phụ */
--gold: #F5C518;    /* Màu vàng nhấn */
```

---

Made with ❤️ for Đoàn TNCS Hồ Chí Minh
