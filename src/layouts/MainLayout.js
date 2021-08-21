import Home from "pages/Home/Home";
import Footer from "components/block/Footer/Footer";
import Header from "components/block/Header/Header";

const MainLayout = () => {
   return (
      <>
         <Header />

         <main className="pt-32">
            <Home />
         </main>

         <Footer />
      </>
   );
};

export default MainLayout;
