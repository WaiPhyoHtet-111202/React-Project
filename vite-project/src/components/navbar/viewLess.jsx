import vector from "../../assets/Vector.svg";
const ViewLess = ({ toggle }) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between justify-center md:items-center px-3 pt-3 md:pb-7 md:px-20 lg:px-32.5 md:pt-15">
      <div className="flex flex-col">
        <h1 className="text-[16px] font-medium text-black">What news?</h1>
        <span className="font-bold text-lg lg:text-2xl  md:text-xl text-nav-text">
          Take a look at some of our pets
        </span>
      </div>

      <button
        onClick={toggle}
        className="flex items-center gap-2 rounded-[57px] border border-nav-text  text-nav-text self-center md:self-auto my-3 md:my-0"
      >
        <span className="ps-7 py-3 font-medium text-[14px]">View Less</span>
        <img className="pe-7 py-3" src={vector}></img>
      </button>
    </div>
  );
};

export default ViewLess;
