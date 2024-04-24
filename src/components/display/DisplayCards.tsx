import React, { useEffect, useState } from "react";
import { useFetchInfo } from "../../hooks/useFetchInfo";
import { KPInfo } from "../../types/interfaces";
import { Link } from "react-router-dom";

const DisplayCards = () => {
  const [visibleBlogs, setVisibleBlogs] = useState<number>(4);
  const [info, setInfo] = useState<KPInfo[]>([]);

  const showMore = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 4);
  };

  useEffect(() => {
    let unsubscribe: () => void;

    const fetchData = async () => {
      try {
        unsubscribe = useFetchInfo(setInfo);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  return (
    <div className="bg-white font-[sans-serif] p-4">
      <div className="max-w-6xl max-md:max-w-lg mx-auto">
        <div>
          <h2 className="text-3xl font-extrabold text-[#333] inline-block">
            LATEST BLOGS
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Render visible blog posts */}
          {info.slice(0, visibleBlogs).map((item) => (
            <div key={item.id}>
              <Link to={`display/${item.id}`}>
                <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300">
                  <img
                    src="https://readymadeui.com/Imagination.webp"
                    alt={item.title}
                    className="lg:w-2/5 min-h-[250px] h-full object-cover"
                  />
                  <div className="p-6 lg:w-3/5">
                    <h3 className="text-xl font-bold text-[#333]">
                      {item.title}
                    </h3>
                    <span className="text-sm block text-gray-400 mt-2">
                      Fix the Date | BY {item.author}
                    </span>
                    <p className="text-sm mt-4 line-clamp-3 ...">
                      {item.description}
                    </p>
                    <a className="mt-4 inline-block text-blue-600 text-sm hover:underline">
                      Read More
                    </a>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {visibleBlogs < info.length && (
          <button
            onClick={showMore}
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default DisplayCards;
