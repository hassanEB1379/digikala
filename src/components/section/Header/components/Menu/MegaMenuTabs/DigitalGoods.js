import { digital } from "-data/categories";
import { Fragment } from "react";

const DigitalGoods = ({ ...rest }) => {
  return (
    <div {...rest} className="flex flex-col">
      <p className="font-bold mb-6">مشاهده همه کالاهای دیجیتال</p>
      <ul className="max-h-sm w-full inline-flex flex-col flex-wrap">
        {digital.map((category, i) => (
          <Fragment>
            <li key={i} className="w-1/4 text-lg py-2 font-bold">
              <a href="/" className="hover:text-red-500">
                {category.name}
              </a>
            </li>
            {category.children &&
              category.children.map((childCategory, i) => (
                <li key={i} className="w-1/4 py-1">
                  <a href="/" className="hover:text-red-500">
                    {childCategory}
                  </a>
                </li>
              ))}
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default DigitalGoods;
