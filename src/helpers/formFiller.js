import { PDFDocument } from 'pdf-lib';

import emptySheet from '../resources/fab_cc_decklist 1.2.pdf';

/**
  DECKLIST OBJ:
    fullName: string
    gemId: string
    pronoun: string
    date: string
    event: string
    hero: string
    eqp: [string, string, string]
    red: [
      [number, string]
    ]
    yellow: []
    blue: []
*/

export async function fillForm(decklistObj) {
  const bytes = await fetch(emptySheet).then(res => res.arrayBuffer());
  const doc = await PDFDocument.load(bytes);
  const form = doc.getForm();

  const {
    fullName,
    gemId,
    pronoun,
    date,
    event,
    hero,
  } = decklistObj;

  form.getTextField('Full Name').setText(fullName);
  form.getTextField('GEM ID').setText(gemId);
  form.getTextField('Pronoun').setText(pronoun);
  form.getTextField('Date').setText(date);
  form.getTextField('Event').setText(event);
  form.getTextField('Hero').setText(hero);

  let eqpTotal = fillSection('eqp', doc, decklistObj);
  let redTotal = fillSection('red', doc, decklistObj);
  let yellowTotal = fillSection('yellow', doc, decklistObj);
  let blueTotal = fillSection('blue', doc, decklistObj);

  let grandTotal = eqpTotal + redTotal + yellowTotal + blueTotal;
  form.getTextField('grand-total').setText(String(grandTotal))

  // await logData(form);
  return await doc.save();
}

const fillSection = (section, doc, decklist) => {
  // eqp, red, yellow, blue
  const form = doc.getForm();
  let total = 0;

  decklist[section].forEach( (el, i) => {
    total = total + Number(el[0]);
    form.getTextField(`${section}-count-${i + 1}`).setText(String(el[0]));
    form.getTextField(`${section}-card-${i + 1}`).setText(el[1]);
  });

  total = section === 'eqp' ? decklist[section].length : total;
  form.getTextField(`${section}-total`).setText(String(total));

  return total
}

const logData = (form) => {
  const fields = form.getFields();
  fields.forEach(field => {
    const name = field.getName();
    const text = field.getText();
    console.log(name, ': ', text);
  })
}