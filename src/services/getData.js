import { httpAxios } from "../helper/httpHelper";

export async function getVideos() {
  try {
    const response = await httpAxios.get("/api/get-videos");
    return response.data; // Ensure that response has a valid structure
  } catch (error) {
    console.error("Error fetching videos from API:", error);
    return { success: false, message: "Failed to fetch videos" };
  }
}

export async function getTestimonials() {
  try {
    const response = await httpAxios.get("/api/get-testimonials");
    return response.data; // Ensure that response has a valid structure
  } catch (error) {
    console.error("Error fetching videos from API:", error);
    return { success: false, message: "Failed to fetch videos" };
  }
}
