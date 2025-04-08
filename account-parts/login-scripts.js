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

let database = [];
let candidates = [];
let partylists = [];
let positions = [];
let runningFor = [];
let candidate_stances = [];
let stances = [];
let education = [];
let experience = [];
let committed = [];
let offense = [];

function find(data, category, table){
  for (let i in table){
    console.log(category);
    if (table[i][category] === data){
      return i;
    }
  }
  return -1;
};

fetch('database.json')
  .then(response => response.json())
  .then(data => {
    database = data;
    for (let x in data){
      if(data[x]["type"] === "table" && data[x]["name"] === "candidate"){
        candidates = data[x];
      }
      if(data[x]["type"] === "table" && data[x]["name"] === "party_list"){
        partylists = data[x];
      }
      if(data[x]["type"] === "table" && data[x]["name"] === "political_position"){
        positions = data[x];
      }
      if(data[x]["type"] === "table" && data[x]["name"] === "running_for"){
        runningFor = data[x];
      }
      if(data[x]["type"] === "table" && data[x]["name"] === "candidate_scoresheet"){
        candidate_stances = data[x];
      }
      if(data[x]["type"] === "table" && data[x]["name"] === "stance"){
        stances = data[x];
      }
      if(data[x]["type"] === "table" && data[x]["name"] === "educational_attainment"){
        education = data[x];
      }
      if(data[x]["type"] === "table" && data[x]["name"] === "former"){
        experience = data[x];
      }
      if(data[x]["type"] === "table" && data[x]["name"] === "committed"){
        committed = data[x];
      }
      if(data[x]["type"] === "table" && data[x]["name"] === "offense"){
        offense = data[x];
      }

    }
    // console.log(candidates["data"]);

    if(document.getElementById("candidate-gallery") !== null){
      if(localStorage.getItem("user_votes")){
        let user_votes = JSON.parse(localStorage.getItem("user_votes"));
        let user_vote_count = user_votes.length;
        for (let i in user_votes){
          if (user_votes[i] == 0){
            user_vote_count--;
          }
        }
        let compatibility = [];
        for (let x in candidates["data"]) {
          let unparsed_votes = candidate_stances["data"][find(candidates["data"][x]["Candidate_ID"], "Candidate_ID", candidate_stances["data"])];
          let candidate_votes = [];
          let sumprod_votes = 0;
          let candidate_compatibility = 0;
          for (let i = 1; i <= 20; i++){
            candidate_votes.push(parseInt(unparsed_votes[`Q${i}_Score`]));
          }
          for (let i in candidate_votes){
            sumprod_votes += user_votes[i] * candidate_votes[i];
          }
          candidate_compatibility = (sumprod_votes/user_vote_count + 1)/2;
          compatibility.push({
            "Candidate_ID": candidates["data"][x]["Candidate_ID"],
            "Candidate_Votes": candidate_votes,
            "Total_Combined_Votes": sumprod_votes,
            "Candidate_Compatibility": candidate_compatibility
          });
        }
        compatibility.sort(function(a, b){return a["Candidate_Compatibility"] - b["Candidate_Compatibility"]});
        compatibility.reverse();
        let text = ""
        for (let x in compatibility) {
          text += `<figure>
            <a href="social-media-basic-candidate-page.html" onclick="localStorage.setItem('candidate', ${compatibility[x]["Candidate_ID"] - 1})">
              <img src="images/placeholder-image.jpg">
            </a>
            <figcaption>
              ${candidates["data"][compatibility[x]["Candidate_ID"] - 1]["Candidate_LastName"]}<br>
              Compatibility: ${(compatibility[x]["Candidate_Compatibility"] * 100).toFixed(2)}%
            </figcaption>
          </figure>`;
          // console.log(nameList[x]);
        }
          // text += "</select>"
        document.getElementById("candidate-gallery").innerHTML = text;
      }else{
        //display candidates
        let text = ""
        for (let x in candidates["data"]) {
          text += `<figure>
            <a href="social-media-basic-candidate-page.html" onclick="localStorage.setItem('candidate', ${x})">
              <img src="images/placeholder-image.jpg">
            </a>
            <figcaption>${candidates["data"][x]["Candidate_LastName"]}</figcaption>
          </figure>`;
          // console.log(nameList[x]);
        }
          // text += "</select>"
        document.getElementById("candidate-gallery").innerHTML = text;
      }

    }

    if(document.getElementById("candidate-header") !== null){
      let x = localStorage.getItem("candidate");
      document.getElementById("candidate-last-name").innerHTML = `<span id="candidate-number">${candidates["data"][x]["Ballot_Number"]} </span>${candidates["data"][x]["Candidate_LastName"]}`;
      document.getElementById("candidate-first-name").innerHTML = candidates["data"][x]["Candidate_FirstName"];
      document.getElementById("candidate-party-list").innerHTML = partylists["data"][find(candidates["data"][x]["Party_ID"], "Party_ID", partylists["data"])]["Party_Name"];
      document.getElementById("candidate-post").innerHTML = positions["data"][find(runningFor["data"][find(candidates["data"][x]["Candidate_ID"], "Candidate_ID", runningFor["data"])]["Position_ID"], "Position_ID", positions["data"])]["Position_Name"];
      let candidate_stance = candidate_stances["data"][find(candidates["data"][x]["Candidate_ID"], "Candidate_ID", candidate_stances["data"])];
      console.log(candidate_stance);
      let for_text = "";
      let against_text = "";
      for (let i = 5; i <= 20; i++){
        if (candidate_stance[`Q${i}_Score`] == 1){
          for_text += `${stances["data"][find(`${i-4}`, "Stance_ID", stances["data"])]["Stance_Name"]}<br>`;
        }else if(candidate_stance[`Q${i}_Score`] == -1){
          against_text += `${stances["data"][find(`${i-4}`, "Stance_ID", stances["data"])]["Stance_Name"]}<br>`;
        }
      }
      document.getElementById("for-stances").innerHTML = for_text;
      document.getElementById("against-stances").innerHTML = against_text;
      document.getElementById("candidate-education-list").innerHTML = education["data"][find(candidates["data"][x]["Highest_Education_Attained"], "Attainment_Level", education["data"])]["Attainment_Name"];
      let family_text = "";
      for(let i in candidates["data"][x]["Family_In_Office"]){
        family_text += `${candidates["data"][x]["Family_In_Office"][i]}<br>`;
      }
      if (family_text == ""){
        family_text += "None<br>";
      }
      document.getElementById("candidate-family-members-list").innerHTML = family_text;
      let experience_text = "";
      for(let i in experience["data"]){
        if (experience["data"][i]["Candidate_ID"] - 1 == x){
          experience_text += `${positions["data"][find(experience["data"][i]["Position_ID"], "Position_ID", positions["data"])]["Position_Name"]}`;
        }
      }
      if (experience_text == ""){
        experience_text += "None<br>";
      }
      document.getElementById("candidate-experience-list").innerHTML = experience_text;
      let committed_text = "";
      for(let i in committed["data"]){
        console.log(committed["data"][i]["Candidate_ID"]);
        console.log("-"+x);
        if (committed["data"][i]["Candidate_ID"] - 1 == x){
          console.log(committed["data"][i]["Offense_ID"]);
          committed_text += `${offense["data"][find(committed["data"][i]["Offense_ID"], "Offense_ID", offense["data"])]["Offense_Name"]}`;
        }
      }
      if (committed_text == ""){
        committed_text += "None<br>";
      }
      document.getElementById("candidate-criminal-history-list").innerHTML = committed_text;
    }
  });

  // localStorage.setItem("candidate", ${candidates["data"][x]["Candidate_LastName"]})

// let test = "";
// if (typeof(Storage) !== "undefined") {
//   // Store
//   localStorage.setItem("string", "hello");
//   // Retrieve
//   test = localStorage.getItem("string");
// } else {
//   test = "Sorry, no Web storage support!";
// }
console.log(localStorage.getItem("candidate"));

document.getElementById('search-bar').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  const filtered = candidates["data"].filter(candidate =>
    candidate["Candidate_LastName"].concat(", ", candidate["Candidate_FirstName"]).toLowerCase().includes(query)
  );

  const limitResult = filtered.slice(0, 5);

//for limited results
  limitResult.forEach(candidate => {
    const li = document.createElement('li');
    // li.textContent = candidate["Candidate_LastName"].concat(", ", candidate["Candidate_FirstName"]);
    li.innerHTML = `<a href="social-media-basic-candidate-page.html" onclick="localStorage.setItem('candidate', ${candidate["Candidate_ID"]-1})">
            ${candidate["Candidate_LastName"].concat(", ", candidate["Candidate_FirstName"])}
          </a>`;
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