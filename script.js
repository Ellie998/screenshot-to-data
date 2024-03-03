const navImgElement = document.getElementById("nav_m_img");
const navScreenDataElement = document.getElementById("nav_m_screen_data");
const mainImgElement = document.getElementById("main_m_img");
const mainScreenDataElement = document.getElementById("main_m_screen_data");

navImgElement.addEventListener("click", function () {
  mainImgElement.classList.remove("hidden");
  mainScreenDataElement.classList.add("hidden");
});
navScreenDataElement.addEventListener("click", function () {
  mainImgElement.classList.add("hidden");
  mainScreenDataElement.classList.remove("hidden");
});

document.getElementById("button_m_img").addEventListener("click", function () {
  const promptValue = document.getElementById("promptInput").value;

  fetch("/newImg", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: promptValue }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("img").src = data.img_url;
      // console.log(data.img_url);
    })
    .catch((error) => console.error("Error:", error));
});
