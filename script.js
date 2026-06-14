
// STORY TEMPLATES
const stories = [
  "Once upon a time, NAME went to a talking pizza shop and ordered a dancing burger 🍔.",
  "NAME woke up and found a monkey driving their car to office 🐒🚗.",
  "In a parallel universe, NAME became the president of a chocolate kingdom 🍫.",
  "NAME accidentally joined a spaceship crew headed to Mars without pants 🚀😂.",
  "One day, NAME discovered that their pet cat was secretly a hacker 🐱💻."
];

function generateStory() {
  const nameInput = document.getElementById("name").value;
  const storyBox = document.getElementById("storyBox");

  // pick random story
  let randomIndex = Math.floor(Math.random() * stories.length);
  let story = stories[randomIndex];

  // replace NAME if entered
  let finalName = nameInput.trim() !== "" ? nameInput : "Someone";

  storyBox.innerHTML = story.replace("NAME", finalName);
}