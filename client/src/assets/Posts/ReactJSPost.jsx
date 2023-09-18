import { AnimatePresence, motion } from "framer-motion";
import Posts from "../PostData";
import { Link } from "react-router-dom";

const variants = {
    open: { opacity: 1 },
};

// This is the entire post once the user clicks on it
// eslint-disable-next-line react/prop-types
export const ReactJSPost = ({ postIndex }) => {
    const targetPost = Posts[postIndex];

    // Get the post that you want to display and display all of the information
    return (
        <AnimatePresence>
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: "0%", transition: { duration: 0.5 } }}
                exit={{ opacity: "0%", transition: { duration: 5 } }}
            >
                <Link to="/">
                    <h2 className="text-[310%] py-2 pb-4 bg-primary text-center">
                        Blog Name
                    </h2>
                </Link>
                <div className="mt-[5rem] grid justify-items-center">
                    {/* Display the title of the post */}
                    <h1 className="text-[6.4em] text-center mb-[2.8rem]">
                        {targetPost.title}
                    </h1>
                    {/* Display the author's name, the author's profile picture, and the date it was posted */}
                    <p className="inline-grid grid-cols-2 grid-rows-1 w-[60vw] text-3xl mb-[4rem]">
                        <span className="justify-self-left">
                            <img
                                src={targetPost.profilePicture}
                                className="inline w-[2.5rem] rounded-lg mr-5"
                            />
                            <span>{targetPost.author}</span>
                        </span>
                        <span className="justify-self-end">
                            {targetPost.date}
                        </span>
                    </p>
                    {/* Display the main image of the post */}
                    <img
                        src={targetPost.bannerImage}
                        className="w-[57rem] mb-[5rem]"
                    />
                    {/* Display each of the sections with their corresponding titles and paragraphs */}
                    <div className="w-[60%]">
                        {targetPost.content.map((object, index) => {
                            return (
                                <section key={index}>
                                    <h2 className="text-[3.4em] mb-8">
                                        {object.sectionTitle}
                                    </h2>
                                    <p className="mb-4 text-[1.5em]">
                                        {object.sectionContent}
                                    </p>
                                </section>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
