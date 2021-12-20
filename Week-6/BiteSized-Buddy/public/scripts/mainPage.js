console.log("do i have access to main js? User = ", user)

document.addEventListener('DOMContentLoaded', async () => {

  // DoughnutChart
  const totalCalories = document.querySelector('#numberCalories span').textContent;
  const percentage = (totalCalories / 1800) * 100;
  const doughnutData = {
    labels: ['Calories Consumed', 'Calories Needed'],
    datasets: [{data: [totalCalories, 1800], backgroundColor: ['#00FF00', '#FF0000']}],
    text: 'testing',
  };

  const doughnutConfig = {
    type: 'doughnut',
    data: doughnutData,
  };

  new Chart(document.getElementById('dougnutChart'), doughnutConfig);

  //Obtain information for get request
  const path = window.location.pathname;
  const id = path[path.length - 1];
  const url = `/api/chart/weekly/${id}`;

  //Make server request
  function makeRequest(method, url) {
    const request = new XMLHttpRequest();
    request.open(method, url);
    request.setRequestHeader('Content-type', 'application/json');
    request.send();
    return new Promise((resolve, reject) => {
      request.addEventListener('load', () => {
        if (request.status === 200) {
          resolve(request);
        } else {
          reject(request);
        }
      });
    });
  }

  //Parse and Setup data for chart
  const res = await makeRequest('GET', url);
  const parsedData = await JSON.parse(res.response);
  console.log('response', parsedData);
  const calories = [];
  const dates = [];
  function numToWeekday(numDay) {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const fullDate = new Date(numDay);
    const day = fullDate.getDay();
    return weekdays[day];
  }
  for (obj of parsedData) {
    calories.push(obj.totalCalories);
    const date = numToWeekday(obj.date);
    dates.push(date);
  }

  //Chart data object
  const barData = {
    labels: dates,
    datasets: [
      {
        label: 'Weekly Calories Consumed',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: calories,
      },
    ],
  };
  //Chart configuration object
  const barConfig = {
    type: 'bar',
    data: barData,
  };
  //render bar chart to 'barChart' canvas element
  new Chart(document.getElementById('barChart'), barConfig);



  //Ability to change avatar
  const avatarNode = document.querySelector('#userImage');
  avatarNode.addEventListener('click', (e) => {
    console.log('triggered');
    const dropDownDiv = document.querySelector('#dropDown');
    dropDownDiv.classList.toggle('show');

    //Nested eventhandler for drop down images
    function imageClickHandler(node) {
      node.addEventListener('click', async(e) => {
        const imageLink = e.target.getAttribute('src');
        console.log('imagelink', imageLink);
        avatarNode.setAttribute('src', imageLink)
        // await makeRequest('PUT', `/api/image/${id}/${imageLink}`)
        dropDownDiv.classList.toggle('show');
      });
    }

    const images = document.querySelectorAll('.userImage');
    for (image of images) {
      imageClickHandler(image);
    }
  });


});
