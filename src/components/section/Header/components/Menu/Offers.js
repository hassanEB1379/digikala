import { main } from "-data/categories";
import Banner from "components/micro/Banner";
import Fade from "components/micro/Fade";

const Offers = ({ show }) => {
  return (
    <Fade
      show={show}
      className="w-md bg-white rounded-b-xl shadow-header flex gap-8 p-4 absolute top-full"
    >
      <div className="w-3/5">
        <p className="mb-8 font-bold">
          <a href="/" className="hover:text-red-500">
            مشاهده همه تخفیف ها و پیشنهاد ها
          </a>
        </p>

        <ul className="flex flex-col flex-wrap gap-4 max-h-96">
          <li className="w-1/2 font-bold text-lg">
            <a href="/" className="hover:text-red-500">
              کالا های شگفت انگیز
            </a>
          </li>

          <li className="w-1/2 font-bold text-lg">
            <a href="/" className="hover:text-red-500">
              شگفت انگیز سوپر مارکتی
            </a>
          </li>

          <li className="w-1/2 font-bold text-lg">
            <a href="/" className="hover:text-red-500">
              فروش ویژه
            </a>
          </li>

          {main.map((category, i) => (
            <li key={i} className="w-1/2">
              <a href="/" className="hover:text-red-500">
                {category.name}
              </a>
            </li>
          ))}

          <hr />
        </ul>
      </div>

      <div className="w-2/5">
        <Banner src="/static/images/offers.jpg" />
      </div>
    </Fade>
  );
};

export default Offers;
