const UserFooter = () => {
  return (
    <footer aria-label="Site Footer" className="bg-white">
      <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-0">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4 ">
            <div>
              <p className="font-normal	 text-sm text-gray-900">Tìm cửa hàng</p>
              <nav aria-label="Footer Navigation - Services" className="mt-6 text-sm">
                <ul className="space-y-4 text-sm 	">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 text-sm"
                    >
                      Tìm cửa hàng gần nhất
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 text-sm"
                    >
                      Mua hàng từ xa
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-red-600 transition hover:opacity-75 text-sm"
                    >
                      Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-700 transition hover:opacity-75 "
                    >
                      Phương thức thanh toán
                    </a>
                  </li>
                  <ul className="flex gap-6 mt-8">
                    <li>
                      <img src="/citi.png" alt="" />
                    </li>
                    <li>
                      <img src="/grab.png" alt="" />
                    </li>
                    <li>
                      <img src="/redivo.png" alt="" />
                    </li>
                    <li>
                      <img src="/VNpay.png" alt="" />
                    </li>
                  </ul>
                  <img src="/Vpbank.png" alt="" />
                </ul>
              </nav>
            </div>

            <div>
              <p className="text-sm font-normal	 text-gray-900">
                Gọi mua hàng: 1800.2044 (8h00 - 22h00)
              </p>

              <nav aria-label="Footer Navigation - Company" className="mt-3">
                <ul className="space-y-1 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 text-sm"
                    >
                      Gọi khiếu nại: 1800.2063 (8h00 - 21h30)
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 text-sm"
                    >
                      Gọi bảo hành: 1800.2064 (8h00 - 21h00)
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-700 transition hover:opacity-75"
                    >
                      Đối tác dịch vụ bảo hành
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-700 transition hover:opacity-75"
                    >
                      Điện Thoại - Máy tính
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-700 transition hover:opacity-75"
                    >
                      Trung tâm bảo hành uỷ quyền Apple
                    </a>
                  </li>
                  <img src="/dienthoaivui.png" alt="" />
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-normal text-gray-700 text-sm">
                Mua hàng và thanh toán Online
              </p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm font-normal	">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Mua hàng trả góp Online
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 "
                    >
                      Tra thông tin đơn hàng
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Tra điểm Smember
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Tra thông tin bảo hành
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-700 transition hover:opacity-75"
                    >
                      Tra cứu hoá đơn VAT điện tử
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Trung tâm bảo hành chính hãng
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 "
                    >
                      Quy định về việc sao lưu dữ liệu
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-red-600 transition hover:opacity-75"
                    >
                      Dịch vụ bảo hành điện thoại
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-normal text-sm text-gray-700">Quy chế hoạt động</p>

              <nav aria-label="Footer Navigation - Legal" className="mt-6">
                <ul className="space-y-4 text-sm font-normal">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Chính sách Bảo hành
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Liên hệ hợp tác kinh doanh
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Khách hàng doanh nghiệp (B2B)
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-red-600 transition hover:opacity-75"
                    >
                      Ưu đãi thanh toán
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Tuyển dụng
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto  lg:grid-cols-4 grid grid-cols-3 gap-10  text-[10px] text-[#444444]">
          <div>
            <ul className="space-y-2">
              <li>
                <a href="">
                  Điện thoại iPhone 13 - Điện thoại iPhone 12 - Điện thoại
                  iPhone 11
                </a>
              </li>
              <li>
                <a href="">
                  Điện thoại iPhone 13 Pro Max - Điện thoại iPhone 11 Pro Max
                </a>
              </li>
              <li>
                <a href="">
                  iPhone cũ giá rẻ - iPhone 13 cũ - iPhone 12 cũ - iPhone 11 cũ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <a href="">
                  Điện thoại iPhone - Điện thoại Samsung - Điện thoại Samsung A
                </a>
              </li>
              <li>
                <a href="">
                  Điện thoại OPPO - Điện thoại Xiaomi - Điện thoại Vivo - Điện
                  thoại Nokia
                </a>
              </li>
              <li>
                <a href="">
                  Samsung Fold 3 - Samsung S22 - Samsung A73 - Samsung A53
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <a href="">Laptop - Laptop HP - Laptop Dell - Laptop Acer</a>
              </li>
              <li>
                <a href="">Microsoft Surface - Laptop Lenovo - Laptop Asus</a>
              </li>
              <li>
                <a href="">
                  Máy tính để bàn - Màn hình máy tính - Camera - Camera hành
                  trình
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className=" mx-auto text-xs	 text-gray-500 ">
          Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD:
          0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352
          Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam.
          Điện thoại: 028.7108.9666.
        </p>
      </div>
    </footer>
  );
};

export default UserFooter;
