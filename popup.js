console.log("Popup script loaded!");

document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form submitted!");

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const mobileNo = document.getElementById("mobileNo").value;
  const address = document.getElementById("address").value;

  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  console.log("Mobile No:", mobileNo);
  console.log("Address:", address);
});
