export async function fetchCareers() {
  const res = await fetch("https://career-compass-backend.onrender.com/api/careers");

  if (!res.ok) {
    throw new Error("Failed to fetch careers");
  }

  return res.json();
}
