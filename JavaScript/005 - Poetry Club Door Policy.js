export function frontDoorResponse(line) {
    return line[0]
  }
  
  export function frontDoorPassword(word) {
    return word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
  }
  
  export function backDoorResponse(line) {
    return line.trim()[line.trim().length-1]
  }
  
  export function backDoorPassword(word) {
    return frontDoorPassword(word) + ', please'
  }
  