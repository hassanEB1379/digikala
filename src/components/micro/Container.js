import clsx from "clsx";

const Container = ({ children, className, maxWidth }) => {
  const classes = clsx("px-4", { [className]: className });

  return (
    <div className={classes} style={{ maxWidth, margin: "0 auto" }}>
      {children}
    </div>
  );
};

export default Container;
