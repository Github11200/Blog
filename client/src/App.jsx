import { Homepage } from "./assets/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import { ReactJSPost } from "./assets/Posts/ReactJSPost";
import Posts from "./assets/PostData";

import "./index.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />}>
                {/* This maps over all of the posts and creates a path for each of them */}
                {Posts.map((object, index) => {
                    // Return a route to the path of the post using the post's id and display the post with that index
                    return (
                        <Route
                            path={`/posts/${object.id}`}
                            element={<ReactJSPost postIndex={index} />}
                            key={index}
                        />
                    );
                })}
            </Route>
        </Routes>
    );
}

export default App;
