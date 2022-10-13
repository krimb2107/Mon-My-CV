

function afficher(id) {
    var details = document.getElementsByClassName('details');
    var cible = document.getElementById(id);
    // var Hfinal = 900;
    // var Hinitilae =0;
    // var time;

    for (i = 0; i < details.length; i++) {
        details[i].style.display = "none";
    }
    // Hinitilae+=20;
    // cible.style.height=Hinitilae+ 'px';

    // time = setTimeout(afficher,700)
    // cible.style.display = "block";
    var hauteur = null;
    var pos = 0;
    hauteur = setInterval(frame, 500);
    
    function frame() {
        pos++;
        cible.style.top = pos + 'px';
        cible.style.down = pos + 'px';
    }//cible.style.display = 'block';
   
    // window.setTimeout(slowShow(),500);
    // window.setTimeout(function(){
    //     cible.style.display = 'block';
    //     cible.style.maxHeight='15em';
    //     },500); 


}

function getMyToolTipFunction (id) {
    var toolpips = document.getElementsByClassName('displayText');
    var popup = document.getElementById(id);
    for (var i = 0; i < toolpips.length; i++) {
        toolpips[i].style.display = "none";
    }
    
    popup.style.display="block";

    
}



