import Container from "../../../components/micro/Container";
import Banner from "../../../components/micro/Banner";

const Banners = ({ bannersPaths = [] }) => {
   return (
      <section>
         <Container
            maxWidth="1366px"
            className="flex py-3 overflow-x-auto gap-7"
         >
            {bannersPaths.map((bannerPath, i) => (
               <Banner
                  key={i}
                  className="w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/4 flex-shrink-0 lg:flex-shrink"
                  src={bannerPath}
               />
            ))}
         </Container>
      </section>
   );
};

export default Banners;
