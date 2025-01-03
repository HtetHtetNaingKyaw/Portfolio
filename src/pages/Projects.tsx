import Loading from "../components/Loading";
import PostCard from "../components/PostCard";
import { useGetPosts } from "../react-query/posts";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const { data, hasNextPage, isPending, fetchNextPage } = useGetPosts();
  const navigate = useNavigate();
  console.log(data)

  const allPosts = data?.pages.flatMap((item) => item.documents);

  if (isPending) {
    return <Loading />;
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

      <div className="h-full container gap-3 mx-auto flex flex-col">
        <div className="bg-base-200 p-2 flex-grow overflow-y-scroll custom-scroll">
          <div className="grid grid-cols-12 gap-5">
            {allPosts?.map((item) => (
              <PostCard
                key={item.$id}
                img={item.img}
                title={item.title}
                description={item.description}
                id={item.$id}
                projectLink={item.projectLink}
                deployLink={item.deployLink}
              />
            ))}
          </div>
          {hasNextPage && (
            <div className="flex justify-center p-3">
              <button
                className="btn btn-link"
                onClick={() => {
                  fetchNextPage();
                }}
              >
                load more
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
