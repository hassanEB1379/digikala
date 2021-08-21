const Banner = ({ src, className }) => {
   return (
      <div
         className={[
            "cursor-pointer rounded-3xl overflow-hidden shadow-md",
            className,
         ].join(" ")}
      >
         <img className="w-full h-full object-cover" alt="banner" src={src} />
      </div>
   );
};

export default Banner;
