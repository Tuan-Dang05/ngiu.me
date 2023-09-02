const yourDate = new Date("Aug 3, 2023 00:00:00");
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector("p").textContent = Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24 +1);

}, false);

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 100 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 2px solid #96ee1c}";
  document.body.appendChild(css);
};

function calculate_age(dob) { 
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms); 

 return Math.abs(age_dt.getUTCFullYear()-1970);
}

// document.write(calculate_age(new Date(2005, 11, 9))+"<br/>");
var duong = calculate_age(new Date(2005, 11, 9));
var tuan = calculate_age(new Date(2005, 5, 26));
var d = document.getElementById('thuy_duong');
var t = document.getElementById('tuan_dang');

d.innerHTML = duong;
t.innerHTML = tuan;



           window.onload = function() {
            // Month Day, Year Hour:Minute:Second, id-of-element-container
            countUpFromTime("Jun 31, 2022 00:00:00", 'countup1'); // ****** Change this line!
          };
          function countUpFromTime(countFrom, id) {
            countFrom = new Date(countFrom).getTime();
          
            var now = new Date(),
                countFrom = new Date(countFrom),
                timeDifference = (now - countFrom);
                
            var secondsInADay = 60 * 60 * 1000 * 24, // ( 1 ngày = 24 giờ * 60 phút * 60 giây * 1000ms) 86.400
                secondsInAHour = 60 * 60 * 1000;     // ( 1 giờ = 60 phút * 60 giây * 1000ms) 3600
            years = Math.floor(timeDifference / (secondsInADay * 365))
            months = Math.floor(timeDifference / (secondsInADay * 31)) //2592000s
            weeks = Math.floor(timeDifference  / (secondsInADay * 7)); 
            days = Math.floor(timeDifference / (secondsInADay) + 1);
            hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1); //24
            mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
            secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);
            if (months > 12) {
              months = Math.floor(timeDifference / (secondsInADay * 31)) - 12;
            } 
            if (weeks > 4){
              weeks = Math.floor(timeDifference / (secondsInADay * 7)) % 4;
            }
            if (days > 31){
              days = Math.floor(timeDifference / (secondsInADay) + 1)%31;
            }
       
            
            var idEl = document.getElementById(id);
            idEl.getElementsByClassName('years')[0].innerHTML = years;
            idEl.getElementsByClassName('months')[0].innerHTML = months;
            idEl.getElementsByClassName('weeks')[0].innerHTML = weeks;
            idEl.getElementsByClassName('days')[0].innerHTML = days;
            idEl.getElementsByClassName('hours')[0].innerHTML = hours;
            idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
            idEl.getElementsByClassName('seconds')[0].innerHTML = secs;
          
            clearTimeout(countUpFromTime.interval);
            countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
            
          }
          
          
          
 