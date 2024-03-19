sorokSzama=2
oszlopokSzama=2

function balKattintas(){
    lathatoak = document.getElementsByClassName('latszik')    
    if(lathatoak.length==0)
        idozito=setTimeout(() => {
            while(lathatoak[0]){
            lathatoak[0].style.backgroundImage="none"
            lathatoak[0].classList.remove('latszik')
            }
        }, 3000);

    if (lathatoak.length<=1){
        this.style.backgroundImage=`url("${this.dataset.kep}")`
        this.classList.add("latszik")
    }
    if (lathatoak.length==2)
        {
            if(lathatoak[0].dataset.kep===lathatoak[1].dataset.kep){
                 clearTimeout(idozito)
                 while(lathatoak[0]){
                    lathatoak[0].classList.add("kitalalt")
                    lathatoak[0].removeEventListener('click', balKattintas)
                    lathatoak[0].classList.remove('latszik')
            }
            if(document.getElementsByClassName('kitalalt').length==(sorokSzama*oszlopokSzama))
            {
                document.getElementsByTagName('h2')[0].
                innerHTML="Győztél! Új játék - F5!"
                //alert("Győztél! Új játék -F5!")
            }
        }
        
        clearTimeout(idozito)
        // Megvizsgálni, hogy kitalálta-e, ha igen szürküljön el, ne regalájon  akattintásra, kapjon egy kitalakt class-t
        // ha nem, csukjuk vissza
    }

} 


function cellatKeszit(){
    cella = document.createElement('div')
    cella.classList.add("cella")
    cella.addEventListener("click", balKattintas )
    cella.style.width=90/sorokSzama+"vh"
    cella.style.height=90/sorokSzama+"vh"
    return cella;
}

function palyaKeszit(){
    for (let i = 0; i < sorokSzama; i++) {
       sor = document.createElement("div")
       sor.className="sor"
       for (let j = 0; j < oszlopokSzama; j++) 
            sor.appendChild(cellatKeszit())        
       document.getElementById("palya").appendChild(sor)
    }


    for (let i = 1; i <= sorokSzama*oszlopokSzama/2; i++) {
      for (let j = 0; j < 2; j++) {  
        x=Math.floor(Math.random()*sorokSzama)
        y=Math.floor(Math.random()*oszlopokSzama)
        if ( !document.getElementById("palya").children[x].children[y].dataset.kep)
        {
            document.getElementById("palya").children[x].children[y].dataset.kep="./img/"+i+".png"
            // document.getElementById("palya").children[x].children[y].style.backgroundImage="url('./img/"+i+".png')"
        }
        else j--
    }  
    }
}
palyaKeszit()

// cella.className="cella"

// cella.setAttribute('cicamica',' Igor')
//cella.dataset.kep="./img/1.png"
//cella.style.backgroundImage='url("./img/2.png")'
// cella.onclick = 


katt = () => {
    console.log(this)
}