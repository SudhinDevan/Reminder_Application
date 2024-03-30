import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import Swal from "sweetalert2";

const ReminderBox = () => {
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
      <div className="w-full flex justify-center pt-10 md:p-0 items-center bg-gray-100 h-screen">
        <form
          className="w-4/5 md:flex pt-5 md:pt-0 border-2 md:h-4/6 md:justify-center md:items-center rounded-lg border-black h-full bg-gray-200"
          onSubmit={handleSubmit}
        >
          <div>
            <h1 className="text-3xl font-semibold p-4 text-center">
              Reminder Hub
            </h1>
            <div className="md:flex justify-between">
              <div
                className="md:w-3/4 relative mb-3 pt-5"
                data-te-input-wrapper-init
              >
                <label htmlFor="email" className="p-5 text-2xl font-semibold">
                  Email:
                </label>
                <input
                  type="email"
                  className="md:w-3/5 border border-gray-500 h-10 p-2 mt-3 ml-5 rounded-md md:ml-0 md:mt-0 w-4/5"
                  id="email"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="m-2 md:inline-flex mr-10 ml-5 md:ml-0">
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
              <div className="m-2 mr-10 ml-5 md:ml-0">
                <DemoContainer components={["TimePicker"]}>
                  <TimePicker
                    label="Basic time picker"
                    value={selectedTime}
                    onChange={handeleTimeChange}
                  />
                </DemoContainer>
              </div>
            </div>
            <div className="mb-3 pt-5">
              <label htmlFor="message" className="p-5 text-2xl font-semibold">
                Message:
              </label>
              <div className="w-11/12 md:w-full pt-3 ml-2 md:ml-24 px-3">
                <textarea
                  className="w-full border border-gray-500 p-2 rounded-md md:w-4/5"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Enter your reminder here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </div>
          <h2 className="mt-10 md:hidden p-5 font-semibold text-base text-gray-500">
            Sudhin Devan &#169;2023
          </h2>
        </form>
      </div>
    </>
  );
};


export default ReminderBox;
