import { useState } from "react";
import toast from "react-hot-toast";
import { useGetUserSession, useUserLogin } from "../react-query/owner";
import { Navigate, useNavigate } from "react-router-dom";

const OwnerLogin = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { data: account, isPending } = useGetUserSession();

  const { mutate: login } = useUserLogin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "" || password === "") {
      toast.error("fill all");
      return;
    }
    login(
      { email, password },
      {
        onSuccess: () => {
          navigate("/owner");
        },
      }
    );
  };

  if (isPending) {
    return <div className="">Loading...</div>;
  }
  return account ? (
    <Navigate to={"/owner"} />
  ) : (
    <div className="h-screen flex justify-center items-center p-2">
      <form className=" md:w-2/5 lg:w-1/3" onSubmit={handleSubmit}>
        <div className="text-xl mb-5 font-semibold text-center">
          Are you Zaw Win Khant?
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered input-primary w-full"
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Password"
            className="input input-bordered input-primary w-full"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-full">Login</button>
      </form>
    </div>
  );
};

export default OwnerLogin;
