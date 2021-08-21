import { main } from "-data/categories";
import Container from "components/micro/Container";
import Paper from "components/micro/Paper";

const IconBox = ({ data }) => {
   const { name, count, icon: Icon } = data;
   return (
      <div className="flex flex-col flex-grow flex-shrink-0 gap-5 items-center">
         <Icon color="#00bfd6" size="2.8em" />
         <span className="text-sm">{name} </span>
         <span className="text-sm" style={{ color: "#00bfd6" }}>
            + {count} کالا
         </span>
      </div>
   );
};

const Categories = () => {
   return (
      <section id="categories">
         <Container maxWidth="1366px">
            <Paper className="text-center py-8">
               <div className="mb-8 text-2xl text-center text-gray-500 ">
                  بیش از ۴،۰۰۰،۰۰۰ کالا در دسته‌بندی‌های مختلف
               </div>

               <div className="flex overflow-x-auto overflow-y-hidden gap-8 pb-3">
                  {main.map((item, i) => (
                     <IconBox data={item} key={i} />
                  ))}
               </div>
            </Paper>
         </Container>
      </section>
   );
};

export default Categories;
