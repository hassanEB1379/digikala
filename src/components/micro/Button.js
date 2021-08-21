import clsx from "clsx";

const Button = ({
   children,
   iconEnd,
   iconStart,
   color = "black",
   variant = "outlined",
   classes = {},
}) => {
   const ContainerClasses = clsx(
      "flex gap-4 items-center justify-center cursor-pointer rounded-xl text-center font-medium p-4",
      {
         [`border border-${color} text-${color}`]: variant === "outlined",
         [`bg-${color}-500 text-white`]: variant === "contained",
         [classes.root]: classes.root,
      }
   );

   return (
      <div className={ContainerClasses}>
         {iconStart && iconStart}
         <span className={classes.text}>{children}</span>
         {iconEnd && iconEnd}
      </div>
   );
};

export default Button;
