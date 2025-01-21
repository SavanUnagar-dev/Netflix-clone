import "react";

const Getstarted = () => (
  <>
  {/* bg-gradient-to-b from-black to-red-950 */}
    <div className="pt-10 w-full ">
      <div className="flex justify-center items-center text-[16px] text-gray-400 font-semibold px-4">
        <p>Ready to watch? Enter your email to create or restart membership</p>
      </div>
      <div className="flex flex-col sm:flex-row w-full justify-center items-center mt-4 space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="relative">
          <input
            className="peer w-[310px] py-4 bg-slate-950 placeholder:text-slate-400 text-gray-200 text-sm border border-slate-200 rounded-[30px] px-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow focus:border-2"
          />
          <label
            className="absolute text-lg cursor-text px-1 left-2.5 top-2.5 text-gray-300 transition-all transform origin-left peer-focus:-top-0.5 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90"
          >
            Email address
          </label>
        </div>
        <div className="w-full sm:w-auto flex justify-center items-center">
          <button className="bg-red-700 hover:bg-red-800 text-white font-semibold text-[21px] px-10 py-3 rounded-3xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </>
);

export default Getstarted;
