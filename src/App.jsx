import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Create from "./Components/Create";
import Edit from "./Components/Edit";

const App = () => {
  const { search, pathname } = useLocation();
  return (
    <>
      <div className="w-screen h-screen bg-white flex">
        {(pathname != "/" || search.length > 0) && (
          <Link
            to="/"
            className="absolute left-[23%] top-[3%] bg-red-500 text-white py-2 px-5 rounded-md text-base font-medium tracking-normal shadow-sm hover:bg-red-600 hover:shadow-md transition-all duration-200 ease-in-out"
          >
            Home
          </Link>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
