import { PostBox } from "./PostBox";
import Posts from "../PostData";
import { Outlet, useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../App";
import { ThemeToggle } from "./ThemeToggle";

// This is the homepage component which is the first page the user will see
export const Homepage = () => {
    const location = useLocation(); // This stores the location of the current page
    const [currentPath, setCurrentPath] = useState(location.pathname); // This stores the current path from the useLocation hook
    const theme = useContext(ThemeContext);

    // Update the path whenever it is changed
    useEffect(() => setCurrentPath(location.pathname), [location, currentPath]);

    return (
        <div data-theme={theme}>
            {/*********************** Information about the blog ***********************/}
            {/* If the current page contains /posts, then only display the title of the website and the content of the post */}

            {/* Otherwise if the current path does not contain /posts then display the homepage */}
            {!currentPath.includes("/posts") && (
                <div className="grid justify-items-center" data-theme={theme}>
                    <div className="px-[8%] w-full py-[8%] mb-[5%] bg-secondary grid justify-items-center">
                        <h1 className="text-9xl mb-[4%] text-center">
                            Blog Name
                        </h1>
                        <h2 className="text-4xl text-center">
                            Anything and everything you need to know about
                            front-end web development, all in one place!
                        </h2>
                        <ThemeToggle />
                    </div>
                    <h3 className="text-6xl">Posts</h3>
                    <input
                        type="text"
                        placeholder="search posts"
                        className="input input-secondary mt-[5rem] w-[60vw] border-[2px] p-8 text-xl"
                    />
                    <div className="mt-[7rem] flex flex-wrap justify-center mb-[3%] gap-[9rem]">
                        {/* Map over all of the posts, and create a post box with that information */}
                        {Posts.map((object, index) => {
                            return (
                                <div key={index} className="w-[40rem]">
                                    <PostBox
                                        title={object.title}
                                        imageSrc={object.imageSrc}
                                        summaryOfPost={object.summary}
                                        path={object.id}
                                        key={index}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
            <Outlet />
        </div>
    );
};
