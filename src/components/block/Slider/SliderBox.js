import Paper from "components/micro/Paper";
import Slider from "./Slider";

const SliderBox = ({ children, title, subTitle, ...rest }) => {
  return (
    <Paper className="w-ful">
      <div className="flex flex-col items-start gap-3 mb-5">
        <span className="font-bold text-2xl">{title}</span>
        <span className="border-b border-red-500 pb-4">{subTitle}</span>
      </div>
      <div>
        <Slider style={{ padding: "20px 0" }} className="h-full" {...rest}>
          {children}
        </Slider>
      </div>
    </Paper>
  );
};

export default SliderBox;
