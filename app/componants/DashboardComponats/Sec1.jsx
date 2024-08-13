"use client";
import { Trash2, X, Check } from "lucide-react";
import { FaPencilAlt } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';
// import ThePdfViewer from './ThePdfViewer'
import Modal from "react-modal";
import {
  GetToDo,
  deleteTodo,
  Addtodo,
  AllModules,
  MangeeditServices,
} from "@/app/services/MangeService";
import { toast } from "react-toastify";

import { useAppDispatch } from "@/app/Redux/lib/hooks";
import {
  setAllmoduledata,
  setPdfid,
} from "@/app/Redux/lib/features/product/productSlice";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    // overflow: "scroll",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "transparent",
    overflow: "visible",
    width: "65%",
  },
};
import { useRouter } from "next/navigation";
import { getPdfService } from "@/app/services/FInalizeService";
import ThePdfViewer from "./ThePdfViewer";
import { IoClose } from "react-icons/io5";

const Sec1 = () => {
  const [pdfLink, setPdfLink] = useState("");
  const [viewPdfModal, setViewPdfModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const getPdfData = async (id) => {
    const response = await getPdfService(id);

    if (response.status) {
      setPdfLink(response.pdf_link);
    }
  };

  const customcreatwStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
    content: {
      top: "30%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      background: "transparent",
      overflow: "visible",
      width: isMobile ? "100%" : "50%",
    },
  };
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createisModalOpen, setcreateIsModalOpen] = useState(false);
  const [isInputOpen, setIsInputOpen] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");

  // @ts-ignore
  const [inputPosition, setInputPosition] = useState({ x: 0, y: 0 });
  const [data, setData] = useState([]);
  const [latestid, setLatestid] = useState("");
  const [name, setName] = useState("");
  const [currentData, setCurrentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data?.length / itemsPerPage) ||1;
  const [errorMessage, setErrorMessage] = useState("");
  const openInput = (event, id, currentValue) => {
    setIsInputOpen(id);
    setInputValue(currentValue);
    const rect = event.target.getBoundingClientRect();
    setInputPosition({ x: rect.left, y: rect.top });
  };

  const closeInput = () => {
    setIsInputOpen(null);
    setInputError("");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 35) {
      setInputValue(value);
      setInputError(""); // Clear error message
    } else {
      setInputError("Input cannot exceed 35 characters");
    }
  };

  const handleSubmit = async (e, id) => {
    e.preventDefault();
    if (inputValue.length > 35) {
      setInputError("Input cannot exceed 35 characters");
      return;
    }

    try {
      const result = await MangeeditServices(id, inputValue);
      if (result.status) {
        toast.success(result.message);
        // Directly update the item in the local state instead of refetching all items
        setData((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, name: inputValue } : item
          )
        );
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("An error occurred while editing");
    } finally {
      closeInput();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const createopenModal = () => {
    setcreateIsModalOpen(true);
    setName("");
  };

  const createcloseModal = () => {
    setcreateIsModalOpen(false);
    setName("");
  };

  useEffect(() => {
    Fetchtodo();
  }, [currentPage]);



  const Fetchtodo = async () => {
    try {
      const response = await GetToDo(currentPage);
      if(response.status){
        //  setNextPage(response?.next)
        setTotalPage(response?.total_page_count)
        const data = response?.results;
     console.log("the response is",response)
      setData(data);
      const local_id = localStorage.getItem("ids");
      if (data) {
        if (!local_id) {
          const ids = data[0]?.id;
          localStorage.setItem("ids", ids);
          dispatch(setPdfid(ids));
          setLatestid(ids);
        }

      }
    }
    } catch (err) {
      console.warn(err);
      // toast.error(err);
    }
  };

  const openDeleteConfirmModal = async (id) => {
    const result = await deleteTodo(id);
    if (result) {
      closeModal();
      Fetchtodo();
      localStorage.removeItem("ids");
      Fetchtodo();
      toast.success(result?.message);
    } else {
      toast.error(result?.message);
    }
  };

  const openAddModal = async (e) => {
    e.preventDefault();
    if (name.length > 35) {
      setErrorMessage("Name must be 35 characters or less.");
      return;
    }

    const result = await Addtodo(name);
    if (result.status) {
      createcloseModal();
      Fetchtodo();
      toast.success("New draft created successfully");
    } else {
      toast.error(result?.message);
    }
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    if (newName.length <= 35) {
      setName(newName);
      setErrorMessage(""); // Clear error message if the input is valid
    } else {
      setErrorMessage("Name must be 35 characters or less.");
    }
  };

  const AllModule = async (id) => {
    localStorage.setItem("ids", id);
    const result = await AllModules(id);
    if (result.status) {
      localStorage.setItem("moduledata", JSON.stringify(result));
      dispatch(setAllmoduledata(result));
      router.push("/section");
      // toast.success(result?.message);
      closeModal();
    } else {
      // toast.error(result?.message);
    }
  };

  const currentItems = data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage + 1);
    }
   
  };
 

  const customStylesPdf = {
    content: {
      top: "0",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, 0)",
      width: "75%",
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
    },
  };
  return (
    <div>
      <div className="md:pt-16 pt-4">
        <div className="justify-center flex md:w-full">
          <button
            type="button"
            className="md:w-[30%] montserrat sm:w-[21%] justify-center text-white bg-primary hover:bg-[#21A7D0] focus:ring-primary focus:outline-none font-semibold leading-7 rounded md:text-3xl text-[24px] px-5 py-2.5 sm:py-2 text-center inline-flex items-center md:me-2 mb-2"
            onClick={openModal}
          >
            Manage Handbooks
          </button>
        </div>
        <div className="justify-center md:flex hidden">
          <p className="text-primary  droid font-bold text-5xl sm:text-7xl leading-[70px] ">
            Get Started
          </p>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={isMobile ? {} : customStyles}
        contentLabel="Manage Handbooks Modal"
      >
        <div className="bg-white">
          <div className="bg-white m-auto overflow-auto md:h-[600px] flex-col justify-center items-center rounded-[30px]">
            <div className="overflow-x-scroll">
              <>
                <div className="flex p-4 justify-between">
                  <h5 className="text-[16px] droid ml-3 font-extrabold">
                    Family Handbook
                  </h5>
                  <p className="text-2xl mr-3 text-end">
                    <X className="cursor-pointer" onClick={closeModal} />
                  </p>
                </div>
                <hr />
                <br />
                <p className="montserrat md:text-[25px] text-[15px] font-extrabold md:mx-5">
                  Click Create New to begin a new Family Handbook. To edit an
                  existing Family Handbook, click a recent draft below.
                </p>
                <div id="treatment-plan" className="pt-10 montserrat">
                  <div className="mx-5 overflow-x-auto">
                    <table className="table-auto w-full">
                      <thead className="sticky top-0 bg-white">
                        <tr className="md:text-[15px] text-[10px] leading-7 font-extrabold">
                          <th className="md:pl-4 py-2 border min-w-[200px] text-center">
                            Your drafts
                          </th>
                          <th className="md:px-4 py-2 border min-w-[100px] text-center">
                            Date Created
                          </th>
                          <th className="md:px-4 py-2 border min-w-[100px] text-center">
                            Status
                          </th>
                          <th className="md:px-4 py-2 border min-w-[100px] text-center">
                            Edit
                          </th>
                          <th className="md:px-4 py-2 border min-w-[100px] text-center">
                            View Pdf
                          </th>
                          <th className="md:px-4 py-2 border min-w-[100px] text-center">
                            Delete
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.length > 0 &&
                          data?.map((v, index) => {
                            const isOnlyItem = currentItems.length === 1;
                            return (
                              <tr key={index}>
                                <td className="border h-full lg:h-[70px] text-bold text-[19px] pl-4 py-2 flex  text-[#21a7d0] cursor-pointer relative">
                                  {isInputOpen === v.id ? (
                                    <div className="flex items-center">
                                      <form
                                        onSubmit={(e) => handleSubmit(e, v.id)}
                                      >
                                        <input
                                          type="text"
                                          value={inputValue}
                                          onChange={handleChange}
                                          placeholder="Enter your text"
                                          className="border rounded-lg px-2 py-1"
                                        />
                                        <button
                                          type="submit"
                                          className="ml-2 p-1 rounded-lg text-black"
                                        >
                                          <Check />
                                        </button>
                                      </form>
                                      {inputError && (
                                        <p className="text-red-500">
                                          {inputError}
                                        </p>
                                      )}
                                    </div>
                                  ) : (
                                    <span onClick={() => AllModule(v.id)}>
                                      {v.name}
                                    </span>
                                  )}
                                </td>
                                <td className="border md:px-4 py-2 text-center">
                                  {v.created_at}
                                </td>
                                <td className="border md:px-4 py-2 text-center">
                                  <span
                                    className={`border capitalize px-1 py-1 text-xs text-white rounded-3xl mx-2 my-2 ${
                                      v.status === "pending"
                                        ? "bg-yellow-500"
                                        : v.status === "complete"
                                        ? "bg-green-500"
                                        : "bg-green-800"
                                    }`}
                                  >
                                    {v.status}
                                  </span>
                                </td>
                                <td className="border-b md:px-4 py-2 text-center lg:pl-[43px] justify-center">
                                  <span
                                    className="flex text-black  cursor-pointer"
                                    onClick={(e) => openInput(e, v.id, v.name)}
                                  >
                                    <FaPencilAlt size={15} />
                                  </span>
                                </td>
                                <td className="border items-center justify-center gap-x-5 md:px-4 py-2 text-center">
                                  {v.status === "completed" ? (
                                    <button
                                      onClick={() => {
                                        setViewPdfModal(true);
                                        closeModal();
                                        getPdfData(v.id);
                                      }}
                                      className="cursor-pointer border capitalize px-1 py-1 text-xs text-white rounded-3xl mx-2 my-2 bg-primary"
                                    >
                                      View Pdf
                                    </button>
                                  ) : (
                                    <button
                                      onClick={() => {
                                        toast.error(
                                          "Please Complete your PDF"
                                        );
                                      }}
                                      className="cursor-pointer border capitalize px-1 py-1 text-xs text-white rounded-3xl mx-2 my-2 bg-primary"
                                    >
                                      View Pdf
                                    </button>
                                  )}
                                </td>
                                <td className="border items-center justify-center gap-x-5 md:px-4 py-2 text-center">
                                  {!isOnlyItem && (
                                    <a
                                      href="#"
                                      data-toggle="modal"
                                      className="text-center"
                                    >
                                      <Trash2
                                        onClick={() =>
                                          openDeleteConfirmModal(v.id)
                                        }
                                        color="white"
                                        className="ml-4"
                                        style={{
                                          backgroundColor: "#C82333",
                                          textAlign: "center",
                                          margin: "auto",
                                        }}
                                      />
                                    </a>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                    {/* <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-2 sm:px-6">
                      <div className="flex flex-1 justify-between sm:hidden">
                        <a
                          href="#"
                          onClick={handlePrevious}
                          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                          Previous
                        </a>
                        <a
                          href="#"
                          onClick={handleNext}
                          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                          Next
                        </a>
                      </div>
                      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                        <nav
                          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                          aria-label="Pagination"
                        >
                          <a
                            href="#"
                            onClick={handlePrevious}
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                          >
                            <span className="sr-only">Previous</span>
                            <svg
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                          {[...Array(totalPages)].map((_, pageIndex) => (
                            <a
                              key={pageIndex}
                              href="#"
                              onClick={() => setCurrentPage(pageIndex + 1)}
                              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                                currentPage === pageIndex + 1
                                  ? "bg-[#007bff] text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                  : "text-[#007bff] ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                              }`}
                            >
                              {currentPage}
                            </a>
                          ))}
                          <a
                            href="#"
                            onClick={handleNext}
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                          >
                            <span className="sr-only">Next</span>
                            <svg
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </nav>
                      </div>
                    </div> */}
                    <div>
                      {console.log("the data is",data)}
                    <Pagination
        
        color="primary"
        showFirstButton
        showLastButton
        page={currentPage}
        count={totalPage}
        onChange={(event,page)=>{
          setCurrentPage(page)
        
        }}
        size="large"
        
        style={{
          cursor: "pointer",
          marginLeft: "20px",
        }}
        />
                    </div>
                  </div>
                </div>
                <div className="py-10 flex justify-center">
                  <button
                    onClick={createopenModal}
                    className="p-3 hover:bg-[#1e7e34] montserrat bg-[#218838] justify-center md:px-0 md:py-0 py-[1rem] px-[2rem] md:w-[14%] rounded-lg text-white"
                  >
                    Create New
                  </button>
                </div>
              </>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={createisModalOpen}
        onRequestClose={createcloseModal}
        style={customcreatwStyles}
        contentLabel="Create New Handbook Modal"
      >
        <div className="bg-white border-[2px]">
          <div className="bg-white m-auto overflow-y-scroll md:overflow-y-hidden flex-col justify-center items-center rounded-[30px]">
            <div className="">
              <>
                <div className="flex p-4 justify-between">
                  <p className="text-[20px] font-bold">
                    Name your Family Handbook Draft.
                  </p>
                  <p className="text-2xl mr-3 text-end">
                    <X className="cursor-pointer" onClick={createcloseModal} />
                  </p>
                </div>
                <hr />
                <br />
                <form id="addUser" onSubmit={openAddModal} className="">
                  <div className="mx-5">
                    <input
                      placeholder="Name"
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                      className="border w-full focus:border-[#007BFF] h-[43px] p-3"
                    />
                    {errorMessage && (
                      <p className="text-red-500 text-sm mt-1">
                        {errorMessage}
                      </p>
                    )}
                  </div>
                  <br />
                  <hr />
                </form>
                <div className="py-3 flex justify-end pr-8">
                  <button
                    type="submit"
                    form="addUser"
                    className="flex bg-[#007BFF] p-1 lg:w-[14%] sm:justify-center md:w-auto rounded-md text-white"
                  >
                    Create
                  </button>
                </div>
              </>
            </div>
          </div>
        </div>
      </Modal>

      {/* view pdf start */}
      <Modal
        isOpen={viewPdfModal}
        onRequestClose={() => setViewPdfModal(false)}
        style={customStylesPdf}
        contentLabel="View Pdf"
      >
        <div className="">
          <div className="bg-white m-auto overflow-y-scroll md:overflow-y-hidden flex-col justify-center items-center rounded-[30px] h-screen">
            {/* <h1 className="text-4xl">{pdfLink}</h1> */}
            {/* {pdfLink && <ThePdfViewer pdfUrl={pdfLink} />} */}
            {/* <iframe src={pdfLink} width='100%' height='500px' /> */}
            <div className="absolute right-[-18px] top-[-5px] z-40">
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setViewPdfModal(false);
                }}
                className="text-secondary px-2  rounded-full block "
              >
                <IoClose size={40} />
              </button>
            </div>
            <div className="h-[600px] ">
              <ThePdfViewer pdfUrl={pdfLink} />
            </div>
          </div>
        </div>
      </Modal>
      {/* view pdf end */}
    </div>
  );
};

export default Sec1;
