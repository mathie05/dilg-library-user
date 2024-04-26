import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`searchResults/${searchTerm}`);
  };

  return (
    <>
      <header className="relative bg-white">
        <div className="px-5 md:px-10 relative">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mx-auto flex z-10 w-full max-w-4xl flex-col items-center py-12 text-center md:py-16 lg:pb-44 lg:pt-24">
              <div className="mb-6 flex items-center gap-2.5 uppercase z-10">
                <div className="h-px w-10 bg-[#091e3b]"></div>
                <p className="text-sm font-bold leading-6">
                  KNOWLEDGE PRODUCTS
                </p>
                <div className="h-px w-10 bg-[#091e3b]"></div>
              </div>
              <h1
                className="mb-4 text-4xl font-extrabold uppercase md:text-6xl z-10 text-[#091e3b]"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                DILG VI: LIBRARY MANAGEMENT SYSTEM
              </h1>
              <p
                className="mb-10 max-w-xs z-10 text-[#091e3b]"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                Discover e-books, journals, reports that you can utilize for
                personal or scholarly needs
              </p>
              <div
                className="w-full max-w-md z-10"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                <form
                  onSubmit={handleSubmit}
                  className="mb-10 z-10 flex bg-white w-full flex-col gap-2 border border-solid border-[#091e3b] px-2 py-2 md:flex-row"
                >
                  <input
                    type="search"
                    placeholder="Search the title of the Knowledge Product..."
                    value={searchTerm}
                    onChange={handleChange}
                    className="block h-9 min-h-[46px] w-full text-[#091e3b] placeholder:text-[#091e3b] border-black text-center align-middle text-sm md:text-left"
                  />
                </form>
              </div>
              <div
                className="flex w-full justify-between gap-4 sm:items-center sm:justify-center sm:gap-10 z-10"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                <div className="flex flex-col items-center justify-start gap-1 text-sm sm:flex-row sm:gap-2.5">
                  <div className="flex h-4 w-4 items-center justify-center text-[#386eec]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m5 12l5 5L20 7"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[#091e3b]">Free to Download</p>
                </div>
                <div className="flex flex-col items-center justify-start gap-1 text-sm sm:flex-row sm:gap-2.5">
                  <div className="flex h-4 w-4 items-center justify-center text-[#386eec]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m5 12l5 5L20 7"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[#091e3b]">Credible Sources</p>
                </div>
                <div className="flex flex-col items-center justify-start gap-1 text-sm sm:flex-row sm:gap-2.5">
                  <div className="flex h-4 w-4 items-center justify-center text-[#386eec]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m5 12l5 5L20 7"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[#091e3b]">Cloud-based</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-48 md:w-28 absolute md:bottom-0 right-0 w-16 bottom-32">
            <img
              src="https://assets-global.website-files.com/655eda66dab018e613baf5ff/655f2b28c57aa4c75abf6974_guide-svg4.svg"
              loading="eager"
              width="168"
              alt=""
              className="w-full"
            />
            <img
              src="https://assets-global.website-files.com/655eda66dab018e613baf5ff/655eedbe0ca0432ba7fd096f_guide-svg2.svg"
              loading="eager"
              width="168"
              alt=""
              className="w-full"
            />
          </div>
          <div className="md:w-56 w-28 absolute lg:w-96 md:bottom-0 md:top-auto left-0 top-0 bottom-auto">
            <img
              src="https://assets-global.website-files.com/655eda66dab018e613baf5ff/655f2a8686fbbf271f061f15_guide-hero-svg.svg"
              loading="eager"
              alt=""
              className="w-full is-fixed-width lg:w-72"
            />
            <img
              src="https://assets-global.website-files.com/655eda66dab018e613baf5ff/655eedbe09e863ce99b749af_guide-svg3.svg"
              loading="eager"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default SearchBar;
