import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import healthImage from "../assets/health.svg";
import messageImage from "../assets/message.svg";
import gurenteeImage from "../assets/gurantee.svg";

const DetailPage = ({ data }) => {
  const { id } = useParams();
  const detail = data.find((t) => t.id === id);
  const otherCard = data.filter((t) => t.id !== id);
  const navigate = useNavigate();
  const randomIndex = Math.floor(Math.random() * 15);
  const switchRoute = () => {
    navigate("/");
  };
  const switchDetail = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <>
      {console.log(detail)}
      <div className="flex  flex-col gap-5 items-center ">
        <div className="flex flex-col px-3 lg:grid lg:grid-cols-2 gap-8 xl:px-32.5 md:px-25 lg:px-15">
          <div className="flex flex-col gap-2  pt-5">
            <div className="flex flex-col md:flex-row gap-2 bg-linear rounded-2xl text-[10px] lg:text-[10px] md:text-[13px] xl:text-[11px] md:justify-between md:items-center">
              <span className="flex gap-2 ps-3 pt-2 md:py-3 items-center">
                <img src={healthImage} alt="..." />
                100% health gurantee for pets
              </span>
              <span className="flex gap-1 ps-3 pb-2 lg:ps-1  md:py-3 md:pe-4 items-center ">
                <img src={gurenteeImage} alt="..." />
                100% gurantee of pet identification
              </span>
            </div>
            <img
              className="w-full h-auto object-cover"
              src={detail.avatar}
              alt="..."
            />
          </div>
          <div className="flex flex-col gap-4 px-3  md:pt-5 w-full ">
            <div className="flex flex-col gap-2">
              <span className="font-medium text-[14px] text-netural-color-40">
                SKU #{detail.sku}
              </span>
              <span className="font-bold text-2xl text-netural-color">
                {detail.name}
              </span>
              <span className="font-bold text-[20px] text-primary-dark-blue">
                {detail.price}VND
              </span>
            </div>
            <div className="flex gap-2 md:gap-2">
              <button className="bg-nav-text rounded-[57px] border px-2 py-2 md:px-7 md:pt-3 md:pb-2 lg:px-10 lg:py-0 text-[12px] md:text-[16px] font-bold text-netural-color-white">
                Contact us
              </button>
              <button className="flex justify-center gap-2 rounded-[57px] border-2 border-nav-text items-center ">
                <img className=" md:ps-4 ps-2 py-2" src={messageImage}></img>
                <span className="md:pe-3 pe-1 py-2 text-[12px] md:text-[14px] font-bold text-primary-dark-blue">
                  Chat with Monito
                </span>
              </button>
            </div>
            <div className="text-[14px] text-netural-gray ">
              <div className="grid grid-cols-4 items-center border-b border-b-border-color">
                <span className="ps-3 col-span-2  py-2">SKU</span>
                <span className="ps-3 col-span-2">: #{detail.sku}</span>
              </div>
              <div className="grid grid-cols-4 items-center border-b border-b-border-color">
                <span className="ps-3 col-span-2  py-2">Gender</span>
                <span className="ps-3 col-span-2">: #{detail.gender}</span>
              </div>
              <div className="grid grid-cols-4 items-center border-b border-b-border-color">
                <span className="ps-3 col-span-2 py-2">Age</span>
                <span className="ps-3 col-span-2">: #{detail.age}</span>
              </div>
              <div className="grid grid-cols-4 items-center border-b border-b-border-color">
                <span className="ps-3 col-span-2 py-2">Color</span>
                <span className="ps-3 col-span-2">: #{detail.color}</span>
              </div>
              <div className="grid grid-cols-4 items-center border-b border-b-border-color">
                <span className="ps-3 col-span-2  py-2">Type</span>
                <span className="ps-3 col-span-2">: #{detail.type}</span>
              </div>
              <div className="grid grid-cols-4 items-center border-b border-b-border-color">
                <span className="ps-3 col-span-2 py-2">Location</span>
                <span className="ps-3 col-span-2">: #{detail.location}</span>
              </div>
              <div className="grid grid-cols-4  border-b border-b-border-color">
                <span className="ps-3 col-span-2 pt-1">Published date</span>
                <div className="ps-3 col-span-2 pt-1 flex gap-1">
                  <span>:</span>
                  <span>#{detail.published_date}</span>
                </div>
              </div>
              <div className="grid grid-cols-4  border-b border-b-border-color">
                <span className="ps-3 col-span-2 pt-1">Information</span>
                <div className="ps-3 col-span-2 pt-1 flex gap-1">
                  <span>:</span>
                  <span>#{detail.information}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col px-3 md:px-25  xl:px-32.5 lg:px-15 pt-15 gap-1">
            <p className="text-[16px] font-medium text-black">What news?</p>
            <span
              onClick={switchRoute}
              className="font-bold text-2xl text-nav-text"
            >
              See More Puppies
            </span>
          </div>
          <div className="flex flex-col px-3 md:grid md:grid-cols-2 lg:grid-cols-4 md:px-25 lg:px-15 xl:px-32.5 gap-5 pt-7">
            {otherCard.slice(randomIndex, randomIndex + 4).map((card) => (
              <div
                key={card.id}
                className="flex flex-col gap-2 bg-white rounded-lg"
              >
                <img
                  onClick={() => switchDetail(card.id)}
                  className="px-2 pt-2 rounded-lg"
                  src={card.avatar}
                  alt="img"
                />
                <div className="flex flex-col gap-1 pb-5">
                  <h1 className="font-bold text-[16px] px-2 text-netural-color">
                    {card.name}
                  </h1>
                  <div className="flex px-2 text-[12px] gap-2 text-netural-gray">
                    <span>Gender: {card.gender}</span>
                    <span>Age:{card.age}</span>
                  </div>
                  <span className="px-2  text-netural-color font-bold text-[14px]">
                    {card.price} VND
                  </span>
                </div>
                {console.log(randomIndex)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
