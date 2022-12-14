// (function($) {
"use strict" // Start of use strict

$(onInit)

function onInit() {
  renderProjs()

}

function renderProjs() {
  const projs = getProjs()
  console.log('projs at render:', projs)
  var strHtmls = projs.map(proj => `
  <div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" ">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
    </a>
    <img class="img-fluid" src="img/portfolio/${proj.id}.jpg" onclick="onOpenModal('${proj.id}')">
    <div class="portfolio-caption">
    <h4>${proj.name}</h4>
    <p class="text-muted">${proj.title}</p>
    </div>
    </div>`
    //  console.log('id:',`img/portfolio/${proj.id}`)
  )
  // console.log('str:',strHtmls)
  // document.querySelector('.row portfolios').innerHTML(strHtmls.join(''))
  $('.portfolios').html(strHtmls)
  //  renderEvent
}
//  href="#portfolioModal"
//  function addProjEventListeners() {
//   $('.btn-remove').on('click', function () {
//       const carId = $(this).closest('.car-preview').data('carId')
//       onDeleteCar(carId)
//   })

function onOpenModal(projId) {
  console.log('hi from modal')
  renderModal(projId)
  $('.modal-container').addClass('open')
}

function renderModal(projId) {
  const proj = getProjById(projId)
  console.log('proj:', proj)

  const strHtml = `<h2>${proj.name}</h2>
  <p class="item-intro text-muted">${proj.title}</p>
 <img class="img-fluid d-block mx-auto" src="img/portfolio/${projId}.jpg" >
 <p>${proj.desc}</p>
<ul class="list-inline">
 <li>Date: ${new Date(proj.publishedAt)}</li>
 <li>Client: Coding Academy</li>
 <li>Category: Games</li>
 </ul>
  <div class="buttons-container"><a href="${proj.url}" target="_blank"><button class="btn btn-primary" data-dismiss="modal" type="button" >Check it Out </button></a>
<button class="btn btn-primary" data-dismiss="modal" type="button" onclick="onCloseModal()">
 <i class="fa fa-times"></i> Close Project</button></div>`


  $('.modal-container').html(strHtml)
  console.log('str at modal:', strHtml)

}

function onCloseModal(){
  $('.modal-container').removeClass('open')
}

function onSubmission(){
  console.log('hi:')
  $elUserEmail= $('.email').val()
  $elSobject= $('.subject').val()
  $elMessage= $('.message').val()
  console.log('email,sobject,message:',$elUserEmail,$elSobject,$elMessage)
}

// Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top - 54)
      }, 1000, "easeInOutExpo");
      return false;
    }
  }
});

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function () {
  $('.navbar-collapse').collapse('hide');
});

// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
  target: '#mainNav',
  offset: 54
});

// Collapse the navbar when page is scrolled
$(window).scroll(function () {
  if ($("#mainNav").offset().top > 100) {
    $("#mainNav").addClass("navbar-shrink");
  } else {
    $("#mainNav").removeClass("navbar-shrink");
  }
});

// })(jQuery); // End of use strict
