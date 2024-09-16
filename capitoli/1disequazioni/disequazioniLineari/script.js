let esempio;

function generaEsempio(n) {

    esempio = document.getElementById(`esempio${n}`);
    document.location.href=`#esempio1`;

    if(n === 1) {

        let a = new Monomial(Math.floor(Math.random()*2), Math.floor(Math.random()*20 + 1), 1, [0,0,0,0,0,0]);
        let b = new Monomial(Math.floor(Math.random()*2), Math.floor(Math.random()*20 + 1), 1, [0,0,0,0,0,0]);

        let cambiaVersoText = ``;
        let diseguaglianzeArray = [`\\gt`, `\\lt`]
        let coin = Math.floor(Math.random()*2)
        let diseguaglianza = diseguaglianzeArray[coin];
        let diseguaglianzaInversa = diseguaglianzeArray[coin];

        if(a.sign === 1) {
            
            cambiaVersoText = 
            `<br>
            ⚠️ Dato che il numero per cui dividiamo è negativo il verso della diseguaglianza si <b>ribalta</b>`;

            diseguaglianzaInversa = diseguaglianzeArray[(coin + 1)%2]

        } 

        esempio.innerHTML = 
        `<div id="slide-container1">
        
            <div class="slide1">
                <div class="grayBorder">
                    Risolvere la disequazione
                    \\[
                        ${a.display()}x ${b.displayWithSign()} ${diseguaglianza} 0
                    \\]
                </div>
            
                <br>
                <b>Svolgimento</b>
                <br>
                Risolviamo la disequazione
                \\[
                    ${a.display()}x ${b.displayWithSign()} ${diseguaglianza} 0
                \\]
                Per prima cosa spostiamo \\(${b.displayWithSign()}\\) dall'altra parte del simbolo di disuguaglianza cambiandolo di segno
                \\[
                    ${a.display()}x ${diseguaglianza} ${opposite(b).display()}
                \\]
                Ora dividiamo entrambi i membri per \\(${a.display()}\\).
                ${cambiaVersoText}
                \\[
                    \\begin{align*}
                        \\dfrac{${a.display()}x}{${a.display()}} &${diseguaglianzaInversa} \\dfrac{${opposite(b).display()}}{${a.display()}}
                        \\\\\\\\
                        x &${diseguaglianzaInversa} ${simplify(division(opposite(b), a).display())}
                    \\end{align*}
                \\]
                <br>
                In conclusione la disequazione
                \\[
                    ${a.display()}x ${b.displayWithSign()} ${diseguaglianza} 0
                \\]
                ha come soluzioni tutti i valori di \\(x\\) tali che
                \\[
                    x ${diseguaglianzaInversa} ${simplify(division(opposite(b), a).display())}
                \\]
            </div>

        </div>
        
        
        

        
        `

        inizialize(1);
    }

    console.log(
        esempio.innerHTML);
        
    MathJax.typesetClear([esempio]);
    MathJax.typesetPromise([esempio]).then(() => {});

    

}

slideIndex = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function inizialize(n) {

    slideIndex[n] = 0

    let slide = document.getElementsByClassName(`slide${n}`)

    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none"
    }

    //rendo visibile la prima slide
    slide[0].style.display = "block"



}




