import images from "../constants/images";
import Button from "./Button";

const AboutUs = () => {
  return (
    <div
      id="/about"
      className="app__bg flex sm:flex-row flex-col bg-black text-white
       items-center justify-center sm:py-16 py-6 sm:px-16 px-6 relative"
    >
      <img
        src={images.G}
        alt="G"
        className="sm:w-[350px] w-[290px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0"
      />
      <div className="flex-1 z-10 sm:text-start text-center">
        <h1 className="font-base sm:text-[50px] text-[32px] mb-4 text-golden font-normal">
          About Us
        </h1>
        <img src={images.spoon} alt="spoon" className="sm:mx-0 mx-auto" />
        <p className="my-6 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <Button title="Know More" />
      </div>
      <div>
        <img
          src={images.knife}
          alt="knife"
          className="sm:h-[600px] h-[450px] relative my-8 mx-16"
        />
      </div>
      <div className="flex-1 z-10 sm:text-start text-center">
        <h1 className="font-base sm:text-[50px] text-[32px] mb-4 text-golden">
          Our History
        </h1>
        <img src={images.spoon} alt="spoon" className="sm:mx-0 mx-auto" />
        <p className="my-6 leading-7">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <Button title="Know More" />
      </div>
    </div>
  );
};
export default AboutUs;
