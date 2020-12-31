// DOM Selection
// 1. document.getElementById() -> element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'yellow';
judul.innerHTML = 'Lerian';

// 2. document.getElementsByTagName() -> HTML Collection
const p = document.getElementsByTagName('p');
// p[2].style.backgroundColor = 'lightblue';
// p[0].style.backgroundColor = 'blue';
// menggunakan looping
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.color = 'red';
h1.style.fontSize = '50px'

// 3. document.getElementsByClassName() -> HTML Collection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini diubah jadi teks';