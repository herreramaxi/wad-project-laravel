$(document).on('click', '#mediumButton', function(event) {
    event.preventDefault();
    let href = $(this).attr('data-attr');
    $.ajax({
        url: href,
        beforeSend: function() {
            //TODO: Add loader
            $('#loader').show();
        },
        // return the result
        success: function(result) {
            $('#mediumModal').modal("show");
            $('#mediumBody').html(result).show();
        },
        complete: function() {
            $('#loader').hide();
        },
        error: function(xhr, status, error) {

            if (status == 404) {
                console.log(error);
                alert("Product not found");
            } else {
                alert("Error when trying to load the product");
            }
            //   alert("Page " + href + " cannot open. Error:" + error);

            $('#loader').hide();
        },
        // timeout: 8000
    })
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#previewImage').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$(document).on('change', '#inputFileId', function(event) {
    readURL(this);
});