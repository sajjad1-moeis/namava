import Home from "./components/Home/Home";
import VideoId from "./components/VideoId/VideoId";
import TextFieldHiddenLabel from "./components/post/PostApi";
let Routes = [
   {path: "/", element: <Home />},
   {path: "/videos", element: <TextFieldHiddenLabel />},
   {path: "/video/:videoId", element: <VideoId />},
];
export default Routes;
