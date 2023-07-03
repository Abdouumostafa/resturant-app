import SubHeading from "./SubHeading";
import images from "../constants/images";

const Chef = () => {
  return (
    <div className="app__bg min-h-[100vh] md:px-16 px-6 md:py-16 py-6 text-white flex md:flex-row flex-col-reverse items-center gap-10">
      <div className="flex-1 flex justify-end">
        <img src={images.chef} alt="chef" className="md:w-[500px] w-[350px]" />
      </div>
      <div className="flex-1 md:text-left text-center">
        <SubHeading title="Chef's Word" />
        <h1 className="font-base md:text-[50px] text-[32px] mb-4 text-golden capitalize">
          what we believe in
        </h1>

        <p className="flex gap-1 text-grey mb-16">
          <span>
            <img src={images.quote} alt="quote" className="w-[40px]" />
          </span>
          <em>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </em>
        </p>
        <h2 className="font-base md:text-[32px] text-[22px] mb-4 text-golden ">
          Kevin Luo
        </h2>
        <p className=" text-grey mt-[-6px]">Chef & Founder</p>
        <img
          src={images.sign}
          alt="signature"
          className="md:w-[150px] w-[100px] my-8 md:mx-0 m-auto"
        />
      </div>
    </div>
  );
};
export default Chef;
