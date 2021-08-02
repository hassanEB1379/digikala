import clsx from "clsx";

const Button = ({ children, icon, color = "black", variant = "outlined" }) => {
  const classes = clsx(
    "flex gap-4 items-center justify-center cursor-pointer rounded-xl text-center font-medium p-4",
    {
      [`border border-${color} text-${color}`]: variant === "outlined",
    },
    {
      [`bg-${color}-500 text-white`]: variant === "contained",
    }
  );

  return (
    <div className={classes}>
      {icon}
      {children}
    </div>
  );
};

export default Button;
