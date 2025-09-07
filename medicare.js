document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("message").value.trim();
  const formMsg = document.getElementById("formMsg");

  if (!name || !email || !msg) {
    formMsg.textContent = "⚠️ Please fill out all fields.";
    formMsg.style.color = "red";
  } else {
    formMsg.textContent = "✅ Message sent successfully!";
    formMsg.style.color = "lightgreen";
    document.getElementById("contactForm").reset();
  }
});
