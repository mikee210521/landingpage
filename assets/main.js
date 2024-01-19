const API = 'https://dragonball-api.com/api/characters';

const content = document.getElementById("content");

const options ={
    method: 'GET',
    headers: {
        'content-type': 'application/json'
    }
};

async function fetchData(urlApi){
    const response = await fetch(urlApi,options);
    return await response.json();
}

(async ()=>{
    try {
        const characters = await fetchData(API);
        let view = `
    ${characters.items.map(characters => `
      <div class="group relative">
        <div
          class="w-17 overflow-hidden group-hover:opacity-75 lg:aspect-none cursor-pointer">
          <img src="${characters.image}" alt="${characters.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-4xl font-extrabold  inset-0 text-orange-600">
          ${characters.name} 
          </h3>
        </div>
      </div>
    `).slice(0, 10).join('')}
    `;
        content.innerHTML = view;
    }catch (e){
        console.log(e);

    }
})();