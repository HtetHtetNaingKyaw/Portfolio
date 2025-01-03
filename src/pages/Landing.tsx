import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className=" h-full flex justify-center flex-col gap-5 items-center p-3 text-center">
      <div className="text-3xl md:text-4xl font-semibold">
        &#128526; Hello, I'm{" "}
        <span className="text-primary">Zaw Win Khant!</span>
      </div>
      <div className="text-xl md:text-2xl">
        This is my personal project and blog
        <br />
        So relax and enjoy with me &#128521;
      </div>
      <div className="flex gap-3">
        <button className="btn btn-primary" onClick={() => navigate("/guest")}>
          <span className="text-xl">&#128525;</span>Let's Go
        </button>
        <a href="https://github.com/picakhant" className="btn btn-secondary">
          <FaGithub className="text-xl" />
          See GitHub
        </a>
      </div>
    </div>
  );
};

export default Landing;
