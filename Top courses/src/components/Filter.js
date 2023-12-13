import React from "react";

function Filter({ filterData, category, setCategory }) {
  function filterHandler(title) {
    setCategory(title);
  }
  return (
    <div>
      {filterData.map((data) => {
        return (
          <button
            className="w-28 mt0 bg-[#00253e] m-4 p-1 rounded-lg font-semibold text-white hover:bg-zinc-500 active:bg-sky-900 focus:ring focus:ring-sky-700  "
            key={data.id}
            onClick={() => {
              filterHandler(data.title);
            }}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
