import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import Swal from "sweetalert2";

const App = () => {
  const [startDate, setStartDate] = useState(null);
  const [email, setEmail] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You want to set this remainder?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f8775d",
      cancelButtonColor: "#ffbe98",
      confirmButtonText: "Yes, set Remainder",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Remainder is set",
            showConfirmButton: false,
            timer: 1500,
          });
          await axios.post(import.meta.env.VITE_API_URL, {
            email,
            message,
            startDate,
            selectedTime,
          });
          setSelectedTime(null);
          setMessage("");
          setEmail("");
          setStartDate(null);
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "An error occurred while setting the remainder.",
            icon: "error",
          });
        }
      }
    });
  };

  const handeleTimeChange = (time) => {
    setSelectedTime(dayjs(time.$d).format("HH:mm:ss"));
  };

  const formatDateFn = (date) => {
    const selectedDate = new Date(date);
    return (
      selectedDate.getFullYear() +
      "-" +
      parseInt(selectedDate.getMonth() + 1) +
      "-" +
      selectedDate.getDate()
    );
  };

  return (
    <>
      <div
        className="w-full h-screen flex justify-center bg-gray-100"
        // style={{ backgroundColor: "#FFBE98" }}
      >
        <form className="w-4/5 flex items-center" onSubmit={handleSubmit}>
          <div className="border-2 rounded-lg border-black h-3/5 w-full bg-gray-200">
            <h1 className="text-3xl font-semibold p-4 text-center">
              Reminder Hub
            </h1>
            <div className="flex justify-between">
              <div
                className="w-3/4 relative mb-3 pt-5"
                data-te-input-wrapper-init
              >
                <label htmlFor="email" className="p-5 text-2xl font-semibold">
                  Email:
                </label>
                <input
                  type="email"
                  className="md:w-3/6 border border-gray-500 h-10 p-2 rounded-md"
                  id="email"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="m-2 inline-flex mr-10">
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label="Basic date picker"
                    onChange={(date) =>
                      setStartDate(formatDateFn(date), "startDate")
                    }
                    dateFormat="dd/MM/YYYY"
                  />
                </DemoContainer>
              </div>
              <div className="m-2 mr-10">
                <DemoContainer components={["TimePicker"]}>
                  <TimePicker
                    label="Basic time picker"
                    value={selectedTime}
                    onChange={handeleTimeChange}
                  />
                </DemoContainer>
              </div>
            </div>
            <div className="relative mb-3 pt-5" data-te-input-wrapper-init>
              <label htmlFor="message" className="p-5 text-2xl font-semibold">
                Message:
              </label>
              <div className="w-full md:w-3/6 pt-3 ml-24 px-3">
                <textarea
                  className="w-full border border-gray-500 p-2 rounded-md"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Enter your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gray-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;