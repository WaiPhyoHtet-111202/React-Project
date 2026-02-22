import { useEffect, useState } from "react";
import ViewMore from "./components/navbar/viewMore";
import ViewLess from "./components/navbar/viewLess";
import MoreCard from "./pages/moreCard";
import LessCard from "./pages/lessCard";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Notfound from "./pages/notFound";
import DetailPage from "./pages/detailPage";

const App = () => {
  const [value, setData] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const dataPath = async () => {
      const data = await fetch(
        "https://6996c1207d17864365752ee4.mockapi.io/api/v1/pets",
      );
      const response = await data.json();
      setData(response);
    };
    dataPath();
  }, []);
  const showCard = () => {
    setShow((prev) => {
      return (prev = !prev);
    });
    console.log(show);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="bg-gray-100 flex flex-col justify-center ">
                {show ? (
                  <>
                    <ViewMore toggle={showCard} />
                    <LessCard data={value} />
                  </>
                ) : (
                  <>
                    <ViewLess toggle={showCard} />
                    <MoreCard data={value} />
                  </>
                )}
              </div>
            }
          />
          <Route path="/detail/:id" element={<DetailPage data={value} />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
