import clsx from "clsx";

const Paper = ({ children, className }) => {
  const classes = clsx("rounded-xl shadow-md bg-white py-5 px-10", {
    [className]: className,
  });

  return <div className={classes}>{children}</div>;
};

export default Paper;
