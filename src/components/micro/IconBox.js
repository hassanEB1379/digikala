const IconBox = ({ iconPath, text }) => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="w-12 h-12">
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
