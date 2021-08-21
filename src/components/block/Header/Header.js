import Logo from "components/micro/Logo";
import Search from "./components/Search/Search";
import useScrollEvent from "hooks/useScrollEvent";
import Collapse from "components/micro/Collapse";
import Button from "components/micro/Button";
import { useState } from "react";
import Fade from "components/micro/Fade";
import Nav from "./components/Nav/Nav";
import NavItem from "./components/Nav/NavItem";
import MobileNav from "./components/Nav/MobileNav";
import MobileNavItem from "./components/Nav/MobileNavItem";
import MobileSearch from "./components/Search/MobileSearch";

// icons
import { RiUserLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

// nav items
import navItems from "../../../utils/navItems";

const Header = () => {
   const [down] = useScrollEvent();

   const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);

   return (
      <>
         <header className="px-8 w-full bg-white shadow-header fixed z-20">
            {/* top section */}
            <div className="flex flex-wrap py-4 relative">
               <div className="flex items-center w-2/3">
                  <Logo />

                  <Search />
               </div>

               <div className="flex w-1/3 justify-end items-center">
                  <Button
                     classes={{ text: "hidden lg:inline-block" }}
                     iconStart={<RiUserLine />}
                  >
                     ورود به ناحیه کاربری
                  </Button>

                  <a href="/" className="pr-6">
                     <FiShoppingCart size="1.5em" />
                  </a>

                  <MobileSearch />
               </div>
            </div>

            {/* navbar */}
            <Collapse show={subMenuIsOpen || !down}>
               <div className="flex h-12 justify-between relative">
                  {/* desktop nav */}
                  <Nav className="h-full hidden lg:block">
                     {navItems.map((item, i) => (
                        <NavItem
                           subMenuStateCb={setSubMenuIsOpen}
                           data={item}
                           key={i}
                        />
                     ))}
                  </Nav>

                  {/* mobile nav */}
                  <MobileNav className="lg:hidden">
                     {navItems.map((item, i) => (
                        <MobileNavItem data={item} key={i} />
                     ))}
                  </MobileNav>

                  <div className="flex items-center gap-3">
                     <p>لطفا شهر و استان خود را انتخاب کنید</p>
                     <GoLocation />
                  </div>
               </div>
            </Collapse>
         </header>

         {/* background overlay */}
         <Fade
            id="navbar-overlay"
            className="fixed inset-0 z-10 bg-gray-900 bg-opacity-30"
            show={subMenuIsOpen}
         />
      </>
   );
};

export default Header;
