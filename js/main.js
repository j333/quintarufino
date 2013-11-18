$(window).load(function() { // makes sure the whole site is loaded
  $("#status").fadeOut(); // will first fade out the loading animation
  $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
})

// Menú
$("#menu-close").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});
$('#openBtnCollapse').click(function(){
  $('#collapseOne').collapse('toggle')
});
$('#openBtn').click(function(){
  $('#myModal').modal({show:true})
});

//Desplazamiento
$(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
              || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
});

//Gallery
$(function(){
  // Initialize the gallery
  $('.thumbs a').touchTouch('toggle');
});

//Maps
window.onload = function () {
          var styles = [
              {
                featureType: 'landscape',
                elementType: 'all',
                stylers: [
                  { hue: '#D8EDEB' },
                  { saturation: 13 },
                  { lightness: 0 },
                  { visibility: 'on' }
                ]
              },{
                featureType: 'poi',
                elementType: 'all',
                stylers: [
                  { hue: '#F2DEA6' },
                  { saturation: 55 },
                  { lightness: 9 },
                  { visibility: 'on' }
                ]
              },{
                featureType: 'poi.park',
                  elementType: 'labels',
                  stylers: [
                    { visibility: 'off' }
                  ]
              },{
                featureType: 'poi.business',
                elementType: 'all',
                stylers: [
                  { hue: '#F2DEA6' },
                  { saturation: 55 },
                  { lightness: 9 },
                  { visibility: 'off' }
                ]
              },{
                featureType: 'administrative',
                elementType: 'all',
                stylers: [
                  { hue: '#906032' },
                  { saturation: 48 },
                  { lightness: -25 },
                  { visibility: 'on' }
                ]
              }
          ];

      var options = {
          mapTypeControlOptions: {
              mapTypeIds: ['Styled']
          },
          center: new google.maps.LatLng(-32.891768,-68.851967),
          zoom: 15,
          draggable: false,
          scrollwheel: false,
          disableDefaultUI: true,
          mapTypeId: 'Styled',
      };
      var div = document.getElementById('map-canvas');
      var map = new google.maps.Map(div, options);


      var companyLogo = new google.maps.MarkerImage('../img/map.png',
          new google.maps.Size(50,50),
          new google.maps.Point(0,0),
          new google.maps.Point(25,50)
      );
      var companyPos = new google.maps.LatLng(-32.891768,-68.851967);
      var companyMarker = new google.maps.Marker({
          position: companyPos,
          map: map,
          icon: companyLogo,
          title:"Quinta Rufino",
      });

      var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
      map.mapTypes.set('Styled', styledMapType);

};