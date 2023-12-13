import { React, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Courses from "./components/Courses";
import Spinner from "./components/Spinner";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setcourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      const request = await fetch(apiUrl);
      const output = await request.json();
      setcourses(output.data);
    } catch (error) {
      toast.error("Network Problem");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (courses.length === 0) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center bg-sky-200">
        <h1 className="text-xl  bg-[#00253e] p-2 px-4 rounded-md text-white">
          No course available
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-sky-200">
      <div className="w-full h-full flex flex-col justify-center items-center bg-sky-200">
        <Navbar />
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-sky-200">
        {loading ? (
          <Spinner />
        ) : (
          <Courses courses={courses} category={category} />
        )}
      </div>
    </div>
  );
};

export default App;
