import { BiSearch, IoClose } from "react-icons/all";
import { useState } from "react";

const MobileSearch = () => {
   const [show, setShow] = useState(false);

   const handleShow = () => setShow(true);
   const handleClose = () => setShow(false);

   return (
      <>
         <span className="lg:hidden pr-4" onClick={handleShow}>
            <BiSearch size="1.5em" />
         </span>
         <div
            style={{ height: 69 }}
            className={`w-full lg:hidden absolute left-0 bg-white p-3 z-50 transition-all bottom-${
               show ? 0 : "full"
            }`}
         >
            <div className="relative">
               <input
                  className="bg-gray-100 w-full py-4 px-10 rounded-md leading-loose font-thin"
                  type="text"
                  placeholder="جستجو در دیجی کالا ..."
               />

               <span
                  onClick={handleClose}
                  className="absolute text-gray-400 left-2.5 top-3.5"
               >
                  <IoClose size="2em" />
               </span>
            </div>
         </div>
      </>
   );
};

export default MobileSearch;
