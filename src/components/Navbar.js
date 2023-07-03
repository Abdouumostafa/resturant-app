import images from "../constants/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";
import { navLinks } from "../constants/data";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <nav className="bg-black sm:px-14 px-4 w-full flex justify-between items-center relative">
      <div className="p-4">
        <img src={images.gericht} alt="logo" className="w-[120px]" />
      </div>

      <ul className="sm:flex hidden flex-row m-3 text-white">
        {navLinks.map((link) => {
          const { id, text, url } = link;
          return (
            <li
              key={id}
              className="mx-4  hover:text-golden transition duration-500"
            >
              <Link
                to={url}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className=" cursor-pointer"
              >
                {text}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => setOpenSidebar((prev) => !prev)}
        className="sm:hidden flex m-4"
      >
        {!openSidebar ? (
          <GiHamburgerMenu className=" text-white cursor-pointer text-[27px]" />
        ) : (
          <MdRestaurantMenu className=" text-golden cursor-pointer text-[27px]" />
        )}
        {openSidebar ? (
          <ul className="sm:hidden flex flex-col absolute top-[66px] left-0 w-full h-fit bg-black slide-bottom">
            {navLinks.map((link) => {
              const { id, text, url } = link;
              return (
                <li
                  key={id}
                  className="mx-4 flex items-center justify-center cursor-pointer w-full font-base text-golden hover:text-white transition duration-500 my-5 text-[22px]"
                >
                  <Link
                    to={url}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className=" cursor-pointer"
                  >
                    {text}
                  </Link>{" "}
                </li>
              );
            })}
          </ul>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};
export default Navbar;
