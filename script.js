const redirect = document.getElementById("redirect-home");

redirect.addEventListener('click', () => {
  window.location.href = './home.html';
  console.log('Redirecting to home page');
});

function displayVoucher() {
  // Correctly access the #voucher-container element
  var voucher = document.getElementById("voucher-container");
  voucher.style.display = "flex"; // Use "flex" to preserve centering
}

// Optional: Close the voucher when clicking on the background
function closeVoucher() {
  var voucher = document.getElementById("voucher-container");
  voucher.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const targetDiv = document.querySelector(".photoframes");

  const checkVisibility = () => {
    const rect = targetDiv.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if the div is fully or partially in the viewport
    if (rect.top < windowHeight && rect.bottom > 0) {
      targetDiv.classList.add("show-description");
    }
  };

  // Add scroll event listener
  window.addEventListener("scroll", checkVisibility);

  // Initial check on page load
  checkVisibility();
});

