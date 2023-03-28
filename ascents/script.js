//contagem regressiva
{ 
    var countDownDate = new Date().getTime() + (20 * 60 * 1000); 
    
    var x = setInterval(function() {
      var now = new Date().getTime(); 
      var distance = countDownDate - now; 
    
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
      var seconds = Math.floor((distance % (1000 * 60)) / 1000); 
      

      document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
    
      // verifica se a contagem regressiva terminou
      if (distance < 0) {
        clearInterval(x); // limpa o intervalo do temporizador
        document.getElementById("timer").innerHTML = "EXPIRADO";
      }
    }, 1000); 
  }
  {
    setTimeout(function() {
      document.getElementById("myButton").style.display = "block";
  }, 197400); 
  }







