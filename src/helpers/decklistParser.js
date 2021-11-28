export const equipmentParser = (eqp) => {
  return eqp
    .replace(/,/g, '\n')
    .split('\n')
    .map(el => el.trim())
    .map(el => ['', el]);
}

export const decklistParser = (decklist) => {
  let result = handlePitchValue(decklist);

  result.red = handleAmount(result.red);
  result.yellow = handleAmount(result.yellow);
  result.blue = handleAmount(result.blue);

  return result;
}


const handlePitchValue = (decklist) => {
  let result = {
    red: [],
    yellow: [],
    blue: []
  };

  decklist.split('\n').map(e => e.trim()).filter(e => e !== undefined && e[0] !== '#').forEach(card => {
    let cost = card.slice(-8);
    if(cost.includes('red') || cost.includes('1')) {
      result.red.push(card.replace(/\(red\)$/, '').replace(/\(1\)$/, ''));
    }
    if(cost.includes('yellow') || cost.includes('2')) {
      result.yellow.push(card.replace(/\(yellow\)$/, '').replace(/\(2\)$/, ''));
    }
    if(cost.includes('blue') || cost.includes('3')) {
      result.blue.push(card.replace(/\(blue\)$/, '').replace(/\(3\)$/, ''));
    }
  });

  return result;
};

const handleAmount = (list) => {
  return list.map(card => {
    if (card.includes(1)) return [1, card.replace(/\(1\)/, '').replace(/1 x/, '').trim()];
    if (card.includes(2)) return [2, card.replace(/\(2\)/, '').replace(/2 x/, '').trim()];
    if (card.includes(3)) return [3, card.replace(/\(3\)/, '').replace(/3 x/, '').trim()];
  }).sort((a, b) => a[1] < b[1] ? -1 : 1);
};
