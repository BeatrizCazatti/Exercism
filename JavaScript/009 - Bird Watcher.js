export function totalBirdCount(birdsPerDay) {
    var sum = 0;
    for (let index = 0; index < birdsPerDay.length; index++) {
      sum = sum + birdsPerDay[index];
    };
    return sum;
  };
  
  //2
  export function birdsInWeek(birdsPerDay, week) {
    var sum = 0;
    for (let index = week * 7 - 7; index < 7 * week; index++) {
      sum = sum + birdsPerDay[index];
    };
    return sum;
  };
  
  //3
  export function fixBirdCountLog(birdsPerDay) {
    for (let index = 0; index < birdsPerDay.length; index++) {
      if (index % 2 == 0) {
        birdsPerDay[index] = birdsPerDay[index] + 1;
      };
    };
    return birdsPerDay;
  };
  