import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import User from "./components/User";
import Viiip from "./components/Viiip";
import VIP from "./components/VIP";
import Diamond from "./components/Diamond";
import Gift from "./components/Gift";
import Agency from "./components/Agency";
import Reseller from "./components/Reseller";
import Moderator from "./components/Moderator";
import Parcentage from "./components/Parcentage";
import ExchangeRate from "./components/ExchangeRate";
import Animation from "./components/Animation";
import RoomImage from "./components/RoomImage";
import BannarImage from "./components/BannarImage";
import PackagePherchese from "./components/PackagePherchase";
import Withdrewreq from "./components/Withdrewreq";
import UserChat from "./components/UserChat";
import Notification from "./components/Notification";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<User />} />
        <Route path="/viiip" element={<Viiip />} />
        <Route path="/vip" element={<VIP />} />
        <Route path="/diamond" element={<Diamond />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/agency" element={<Agency />} />
        <Route path="/reseller" element={<Reseller />} />
        <Route path="/moderator" element={<Moderator />} />
        <Route path="/percentage" element={<Parcentage />} />
        <Route path="/exchange" element={<ExchangeRate />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/room" element={<RoomImage />} />
        <Route path="/bannarimage" element={<BannarImage />} />
        <Route path="/packagephar" element={<PackagePherchese />} />
        <Route path="/withdrew" element={<Withdrewreq />} />
        <Route path="/userchat" element={<UserChat />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
