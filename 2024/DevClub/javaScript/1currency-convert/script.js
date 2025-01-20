// map convert button
const convertButton = document.querySelector('.convert-button')
// map currency select
const currencySelect = document.querySelector('.currency-select')


async function convertValues (){
    // get input value user
    const inputCurrrencyValue = document.querySelector('.input-currency').value
    //value to convert - real value in html
    const valueToConvert = document.querySelector('.value-to-convert')
    const valueConverted = document.querySelector('.value-converted')


   const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(res => res.json());
    console.log(data);

    const dolarToday = data.USDBRL.high;
    const euroToday = data.EURBRL.high;
    const bitcoinToday = data.BTCBRL.high;
    const libraToday = data.GBPBRL.high;


        /*
        console.log(currencySelect.value)
        const dolarToday = 6.04
        const euroToday = 6.29
        const libraToday = 7.63
        const bitcoinToday = 611132
        */

    // dolar calc
    // const convertedValue = inputCurrrencyValue / dolarToday
    //console.log(convertedValue)

    if(currencySelect.value == 'dolar'){
        // not formated - chang valu dolar in html
        // valueConverted.innerHTML = convertedValue // the calc dolar
        valueConverted.innerHTML = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD'
    }).format(inputCurrrencyValue / dolarToday)
    }


    if(currencySelect.value == 'euro'){
        valueConverted.innerHTML = new Intl.NumberFormat('de-DE',{
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrrencyValue / euroToday)
    }
    // libra currency
    if(currencySelect.value == 'libra'){
        valueConverted.innerHTML = new Intl.NumberFormat('en-GB',{
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrrencyValue / libraToday)
    }
    //bitcoin currency
    if(currencySelect.value == 'bitcoin'){
        valueConverted.innerHTML = new Intl.NumberFormat('de-DE',{
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrrencyValue / bitcoinToday)
    }


    // change real value for input-user in html
    // valueToConvert.innerHTML = inputCurrrencyValue //not fortamted 
    
    // Intl tools for fortmat numebrs - formated real currency
    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrrencyValue)

    
}

// get nao precisa de . ou # so no querySelect
function changeCurrency (){
    //map name currency on section
    const currencyName = document.getElementById('currency-name')
    // map img currency on section
    const currencyImage = document.querySelector('.currency-img')

    if (currencySelect.value == 'dolar'){
        //alterando html valor convertido na section
        currencyName.innerHTML = 'Dólar Americano'
        currencyImage.src = './assets/usa_flag.png'
    }

    if (currencySelect.value == 'euro'){
        //alterando html valor convertido na section
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro_flag.png'
    }
    //libra
    if (currencySelect.value == 'libra'){
        //alterando html valor convertido na section
        currencyName.innerHTML = 'Libra'
        currencyImage.src = './assets/libra_flag.png'
    }
    //bitcoin
    if (currencySelect.value == 'bitcoin'){
        //alterando html valor convertido na section
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = './assets/bitcoin_flag.png'
    }

    //for change converted value when change select currency
    convertValues()
}


// EventListener
//change selec, change flag-img on section
currencySelect.addEventListener('change', changeCurrency)

// EventListener
convertButton.addEventListener('click', convertValues)