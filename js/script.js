let userNameInput = document.querySelector(".username");
let passwordInput = document.querySelector(".password");
let modal = document.querySelector(".modal");
let btnLogin = document.querySelector(".btnlogin");
btnLogin.addEventListener("click", () => {
  let userNameValue = userNameInput.value;
  let passwordValue = passwordInput.value;
  if (userNameValue.length < 12 || passwordValue < 8) {
    modal.style.background = "red";
    modal.innerHTML = "لطفا اطلاعات را بدرستی واردکنید";
    modal.style.display = "inline";
  } else {
    modal.style.background = "green";
    modal.innerHTML = "با موفقیت وارد شدید";
    modal.style.display = "inline";
  }
  setTimeout(() => {
    modal.style.display = "none";
  }, 3000);
});
