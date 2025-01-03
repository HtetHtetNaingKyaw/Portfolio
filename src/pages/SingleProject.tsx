import { useNavigate, useParams } from "react-router-dom";
import { useSinglePost } from "../react-query/posts";
import Loading from "../components/Loading";

const SingleProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useSinglePost(id as string); // Use the hook to fetch the post

  console.log(data);
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error loading post: {error.message}</div>;
  }

  return (
    <>
      <nav className="navbar justify-center gap-2 bg-base-300 sticky top-0 z-10">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2945/2945408.png"
          alt="logo"
          className="w-10"
          onClick={() => {
            navigate("/");
          }}
        />
        <div
          className="text-lg font-semibold cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Htet Htet Naing Kyaw
        </div>
      </nav>
      <div className="h-full mx-auto container bg-base-200 p-3 overflow-y-scroll custom-scroll ">
        <div className="flex flex-col gap-3">
          <img
            src={data?.img}
            className="w-full h-[350px] object-contain"
            alt="img"
          />
          <div className="text-3xl">{data?.title}</div>
          <div className="text-xl">Author Htet Htet Naing Kyaw</div>
          <div className="">Publish at {data?.$updatedAt}</div>
          <p className="text-justify whitespace-pre-wrap text-lg">
            {data?.description}
          </p>
          <div className="font-semibold text-lg">
            Github Link -{" "}
            {data?.projectLink ? (
              <a className="hover:text-info" href={data?.projectLink}>
                {data?.projectLink}
              </a>
            ) : (
              "No Link Alvilable!"
            )}
          </div>
          <div className="font-semibold text-lg">
            Deploy Link -{" "}
            {data?.deployLink ? (
              <a className="hover:text-info" href={data?.deployLink}>
                {data?.deployLink}
              </a>
            ) : (
              "No Link Alvilable!"
            )}
          </div>
          <div className="text-small">#{data?.hashTag}</div>
        </div>
      </div>
    </>
  );
};

export default SingleProject;
