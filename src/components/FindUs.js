import images from "../constants/images";
import Button from "./Button";
import SubHeading from "./SubHeading";

const FindUs = () => {
  return (
    <div
      id="/contact"
      className="app__bg sm:py-16 py-6 sm:px-16 px-6 flex text-white sm:flex-row flex-col items-center"
    >
      <div className="flex-1 sm:text-start text-center sm:mb-0 mb-8">
        <SubHeading title="contact" />
        <h1 className="font-base text-golden md:text-[60px] text-[50px]">
          Find Us
        </h1>
        <p className="text-grey mb-8">
          <em>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</em>
        </p>
        <h2 className="text-golden text-[26px] font-base capitalize mb-4">
          opening hours
        </h2>
        <p className=" leading-8 mb-12">
          Mon - Fri: 10:00 am - 02:00 am <br />
          Sat - Sun: 10:00 am - 03:00 am
        </p>
        <Button title="View Us" />
      </div>
      <div className="flex-1">
        <img src={images.findus} alt="find us" className="w-[450px]" />
      </div>
    </div>
  );
};
export default FindUs;
