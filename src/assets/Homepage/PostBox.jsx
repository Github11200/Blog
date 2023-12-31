import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const PostBox = ({ title, imageSrc, summaryOfPost, path }) => {
    // This is a box which will give a summary of the post
    // It will also link to the post by using the path provided
    return (
        <div className="shadow-lg hover:shadow-2xl transition-shadow rounded-3xl">
            <NavLink to={`/posts/${path}`}>
                <figure>
                    <img
                        src={imageSrc}
                        alt="The react js logo with a black background"
                        className="w-full rounded-t-3xl h-[24rem]"
                    />
                </figure>
                <div className="card-body h-[18rem]">
                    <h4 className="text-[1.8rem] font-semibold text-center mb-4 font-poppins">
                        {title}
                    </h4>
                    <p className="text-xl mx-[2rem] mt-3 font-redhatdisplay">
                        {summaryOfPost}
                    </p>
                </div>
            </NavLink>
        </div>
    );
};
