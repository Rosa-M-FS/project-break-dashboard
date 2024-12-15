const linkName=document.getElementById("link-name");
const linkurl=document.getElementById("link-url");
const btnlink=document.getElementById("btnlink")
const divList=document.getElementById("link-list");

const saveLink =(links)=>{
    localStorage.setItem("links",JSON.stringify(links));
}

const getLink=()=>{
    return JSON.parse(localStorage.getItem("links") || "[]");
}
const listLinks = ()=>{
    divList.innerHTML="";
    const links = getLink();
    links.forEach((link,element) => {
        const li=document.createElement("li");

        const name=document.createElement("p")
        name.textContent=link.name;

        const url=document.createElement("a");
        url.href=link.url;
        url.textContent=`(${link.url})`
        url.target="-blank";

        const btnDelete=document.createElement("button");
        btnDelete.textContent="x";
        btnDelete.className="btnDelete";
        btnDelete.addEventListener("click",()=>{
            removeLink(element);
        })
        li.appendChild(name);
        li.appendChild(url);
        li.appendChild(btnDelete);

        divList.appendChild(li);

    });
}

const removeLink =(element)=>{
    const links =getLink();
    links.splice(element, 1);
    saveLink(links);
    listLinks();
}

const addLink=()=>{
    const name = linkName.value.trim();
    const url = linkurl.value.trim();

    if (name && url) {
        const links = getLink();
        links.push({ name, url });
        saveLink(links);
        listLinks();

        // Limpiar los inputs
        linkName.value = '';
        linkurl.value = '';
    } else {
        alert('Por favor, rellena ambos campos correctamente.');
    }
}
btnlink.addEventListener('click', addLink);

// Renderizar los links al cargar la página
document.addEventListener('DOMContentLoaded', listLinks);

const handleKeyPress = (event) => {
    if (event.key === "Enter") {
        addLink();
    }
}


linkName.addEventListener('keydown', handleKeyPress);
linkurl.addEventListener('keydown', handleKeyPress);