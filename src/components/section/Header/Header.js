import Logo from "components/micro/Logo";
import Search from "./components/Search/Search";
import useScrollEvent from "hooks/useScrollEvent";
import Collapse from "components/micro/Collapse";
import Button from "components/micro/Button";
import DigiPay from "./components/Menu/DigiPay";
import { useState } from "react";
import DigiPlus from "./components/Menu/DigiPlus";
import NavItem from "./components/NavItem/NavItem";
import Fade from "components/micro/Fade";
import Offers from "./components/Menu/Offers";

// icons
import {
  RiUserLine,
  RiStore2Line,
  RiPercentLine,
  RiStarLine,
} from "react-icons/ri";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaMoneyCheck } from "react-icons/fa";
import MegaMenu from "./components/Menu/MegaMenu";

const menuItems = [
  {
    name: "دسته بندی کالا ها",
    icon: <FiMenu />,
    SubMenu: MegaMenu,
  },
  {
    name: "سوپر مارکت",
    icon: <RiStore2Line />,
  },
  {
    name: "تخفیف ها و پیشنهاد ها",
    icon: <RiPercentLine />,
    SubMenu: Offers,
  },
  {
    name: "دیجی کالای من",
    icon: <IoIosCheckmarkCircleOutline />,
  },
  {
    name: "دیجی پلاس",
    icon: <RiStarLine />,
    SubMenu: DigiPlus,
  },
  {
    name: "دیجی پی",
    icon: <FaMoneyCheck />,
    SubMenu: DigiPay,
  },
];

const Header = () => {
  const [down] = useScrollEvent();

  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);

  return (
    <>
      <header className="px-8 w-full bg-white shadow-header fixed z-20">
        <div className="flex py-4">
          <div className="flex items-center w-2/3">
            <Logo />

            <Search />
          </div>

          <div className="flex w-1/3 justify-end items-center">
            <Button icon={<RiUserLine />}>ورود به ناحیه کاربری</Button>

            <a href="/" className="pr-6">
              <FiShoppingCart size="1.5em" />
            </a>
          </div>
        </div>

        {/* navbar */}
        <Collapse component="nav" show={subMenuIsOpen || !down}>
          <ul className="h-full flex justify-between relative">
            <li className="h-full">
              <ul className="flex h-full">
                {menuItems.map((item, i) => (
                  <NavItem
                    subMenuStateCb={setSubMenuIsOpen}
                    data={item}
                    key={i}
                  />
                ))}
              </ul>
            </li>

            <li className="flex items-center gap-3">
              <p>لطفا شهر و استان خود را انتخاب کنید</p>
              <GoLocation />
            </li>
          </ul>
        </Collapse>
      </header>

      <Fade
        id="navbar-overlay"
        className="fixed inset-0 z-10 bg-gray-900 bg-opacity-30"
        show={subMenuIsOpen}
      />
    </>
  );
};

export default Header;
