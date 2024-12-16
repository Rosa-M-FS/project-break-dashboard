let basePath = "./";
if (window.location.pathname.includes("/subcarpeta/")) {
    basePath = "../";
}
const img = [
    `${basePath}img/img1.jpg`,
    `${basePath}img/img2.jpg`,
    `${basePath}img/img3.jpg`,
    `${basePath}img/img4.jpg`,
    `${basePath}img/img5.jpg`,
    `${basePath}img/img6.jpg`,
    `${basePath}img/img7.jpg`,
    `${basePath}img/img8.jpg`,
    `${basePath}img/img9.jpg`,
    `${basePath}img/img10.jpg`,
    `${basePath}img/img11.jpg`
];

/* const img = [
    "./img/img1.jpg","./img/img2.jpg","./img/img3.jpg","./img/img4.jpg","./img/img5.jpg","./img/img6.jpg",
    "./img/img7.jpg","./img/img8.jpg","./img/img9.jpg","./img/img10.jpg","./img/img11.jpg",
];
 */
let imgNum = 0;

// Función para cambiar la imagen de fondo
const changeImage = () => {
    
    document.body.style.backgroundImage =`url(${img[imgNum]})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat"; 
    document.body.style.backgroundAttachment = "fixed"; 
    
    imgNum = (imgNum + 1) % img.length; 
}


setInterval(changeImage, 15000);

window.onload = changeImage;