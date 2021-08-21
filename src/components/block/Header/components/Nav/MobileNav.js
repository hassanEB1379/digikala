import { FiMenu } from "react-icons/all";
import Collapse from "../../../../micro/Collapse";
import { useState } from "react";

const MobileNav = ({ children, ...rest }) => {
   const [showNav, setShowNav] = useState(false);

   const handleShow = () => setShowNav(!showNav);

   return (
      <div {...rest}>
         <span onClick={handleShow} className="cursor-pointer">
            <FiMenu size="2rem" />
         </span>

         <div className="absolute top-full right-0 left-0">
            <Collapse show={showNav}>
               <nav className="bg-white pb-5 shadow-header rounded-b-md">
                  <ul className="flex flex-col -mr-3 text-gray-600 ">
                     {children}
                  </ul>
               </nav>
            </Collapse>
         </div>
      </div>
   );
};

export default MobileNav;
