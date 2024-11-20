import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(ProductContext);
  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(
      Math.random() * 255
    ).toFixed()},0.4)`;
  };
  // console.log(color());
  return (
    <>
      <nav className="w-[14%] h-full bg-zinc-100 flex flex-col items-center pt-4">
        <a
          className="px-3 py-2 border border-blue-200 text-blue-200"
          href="/create"
        >
          Add new Product
        </a>
        <hr className="w-[80%] my-3" />
        <h1 className="text-xl font-bold w-[80%] mb-3">Category Filter</h1>
        <div className="w-[80%]">
          {distinct_category.map((c, i) => {
            return (
              <Link
                key={i}
                to={`/?category=${c}`}
                className="flex items-center mb-3"
              >
                <span
                  style={{ backgroundColor: color() }}
                  className="mr-2 w-[12px] h-[12px] rounded-full"
                ></span>
                {""}
                {c}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Nav;
