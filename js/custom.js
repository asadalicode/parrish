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
                "url": "http://salty-savannah-17936.herokuapp.com/api/Contact/contactUser",
                "method": "POST",
                "timeout": 0,
                "processData": false,
                "mimeType": "multipart/form-data",
                "contentType": false,
                "Headers": headers,
                "data": formData
            };

            $.ajax(settings).done(function (response) {
                alert(JSON.parse(response).message);
            });
        } else {
            alert("All Fields are Required");
        }
    });
});

