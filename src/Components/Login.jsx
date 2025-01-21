import  { useState } from 'react'
import Language from './Language'

const Login = () => {
  const [forData, setforData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [, setsubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
    setforData({ ...forData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let emailError = "";
    let passwordError = "";

    if (forData.email.trim() === "") {
      emailError = "Please enter a valid email address or phone number.";
    }

    if (forData.password.trim() === "") {
      passwordError = "Your password must contain between 4 and 60 characters.";
    }

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      return;
    }

    setErrors({ email: "", password: "" });
    setsubmittedData(forData);
  };

  return (
    <div 
      className="bg-cover bg-center min-h-screen flex flex-col items-center md:bg-[url('/public/imgs/login-background.jpg')]
               xs:bg-black xs:bg-none" 
    >
      <div className="absolute top-8 left-10 xs:top-2">
        <img
          className="w-[160px] h-[45px] ml-[50px] mt-4
                     md:w-[90px] md:h-[30px] md:ml-[20px]
                     xs:h-[30px] xs:w-[95px] xs:ml-[-20px]"
          src="/public/imgs/netflix-logo.png"
          alt="Netflix Logo"
        />
      </div>

      <div className="bg-black p-[40px] bg-opacity-85 p-6 rounded-lg w-full max-w-[430px] mt-20 xs:p-3 ">
        <h1 className="text-3xl font-bold text-white mb-7 m-2 md:px-[30px] xs:text-4xl">Sign In</h1>

        <form onSubmit={handleSubmit} className=" flex-col text-center justify-center space-y-4">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={forData.email}
              onChange={handleChange}
              placeholder="Enter your email or phone"
              className="w-[300px] p-4 bg-transparent border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:border-2 focus:border-white xs:p-3"
            />
            {errors.email && (
              <p className="text-red-500 text-sm font-semibold mt-1">❌ {errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              id="password"
              name="password"
              value={forData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-[300px] p-4 bg-transparent border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:border-2 focus:border-white xs:p-3"
            />
            {errors.password && (
              <p className="text-red-500 text-sm font-semibold mt-1">❌ {errors.password}</p>
            )}
          </div>

          <button
            className="w-[300px] py-2 bg-red-600 text-white rounded text-lg font-semibold hover:bg-red-700 transition xs:text-base xs:py-2"
            type="submit"
          >
            Sign In
          </button>

          <div className="text-center text-gray-400 my-4">OR</div>
        <button className="w-[300px] py-2 bg-gray-600 text-white rounded text-lg font-semibold hover:bg-gray-700 transition xs:text-base xs:py-2">
          Use a sign-in code
        </button>

        <div className="mt-4 text-white text-start justify-start md:px-[40px]">
          <a href="#" className="block text-center justify-center text-[16px] hover:underline xs:text-sm">Forgot password?</a>
          <div className="flex items-center mt-2">
            <input type="checkbox" id="remember" className="mr-1 xs:w-5"/>
            <label htmlFor="remember" className="text-[15px] xs:text-[17px]">Remember me</label>
          </div>
          <p className="mt-4 text-[15px] xs:text-[16px]">
            <span className='text-gray-400'>New to Netflix?</span> <a href="#" className="text-white hover:underline">Sign up now.</a>
          </p>
          <p className="text-xs mt-4 text-[14.5px] text-gray-400 xs:text-[13px]">
            This page is protected by Google reCAPTCHA to ensure you’re not a bot. <a href="#" className="text-blue-500 hover:underline">Learn more.</a>
          </p>
        </div>
        </form>
      </div>
       
      <footer className="bg-black text-gray-300 text-[16px] md:px-[150px] md:pb-[100px] md:pt-[250px] w-full xs:p-6">
      <hr className='md:hidden xs:my-7 text-gray-500'/>
        <p className="mb-4 xs:text-md">Questions? Call 000-800-919-1743</p>
        <div className="grid md:grid-cols-3 gap-y-4 gap-x-8 mb-7 md:text-[15px]
                        xs:grid-cols-2 xs:text-xs xs:text-[14px] ">
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Terms of use</a>
          <a href="#" className="hover:underline">Cookie Preference</a>
          <a href="#" className="hover:underline">Help Center</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Corporate information</a>
          <a href="#" className="hover:underline">Cookie Preference</a>
        </div>
        <Language/>
      </footer>
    </div>
  );
};

export default Login;
