// (function($) {
  "use strict" // Start of use strict

  $(onInit)

function onInit(){
  renderProjs()

}

 function renderProjs(){
  const projs= getProjs()
console.log('projs at render:',projs)
  var strHtmls= projs.map(proj=> `
  <div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" onclick="onOpenModal(${proj.id}">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="img/portfolio/${proj.id}.jpg">
    </a>
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

 function onOpenModal(projId){
  renderModal(projId)
  $('modal-container').show('slow')
 }

 function renderModal(projId){
 const proj =getProjById(projId)
 const strHtml= `<div class="portfolio-modal modal fade" id="portfolioModal" tabindex="-1" role="dialog" display="none">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${proj.name}</h2>
                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/${projId}.jpg" alt="">
                <p>${proj.desc}</p>
                  <ul class="list-inline">
                    <li>Date: ${new Date(proj.publishedAt)}</li>
                    <li>Client: Coding Academy</li>
                    <li>Category: Games</li>
                  </ul>
                  <button class="btn btn-primary" data-dismiss="modal" type="button" href="${proj.url}"> Check it Out </button>
                  <button class="btn btn-primary" data-dismiss="modal" type="button"></button>
                    <i class="fa fa-times"></i>
                    Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`

$('modal-container').html(strHtml)

 }

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
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
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

// })(jQuery); // End of use strict
