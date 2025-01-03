import { useState } from "react";
import { usePostCreate } from "../react-query/owner";
import toast from "react-hot-toast";

const PostUpload = () => {
  const [title, setTitle] = useState("1");
  const [description, setDescription] = useState("1");
  const [projectLink, setProjectLink] = useState("1");
  const [deployLink, setDeployLink] = useState("1");
  const [hashTag, setHashTag] = useState("1");

  const { mutate: upload } = usePostCreate();

  const closeModal = () => {
    const modal = document.getElementById("post-upload") as HTMLDialogElement;
    modal.close();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    upload(
      { title, description, projectLink, deployLink, hashTag },
      {
        onSuccess: () => {
          closeModal();
          toast.success("Upload successful");
        },
      }
    );
  };
  return (
    <dialog id="post-upload" className="modal">
      <div className="modal-box max-w-none w-1/2">
        <h3 className="font-bold text-lg mb-3">Upload Here</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Github link"
              onChange={(e) => setProjectLink(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Domain"
              onChange={(e) => setDeployLink(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Hash tag, spread by comma!"
              onChange={(e) => setHashTag(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default PostUpload;
