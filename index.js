function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var uppercase = string.toUpperCase()
  var lowercase = string.toLowerCase()
  var loveYou = ""
  
  if (string === loveYou) {
    return "I love you, too."
  } else if (uppercase.toUpperCase() === uppercase) {
     return "YES INDEED!"
  } else {
    return "I can\'t hear you"
  }
 
}