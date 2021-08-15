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

const Home = () => {
  return (
    <div className="space-y-8 py-8">
      {/* banners */}
      <section id="banners">
        <Container maxWidth="1366px" className="flex flex-wrap">
          <div className="flex-grow mb-5">
            <Banner src="/static/images/digikala-banner19.jpg" />
          </div>

          <div className="w-2/3 pl-3">
            <Slider
              slidesPerView={1}
              gap={10}
              pagination={{ clickable: true }}
              className="h-full rounded-3xl"
            >
              <Banner src="/static/images/digikala-banner17.jpg" />
              <Banner src="/static/images/digikala-banner18.jpg" />
              <Banner src="/static/images/digikala-banner.jpg" />
              <Banner src="/static/images/digikala-gif1.gif" />
            </Slider>
          </div>

          <div className="w-1/3 inline-flex flex-col flex-auto gap-3 pr-2">
            <Banner src="/static/images/digikala-banner2.jpg" />

            <Banner src="/static/images/digikala-banner3.jpg" />
          </div>
        </Container>
      </section>

      {/* best products */}
      <section id="best-products" className="bg-red-500">
        <Container maxWidth="1366px" className="flex py-10">
          <div className="w-72 inline-flex flex-col justify-between mx-14 mt-16 ">
            <img
              className="w-full"
              alt="best-products"
              src="/static/images/best-products.png"
            />

            <Button color="white">مشاهده همه</Button>
          </div>

          <div style={{ width: "calc(100% - 258px)" }}>
            <Slider className=" h-full" navigation slidesPerView={4} gap={10}>
              {special.map((product) => (
                <AdvancedProductCard data={product} key={product.id} />
              ))}
            </Slider>
          </div>
        </Container>
      </section>

      {/* banners */}
      <section>
        <Container maxWidth="1366px" className="flex gap-7">
          <Banner src="/static/images/digikala-banner4.jpg" />
          <Banner src="/static/images/digikala-banner5.jpg" />
          <Banner src="/static/images/digikala-banner6.jpg" />
          <Banner src="/static/images/digikala-banner7.jpg" />
        </Container>
      </section>

      {/* super market */}
      <section id="super-market" className="bg-green-500">
        <Container maxWidth="1366px" className="py-10 flex">
          <div className="w-72 inline-flex flex-col justify-between  mx-14 mt-16 ">
            <img
              className="w-full"
              alt="best-products"
              src="/static/images/super-market.png"
            />

            <Button color="white">مشاهده همه</Button>
          </div>

          <div style={{ width: "calc(100% - 258px)" }}>
            <Slider className=" h-full" navigation slidesPerView={4} gap={10}>
              {superMarket.map((product) => (
                <AdvancedProductCard data={product} key={product.id} />
              ))}
            </Slider>
          </div>
        </Container>
      </section>

      {/* banners */}
      <section>
        <Container maxWidth="1366px" className="flex gap-7">
          <Banner src="/static/images/digikala-banner8.jpg" />
          <Banner src="/static/images/digikala-banner9.jpg" />
        </Container>
      </section>

      {/* mobile */}
      <section>
        <Container maxWidth="1366px" className="flex gap-7">
          <div className="w-full">
            <SliderBox
              title="گوشی موبایل"
              subTitle="بر اساس بازدید های شما"
              slidesPerView={5}
              gap={5}
              navigation
            >
              {mobile.map((product) => (
                <SimpleProductCard data={product} key={product.id} />
              ))}
            </SliderBox>
          </div>
        </Container>
      </section>

      <Categories />

      {/* mobile cover */}
      <section>
        <Container maxWidth="1366px" className="flex gap-7">
          <Paper className="w-3/12 flex flex-col justify-between items-center">
            <FaRegCheckCircle color="#4caf50" size="4em" />
            <h3 className="text-xl">! شخصی سازی پیشنهاد ها</h3>
            <p className="text-gray-500 text-lg text-center">
              برای مشاهده پیشنهادهای مناسب خود و همچنین داشتن تجربه بهتر لطفا
              وارد حساب کاربری شوید.
            </p>

            <Button variant="contained" color="red" icon={<CgLogOut />}>
              ورود به حساب دیجی کالا
            </Button>

            <span className="text-sm">
              ثبت‌نام رایگان در صورت نداشتن حساب کاربری
            </span>
          </Paper>

          <div className="w-9/12">
            <SliderBox
              title="گوشی موبایل"
              subTitle="بر اساس بازدید های شما"
              slidesPerView={5}
              gap={5}
              navigation
            >
              {mobile.map((product) => (
                <SimpleProductCard data={product} key={product.id} />
              ))}
            </SliderBox>
          </div>
        </Container>
      </section>

      {/* banners */}
      <section>
        <Container maxWidth="1366px" className="flex gap-7">
          <Banner src="/static/images/digikala-banner10.jpg" />
          <Banner src="/static/images/digikala-banner11.jpg" />
          <Banner src="/static/images/digikala-banner12.jpg" />
          <Banner src="/static/images/digikala-banner13.jpg" />
        </Container>
      </section>

      <section>
        <Container maxWidth="1366px" className="flex gap-7">
          <div className="w-full">
            <SliderBox
              title="هدفون , هدست و هندزفری"
              subTitle="بر اساس بازدید های شما"
              slidesPerView={5}
              gap={5}
              navigation
            >
              {mobile.map((product) => (
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
              slidesPerView={5}
              gap={5}
              navigation
            >
              {mobile.map((product) => (
                <SimpleProductCard data={product} key={product.id} />
              ))}
            </SliderBox>
          </div>
        </Container>
      </section>

      {/* banners */}
      <section>
        <Container maxWidth="1366px" className="flex gap-7">
          <Banner src="/static/images/digikala-banner16.jpg" />
          <Banner src="/static/images/digikala-banner15.jpg" />
        </Container>
      </section>

      <section>
        <Container maxWidth="1366px" className="flex gap-7">
          <div className="w-full">
            <SliderBox
              title="لپ تاپ و الترابوک"
              subTitle="بر اساس بازدید های شما"
              slidesPerView={5}
              gap={5}
              navigation
            >
              {mobile.map((product) => (
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
