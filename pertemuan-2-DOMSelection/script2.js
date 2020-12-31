// 3. document.querySelector() -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '34px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// 4. document.querySelectorAll() -> nodeList

const p = document.querySelectorAll('p');
p[2].innerHTML = 'Javaa';