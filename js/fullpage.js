
var myFullpage = new fullpage('#fullpage', {
  licenseKey: "B1D9FFF2-3CAB42B2-BC6DF7B0-59C13A34",
  anchors: ['home', 'about_us', 'capability_management', 'our_work','analytics','cloud_services','cyber_security','integrated_solutions','program_management','program_management2','contract_us'],
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

document.onreadystatechange = function () {
  var state = document.readyState;

  document.getElementById("fullpage").style.visibility = "hidden";
  if (state == "complete") {
    setTimeout(function () {
      document.getElementById("interactive");
      document.getElementById("fullpage").style.visibility = "";
      document.getElementById("load").style.visibility = "hidden";
    }, 500);
  }

  

  
};
