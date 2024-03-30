import bgImage from "../../public/bgfile.png";

const SignupPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      className="bg-cover bg-center min-h-screen"
    >
      <div className="justify-center items-center flex">
        <div className="bg-white border-2 shadow-lg w-1/4 h-screen rounded-lg mt-24 mb-20">
          <h1 className="px-10 font-bold text-3xl p-10">Log in</h1>
          <form>
            <div className="px-10">
              <label htmlFor="email" className="block pb-3 font-semibold">
                email:{" "}
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-md w-4/5 h-8 p-3 text-sm"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
