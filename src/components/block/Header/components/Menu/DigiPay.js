import Banner from "components/micro/Banner";
import Fade from "components/micro/Fade";
import Collapse from "../../../../micro/Collapse";

export const DigiPayDesk = ({ show }) => {
   return (
      <Fade
         show={show}
         className="bg-white rounded-b-xl shadow-header flex p-4 max-w-2xl absolute top-full"
      >
         <ul className="w-1/3 space-y-4">
            <li className="cursor-pointer hover:text-red-500">
               فعال سازی کیف پول
            </li>
            <li className="cursor-pointer hover:text-red-500">
               صفحه اصلی دیجی پی
            </li>
            <li className="cursor-pointer hover:text-red-500">خرید شارژ</li>
            <li className="cursor-pointer hover:text-red-500">
               خرید بسته اینترنت
            </li>
            <li className="cursor-pointer hover:text-red-500">پرداخت قبض</li>
            <li className="cursor-pointer hover:text-red-500">خرید اقساطی</li>
         </ul>
         <div className="w-2/3">
            <Banner src="/static/images/digipay.png" />
         </div>
      </Fade>
   );
};

export const DigiPayMobile = ({ show }) => {
   return (
      <Collapse show={show}>
         <ul className="space-y-4 pr-14 pt-3">
            <li className="cursor-pointer hover:text-red-500">
               فعال سازی کیف پول
            </li>
            <li className="cursor-pointer hover:text-red-500">
               صفحه اصلی دیجی پی
            </li>
            <li className="cursor-pointer hover:text-red-500">خرید شارژ</li>
            <li className="cursor-pointer hover:text-red-500">
               خرید بسته اینترنت
            </li>
            <li className="cursor-pointer hover:text-red-500">پرداخت قبض</li>
            <li className="cursor-pointer hover:text-red-500">خرید اقساطی</li>
         </ul>
      </Collapse>
   );
};
