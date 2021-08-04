import clsx from "clsx";

const Fade = ({ show, children, className, ...rest }) => {
  const classes = clsx("transiton-opacity duration-300", {
    "opacity-100  pointer-events-auto": show,
    "opacity-0  pointer-events-none": !show,
    [className]: className,
  });

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};

export default Fade;
