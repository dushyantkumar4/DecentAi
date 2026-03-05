import { useContext, useState, useEffect } from "react";
import { MyContaxt } from "../MyContaxt";
import { api } from "../api/client";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { register, setRegister, theme, fetchUser, user } =
    useContext(MyContaxt);
  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user]);
  
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const endpoint = register ? "/api/register" : "/api/login";

      await api.post(endpoint, formData);

      // After success  fetch user profile
      await fetchUser();
      navigate("/");
    } catch (err) {
      console.error(err?.response?.data?.message || "Auth failed");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full mt-5">
        {/* change login, register button  */}
        <div className="mb-5">
          Click here to{" "}
          {register ? (
            <button
              onClick={() => setRegister(false)}
              className="cursor-pointer hover:text-shadow-purple-600 hover:text-shadow-lg font-bold"
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => setRegister(true)}
              className="cursor-pointer hover:text-shadow-purple-600 hover:text-shadow-lg font-bold"
            >
              Signup
            </button>
          )}
          &nbsp;
          <i className="fa-solid fa-arrow-right-long"></i>{" "}
        </div>
        {/* form */}
        <form
          action=""
          className="flex p-10 rounded-lg flex-col gap-10  shadow-lg shadow-purple-600 "
        >
          <div className="flex items-center justify-between gap-5">
            <label htmlFor="email" className={`font-bold text-xl`}>
              Email
            </label>
            <input
              type="email"
              className={`py-2 px-3 rounded border-2  ${theme ? "placeholder:text-gray-300" : "placeholder:text-black/60"} `}
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {register ? (
            <div className="flex items-center justify-between gap-5">
              <label htmlFor="name" className={`font-bold text-xl`}>
                Name
              </label>
              <input
                type="text"
                className={`py-2 px-3 rounded border-2  ${theme ? "placeholder:text-gray-300" : "placeholder:text-black/60"} `}
                placeholder="Enter name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          ) : (
            <></>
          )}

          <div className="flex items-center justify-between gap-5">
            <label htmlFor="password" className={`font-bold text-xl`}>
              Password
            </label>
            <input
              type="password"
              className={`py-2 px-3 rounded border-2  ${theme ? "placeholder:text-gray-300" : "placeholder:text-black/60"} `}
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {/* Button section  */}
          <div className="flex gap-5">
            <button
              type="submit"
              className={`py-1.5 px-5 rounded-2xl font-semibold hover:shadow-md hover:shadow-purple-600 cursor-pointer shadow-md
            hover:text-shadow-lg hover:text-shadow-purple-600  ${theme ? "bg-white text-black " : " bg-gray-200 text-black"}`}
              onClick={handleSubmit}
            >
              {register ? "Sign Up" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
