//Funcion para poner el 0 delante de las horas y dias menores a 10
const zero = (element)=>{
    if (element<10){
        return `0${element}`;
    }else{
        return /* String */(element);
    }
}
//funcion obtener la hora y fecha 
const setTime =()=>{
    //Nueva hora y fecha
    const timeDate = new Date();
    console.log (timeDate);
    //Separar cada elemento dado por el método Date
    const hours=timeDate.getHours();
    const minutes=timeDate.getMinutes();
    const seconds=timeDate.getSeconds();
    const day=timeDate.getDate();
    const month=timeDate.getMonth()+1;
    const year=timeDate.getFullYear();
    //Juntar cada elemento por hora y fecha y mostrar
    const time=`${zero(hours)}:${zero(minutes)}:${zero(seconds)}`;
    const date=`${zero(day)}/${zero(month)}/${year}`;
    document.getElementById("time").textContent=time;
    document.getElementById("date").textContent=date;

    //Mensaje de texto en función de la hora que sea y mostrar
    let sms="";
    if(hours>0&& hours<=7){
        sms="Hora de dormir, apaga y a la cama \uD83D\uDCA4. Continua mañana con energías renovadas "
    }else if(hours>7&&hours <=12){
        sms="Buenos días \uD83C\uDF1E. Espero que hayas desayunado para darle fuerte al código de hoy \uD83D\uDCAA"
    }else if(hours>12&&hours<=14){
        sms="Hora de comer \uD83D\uDE0B!!. Si quieres trabaja otro rato pero no olvides comer algo"
    }else if (hours>14&&hours<=16){
        sms="¿Has comido?, Si no es así detente y echa gasolina a tu cerebro"
    }else if (hours>16&&hours<=18){
        sms="Se esta quedando buena tarde...dale un último empujón a tu código"
    }else if(hours>18&&hours<=22){
        sms="!Esto cuenta como horas EXTRAS!. Sé que estas enganchad@ pero sería mejor parar pronto"
    }else if(hours>22 || hours===0){
        sms="Buenas noches \uD83C\uDF19, hora de cenar y desconectar un rato"
    }else{
        sms="espero que tengas un gran dia "
    }

    document.getElementById("sms").textContent=sms;
}
setInterval(setTime,1000);//Actualizar la función cada segundo. Así se ve como avanza el reloj no es necesario recargar la página para que se actualice
setTime();//inicializar