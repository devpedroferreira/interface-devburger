function genereteNumber(){
    // get input-min
    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)
    console.log("Min:",min," Max:",max)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    alert(result) //show result 
}

//genereteNumber()