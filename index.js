/* Bài 1
Mô hình 3 khối
- Đầu vào:
    + Nhập vào lương một ngày
    + Nhập vào số ngày làm
- Xử lý:
    + Ta dùng DOM truy xuất trực tiếp thông qua id "tinhLuong" của button bắt sự kiện onclick gán với hàm xử lý các sự kiện bên dưới
    + Tạo biến luongMotNgay (Dùng DOM truy xuất trực tiếp thông qua id "luongMotNgay" của thẻ input. Nhập lương một ngày
lấy value từ người dùng nhập vào gán vào biến)
    + Tạo biến soNgayLam (Dùng DOM truy xuất trực tiếp thông qua id "soNgayLam" của thẻ input. Số ngày làm lấy value từ người dùng
nhập vào gán vào biến)
    + Tạo biến tienLuong = 0
    + tienLuong = luongMotNgay * soNgayLam;
    + Ta dùng DOM truy xuất trực tiếp thông qua id "tienLuong" lấy value gán với biến tienLuong vừa tính bên trên để hiển thị kết
quả ra thẻ input
    + Ta dùng event ngăn load trang
- Đầu ra:
    + tienLuong = ? */

document.getElementById("tinhLuong").onclick = function (event) {
    event.preventDefault();
    var luongMotNgay = document.getElementById("luongMotNgay").value;
    var soNgayLam = document.getElementById("soNgayLam").value;
    var tienLuong = 0;
    tienLuong = luongMotNgay * soNgayLam;
    document.getElementById("tienLuong").value = "👉 " + tienLuong;
};


 /* Bài 2
Mô hình 3 khối
- Đầu vào:
  + Người dùng nhập vào số thứ 1
  + Người dùng nhập vào số thứ 2
  + Người dùng nhập vào số thứ 3
  + Người dùng nhập vào số thứ 4
  + Người dùng nhập vào số thứ 5
- Xử lý:
  + Ta dùng DOM truy xuất trực tiếp thông qua id "tinhTrungBinh" của button bắt sự kiện onclick gán với hàm để xử lý tiếp các sự kiện bên dưới
  + Tạo biến soThuNhat (Dùng DOM truy xuất trực tiếp thông qua id "soThuNhat" lấy value từ người dùng nhập vào gán vào biến) => ép kiểu qua number
  + Tạo biến soThuHai (Dùng DOM truy xuất trực tiếp thông qua id "soThuHai" lấy value từ người dùng nhập vào gán vào biến) => ép kiểu qua number
  + Tạo biến soThuBa (Dùng DOM truy xuất trực tiếp thông qua id "soThuBa" lấy value từ người dùng nhập vào gán vào biến) => ép kiểu qua number
  + Tạo biến soThuTu (Dùng DOM truy xuất trực tiếp thông qua id "soThuTu" lấy value từ người dùng nhập vào gán vào biến) => ép kiểu qua number
  + Tạo biến soThuNam (Dùng DOM truy xuất trực tiếp thông qua id "soThuNam" lấy value từ người dùng nhập vào gán vào biến) => ép kiểu qua number
  + Tạo biến trungBinh = 0
  + trungBInh = (soThuNhat + soThuHai + soThuBa +soThuTu + soThuNam) / 5;
  + Ta dùng DOM truy xuất trực tiếp thông qua id "trungBinh" của thẻ input lấy value gán với biến ketQua vừa tính bên trên để in kết quả ra
  + Ta dùng event chặn load trang
- Đầu ra:
  + trungBinh = ? */
  
document.getElementById("tinhTrungBinh").onclick = function (event) {
    event.preventDefault();
    var soThuNhat = Number(document.getElementById("soThuNhat").value);
    var soThuHai = Number(document.getElementById("soThuHai").value);
    var soThuBa = Number(document.getElementById("soThuBa").value);
    var soThuTu = Number(document.getElementById("soThuTu").value);
    var soThuNam = Number(document.getElementById("soThuNam").value);
    var trungBinh = 0;
    trungBinh = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;
    document.getElementById("trungBinh").value = "👉 " + trungBinh;
};

/* Bài 3
Mô hình 3 khối
-Đầu vào:
    + giá USD
    + Nhập vào số tiền USD
- Xử lý:
    + Tạo biến giaUSD = 23500
    + Dùng DOM truy xuất trực tiếp thông qua id "tinhTienQuyDoi" của button bắt sự kiện onclick gán cho hàm xử lý các sự kiện bên dưới)
    + Tạo biến soTienUSD (Dùng DOM truy xuất trực tiếp thông qua id "soTienUSD" lấy value do người dùng nhập vào gán vào biến vừa tạo)
    + Tạo biến soTienVND = 0
    + soTienVND = soTienUSD * 23500;
    + Ta dùng DOM truy xuất qua id "tienQuyDoi" lấy value gán với biến soTuenVND vừa tính => dùng thêm NumberFormat
- Đầu ra:
    + soTienVND = ? */

var giaUSD = 23500;
document.getElementById("tinhTienQuyDoi").onclick = function (event) {
    event.preventDefault();
    var soTienUSD = document.getElementById("soTienUSD").value;
    var soTienVND = 0;
    soTienVND = soTienUSD * 23500;
    document.getElementById("tienQuyDoi").value = "👉 " + new Intl.NumberFormat("vn-VN").format(soTienVND) + " VNĐ";
};

/* Bài 4
Mô hình 3 khối
- Đầu vào:
    + Nhập vào chiều dài
    + Nhập vào chiều rộng
- Xử lý:
    + Dùng DOM truy xuất trực tiếp thông qua id "tinhDTCV" của button bắt sự kiện onclick gán cho hàm xử lý các sự kiện bên dưới)
    + Tạo biến chieuDai (Dùng DOM truy xuất trực tiếp thông qua id "chieuDai" lấy value do người dùng nhâp vào gán vào biến vừa tạo) => ép kiểu number
    + Tạo biến chieuRong (Dùng DOM truy xuất trực tiếp thông qua id "chieuRong" lấy value do người dùng nhâp vào gán vào biến vừa tạo) => ép kiểu number
    + Tạo biến dienTichHCN = 0
    + Tạo biến chuViHCN = 0
    + dienTichHCN = chieuDai * chieuRong;
    + chuViHCM = (chieuDai + chieuRong) * 2;
    + Ta dùng DOM truy xuất thông qua id "ketQuaDTCV" lấy value gán với (dienTichHCN) và (chuViHCN) để xuất kết quả
    + Ta dùng event chặn load trang
- Đầu ra:
    + dienTichHCN = ?
    + chuViHCN = ? */

document.getElementById("tinhDTCV").onclick = function (event) {
    event.preventDefault();
    var chieuDai = Number(document.getElementById("chieuDai").value);
    var chieuRong = Number(document.getElementById("chieuRong").value);
    var dienTichHCN = 0;
    var chuViHCN = 0;
    dienTichHCN = chieuDai * chieuRong;
    chuViHCN = (chieuDai + chieuRong) * 2;
    document.getElementById("ketQuaDTCV").value = "👉 " + "Diện tích: " + dienTichHCN + " - " + ("Chu vi: " + chuViHCN);
};

/* Bài 5
Mô hình 3 khối
- Đầu vào:
+Nhập vào số có 2 chữ số
- Xử lý:
    + Ta dùng DOM truy xuất trực tiếp thông qua id "tinhTong2KySo" của button bắt sự kiện onclick gán cho hàm xử lý các sự kiện bên dưới)
    + Tạo biến soHangDV = 0
    + Tạo biến soHangChuc = 0
    + Tạo biến tong2KySo = 0
    + Tạo biến so2ChuSo (Dùng DOM truy xuất trực tiếp thông qua id "so2ChuSo" lấy value do người dùng nhâp vào gán vào biến vừa tạo) => ép kiểu number
    + soHangDV = so2ChuSo % 10;
    + soHangChuc = so2ChuSo / 10 => Làm tròn số;
    + tong2KySo = soHangDV + soHangChuc;
    + Ta dùng DOM truy xuất thông qua id "ketQuaTong2KySo" lấy value gán với biến tong2KySo để xuất kết quả
    + Ta dùng event chặn load trang
- Đầu ra:
    + tong2KySo = ? */

document.getElementById("tinhTong2KySo").onclick = function (event) {
    event.preventDefault();
    var soHangDV = 0;
    var soHangChuc = 0;
    var tong2KySo = 0;
    var so2ChuSo = Number(document.getElementById("so2ChuSo").value);
    soHangDV = so2ChuSo % 10;
    soHangChuc = Math.floor(so2ChuSo / 10);
    tong2KySo = soHangDV + soHangChuc;
    document.getElementById("ketQuaTong2KySo").value = "👉 " + tong2KySo;
};