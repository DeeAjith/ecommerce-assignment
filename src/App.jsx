import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Login";
import Category from "./components/Category/Category";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./components/Signup";
import mock from "./mockServiceWorker";
import { faker } from "@faker-js/faker";
mock.adapter();

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    if (navData.length === 0) {
      setNavData(getMenu());
    }
  }, [navData.length]); // Empty dependency array: fetch only once on mount

  return (
    <div className="root">
      <Header navData={navData} />
      <main className="my-12">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route
              path="/login"
              element={<Login token={token} setToken={setToken} />}
            />
            <Route path="/" element={
              token
                ? (
                  <>
                    <div className="container relative mx-auto hero max-width-1">
                      <div className="relative min-h-[700px] w-full h-full">
                        <div aria-label="card-horizontal" className="relative flex items-center gap-x-5">
                          <div className="w-full after:rounded-3xl after:bg-orange-300/25 after:w-full after:h-full after:absolute after:left-0 after:top-0">
                            <img className="min-h-[700px] w-full rounded-3xl" src={faker.image.urlPicsumPhotos({ height: 700, width: 1440 })} alt="Hero" srcset={faker.image.urlPicsumPhotos({ height: 700, width: 1440 })} />
                          </div>
                          <div className="absolute flex flex-col p-12 bg-white rounded-xl left-5 bottom-6 right-6 gap-y-1">
                            <h3 className="text-base font-bold text-black">Products of Food Category</h3>
                            <span className="text-sm text-black">Get off on orders $599</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Category />
                  </>
                ) : <Category />} />
            {/* Other routes as needed */}
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </main>
      <footer className="block bg-[#333333] text-white text-center p-4">
        <span>&copy;{new Date().getFullYear()} ECOMMERCE Reserved</span>
      </footer>
    </div>
  );
};

export default App;

function getMenu() {
  return [
    { title: "Categories", id: "categories", path: "/categories" },
    { title: "Sale", id: "sale", path: "/categories?filter=sale" },
    {
      title: "Clearance",
      id: "clearance",
      path: "/categories?filter=clearance",
    },
    {
      title: "New stock",
      id: "new-stock",
      path: "/categories?filter=new-stock",
    },
    {
      title: "Trending",
      id: "tranding",
      path: "/categories?filter=tranding",
    },
  ];
}
