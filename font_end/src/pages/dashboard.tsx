import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAll, remove } from "../api/product";
import { IProduct } from "../models";

const Dashboard = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await getAll();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const removeProduct = (id: string | number) => {
    remove(id).then(() =>
      setProducts(products.filter((product) => product._id != id))
    );
  };

  return (
    <>
      <h2>Product list</h2>
      <div className="-auto rounded-lg border border-gray-200 pt-16">
        <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
          <thead>
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Tên sản phẩm
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Giá
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Giá khuyến mãi
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Hình ảnh
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Mô tả
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Thao tác
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  <Link to={`/admin/product/${product._id}`}>
                    {product.name}
                  </Link>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {product.price}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {product.original_price}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  <img
                    className="w-[80%]"
                    src={product.images?.[0].base_url}
                    alt=""
                  />
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {product.description}
                </td>
                <td className="text-center">
                  <span className="inline-flex divide-x overflow-hidden rounded-md border bg-white shadow-sm">
                    <Link to={`/admin/product/add`}>
                      <button
                        className="inline-block p-3 text-blue-700 hover:bg-blue-50 focus:relative"
                        title="Edit Product"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </button>
                    </Link>
                    <button
                      onClick={() => removeProduct(product._id)}
                      className="inline-block p-3 text-red-700 hover:bg-red-50 focus:relative"
                      title="Delete Product"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
