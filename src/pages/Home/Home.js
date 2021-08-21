import { mobile, special, superMarket } from "-data/products";
import Banner from "components/micro/Banner";
import Button from "components/micro/Button";
import Container from "components/micro/Container";
import {
   AdvancedProductCard,
   SimpleProductCard,
} from "components/block/ProductCard";
import Slider from "components/block/Slider/Slider";
import SliderBox from "components/block/Slider/SliderBox";
import Categories from "./components/Categories";
import Paper from "components/micro/Paper";

// icons
import { FaRegCheckCircle } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
import { IoIosArrowBack } from "react-icons/io";
import Banners from "./components/Banners";

const Home = () => {
   return (
      <div className="space-y-8 py-8">
         {/* banners */}
         <section id="banners">
            <Container maxWidth="1366px" className="flex flex-wrap">
               <div className="flex-grow mb-5">
                  <Banner
                     className="h-24 lg:h-auto"
                     src="/static/images/digikala-banner19.jpg"
                  />
               </div>

               <div className="w-full h-full flex flex-wrap lg:flex-nowrap gap-5">
                  <div className="w-full lg:w-2/3">
                     <Slider
                        slidesPerView={1}
                        gap={10}
                        pagination={{ clickable: true }}
                        className="h-full rounded-3xl shadow-md"
                     >
                        <Banner
                           className="h-96 sm:h-full"
                           src="/static/images/digikala-banner17.jpg"
                        />
                        <Banner
                           className="h-96 sm:h-full"
                           src="/static/images/digikala-banner18.jpg"
                        />
                        <Banner
                           className="h-96 sm:h-full"
                           src="/static/images/digikala-banner.jpg"
                        />
                        <Banner
                           className="h-96 sm:h-full"
                           src="/static/images/digikala-gif1.gif"
                        />
                     </Slider>
                  </div>

                  <div className="w-full h-full lg:w-1/3 flex flex-wrap gap-5">
                     <Banner
                        className="w-full sm:w-1/3 lg:w-full flex-grow"
                        src="/static/images/digikala-banner2.jpg"
                     />

                     <Banner
                        className="w-full sm:w-1/3 lg:w-full flex-grow"
                        src="/static/images/digikala-banner3.jpg"
                     />
                  </div>
               </div>
            </Container>
         </section>

         {/* best products */}
         <section id="best-products" className="bg-red-500">
            <Container
               maxWidth="1366px"
               className="flex flex-col-reverse lg:flex-row items-center lg:items-stretch py-10"
            >
               <div className="lg:w-72 w-full inline-flex flex-col items-center justify-between mx-14 lg:mt-16 ">
                  <img
                     className="w-full hidden lg:block"
                     alt="best-products"
                     src="/static/images/special.png"
                  />

                  <Button
                     classes={{ root: "mt-10" }}
                     color="white"
                     iconEnd={<IoIosArrowBack />}
                  >
                     مشاهده همه
                  </Button>
               </div>

               <div className="w-full lg:w-4/5">
                  <Slider
                     className=" h-full"
                     navigation
                     gap={10}
                     breakpoints={{
                        640: {
                           slidesPerView: 2,
                        },
                        768: {
                           slidesPerView: 3,
                        },
                        1024: {
                           slidesPerView: 4,
                        },
                     }}
                  >
                     {special.map(product => (
                        <AdvancedProductCard data={product} key={product.id} />
                     ))}
                  </Slider>
               </div>
            </Container>
         </section>

         {/* banners */}
         <Banners
            bannersPaths={[
               "/static/images/digikala-banner4.jpg",
               "/static/images/digikala-banner5.jpg",
               "/static/images/digikala-banner6.jpg",
               "/static/images/digikala-banner7.jpg",
            ]}
         />

         {/* super market */}
         <section id="super-market" className="bg-green-500">
            <Container
               maxWidth="1366px"
               className="flex flex-col-reverse lg:flex-row items-center lg:items-stretch py-10"
            >
               <div className="lg:w-72 w-full inline-flex flex-col items-center justify-between mx-14 lg:mt-16">
                  <img
                     className="w-full hidden lg:block"
                     alt="best-products"
                     src="/static/images/super-market.png"
                  />

                  <Button
                     iconEnd={<IoIosArrowBack />}
                     classes={{ root: "mt-10" }}
                     color="white"
                  >
                     مشاهده همه
                  </Button>
               </div>

               <div className="w-full lg:w-4/5">
                  <Slider
                     className=" h-full"
                     navigation
                     gap={10}
                     breakpoints={{
                        640: {
                           slidesPerView: 2,
                        },
                        768: {
                           slidesPerView: 3,
                        },
                        1024: {
                           slidesPerView: 4,
                        },
                     }}
                  >
                     {superMarket.map(product => (
                        <AdvancedProductCard data={product} key={product.id} />
                     ))}
                  </Slider>
               </div>
            </Container>
         </section>

         {/* banners */}
         <section>
            <Container
               maxWidth="1366px"
               className="flex flex-wrap lg:flex-nowrap gap-7"
            >
               <Banner
                  className="w-full lg:w-1/2"
                  src="/static/images/digikala-banner8.jpg"
               />
               <Banner
                  className="w-full lg:w-1/2"
                  src="/static/images/digikala-banner9.jpg"
               />
            </Container>
         </section>

         {/* mobile */}
         <section>
            <Container maxWidth="1366px" className="flex gap-7">
               <div className="w-full">
                  <SliderBox
                     title="گوشی موبایل"
                     subTitle="بر اساس بازدید های شما"
                     gap={5}
                     navigation
                     breakpoints={{
                        640: {
                           slidesPerView: 3,
                        },
                        1024: {
                           slidesPerView: 6,
                        },
                     }}
                  >
                     {mobile.map(product => (
                        <SimpleProductCard data={product} key={product.id} />
                     ))}
                  </SliderBox>
               </div>
            </Container>
         </section>

         <Categories />

         {/* mobile cover */}
         <section>
            <Container
               maxWidth="1366px"
               className="flex flex-wrap sm:flex-nowrap gap-7"
            >
               <Paper className="w-full min-h-sm sm:w-1/2 md:w-5/12 lg:w-3/12 flex flex-col justify-between items-center">
                  <FaRegCheckCircle color="#4caf50" size="4em" />
                  <h3 className="text-xl ">! شخصی سازی پیشنهاد ها</h3>
                  <p className="text-gray-500 text-lg text-center">
                     برای مشاهده پیشنهادهای مناسب خود و همچنین داشتن تجربه بهتر
                     لطفا وارد حساب کاربری شوید.
                  </p>

                  <Button variant="contained" color="red" icon={<CgLogOut />}>
                     ورود به حساب دیجی کالا
                  </Button>

                  <span className="text-sm">
                     ثبت‌نام رایگان در صورت نداشتن حساب کاربری
                  </span>
               </Paper>

               <div className="w-full sm:w-1/2 md:w-7/12 lg:w-9/12">
                  <SliderBox
                     title="گوشی موبایل"
                     subTitle="بر اساس بازدید های شما"
                     gap={5}
                     navigation
                     breakpoints={{
                        640: {
                           slidesPerView: 2,
                        },
                        1024: {
                           slidesPerView: 4,
                        },
                        1280: {
                           slidesPerView: 5,
                        },
                     }}
                  >
                     {mobile.map(product => (
                        <SimpleProductCard data={product} key={product.id} />
                     ))}
                  </SliderBox>
               </div>
            </Container>
         </section>

         {/* banners */}
         <Banners
            bannersPaths={[
               "/static/images/digikala-banner10.jpg",
               "/static/images/digikala-banner11.jpg",
               "/static/images/digikala-banner12.jpg",
               "/static/images/digikala-banner13.jpg",
            ]}
         />

         <section>
            <Container maxWidth="1366px" className="flex gap-7">
               <div className="w-full">
                  <SliderBox
                     title="هدفون , هدست و هندزفری"
                     subTitle="بر اساس بازدید های شما"
                     gap={5}
                     navigation
                     breakpoints={{
                        640: {
                           slidesPerView: 3,
                        },
                        1024: {
                           slidesPerView: 6,
                        },
                     }}
                  >
                     {mobile.map(product => (
                        <SimpleProductCard data={product} key={product.id} />
                     ))}
                  </SliderBox>
               </div>
            </Container>
         </section>

         <section>
            <Container maxWidth="1366px" className="flex gap-7">
               <div className="w-full">
                  <SliderBox
                     title="کتاب چاپی"
                     subTitle="بر اساس بازدید های شما"
                     gap={5}
                     navigation
                     breakpoints={{
                        640: {
                           slidesPerView: 3,
                        },
                        1024: {
                           slidesPerView: 6,
                        },
                     }}
                  >
                     {mobile.map(product => (
                        <SimpleProductCard data={product} key={product.id} />
                     ))}
                  </SliderBox>
               </div>
            </Container>
         </section>

         {/* banners */}
         <section>
            <Container
               maxWidth="1366px"
               className="flex flex-wrap lg:flex-nowrap gap-7"
            >
               <Banner
                  className="w-full lg:w-1/2"
                  src="/static/images/digikala-banner16.jpg"
               />
               <Banner
                  className="w-full lg:w-1/2"
                  src="/static/images/digikala-banner15.jpg"
               />
            </Container>
         </section>

         <section>
            <Container maxWidth="1366px" className="flex gap-7">
               <div className="w-full">
                  <SliderBox
                     title="لپ تاپ و الترابوک"
                     subTitle="بر اساس بازدید های شما"
                     gap={5}
                     navigation
                     breakpoints={{
                        640: {
                           slidesPerView: 3,
                        },
                        1024: {
                           slidesPerView: 6,
                        },
                     }}
                  >
                     {mobile.map(product => (
                        <SimpleProductCard data={product} key={product.id} />
                     ))}
                  </SliderBox>
               </div>
            </Container>
         </section>
      </div>
   );
};

export default Home;
