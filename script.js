window.onload = function() {
    setInterval(function() {
      // Seconds
      let seconds = new Date().getSeconds();
      document.getElementById("seconds").innerHTML = (seconds < 10 ? '0' : '') + seconds;
  
    let colors = ['Crimson','pink','coral','orange','CornflowerBlue','DarkViolet'];
    (function changeColor(){
      document.body.style.backgroundColor = colors[seconds++%colors.length];
    })();

    
      // Minutes
      let minutes = new Date().getMinutes();
      document.getElementById("minutes").innerHTML = (minutes < 10 ? '0' : '') + minutes;
  
      // Hours
      let hours = new Date().getHours();
      document.getElementById("hours").innerHTML = (hours < 10 ? '0' : '') + hours;
    });
  };



