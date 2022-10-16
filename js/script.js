const ratings = {
    skill1 : 4.5,
    skill2 : 4.0,
    skill3 : 3.,
    skill4 : 3.8,
    skill5 : 4.2
  }; 
  const starTotal = 5;
  var list = document.querySelectorAll('.listStar');
for(const rating in ratings) {  
  // 2
  const starPercentage = (ratings[rating] / starTotal) * 100;
  // 3
  const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
  // 4
  document.querySelector(`.${rating} .listStar`).style.width = starPercentageRounded; 

}

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
        labels:["HMTL", "CSS", "SASS", "JS", "JQuery"],
        datasets:[{
            label: 'Compétences',
            data:[95,80,60,85,90],
            backgroundColor:["#b1eaff"]
        }]
    }
})

document.addEventListener('onmouseover', function (e) {

    element.nextElementSibling.style.left =
        (e.pageX + element.nextElementSibling.clientWidth + 10 < document.body.clientWidth)
            ? (e.pageX + 10 + "px")
            : (document.body.clientWidth + 5 - element.nextElementSibling.clientWidth + "px");
    element.nextElementSibling.style.top =
        (e.pageY + element.nextElementSibling.clientHeight + 10 < document.body.clientHeight)
            ? (e.pageY + 10 + "px")
            : (document.body.clientHeight + 5 - element.nextElementSibling.clientHeight + "px");
});



   
    


