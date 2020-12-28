import { showSuccessMessage, showErrorMessage } from "./../alertMessages";
require("bootstrap-maxlength/dist/bootstrap-maxlength");

function readURL(input) {
    try {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $("#previewImage").attr("src", e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    } catch (ex) {
        showErrorMessage("Error when trying to preview selected image");
    }
}

$(document).on("change", "#inputFileId", function(event) {
    event.stopPropagation();
    readURL(this);
});

function ProcessSubmit(e, form, modalId, successMessage, errorMessage) {
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
            success: function(data) {
                $("#response").html(data);
                showSuccessMessage(successMessage);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
                console.log(errorThrown);
                showErrorMessage(errorMessage);
            },
            complete: function(jqXHR, textStatus) {
                $(modalId).modal("hide");
            }
        });
    }

    form.classList.add("was-validated");
}

$("#editModalForm").on("submit", function(e) {
    ProcessSubmit(
        e,
        this,
        "#editModal",
        "Product updated successfully",
        "Error when trying to update a product"
    );
});

$("#createModalForm").on("submit", function(e) {
    ProcessSubmit(
        e,
        this,
        "#createModal",
        "Product created successfully",
        "Error when trying to create a product"
    );
});

$("input[maxlength], textarea").maxlength({
    alwaysShow: true,
    warningClass: "form-text text-muted mt-1", 
    limitReachedClass: "form-text text-muted mt-1",
    placement: "bottom-right-inside" 
});
