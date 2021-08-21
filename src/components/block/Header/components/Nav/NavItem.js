import { useState } from "react";

const NavItem = ({ data, subMenuStateCb, setIndicator }) => {
   const { icon, name, DesktopSubMenu } = data;

   const [show, setShow] = useState(false);

   // handle show sub menu
   const handleShow = e => {
      setShow(true);

      setIndicator({
         width: e.target.clientWidth,
         location:
            window.innerWidth - e.target.offsetLeft - e.target.clientWidth,
      });

      if (DesktopSubMenu) subMenuStateCb(true);
   };

   const handleHidden = () => {
      setShow(false);
      setIndicator({ width: 0, location: 0 });
      if (DesktopSubMenu) subMenuStateCb(false);
   };

   return (
      <li
         className="py-3"
         onMouseLeave={handleHidden}
         onMouseEnter={handleShow}
      >
         <span className="flex h-full items-center gap-2 cursor-pointer px-3">
            {icon}
            {name}
         </span>

         {DesktopSubMenu && <DesktopSubMenu show={show} />}
      </li>
   );
};

export default NavItem;
