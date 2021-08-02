import clsx from "clsx";
import { useEffect, useState } from "react";
import calculateTimeLeft from "utils/calculateTimeLeft";

// icons
import { BiTime } from "react-icons/bi";

const Timer = ({ eventDate, className }) => {
  const [currentDate, setCurrentDate] = useState(calculateTimeLeft(eventDate));

  const classes = clsx("flex gap-3 text-lg font-medium", {
    [className]: className,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentDate(calculateTimeLeft(eventDate));
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentDate, eventDate]);

  return (
    <div className={classes}>
      <div>
        {currentDate.seconds} : {currentDate.minutes} : {currentDate.hours}
      </div>

      <div>{currentDate.days} روز</div>

      <BiTime />
    </div>
  );
};

export default Timer;
