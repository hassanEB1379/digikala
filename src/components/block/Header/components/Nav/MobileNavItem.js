import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/all";

const MobileNavItem = ({ data }) => {
   const { icon, name, MobileSubMenu } = data;

   const [show, setShow] = useState(false);

   // handle show sub menu
   const handleShow = () => {
      setShow(!show);
   };

   const arrowIcon = (
      <span>{show ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
   );

   return (
      <>
         <li className="p-3" onClick={handleShow}>
            <span className="flex h-full items-center gap-2 cursor-pointer px-3">
               {icon}
               {name}
               {MobileSubMenu && arrowIcon}
            </span>
         </li>
         {MobileSubMenu && <MobileSubMenu show={show} />}
      </>
   );
};

export default MobileNavItem;
