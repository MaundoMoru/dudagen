import { GiTargetDummy } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Appbar() {
  return (
    <div className="flex justify-between px-1/4 py-5 bg-white sticky top-0">
      <div className="flex space-x-4">
        <GiTargetDummy size={30} color="red" />
        <span className="font-semibold text-2xl">Dudagen</span>
      </div>

      <div className="flex space-x-4">
        <div className="p-3 bg-blue-100 rounded rounded-full">
          <IoIosNotificationsOutline size={30} color="" />
        </div>
        <div className="flex space-x-4">
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-200 px-3 py-2 rounded rounded-md text-blue-500 flex justify-between items-center"
                : "border px-3 py-2 rounded rounded-md text-gray-500 flex justify-between items-center"
            }
          >
            Sign up
          </NavLink>
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-200 px-3 py-2 rounded rounded-md text-blue-500 flex justify-between items-center"
                : "border px-3 py-2 rounded rounded-md text-gray-500 flex justify-between items-center"
            }
          >
            Sign in
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
