import logo from "./logo.svg";
import "./App.css";
import { GiTargetDummy } from "react-icons/gi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";
import { BiEdit, BiRightArrowCircle } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

function MainLayout() {
  let usage = [
    { title: "Created new record", date: "Jan 12" },
    { title: "Created Changed password", date: "Feb 22" },
    { title: "Deleted users table", date: "May 19" },
    { title: "Created new record", date: "Jun 12" },
    { title: "Created new record", date: "Jun 19" },
    { title: "Credited your account", date: "Jun 19" },
  ];

  let records = [
    {
      title: "Dummy users",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ...",
      charges: "$20.00",
      date: "Jan 12",
      iterations: "10",
      table_columns: ["name", "age", "occupation"],
    },
    {
      title: "UAT posts",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ...",
      charges: "Free",
      date: "Jan 12",
      table_columns: ["Post", "Time", "Likes", "Views"],
      iterations: "10",
    },
  ];

  return (
    <div className="mx-1/4 flex my-10 space-x-4 h-0">
      <div className="flex-col flex-1">
        <div className="bg-white p-4 rounded rounded-md flex justify-between">
          <div className="flex space-x-4">
            <GiTargetDummy size={30} color="red" />
            <span className="font-semibold text-2xl">Dudagen</span>
          </div>
          <div className="flex space-x-3 items-center text-blue-600 cursor-pointer">
            <AiOutlineEdit />
            <span>Add</span>
          </div>
        </div>
        {/*  */}
        <div className="bg-white p-4 rounded rounded-md flex flex-col mt-4">
          <div className="flex  justify-between">
            <div className="text-red-400 font-semibold text-lg">
              Generate dummy
            </div>
            <div className="flex items-center space-x-3 text-blue-500 cursor-pointer">
              <BsFilter size={30} />
              <BsToggleOn size={30} />
            </div>
          </div>
          <div className="pt-6 text-gray-500">
            Brave Private Ads are unobtrusive and private by design. Ads are
            based on your interests, but no personal data or browsing history
            ever leaves your device. Best of all, Brave Private Ads let you earn
            BAT (Basic Attention Token) just for viewing.
          </div>
          <div className="pt-6 pb-6 flex justify-between">
            <span> Current earnings this month (estimated)</span>
            <span className="text-blue-500"> Learn more</span>
          </div>
          <hr />
          <div className="pt-6 pb-6 flex justify-between">
            <span> Current earnings this month (estimated)</span>
            <span className="px-2 py-1 bg-blue-100 rounded rounded-md">
              {" "}
              Jun 8
            </span>
          </div>
          <hr />
          <div className="pt-6 pb-6 flex justify-between">
            <span> Current earnings this month (estimated)</span>
            <span> 54</span>
          </div>
          <hr />
        </div>
        {/* iterate records */}
        {records.map((record) => {
          return (
            <div className="mt-6 p-4 bg-white rounded rounded-md">
              <div className="flex justify-between">
                <span className="font-semibold text-xl text-purple-500">
                  {record.title}
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
              <div>{record.description}</div>
              <div className="flex justify-between mt-6 mb-2">
                <span>Monthly payment </span>
                {record.charges === "free" ? (
                  <span className="px-2 py-1 border">
                    Record {record.charges} chrges{" "}
                  </span>
                ) : (
                  <span className="px-2 py-1 border">
                    {record.charges} of charge
                  </span>
                )}
              </div>
              <hr />
              {record.table_columns.map((table) => {
                return (
                  <div className="flex justify-between mt-3">
                    <div className="flex space-x-3">
                      <div>
                        <input type="checkbox" />
                      </div>
                      <div>{table}</div>
                    </div>
                    <div className="flex space-x-3">
                      <div className=" cursor-pointer">
                        <BiEdit size={20} color="gray" />
                      </div>
                      <div className=" cursor-pointer">
                        <AiOutlineDelete size={20} color="gray" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="w-1/3 flex flex-col flex-shrink-0 rounded rounded-md h-fit">
        <div className=" p-4 bg-white">
          <div className="flex space-x-2 items-center bg-blue-400 text-white p-2 w-fit rounded rounded-lg text-sm font-semibold">
            <div>Upgrade</div>
            <div>
              <BiRightArrowCircle size={20} />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span> Your balance</span>
            <span className="text-lg font-semibold"> $ 0.00</span>
          </div>
        </div>
        <div className="flex flex-col rounded rounded-md mt-6 bg-white">
          <span className="font-semibold  px-4 py-1">Usage summary</span>
          <hr />
          {usage.map((data) => {
            return (
              <div className="">
                <div className="flex justify-between px-4 py-1 text-sm text-gray-400">
                  <span>{data.title}</span>
                  <span>{data.date}</span>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
