const navImgElement = document.getElementById("nav_m_img");
const navScreenDataElement = document.getElementById("nav_m_screen_data");
const mainImgElement = document.getElementById("main_m_img");
const mainScreenDataElement = document.getElementById("main_m_screen_data");
const buttonImgElement = document.getElementById("button_m_img");
const buttonScreenDataElement = document.getElementById("button_m_screen_data");
const loaderElements = document.querySelectorAll(".result_container .loader");
const errorMessageElements = document.querySelectorAll(".error_message ");

navImgElement.addEventListener("click", function () {
  mainImgElement.classList.remove("hidden");
  mainScreenDataElement.classList.add("hidden");
});
navScreenDataElement.addEventListener("click", function () {
  mainImgElement.classList.add("hidden");
  mainScreenDataElement.classList.remove("hidden");
});

buttonImgElement.addEventListener("click", function (e) {
  const promptValue = document.getElementById("promptInput").value;
  if (promptValue.replace(" ", "").length === 0) {
    errorMessageElements[0].textContent = "텍스트를 입력하세요";
    return;
  }
  buttonImgElement.disabled = true;

  loaderElements[0].classList.remove("hidden");

  fetch("/newImg", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: promptValue }),
  })
    .then((response) => response.json())
    .then((data) => {
      loaderElements[0].classList.add("hidden");
      document.getElementById("img").src = data.img_url;
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    .finally(() => {
      loaderElements[0].classList.add("hidden");
      buttonImgElement.disabled = false;
    });
});
