export async function fetchCareers() {
  try {
    const response = await fetch(
      "https://career-compass-backend.onrender.com/api/careers"
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching careers:", error);
    return [];
  }
}
