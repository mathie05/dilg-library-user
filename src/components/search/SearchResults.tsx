import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { KPInfo, SearchTitle } from "../../types/interfaces";
import { useFetchInfo } from "../../hooks/useFetchInfo";
import Loader from "../layout/Loader";

function SearchResults({ searchTitle }: SearchTitle) {
  const navigate = useNavigate();
  const [info, setInfo] = useState<KPInfo[]>([]);
  const [filteredInfo, setFilteredInfo] = useState<KPInfo[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(searchTitle || "");
  const [loading, setLoading] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);

  const toggleBack = () => {
    navigate("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`searchResults/${searchTerm}`);
  };

  const handleSearchButtonClick = () => {
    navigate(`searchResults/${searchTerm}`);
  };

  useEffect(() => {
    let unsubscribe: () => void;

    const fetchData = async () => {
      try {
        setLoading(true);
        unsubscribe = useFetchInfo(setInfo);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  useEffect(() => {
    if (searchTitle && searchTitle.trim() !== "") {
      const filteredByTitle = info.filter((item) =>
        item.title.toLowerCase().includes(searchTitle.toLowerCase())
      );
      if (filteredByTitle.length === 0) {
        setNotFound(true);
      } else {
        setNotFound(false);
      }
      setFilteredInfo(filteredByTitle);
    }
  }, [searchTitle, info]);

  return (
    <div className="flex flex-col p-2 py-6 m-h-screen">
      <form onSubmit={handleSubmit}>
        <div className="top-5 bg-[#f5f8fe] items-center justify-between w-full flex border-blue-700 rounded-full shadow-lg p-2 mb-5 sticky">
          <div
            onClick={toggleBack}
            className="p-2 mr-1 rounded-full hover:bg-blue-200 cursor-pointer"
          >
            <svg
              className="h-6 w-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <input
            type="search"
            value={searchTerm}
            onChange={handleChange}
            className="font-bold rounded-full w-full py-4 pl-4 text-black bg-white leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
            placeholder="Search for another title of a Knowledge Product..."
          />
          <div
            onClick={handleSearchButtonClick}
            className="bg-blue-500 p-2 hover:bg-blue-700 cursor-pointer mx-2 rounded-full"
          >
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </form>

      {loading && <Loader />}

      {notFound && (
        <h1 className="px-12 py-12 text-2xl text-red-500 font-bold">
          No results found for: "{searchTitle}"
        </h1>
      )}

      {!loading && !notFound && (
        <div className="flex flex-col gap-4 lg:p-4 p-2 rounded-lg m-2">
          <div className="lg:text-2xl md:text-xl text-lg lg:p-3 p-1 font-black text-gray-700">
            Search results for: "{searchTitle}"
          </div>

          {filteredInfo.map((item) => (
            <div key={item.id}>
              <Link to={`searchResults/${searchTitle}/${item.id}`}>
                <div className="flex items-center justify-between w-full p-2 lg:rounded-full md:rounded-full hover:bg-gray-100 cursor-pointer border-2 rounded-lg">
                  <div className="lg:flex md:flex items-center">
                    <div className="h-12 w-12 mb-2 lg:mb-0 border md:mb-0 rounded-full mr-3 bg-blue-500"></div>

                    <div className="flex flex-col gap-1">
                      <div className="text-l leading-3 text-gray-700 font-bold w-full">
                        {item.title}
                      </div>

                      <div className="text-m text-gray-600 w-full">
                        {item.author}
                      </div>
                    </div>
                  </div>

                  <svg
                    className="h-6 w-6 mr-1 invisible md:visible lg:visible xl:visible"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
