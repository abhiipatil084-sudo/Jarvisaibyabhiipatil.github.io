
const jarvisData = {
  "what is the capital of india": "The capital of India is New Delhi.",
  "who was shivaji maharaj": "Shivaji Maharaj was the founder of the Maratha Empire, born in 1630.",
  "jee exam pattern": "JEE Main has multiple-choice questions in Physics, Chemistry, and Math. JEE Advanced is for IIT aspirants.",
  "calculate": "Use the calculator page to solve expressions."
};

function getResponse(input) {
  if (!input) return "Please ask something.";
  for (let key in jarvisData) {
    if (input.includes(key)) return jarvisData[key];
  }
  if (input.match(/[\d\+\-\*\/\(\)\.]/)) {
    try {
      return eval(input).toString();
    } catch {
      return "Invalid math expression.";
    }
  }
  return "Sorry, I don't know that yet.";
}
