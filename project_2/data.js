AOS.init();

// const url = 'https://rickandmortyapi.com/api/character'
const main = document.getElementById('ruta')
const ruta = document.documentElement;
const btn = document.getElementById('btn')
let estado = false

const prev = document.getElementById('prev')
const next = document.getElementById('next')
let pagenumber = 1

const input_b = document.getElementById('input_buscar')
const btn_b = document.getElementById('btn_buscar')

btn_b.addEventListener('click', () => {
  console.log('object')
  console.log(input_b.value)
  const buscaar = input_b.value
  console.log(buscaar, 'helo')
  GetInfo(pagenumber, buscaar)
})

btn.addEventListener('click', () => {
  if (estado) {
    console.log('white')
    ruta.style.setProperty('--bg-body', '#000');
    ruta.style.setProperty('--color-text', '#fff')
    estado = false;
  } else {
    console.log('black')
    ruta.style.setProperty('--bg-body', '#fff');
    ruta.style.setProperty('--color-text', '#000')
    estado = true;
  }
})

function GetInfo(pagenumber, buscaar) {
  console.log(buscaar)
  const url = `https://rickandmortyapi.com/api/character/?page=${pagenumber}`
  fetch(url)
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(pagenumber, 'ke')
      console.log(data)
      const info = data.results
      console.log(info);
      if (input_b.value !== '') {
        console.log(input_b.value)
        ShowData(info, buscaar);
      } else {
        ShowData(info, buscaar = '');
      }
    })

    .catch(err => {
      console.log(err)
    });
}


const   ShowData = (info, buscaar) => {
  console.log(buscaar)
  console.log(info)
  if (buscaar) {
    main.innerHTML = '';
    const filtro = info.filter(info => info.name.toLowerCase().includes(buscaar.toLowerCase()))
    console.log(filtro)
    filtro.map(element => {
      main.innerHTML += `
      <div class="tarjeta"
                    <p>${element.name}</p>
                    <div class="card" >
                            <div class="pic_card">
                              <img src="${element.image}"/>
                            </div>
                            <div class="info_card">
                <h5>Gender:  ${element.gender}</h5>
                <h5>Specie: ${element.species}</h5>
                <h5>Status: ${element.status}
                ${(element.status == 'Alive') ? "<i class='bx bxs-circle' style='color: green;'></i>" :
          (element.status == 'Dead') ? "<i class='bx bxs-circle' style='color: red;'></i>" :
            "<i class='bx bxs-circle' style='color: gray;'></i></h5>"
        }
          </div>`;
    });
  } else {
    main.innerHTML = '';
    info.map(element => {
      main.innerHTML += `
      <div class="tarjeta"
      <p>${element.name}</p>
      <div class="card" >
              <div class="pic_card">
                <img src="${element.image}"/>
              </div>          
              <div class="info_card">
                <h5>Gender:  ${element.gender}</h5>
                <h5>Specie: ${element.species}</h5>
                <h5>Status: ${element.status}
                ${(element.status == 'Alive') ? "<i class='bx bxs-circle' style='color: green;'></i>" :
          (element.status == 'Dead') ? "<i class='bx bxs-circle' style='color: red;'></i>" :
            "<i class='bx bxs-circle' style='color: gray;'></i></h5>"
        }
          </div>
      </div>`;
    });
  }
}

const FilterInfo = (NewData) => {
  let filt = NewData.results
  console.log(filt)
}

prev.addEventListener('click', () => {
  pagenumber--;
  GetInfo(pagenumber)
  searchCh.scrollIntoView({ behavior: 'smooth' });
});

next.addEventListener('click', () => {
  pagenumber++;
  GetInfo(pagenumber)
  searchCh.scrollIntoView({ behavior: 'smooth' });
});

GetInfo(pagenumber, buscaar = '')