import { main } from "-data/categories";
import Fade from "components/micro/Fade";
import { useState } from "react";
import DigitalGoods from "./MegaMenuTabs/DigitalGoods";
import Tools from "./MegaMenuTabs/Tools";

const MegaMenu = ({ show }) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Fade
      show={show}
      className="bg-white rounded-b-xl overflow-hidden shadow-header flex gap-8 inset-x-0 absolute top-full"
    >
      {/* tabs */}
      <div className="bg-gray-50 font-bold py-3">
        {main.map((category, i) => (
          <div
            key={i}
            onMouseOver={() => setCurrentTab(i)}
            className="cursor-pointer flex gap-3 px-4 py-5 text-gray-600 hover:text-red-500 hover:bg-gray-100"
          >
            <category.icon />
            {category.name}
          </div>
        ))}
      </div>

      {/* tabs content */}
      <div className="flex-grow py-5">
        <div hidden={currentTab !== 0}>
          <DigitalGoods />
        </div>

        <div hidden={currentTab !== 1}>
          <Tools hidden={currentTab !== 0} />
        </div>
      </div>
    </Fade>
  );
};

export default MegaMenu;
