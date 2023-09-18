import Posts from "../PostData";
import { Link } from "react-router-dom";

// This is the entire post once the user clicks on it
// eslint-disable-next-line react/prop-types
export const ReactJSPost = ({ postIndex }) => {
    const targetPost = Posts[postIndex];

    // Get the post that you want to display and display all of the information
    return (
        <>
            <div className="flex justify-center mt-10 hover:bg-slate-500 w-[19rem] mx-auto py-2">
                <Link to="/" className="w-full">
                    <div className="inline-flex flex-nowrap items-center justify-center w-full mx-0">
                        <img
                            src="../../../public/temporary.png"
                            className="rounded-full w-[4rem] mr-[0.8%]"
                        />
                        <h2 className="text-4xl">Blog Name</h2>
                    </div>
                </Link>
            </div>

            <div className="grid justify-items-center">
                {/* Display the title of the post */}
                <h1 className="text-[6.4em] text-center mb-[2.8rem]">
                    {targetPost.title}
                </h1>
                {/* Display the author's name, the author's profile picture, and the date it was posted */}
                <div className="inline-grid grid-cols-2 grid-rows-1 w-[60vw] text-3xl mb-[4rem]">
                    <div className="justify-self-left avatar">
                        <div className="w-[2.6rem] mr-5 rounded-xl">
                            <img
                                src={targetPost.profilePicture}
                                className="inline"
                            />
                        </div>
                        <span>{targetPost.author}</span>
                    </div>
                    <span className="justify-self-end">{targetPost.date}</span>
                </div>
                {/* Display the main image of the post */}
                <img
                    src={targetPost.bannerImage}
                    className="w-[57rem] mb-[5rem] rounded-3xl mx-[20%]"
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
        </>
    );
};
