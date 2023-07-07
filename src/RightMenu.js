import { AiOutlineCheckCircle } from "react-icons/ai";

function RightMenu() {
  let usage = [
    { title: "Created new record", date: "Jan 12" },
    { title: "Created Changed password", date: "Feb 22" },
    { title: "Deleted users table", date: "May 19" },
    { title: "Created new record", date: "Jun 12" },
    { title: "Created new record", date: "Jun 19" },
    { title: "Credited your account", date: "Jun 19" },
  ];

  let free_account = false;

  return (
    <div className="w-1/3 flex flex-col flex-shrink-0 rounded rounded-md">
      <div className="flex flex-col rounded rounded-md bg-white">
        <span className="font-semibold  px-4 py-1 bg-gray-200 rounded-t-md">
          My account
        </span>
        <hr />

        <div className="">
          <div className="flex justify-between px-4 py-2 text-sm text-gray-400">
            <span>Your balance</span>
            <span className="font-semibold text-lg text-black">$ 0.00</span>
          </div>
          <div className="flex justify-between px-4 py-2 text-sm text-gray-400">
            {free_account === true ? (
              <span>You are using free account</span>
            ) : (
              <span className="font-semibold text-blue-400">
                Upgraded to premium
              </span>
            )}
            {free_account === true ? (
              <span className="text-blue-400 font-semibold cursor-pointer">
                Upgrade now
              </span>
            ) : (
              <span>
                <AiOutlineCheckCircle color="blue" size={20} />
              </span>
            )}
          </div>
          <hr />
        </div>
      </div>
      <div className="flex flex-col rounded rounded-md mt-6 bg-white">
        <span className="font-semibold  px-4 py-1 bg-gray-200 rounded-t-md">
          Usage summary
        </span>
        <hr />
        {usage.map((data) => {
          return (
            <div className="">
              <div className="flex justify-between px-4 py-2 text-sm text-gray-400">
                <span>{data.title}</span>
                <span>{data.date}</span>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RightMenu;
