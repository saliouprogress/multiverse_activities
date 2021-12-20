console.log("main.js is being run")

//global variables (accessible thoughout the whole app via front-end JS)
//Note, this code is rerun EVERY PAGE REFRESH
//if you want to save something, do it via local/sessionStorage and pull it here.
let user = JSON.parse(localStorage.getItem("user")) || JSON.parse(sessionStorage.getItem("user"));


//Makes sure user can't access app without login in, as well as can't login before first login off
const checkUserLogin = () => {
  console.log(window.location.pathname)

  if(!user){
    if(window.location.pathname === "/login" || window.location.pathname === "/signup"){
      return
    }
    window.location.href = "/";
  } else {
    if(window.location.pathname === "/login" || window.location.pathname === "/signup"){
      window.location.href = `/overview/${user.id}`;
    }
  }
}

checkUserLogin();

const logout = () => {
  sessionStorage.removeItem("user");

  window.location.href = "/";
}

const goToHome = () => {
  window.location.href = `/overview/${user.id}`;
}

const goToMeals= () => {
  window.location.href = `/meals/${user.id}`;
}

const goToAddMeal = () => {
  window.location.href = `/meal/add/${user.id}`;
}

const cacheUser = (user) => {
  sessionStorage.setItem("user", JSON.stringify(user))
}

