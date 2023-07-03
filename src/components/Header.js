import images from "../constants/images";
import SubHeading from "./SubHeading";
import Button from "./Button";

const Header = () => {
  return (
    <div
      id="/home"
      className=" min-h-[100vh] sm:py-16 py-6 sm:px-16 px-6 flex justify-between items-center ss:flex-row flex-col sm:mb-0 mb-5 sm:gap-0 gap-4 "
    >
      <div className="flex flex-col flex-1 w-full justify-center items-start text-white">
        <SubHeading title="Chase the new Flavour" />
        <h1 className="font-base uppercase text-golden font-bold sm:text-[80px] text-[50px] mb-4">
          The key to Fine dining
        </h1>
        <p className="mb-6">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <Button title="Explore Menu" />
      </div>
      <div className=" flex items-center justify-center flex-1 ">
        <img src={images.welcome} alt="welcome" className=" max-w-[65%]" />
      </div>
    </div>
  );
};
export default Header;
