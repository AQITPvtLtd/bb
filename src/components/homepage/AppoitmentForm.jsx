// "use client";
// import React from "react";
// import Swal from "sweetalert2";
// import { useState } from "react";
// import { appoint, checkDateAvailability } from "@/services/appoitmentform"; // Import checkDateAvailability

// const AppointmentForm = () => {
//   const [formData, setformData] = useState({
//     name: "",
//     mobile: "",
//     date: "", // Change this to lowercase "date"
//   });

//   const handleChange = (e) => {
//     setformData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleDateChange = async (e) => {
//     const selectedDate = e.target.value;
//     const isDateBooked = await checkDateAvailability(selectedDate);

//     if (isDateBooked) {
//       Swal.fire({
//         icon: "warning",
//         title: "Date Already Booked",
//         text: "This date is already booked. Please select another date.",
//       }); // Clear the date field if the date is already booked
//       setformData({ ...formData, date: "" });
//     } else {
//       setformData({ ...formData, date: selectedDate });
//     }
//   };

//   const handleSubmit = async (e) => {
//     const response = await appoint(formData);

//     if (response && response.success) {
//       Swal.fire({
//         title: "Form Submitted Successfully!",
//         text: "You clicked the button!",
//         icon: "success",
//       });
//       e.preventDefault();
//     } else {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Something went wrong!",
//       });
//     }
//   };

//   return (
//     <div className="mx-auto mt-[100px] px-6 bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-bold text-center mb-6">Book Appointment</h1>

//       <div className="">
//         <form
//           className="grid lg:grid-cols-4 gap-4 p-11"
//           onSubmit={handleSubmit}
//         >
//           <div className="mb-4">
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
//               placeholder="Enter your name"
//               required
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="mobile"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Mobile No.
//             </label>
//             <input
//               type="tel"
//               id="mobile"
//               name="mobile"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
//               placeholder="Enter your mobile number"
//               required
//               value={formData.mobile}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="date"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Date
//             </label>

//             <input
//               type="date"
//               id="date"
//               name="date" // This should match "date" in the formData object
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
//                min={new Date().toISOString().split("T")[0]}
//               value={formData.date}
//               onChange={handleDateChange}
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-[#07a496] text-white font-semibold lg:h-14 lg:w-72 lg:mt-5"
//           >
//             Book Appointment
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AppointmentForm;
