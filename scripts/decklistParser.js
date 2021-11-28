const testDecklist = `
# Yuki Lee Bender Lexi Deck - Canada National Championship 14.11.21
Lexi, Livewire (Elemental Ranger)

## Hero / Weapon / Equipment
1 x Fyendal's Spring Tunic
1 x New Horizon
1 x Perch Grapplers
1 x Shock Charmers
1 x Voltaire, Strike Twice

## Pitch 1
3 x Blizzard Bolt (1)
3 x Bolt'n' Shot (1)
3 x Chilling Icevein (1)
3 x Cold Wave (1)
1 x Command and Conquer (1)
3 x Endless Arrow (1)
3 x Flake Out (1)
2 x Frost Fang (1)
3 x Ice Quake (1)
3 x Lightning Press (1)
1 x Pulse of Volthaven (1)
3 x Remorseless (1)
3 x Sleep Dart (1)
3 x Three of a Kind (1)
3 x Weave Ice (1)

## Pitch 2
3 x Blizzard Bolt (2)
3 x Chilling Icevein (2)
1 x Remembrance (2)
3 x Weave Ice (2)

## Pitch 3
2 x Amulet of Ice (3)
2 x Blizzard (3)
3 x Blizzard Bolt (3)
3 x Channel Lake Frigid (3)
3 x Chilling Icevein (3)
3 x Frost Lock (3)
3 x Ice Quake (3)
3 x Polar Blast (3)
3 x Winter's Bite (3)`;

const decklistParser = decklist => {
  let result = {
    hero: '',
    eqp: [],
    red: [],
    yellow: [],
    blue: []
  };
  let splitDecklist = decklist.split('\n\n').map(part => part.split('\n'));

  result.hero = splitDecklist[0][splitDecklist[0].length - 1];
  result.eqp = parseSplitData(splitDecklist[1]);
  result.red = parseSplitData(splitDecklist[2]);
  result.yellow = parseSplitData(splitDecklist[3]);
  result.blue = parseSplitData(splitDecklist[4]);

  return result;
}

const parseSplitData = data => {
  console.log(data);
  return data
    .slice(1)
    .map(part => part.split(' x '))
    .filter(part => part[1] !== undefined)
    .map(part => [part[0], part[1].replace(/ \((\d*)\)/, '')])
}

module.exports = decklistParser;