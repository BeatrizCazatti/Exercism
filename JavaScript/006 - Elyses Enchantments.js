//1-Recuperar um cartão de uma pilha
export function getItem(cards, position) {
    return cards[position];
  };
  
  //2-Troque um cartão na pilha
  export function setItem(cards, position, replacementCard) {
    cards[position] = replacementCard;
    return cards;
  };
  
  //3-Insira um cartão no topo da pilha
  export function insertItemAtTop(cards, newCard) {
    cards.push(newCard);
    return cards;
  };
  
  //4-Remover um cartão da pilha
  export function removeItem(cards, position) {
      cards.splice(position, 1);
      return cards;
  };
  
  //5-Remova a carta superior da pilha
  export function removeItemFromTop(cards) {
    cards.pop();
    return cards;
  };
  
  //6-Insira um cartão na parte inferior da pilha
  export function insertItemAtBottom(cards, newCard) {
    [newCard].concat(cards);
    cards.unshift(newCard);
    return cards;
  };
  
  //7-Remova um cartão da parte inferior da pilha
  export function removeItemAtBottom(cards) {
    cards.shift()
    return cards;
  }
  
  //8-Verifique o tamanho da pilha
  export function checkSizeOfStack(cards, stackSize) {
    return cards.length == stackSize;
  }
  