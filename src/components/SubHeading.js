import images from "../constants/images";

const SubHeading = ({ title }) => {
  return (
    <div className=" mb-4">
      <p className="font-base text-[18px]">{title}</p>
      <img src={images.spoon} alt="spoon" className=" sm:mx-0 mx-auto mt-2" />
    </div>
  );
};
export default SubHeading;
