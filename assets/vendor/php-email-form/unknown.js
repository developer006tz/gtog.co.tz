$("#contactForm").submit(function(event) {
    event.preventDefault();
    submitForm();
});

function submitForm() {
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();


    $.ajax({
        type: "POST",
        url: "forms/contact.php",
        data: "name=" + name + "&email=" + email + "&subject" + subject + "&message" + message,
        success: function(text) {
            if (text == "success") {
                formSuccess();
            }
        }
    });
}

function formSuccess(){
    $("#msgSubmit").removeClass("hidden");
}