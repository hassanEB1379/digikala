import clsx from "clsx";

const Collapse = (props) => {
  const { component: Component = "div", children, show } = props;

  const classes = clsx(
    "transition-height duration-400",
    {
      "h-0 invisible": !show,
    },
    {
      "h-12": show,
    }
  );

  return <Component className={classes}>{children}</Component>;
};

export default Collapse;
