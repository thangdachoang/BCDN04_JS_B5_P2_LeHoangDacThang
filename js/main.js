//BT1

//Hàm main

function tienTienThue() {
  //Biến thuế suất
  const duoi60 = 0.05;
  const tren60Den120 = 0.1;
  const tren120Den210 = 0.15;
  const tren210Den384 = 0.2;
  const tren384Den624 = 0.25;
  const tren624Den960 = 0.3;
  const tren960 = 0.35;

  var name = document.getElementById("name").value;
  var thuNhamNam = Number(document.getElementById("thuNhapNam").value);
  var soNguoi = Number(document.getElementById("soNguoiPhuThuoc").value);
  var content = "";
  //Thu nhập chịu thuế
  var thuNhapThue = thuNhamNam - 4000000 - soNguoi * 1600000;
  if (
    tienThue(
      thuNhapThue,
      duoi60,
      tren60Den120,
      tren120Den210,
      tren210Den384,
      tren384Den624,
      tren624Den960,
      tren960
    ) !== 0
  ) {
    content =
      "Họ tên: " +
      name +
      "; Tiền thuế thu nhập cá nhân: " +
      tienThue(
        thuNhapThue,
        duoi60,
        tren60Den120,
        tren120Den210,
        tren210Den384,
        tren384Den624,
        tren624Den960,
        tren960
      ).toLocaleString() +
      " VND";
  } else {
    content = "Thông tin không chính xác!!";
  }
  document.getElementById("txtThue").innerHTML = content;
}
document.getElementById("btnTienThue").onclick = tienTienThue;

//hàm tính tiền thuế
// Cách tính tiền thuế giống bài grap nên có thể khác với kết quả của hưỡng dẫn

function tienThue(
  a,
  duoi60,
  tren60Den120,
  tren120Den210,
  tren210Den384,
  tren384Den624,
  tren624Den960,
  tren960
) {
  // a = thuNhapThue
  if (a > 0 && a <= 60e6) {
    return a * duoi60;
  } else if (a > 60e6 && a <= 120e6) {
    return 60e6 * duoi60 + (a - 60e6) * tren60Den120;
  } else if (a > 120e6 && a <= 210e6) {
    return 60e6 * duoi60 + 60e6 * tren60Den120 + (a - 120e6) * tren120Den210;
  } else if (a > 210e6 && a <= 384e6) {
    return (
      60e6 * duoi60 +
      60e6 * tren60Den120 +
      90e6 * tren120Den210 +
      (a - 210e6) * tren210Den384
    );
  } else if (a > 384e6 && a <= 624e6) {
    return (
      60e6 * duoi60 +
      60e6 * tren60Den120 +
      90e6 * tren120Den210 +
      174e6 * tren210Den384 +
      (a - 384e6) * tren384Den624
    );
  } else if (a > 624e6 && a <= 960e6) {
    return (
      60e6 * duoi60 +
      60e6 * tren60Den120 +
      90e6 * tren120Den210 +
      174e6 * tren210Den384 +
      240e6 * tren384Den624 +
      (a - 624e6) * tren624Den960
    );
  } else if (a > 960e6) {
    return (
      60e6 * duoi60 +
      60e6 * tren60Den120 +
      90e6 * tren120Den210 +
      174e6 * tren210Den384 +
      240e6 * tren384Den624 +
      336e6 * tren624Den960 +
      (a - 960e6) * tren960
    );
  } else {
    return 0;
  }
}

//BT2
//hàm onchagne
function onChagneOfDoanhNghiep() {
  var loaiKhachHang = Number(document.getElementById("loaiKhachHang").value);
  console.log(loaiKhachHang);
  if (loaiKhachHang == 2) {
    document.getElementById("txtSoKetNoi").innerHTML =
      '<input id="soKetNoi" type="number" placeholder="Số kết nối">';
  } else {
    document.getElementById("txtSoKetNoi").innerHTML = "";
  }
}

//hàm main
function tinhTienCap() {
  var loaiKhachHang = document.getElementById("loaiKhachHang").value;
  var maKhachHang = document.getElementById("maKhachHang").value;
  var soKenhCaoCap = Number(document.getElementById("soKenhCaoCap").value);
  var soKetNoi = 0;

  if (loaiKhachHang == 0) {
    document.getElementById("txtTienCap").innerHTML = " hãy chọn loại khách hàng";
    return 0;
  } else if (loaiKhachHang == 2) {
    soKetNoi = Number(document.getElementById("soKetNoi").value);
  }

  document.getElementById("txtTienCap").innerHTML = "Mã khách hàng: " + maKhachHang +"; Tiền cáp : " + tinhTien(loaiKhachHang, soKenhCaoCap, soKetNoi).toFixed(2) + " $";
}
document.getElementById("btnTienCap").onclick = tinhTienCap;

// hàm tính tiền
function tinhTien(loaiKhachHang, soKenhCaoCap, soKetNoi) {
  //phí xử lí hóa đơn
  const phiHoaDonNha = 4.5;
  const phiHoaDonDN = 15;
  //phí dịch vụ cơ bản
  const dichVuNha = 20.5;
  const dichVuDN10KenhDau = 75;
  const dichVuDNThem = 5;
  // Thuê kênh cao cấp
  const kenhCaoCapNha = 7.5;
  const kenhCaoCapDN = 50;

  if (loaiKhachHang == 1) {
    return phiHoaDonNha + dichVuNha + kenhCaoCapNha * soKenhCaoCap;
  } else if (loaiKhachHang == 2) {
    if (soKetNoi >= 0 && soKetNoi <= 10) {
      return phiHoaDonDN + dichVuDN10KenhDau + kenhCaoCapDN * soKenhCaoCap;
    } else if (soKetNoi > 10) {
      return  phiHoaDonDN + dichVuDN10KenhDau + (soKetNoi-10) * dichVuDNThem +kenhCaoCapDN * soKenhCaoCap;
    }
  }
}
