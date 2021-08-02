import Logo from "components/micro/Logo";
import Search from "components/micro/Search";
import useScrollEvent from "hooks/useScrollEvent";
import Collapse from "components/micro/Collapse";
import Button from "components/micro/Button";

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

const menuItems = [
  {
    name: "دسته بندی کالا ها",
    icon: <FiMenu />,
  },
  {
    name: "سوپر مارکت",
    icon: <RiStore2Line />,
  },
  {
    name: "تخفیف ها و پیشنهاد ها",
    icon: <RiPercentLine />,
  },
  {
    name: "دیجی کالای من",
    icon: <IoIosCheckmarkCircleOutline />,
  },
  {
    name: "دیجی پلاس",
    icon: <RiStarLine />,
  },
  {
    name: "دیجی پی",
    icon: <FaMoneyCheck />,
  },
];

const Header = () => {
  const [down] = useScrollEvent();

  return (
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

      <Collapse component="nav" show={!down}>
        <ul className="h-full flex justify-between relative">
          <li>
            <ul className="flex  gap-8">
              {menuItems.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  {item.icon}
                  <span className="font-bold">{item.name}</span>
                  <div className="absolute right-0 left-0 top-full z-10 hidden">
                    {item.subMenu}
                  </div>
                </li>
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
  );
};

export default Header;
