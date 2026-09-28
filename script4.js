const text = document.getElementById('wow')

const page = document.getElementById('body')
const modal = document.getElementById("modal");
const title = document.getElementById("modal-sor");
const textD = document.getElementById("modal-date");
const textM = document.getElementById("modal-text");


const delay = ms => new Promise(res => setTimeout(res, ms));
setTimeout(() => {
    AOS.init();
}, 2000);

const funcP = async () => {
    page.style.overflow = "hidden"
    
   
    
  await delay(2000)
  text.innerHTML="wow, bon... je vais glisser 2-3 trucs que j'ai envie de rajouter alors :)"
   await delay(3500)
  text.innerHTML="et pas d'image, que du sérieux ^^"
  await delay(2000)
  
  text.innerHTML="Primo : merci :D"
   await delay(2000)
  text.innerHTML="Ca m'aura pris un peu de temps de faire tout ça !"
   await delay(3500)
  text.innerHTML="J'espère que ça aura permis de te décocher un sourire ou deux :)"
   await delay(4000)
  text.innerHTML="Deuxio : petites explications ^^"
  await delay(2500)
  text.innerHTML="Je sais que je peux avoir tendance à envoyer pas mal de messages,"
   await delay(3000)
  text.innerHTML="Ou encore à préparer quelques surprises comme ce site"
   await delay(3000)
  text.innerHTML="Tu t'es peut-être dit que c'était juste comme ça que j'étais..."
   await delay(3500)
  text.innerHTML="Mais en réalité non, c'est juste que c'est mon petit moyen à moi,"
  await delay(3000)
  text.innerHTML="Par le biais de petites interactions un peu spéciales"
   await delay(2500)
  text.innerHTML="De montrer que tu es une personne spéciale pour moi :)"
   await delay(4000)
  text.innerHTML="Si tu me demandais pourquoi, je suis pas sur que je pourrais fournir une réponse éxacte."
   await delay(5000)
  text.innerHTML="Juste je sais que avec toi je me sens bien"
  await delay(3000)
  text.innerHTML="C'est comme si on se comprenait ^^"
   await delay(3000)
  text.innerHTML="Et puis on va pas se mentir t'es vraiment une personne géniale !"

 await delay(4000)
  text.innerHTML="..."
  

  await delay(5000)
  text.innerHTML="Bon, on y est, la fin du voyage..."
   await delay(3000)
  text.innerHTML="Ecrire tout ça m'aura permis de me rappeler de cette phrase de Saint-Exupery :"
   await delay(5000)
  text.innerHTML="\"On ne voit bien qu'avec le cœur, l'essentiel est invisible pour les yeux\""
   await delay(5000)
  text.innerHTML="J'y trouve du réconfort en me disant que même si les yeux ne sont pas forcément assez pour recevoir ce que j'ai voulu transmettre."
  await delay(7500)
  text.innerHTML="Peut-être que le cœur, lui, aura trouvé un moyen d'y voir l'essentiel ? "
   await delay(7000)
  text.innerHTML=":)"
    await delay(4000)
    
   openModal()

  
};

funcP()
function openModal(){
    
    title.textContent = `Sortie : ${localStorage.getItem('act')}`;
    textD.textContent = `Date : ${localStorage.getItem('date')}`;
    textM.textContent = `Commentaire : ${localStorage.getItem('com')}`;
    
    modal.classList.remove("hidden");
    document.body.className = "no-scroll";
    
    
}
