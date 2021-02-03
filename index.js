document.getElementById("submit-form").addEventListener("submit", (event) => {
  event.preventDefault();
  // Introducing form data
  let ourFormData = new FormData(event.target);
  let userFirstName = ourFormData.get("firstName");
  let userEmail = ourFormData.get("submittedEmail");
  let messageAfterSubmit = `
  <h2 class="right-column__subtitle">Successfully submitted, ${userFirstName}!</h2>
          <p class="right-column__description">You are on your way to becoming BBQ master!<br>
          Thank you for becoming our valuable and respected member.</p>
          <p class="form__legal">Don't worry, your information is safe with us!</p>
  `;
  let contents = document.getElementById("right-column-contents");

  contents.innerHTML = messageAfterSubmit;
});
