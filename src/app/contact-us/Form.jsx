import React, { useState } from "react";
import Swal from "sweetalert2";
import { form } from "@/services/user";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

const Form = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        Email: "",
        Phone: "",
        Query: "",
        medicalReport: null,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 5 * 1024 * 1024) {
            setFormData({ ...formData, medicalReport: file });
        } else {
            Swal.fire({
                icon: "error",
                title: "File too large",
                text: "File size must be under 5MB.",
            });
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formDataObj = new FormData();
            formDataObj.append("name", formData.name);
            formDataObj.append("Email", formData.Email);
            formDataObj.append("Phone", formData.Phone);
            formDataObj.append("Query", formData.Query);

            if (formData.medicalReport) {
                formDataObj.append("medicalReport", formData.medicalReport);
            }

            const response = await form(formDataObj);

            if (response.success) {
                Swal.fire({
                    title: "Form Submitted Successfully!",
                    text: "Your query has been sent!",
                    icon: "success",
                });

                setFormData({
                    name: "",
                    Email: "",
                    Phone: "",
                    Query: "",
                    medicalReport: null,
                });

                // File input reset
                if (document.getElementById("medicalReportInput")) {
                    document.getElementById("medicalReportInput").value = "";
                }

                router.push("/");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            }
        } catch (error) {
            console.error("Form submission error:", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong while submitting the form!",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>

            <form
                className="bg-white text-gray-800 px-8 py-4 rounded-lg shadow-md w-full max-w-lg overflow-hidden"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >
                <h1 className="text-2xl font-bold text-primary text-center" style={{ fontFamily: "Roboto Slab, serif" }}>
                    Submit Your Query
                </h1>
                <div className="mb-1">
                    <label htmlFor="name" className="block text-md font-medium mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Your Name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-1">
                    <label htmlFor="Phone" className="block text-md font-medium mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="Phone"
                        name="Phone"
                        placeholder="Enter Your Phone Number"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.Phone}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-1">
                    <label htmlFor="Email" className="block text-md font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="Email"
                        name="Email"
                        placeholder="Enter Your Email Address"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.Email}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-1">
                    <label htmlFor="Query" className="block text-md font-medium mb-2">
                        Query
                    </label>
                    <textarea
                        name="Query"
                        id="Query"
                        placeholder="Write Your Query Here.."
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.Query}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="mb-1">
                    <label htmlFor="medicalReport" className="block text-md font-medium mb-2">
                        Upload Medical Report (Optional)
                    </label>
                    <input
                        type="file"
                        id="medicalReport"
                        name="medicalReport"
                        accept=".png, .jpg, .jpeg, .avif, .pdf, .txt, .xlsx"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleFileChange}
                    />
                </div>

                <div className="pt-2">
                    {loading ? (<div className="flex justify-center items-center w-full h-full bg-gray-500 bg-opacity-50 rounded-md fixed top-0 left-0 z-50">
                        <ClipLoader width="60" height="60" color="#07a496" className="animate-spin" />
                    </div>) : (<button
                        type="submit"
                        className="w-full text-white bg-[#07a496] py-3 rounded-lg hover:bg-[#07a496] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>)}

                </div>
            </form>

        </div>
    );
};

export default Form;
