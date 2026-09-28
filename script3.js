const text = document.getElementById('wow')
const image = document.getElementById('troll')
const page = document.getElementById('body')
const modal = document.getElementById("modal");
const title = document.getElementById("modal-title");
const textM = document.getElementById("modal-text");
const imagM = document.getElementById("modal-Image");
const video = document.getElementById("modal-video");

const delay = ms => new Promise(res => setTimeout(res, ms));
setTimeout(() => {
    AOS.init();
}, 4000);

const funcP = async () => {
  await delay(2000)
  console.log("test")
  page.style.overflow = "scroll"
  text.innerHTML="Maintenant je te présente le cimetière des idées non-retenues !"
  image.src="pierre.jpg"
};

funcP()

document.getElementById("end").addEventListener("click",  () => {

  window.location.href = "date.html"


});

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

document.getElementById("closeModal").addEventListener("click", () => {
    modal.classList.add("hidden");
    
    document.body.className = ""
});
