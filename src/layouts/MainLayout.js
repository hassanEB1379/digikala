import Home from "pages/Home/Home";
import Footer from "components/section/Footer/Footer";
import Header from "components/section/Header/Header";

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
