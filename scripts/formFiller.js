const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

const parseDecklist = require('./decklistParser');

// Variables to Fillout
const decklistName = 'Oldhim - Control';
const fullName = 'Wilson Yu';
const gemId = '87683224';
const rawDecklist = `# Yorgos Samaras Oldhim Deck - Greece National Championship 14.11.21
Oldhim, Grandfather of Eternity (Elemental Guardian)

## Hero / Weapon / Equipment
1 x Crater Fist
1 x Crown of Seeds
1 x Heart of Ice
1 x Mage Master Boots
1 x Nullrune Boots
1 x Nullrune Gloves
1 x Rampart of the Ram's Head
1 x Tectonic Plating
1 x Winter's Wail

## Pitch 1
3 x Command and Conquer (1)
3 x Endless Winter (1)
3 x Enlightened Strike (1)
3 x Fate Foreseen (1)
3 x Oaken Old (1)
3 x Pummel (1)
3 x Sigil of Solace (1)
3 x Sink Below (1)
3 x Spinal Crush (1)

## Pitch 2
3 x Art of War (2)
3 x Autumn's Touch (2)
3 x Righteous Cleansing (2)
1 x Tome of Fyendal (2)

## Pitch 3
3 x Autumn's Touch (3)
3 x Blizzard Bolt (3)
3 x Channel Lake Frigid (3)
3 x Cranial Crush (3)
3 x Disable (3)
3 x Glacial Footsteps (3)
2 x Polar Blast (3)
1 x Pulse of Isenloft (3)
3 x Rouse the Ancients (3)
3 x Staunch Response (3)
3 x Tear Asunder (3)
2 x Winter's Bite (3)
3 x Winter's Grasp (3)
`

async function run() {
  const decklist = parseDecklist(rawDecklist);
  console.log(decklist);
  const doc = await PDFDocument.load(fs.readFileSync('../fab_cc_decklist 1.1.pdf'));
  const form = doc.getForm();
  form.getTextField('Full Name').setText(fullName);
  form.getTextField('GEM ID').setText(gemId);
  form.getTextField('Hero').setText(decklist.hero);

  let eqpTotal = fillSection('eqp', doc, decklist);
  let redTotal = fillSection('red', doc, decklist);;
  let yellowTotal = fillSection('yellow', doc, decklist);;
  let blueTotal = fillSection('blue', doc, decklist);;

  let grandTotal = eqpTotal + redTotal + yellowTotal + blueTotal;
  form.getTextField('grand-total').setText(String(grandTotal))

  fs.writeFileSync(`../Filled Forms/${decklistName}.pdf`, await doc.save());
}

const fillSection = (section, doc, decklist) => {
  // eqp, red, yellow, blue
  const form = doc.getForm();
  let total = 0;

  decklist[section].forEach( (el, i) => {
    total = total + Number(el[0]);
    form.getTextField(`${section}-count-${i + 1}`).setText(el[0]);
    form.getTextField(`${section}-card-${i + 1}`).setText(el[1]);
  });
  form.getTextField(`${section}-total`).setText(String(total));

  return total;
}

run().catch(err => console.log(err));


/**
  const fields = form.getFields();
  fields.forEach(field => {
    const name = field.getName();
    console.log(name);
    form.getTextField(name).setText(name);
  })
 */