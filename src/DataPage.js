import { useLocation } from "react-router-dom";
import { BsFilter } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";

function DataPage() {
  let location = useLocation();

  return (
    <div className="p-4 bg-white rounded rounded-md mb-4">
      <div className="flex justify-between">
        <span className="font-semibold text-xl text-purple-500">
          {location.state.title}
        </span>
        <div className="flex">
          <span className="text-blue-400">
            <BsFilter size={30} />
          </span>
          <span>
            <BsToggleOn size={30} color="blue" />
          </span>
        </div>
      </div>
      <div>{location.state.description}</div>
      <div className="flex justify-between mt-6 mb-2">
        <span>Table name </span>
        {location.state.charges === "free" ? (
          <span className="px-2 py-1 border">
            Record {location.state.charges} chrges
          </span>
        ) : (
          <span className="px-2 py-1 border">
            {location.state.charges} of charge
          </span>
        )}
      </div>
      <hr />
      {location.state.table_columns.map((table) => {
        return (
          <div className="flex justify-between mt-3 font-semibold mb-2">
            <div className="flex space-x-3">
              <div>
                <input type="checkbox" />
              </div>
              <div>{table}</div>
            </div>
            <div className="flex space-x-3 text-gray-500">
              <div className=" cursor-pointer">
                <CiEdit size={20} />
              </div>
              <div className=" cursor-pointer">
                <AiOutlineDelete size={18} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DataPage;
