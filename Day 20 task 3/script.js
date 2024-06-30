const mainDiv = document.getElementById("mainDiv");
const getDetails = document.getElementById("getDetails");

getDetails.addEventListener("click", async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");

  const output = document.getElementById("api1");
  output.innerHTML = `<img src="${data.message}"height="480px" alt=" Random Dog Images" caption="Random Dog Image">`;
});