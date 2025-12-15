const contactForm = document.getElementById("contactForm");


if (contactForm) {
  document.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputName = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    let isValid = true;
    let errorMessage = "";

    if (inputName === "") {
      isValid = false;
      errorMessage = errorMessage + "Name is required.\n";
    }

    if (email === "") {
      isValid = false;
      errorMessage = errorMessage + "Email Is Required";
    }

    if (email) {
      const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const validPattern = pattern.test(email);
      if (!validPattern) {
        errorMessage += "Please enter a valid email address.\n";
        isValid = false;
      }
    }

    if (phone === "") {
      errorMessage += "Phone number is required.\n";
      isValid = false;
    }

    if (message === "") {
      errorMessage += "Message cannot be empty.\n";
      isValid = false;
    }

    if (isValid) {
      alert("Form Submitted Successfully!");
      contactForm.reset();
    } else {
      alert(errorMessage);
    }
  });
}

const updateDateTime = () => {
  const timeContainer = document.getElementById("dateTime"); 
  if (timeContainer) {
    const now = new Date();
    const localFormate = now.toLocaleString("en-US", {   
    });
    timeContainer.innerHTML = localFormate;
  }
};

setInterval(updateDateTime, 1000);