function Signin() {
  return (
    <form>
      <div className="flex flex-col mt-4 bg-white rounded-md p-5 space-y-3">
        <div className="flex flex-col">
          <label>Email</label>
          <input name="email" className="border p-3 rounded rounded-md" />
        </div>
        <div className="flex flex-col">
          <label>Password</label>
          <input name="password" className="border p-3 rounded rounded-md" />
        </div>
        <div className="flex justify-end">
          <div className="flex justify-center bg-blue-400 rounded rounded-md text-white px-2 py-1 w-40 shadow-md">
            Sign in
          </div>
        </div>
      </div>
    </form>
  );
}

export default Signin;
