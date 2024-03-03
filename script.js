const navImgElement = document.getElementById("nav_m_img");
const navScreenDataElement = document.getElementById("nav_m_screen_data");
const mainImgElement = document.getElementById("main_m_img");
const mainScreenDataElement = document.getElementById("main_m_screen_data");
const buttonImgElement = document.getElementById("button_m_img");
const buttonScreenDataElement = document.getElementById("button_m_screen_data");
const loaderElements = document.querySelectorAll(".result_container .loader");
const errorMessageElements = document.querySelectorAll(".error_message ");
const fileInputElement = document.getElementById("fileInput");
// ----------- img input -----------
navImgElement.addEventListener("click", function () {
  mainImgElement.classList.remove("hidden");
  mainScreenDataElement.classList.add("hidden");
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
// ----------- file input -----------
fileInputElement.addEventListener("change", updateImageDisplay);

navScreenDataElement.addEventListener("click", function () {
  mainImgElement.classList.add("hidden");
  mainScreenDataElement.classList.remove("hidden");
});

buttonScreenDataElement.addEventListener("click", function () {
  const curFiles = fileInputElement.files;
  if (curFiles.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No files currently selected for upload";
    para.classList.add("error_message");
    preview.appendChild(para);
  }

  buttonScreenDataElement.disabled = true;

  loaderElements[1].classList.remove("hidden");

  fetch("/screenData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ files: curFiles }),
  })
    .then((response) => response.json())
    .then((data) => {
      loaderElements[1].classList.add("hidden");
      document.getElementById("screen_data_result_box").textContent = data.data;
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    .finally(() => {
      loaderElements[1].classList.add("hidden");
      buttonScreenDataElement.disabled = false;
    });
});

function updateImageDisplay() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = fileInputElement.files;
  if (curFiles.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No files currently selected for upload";
    para.classList.add("error_message");
    preview.appendChild(para);
  } else {
    const list = document.createElement("ol");
    preview.appendChild(list);

    for (const file of curFiles) {
      const listItem = document.createElement("li");
      const para = document.createElement("p");
      if (validFileType(file)) {
        para.textContent = `File name ${file.name}, file size ${returnFileSize(
          file.size
        )}.`;
        const image = document.createElement("img");
        image.src = URL.createObjectURL(file);
        image.alt = image.title = file.name;

        listItem.appendChild(para);
        listItem.appendChild(image);
      } else {
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
        listItem.appendChild(para);
      }

      list.appendChild(listItem);
    }
  }
}

function validFileType(file) {
  const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon",
  ];
  return fileTypes.includes(file.type);
}
function returnFileSize(number) {
  if (number < 1024) {
    return `${number} bytes`;
  } else if (number >= 1024 && number < 1048576) {
    return `${(number / 1024).toFixed(1)} KB`;
  } else if (number >= 1048576) {
    return `${(number / 1048576).toFixed(1)} MB`;
  }
}
