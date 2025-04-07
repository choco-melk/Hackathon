// document.getElementById("sign-in-button").addEventListener("click", e =>{
//     e.preventDefault();
//     const passwordValue = document.getElementById("password-login").value;
    
//     /* 
//      * FOR THE BACKEND PEOPLE:
//      * Make sure that the right password is inputted to enter 
//      * user account. Check if the inputted value is in the database ;>
//      */

// });

// gin-comment ko lang kay amu ni ang nagpa-hold back sa search function hehe

let nameList = [];

fetch('account-parts//candidate-list.json')
  .then(response => response.json())
  .then(data => {
    nameList = data;
  });

document.getElementById('search-bar').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  const filtered = nameList.filter(name =>
    name.toLowerCase().includes(query)
  );

  const limitResult = filtered.slice(0, 5);

//for limited results
  limitResult.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    resultsContainer.style.width='max-content';
    resultsContainer.style.paddingRight='30px';
    resultsContainer.appendChild(li);
  });

//   filtered.forEach(name => {
//     const li = document.createElement('li');
//     li.textContent = name;
//     resultsContainer.appendChild(li);
//   });

  if (query && limitResult.length === 0) {
    resultsContainer.style.width='250px';
    resultsContainer.innerHTML = '<li>No match found.</li>';
  } else if (query.length === 0) {
    resultsContainer.style.width='250px';
    resultsContainer.innerHTML = '<li></li>';
  }
});

// let nameList = [];

// fetch('names.json')
//   .then(response => response.json())
//   .then(data => {
//     nameList = data;
//   });

// let currentFiltered = [];
// let showingAll = false;

// const resultsContainer = document.getElementById('results');
// const showMoreBtn = document.getElementById('show-more-button');

// document.getElementById('search-box').addEventListener('input', function () {
//   const query = this.value.toLowerCase();
//   resultsContainer.innerHTML = '';
//   showingAll = false;

//   currentFiltered = nameList.filter(name =>
//     name.toLowerCase().includes(query)
//   );

//   renderResults();
// });

// showMoreBtn.addEventListener('click', () => {
//   showingAll = true;
//   renderResults();
// });

// function renderResults() {
//   resultsContainer.innerHTML = '';

//   const listToShow = showingAll ? currentFiltered : currentFiltered.slice(0, 5);

//   listToShow.forEach(name => {
//     const li = document.createElement('li');
//     li.textContent = name;
//     resultsContainer.appendChild(li);
//   });

//   if (currentFiltered.length > 5 && !showingAll) {
//     showMoreBtn.style.display = 'inline-block';
//   } else {
//     showMoreBtn.style.display = 'none';
//   }

//   if (currentFiltered.length === 0) {
//     resultsContainer.innerHTML = '<li>No match found.</li>';
//     showMoreBtn.style.display = 'none';
//   }
// }