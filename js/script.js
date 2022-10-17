
function afficher(id) {
    var details = document.getElementsByClassName('details');
    var cible = document.getElementById(id);
    for (i = 0; i < details.length; i++) {
        details[i].style.display = "none";
    }
    cible.style.display = 'block';
    setInterval("afficher()", 5000);
    
}

//-----------exercice 2---------
function getMyToolTipFunction (id) {
    var toolpips = document.getElementsByClassName('displayText');
    var popup = document.getElementById(id);
    for (var i = 0; i < toolpips.length; i++) {
        toolpips[i].style.display = "none";
    }
    popup.style.display="block";
    setTimeout(getMyToolTipFunction,2000)
}

//-----------exercice 3---------
const barCanvas = document.getElementById("barCanvas");
const barChat= new Chart(barCanvas,{
    type:"bar",
    data:{
        labels:["Elasticsearch", "PowerBI", "Talend", "Docker", "Git"],
        datasets:[{
            label: 'Outils',
            data:[95,80,60,85,90],
            backgroundColor:["#b1eaff"]
        }]
    }
})





   
    


