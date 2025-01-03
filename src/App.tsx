import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Guest from "./layout/Guest";
import Content from "./pages/Content";
import OwnerLogin from "./pages/OwnerLogin";
import { Toaster } from "react-hot-toast";
import Owner from "./layout/Owner";
import Post from "./pages/Post";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./context/AuthContext";
import OwnerProtectedRoute from "./routes/OwnerProtectedRoute";
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";

const App = () => {
  const queryCLient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryCLient}>
      <div className="h-screen overflow-y-scroll custom-scroll">
        <Toaster />
        <Routes>
          {/* public routes */}
          <Route index element={<Landing />} />
          <Route path="/toOwner" element={<OwnerLogin />} />

          {/* for guest also public */}
          <Route path="/guest" element={<Guest />}>
            <Route index element={<Content />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<SingleProject />} />
          </Route>

          {/* protected routes, only for owner */}
          <Route
            path="/owner"
            element={
              <AuthContextProvider>
                <OwnerProtectedRoute>
                  <Owner />
                </OwnerProtectedRoute>
              </AuthContextProvider>
            }
          >
            <Route index element={<Post />} />
          </Route>

          {/* not found  */}
          <Route
            path="/*"
            element={<div className="text-center mt-10 text-lg">Not Found</div>}
          />
        </Routes>
      </div>
    </QueryClientProvider>
  );
};

export default App;
