import { useForm } from "react-hook-form";
import { IProduct } from "../models";
import { addProduct } from "../api/product";
import { useNavigate } from "react-router-dom";
const ProductAdd = () => {
  type Props = {};

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onAdd = (data) => {
    addProduct(data);
    console.log(data);

    navigate("/admin");
  };
  return (
    <section className="bg-gray-100">
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div className="lg:col-span-2 lg:py-12"></div>

        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form action="" onSubmit={handleSubmit(onAdd)} className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                {...register("name")}
                placeholder="Name"
                type="text"
                id="name"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  Price
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  {...register("price")}
                  placeholder="price"
                  type="number"
                  id="email"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  original_price
                </label>
                <input
                  {...register("original_price")}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="original_price"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                description
              </label>

              <textarea
                {...register("description")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="description"
                id="message"
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductAdd;
