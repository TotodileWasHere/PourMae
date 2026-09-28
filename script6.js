const text = document.getElementById('wow')

const page = document.getElementById('body')


const delay = ms => new Promise(res => setTimeout(res, ms));
setTimeout(() => {
    AOS.init();
}, 4000);

const funcP = async () => {
  await delay(2000)
  console.log("test")
  
  text.innerHTML="Si tu veux apporter des précisions ou rajouter des trucs tu peux le faire ici !"
 
  await delay(2000)
  page.style.overflow = "scroll"
};

funcP()

document.getElementById("choix").addEventListener("click", () => {
    
    if (window.confirm(`C'est ton commentaire ? : ${document.getElementById("start").value} ?`)) {
            console.log("ok");
            date = `${document.getElementById("start").value}`
           
             window.location.href = "fin.html"
        }
    
        
});

document.getElementById("ide").addEventListener("click", () => {
    
    localStorage.setItem('com', `Pas de commentaires`);
     window.location.href = "fin.html"
        
});