const yourDate = new Date("Apr 24, 2022 00:00:00");
document.addEventListener('DOMContentLoaded', function(){
   conratulation = document.querySelector("p").textContent = Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24 );
    if (conratulation == 600){
      setTimeout(function() {
              location.href = './conratulation/conra.html';
      },1000);
  };
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
var duong = calculate_age(new Date(2004, 11, 9));
var tuan = calculate_age(new Date(2005, 5, 26));
var d = document.getElementById('thuy_duong');
var t = document.getElementById('tuan_dang');

d.innerHTML = duong;
t.innerHTML = tuan;
