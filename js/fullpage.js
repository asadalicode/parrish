
var myFullpage = new fullpage('#fullpage', {
  licenseKey: "B1D9FFF2-3CAB42B2-BC6DF7B0-59C13A34",
  anchors: ['1stPage', '2ndPage', '3rdPage', '4thPage','5thPage','6thPage','7thPage','8thPage','9thPage','10thPage','11thPage'],
  menu: '#myMenu',
  sectionsColor: ['#f8f9fa', '#f8f9fa', '#f8f9fa'],
  scrollOverflow: true,
  fitToSection: true,
  easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
  paddingTop: '120px',
    paddingBottom: '10px',
  navigation: false,
  // loopTop: true,
  // loopBottom: true,
  afterLoad: function (origin, destination, direction) {
    //section 2
    if (destination.index == 1) {
      document.querySelector('#section1').querySelector('img').style.left = 0 + 'px';
      document.getElementById('#img1').style.left = 0 + 'px';
      document.getElementById('#img2').style.left = 0 + 'px';
      document.getElementById('#img3').style.left = 0 + 'px';
      document.getElementById('#img4').style.left = 0 + 'px';
      document.getElementById('#img5').style.left = 0 + 'px';

      // document.querySelector('#section2').querySelector('p').style.opacity = 1;
    }

    //back to original state
    else if (origin && origin.index == 1) {
      document.querySelector('#section1').querySelector('img').style.left = 130 + '%';
      document.getElementById('#img1').style.left = 130 + '%';
      document.getElementById('#img2').style.left = 130 + '%';
      document.getElementById('#img3').style.left = 130 + '%';
      document.getElementById('#img4').style.left = 130 + '%';
      document.getElementById('#img5').style.left = 130 + '%';
      // document.querySelector('#section2').querySelector('p').style.opacity = 0;
    }
  },

 
});
