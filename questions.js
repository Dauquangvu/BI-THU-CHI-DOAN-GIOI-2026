// ============================================================
// NGÂN HÀNG CÂU HỎI - ĐỀ CƯƠNG ÔN THI CÁN BỘ ĐOÀN GIỎI
// Cấu trúc: { text, options[4], correct (index 0-3) }
// ============================================================
const QUESTION_BANK = [
  // === CÂU HỎI VỀ ĐOÀN TNCS HỒ CHÍ MINH (1-21) ===
  {
    text: "Đoàn Thanh niên Cộng sản Hồ Chí Minh tổ chức và hoạt động theo nguyên tắc nào?",
    options: [
      "Hợp tác, bình đẳng, phối hợp và thống nhất hành động.",
      "Tập trung dân chủ.",
      "Hiệp thương dân chủ.",
      "Tự nguyện, tự quản."
    ],
    correct: 1
  },
  {
    text: "Độ tuổi đoàn viên là bao nhiêu?",
    options: ["15 - 30", "16 - 30", "18 - 35", "17 - 35"],
    correct: 1
  },
  {
    text: "Vai trò của cán bộ Đoàn là gì?",
    options: ["Chỉ huy", "Tham mưu, tổ chức phong trào", "Hậu cần", "Kỹ thuật"],
    correct: 1
  },
  {
    text: "Ngày truyền thống Thanh niên Quân đội là ngày nào?",
    options: ["22/12/1944", "2/9/1945", "08/02/1950", "26/3/1931"],
    correct: 2
  },
  {
    text: "Bài ca chính thức của Đoàn (Đoàn ca của Đoàn Thanh niên Cộng sản Hồ Chí Minh) có tên là gì?",
    options: [
      "Thanh niên làm theo lời Bác.",
      "Tiến lên đoàn viên.",
      "Tuổi trẻ thế hệ Bác Hồ.",
      "Lên đàng."
    ],
    correct: 0
  },
  {
    text: "Tác giả của bài Đoàn ca là ai?",
    options: ["Văn Cao.", "Lưu Hữu Phước.", "Hoàng Hà.", "Hoàng Hòa."],
    correct: 3
  },
  {
    text: "Những truyền thống của Đoàn Thanh niên Cộng sản Hồ Chí Minh là gì?",
    options: [
      "Truyền thống trung thành tuyệt đối với sự nghiệp cách mạng của Đảng, của dân tộc, kiên quyết phấn đấu vì độc lập, tự do, vì chủ nghĩa xã hội.",
      "Truyền thống không ngừng rèn luyện trong đấu tranh cách mạng, hoạt động thực tiễn để cống hiến nhiều nhất cho cách mạng và trưởng thành mau chóng về mọi mặt.",
      "Truyền thống của đội quân xung kích cách mạng nêu cao chủ nghĩa anh hùng cách mạng, đoàn kết Thanh niên cả nước vượt qua mọi khó khăn, gian khổ.",
      "Cả 3 câu trên đều đúng."
    ],
    correct: 3
  },
  {
    text: "Khi được thành lập, Đoàn Thanh niên Cộng sản Hồ Chí Minh có tên là gì?",
    options: [
      "Đoàn Thanh niên Cộng sản Việt Nam.",
      "Đoàn Thanh niên Cộng sản Đông Dương.",
      "Đoàn Thanh niên Phản đế Đông Dương.",
      "Đoàn Thanh niên Dân chủ Đông Dương."
    ],
    correct: 1
  },
  {
    text: "Những truyền thống của Đoàn Thanh niên Cộng sản Hồ Chí Minh là gì?",
    options: [
      "Truyền thống trung thành tuyệt đối với sự nghiệp cách mạng của Đảng, của dân tộc, kiên quyết phấn đấu vì độc lập, tự do, vì chủ nghĩa xã hội.",
      "Truyền thống không ngừng rèn luyện trong đấu tranh cách mạng, hoạt động thực tiễn để cống hiến nhiều nhất cho cách mạng.",
      "Truyền thống của đội quân xung kích cách mạng nêu cao chủ nghĩa anh hùng cách mạng, đoàn kết Thanh niên cả nước.",
      "Cả 3 câu trên đều đúng."
    ],
    correct: 3
  },
  {
    text: "Đoàn Thanh niên Lao động chính thức mang tên Đoàn Thanh niên Cộng sản Hồ Chí Minh tại đâu, thời điểm nào?",
    options: [
      "Đại hội Đảng toàn quốc lần thứ IV (12/1976).",
      "Hội nghị Ban Chấp hành Trung ương Đảng tháng 12/1976.",
      "Đại hội Đảng toàn quốc lần thứ IV (11/1980).",
      "Sau 30/4/1975, Ban Chấp hành Trung ương Đảng quyết định đổi tên."
    ],
    correct: 1
  },
  {
    text: "Từ năm nào Ban bí thư Trung ương Đảng chọn tháng 3 hằng năm làm \"Tháng Thanh niên\"?",
    options: ["Năm 2001.", "Năm 2002.", "Năm 2003.", "Năm 2004."],
    correct: 2
  },
  {
    text: "Đoàn Thanh niên từ khi thành lập cho đến nay đã đổi tên mấy lần?",
    options: ["5 lần.", "6 lần.", "7 lần.", "8 lần."],
    correct: 2
  },
  {
    text: "Tuổi kết nạp Thanh niên vào Đoàn TNCS Hồ Chí Minh theo Điều lệ hiện hành là?",
    options: [
      "Từ 15 tuổi - 30 tuổi.",
      "Từ đủ 15 tuổi - 30 tuổi.",
      "Từ 16 tuổi - 30 tuổi.",
      "Từ đủ 16 tuổi - 30 tuổi."
    ],
    correct: 2
  },
  {
    text: "Câu nói \"Đâu Đảng cần Thanh niên có, việc gì khó Thanh niên làm\" do Chủ tịch Hồ Chí Minh đến dự và phát biểu căn dặn Đoàn viên Thanh niên tại Đại hội Đại biểu toàn quốc lần thứ mấy của Đoàn?",
    options: ["Lần thứ hai.", "Lần thứ ba.", "Lần thứ tư.", "Lần thứ năm."],
    correct: 1
  },
  {
    text: "Cờ Đoàn được quy định cụ thể tại Điều lệ Đoàn Thanh niên Cộng sản Hồ Chí Minh (sửa đổi và bổ sung năm 2002) như thế nào?",
    options: [
      "Nền đỏ, hình chữ nhật, chiều rộng bằng 2/3 chiều dài, ở chính giữa có hình huy hiệu Đoàn, đường kính huy hiệu Đoàn là 30 cm.",
      "Nền đỏ, hình chữ nhật, chiều rộng bằng 2/3 chiều dài, ở chính giữa có hình huy hiệu Đoàn, đường kính huy hiệu Đoàn bằng 2/3 chiều rộng cờ.",
      "Nền đỏ, hình chữ nhật, chiều rộng bằng 2/3 chiều dài, ở chính giữa có hình huy hiệu Đoàn, đường kính huy hiệu Đoàn bằng 2/5 chiều rộng cờ.",
      "Tất cả đều sai."
    ],
    correct: 2
  },
  {
    text: "Bác Hồ dạy: \"Không có việc gì khó / Chỉ sợ lòng không bền / Đào núi và lấp biển / Quyết chí ắt làm nên\" ra đời trong dịp nào?",
    options: [
      "Ngày 20/3/1951 khi Bác Hồ đến thăm đơn vị Thanh niên xung phong.",
      "Ngày 21/3/1951 khi Bác Hồ đến thăm đơn vị Thanh niên xung phong.",
      "Ngày 20/3/1951 khi Bác Hồ đến thăm đơn vị Đoàn Thanh niên.",
      "Ngày 21/3/1951 khi Bác Hồ đến thăm đơn vị Đoàn Thanh niên."
    ],
    correct: 0
  },
  {
    text: "Đoàn Thanh niên Cộng sản Hồ Chí Minh có mấy chức năng?",
    options: ["4 chức năng.", "5 chức năng.", "6 chức năng.", "7 chức năng."],
    correct: 2
  },
  {
    text: "Đoàn Thanh niên từ khi thành lập cho đến nay đã trải qua mấy kỳ đại hội?",
    options: ["10 lần đại hội.", "11 lần đại hội.", "12 lần đại hội.", "13 lần đại hội."],
    correct: 2
  },
  {
    text: "Cơ quan lãnh đạo cao nhất của Đoàn TNCS Hồ Chí Minh?",
    options: [
      "Đại hội đại biểu Đoàn toàn quốc",
      "Ban Bí thư Trung ương Đoàn",
      "Ban Chấp hành Trung ương Đoàn",
      "Văn phòng Trung ương Đoàn"
    ],
    correct: 0
  },
  {
    text: "Điều lệ Đoàn quy định chế độ sinh hoạt của chi đoàn là:",
    options: [
      "Mỗi tuần một lần",
      "Mỗi tháng một lần",
      "Ba tháng một lần",
      "Mỗi học kỳ một lần"
    ],
    correct: 1
  },
  {
    text: "Theo Điều lệ Đoàn hiện hành, có bao nhiêu hình thức kỷ luật đối với cán bộ, đoàn viên?",
    options: ["Ba hình thức", "Bốn hình thức", "Năm hình thức", "Sáu hình thức"],
    correct: 1
  },

  // === CÂU HỎI VỀ HUẤN LUYỆN QUÂN SỰ (22-24) ===
  {
    text: "Có bao nhiêu quan điểm trong huấn luyện?",
    options: ["02", "03", "04", "05"],
    correct: 1
  },
  {
    text: "Quan điểm 3 trong huấn luyện là gì?",
    options: [
      "Phát huy Quân sự dân chủ, động viên tính tự giác, tích cực, chủ động, sáng tạo của người học, chống áp đặt, dập khuôn, máy móc.",
      "Lý luận liên hệ với thực tiễn, lý thuyết đi đôi với thực hành, lấy thực hành làm chính.",
      "Quá trình huấn luyện là quá trình truyền thụ kinh nghiệm chiến đấu và truyền thống tốt đẹp của dân tộc ta cho người học.",
      "Đáp án khác"
    ],
    correct: 2
  },
  {
    text: "Có mấy nguyên tắc trong huấn luyện?",
    options: ["05", "06", "07", "08"],
    correct: 3
  },

  // === CÂU HỎI VỀ ĐẠI HỘI ĐOÀN TNCS HCM QUÂN ĐỘI LẦN XI (25-43) ===
  {
    text: "Nội dung \"Tiên phong giữ gìn giá trị Bộ đội Cụ Hồ\" nhấn mạnh gì?",
    options: [
      "Phát triển kinh tế",
      "Hội nhập quốc tế",
      "Lan tỏa giá trị văn hóa truyền thống",
      "Tăng cường huấn luyện"
    ],
    correct: 2
  },
  {
    text: "\"Chiến sĩ số\" được hiểu là gì?",
    options: [
      "Người làm công tác kỹ thuật",
      "Người sử dụng máy tính",
      "Người làm chủ công nghệ, nền tảng số",
      "Người làm công tác truyền thông"
    ],
    correct: 2
  },
  {
    text: "Theo Thông tư 143/TT-BQP ngày 27/12/2023 của Bộ Quốc phòng về xử lý kỷ luật trong Quân đội nhân dân Việt Nam, có mấy hình thức kỷ luật đối với sĩ quan?",
    options: ["6", "8", "10", "12"],
    correct: 1
  },
  {
    text: "Theo Thông tư 143/TT-BQP ngày 27/12/2023 của Bộ Quốc phòng về xử lý kỷ luật trong Quân đội nhân dân Việt Nam, có mấy hình thức kỷ luật đối với HSQ-CS?",
    options: ["6", "7", "8", "9"],
    correct: 0
  },
  {
    text: "Yêu cầu \"2 kiên định, 2 đẩy mạnh, 2 ngăn ngừa\" và phương châm \"5 vững\" được xác định trong Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII theo yêu cầu của đồng chí nào?",
    options: [
      "Đồng chí Tổng Bí thư Tô Lâm",
      "Đồng chí Chủ tịch nước trong các chỉ đạo về quốc phòng",
      "Đồng chí Thủ tướng Chính phủ trong điều hành nhiệm vụ năm",
      "Đồng chí Bộ trưởng Bộ Quốc phòng trong chỉ đạo toàn quân"
    ],
    correct: 0
  },
  {
    text: "Nghị quyết QUTW về \"Nâng cao chất lượng huấn luyện giai đoạn 2023-2030 và những năm tiếp theo\" là Nghị quyết số bao nhiêu?",
    options: [
      "Nghị quyết số 1657-NQ/QUTW",
      "Nghị quyết số 1658-NQ/QUTW",
      "Nghị quyết số 1659-NQ/QUTW",
      "Nghị quyết số 1660-NQ/QUTW"
    ],
    correct: 2
  },
  {
    text: "Phương hướng chung công tác quần chúng LLVT Quân khu giai đoạn 2025-2030 là gì?",
    options: [
      "Tập trung huấn luyện quân sự, nâng cao đời sống cho bộ đội",
      "Quán triệt, triển khai hiệu quả nghị quyết, đổi mới nội dung, phương pháp, đẩy mạnh chuyển đổi số, nâng cao năng lực số",
      "Đẩy mạnh sản xuất, kinh doanh, phát triển kinh tế",
      "Tăng cường giao lưu quốc tế, mở rộng hợp tác, đối ngoại quốc phòng"
    ],
    correct: 1
  },
  {
    text: "Chỉ tiêu về bản lĩnh chính trị của cán bộ, đoàn viên Quân khu xác định là?",
    options: [
      "Có bản lĩnh tương đối vững vàng",
      "Có bản lĩnh tốt, chấp hành nhiệm vụ",
      "100% có bản lĩnh chính trị vững vàng, kiên định mục tiêu, lý tưởng độc lập dân tộc và chủ nghĩa xã hội, trung thành tuyệt đối với Đảng, Tổ quốc và Nhân dân",
      "Trên 90% có bản lĩnh chính trị"
    ],
    correct: 2
  },
  {
    text: "Khẩu hiệu hành động công tác quần chúng LLVT Quân khu giai đoạn 2025-2030 là gì?",
    options: [
      "Đoàn kết – Sáng tạo – Phát triển – Bền vững",
      "Tiên phong – Sáng tạo – Hội nhập – Phát triển",
      "Bản lĩnh, xung kích, sáng tạo làm chủ kỷ nguyên mới",
      "Đoàn kết – Đổi mới – Sáng tạo – Quyết thắng"
    ],
    correct: 2
  },
  {
    text: "Đại hội đại biểu Đoàn TNCS Hồ Chí Minh Quân đội lần thứ XI có ý nghĩa như thế nào?",
    options: [
      "Sự kiện chính trị quan trọng của tuổi trẻ Thanh niên cả nước",
      "Sự kiện chính trị có ý nghĩa sâu rộng trong Quân khu",
      "Sự kiện chính trị có ý nghĩa quan trọng, hội tụ trí tuệ, khát vọng tuổi trẻ Quân đội",
      "Sự kiện chính trị tiêu biểu của Thanh niên Việt Nam"
    ],
    correct: 2
  },
  {
    text: "Tại Đại hội đại biểu Đoàn TNCS Hồ Chí Minh Quân đội lần thứ XI, nhiệm vụ thứ tư mà Đại tướng Phan Văn Giang nhắc đến là:",
    options: [
      "Thanh niên Quân đội là lực lượng cơ bản, chủ yếu, đóng góp to lớn trong thực hiện nhiệm vụ huấn luyện, sẵn sàng chiến đấu.",
      "Thanh niên Quân đội đã hoàn thành xuất sắc trong thực hiện nhiệm vụ phòng, chống, khắc phục hậu quả thiên tai, dịch bệnh.",
      "Thanh niên Quân đội đóng góp chính trong phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số.",
      "Thanh niên Quân đội luôn đi đầu, đóng góp quan trọng trong lao động sản xuất, tham gia phát triển kinh tế - xã hội."
    ],
    correct: 3
  },
  {
    text: "Tại Đại hội đại biểu Đoàn TNCS Hồ Chí Minh Quân đội lần thứ XI, nhiệm vụ thứ năm mà Đại tướng Phan Văn Giang nhắc đến là:",
    options: [
      "Thanh niên Quân đội là lực lượng cơ bản, chủ yếu, đóng góp to lớn trong thực hiện nhiệm vụ huấn luyện, sẵn sàng chiến đấu.",
      "Thanh niên Quân đội đã tạo nên những ấn tượng mạnh trong tổ chức kỷ niệm các ngày lễ lớn của đất nước và một số sự kiện quốc tế.",
      "Thanh niên Quân đội tham gia tích cực, sáng tạo trong công tác đối ngoại quốc phòng.",
      "Thanh niên Quân đội luôn đi đầu, đóng góp quan trọng trong lao động sản xuất, tham gia phát triển kinh tế - xã hội."
    ],
    correct: 1
  },
  {
    text: "Đột phá thứ nhất được Đại hội đoàn TNCS Hồ Chí Minh Quân đội lần thứ XI xác định trong nhiệm kỳ tới là gì?",
    options: [
      "Thanh niên Quân đội luôn đi đầu, đóng góp quan trọng trong lao động sản xuất, tham gia phát triển kinh tế - xã hội.",
      "Đẩy mạnh nghiên cứu, phát triển, ứng dụng khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số.",
      "Xung kích thực hiện hiệu quả nhiệm vụ huấn luyện, đào tạo, sẵn sàng chiến đấu; xây dựng nền nếp chính quy, nâng cao ý thức chấp hành pháp luật, kỷ luật và bảo đảm an toàn.",
      "Tăng cường bồi dưỡng lý tưởng cách mạng, khát vọng cống hiến, nâng cao bản lĩnh chính trị cho cán bộ, ĐVTN góp phần xây dựng Quân đội cách mạng, chính quy, tinh nhuệ, hiện đại."
    ],
    correct: 3
  },
  {
    text: "Đột phá thứ hai được Đại hội đoàn TNCS Hồ Chí Minh Quân đội lần thứ XI xác định trong nhiệm kỳ tới là gì?",
    options: [
      "Thanh niên Quân đội luôn đi đầu, đóng góp quan trọng trong lao động sản xuất, tham gia phát triển kinh tế - xã hội.",
      "Đẩy mạnh nghiên cứu, phát triển, ứng dụng khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số.",
      "Xung kích thực hiện hiệu quả nhiệm vụ huấn luyện, đào tạo, sẵn sàng chiến đấu; xây dựng nền nếp chính quy, nâng cao ý thức chấp hành pháp luật, kỷ luật và bảo đảm an toàn.",
      "Tăng cường bồi dưỡng lý tưởng cách mạng, khát vọng cống hiến, nâng cao bản lĩnh chính trị cho cán bộ, ĐVTN."
    ],
    correct: 2
  },
  {
    text: "Tại Đại hội đại biểu Đoàn TNCS Hồ Chí Minh Quân đội lần thứ XI, phong trào nhiệm kỳ 2025-2030 được Đại tướng Phan Văn Giang nhắc đến là gì?",
    options: [
      "Thanh niên tiên phong phát triển",
      "Tuổi trẻ quyết thắng",
      "\"3 Tiên phong quyết thắng\"",
      "Thanh niên xung kích đổi mới"
    ],
    correct: 2
  },
  {
    text: "Nội dung thứ nhất của Phong trào \"3 Tiên phong quyết thắng\" tại Đại hội đại biểu Đoàn TNCS Hồ Chí Minh Quân đội lần thứ XI là gì?",
    options: [
      "Tiên phong phát triển kinh tế, xã hội",
      "Tiên phong đổi mới phương thức hoạt động",
      "Tiên phong xây dựng Quân đội cách mạng, chính quy, tinh nhuệ, hiện đại",
      "Tiên phong nâng cao chất lượng huấn luyện"
    ],
    correct: 2
  },
  {
    text: "Nội dung thứ hai của Phong trào \"3 Tiên phong quyết thắng\" tại Đại hội đại biểu Đoàn TNCS Hồ Chí Minh Quân đội lần thứ XI là gì?",
    options: [
      "Tiên phong phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số",
      "Tiên phong đổi mới phương thức hoạt động",
      "Tiên phong xây dựng Quân đội cách mạng, chính quy, tinh nhuệ, hiện đại",
      "Tiên phong nâng cao chất lượng huấn luyện"
    ],
    correct: 0
  },
  {
    text: "Nội dung thứ ba của Phong trào \"3 Tiên phong quyết thắng\" tại Đại hội đại biểu Đoàn TNCS Hồ Chí Minh Quân đội lần thứ XI là gì?",
    options: [
      "Tiên phong phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số",
      "Tiên phong giữ gìn, phát huy giá trị văn hóa \"Bộ đội Cụ Hồ\" thời kỳ mới",
      "Tiên phong xây dựng Quân đội cách mạng, chính quy, tinh nhuệ, hiện đại",
      "Tiên phong nâng cao chất lượng huấn luyện"
    ],
    correct: 1
  },
  {
    text: "Khẩu hiệu hành động được Đại hội đại biểu Đoàn TNCS Hồ Chí Minh Quân đội lần thứ XI xác định là gì?",
    options: [
      "Thanh niên Quân đội \"Dũng cảm, tiên phong, đột phá, quyết thắng\".",
      "Thanh niên Quân đội \"Bản lĩnh, tiên phong, sáng tạo, phát triển\".",
      "Thanh niên Quân đội \"Bản lĩnh, tiên phong, đột phá, phát triển\".",
      "Thanh niên Quân đội \"Dũng cảm, tiên phong, đột phá, phát triển\"."
    ],
    correct: 2
  },

  // === CÂU HỎI VỀ CHỈ THỊ 05-CT/TW VÀ HỌC TẬP BÁC HỒ (44-48) ===
  {
    text: "Chỉ thị số 05-CT/TW ngày 15/5/2016 của Bộ Chính trị xác định: Phải làm cho tư tưởng, đạo đức, phong cách của Hồ Chí Minh thật sự trở thành...?",
    options: [
      "Nền tảng tinh thần vững chắc của đời sống xã hội.",
      "Công việc thường xuyên của cấp uỷ, tổ chức đảng, chính quyền, mặt trận Tổ quốc Việt Nam và tổ chức chính trị - xã hội các cấp.",
      "Việc làm tự giác của mỗi cán bộ, đảng viên.",
      "Nền tảng tinh thần vững chắc của Đảng, Quân đội và toàn dân."
    ],
    correct: 0
  },
  {
    text: "Đảng ta xác định thời gian thực hiện Chỉ thị số 05-CT/TW ngày 15/5/2016 của Bộ Chính trị như thế nào?",
    options: [
      "Không giới hạn thời gian.",
      "Từ năm 2016 - 2020.",
      "Từ năm 2016 - 2030.",
      "Trong nhiệm kỳ Đại hội XII."
    ],
    correct: 0
  },
  {
    text: "Việc học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh đặt dưới sự chỉ đạo của tổ chức nào?",
    options: [
      "Do người chỉ huy cơ quan, đơn vị trực tiếp tổ chức chỉ đạo thực hiện.",
      "Do cấp ủy các cấp, trực tiếp là ban thường vụ cấp ủy, đồng chí bí thư cấp ủy chỉ đạo.",
      "Do lãnh đạo, chỉ huy của cơ quan, đơn vị trực tiếp chỉ đạo, tổ chức thực hiện.",
      "Cả a, b, và c."
    ],
    correct: 1
  },
  {
    text: "Theo Chỉ thị số 87-CT/QUTW việc xây dựng, hoàn thiện, ban hành và thực hiện hệ thống tiêu chí học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh theo phương châm nào?",
    options: [
      "Ngắn gọn, dễ nhớ, dễ thực hiện và dễ đánh giá kết quả.",
      "Ngắn gọn, dễ nhớ, dễ thực hiện và dễ kiểm tra đánh giá kết quả.",
      "Ngắn gọn, dễ nhớ, dễ thực hiện phê bình và phê bình, gắn với khắc phục khâu yếu, mặt yếu.",
      "Sát chức năng, nhiệm vụ, ngắn gọn, dễ nhớ, dễ thực hiện và dễ đánh giá kết quả."
    ],
    correct: 3
  },
  {
    text: "Theo Chỉ thị số 87-CT/QUTW việc lãnh đạo, chỉ đạo việc học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh theo phương châm nào?",
    options: [
      "Trên trước, dưới sau; ngoài trước, trong sau; học tập đi đôi với làm theo gắn với chức năng, chức trách, nhiệm vụ.",
      "Trên trước, dưới sau; trong trước, ngoài sau; học tập đi đôi với làm theo gắn với chức năng, chức trách, nhiệm vụ.",
      "Trên trước, dưới sau; trong trước, ngoài sau; học tập đi đôi với làm theo, chú trọng việc làm theo thông qua hoạt động hằng ngày.",
      "Trên trước, dưới sau; trong trước, ngoài sau; học tập đi đôi với làm theo, chú trọng việc làm theo bằng hành động cụ thể."
    ],
    correct: 3
  },

  // === CÂU HỎI VỀ CỜ ĐOÀN VÀ ĐẠI HỘI ĐẢNG BỘ QUÂN KHU (49-56) ===
  {
    text: "Cờ Đoàn được Điều lệ Đoàn hiện hành quy định:",
    options: [
      "Nền đỏ, hình chữ nhật, chiều rộng bằng 2/3 chiều dài, ở chính giữa có hình huy hiệu Đoàn, đường kính huy hiệu Đoàn là 30 cm",
      "Nền đỏ, hình chữ nhật, chiều rộng bằng 2/3 chiều dài, ở chính giữa có hình huy hiệu Đoàn, đường kính huy hiệu Đoàn bằng 2/3 chiều rộng cờ",
      "Nền đỏ, hình chữ nhật, chiều rộng bằng 2/3 chiều dài, ở chính giữa có hình huy hiệu Đoàn, đường kính huy hiệu Đoàn bằng 2/5 chiều rộng cờ",
      "Nền đỏ, hình chữ nhật, chiều rộng bằng 2/3 chiều dài, ở chính giữa có hình huy hiệu Đoàn, đường kính huy hiệu Đoàn bằng 1/2 chiều rộng cờ"
    ],
    correct: 2
  },
  {
    text: "Phương châm Đại hội đại biểu Đảng bộ Quân khu lần thứ XII là gì?",
    options: [
      "\"Đoàn kết - Dân chủ - Kỷ cương - Đổi mới - Phát triển\"",
      "\"Đoàn kết - Kỷ cương - Dân chủ - Đổi mới - Phát triển\"",
      "\"Dân chủ - Đoàn kết - Kỷ cương - Đổi mới - Phát triển\"",
      "Không có đáp án đúng"
    ],
    correct: 0
  },
  {
    text: "Chủ đề Đại hội đại biểu Đảng bộ Quân khu lần thứ XII là gì?",
    options: [
      "Phát huy truyền thống Quân khu 4 anh hùng, xây dựng Đảng bộ trong sạch, vững mạnh, LLVT Quân khu tinh, gọn, mạnh; phòng thủ toàn quân vững chắc, quốc phòng toàn dân vững mạnh.",
      "Phát huy truyền thống Quân khu 4 anh hùng, xây dựng Đảng bộ trong sạch, vững mạnh, LLVT Quân khu chính quy, hiện đại; phòng thủ Quân khu vững chắc, quốc phòng toàn dân vững mạnh.",
      "Phát huy truyền thống Quân khu 4 anh hùng, xây dựng Đảng bộ trong sạch, vững mạnh, LLVT Quân khu tinh, gọn, mạnh; phòng thủ Quân khu vững chắc, quốc phòng toàn dân vững mạnh, góp phần thực hiện thắng lợi nhiệm vụ xây dựng và bảo vệ vững chắc Tổ quốc Việt Nam xã hội chủ nghĩa.",
      "Không có đáp án đúng"
    ],
    correct: 2
  },
  {
    text: "Phương châm Đại hội Đảng bộ Quân đội lần thứ XII, nhiệm kỳ 2025-2030",
    options: [
      "Dân chủ - Đoàn kết - Kỷ cương - Đột phá - Phát triển",
      "Đoàn kết - Dân chủ - Kỷ cương - Kiên định - Đột phá - Phát triển",
      "Dân chủ - Đoàn kết - Kiên định - Kỷ cương - Đột phá - Phát triển",
      "Không có đáp án đúng"
    ],
    correct: 1
  },
  {
    text: "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định phương hướng như thế nào?",
    options: [
      "Quán triệt sâu sắc đường lối, quan điểm của Nhà nước về quân sự, quốc phòng, bảo vệ Tổ quốc trong tình hình mới...",
      "Quán triệt sâu sắc chỉ đạo của đồng chí Tổng Bí thư về \"2 kiên định, 2 đẩy mạnh, 2 ngăn ngừa\"; giữ vững và tăng cường sự lãnh đạo tuyệt đối, trực tiếp về mọi mặt của Đảng...",
      "Quán triệt sâu sắc đường lối, quan điểm của Đảng về quân sự, quốc phòng, bảo vệ Tổ quốc trong tình hình mới, các quyết sách chiến lược về phát triển đất nước và chỉ đạo của đồng chí Tổng Bí thư về \"2 kiên định, 2 đẩy mạnh, 2 ngăn ngừa\"...",
      "Không có đáp án đúng"
    ],
    correct: 2
  },
  {
    text: "Một trong các mục tiêu chủ yếu được xác định trong Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII?",
    options: [
      "Phát triển, ứng dụng khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số trong Quân đội đến năm 2030 thuộc nhóm dẫn đầu quốc gia, một số lĩnh vực đạt trình độ quốc tế; thu hút, trọng dụng nhân tài đáp ứng yêu cầu xây dựng Quân đội cách mạng, chính quy, tinh nhuệ, hiện đại.",
      "Phát triển, ứng dụng khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số trong Quân đội đến năm 2030 thuộc nhóm dẫn đầu quốc gia; thu hút, trọng dụng nhân tài đáp ứng yêu cầu xây dựng Quân đội cách mạng, chính quy, tinh nhuệ, từng bước hiện đại.",
      "Phát triển, ứng dụng khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số trong Quân đội đến năm 2035 thuộc nhóm dẫn đầu quốc gia...",
      "Không có đáp án đúng"
    ],
    correct: 0
  },
  {
    text: "Một trong các đột phá được xác định trong Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII?",
    options: [
      "Hoàn thiện đồng bộ thể chế xây dựng Đảng bộ; huy động hiệu quả các nguồn lực xây dựng Quân đội cách mạng, chính quy, tinh nhuệ, hiện đại.",
      "Hoàn thiện đồng bộ thể chế quân sự, quốc phòng; huy động hiệu quả các nguồn lực xây dựng Quân đội cách mạng, chính quy, tinh nhuệ, hiện đại hóa.",
      "Hoàn thiện đồng bộ thể chế quân sự, quốc phòng; huy động hiệu quả các nguồn lực xây dựng Quân đội cách mạng, chính quy, tinh nhuệ, hiện đại.",
      "Không có đáp án đúng"
    ],
    correct: 2
  },
  {
    text: "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định bao nhiêu giải pháp lãnh đạo thực hiện nhiệm vụ quân sự, quốc phòng?",
    options: ["10", "11", "12", "9"],
    correct: 0
  },
  {
    text: "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định bao nhiêu giải pháp lãnh đạo xây dựng Đảng bộ Quân đội trong sạch vững mạnh mẫu mực, tiêu biểu, có năng lực lãnh đạo, sức chiến đấu cao?",
    options: ["7", "8", "9", "6"],
    correct: 0
  },

  // === CÂU HỎI VỀ ĐẠI HỘI XIV CỦA ĐẢNG (58-75) ===
  {
    text: "Chủ đề Đại hội đại biểu toàn quốc lần thứ XIV của Đảng là gì?",
    options: [
      "Dưới Cờ Đảng, chung sức, đồng lòng thực hiện thắng lợi các mục tiêu phát triển đất nước đến năm 2030; tự chủ chiến lược, tự cường, tự tin, tiến mạnh trong kỷ nguyên vươn mình của dân tộc vì độc lập, hoà bình, dân chủ, giàu mạnh, phồn vinh, văn minh, hạnh phúc, vững bước đi lên chủ nghĩa xã hội.",
      "Dưới lá cờ vẻ vang của Đảng, chung sức, đồng lòng thực hiện thắng lợi các mục tiêu phát triển đất nước đến năm 2030; tự chủ chiến lược, tự cường, tự tin, tiến mạnh trong kỷ nguyên vươn mình của dân tộc vì hoà bình, độc lập, dân chủ, giàu mạnh, phồn vinh, văn minh, hạnh phúc, vững bước đi lên chủ nghĩa xã hội.",
      "Dưới lá cờ vẻ vang của Đảng, chung sức, đồng lòng thực hiện thắng lợi các mục tiêu phát triển đất nước đến năm 2035; tự chủ chiến lược, tự cường, tự tin, tiến mạnh trong kỷ nguyên vươn mình của dân tộc...",
      "Không có đáp án đúng"
    ],
    correct: 1
  },
  {
    text: "Đại hội đại biểu toàn quốc lần thứ XIV của Đảng đã bầu bao nhiêu Uỷ viên Ban chấp hành Trung ương?",
    options: [
      "200 ủy viên, trong đó có 180 ủy viên chính thức, 20 ủy viên dự khuyết.",
      "180 ủy viên, trong đó có 160 ủy viên chính thức, 20 ủy viên dự khuyết.",
      "200 ủy viên, trong đó có 190 ủy viên chính thức, 10 ủy viên dự khuyết.",
      "190 ủy viên, trong đó có 170 ủy viên chính thức, 20 ủy viên dự khuyết."
    ],
    correct: 0
  },
  {
    text: "Đồng chí nào giữ chức vụ Bí thư Quân ủy Trung ương khóa XII?",
    options: [
      "Đại tướng Phan Văn Giang",
      "Đại tướng Nguyễn Trọng Nghĩa",
      "Tổng bí thư Tô Lâm",
      "Đại tướng Lương Cường"
    ],
    correct: 2
  },
  {
    text: "Một số chỉ tiêu chủ yếu về kinh tế giai đoạn 2026-2030 được xác định trong Nghị quyết Đại hội đại biểu lần thứ XIV của Đảng?",
    options: [
      "Phấn đấu đạt tốc độ tăng trưởng GDP bình quân giai đoạn 2026-2030 từ 8%/năm trở lên; GDP bình quân đầu người đến năm 2030 đạt khoảng 8.000 USD.",
      "Phấn đấu đạt tốc độ tăng trưởng GDP bình quân giai đoạn 2026-2030 từ 10%/năm trở lên; GDP bình quân đầu người đến năm 2030 đạt khoảng 8.500 USD.",
      "Phấn đấu đạt tốc độ tăng trưởng GDP bình quân giai đoạn 2026-2030 từ 2%/năm trở lên; GDP bình quân đầu người đến năm 2030 đạt khoảng 9.000 USD.",
      "Phấn đấu đạt tốc độ tăng trưởng GDP bình quân giai đoạn 2026-2030 từ 7%/năm trở lên; GDP bình quân đầu người đến năm 2030 đạt khoảng 7.500 USD."
    ],
    correct: 1
  },
  {
    text: "Bộ Chính trị khóa XIV gồm bao nhiêu đồng chí?",
    options: [
      "19 đồng chí, trong đó có 10 đồng chí Ủy viên Bộ Chính trị khoá XIII tái cử và 9 đồng chí lần đầu tham gia.",
      "18 đồng chí, trong đó có 9 đồng chí Ủy viên Bộ Chính trị khoá XIII tái cử và 9 đồng chí lần đầu tham gia.",
      "17 đồng chí, trong đó có 8 đồng chí Ủy viên Bộ Chính trị khoá XIII tái cử và 9 đồng chí lần đầu tham gia.",
      "20 đồng chí, trong đó có 11 đồng chí Ủy viên Bộ Chính trị khoá XIII tái cử."
    ],
    correct: 0
  },
  {
    text: "Một trong các quan điểm chỉ đạo được xác định trong Nghị quyết Đại hội đại biểu toàn quốc lần thứ XIV của Đảng?",
    options: [
      "Phát huy sức mạnh, bản lĩnh, trí tuệ của con người, khối đại đoàn kết toàn dân tộc và thế trận lòng dân; kết hợp sức mạnh dân tộc với sức mạnh thời đại; kiên quyết, kiên trì đấu tranh bảo vệ vững chắc độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ quốc gia; bảo vệ Tổ quốc từ sớm, từ xa...",
      "Phát huy sức mạnh, bản lĩnh, trí tuệ của con người Việt Nam, khối đại đoàn kết toàn dân tộc và thế trận lòng dân; kết hợp sức mạnh dân tộc với sức mạnh thời đại; kiên quyết, kiên trì đấu tranh bảo vệ vững chắc độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ quốc gia; bảo vệ Tổ quốc từ sớm, từ xa...",
      "Huy động sức mạnh, bản lĩnh, trí tuệ của con người Việt Nam, khối đại đoàn kết toàn dân tộc và thế trận lòng dân; kết hợp sức mạnh dân tộc với sức mạnh thời đại; kiên quyết, kiên trì đấu tranh bảo vệ vững chắc độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ quốc gia; bảo vệ Tổ quốc từ sớm, từ xa...",
      "Không có đáp án đúng"
    ],
    correct: 2
  },
  {
    text: "Báo cáo chính trị tại Đại hội XIV của Đảng xác định xây dựng Quân đội nhân dân, Công an nhân dân như thế nào?",
    options: [
      "Xây dựng Quân đội nhân dân, Công an nhân dân cách mạng, chính quy, tinh nhuệ, hiện đại, tuyệt đối trung thành với Tổ quốc, Nhà nước và Nhân dân, kiên định với mục tiêu, lý tưởng cách mạng của Nhà nước...",
      "Xây dựng Quân đội nhân dân, Công an nhân dân cách mạng, chính quy, tinh nhuệ, từng bước hiện đại, tuyệt đối trung thành với Tổ quốc, với Đảng, Nhà nước và Nhân dân, kiên định với mục tiêu, lý tưởng cách mạng của Đảng...",
      "Xây dựng Quân đội nhân dân, Công an nhân dân cách mạng, chính quy, tinh nhuệ, hiện đại, tuyệt đối trung thành với Tổ quốc, với Đảng, Nhà nước và Nhân dân, kiên định với mục tiêu, lý tưởng cách mạng của Đảng; bảo đảm chất lượng tổng hợp và sức mạnh chiến đấu cao, làm nòng cốt trong sự nghiệp quốc phòng, an ninh...",
      "Không có đáp án đúng"
    ],
    correct: 2
  },
  {
    text: "Báo cáo chính trị tại Đại hội XIV của Đảng xác định quyền làm chủ của Nhân dân như thế nào?",
    options: [
      "Xây dựng, hoàn thiện cơ chế, chính sách để thực hiện có hiệu quả quyền làm chủ của Nhân dân, thực hiện pháp luật về dân chủ ở cơ sở và phương châm \"Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát\"",
      "Xây dựng, hoàn thiện cơ chế, chính sách để thực hiện có hiệu quả quyền làm chủ của Nhân dân, thực hiện pháp luật về dân chủ ở cơ sở và phương châm \"Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng\".",
      "Xây dựng, hoàn thiện cơ chế, chính sách để thực hiện có hiệu quả quyền làm chủ của Nhân dân, thực hiện pháp luật về dân chủ ở cơ sở và phương châm \"Dân biết, dân bàn, dân làm, dân kiểm tra, dân thụ hưởng\"",
      "Không có đáp án đúng"
    ],
    correct: 1
  },
  {
    text: "Báo cáo chính trị tại Đại hội XIV của Đảng xác định công tác xây dựng Đảng như thế nào?",
    options: [
      "Tăng cường xây dựng, chỉnh đốn, tự đổi mới để Nhà nước ta thật sự là đạo đức, là văn minh; nâng tầm và nâng cao hiệu lực, hiệu quả lãnh đạo, cầm quyền và sức chiến đấu của Nhà nước.",
      "Tăng cường xây dựng, chỉnh đốn, tự đổi mới để Đảng ta thật sự là đạo đức, là văn minh; nâng tầm và nâng cao hiệu lực, hiệu quả lãnh đạo, cầm quyền và sức chiến đấu của Đảng.",
      "Tăng cường xây dựng, chỉnh đốn, tự đổi mới để Đảng ta thật sự là là văn minh; nâng cao hiệu lực, hiệu quả lãnh đạo, cầm quyền và sức chiến đấu của Đảng.",
      "Không có đáp án đúng"
    ],
    correct: 1
  },
  {
    text: "Nghị quyết Đại hội XIV của Đảng định hướng phát triển khoa học công nghệ, chuyển đổi số trong nhiệm kỳ như thế nào?",
    options: [
      "Tập trung triển khai đột phá về khoa học, công nghệ, tạo nền tảng cho phát triển lực lượng sản xuất mới, hiện đại, ưu tiên phát triển một số ngành công nghiệp, công nghệ chiến lược, trọng tâm là chip bán dẫn, trí tuệ nhân tạo...",
      "Tập trung triển khai đột phá về công nghệ thông tin, đổi mới sáng tạo và chuyển đổi số, tạo nền tảng cho phát triển cơ sở sản xuất mới, hiện đại, ưu tiên phát triển một số ngành công nghiệp, công nghệ chiến lược, trọng tâm là chip bán dẫn, trí tuệ nhân tạo...",
      "Tập trung triển khai đột phá về khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số, tạo nền tảng cho phát triển lực lượng sản xuất mới, hiện đại, ưu tiên phát triển một số ngành công nghiệp, công nghệ chiến lược, trọng tâm là chip bán dẫn, trí tuệ nhân tạo; đẩy mạnh đào tạo, sử dụng nguồn nhân lực chất lượng cao...",
      "Không có đáp án đúng"
    ],
    correct: 2
  },
  {
    text: "Nghị quyết Đại hội XIV của Đảng xác định bao nhiêu đột phá chiến lược?",
    options: ["3", "4", "5", "2"],
    correct: 0
  },
  {
    text: "Báo cáo chính trị tại Đại hội XIV của Đảng xác định bao nhiêu bài học kinh nghiệm sau 40 năm đổi mới?",
    options: ["5", "6", "7", "4"],
    correct: 0
  },
  {
    text: "Một nội dung quan trọng trong đột phá chiến lược về nguồn nhân lực được xác định trong Nghị quyết Đại hội XIV của Đảng là gì?",
    options: [
      "Mở rộng đào tạo nghề",
      "Phát triển nguồn nhân lực chất lượng cao, thu hút và trọng dụng nhân tài",
      "Tăng thời gian đào tạo đại học",
      "Phổ cập giáo dục đại học"
    ],
    correct: 1
  },
  {
    text: "Nghị quyết Đại hội XIV của Đảng định hướng phát triển con người và văn hóa trong nhiệm kỳ như thế nào?",
    options: [
      "Phát triển nguồn lực sinh viên, phát triển văn hoá thực sự trở thành nền tảng tinh thần, sức mạnh nội sinh, động lực to lớn cho sự phát triển nhanh, bền vững của đất nước",
      "Phát triển nguồn lực học sinh, phát triển văn hoá thực sự trở thành nền tảng tinh thần, sức mạnh nội sinh, động lực to lớn cho sự phát triển nhanh, bền vững của đất nước",
      "Phát triển nguồn lực con người, phát triển văn hoá thực sự trở thành nền tảng tinh thần, sức mạnh nội sinh, động lực to lớn cho sự phát triển nhanh, bền vững của đất nước",
      "Không có đáp án đúng"
    ],
    correct: 2
  },
  {
    text: "Đại hội XIV, phấn đấu đến năm 2030 Việt Nam đạt mục tiêu nào sau đây?",
    options: [
      "Cơ bản không còn hộ nghèo và cơ bản miễn viện phí toàn dân",
      "Bảo đảm mỗi người dân có bảo hiểm y tế",
      "Tỉ lệ hộ nghèo còn khoảng 1,1%",
      "Không có đáp án đúng"
    ],
    correct: 0
  },
  {
    text: "\"2 đẩy mạnh\" được xác định trong Nghị quyết Đại hội Đảng bộ đại biểu Đảng bộ Quân đội lần thứ XII, là gì?",
    options: [
      "Đẩy mạnh kinh tế quốc phòng và đào tạo cán bộ",
      "Đẩy mạnh xây dựng Quân đội cách mạng, chính quy, tinh nhuệ, hiện đại; đẩy mạnh hội nhập quốc tế và đối ngoại quốc phòng",
      "Đẩy mạnh xây dựng Quân đội nhân dân hiện đại; Công nghiệp quốc phòng lưỡng dụng.",
      "Không có đáp án đúng"
    ],
    correct: 1
  },
  {
    text: "\"2 Ngăn ngừa\" được xác định trong Nghị quyết Đại hội Đảng bộ đại biểu Đảng bộ Quân đội lần thứ XII là gì?",
    options: [
      "Ngăn ngừa nguy cơ phi chính trị hóa Quân đội. Ngăn ngừa mọi biểu hiện suy thoái về tư tưởng chính trị, đạo đức, lối sống, \"tự diễn biến\", \"tự chuyển hóa\" trong Đảng bộ Quân đội và toàn quân",
      "Ngăn ngừa nguy cơ diễn biến hòa bình. Ngăn ngừa mọi biểu hiện suy thoái về tư tưởng chính trị, đạo đức, lối sống, \"tự diễn biến\", \"tự chuyển hóa\" trong Đảng bộ Quân đội và toàn quân",
      "Ngăn ngừa nguy cơ chiến tranh, xung đột. Ngăn ngừa mọi biểu hiện suy thoái về tư tưởng chính trị, đạo đức, lối sống, \"tự diễn biến\", \"tự chuyển hóa\" trong Đảng bộ Quân đội và toàn quân",
      "Không có đáp án đúng"
    ],
    correct: 2
  },
  {
    text: "\"2 kiên định\" được xác định trong Nghị quyết Đại hội Đảng bộ đại biểu Đảng bộ Quân đội lần thứ XII là gì?",
    options: [
      "Kiên định đường lối quân sự, quốc phòng của Đảng; kiên định xây dựng Quân đội vững mạnh về chính trị.",
      "Xây dựng Quân đội cách mạng, chính quy, tinh nhuệ, hiện đại; đẩy mạnh hội nhập quốc tế và đối ngoại quốc phòng",
      "Kiên định đường lối quân sự, quốc phòng của Nhà nước; kiên định xây dựng Quân đội vững mạnh về chính trị.",
      "Không có đáp án đúng"
    ],
    correct: 0
  },
  {
    text: "Chỉ đạo của Tổng Bí thư Tô Lâm về phương châm \"5 vững\" là gì?",
    options: [
      "\"Chính trị vững - Kỷ luật vững - Công nghệ vững - Nghệ thuật quân sự vững - Sức khỏe vững\"",
      "\"Chính trị vững - Kỷ luật vững - Công nghệ vững - Nghệ thuật quân sự vững - Đời sống bộ đội vững\"",
      "\"Chính trị vững - Kỷ luật vững - Công nghệ vững - Nghệ thuật quân sự vững - Hậu cần, kỹ thuật vững\"",
      "\"Chính trị vững - Kỷ luật vững - Huấn luyện vững - Nghệ thuật quân sự vững - Đời sống bộ đội vững\""
    ],
    correct: 1
  },

  // === CÂU HỎI VỀ ĐẠI HỘI ĐẢNG BỘ TRUNG ĐOÀN LẦN XXII (77-86) ===
  {
    text: "Đại hội Đại biểu Đảng bộ Trung đoàn lần thứ XXII diễn ra vào thời gian nào?",
    options: ["08 - 09/3/2025", "09 - 10/3/2025", "10 - 11/3/2025", "11 - 12/3/2025"],
    correct: 1
  },
  {
    text: "Một trong những mục tiêu chung trong Nghị quyết Đại hội Đại biểu Đảng bộ Trung đoàn lần thứ XXII, nhiệm kỳ 2025-2030 là gì?",
    options: [
      "Phát triển kinh tế địa phương",
      "Nâng cao chất lượng huấn luyện và khả năng SSCĐ",
      "Mở rộng hợp tác quốc tế",
      "Phát triển du lịch quân sự"
    ],
    correct: 1
  },
  {
    text: "Một trong các khâu đột phá được xác định trong Nghị quyết Đại hội Đại biểu Đảng bộ Trung đoàn lần thứ XXII là gì?",
    options: [
      "Chú trọng huấn luyện điều lệnh, bắn súng, chiến thuật",
      "Chất lượng huấn luyện, SSCĐ; xây dựng chính quy, quản lý kỷ luật",
      "Xây dựng doanh trại chính quy, xanh, sạch, đẹp",
      "Nâng cao chất lượng diễn tập"
    ],
    correct: 1
  },
  {
    text: "Một nội dung trong khâu đột phá thứ hai được xác định trong Nghị quyết Đại hội Đại biểu Đảng bộ Trung đoàn lần thứ XXII là gì?",
    options: [
      "Phát triển khoa học công nghệ",
      "Nâng cao đời sống bộ đội",
      "Năng lực lãnh đạo, sức chiến đấu của cấp ủy, chi bộ",
      "Mở rộng quan hệ đối ngoại"
    ],
    correct: 2
  },
  {
    text: "Nội dung nào dưới đây không thuộc các khâu đột phá của Nghị quyết Đại hội Đại biểu Đảng bộ Trung đoàn lần thứ XXII?",
    options: [
      "Xây dựng đội ngũ cán bộ, đảng viên",
      "Nâng cao chất lượng huấn luyện, SSCĐ",
      "Xây dựng doanh trại chính quy",
      "Xây dựng chính quy, quản lý kỷ luật"
    ],
    correct: 2
  },
  {
    text: "Chỉ tiêu vi phạm kỷ luật thông thường trong nhiệm kỳ 2025-2030 do Đại hội Đại biểu Đảng bộ Trung đoàn lần thứ XXII xác định phải dưới mức nào?",
    options: ["1%", "0,5%", "0,2%", "0,1%"],
    correct: 2
  },
  {
    text: "Nghị quyết Đại hội Đại biểu Đảng bộ Trung đoàn lần thứ XXII xác định tỷ lệ quân số khỏe của bộ đội phấn đấu đạt bao nhiêu trở lên?",
    options: ["95%", "96%", "97%", "98,5%"],
    correct: 3
  },
  {
    text: "Nghị quyết Đại hội Đại biểu Đảng bộ Trung đoàn lần thứ XXII xác định một trong những yêu cầu trong huấn luyện là gì?",
    options: [
      "Lý thuyết là chính",
      "Huấn luyện theo phong trào",
      "\"Cơ bản, thiết thực, vững chắc\"",
      "Đơn giản, dễ thực hiện"
    ],
    correct: 2
  },
  {
    text: "Nghị quyết Đại hội Đại biểu Đảng bộ Trung đoàn lần thứ XXII xác định tỷ lệ tổ chức đảng hoàn thành tốt và xuất sắc nhiệm vụ hằng năm là bao nhiêu?",
    options: ["Trên 80%", "Trên 85%", "Trên 90%", "100%"],
    correct: 2
  },
  {
    text: "Nghị quyết Đại hội Đại biểu Đảng bộ Trung đoàn lần thứ XXII xác định một trong những nhiệm vụ về công tác xây dựng Đảng là gì?",
    options: [
      "Phát triển đảng viên",
      "Đẩy mạnh xây dựng, chỉnh đốn Đảng",
      "Xây dựng đội ngũ đảng viên",
      "Phát triển kinh tế đơn vị"
    ],
    correct: 1
  }
];
