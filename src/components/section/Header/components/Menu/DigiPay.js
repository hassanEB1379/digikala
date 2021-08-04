import Banner from "components/micro/Banner";
import Fade from "components/micro/Fade";

const DigiPay = ({ show }) => {
  return (
    <Fade
      show={show}
      className="bg-white rounded-b-xl shadow-header flex p-4 max-w-2xl absolute top-full"
    >
      <ul className="w-1/3 space-y-4">
        <li className="cursor-pointer">فعال سازی کیف پول</li>
        <li className="cursor-pointer">صفحه اصلی دیجی پی</li>
        <li className="cursor-pointer">خرید شارژ</li>
        <li className="cursor-pointer">خرید بسته اینترنت</li>
        <li className="cursor-pointer">پرداخت قبض</li>
        <li className="cursor-pointer">خرید اقساطی</li>
      </ul>
      <div className="w-2/3">
        <Banner src="/static/images/digipay.png" />
      </div>
    </Fade>
  );
};

export default DigiPay;
