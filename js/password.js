btnGenerar=document.getElementById("btngenpassword");
divPassword=document.getElementById("password");
numInput=document.getElementById("numInput");

const passwordgen =(numLength)=> {
    const character="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
    let password="";

    for (let i = 0;i<numLength;i++ ){
        password+=character[Math.floor(Math.random()*character.length)];
    }
    console.log(password);
    
    //mezclar para añadir seguridad 
    const passwordArr=password.split("");//transforma en un array de caracteres
    for(let i=passwordArr.length-1; i>0;i--){
        const j = Math.floor(Math.random()*(i+1));
        [passwordArr[i],passwordArr[j]]=[passwordArr[j],passwordArr[i]];
    }
    console.log(passwordArr);
    password=passwordArr.join("");//hacer cadena
    console.log(password);
    return password;
}

btnGenerar.addEventListener("click",()=>{
    const numLength=parseInt(numInput.value);
    divPassword.textContent=passwordgen(numLength);
    
})



