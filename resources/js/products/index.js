const spinner = require("./../spinner");

$(document).on("click", "#editModalButton", function(event) {
    event.preventDefault();
    let href = $(this).attr("data-attr");
    $.ajax({
        url: href,
        beforeSend: function() {
            spinner.show();
        },
        // return the result
        success: function(result) {
            $("#editModalBody")
                .html(result)
                .show();

            $("#editModal").modal("show");
        },
        complete: function() {
            spinner.hide();
        },
        error: function(xhr, status, error) {
            if (status == 404) {
                console.log(error);
                alert("Product not found");
            } else {
                alert("Error when trying to load the product");
            }
            //   alert("Page " + href + " cannot open. Error:" + error);
        }
        // timeout: 8000
    });
});

$(document).on("click", "#createModalButton", function(event) {
    event.preventDefault();
    let href = $(this).attr("data-attr");
    $.ajax({
        url: href,
        beforeSend: function() {
            spinner.show();
        },
        // return the result
        success: function(result) {
            $("#createModalBody")
                .html(result)
                .show();

            $("#createModal").modal("show");
        },
        complete: function() {
            spinner.hide();
        },
        error: function(xhr, status, error) {
            if (status == 404) {
                console.log(error);
                alert("View not found");
            } else {
                alert("Error when trying to load create view");
            }
            //   alert("Page " + href + " cannot open. Error:" + error);
        }
        // timeout: 8000
    });
});

function search() {
    var searchText = $("#searchInput").val();

    $.ajax({
        url: "products/search",
        type: "get",
        data: {
            name: searchText
        },
        beforeSend: function() {
            spinner.show();
        },
        success: function(response) {
            $("#response").html(response);
            spinner.hide();
        },
        error: function(xhr) {
            //Do Something to handle error
        }
    });
}

$(document).on("search", "#searchInput", function(event) {
    search();
});

$(function() {
    search();
});
