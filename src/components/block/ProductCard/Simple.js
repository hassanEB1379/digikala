export const SimpleProductCard = ({ data }) => {
  const { name, price, withDiscount, currency, image } = data;

  return (
    <div className="w-full h-full bg-white hover:shadow-md transform duration-75 hover:-translate-y-0.5 transition-all ease-linear pb-3  cursor-pointer rounded-xl px-8 flex flex-col justify-between">
      <div>
        <div className="py-5">
          <img
            alt="product"
            src={image}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="h-12 overflow-hidden ">{name}</div>
      </div>

      <div className="flex flex-col items-end mt-3">
        {withDiscount && (
          <div className="flex gap-3">
            <del className="text-gray-400">{price}</del>
            <div className="bg-red-500 pt-1 h-5 text-white rounded-3xl font-bold px-2 flex items-center justify-center">
              <span>%</span>
              <span>{Math.floor(((price - withDiscount) / price) * 100)}</span>
            </div>
          </div>
        )}

        <div className="text-xl font-bold">
          {withDiscount ? withDiscount : price}{" "}
          <span className="text-base font-normal">{currency}</span>
        </div>
      </div>
    </div>
  );
};
