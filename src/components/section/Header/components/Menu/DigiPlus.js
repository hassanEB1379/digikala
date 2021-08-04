import Banner from "components/micro/Banner";
import Fade from "components/micro/Fade";

const DigiPlus = ({ show }) => {
  return (
    <Fade
      show={show}
      className="bg-white rounded-b-xl shadow-header flex gap-8  p-4 max-w-3xl absolute top-full"
    >
      <div className="w-1/2  inline-flex flex-col justify-between">
        <p className="font-bold inline-flex items-center gap-2">
          <span>خدمات ویژه کاربران</span>

          <img width="55px" alt="digiplus" src="/static/images/digiplus.svg" />
        </p>

        <p className=" text-justify h-16">
          ارسال رایگان بدون محدودیت قیمت، هدیه نقدی و بازگشت کالا تا ۳۰ روز پس
          از تحویل
        </p>

        <a href="/" className="text-blue-400">
          اطلاعات بیشتر و عضویت
        </a>

        <hr />

        <a href="/" className="font-bold flex gap-2 items-center">
          کالاهای
          <img width="55px" alt="digiplus" src="/static/images/digiplus.svg" />
        </a>
      </div>

      <div className="w-1/2 flex-grow">
        <Banner src="/static/images/digiplus.jpg" />
      </div>
    </Fade>
  );
};

export default DigiPlus;
