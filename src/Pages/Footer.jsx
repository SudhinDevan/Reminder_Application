import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
const Footer = () => {
  const email = "sudhindevan@gmail.com";

  const handleEmailClick = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast.success("email copied");
      })
      .catch((error) => {
        console.error("Failed to copy email to clipboard: ", error);
        alert("Failed to copy email to clipboard. Please try again.");
      });
  };

  return (
    <>
      <div className="md:h-60 bg-gray-100 md:p-10 pt-10 md:pt-0 md:mt-0 h-full p-5">
        <h1 className="text-center font-semibold text-2xl">Reminder Hub</h1>
        <div className="pt-5">
          <h2 className="text-justify">
            Introducing our innovative reminder application, meticulously
            crafted to effortlessly manage your daily tasks with precision and
            reliability. Seamlessly set reminders for your essential
            commitments, ensuring you never miss a beat. Our user-friendly
            interface empowers you to schedule reminders for crucial events, all
            delivered directly to your inbox at your specified date and time.
            This application represents a culmination of dedicated effort,
            designed to streamline your workflow and enhance productivity.
            Should you have any inquiries or suggestions, we welcome your
            feedback at{" "}
            <span
              className="text-blue-600 underline cursor-pointer"
              onClick={handleEmailClick}
            >
              {email}
            </span>
          </h2>
        </div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
};

export default Footer;
