// icons
import { FiMenu } from "react-icons/fi";
import { RiPercentLine, RiStarLine, RiStore2Line } from "react-icons/ri";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaMoneyCheck } from "react-icons/fa";

// sub menus
import {
   MegaMenuDesk,
   MegaMenuMobile,
} from "../components/block/Header/components/Menu/MegaMenu/MegaMenu";
import {
   OffersDesk,
   OffersMobile,
} from "../components/block/Header/components/Menu/Offers";
import {
   DigiPlusDesk,
   DigiPlusMobile,
} from "../components/block/Header/components/Menu/DigiPlus";
import {
   DigiPayDesk,
   DigiPayMobile,
} from "../components/block/Header/components/Menu/DigiPay";

const navItems = [
   {
      name: "دسته بندی کالا ها",
      icon: <FiMenu />,
      DesktopSubMenu: MegaMenuDesk,
      MobileSubMenu: MegaMenuMobile,
   },
   {
      name: "سوپر مارکت",
      icon: <RiStore2Line />,
   },
   {
      name: "تخفیف ها و پیشنهاد ها",
      icon: <RiPercentLine />,
      DesktopSubMenu: OffersDesk,
      MobileSubMenu: OffersMobile,
   },
   {
      name: "دیجی کالای من",
      icon: <IoIosCheckmarkCircleOutline />,
   },
   {
      name: "دیجی پلاس",
      icon: <RiStarLine />,
      DesktopSubMenu: DigiPlusDesk,
      MobileSubMenu: DigiPlusMobile,
   },
   {
      name: "دیجی پی",
      icon: <FaMoneyCheck />,
      DesktopSubMenu: DigiPayDesk,
      MobileSubMenu: DigiPayMobile,
   },
];

export default navItems;
