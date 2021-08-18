import { tools } from "-data/categories";
import Banner from "components/micro/Banner";
import { Fragment } from "react";

const Tools = ({ ...rest }) => {
   return (
      <div {...rest} className="flex flex-wrap">
         <p className="font-bold flex-grow w-full mb-6">
            مشاهده همه کالاهای دیجیتال
         </p>

         <ul className="max-h-sm w-3/4 inline-flex flex-col flex-wrap">
            {tools.map((category, i) => (
               <Fragment key={i}>
                  <li className="w-1/4 text-lg py-2 font-bold">
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

         <div className="w-1/5 self-start">
            <Banner src="/static/images/tools-banner.jpg" />
         </div>
      </div>
   );
};

export default Tools;
