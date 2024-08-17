import { httpAxios } from "../helper/httpHelper";

export async function appoint(formData) {
  try {
    const result = await httpAxios
      .post("/api/appoitment", formData)
      .then((response) => response.data);
    return result;
  } catch (error) {
    console.log(error);
  }
}

// services/appoitmentform.js
export const checkDateAvailability = async (date) => {
  try {
    const response = await fetch(`/api/checkDateAvailability?date=${date}`);
    const data = await response.json();
    return data.isBooked;
  } catch (error) {
    console.error("Error checking date availability:", error);
    return false;
  }
};
