import { useState } from "react";

const NavItem = ({ data, subMenuStateCb }) => {
  const { icon, name, SubMenu } = data;

  const [show, setShow] = useState(false);

  // handle show sub menu
  const handleShow = () => {
    setShow(true);
    if (SubMenu) subMenuStateCb(true);
  };

  const handleHidden = () => {
    setShow(false);
    if (SubMenu) subMenuStateCb(false);
  };

  return (
    <li
      onMouseOver={handleShow}
      onMouseOut={handleHidden}
      className="flex items-center gap-2 pl-8"
    >
      {icon}
      <span className="font-bold">{name}</span>
      {SubMenu && <SubMenu show={show} />}
    </li>
  );
};

export default NavItem;
