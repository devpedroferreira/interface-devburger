// Adicionar 10% de valor de mercado em todas as companhias -> MAP
// Filtrar somente companhias fundadas abaixo de 1990 -> filter
// Somar o valor de mercado das restantes -> reduce
const companies = [
    {name:'Samsung',    marketValue:50,     ceo:'Kim Hyun Suk',     foundedOn:1938},
    {name:'Microsoft',  marketValue:415,    ceo:'Satya Nadella',    foundedOn:1975},
    {name:'Intel',      marketValue:117,    ceo:'Brian Krzanich',   foundedOn:1968},
    {name:'Facebook',   marketValue:383,    ceo:'Marck Zuckerberg', foundedOn:2004},
    {name:'Spotify',    marketValue:50,     ceo:'Daniel Ek',        foundedOn:2006},
    {name:'Apple',      marketValue:845,    ceo:'Tim Cook',         foundedOn:1976},
];

// normal
/*
const marketValueOldCompanies = companies.map( company => {
    company.marketValue = company.marketValue + (company.marketValue/10) // porcentagem = o valor do produto / pelo valor porcento
    return company
})
.filter( company => company.foundedOn < 1990) // plug filter
.reduce((acc, company) => acc + company.marketValue, 0) // company variavel local // acc count start ZERO - pluged on filter 
 
console.log(marketValueOldCompanies) 
*/

// RESUMIDO
// é uma function
const add10Percent = (company) => { // company no parentese é item por item do array original
    company.marketValue = company.marketValue + (company.marketValue/10) // valor do item /10 para porcentagem
    return company
}
// function
const filterCompanies = (company) => company.foundedOn < 1990
//function
const calcTotalMarket = (acc,company) => acc + company.marketValue

// my new array imcalled map filter reduce with function for each
const marketValueOld = companies
.map(add10Percent)
.filter(filterCompanies)
.reduce(calcTotalMarket, 0)
console.log(marketValueOld)
