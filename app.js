// import functions and grab DOM elements
const waterImgel = document.getElementById('waterImg');
const skylineImgEl = document.getElementById('skylineImg');
const natureImgEl = document.getElementById('natureImg');

const welcomeMessage = document.getElementById('welcome-message');

const waterDropdown = document.getElementById('water-dropdown');
const skylineDropdown = document.getElementById('skyline-dropdown');
const natureDropdown = document.getElementById('nature-dropdown');

const userCityInput = document.getElementById('user-city-input');
const userCityButton = document.getElementById('city-button');

const userSloganInput = document.getElementById('user-slogan-input');
const sloganButton = document.getElementById('slogan-button');
const displaySloganEl = document.getElementById('display-slogan');

const countString = document.getElementById('count-string');
// let state
let waterCount = 0;
let skylineCount = 0;
let natureCount = 0;

let sloganArr = [];
let cityNames = [];
// set event listeners 

waterDropdown.addEventListener('change', () => {
  //increment waterCount
    waterCount++;
  // call function to change water photo
    let value = waterDropdown.value;
    waterImgel.src = `assets/water-${value}.jpg`;
  // call function to change stats
    displayCountStats();
});

skylineDropdown.addEventListener('change', () => {
  //increment skylineCount
    skylineCount++;
  // call function to change skyline photo
    let value = skylineDropdown.value;
    skylineImgEl.src = `assets/skyline-${value}.jpg`;
  // call function to change stats
    displayCountStats();
});

natureDropdown.addEventListener('change', () => {
  //increment natureCount
    natureCount++;
  // call function to change nature photo
    let value = natureDropdown.value;
    natureImgEl.src = `assets/nature-${value}.jpg`;
  //call function to change stats
    displayCountStats();
});

userCityButton.addEventListener('click', () => {
  // gather user input and place it into the city name array
    let value = userCityInput.value;
    cityNames.push(value);
    userCityInput.value = '';
    // welcomeMessage.textContent = `Welcome to ${userCityInput.value}!`;
    displayWelcome();
    if (cityNames.length >= 0){
        cityNames.shift();
    }
});

sloganButton.addEventListener('click', () => {
  // on click add slogan input value to slogan array and display in slogan.
    let value = userSloganInput.value;
    sloganArr.push(value);
    userSloganInput.value = '';
    displaySlogans();

    if (sloganArr.length >= 3) {
        sloganArr.shift();
    }
});


function displayCountStats() {
  //try to make this a TDD function if you can
    countString.textContent = `You have changed the waterfront ${waterCount} times
    You have changed the skyline ${skylineCount} times! You have changed the 
    nature scene ${natureCount} times!`;
}

function displaySlogans(){
    displaySloganEl.textContent = ``;
    for (let slogan of sloganArr){
        let pTag = document.createElement('p');
        displaySloganEl.append(pTag);
        pTag.textContent = slogan;
    }
}

function displayWelcome(){
    welcomeMessage.textContent = '';
    for (let cityName of cityNames) {
        let pTag = document.createElement('p');
        welcomeMessage.append(pTag);
        pTag.textContent = `Greetings from ${cityName}`;
        pTag.classList.add('welcome');
    }
}

let waterScenes = [{ display: 'Industrial', value: '1' }, { display: 'European', value: '2' },
    { display: 'Neon', value: '3' }, { display: 'Renaissance', value: '4' }]; 
let skylineScenes = [{ display: 'Neon', value: '1' }, { display: 'European', value: '2' }, 
    { display: 'Industrial', value: '3' }, { display: 'Renaissance', value: '4' }];
let natureScenes = [{ display: 'European', value: '1' }, { display: 'Neon', value: '2' }, 
    { display: 'Industrial', value: '3' }, { display: 'Renaissance', value: '4' }];

function getDropdownItems() {
    for (let waterScene of waterScenes){
        const option = document.createElement('option');
        waterDropdown.append(option);
        option.textContent = waterScene.display;
        option.value = waterScene.value;
    }
    for (let skylineScene of skylineScenes){
        const option = document.createElement('option');
        skylineDropdown.append(option);
        option.textContent = skylineScene.display;
        option.value = skylineScene.value;
    }
    for (let natureScene of natureScenes){
        const option = document.createElement('option');
        natureDropdown.append(option);
        option.textContent = natureScene.display;
        option.value = natureScene.value;
    }
}
getDropdownItems();

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
