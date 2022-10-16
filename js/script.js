

function afficher(id) {
    var details = document.getElementsByClassName('details');
    var cible = document.getElementById(id);

    for (i = 0; i < details.length; i++) {
        details[i].style.display = "none";
    }
    cible.style.display = 'block';
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
const starTotal = 5;
const ratings = {
    skill1 : 2.8,
    skill2 : 3.3,
    skill3 : 1.9,
    skill4 : 4.3,
    skill5 : 4.74
  }; 
for(const rating in ratings) {  
  // 2
  const starPercentage = (ratings[rating] / starTotal) * 100;
  // 3
  const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
  // 4
  document.querySelector(`.${rating}.listStar`).style.width = starPercentageRounded; 
}

   
    


