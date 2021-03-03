  
  $(document).ready(function() {
    var clock = document.getElementById("clock");   //id of canvas
    var ctx = clock.getContext('2d');
  
    function degToRad(degree) {
      var factor = Math.PI/180;
      return degree*factor;
    }
  
    function renderTime() {
      
      var now = new Date();
      var today = now.toDateString();
      var time = now.toLocaleTimeString();
      var hours = now.getHours()-12;
      var minutes = now.getMinutes();
      var seconds = now.getSeconds();
      var milli = now.getMilliseconds();
      var newSeconds = seconds + (milli/1000);
      
      
      console.log(hours);
      // background
      gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 200);
      gradient.addColorStop(0, 'red');
      gradient.addColorStop(1, 'black');
      ctx.fillStyle = gradient;
//      ctx.fillStyle = '#333333';
      ctx.fillRect(0,0,500,500);
      
      
      // hours
      
      ctx.lineWidth = 15;
      ctx.lineCap = 'round';
      ctx.shadowBlur = 15;
      ctx.shadowColor = 'red';
      gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 180);
      gradient.addColorStop(0, 'blue');
      gradient.addColorStop(1, 'black');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(250,  250,  150, degToRad(270), degToRad((newSeconds*6)-90));
      ctx.lineTo(250,250);
      ctx.fill();
      
      // minutes
      ctx.shadowColor = 'blue';
      gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 160);
      gradient.addColorStop(0, 'green');
      gradient.addColorStop(1, 'black');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(250,  250,  120, degToRad(270), degToRad((minutes*6)-90));
      ctx.lineTo(250,250);
      ctx.fill();
      
      // seconds
       ctx.lineWidth = 15;
      ctx.lineCap = 'round';
      ctx.shadowBlur = 15;
      ctx.shadowColor = 'green';
      gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 150);
      gradient.addColorStop(0, 'orange');
      gradient.addColorStop(1, 'black');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(250,  250,  90, degToRad(270), degToRad((hours*30)-90));
      ctx.lineTo(250,250)
      ctx.fill();
      
      
      // Date
      
      ctx.font = '20px Arial';
      ctx.fillStyle = 'pink';
      ctx.fillText(today, 175, 250);
      
      
      // time
      ctx.font = '25px Arial';
      ctx.fillText(time, 200, 280);
    
      //var dataURL = clock.toDataURL();
      
      //document.getElementById('myImage').src = dataURL;
    }
    
  setInterval(renderTime, 40);
      
  renderTime();
  });
 

