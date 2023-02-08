// const userContainer = document.querySelector(".userContainer");
// const btn = document.querySelector(".btn");
// const forname = document.querySelector(".forname");
// const foremail = document.querySelector(".foremail");
// const forpassword = document.querySelector(".forpassword");

// let newUserName;
// let newUserEmail;
// let newUserObject;

// forname.addEventListener("change", (e) => {
//   newUserName = e.target.value.toString();
//   console.log(newUserName);
// });
// foremail.addEventListener("change", (e) => {
//   newUserEmail = e.target.value.toString();
// });

// const showUi = (name, email) => {
//   const userdiv = document.createElement("div");
//   userdiv.classList.add("user");
//   userdiv.innerHTML = `<h2>Hello ${name}</h2>
//   <p>Your Email is ${email}</p>
//   <button class="change" >Change Name<button/>
//   <button class="delete" >Delete<button/>

//   `;
//   userContainer.append(userdiv);
// };

// const getAllUsers = async () => {
//   const url = "http://localhost:3000/users";
//   const fromServer = await fetch(url);
//   const user = await fromServer.json();

//   for (let i = 0; i < user.length; i++) {
//     let userName = user[i].name;
//     let userEmail = user[i].email;
//     showUi(userName, userEmail);
//   }
// };

// getAllUsers();

// const emptyUserInput = () => {
//   forname.value = "";
//   foremail.value = "";
//   newUserName = "";
//   newUserEmail = "";
// };

// btn.addEventListener("click", () => {
//   const newRegistor = async () => {
//     newUserObject = {
//       name: newUserName,
//       email: newUserEmail,
//     };
//     if (newUserName || newUserEmail) {
//       const postUser = await fetch("http://localhost:3000/users", {
//         method: "POST",
//         body: JSON.stringify(newUserObject),
//       });

//       const data = await postUser.json();
//       let userName = data[data.length - 1].name;
//       let userEmail = data[data.length - 1].email;
//       await showUi(userName, userEmail);
//       await emptyUserInput();
//     }
//   };

//   newRegistor();
// });

// const changeTag = document.querySelector(".change");
// const deleteTag = document.querySelector(".delete");

// deleteTag.addEventListener("click", () => {
//   const deleteFetch = async () => {
//     const response = await fetch("http://localhost:3000/users", {
//       method: "DELETE",
//       body: JSON.stringify(),
//     });
//   };
// });
const fileupload = document.querySelector("#file");

const handleFileUpload = async () => {
  // console.log(fileupload.files);
  const response = await fetch("http://localhost:3000/uploadfile", {
    method: "POST",
    // body: JSON.stringify({ test: "hello" }),
    body: fileupload.files[0],
  });
  console.log(await response.json());
};
