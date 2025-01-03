import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostCard = ({
  title,
  img,
  description,
  id,
  projectLink,
  deployLink,
}: {
  title: string;
  img: string;
  description: string;
  id: string;
  projectLink: string;
  deployLink: string;
}) => {
  const [readMore, setReadMore] = useState(false);

  const toggleRead = () => setReadMore(!readMore);

  const navigate = useNavigate();

  return (
    <div className="card bg-base-300 col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 mx-auto">
      <figure>
        <img src={img} alt="image" />
      </figure>
      <div className="card-body">
        <div className="card-title">{title}</div>
        {!readMore && (
          <div className="text-lg whitespace-pre-wrap text-justify">
            {description.substring(0, 250)}...
            <div className="flex justify-between">
              <span className="btn btn-link" onClick={toggleRead}>
                see more
              </span>
              <span
                className="btn btn-link link-secondary"
                onClick={() => {
                  navigate("/guest/projects/" + id);
                }}
              >
                view in page
              </span>
            </div>
          </div>
        )}

        {readMore && (
          <>
            <p className=" whitespace-pre-wrap text-justify text-lg">
              {description}
            </p>
            <div className="font-semibold text-lg">
              Github Link -{" "}
              {projectLink ? (
                <a className="hover:text-info" href={projectLink}>
                  {projectLink}
                </a>
              ) : (
                "No Link Alvilable!"
              )}
            </div>
            <div className="font-semibold text-lg">
              Deploy Link -{" "}
              {deployLink ? (
                <a className="hover:text-info" href={deployLink}>
                  {deployLink}
                </a>
              ) : (
                "No Link Alvilable!"
              )}
            </div>
            <div className="flex justify-between">
              <span className="btn btn-link" onClick={toggleRead}>
                see less
              </span>
              <span
                className="btn btn-link link-secondary"
                onClick={() => {
                  navigate("/guest/projects/" + id);
                }}
              >
                view in page
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PostCard;
