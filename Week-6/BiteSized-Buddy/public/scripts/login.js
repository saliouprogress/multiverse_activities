console.log("do i have access to main js? User = ", user)

const submit = async (e) => {
  e.preventDefault();
  validateNoEmptyFields();
  await getUser(e);
}

const getUser = async (e) => {
  e.preventDefault()

  //get form data
  const email = document.getElementsByName("email")[0].value;
  const password = document.getElementsByName('password')[0].value;
  const remember = document.getElementsByName('remember')[0].value;

  const data = {email, password};

  //request user info from server
  try{
    console.log("asking server to get user info...");

    const res = await fetch('/api/user/login', {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })

    console.log("server responded: ", res);

    const user = await res.json();

    console.log('What we got back: ', user);


    // store user (keep them signed in)
    cacheUser(user);

    // redirect user to their home page.
    window.location.href = `/overview/${user.id}`
  } catch (err) {
    console.log('error submitting login form: ', err);

  }
  //store user info
  //redirect to user's home page
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

// function validateEmail(inputText) {
//   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if(!inputText.value.match(mailformat)){
//     alert("You have entered an invalid email address!");
//     document.form1.text1.focus();
//     return false;
//   }
// }


validateNoEmptyFields(); //! this is not working!