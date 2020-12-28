import { showSuccessMessage, showErrorMessage } from "./../alertMessages";
import { show, hide } from "./../spinner";

$("#contactForm").on("submit", function(e) {
    var form = this;

    if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
    } else {
        e.preventDefault();
        var formData = new FormData(form);
        var action = $(form).attr("action");

        $.ajax({
            url: action,
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            method: "POST",
            beforeSend: function() {
                show();
            },
            success: function(data) {
                showSuccessMessage(
                    "Your message has been sent, we will contact you as soon as possible. Many thanks!!!"
                );
            },
            error: function(jqXHR, textStatus, errorThrown ) {
                console.log(textStatus);
                console.log(errorThrown);
                console.log(jqXHR.responseText);
                showErrorMessage(
                    "Sorry, we were not able to send your message. Please try again."
                );
            },
            complete: function(jqXHR, textStatus, responseText) {
                $("#contactForm").removeClass("was-validated");
                $("#inputName").val("");
                $("#inputEmail").val("");
                $("#textAreaMessage").val("");

                hide();
            }
        });
    }

    form.classList.add("was-validated");
});
