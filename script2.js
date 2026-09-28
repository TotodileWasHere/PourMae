const text = document.getElementById('wow')
const image = document.getElementById('troll')
const page = document.getElementById('body')
const modal = document.getElementById("modal");
const title = document.getElementById("modal-title");
const textM = document.getElementById("modal-text");
const imagM = document.getElementById("modal-Image");
const video = document.getElementById("modal-video");
var choixtemp = ""
var choix = ""

page.style.overflow = "hidden"
const delay = ms => new Promise(res => setTimeout(res, ms));
setTimeout(() => {
    AOS.init();
}, 4000);

const funcP = async () => {
  await delay(2000)
  console.log("test")
  page.style.overflow = "scroll"
  text.innerHTML="Bah fais ton shopping alors :D"
  image.src="https://media.tenor.com/eBGUp9AeCAMAAAAM/horse-flying.gif"
};

funcP()

function openModal(tit, te, ima, vid){
    choixtemp = tit;
    title.textContent = tit;
    textM.textContent = te;
    imagM.src = ima;
    modal.classList.remove("hidden");
    document.body.className = "no-scroll";
    if(vid != null){
        video.classList.remove("hidden");
        video.getElementsByTagName("source")[0].src = vid;
        video.load();
    }
    
}

function custom(){
    console.log("test")
    const custom = document.getElementById("name")
    choix = custom.value
    doaction = secondAction
    secondAction()
}

document.getElementById("closeModal").addEventListener("click", () => {
    modal.classList.add("hidden");
    
    document.body.className = ""
});

document.getElementById("chose").addEventListener("click", () => {
    choix = choixtemp
    
    modal.classList.add("hidden");
    
    document.body.className = ""
    secondAction()
    
        
});








function secondAction(){
     if (window.confirm(`Tu confirmes que ton choix est : ${choix} ?`)) {
            console.log("ok");
            localStorage.setItem('act', `${choix}`);  
            console.log(globalThis.act)
            window.location.href = "cimetiere.html"
        } else {
            console.log("nan");
        }
}




