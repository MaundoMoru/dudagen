import { GiTargetDummy } from "react-icons/gi";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
function TopBar() {
  return (
    <div className="bg-white p-4 rounded rounded-md flex justify-between mb-4">
      <div className="flex space-x-4">
        <span>Try now!</span>
      </div>
      <Link
        to="/formpage"
        className="flex space-x-3 items-center text-blue-600 cursor-pointer"
      >
        <AiOutlineEdit />
        <span>Add</span>
      </Link>
    </div>
  );
}

export default TopBar;
