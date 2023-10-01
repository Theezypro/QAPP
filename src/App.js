import "./App.css";
import Imac13 from "./Imac13";
import Imac1 from "./Imac1";
import Imac20 from "./Imac20";
import Imac6 from "./Imac6";
import Imac7 from "./Imac7";
import Imac17 from "./Imac17";
import Imac14 from "./Imac14";
import Imac8 from "./Imac8";
import Imac16 from "./Imac16";
import Imac9 from "./Imac9";
import Login from "./Login";
import SignUp from "./SignUp";
import Otp from "./Otp";
import ResetPassword from "./ResetPassword";
import NewPassword from "./NewPassword";
import Imac18 from "./Imac18";
import Imac15 from "./Imac15";
import Home from "./Home";
import Feature from "./Feature";
import Request from "./Request";

import { Routes, Route } from "react-router-dom";
// import {PhoneInput} from "react-international-phone";

function App() {
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/account" element={<Imac13 />} />
        <Route path="/qapp-login" element={<Imac1 />} />
        <Route path="/phone-otp-verification" element={<Imac20 />} />
        <Route path="/qapp-sign-up" element={<Imac6 />} />
        <Route path="/qapp-otp-verification" element={<Imac7 />} />
        <Route path="/click-anywhere" element={<Imac17 />} />
        <Route path="/bank-login" element={<Imac14 />} />
        <Route path="/forgot-password" element={<Imac8 />} />
        <Route path="/email-otp-verification" element={<Imac16 />} />
        <Route path="/new-password-qapp" element={<Imac9 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/otp-verification" element={<Otp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/bank-otp-verification" element={<Imac18 />} />
        <Route path="/phone-otp-forgotpassword" element={<Imac15 />} />
        <Route path="/" element={<Home />} />
        <Route path="/request" element={<Request />} />
        <Route path="/feature" element={<Feature />} />
      </Routes>
    </div>
  );
}

export default App;
