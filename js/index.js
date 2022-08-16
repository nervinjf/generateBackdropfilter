const square = document.querySelector(".square")
const color = document.querySelector("input[type=color]")
const opacidad = document.querySelector("#opacidad")
const blur = document.querySelector("#blur")
const size = document.querySelector("#tamaño")
const radio = document.querySelector("#radio")
const text = document.querySelector(".textContent")

let colors = '255, 255, 255'

const hexToRgb = function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    //a: 1,
  } : null; 
}
let opaci = 1;
let blurr = 3;
let sizes = 0;
let radios = 0;


opacidad.addEventListener('mousedown', (e) => {
  e.target.nextElementSibling.style.visibility = "visible";
});

opacidad.addEventListener('mouseup', (e) => {
  e.target.nextElementSibling.style.visibility = "visible";
});

opacidad.addEventListener("input", (e) =>{
  opaci = `${e.target.value}`;
  square.style.opacity = opaci;
  e.target.nextElementSibling.textContent = opaci
  text.innerHTML = `<p class="textContent">
background: rgba(${colors}, ${opaci});
<br>
backdrop-Filter: ${opaci};
<br>
backdrop-Filter: ${blurr};
<br>
width: ${sizes};
<br>
height: ${sizes};
<br>
border-radius: ${radios};
</p>`
});

blur.addEventListener('mousedown', (e) => {
  e.target.nextElementSibling.style.visibility = "visible";
});

blur.addEventListener('mouseup', (e) => {
  e.target.nextElementSibling.style.visibility = "visible";
});

blur.addEventListener("input", (e) =>{
  blurr = `Blur(${e.target.value}px)`;
  square.style.backdropFilter = blurr;
  e.target.nextElementSibling.textContent = blurr;
  text.innerHTML = `<p class="textContent">
background: rgba(${colors}, ${opaci});
<br>
backdrop-Filter: ${opaci};
<br>
backdrop-Filter: ${blurr};
<br>
width: ${sizes};
<br>
height: ${sizes};
<br>
border-radius: ${radios};
</p>`
});

color.addEventListener("input", (e) =>{
  let colorinit = hexToRgb(e.target.value)
  colors = Object.values(colorinit).join(', ')
  let colores = `rgba(${colors}, ${opaci})`
  square.style.background = colores
  text.innerHTML = `<p class="textContent">
background: rgba(${colors}, ${opaci});
<br>
backdrop-Filter: ${opaci};
<br>
backdrop-Filter: ${blurr};
<br>
width: ${sizes};
<br>
height: ${sizes};
<br>
border-radius: ${radios};
</p>`
});



size.addEventListener('mousedown', (e) => {
    e.target.nextElementSibling.style.visibility = "visible";
  });

  size.addEventListener('mouseup', (e) => {
    e.target.nextElementSibling.style.visibility = "visible";
  });

size.addEventListener("input", (e) =>{
    sizes = `${e.target.value}px`;
    square.style.width = sizes;
    square.style.height = sizes;

    e.target.nextElementSibling.textContent = sizes
    text.innerHTML = `<p class="textContent">
background: rgba(${colors}, ${opaci});
<br>
backdrop-Filter: ${opaci};
<br>
backdrop-Filter: ${blurr};
<br>
width: ${sizes};
<br>
height: ${sizes};
<br>
border-radius: ${radios};
</p>`
});

radio.addEventListener('mousedown', (e) => {
    e.target.nextElementSibling.style.visibility = "visible";
  });

  radio.addEventListener('mouseup', (e) => {
    e.target.nextElementSibling.style.visibility = "visible";
  });

radio.addEventListener("input", (e) =>{
    radios = `${e.target.value}%`;
    square.style.borderRadius = radios

    e.target.nextElementSibling.textContent = radios
    text.innerHTML = `<p class="textContent">
background: rgba(${colors}, ${opaci});
<br>
backdrop-Filter: ${opaci};
<br>
backdrop-Filter: ${blurr};
<br>
width: ${sizes};
<br>
height: ${sizes};
<br>
border-radius: ${radios};
</p>`
}); 

document.querySelector("#copy").onclick = function() {
  var text = document.querySelector("#content").textContent;

  navigator.clipboard.writeText(text)
  .then(() => {
      
      console.log('Text copied to clipboard');
      alert("Copiado!");
  })
    .catch(err => {
      console.error('Error in copying text: ', err);
  });
  
}