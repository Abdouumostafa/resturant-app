import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  const icons = [<BsFacebook />, <BsInstagram />, <BsTwitter />];
  return (
    <footer className="sm:py-16 py-6 sm:px-16 px-6 grid items-center sm:grid-cols-3 flex-col ">
      <div className="text-center sm:m-0 m-6">
        <h2 className="font-base text-golden text-[20px] mb-4">Contact Us</h2>
        <p className="text-grey leading-7">
          <em>
            9 W 53rd St, New York, NY 10019, USA <br />
            +1 212-344-1230 <br />
            +1 212-555-1230
          </em>
        </p>
      </div>
      <div className="text-center sm:m-0 m-6 ">
        <h2 className="font-base text-golden text-[44px]">Gerícht</h2>
        <p className="text-grey leading-7">
          <em>
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </em>
        </p>
        <div className="flex justify-center items-center gap-6 text-white">
          {icons.map((icon) => {
            return (
              <div className="mt-6 cursor-pointer text-[18px]">{icon}</div>
            );
          })}
        </div>
      </div>
      <div className="text-center ">
        <h2 className="font-base text-golden text-[20px] mb-4">
          Working Hours
        </h2>
        <p className="text-grey leading-7">
          <em>
            Monday-Friday: <br />
            08:00 am -12:00 am <br />
            Saturday-Sunday: <br />
            07:00am -11:00 pm
          </em>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
