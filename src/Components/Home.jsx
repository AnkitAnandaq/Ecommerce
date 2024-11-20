import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredProducts, setFilteredProducts] = useState(null);

  // const getProductsCategory = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/category/${category}`);
  //     setFilteredProducts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (!filteredProducts || category === "undefined")
      setFilteredProducts(products);
    if (category !== "undefined") {
      // getProductsCategory();
      setFilteredProducts(products.filter((p) => p.category == category));
    }
  }, [category, products]);

  console.log(filteredProducts);
  return products ? (
    <>
      <Nav />
      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProducts &&
          filteredProducts.map((p, i) => {
            return (
              <Link
                key={i}
                to={`/details/${p.id}`}
                className="card mr-3 mb-3 p-3 border shadow rounded h-[30vh] w-[18%]  flex flex-col justify-center items-center"
              >
                <div
                  className="hover:scale-110 mb-3 w-full h-[80%] bg-no-repeat bg-contain bg-center"
                  style={{
                    backgroundImage: `url(${p.image})`,
                  }}
                ></div>
                <h1 className="hover:text-blue-300">{p.title}</h1>
              </Link>
            );
          })}
      </div>
    </>
  ) : (
    <div className="flex items-center justify-center w-full min-h-screen">
      <Loading />
    </div>
  );
};

export default Home;
