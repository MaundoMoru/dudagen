import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";

function FormPage() {
  const [inputFields, setInputFields] = useState([
    {
      field: "",
    },
  ]);

  const addFields = () => {
    let newField = { field: "" };
    setInputFields([...inputFields, newField]);
  };

  const removeField = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  const handleFormChange = (index, event) => {
    const values = [...inputFields];
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;
    setInputFields(values);
    console.log(inputFields);
  };

  const submitFields = (e) => {
    e.preventDefault();
    console.log("Input fields are " + JSON.stringify(inputFields));
  };

  return (
    <div className="flex-col flex-1">
      <div className="bg-white p-4 rounded rounded-md flex flex-col mt-4 w-auto">
        <div className="flex mb-2 justify-between">
          <div className="text-red-400 font-semibold text-lg">
            Generate dummy
          </div>
        </div>

        <form onSubmit={submitFields}>
          {inputFields.map((input, index) => {
            return (
              <div key={index} className="mt-6 flex items-center">
                <div className="border p-3 rounded rounded-md mr-2 text-gray-400">
                  String
                </div>
                <input
                  type="text"
                  name="field"
                  value={input.field}
                  placeholder="Enter field"
                  className="border border w-full p-3 rounded rounded-md mr-2"
                  onChange={(event) => handleFormChange(index, event)}
                />
                <div>
                  <button
                    onClick={removeField}
                    className="border p-3 rounded rounded-md text-red-400 text-sm"
                  >
                    <AiOutlineDelete size={20} />
                  </button>
                </div>
              </div>
            );
          })}
        </form>

        <div className="flex justify-end space-x-3 mt-4">
          <button
            className="border text-gray-400 px-3 py-2 rounded rounded-md w-40"
            onClick={addFields}
          >
            Add field..
          </button>
          {inputFields.length === 0 ? (
            <span></span>
          ) : (
            <button
              className="bg-blue-400 text-white px-3 py-2 rounded rounded-md w-40"
              onClick={submitFields}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default FormPage;
