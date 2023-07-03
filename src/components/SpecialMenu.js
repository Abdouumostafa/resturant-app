import images from "../constants/images";
import { wines, cocktails } from "../constants/data";
import SubHeading from "./SubHeading";
import Button from "./Button";

const SpecialMenu = () => {
  return (
    <div
      id="/menu"
      className="min-h-[100vh] sm:px-16 px-6 sm:py-16 py-6 text-white"
    >
      <div className="flex items-center flex-col text-center">
        <SubHeading title="Menu that fits you palate" />
        <h1 className="font-base text-goldenfont-base sm:text-[50px] text-[32px] mb-4 text-golden capitalize">
          today's special
        </h1>
      </div>
      <div className="flex md:flex-row flex-col md:items-center items-stretch">
        <div className="flex-1">
          <h1 className="font-base sm:text-[40px] text-[32px] text-center my-6">
            Wine
          </h1>
          {wines.map((wine) => {
            const { title, price, tags } = wine;
            return (
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <p className="font-base text-golden relative text-[20px]">
                    {title}
                  </p>

                  <div className="text-white">${price}</div>
                </div>
                <div className=" text-grey font-base mb-5">{tags}</div>
              </div>
            );
          })}
        </div>

        <img
          src={images.menu}
          alt=""
          className=" w-[350px]  my-10 md:mx-8 mx-auto"
        />

        <div className="flex-1">
          <h1 className="font-base sm:text-[40px] text-[32px] text-center my-6">
            Cocktails
          </h1>
          {cocktails.map((wine) => {
            const { title, price, tags } = wine;
            return (
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <p className="font-base text-golden relative text-[20px]">
                    {title}
                  </p>
                  <div className="line"></div>
                  <div className="text-white">${price}</div>
                </div>
                <div className=" text-grey font-base mb-5">{tags}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Button title="View More" />
      </div>
    </div>
  );
};
export default SpecialMenu;
