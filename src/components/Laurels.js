import images from "../constants/images";
import SubHeading from "./SubHeading";
import { awards } from "../constants/data";

const Laurels = () => {
  return (
    <div
      id="/awards"
      className="relative min-h-[100vh] md:px-16 px-6 md:py-16 py-6 text-white"
    >
      <div className=" flex sm:flex-row flex-col items-center">
        <div className="flex-1 flex flex-col md:items-start items-center sm:mb-0 mb-8">
          <SubHeading title="Awards & recognition" />
          <h1 className="font-base text-golden md:text-[60px] text-[50px]">
            our laurels
          </h1>
          <div className="flex flex-wrap">
            {awards.map((award, index) => {
              const { imgUrl, title, subtitle } = award;
              return (
                <div
                  key={index}
                  className="flex md:justify-start justify-center gap-6 items-center md:w-[40%] w-full m-4"
                >
                  <div>
                    <img src={imgUrl} alt="awards" className="w-[80px]" />
                  </div>
                  <div>
                    <h2 className="font-base text-golden text-[26px]">
                      {title}
                    </h2>
                    <p className="text-grey">
                      <em>{subtitle}</em>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-1">
          <img src={images.laurels} alt="laurels" className="w-[450px]" />
        </div>
      </div>
    </div>
  );
};
export default Laurels;
