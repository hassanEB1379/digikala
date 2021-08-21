import { useState, Children, cloneElement } from "react";

const Nav = ({ children, ...rest }) => {
   const [indicator, setIndicator] = useState({ width: 0, location: 0 });
   /* location ==> distance to right edge */

   return (
      <>
         <nav {...rest}>
            <ul className="flex h-full -mr-3 text-gray-600 ">
               {/* pass setIndicator to nav items*/}
               {Children.map(children, child => {
                  return cloneElement(child, { setIndicator }, null);
               })}
            </ul>
         </nav>

         {/* nav item indicator */}
         <div
            style={{
               width: indicator.width,
               transform: `translate3d(-${indicator.location - 59}px , 0 ,0)`,
            }}
            className="absolute h-1 -mr-3 pointer-events-none transition-all duration-300 bg-red-500 top-full -mt-1"
         />
      </>
   );
};

export default Nav;
