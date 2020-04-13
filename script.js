const inputField = document.getElementById("input");
const h1 = document.getElementById("H1");
const fromMorse = document.getElementById("button");
const fromText = document.getElementById("btn");
const copyBtn = document.getElementById("copy");
// FUNCTIONS FOR EVENT LISTENNERS
const morseToText = (event) => {
  //   makes array from input
  //   const inputArray = input.split(" ").filter((el) => {
  //     return el !== "";
  //   });
  //   takes object keys from alphabet
  //   const morseAlphabet = Object.keys(alphabet);
  //   checks if inputArray = morseAlphabet
  //   const final = inputArray.some((el) => morseAlphabet.includes(el));
  const input = event.target.value;
  input.match(/[a-zA-Z0-9]/g)
    ? (h1.textContent = "invalid morse charachter")
    : (h1.textContent = decoder(input));
};
const textToMorse = (event) => {
  // decoder from text to morse
  h1.innerHTML = textDecoder(event.target.value);
};
// EVENT LISTENNERS
// from morse button
fromMorse.addEventListener("click", () => {
  document.querySelector("p").style.display = "block";
  clearFields();
  fromMorse.classList.add("color");
  fromText.classList.remove("color");
  inputField.addEventListener("keyup", morseToText);
  keyUp();
});
// from text button
fromText.classList.add("color");
fromText.addEventListener("click", () => {
  document.querySelector("p").style.display = "none";
  clearFields();
  fromMorse.classList.remove("color");
  fromText.classList.add("color");
  inputField.removeEventListener("keyup", morseToText);
  keyUp();
});
copyBtn.addEventListener("click", () => {
  let tempHtml = "<textarea id='copy-text'>" + h1.innerHTML + "</textarea>";
  document.getElementById("temp").innerHTML = tempHtml;
  let text = document.getElementById("copy-text");
  text.select();
  document.execCommand("copy");
});
// clear inputField and h1
const clearFields = () => {
  h1.textContent = "";
  inputField.value = "";
};
// INPUT keyup LISTENNER
const keyUp = () => {
  inputField.addEventListener("keyup", textToMorse);
};
keyUp();
// ================================================
// ============= TEXT TO MORSE DECODER ============
const morse = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  ა: ".-",
  ბ: "-...",
  ც: "-.-.",
  დ: "-..",
  ე: ".",
  ფ: "..-.",
  გ: "--.",
  ღ: "--.",
  ჰ: "....",
  ი: "..",
  ჯ: ".---",
  კ: "-.-",
  ლ: ".-..",
  მ: "--",
  ნ: "-.",
  ო: "---",
  პ: ".--.",
  ქ: "--.-",
  რ: ".-.",
  ს: "...",
  ტ: "-",
  თ: "-",
  უ: "..-",
  ვ: "...-",
  წ: ".--",
  ხ: "-..-",
  ყ: "-.--",
  ზ: "--..",
  შ: "... ....",
  ჩ: "-.-. ....",
  ჭ: "-.-. ....",
  ძ: "-..  --..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",

  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  _: "..--.-",
  '"': ".-..-.",
  $: "...-..-",
  "!": "-.-.--",
  "@": ".--.-.",
  " ": "/",
};
const textDecoder = (text) => {
  const textConv = [];
  const lower = Array.from(text)
    .map((el) => {
      return el.toLowerCase();
    })
    .map((el) => {
      textConv.push(morse[el]);
    });
  const final = textConv.join().replace(/,/g, "  ").replace(/[/]/g, "    ");
  return final;
};
// =========================================================
// ===============================
// MORZE TO TEXT DECODER
// ===============================
const alphabet = {
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  "/": " ",
  "-·-·--": "!",
  "·-·-·-": ".",
  "--··--": ",",
  "···−−−···": "SOS",
  "..--..": "?",
  ".----.": "'",
  ".-..-.": '"',
  "-..-.": "/",
  "-.--.": "(",
  "-.--.-": ")",
  ".-...": "&",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  ".-.-.": "+",
  "-....-": "-",
  "..--.-": "_",
  "...-..-": "$",
  ".--.-.": "@",
  "/": " ",
};
const decoder = (morseCode) => {
  const converted = [];
  morseCode.split("   ").map((word) => {
    word.split(" ").map((letter) => {
      converted.push(alphabet[letter]);
    });
    converted.push(" ");
  });
  const final = converted.join("").toUpperCase();
  return final;
};
