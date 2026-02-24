import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LessCard = ({ data }) => {
  const navigate = useNavigate();
  const switchRoute = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <>
      <div className="flex flex-col gap-4  md:grid lg:grid-cols-4 md:grid-cols-2 md:gap-5 md:px-20 lg:px-32.5 px-3">
        {data ? (
          data.slice(0, 8).map((t) => (
            <div key={t.id} className="flex flex-col gap-2 bg-white rounded-lg">
              <img
                onClick={() => switchRoute(t.id)}
                className="px-2 pt-2 rounded-lg"
                src={t.avatar}
                alt="img"
              />
              <div className="flex flex-col gap-1 pb-5">
                <h1 className="font-bold text-[16px] px-2 text-netural-color">
                  {t.name}
                </h1>
                <div className="flex px-2 text-[12px] gap-2 text-netural-gray">
                  <span>Gender: {t.gender}</span>
                  <span>Age:{t.age}</span>
                </div>
                <span className="px-2  text-netural-color font-bold text-[14px]">
                  {t.price} VND
                </span>
              </div>
            </div>
          ))
        ) : (
          <h1>There is no data</h1>
        )}
      </div>
    </>
  );
};
export default LessCard;
