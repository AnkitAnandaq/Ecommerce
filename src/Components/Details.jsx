import { useEffect, useState, useContext } from "react";
// import axios from "../utils/axios";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";
import { toast } from "react-toastify";
const Details = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  // const getSingleProduct = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     setProduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (!product) {
      setProduct(products.filter((p) => p.id == id)[0]);
    }
  }, []);

  const ProductDeleteHandler = (id) => {
    const FilteredProduct = products.filter((p) => p.id !== id);
    setproducts(FilteredProduct);
    localStorage.setItem("products", JSON.stringify(FilteredProduct));
    toast.success("Product deleted Successfully");
    navigate("/");
  };
  return product ? (
    <div className="flex bg-white items-center justify-center p-4 border rounded-lg shadow-md w-full max-w-4xl mx-auto">
      {/* Image Section */}
      <div className="w-1/3">
        <img
          src={`${product.image}`}
          alt="Product"
          className="w-full rounded-md object-contain"
        />
      </div>

      {/* Details Section */}
      <div className="w-2/3 pl-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {`${product.title}`}
        </h2>
        <p className="text-sm text-gray-500 mb-4">{`${product.category}`}</p>
        <p className="text-red-500 text-xl font-semibold mb-2">
          ${`${product.price}`}
        </p>
        <p className="text-gray-600 text-sm mb-4">{`${product.description}`}</p>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <Link
            to={`/edit/${product.id}`}
            className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600"
          >
            Edit
          </Link>
          <button
            onClick={() => ProductDeleteHandler(product.id)}
            className="px-4 py-2 bg-red-500 text-white text-sm rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center w-full min-h-screen">
      <Loading />
    </div>
  );
};

export default Details;
