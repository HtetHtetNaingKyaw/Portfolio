import { Outlet } from "react-router-dom";
import { account } from "../appwrite";
import PostUpload from "../modal/PostUpload";

const Owner = () => {
  const logout = async () => {
    await account.deleteSession("current");
    location.reload();
  };

  const handleOpenModal = () => {
    const modal = document.getElementById("post-upload") as HTMLDialogElement;
    modal.showModal();
  };

  return (
    <div className=" h-screen">
      <div className="p-3 bg-base-300 flex justify-between items-center px-10">
        <div className="text-lg">Hello Zaw Win Khant</div>
        <div className="flex gap-3">
          <button
            className="btn btn-primary"
            onClick={() => {
              handleOpenModal();
            }}
          >
            Create Post
          </button>
          <button
            className="btn btn-error"
            onClick={() => {
              logout();
            }}
          >
            Log Out
          </button>
        </div>
      </div>

      <Outlet />
      <PostUpload />
    </div>
  );
};

export default Owner;
