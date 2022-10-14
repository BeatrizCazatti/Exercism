export function timeToMixJuice(name) {
    switch (name){
      case 'Pure Strawberry Joy':
        return 0.5;
        break;
      case 'Energizer':
        return 1.5;
        break;
      case 'Green Garden':
        return 1.5;
        break;
      case 'Tropical Island':
        return 3;
        break;
      case 'All or Nothing':
        return 5;
        break;  
      default:
        return 2.5;
        break;
    };
  };
  
  export function limesToCut(wedgesNeeded, limes) {
      var index = 0;
      var slices = 0;
      while (slices < wedgesNeeded && index < limes.length){
        switch (limes[index]) {
          case 'small':
            slices = slices + 6;
            index++;
            break;
          case 'medium':
            slices = slices + 8;
            index++;
            break;
          case 'large':
            slices = slices + 10;
            index++;
            break;
        }; 
      };
      return index;
    };
  
  export function remainingOrders(timeLeft, orders) {
     do {
        timeLeft = timeLeft - timeToMixJuice(orders[0]);
        orders.shift();
      } while (timeLeft > 0);
      return orders;
  };