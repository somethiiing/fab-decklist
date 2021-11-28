let decklistScraper = () => {
  let title = document.getElementsByTagName('title')[0].innerText;
  let hero = document.getElementsByTagName('th')[4].parentElement.children[1].innerText;
  let eqp = document.getElementsByTagName('th')[6].parentElement.parentElement.children;
  let eqpArr = [];

  for (let item of eqp) {
    eqpArr.push(item.innerText);
  }

  eqpArr[0] = '## ' + eqpArr[0];

  let pitch1 = document.getElementsByClassName('pitch1')[0].innerText.split('\n');
  let pitch2 = document.getElementsByClassName('pitch2')[0].innerText.split('\n');
  let pitch3 = document.getElementsByClassName('pitch3')[0].innerText.split('\n');

  pitch1[0] = '## ' + pitch1[0];
  pitch2[0] = '## ' + pitch2[0];
  pitch3[0] = '## ' + pitch3[0];

  let result = '# ' + title + '\n' + hero + '\n\n';

  eqpArr.forEach(el => {
    result = result + el + `\n`;
  });
  result = result + '\n';
  pitch1.forEach(el => {
    result = result + el + `\n`;
  });
  result = result + '\n';
  pitch2.forEach(el => {
    result = result + el + `\n`;
  });
  result = result + '\n';
  pitch3.forEach(el => {
    result = result + el + `\n`;
  });

  return result;
}

copy(decklistScraper());

