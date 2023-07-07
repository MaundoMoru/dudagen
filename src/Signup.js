import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [data, setData] = useState({});
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8081/registeruser", {
      method: "POST",
      body: JSON.stringify(data),
      Headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col mt-4 bg-white rounded-md p-5 space-y-3">
        <div className="flex flex-col">
          <label>Email</label>
          <input
            name="email"
            className="border p-3 rounded rounded-md"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="flex flex-col">
          <label>Password</label>
          <input
            name="password"
            className="border p-3 rounded rounded-md"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className="flex flex-col">
          <label>Confirm password</label>
          <input
            name="password"
            className="border p-3 rounded rounded-md"
            onChange={(e) =>
              setData({ ...data, confirmPassword: e.target.value })
            }
          />
        </div>
        <div className="flex justify-end">
          <button className="flex justify-center bg-blue-400 rounded rounded-md text-white px-2 py-1 w-40 shadow-md">
            Sign up
          </button>
        </div>
      </div>
    </form>
  );
}

export default Signup;
