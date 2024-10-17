// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 30,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
$(document).ready(function() {
  $('.send-email').on('click', function(e) {
      e.preventDefault(); // Prevent default form submission
      var name = jQuery('#exampleFormControlInput1').val();
      var email = jQuery('#exampleFormControlInput12').val();
      var mobileNumber = jQuery('#exampleFormControlInput3').val();
      var messages = jQuery('#exampleFormControlInput4').val();
      var message = `
      <ul>
      <li>Name : ${name}</li>
      <li>Mobile Number : ${mobileNumber} </li>
      <li>Email Id : ${email} </li>
      <li>Message : ${messages} </li>
      </ul>
      `
    var apiKey = "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";
    console.log(apiKey)
      var subject = 'This user is wanting to connect you';
      $.ajax({
          url: 'https://api.brevo.com/v3/smtp/email',
          type: 'POST',
          contentType: 'application/json',
          headers: {
              'accept': 'application/json',
              'api-key': "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" // Replace with your Brevo API key
          },
          data: JSON.stringify({
              sender: { email: 'sachinjangid033@gmail.com' }, // Replace with your sender email
              to: [{ email: 'sachinjangid033@gmail.com' }],
              subject: subject,
              htmlContent: `<html><body><p>${message}</p></body></html>`
          }),
          success: function(response) {
              $('#response').html('<p>Email sent successfully!</p>');
          },
          error: function(xhr, status, error) {
              $('#response').html('<p>Error sending email: ' + error + '</p>');
          }
      });
  });
});
