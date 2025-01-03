import { Link } from "react-router-dom";
import profile from "../public/uu.jpg";

const Content = () => {
  return (
    <div className="h-full flex items-center justify-center p-3">
      <div className="flex flex-col gap-3 justify-center items-center">
        <img
          src={profile}
          alt="profile"
          className="w-96 h-50 object-contain object-right bg-base-200 rounded-2xl border border-double border-primary p-1"
        />
        <div className="text-lg font-semibold">Hello, I'm Htet Htet Naing Kyaw</div>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="tel:+059650323629" className="btn btn-link">
            Call Me - 09650323629
          </a>
          <a href="tel:+059650323629" className="btn btn-link link-secondary">
            Call Me - 09958950566
          </a>
          <a href="mailto:htethtetnaingkyaw8123@gmail.com" className="btn btn-link link-info">
            Send Me an Email
          </a>
        </div>
        <Link to={"/guest/projects"}>
          <div className="btn btn-wide btn-success">See Projects</div>
        </Link>
      </div>
    </div>
  );
};

export default Content;
