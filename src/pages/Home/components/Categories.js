import Container from "components/micro/Container";
import Paper from "components/micro/Paper";

// icons
import { MdComputer, MdChildCare } from "react-icons/md";
import { FiTool } from "react-icons/fi";
import { FaTshirt, FaPencilRuler, FaLeaf } from "react-icons/fa";
import { GiHotMeal, GiSofa } from "react-icons/gi";
import { RiHeartPulseFill } from "react-icons/ri";
import { IoMdFootball } from "react-icons/io";

const categories = [
  {
    name: "کالای دیجیتال",
    count: "81000",
    icon: MdComputer,
  },
  {
    name: "خودرو ابزار و تجهیزات صنعتی",
    count: "138000",
    icon: FiTool,
  },
  {
    name: "مد و پوشاک",
    count: "622000",
    icon: FaTshirt,
  },
  {
    name: "اسباب بازی کودک و نوزاد",
    count: "67000",
    icon: MdChildCare,
  },
  {
    name: "کالای های سوپر مارکتی",
    count: "56000",
    icon: GiHotMeal,
  },
  {
    name: "زیبایی و سلامت",
    count: "94000",
    icon: RiHeartPulseFill,
  },
  {
    name: "خانه و آشپزخانه",
    count: "460000",
    icon: GiSofa,
  },
  {
    name: "کتاب , لوازم التحریر و هنر",
    count: "250000",
    icon: FaPencilRuler,
  },
  {
    name: "ورزش و مسافرت",
    count: "36000",
    icon: IoMdFootball,
  },
  {
    name: "محصولات بومی و محلی",
    count: "1000",
    icon: FaLeaf,
  },
];

const IconBox = ({ data }) => {
  const { name, count, icon: Icon } = data;
  return (
    <div className="flex flex-col flex-grow gap-5 items-center">
      <Icon color="#00bfd6" size="2.8em" />
      <span className="text-sm">{name} </span>
      <span className="text-sm" style={{ color: "#00bfd6" }}>
        {" "}
        + {count} کالا
      </span>
    </div>
  );
};

const Categories = () => {
  return (
    <section id="categories" className="">
      <Container maxWidth="1366px">
        <Paper className="text-center py-8">
          <div className="mb-8 text-2xl text-center text-gray-500 ">
            بیش از ۴،۰۰۰،۰۰۰ کالا در دسته‌بندی‌های مختلف
          </div>

          <div className="flex gap-8 ">
            {categories.map((item, i) => (
              <IconBox data={item} key={i} />
            ))}
          </div>
        </Paper>
      </Container>
    </section>
  );
};

export default Categories;
