import { useParams } from "react-router-dom";
import { getById } from "../api/product";
import { useEffect, useState } from "react";
import { IProduct } from "../models";

const DetailProduct = () => {
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const { id } = useParams();
  const fetchProduct = async () => {
    if (id) {
      const { data } = await getById(id);
      setProduct(data);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <div className="pb-2">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product?.name}
                </h1>

                <span className="title-font font-medium text-[25px] pr-4 text-[#D70018]">
                  {product?.price}đ
                </span>
                <span className="title-font font-medium text-[14px] text-[#707070]">
                  <del>{product?.original_price}đ</del>
                </span>
              </div>
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product?.name}
              </h2>

              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Đánh Giá</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">
                {" "}
                Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người
                dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản
                A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang
                đến cảm giác sang trọng và tinh tế.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                  <span className="mr-3">Màu</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Dung lượng</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                      <option>64GB</option>
                      <option>256Gb</option>
                      <option>512GB</option>
                      <option>1T GB</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex">
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Mua Ngay
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex pl-[140px] py-5 gap-3">
            <img src="/small.png" alt="" className="w-[70px] rounded-md " />
            <img src="/small.png" alt="" className="w-[70px] rounded-md" />
            <img src="/small.png" alt="" className="w-[70px] rounded-md" />
          </div>
        </div>
      </section>
      <div className=" px-[60px]">
        <div className=" bg-[#F2F2F2] rounded-md">
          <h1 className="text-[#D70018] text-center text-[24px] font-medium py-[10px]">
            ĐẶC ĐIỂM NỔI BẬT
          </h1>
          <p className="text-[#444444] text-[14px] py-[3px] pl-[50px]">
            Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm
            biến chính lên đến 108 MP
          </p>
          <p className="text-[#444444] text-[14px] py-[3px] pl-[50px]">
            Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7 inch, độ
            phân giải Full HD+, 120Hz mượt mà
          </p>
          <p className="text-[#444444] text-[14px] py-[3px] pl-[50px]">
            Cấu hình Galaxy A73 5G được nâng cấp mạnh với chip Snapdragon 778G,
            RAM lên đến 8 GB
          </p>
          <p className="text-[#444444] text-[14px] py-[3px] pl-[50px]">
            Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000 mAh, hỗ
            trợ sạc nhanh 25 W
          </p>
        </div>
        <div>
          <p className="text-[#444444] pt-[20px] text-[15px]">
            Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai
            là fan của thương hiệu điện thoại Samsung. Mới đây, hãng sẽ tiếp tục
            cho ra mắt nhiều smartphone với sự cải tiến trong thiết kế và cấu
            hình, trong đó phải kể đến chiếc Samsung Galaxy A73 với nhiều cải
            tiến so với thế hệ trước. Vậy sản phẩm có gì nổi bật, giá bao nhiêu
            và liệu có nên mua không? Tìm hiểu ngay nhé!
          </p>
          <h2 className="text-[#0A263C] text-[22px] font-medium py-4">
            Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp
          </h2>
          <p className="text-[#444444] text-[15px]">
            Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai
            là fan của thương hiệu điện thoại Samsung. Mới đây, hãng sẽ tiếp tục
            cho ra mắt nhiều smartphone với sự cải tiến trong thiết kế và cấu
            hình, trong đó phải kể đến chiếc Samsung Galaxy A73 với nhiều cải
            tiến so với thế hệ trước. Vậy sản phẩm có gì nổi bật, giá bao nhiêu
            và liệu có nên mua không? Tìm hiểu ngay nhé!
          </p>
        </div>
        <div>
          <h2 className="text-[#0A263C] text-[22px] font-normal py-4">
            Thiết kế sang trọng, màn hình Super AMOLED
          </h2>
          <p className="text-[#444444] text-[15px]">
            Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan
            tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo
            nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng
            và tinh tế.
          </p>
          <p className="text-[#444444] text-[15px]">
            Samsung Galaxy A73 được thiết kế gọn nhẹ với tiêu chí đáp ứng khả
            năng mang theo để tiện đi lại cho người dùng. Giờ đây, bạn có thể
            mang theo chiếc smartphone bên cạnh đến bất cứ đâu, bất cứ lúc nào.
          </p>
          <p className="text-[#444444] text-[15px]">
            Kích thước và trọng lượng của chiếc điện thoại rất vừa phải và dĩ
            nhiên sẽ không chiếm quá nhiều diện tích trong túi xách và có thể di
            chuyển dễ dàng.
          </p>
        </div>
      </div>
    </div>
  );
};
export default DetailProduct;
