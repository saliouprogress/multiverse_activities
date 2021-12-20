const createUser = async (e) => {
  //stop form from automatically reloading page onSubmit
  e.preventDefault()

  //get form data
  const name = document.getElementsByName("name")[0].value;
  const email = document.getElementsByName("email")[0].value;
  const password = document.getElementsByName("password")[0].value; //! might want some encryption here
  const age = document.getElementsByName("age")[0].value;

  const data = {name, email, password, age};

  console.log('data read from form: ', data);
  // try to create user

  try{
    console.log("asking server to create user with data...");

    const res = await fetch('api/user', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });

    console.log("server responded.");

    const user = await res.json();

    console.log('What we got back: ', user);

    // store user (keep them signed in)
    sessionStorage.setItem("user", JSON.stringify(user));

    // redirect user to their home page.
    window.location.href = `/overview/${user.id}`
  } catch (err) {
    console.error('error creating new user: ', err);
  }
}

const validateNoEmptyFields = () => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
  });
};

//alidateNoEmptyFields(); //! this is not working!