document.getElementById("button").addEventListener("click", function () {
  const promptValue = document.getElementById("promptInput").value;

  fetch("/submit", {
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
