window.onload = function() {
    let team = document.getElementsByClassName('team-member');
    console.log(team[0].children);
    for (let i=0; i < team.length; i++){
        team[i].children[0].addEventListener("click",editTitle);
        for (let j=0; j < team[i].children.length; j++){
            let memberElem = team[i].children[j];
            memberElem.addEventListener("mouseover", effectOn);
            team[i].addEventListener("mouseout", effectOff);
        }
    }
    // Lyssna efter händelser
    
}
var editTitle = function(e) {
    // Ändra "team-title"
   // alert("hej");
    console.log(this);
    // prompt for new title
    //updatre child using inner html
    let feed = prompt("Please enter desired work title: ")
    this.getElementsByClassName("team-title").innerHTML = feed;
   


};

function effectOn(id){
    // Rita en ram runt personen, kanske lite drop shadow?
    console.log("triggered");
    console.log(id);
    id.target.parentElement.classList.add("hovering");
}

function effectOff(id){
    // Stäng av effekten när musen inte längre är ovanför personen
    
    id.target.parentElement.classList.remove("hovering");
}
