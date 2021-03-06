const IconBox = ({ iconPath, text, className }) => {
   return (
      <div
         className={["flex flex-col gap-6 items-center", className].join(" ")}
      >
         <div className="w-14 h-14">
            <img
               className="w-full h-full object-contain"
               alt="feature1"
               src={iconPath}
            />
         </div>
         <span>{text}</span>
      </div>
   );
};

export default IconBox;
