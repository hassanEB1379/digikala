const Banner = ({ src }) => {
  return (
    <div className="cursor-pointer rounded-3xl overflow-hidden shadow-md h-full">
      <img className="w-full h-full object-cover" alt="banner" src={src} />
    </div>
  );
};

export default Banner;
