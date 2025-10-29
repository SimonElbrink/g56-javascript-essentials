console.log("Hello From JS File");

const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  const currectDate = new Date();

  alert(currectDate.getFullYear());

  document.getElementsByTagName("div")[2].remove();
});
