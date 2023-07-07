import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import RightMenu from "./RightMenu";
import LandingPage from "./LandingPage";
import TopBar from "./TopBar";
import FormPage from "./FormPage";
import DataPage from "./DataPage";
import Appbar from "./Appbar";
import Signup from "./Signup";
import Signin from "./Signin";

function MainLayout() {
  let isLoggedIn = true;
  return (
    <div className="flex flex-col h-screen">
      <Appbar />

      <div className="mx-1/4 flex space-x-4 h-0 mt-6">
        <div className="flex flex-col flex-1">
          {isLoggedIn === true ? <TopBar /> : <div></div>}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/formpage" element={<FormPage />} />
            <Route path="/datapage" element={<DataPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </div>
        {isLoggedIn === true ? <RightMenu /> : <div></div>}
      </div>
    </div>
  );
}

export default MainLayout;
