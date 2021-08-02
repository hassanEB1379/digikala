import Timer from "components/micro/Timer";
import { FiGift } from "react-icons/fi";

export const AdvancedProductCard = ({ data }) => {
  const { name, price, withDiscount, currency, gift, discountDate, image } =
    data;

  return (
    <div className="w-full h-full bg-white pb-3 cursor-pointer rounded-xl px-8 flex flex-col justify-between">
      <div>
        <div className="py-10">
          <img
            alt="product"
            src={image}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="h-16">{name}</div>
      </div>

      {gift && (
        <div className="flex gap-3 items-center h-20">
          <FiGift />
          {gift} <span>تومان هدیه نقدی</span>
        </div>
      )}

      <div className="flex flex-col items-end ">
        {withDiscount && (
          <div className="flex gap-3">
            <del className="text-gray-400 text-xl">{price}</del>
            <div className="bg-red-500 text-xl pt-1 h-7 text-white rounded-3xl font-bold px-3 flex items-center justify-center">
              <span>%</span>
              <span>{Math.floor(((price - withDiscount) / price) * 100)}</span>
            </div>
          </div>
        )}

        <div className="text-2xl font-bold">
          {withDiscount ? withDiscount : price}{" "}
          <span className="text-xl font-normal">{currency}</span>
        </div>

        {discountDate && (
          <Timer className="mt-7 text-gray-400" eventDate={discountDate} />
        )}
      </div>
    </div>
  );
};
