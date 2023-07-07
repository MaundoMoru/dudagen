import { BsFilter } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  let records = [
    {
      title: "Dummy users",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ...",
      charges: "$20.00",
      date: "Jan 12",
      table_name: "users",
      table_columns: ["name", "age", "occupation"],
      iterations: "10",
    },
    {
      title: "UAT posts",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ...",
      charges: "Free",
      date: "Jan 12",
      table_name: "posts",
      table_columns: ["Post", "Time", "Likes", "Views"],
      iterations: "10",
    },

    {
      title: "Fine me comments",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ...",
      charges: "$ 700.00",
      date: "Jun 12",
      table_name: "Payment",
      table_columns: [
        "payment",
        "Time",
        "who_paid",
        "payee",
        "no_of_payee",
        "company",
        "location",
        "earnings",
      ],
      iterations: "10",
    },
  ];

  let navigate = useNavigate();

  return (
    <div className="flex-col flex-1">
      <div className="bg-white p-4 rounded rounded-md flex flex-col">
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
          Dudagen is a PaaS for developers to generate fake api & data. Try
          dudagen and speed up your frontend app test. Note, no real data is
          generated, it generates fake data and Api.
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

      {records.map((record) => {
        return (
          <div className="mt-6 p-4 bg-white rounded rounded-md mb-4">
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
              <span>Db Table ({record.table_name}) </span>
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
            {record.table_columns.slice(0, 2).map((table) => {
              console.log("After slice " + JSON.stringify(table));
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
            <hr />
            <span
              className="text-blue-400 text-sm flex justify-end mt-4 cursor-pointer"
              onClick={() => navigate("/datapage", { state: record })}
            >
              Show more...
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default LandingPage;
