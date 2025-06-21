// form-submission.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    status.textContent = "Sending...";

    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        status.textContent = "Message sent successfully!";
        form.reset();
      } else {
        status.textContent = `Error: ${result.message || "Something went wrong."}`;
      }
    } catch (error) {
      status.textContent = "Error sending message. Please try again later.";
      console.error("Web3Forms Error:", error);
    }
  });
});
