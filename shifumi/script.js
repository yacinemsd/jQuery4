

$("#button").click(function(){
  var choice = $("input[name=choice]:checked").val();
  var computerChoice = Math.floor(Math.random() * 2);

  if(computerChoice === 0 ){
    computerChoice = "pierre";
  }else if(computerChoice === 1){
    computerChoice = "feuille";
  }else{
    computerChoice = "ciseaux";
  }

  if(computerChoice =="pierre"){ //1ère condition
    if (choice == "pierre"){
      $("#text").text("pierre vs pierre => égalité ");
    }
    if (choice == "feuille"){
      $("#text").text("feuille vs pierre => gagné!");
    }
    if (choice == "ciseaux"){
       $("#text").text("ciseaux vs pierre => perdu");
    }
  }

  if(computerChoice =="feuille"){ //2ème condition
    if (choice == "pierre"){
      $("#text").text("pierre vs feuille => perdu");
    }
    if (choice == "feuille"){
      $("#text").text("feuille vs feuille => égalité");
    }
    if (choice == "ciseaux"){
       $("#text").text("ciseaux vs feuille => gagné!");
    }
  }

  if(computerChoice =="ciseaux"){ // 3ème condition
    if (choice == "pierre"){
      $("#text").text("pierre vs ciseaux => gagné!");
    }
    if (choice == "feuille"){
      $("#text").text("feuille vs ciseaux => perdu");
    }
    if (choice == "ciseaux"){
       $("#text").text("ciseaux vs ciseaux => égalité");
    }
  }

});
