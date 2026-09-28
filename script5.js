const text = document.getElementById('wow')
const image = document.getElementById('troll')
const page = document.getElementById('body')


const delay = ms => new Promise(res => setTimeout(res, ms));
setTimeout(() => {
    AOS.init();
}, 4000);

const funcP = async () => {
  await delay(2000)
  console.log("test")
  
  text.innerHTML="Je te saurais gré de renseigner une date qui te convient :)"
  image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTons9Q6MAYzn9CzengT6t5NLQaE1Z2O8p7S35n8W7a7kTsAZTKupY7w58&s=10"
  await delay(2000)
  page.style.overflow = "scroll"
};

funcP()

document.getElementById("choix").addEventListener("click", () => {
    
    if (window.confirm(`Tu confirmes que ton choix est : ${document.getElementById("start").value} ?`)) {
            console.log("ok");
            localStorage.setItem('date', `${document.getElementById("start").value}`);  
            
             window.location.href = "com.html"
            
        }
    
        
});

document.getElementById("ide").addEventListener("click", () => {
    
    if (window.confirm(`Tu confirmes que ca sera à déterminer plus tard ?`)) {
            console.log("ok");
            localStorage.setItem('date', `A déterminer`);  
            
            window.location.href = "com.html"
        }
    
        
});