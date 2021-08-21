import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

const Collapse = ({ show, children }) => {
   const classes = clsx("transition-height duration-400", {
      "overflow-visible": show,
      "overflow-hidden": !show,
   });

   const [height, setHeight] = useState();

   const ref = useRef();

   useEffect(() => {
      setHeight(ref.current.children[0].offsetHeight);
   }, []);

   return (
      <div
         ref={ref}
         className={classes}
         style={{ maxHeight: show ? height + "px" : 0 }}
      >
         <div>{children}</div>
      </div>
   );
};

export default Collapse;
