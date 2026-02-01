import { Link } from "react-router-dom";
import { navData } from "../../constant/navData";
import { MdOutlineClose } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className=" bg-gradient-to-bl from-sky-950 to-blue-400 shadow-md fixed top-0 left-0 z-50 w-full">
      <div className="container mx-auto flex items-center justify-between p-4 py-6">
        {/* Logo */}
        <div className="text-xl font-bold text-orange-400 flex">
          <a
            href={navData.find((item) => item.tilte === "GS EXPERIENCE")?.link}
            className="flex items-center space-x-2 "
          >
            <span>
              {navData.find((item) => item.tilte === "GS EXPERIENCE")?.tilte ||
                "Brand"}
            </span>
          </a>
        </div>
        <div
          className="hidden md:flex  justify-between items-center
        space-x-9"
        >
          {navData.slice(1).map((item) => (
            <Link
              key={item._id}
              to={item.link}
              className="flex items-center text-white hover:text-gray-400 hover:underline font-bold space-x-2"
            >
              <span>{item.tilte}</span>
            </Link>
          ))}
        </div>
        <div className="md:hidden text-white text-2xl font-bold">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <MdOutlineClose className="text-2xl font-bold" />
            ) : (
              <CiMenuFries className="text-2xl font-bold" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-transparent ">
          <div className="space-y-2 p-4">
            {navData.slice(1).map((item) => (
              <Link
                key={item._id}
                to={item.link}
                className=" flex flex-col text-white  hover:text-gray-400 hover:underline font-semibold"
              >
                <div className="flex gap-1">
                  <span>{item.tilte}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
