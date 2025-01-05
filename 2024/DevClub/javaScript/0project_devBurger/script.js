// 1 map button
// 2 add event click
// 3 use arrow function conect to event click

//ul li items menu
let ulMenuItems = document.querySelector('.ul-menu-items'); // map ul in html

// button show all
const buttonShowAll = document.querySelector('.button-show-all'); // map button in html
// let liMenuItems = ' ' // moved to function FshowAll

// button map all
const buttonMapAll = document.querySelector('.button-map-all'); // map button in html

// button sum all
const buttonSumAll = document.querySelector('.button-sum-all'); // map button in html

// button filter all
const butttonFilterAll = document.querySelector('.button-filter-all'); // map button in html

function formatPrice(price) {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

}

// 1  challange forEach - complete 
function FshowAll (des10cArray){ // array chwgou com desconto
    let liMenuItems = ' '; // clear li, for not acumulate products in page
    // liMenuItems= liMenuItems +
    // liMenuItems += //add product to li , get actual value + new value
    des10cArray.forEach(product =>{ // forEach no novo array com desconto
    liMenuItems += `  
                 <li>
                     <img src=${product.src}> 
                     <p>${product.name}</p>
                     <p class="item-price">R$ ${formatPrice(product.price)}</p>
                 </li>
     `
    });
    ulMenuItems.innerHTML = liMenuItems; // add li to ul - show all products
}

// 2 challange map - complete
function FmapAll(){
    const descArray = menuItemsBurger.map((product) => ({
    ...product, // sprid operator - copia todos os valores do objeto 
        
    //price: (product.price * 0.9).toFixed(2), // desconto 10% desconto  
          //  name    :   product.name,
          price   :   (product.price - (product.price * (10 /100))).toFixed(2), // deconto 10% desconto
          //  vegan   :   product.vegan,
          //  src     :   product.src,
    }));

    FshowAll(descArray); // call function show all products - sent to FshowAll

}


// 3 challange reduce sum all products - complete
function FsumAll(){
    const sumAllitems = menuItemsBurger.reduce((acc, product) => acc + product.price, 0);
    ulMenuItems.innerHTML = `
    <li><p class="item-price">Soma de todos os itens = 
    R$ ${formatPrice(sumAllitems)}</p></li>`; // add li to ul - show sum all products  
};
// 4 challange filter - complete                            ------>>> GitHub:  github.com/devpedroferreira  <<<------
function FfilterAll() {
    const filterArray = menuItemsBurger.filter( (product) => product.vegan === true );
    FshowAll(filterArray); // call function show all products - sent to FshowAll
}
// button forEACH function clic event
// arrow function before he show when click in button
// sem a arrow functio ele mostra tudo ao abuir sem clicar no botão
buttonShowAll.addEventListener('click', () => FshowAll(menuItemsBurger)); // add click/event to button - show all products

// button map function click event
buttonMapAll.addEventListener('click', FmapAll); // add click/event to button - show all products

//button sum all function click event
buttonSumAll.addEventListener('click', FsumAll); // add click/event to button sum all products

// button filter 
butttonFilterAll.addEventListener('click', FfilterAll); // add click/event to button filter all products