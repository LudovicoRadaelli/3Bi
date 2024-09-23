var ggbApp1 = new GGBApplet({
    "appName": "classic", 
    "id": "gg1",
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra-container",
    "filename": "img/disegnaPolinomio.ggb"
    }, true);

var ggbApp2 = new GGBApplet({
    "appName": "classic", 
    "id": "gg2",
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra-container",
    "filename": "img/polinomiSecondoGradoEParabola.ggb"}, true);

window.addEventListener("load", function() { 
    ggbApp1.inject('geogebra1');
    ggbApp2.inject('geogebra2');
});

function disegnaPunto() {
    if(document.getElementById("coordX").value === `` || document.getElementById("coordY").value === `` || document.getElementById("coordY").value != document.getElementById("coordX").value -1) {
        alert(`input errati`);
    } else {
        let x = document.getElementById("coordX").value;
        let y = document.getElementById("coordY").value;
        gg1.evalCommand(`(${x}, ${y})`);
    }

}

function disegnaPolinomio() {
    gg1.evalCommand(`y = x -1`);
}

