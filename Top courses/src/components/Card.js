import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({ course }) {
  const [likedCourse, setLikedCourse] = useState([]);

  function likeHandler() {
    if (likedCourse.includes(course.id)) {
      // Remove the course from the liked list
      setLikedCourse((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like removed");
    } else {
      // Add the course to the liked list
      setLikedCourse((prev) => [...prev, course.id]);
      toast.success("Liked successfully");
    }
  }

  return (
    <div className="w-[17rem] h-[20rem] bg-[#00253e] rounded-lg overflow-hidden m-5 ml-[2.3rem] text-white">
      <div className="relative">
        <img src={course.image.url} alt="" className="w-full h-40" />
        <button
          onClick={likeHandler}
          className={`absolute top-[8.5rem] right-3 w-10 h-10 bg-white rounded-full text-black `}
        >
          {likedCourse.includes(course.id) ? (
            <FcLike className="text-2xl mx-auto" />
          ) : (
            <FcLikePlaceholder className="text-2xl mx-auto" />
          )}
        </button>
      </div>

      <div className="p-2.5">
        <h6 className="font-semibold my-3 text-lg">{course.title}</h6>
        <p className="text-sm">
          {course.description.length > 120
            ? course.description.substr(0, 110) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
}

export default Card;
