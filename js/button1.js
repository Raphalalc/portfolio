
function jour(){
    var body = document.body;
    body.style.backgroundColor="#f0e7db";
    body.style.color="black";
    
    document.getElementById('navigation').classList.remove('navigationnuit');
    document.getElementById('navigation').classList.add('navigationjour');
    var navigation= document.getElementById("n1");
    navigation.style.color="black";
    var navigation2= document.getElementById("n2");
    navigation2.style.color="black";
    var navigation3= document.getElementById("n3");
    navigation3.style.color="black";
    var navigation4= document.getElementById("n4");
    navigation4.style.color="black";
    
    var trait = document.getElementById("trait");
    trait.style.backgroundColor= "black";
    
    var img =document.getElementById('imgh');
    img.style.border="solid black";
    var mecontact = document.getElementById('mecontact');
    mecontact.style.border="solid black";
    var mecontacter = document.getElementById('mecontacter');
    mecontacter.style.color="black";
    var developpement = document.getElementById('developpement');
    developpement.style.color="white";
    var developpement = document.getElementById('infographie');
    infographie.style.color="white";
    var foot = document.getElementById("f1");
    foot.style.color="black";
    var foot2 = document.getElementById("f2");
    foot2.style.color="black";
  

 
    document.getElementById('buttonsun').classList.remove('apparaitre');
    document.getElementById('buttonsun').classList.add('disparaitre');
    document.getElementById('buttonmoon').classList.add('apparaitre');
    document.getElementById("buttonmoon").style.visibility = "visible";
   

      }

    function nuit(){
        var body = document.body;
        body.style.backgroundColor="#202023";
        body.style.color="white";
        
        document.getElementById('navigation').classList.remove('navigationjour');
        document.getElementById('navigation').classList.add('navigationnuit');
        var navigation= document.getElementById("n1");
        navigation.style.color="white";
        var navigation2= document.getElementById("n2");
        navigation2.style.color="white";
        var navigation3= document.getElementById("n3");
        navigation3.style.color="white";
        var navigation4= document.getElementById("n4");
        navigation4.style.color="white";
        
        var img =document.getElementById('imgh');
    img.style.border="solid white";
    var mecontact = document.getElementById('mecontact');
    mecontact.style.border="solid white";
    var mecontacter = document.getElementById('mecontacter');
    mecontacter.style.color="white ";
        var trait = document.getElementById("trait");
        trait.style.backgroundColor= "white";
        
        
        var foot = document.getElementById("f1");
        foot.style.color="white";
        var foot2 = document.getElementById("f2");
        foot2.style.color="white";
        var foot3 = document.getElementById("f3");
        foot3.style.color="white";

        document.getElementById('buttonmoon').classList.remove('apparaitre');
        
        document.getElementById('buttonmoon').classList.add('disparaitre');
        document.getElementById('buttonsun').classList.add('apparaitre');
/* 
        document.getElementById('buttonmoon').classList.remove('apparaitre');
        document.getElementById('buttonmoon').classList.add('disparaitre');
        document.getElementById('buttonsun').classList.add('apparaitre'); */
    }
