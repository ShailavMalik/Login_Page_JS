const userForm = document.getElementById("userForm");

userForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data= Object.fromEntries(formData.entries());


  try {
    const response = await fetch("http://localhost:5000/api/form/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error("Failed to submit form");

    const result = response.status;
    console.log("success: ", result);
  } catch (error) {
    console.log("Error: ", error.message);
  }
});
