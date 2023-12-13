import React, { useState } from "react";
import Card from "./Card";

function Courses({ courses, category }) {
  const [isCoursePresent, setIsCoursePresent] = useState(false);
  const [showdiv, setshowdiv] = useState(true);
  const getCourses = (courses) => {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      // add a specific category to the array
      return courses[category];
    }
  };



  return (
    <div className=" w-full mx-auto max-w-[1000px] h-full flex flex-wrap mb-[17.7rem] ">
      {getCourses(courses).map((course) => {
        return <Card key={course.id} course={course} />;
      })}
    </div>
  );
}

export default Courses;
