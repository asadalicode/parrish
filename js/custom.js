$(document).ready(function () {

    $("#btn_submit").click(function () {
        let isFormValid = $('#name').val() !== '' && $('#inputEmail4').val() !== '' && $('#company_name').val() !== '' && $('#exampleFormControlTextarea1').val() !== '' && $('#customFile')[0].files.length > 0;
        if (isFormValid) {
            let formData = new FormData();
            formData.append('Name', $('#name').val());
            formData.append('Email', $('#inputEmail4').val());
            formData.append('CompanyName', $('#company_name').val());
            formData.append('Message', $('#exampleFormControlTextarea1').val());
            formData.append('Resume', $('#customFile')[0].files[0], $('#customFile')[0].files[0].name);

            let headers = {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            }
            let settings = {
                "url": "https://salty-savannah-17936.herokuapp.com/api/Contact/contactUser",
                "method": "POST",
                "timeout": 0,
                "processData": false,
                "mimeType": "multipart/form-data",
                "contentType": false,
                "Headers": headers,
                "data": formData
            };

            $.ajax(settings).done(function (response) {
                var messageAlert = "alert-primary";
                var messageText =
                  "Your message was sent, thank you. We will get back to you soon.";
          
                var alertBox =
                  '<div class="alert ' +
                  messageAlert +
                  ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
                  messageText +
                  "</div>";
          
                if (messageAlert && messageText) {
                  $("#messagebox").find(".messages").html(alertBox);
                  $("#messagebox2").find(".messages").html(alertBox);
                  // form.classList.remove("was-validated");
                  $('form :input').val('');
                  
                 setTimeout(()=> {
                   $("#toast1").slideUp(2000);
                 },2500)
                
                }
                // alert(JSON.parse(response).message);
            });
        } else {
            alert("All Fields are Required");
            
        }
    });

    $("#btn_submits").click(function () {
      let isFormValid = $('#name1').val() !== '' && $('#inputEmail1').val() !== '' && $('#company_name1').val() !== '' && $('#Textarea1').val() !== '' && $('#customFile1')[0].files.length > 0;
      if (isFormValid) {
          let formData = new FormData();
          formData.append('Name', $('#name1').val());
          formData.append('Email', $('#inputEmail1').val());
          formData.append('CompanyName', $('#company_name1').val());
          formData.append('Message', $('#Textarea1').val());
          formData.append('Resume', $('#customFile1')[0].files[0], $('#customFile1')[0].files[0].name);

          let headers = {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "*"
          }
          let settings = {
              "url": "https://salty-savannah-17936.herokuapp.com/api/Contact/contactUser",
              "method": "POST",
              "timeout": 0,
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "Headers": headers,
              "data": formData
          };

          $.ajax(settings).done(function (response) {
              var messageAlert = "alert-primary";
              var messageText =
                "Your message was sent, thank you. We will get back to you soon.";
        
              var alertBox =
                '<div class="alert ' +
                messageAlert +
                ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
                messageText +
                "</div>";
        
              if (messageAlert && messageText) {
                $("#messagebox2").find(".messages").html(alertBox);
                // form.classList.remove("was-validated");
                $('form :input').val('');
                
               setTimeout(()=> {
                 $("#toast").slideUp(2000);
               },2500)
              
              }
              // alert(JSON.parse(response).message);
          });
      } else {
          alert("All Fields are Required");
          
      }
  });
});


// $(".apply").click(function () {
//     $("html,body").animate(
//       {
//         scrollTop: $(".contact").offset().top,
//       },
//       "slow"
//     );
//   });

$("#applybutton").click(function() {
  // $('html,body').animate({
  //     scrollBottom: $("#resume").offset().bottom},
  //     'slow');
      // $("html,body").animate({ scrollTop: $('#resume').height()}, 1000);
});

window.onload=function () {
  var objDiv = document.getElementById("resume");
  objDiv.scrollTop = objDiv.scrollHeight;
}
  $(document).ready(function () {
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .addClass("fa-minus")
        .removeClass("fa-plus");
    });
  
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse")
      .on("show.bs.collapse", function () {
        $(this)
          .prev(".card-header")
          .find(".fa")
          .removeClass("fa-plus")
          .addClass("fa-minus");
      })
      .on("hide.bs.collapse", function () {
        $(this)
          .prev(".card-header")
          .find(".fa")
          .removeClass("fa-minus")
          .addClass("fa-plus");
      });
  });

