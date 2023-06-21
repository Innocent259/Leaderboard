import './style.css';
import getData from './modules/getData.js';
import postData from './modules/post.js';
import Leaderboard from './modules/LeaderboardClass.js';

const refreshButton = document.querySelector('.refresh-btn');
const submitButton = document.querySelector('.submit-btn');
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const leaderboardContainer = document.querySelector('.result');

submitButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const list = new Leaderboard(nameInput.value, scoreInput.value);
  await postData(list.name, list.score);
  leaderboardContainer.innerHTML = '';
  nameInput.value = '';
  scoreInput.value = '';
  await getData();
});

refreshButton.addEventListener('click', async (e) => {
  e.preventDefault();
  leaderboardContainer.innerHTML = '';
  await getData();
});

window.addEventListener('DOMContentLoaded', getData);
