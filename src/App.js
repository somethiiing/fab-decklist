import React from 'react';

import { equipmentParser, decklistParser } from './helpers/decklistParser';
import { fillForm } from './helpers/formFiller';

import './App.css';

import emptyForm from './resources/fab_cc_decklist 1.2.pdf';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameField: '',
      gemIdField: '',
      pronounField: '',
      dateField: '',
      eventField: '',
      heroField: '',
      eqpField: '',
      decklistField: '',
      parsed: {
        eqp: [],
        red: [],
        yellow: [],
        blue: []
      },
      pdfSrc: '',
      showData: false
    }

    this.handleFieldOnChange = this.handleFieldOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fillTestData = this.fillTestData.bind(this);
    this.generateDecklist = this.generateDecklist.bind(this);
    this.toggleShowData = this.toggleShowData.bind(this);
  }

  handleFieldOnChange(e, field) {
    this.setState({[field]: e.target.value})
  }

  handleSubmit() {
    let {
      nameField,
      gemIdField,
      pronounField,
      dateField,
      eventField,
      heroField,
      eqpField,
      decklistField
    } = this.state;

    let result = Object.assign({}, decklistParser(decklistField), {
      fullName: nameField,
      gemId: gemIdField,
      pronoun: pronounField,
      date: dateField,
      event: eventField,
      hero: heroField,
      eqp: equipmentParser(eqpField)
    });

    this.generateDecklist(result);

    this.setState({parsed: result});
  }

  generateDecklist(decklistObj) {
    fillForm(decklistObj)
      .then( pdfBytes => {
        let file = new Blob([pdfBytes], { type: 'application/pdf' });
        var fileURL = URL.createObjectURL(file);
        this.setState({pdfSrc: fileURL});
        // window.open(fileURL)
      })
      .catch(err => console.log(err));
  }

  toggleShowData() {
    let { showData } = this.state;
    this.setState({showData: !showData})
  }

  fillTestData() {
    this.setState({
      nameField: 'wilson',
      gemIdField: '123123',
      pronounField: 'he/him/her',
      dateField: '12/25/2015',
      eventField: 'fake event',
      heroField: 'Oldhim, Grandfather of Eternity',
      eqpField: 'Crater Fist, Crown of Seeds, Fyendal\'s Spring Tunic, Heart of Ice, Ironhide Legs, Nullrune Gloves, Nullrune Hood, Rampart of the Ram\'s Head,Winter\'s Wail',
      decklistField: `
  (3) Command and Conquer (red)
  (3) Endless Winter (red)
  (3) Fate Foreseen (red)
  (3) Oaken Old (red)
  (3) Pummel (red)
  (3) Sigil of Solace (red)
  (3) Sink Below (red)
  (3) Spinal Crush (red)
  (3) Art of War (yellow)
  (3) Forged for War (yellow)
  (2) Remembrance (yellow)
  (3) Autumn's Touch (blue)
  (3) Blizzard (blue)
  (3) Channel Lake Frigid (blue)
  (3) Cranial Crush (blue)
  (3) Disable (blue)
  (2) Exposed to the Elements (blue)
  (3) Glacial Footsteps (blue)
  (3) Last Ditch Effort (blue)
  (1) Pulse of Isenloft (blue)
  (3) Rouse the Ancients (blue)
  (3) Sow Tomorrow (blue)
  (3) Staunch Response (blue)
  (3) Winter's Bite (blue)
  (3) Winter's Grasp (blue)
      `
    });
  }

  render() {
    let { pdfSrc, showData, heroField } = this.state;
    let src = pdfSrc !== '' ? pdfSrc : emptyForm;

    window.fillTestData = () => this.fillTestData();
    window.toggleShowData = () => this.toggleShowData();

    return (
      <div className="app">
        <div className='leftCol'>
          <h2 className='sectionHeader'>Personal Information</h2>
          <label className='section' for='fullName'>
            <span className='label'>Full Name:</span>
            <input
              className='field'
              value={this.state.nameField}
              onChange={e => this.handleFieldOnChange(e, 'nameField')}
            />
          </label>
          <label className='section' for='gemId'>
            <span className='label'>GEM ID:</span>
            <input
              className='field'
              value={this.state.gemIdField}
              onChange={e => this.handleFieldOnChange(e, 'gemIdField')}
            />
          </label>
          <label className='section' for='pronoun'>
            <span className='label'>Pronouns:</span>
            <input
              className='field'
              value={this.state.pronounField}
              onChange={e => this.handleFieldOnChange(e, 'pronounField')}
            />
          </label>

          <h2 className='sectionHeader'>Event Information</h2>
          <label className='section' for='date'>
            <span className='label'>Date:</span>
            <input
              className='field'
              value={this.state.dateField}
              onChange={e => this.handleFieldOnChange(e, 'dateField')}
            />
          </label>
          <label className='section' for='event'>
            <span className='label'>Event:</span>
            <input
              className='field'
              value={this.state.eventField}
              onChange={e => this.handleFieldOnChange(e, 'eventField')}
            />
          </label>

          <h2 className='sectionHeader'>Deck Information</h2>
          <label className='section' for='hero'>
            <span className='label'>Hero:</span>
            <input
              className='field'
              value={this.state.heroField}
              onChange={e => this.handleFieldOnChange(e, 'heroField')}
            />
          </label>
          <label className='section' for='equipment'>
            <span className='label'>Equipment:</span>
            <textarea
              className='equipment field'
              value={this.state.eqpField}
              onChange={e => this.handleFieldOnChange(e, 'eqpField')}
            />
          </label>
          <label className='section' for='decklist'>
            <span className='label'>Decklist:</span>
            <textarea
              className='decklist field'
              value={this.state.decklistField}
              onChange={e => this.handleFieldOnChange(e, 'decklistField')} />
          </label>

          <button className='button' onClick={this.handleSubmit}>Generate Decklist</button>

        </div>

        <div className='rightCol'>
          <h2 className='sectionHeader'>Preview: </h2>
          <div className='previewContainer'>
            <iframe className='preview' id='decklist' name='decklist' height='665' width='440' type="application/pdf" src={src} />
            <a className='button' href={src} download={`${heroField} - decklist`}>Download Decklist</a>
          </div>
          { showData && <>
              <h2 className='sectionHeader'>State: </h2>
              <pre>
                {JSON.stringify(this.state, null, 4)}
              </pre>
            </>}
        </div>
      </div>
    );
  }
}

export default App;
