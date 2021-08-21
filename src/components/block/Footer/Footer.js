import { useState } from "react";
import Logo from "components/micro/Logo";
import Button from "components/micro/Button";
import IconBox from "components/micro/IconBox";
import Container from "components/micro/Container";

// icons
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/all";

const Footer = () => {
   const [showMore, setShowMore] = useState(true);

   const handleShowMore = () => setShowMore(prev => !prev);

   return (
      <footer className="bg-white pt-12 pb-5">
         <Container maxWidth="1366px">
            <div className="flex mb-5 items-center justify-between">
               <Logo persian />

               <Button iconEnd={<IoIosArrowUp />}>برگشت به بالا</Button>
            </div>

            <p className="flex flex-wrap gap-8 text-lg text-gray-500">
               <span>تلفن پشتیبانی :</span>
               <span>32100000 - 021 </span>
               <span>هفت روز هفته، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم</span>
            </p>

            <div className="flex flex-wrap gap-5 mx-10 mt-20">
               <IconBox
                  className="flex-shrink-0 flex-grow"
                  iconPath="/static/images/feature1.png"
                  text="امکان تحویل اکسپرس"
               />
               <IconBox
                  className="flex-shrink-0 flex-grow"
                  iconPath="/static/images/feature2.png"
                  text="امکان پرداخت در محل"
               />
               <IconBox
                  className="flex-shrink-0 flex-grow"
                  iconPath="/static/images/feature3.png"
                  text="امکان پرداخت در محل"
               />
               <IconBox
                  className="flex-shrink-0 flex-grow"
                  iconPath="/static/images/feature4.png"
                  text="امکان پرداخت در محل"
               />
               <IconBox
                  className="flex-shrink-0 flex-grow"
                  iconPath="/static/images/feature5.png"
                  text="امکان پرداخت در محل"
               />
            </div>

            <hr className="my-10" />

            <div className="flex flex-wrap gap-8 justify-between">
               <ul>
                  <p className="text-xl font-medium">با دیجی کالا</p>
                  <li className="mt-6 text-lg text-gray-500">
                     اتاق خبر دیجی کالا
                  </li>
                  <li className="mt-6 text-lg text-gray-500">
                     فروش در دیجی کالا
                  </li>
                  <li className="mt-6 text-lg text-gray-500">فرصت های شغلی</li>
                  <li className="mt-6 text-lg text-gray-500">
                     تماس با دیجی کالا
                  </li>
                  <li className="mt-6 text-lg text-gray-500">
                     درباره دیجی کالا
                  </li>
               </ul>

               <ul>
                  <p className="text-xl font-medium">خدمات مشتریان</p>
                  <li className="mt-6 text-lg text-gray-500">
                     پاسخ به پرسش های متداول
                  </li>
                  <li className="mt-6 text-lg text-gray-500">
                     رویه های بازگرداندن کالا
                  </li>
                  <li className="mt-6 text-lg text-gray-500">شرایط ویژه</li>
                  <li className="mt-6 text-lg text-gray-500">حریم خصوصی</li>
                  <li className="mt-6 text-lg text-gray-500">گزارش باگ</li>
               </ul>

               <ul>
                  <p className="text-xl font-medium">
                     راهنمای خرید از دیجی کالا
                  </p>
                  <li className="mt-6 text-lg text-gray-500">نحوه ثبت سفارش</li>
                  <li className="mt-6 text-lg text-gray-500">
                     رویه ارسال سفرش
                  </li>
                  <li className="mt-6 text-lg text-gray-500">
                     شیوه های پرداخت
                  </li>
               </ul>

               <div className="w-full max-w-lg">
                  <p className="text-xl font-medium">با ما همراه باشید</p>
                  <div className="flex gap-12 mt-6">
                     <FaInstagram size="2em" color="#a1a3a8" />
                     <FaTwitter size="2em" color="#a1a3a8" />
                     <FaLinkedin size="2em" color="#a1a3a8" />
                     <FaYoutube size="2em" color="#a1a3a8" />
                  </div>

                  <form className="mt-8 lg:mt-16 space-y-6">
                     <p className="text-xl font-medium">
                        از جدید ترین تخفیف ها با خبر شوید
                     </p>
                     <div className="flex gap-2">
                        <input
                           className="bg-gray-100 p-4 rounded-xl flex-grow text-lg"
                           type="email"
                           placeholder="آدرس ایمیل خود را وارد کنید"
                        />
                        <input
                           className="bg-gray-300 p-5 rounded-xl"
                           type="submit"
                           value="ثبت"
                        />
                     </div>
                  </form>
               </div>
            </div>

            <div className="max-w-sm md:max-w-full mx-auto bg-darkBlue my-12 p-5 rounded-xl flex flex-wrap gap-5 justify-between items-center">
               <div className="flex items-center gap-6 flex-grow">
                  <img
                     src="/static/images/digikala-icon.svg"
                     alt="digikala-icon"
                  />
                  <span className="text-white text-2xl">
                     دانلود اپلیکیشن دیجی کالا
                  </span>
               </div>

               <div className="flex flex-wrap gap-4">
                  <a href="/" className="w-1/3 md:w-1/5 lg:w-48 flex-grow h-14">
                     <img
                        className="w-full h-full"
                        alt="google-play"
                        src="/static/images/google-play.svg"
                     />
                  </a>

                  <a href="/" className="w-1/3 md:w-1/5 lg:w-48 flex-grow h-14">
                     <img
                        className="w-full h-full"
                        alt="bazar"
                        src="/static/images/bazar.svg"
                     />
                  </a>

                  <a href="/" className="w-1/3 md:w-1/5 lg:w-48 flex-grow h-14">
                     <img
                        className="w-full h-full"
                        alt="sib-app"
                        src="/static/images/sib-app.svg"
                     />
                  </a>

                  <a href="/" className="w-1/3 md:w-1/5 lg:w-48 flex-grow h-14">
                     <img
                        className="w-full h-full"
                        alt="miket"
                        src="/static/images/miket.png"
                     />
                  </a>
               </div>

               <span className="w-14 h-14 bg-white flex items-center justify-center rounded-md">
                  <a
                     href="/"
                     className="flex items-center justify-center h-full w-full"
                  >
                     <FiMoreHorizontal />
                  </a>
               </span>
            </div>

            <div className="lg:w-2/3">
               <h1 className="text-lg font-medium">
                  فروشگاه اینترنتی دیجی کالا , بررسی , انتخاب و خرید آنلاین
               </h1>

               <p className="leading-loose text-justify text-gray-400 mt-5">
                  <span>
                     دیجی‌کالا به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی
                     با بیش از یک دهه تجربه، با پایبندی به سه اصل، پرداخت در
                     محل، ۷ روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا موفق شده
                     تا همگام با فروشگاه‌های معتبر جهان، به بزرگ‌ترین فروشگاه
                     اینترنتی ایران تبدیل شود. به محض ورود به سایت دیجی‌کالا با
                     دنیایی از کالا رو به رو می‌شوید! هر آنچه که نیاز دارید و به
                     ذهن شما خطور می‌کند در اینجا پیدا خواهید کرد.
                  </span>
                  <span
                     className="font-bold"
                     id="footer-readmore-content"
                     hidden={showMore}
                  >
                     حتی زمانی که بین خرید کالاها برای شخصی مردد هستید می‌توانید
                     با خرید
                     <a target="_blank" href="/">
                        کارت هدیه دیجی کالا
                     </a>
                     ، انتخاب را به سایرین بسپارید. این فروشگاه مثل یک ویترین پر
                     زرق و برق است که با انواع و اقسام محصولاتی نظیر
                     <a target="_blank" href="/">
                        گوشی موبایل سامسونگ
                     </a>
                     ،
                     <a target="_blank" href="/">
                        ساعت هوشمند اپل
                     </a>
                     ،
                     <a target="_blank" href="/">
                        تلویزیون سامسونگ
                     </a>
                     ،
                     <a target="_blank" href="/">
                        لپ تاپ و الترابوک ایسوس
                     </a>
                     ،
                     <a target="_blank" href="/">
                        گوشی موبایل هواوی
                     </a>
                     و همچنین محصولاتی که هر فرد در زندگی شخصی، تحصیلی و کاری
                     خود به آنها احتیاج پیدا می‌کند، چیده شده است. اینجا مرجع
                     متنوع‌ترین کالاهای مصرفی از
                     <a target="_blank" href="/">
                        گوشی موبایل موتورولا
                     </a>
                     گرفته تا
                     <a target="_blank" href="/">
                        تبلت لنوو
                     </a>
                     ،
                     <a target="_blank" href="/">
                        اتو پاناسونیک
                     </a>
                     ،
                     <a target="_blank" href="/">
                        جارو شارژی بلک اند دکر
                     </a>
                     ،
                     <a target="_blank" href="/">
                        کولر آبی آبسال
                     </a>
                     ،
                     <a target="_blank" href="/">
                        اسپیکر (بلندگو) جی بی ال
                     </a>
                     و حتی خرید
                     <a target="_blank" href="/">
                        لوازم جهیزیه
                     </a>
                     می‌باشد. دیجی‌کالا همچنین یک بازار آنلاین برای خرید
                     جدیدترین و ضروری‌ترین لوازم خانگی همانند
                     <a target="_blank" href="/">
                        سرخ کن فیلیپس
                     </a>
                     ،
                     <a target="_blank" href="/">
                        یخچال و فریزر امرسان
                     </a>
                     ،
                     <a target="_blank" href="/">
                        جاروبرقی پارس خزر
                     </a>
                     ،
                     <a target="_blank" href="/">
                        آبمیوه گیری بوش
                     </a>
                     ،
                     <a target="_blank" href="/">
                        سینمای خانگی و ساندبار سونی
                     </a>
                     و
                     <a target="_blank" href="/">
                        انواع پخش کننده خانگی
                     </a>
                     می‌باشد تا هر فرد بتواند مطابق با سلیقه شخصی خود، خانه
                     رویاهایش را بسازد. حتی می‌توانید از مشهورترین برندهای داخلی
                     و خارجی انواع
                     <a target="_blank" href="/">
                        مدل مانتو جدید
                     </a>
                     ،
                     <a target="_blank" href="/">
                        لباس خواب زنانه
                     </a>
                     ،
                     <a target="_blank" href="/">
                        پیراهن مردانه
                     </a>
                     ،
                     <a target="_blank" href="/">
                        پیراهن و لباس مجلسی زنانه
                     </a>
                     ،
                     <a target="_blank" href="/">
                        لباس بچه گانه
                     </a>
                     ،
                     <a target="_blank" href="/">
                        شومیز زنانه و دخترانه
                     </a>
                     و انواع
                     <a target="_blank" href="/">
                        لباس زیر مردانه
                     </a>
                     را به صورت آنلاین با کمک راهنمای سایز خریداری کنید. این
                     فروشگاه اینترنتی حتی برای سرگرمی کودکان هم خرید محصولاتی
                     مانند
                     <a target="_blank" href="/">
                        عروسک
                     </a>
                     ،
                     <a target="_blank" href="/">
                        مدل‌های اسباب بازی
                     </a>
                     دخترانه و پسرانه و انواع
                     <a target="_blank" href="/">
                        لگو
                     </a>
                     را فراهم کرده است. همچنین با سر زدن به محصولات آرایشی و
                     بهداشتی زنانه و مردانه مانند
                     <a target="_blank" href="/">
                        عطر و ادکلن دیور
                     </a>
                     ،
                     <a target="_blank" href="/">
                        لالیک
                     </a>
                     ،
                     <a target="_blank" href="/">
                        جگوار
                     </a>
                     ،
                     <a target="_blank" href="/">
                        گرلن اصل
                     </a>
                     ،
                     <a target="_blank" href="/">
                        انواع دستگاه اصلاح موی صورت فیلیپس
                     </a>
                     ،
                     <a target="_blank" href="/">
                        موزر
                     </a>
                     ،
                     <a target="_blank" href="/">
                        پاناسونیک
                     </a>
                     و حتی بهترین برندهای
                     <a target="_blank" href="/">
                        رنگ مو و ابرو
                     </a>
                     می‌توانید تجربه‌ای جدید از خرید آنلاین کسب کنید. شما می
                     توانید کلیه نیازهای خود را تنها با چند کلیک سفارش داده و در
                     کمترین زمان ممکن درب منزل تحویل بگیرید.
                  </span>
                  <span
                     onClick={handleShowMore}
                     className="flex items-center gap-2 font-bold text-gray-500 cursor-pointer"
                  >
                     {showMore ? "مشاهده بیشتر" : "بستن"}
                     <IoIosArrowBack size=".8em" />
                  </span>
               </p>
            </div>

            <hr className="mt-14 mb-5" />

            <p className="text-center text-lg py-2 text-gray-500">
               استفاده از مطالب فروشگاه اینترنتی دیجی‌کالا فقط برای مقاصد
               غیرتجاری و با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به
               شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) می‌باشد.
            </p>
         </Container>
      </footer>
   );
};

export default Footer;
