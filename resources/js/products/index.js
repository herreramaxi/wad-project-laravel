$(document).on('click', '#editModalButton', function(event) {
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
            $('#editModal').modal("show");
            $('#editModalBody').html(result).show();
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

$(document).on('click', '#createModalButton', function(event) {
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
            $('#createModal').modal("show");
            $('#createModalBody').html(result).show();
        },
        complete: function() {
            $('#loader').hide();
        },
        error: function(xhr, status, error) {

            if (status == 404) {
                console.log(error);
                alert("View not found");
            } else {
                alert("Error when trying to load create view");
            }
            //   alert("Page " + href + " cannot open. Error:" + error);

            $('#loader').hide();
        },
        // timeout: 8000
    })
});