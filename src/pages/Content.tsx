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
        <div className="text-lg font-semibold">Hello, I'm Zaw Win Khant</div>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="tel:+959980786035" className="btn btn-link">
            Call Me - 09980786035
          </a>
          <a href="tel:+959795246671" className="btn btn-link link-secondary">
            Call Me - 09795246671
          </a>
          <a href="mailto:zawwinkhant94.com" className="btn btn-link link-info">
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
