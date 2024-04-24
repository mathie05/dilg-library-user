import { useEffect, useState } from "react";
import useFetchKP from "../../hooks/useFetchKP";
import { KPInfo, DocID } from "../../types/interfaces";
import { useNavigate } from "react-router-dom";
import Loader from "../layout/Loader";
import Form from "./Form";

function ShowKP({ docId }: DocID) {
  const navigate = useNavigate();
  const { fetchKP } = useFetchKP();
  const [kpInfo, setKPInfo] = useState<KPInfo | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);

  const toggleBack = () => {
    navigate(-1);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (docId) {
        const data = await fetchKP(docId);
        if (data) {
          setKPInfo(data as KPInfo);
        } else {
          setKPInfo(null);
        }
      }
    };
    fetchData();
  }, [fetchKP, docId]);

  if (!kpInfo) {
    return <Loader />;
  }

  const formData = {
    kpId: docId || "",
    kpTitle: kpInfo.title,
    downloadURl: kpInfo.downloadURL,
  };

  // console.log("Here is the title:", kpInfo.title);
  // console.log("Here is the url:", kpInfo.downloadURL);

  return (
    <>
      {showForm ? (
        <Form {...formData} onCloseForm={handleCloseForm} />
      ) : (
        <div className="font-[sans-serif] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={toggleBack}
              className="relative inline-flex h-12 w-12 items-center justify-center rounded-md border border-neutral-300 bg-transparent transition-colors hover:bg-neutral-200"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-neutral-600"
              >
                <path
                  d="M6.85355 11.1464C6.65829 11.3417 6.34171 11.3417 6.14645 11.1464L2.14645 7.14645C1.95118 6.95118 1.95118 6.63459 2.14645 6.43934L6.14645 2.43934C6.34171 2.24408 6.65829 2.24408 6.85355 2.43934C7.04882 2.63459 7.04882 2.95118 6.85355 3.14645L3.70711 6.29289H12.5C12.7761 6.29289 13 6.51675 13 6.79289C13 7.06902 12.7761 7.29289 12.5 7.29289H3.70711L6.85355 10.4393C7.04882 10.6346 7.04882 10.9512 6.85355 11.1464Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 gap-x-12">
              <div className="text-right">
                <img
                  src="https://readymadeui.com/photo.webp"
                  alt=""
                  className="inline rounded-lg lg:w-10/12 w-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-[#333] text-4xl font-extrabold mb-6 flex flex-col items-start">
                  {kpInfo.title}
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium mt-4 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    {kpInfo.kpType}
                  </span>
                </h2>

                <div className="flex items-center gap-4 mb-6">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt=""
                  />
                  <div className="font-medium dark:text-white">
                    <div>{kpInfo.author}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Fix the Date
                    </div>
                  </div>
                </div>

                <p className="text-base text-gray-500 text-justify mb-4">
                  {kpInfo.description}
                </p>

                <button
                  onClick={handleShowForm}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowKP;
