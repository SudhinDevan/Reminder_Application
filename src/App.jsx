import ReminderPage from "./Pages/ReminderPage";
import { Route, Routes } from "react-router-dom";
import SignupPage from "./Pages/SignupPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/Reminder_Application/login" element={<SignupPage />} />
        <Route path="/Reminder_Application/" element={<ReminderPage />} />
      </Routes>
    </>
  );
};

export default App;
