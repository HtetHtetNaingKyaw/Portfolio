import { Outlet } from "react-router-dom";

const Guest = () => {
  return (
    <div className="h-screen">
      <Outlet />
    </div>
  );
};

export default Guest;
