import { Homepage } from "./assets/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import { ReactJSPost } from "./assets/Posts/ReactJSPost";
import { createContext, useState } from "react";
import Posts from "./assets/PostData";

import "./index.css";

export const ThemeContext = createContext();

function App() {
    const [theme, setTheme] = useState("retro");

    const toggleTheme = (toggleValue) =>
        setTheme(toggleValue ? "forest" : "retro");

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div data-theme={theme}>
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
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
