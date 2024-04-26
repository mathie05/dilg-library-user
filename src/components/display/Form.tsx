import { useState } from "react";
import { FormProps } from "../../types/interfaces";
import { useUserForm } from "../../hooks/useUserForm";
import { format } from "date-fns";

function Form(formProps: FormProps) {
  const { addUser } = useUserForm();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phone: 0,
    address: "",
    occupation: "",
    institution: "",
    reason: "",
  });

  const handleCloseForm = () => {
    formProps.onCloseForm();
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const currentTime: Date = new Date();
      const formattedTime: string = format(currentTime, "MM-dd-yy");

      await addUser({
        ...formData,
        kpID: formProps.kpID,
        kpTitle: formProps.kpTitle,
        timeDownloaded: formattedTime,
      });

      const res = await fetch(formProps.downloadURL);
      const blob = await res.blob();
      const anchor = document.createElement("a");
      anchor.href = window.URL.createObjectURL(blob) as any;
      anchor.download = formProps.kpTitle;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);

      console.log("User added successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        phone: 0,
        address: "",
        occupation: "",
        institution: "",
        reason: "",
      });

      formProps.onCloseForm();
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-opacity-0">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-[40rem] w-full">
          <button
            onClick={handleCloseForm}
            className="absolute ml-[33.5rem] text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            {/* Headings */}
            <h2 className="text-3xl font-bold dark:text-white ">
              Download Form
            </h2>
            <p className="my-4 text-lg text-gray-500 text-justify">
              The DILG LGRRC VI requests users to fill out this form for
              granting access of specific Knowledge Products (KPs). After you've
              submitted, the download will automatically start.
            </p>
            {/* Headings */}

            {/* First Name and Last Name */}
            <div className="grid md:grid-cols-2 md:gap-6">
              {/* First Name */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  autoComplete="off"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              {/* First Name */}

              {/* Last Name */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  autoComplete="off"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
              {/* Last Name */}
            </div>
            {/* First Name and Last Name */}

            {/* Gender */}
            <div className="relative z-0 w-full mb-5 group">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              <label
                htmlFor="floating_gender"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Gender
              </label>
            </div>
            {/* Gender */}

            {/* Email Address and Phone Number*/}
            <div className="grid md:grid-cols-2 md:gap-6">
              {/* Email Address */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  autoComplete="off"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              {/* Email Address */}

              {/* Phone Number*/}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="phone"
                  autoComplete="off"
                  pattern="09[0-9]{9}"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                  required
                />
                <label
                  htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number
                </label>
              </div>
            </div>
            {/* Email Address and Phone Number*/}

            {/* Permanent Address */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                autoComplete="off"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_address"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Permanent address
              </label>
            </div>
            {/* Permanent Address */}

            {/* Occupation and Institution */}
            <div className="grid md:grid-cols-2 md:gap-6">
              {/* Occupation */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  autoComplete="off"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_occupation"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Occupation (Ex. DILG Personnel)
                </label>
              </div>
              {/* Occupation */}

              {/* Institution */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  autoComplete="off"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_institution"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Institution (Ex. DILG VI Office)
                </label>
              </div>
              {/* Institution */}
            </div>
            {/* Occupation and Institution */}

            {/* Reason for download */}
            <div className="relative z-0 w-full mb-5 group">
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full h-24 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 resize-none appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              ></textarea>
              <label
                htmlFor="floating_message"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Reason for download
              </label>
            </div>
            {/* Reason for download */}

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit and Download
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
