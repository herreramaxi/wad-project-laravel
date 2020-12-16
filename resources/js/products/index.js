import { show, hide } from "./../spinner";

$(document).on("click", ".editModalButton", function(event) {
    event.preventDefault();
    let href = $(this).attr("data-attr");
    $.ajax({
        url: href,
        beforeSend: function() {
            show();
        },
        success: function(result) {
            $("#editModalBody").html(result);
      
            hide();
            $("#editModal").modal("show");
        },
        error: function(xhr, status, error) {
            if (status == 404) {
                console.log(error);
                alert("Product not found");
            } else {
                alert("Error when trying to load the product");
            }
            hide();
        }
    });
});

$(document).on("click", ".createModalButton", function(event) {
    event.preventDefault();
    let href = $(this).attr("data-attr");
    $.ajax({
        url: href,
        beforeSend: function() {
            show();
        },
        success: function(result) {
            $("#createModalBody").html(result);           

            hide();
            $("#createModal").modal("show");
        },
        error: function(xhr, status, error) {
            if (status == 404) {
                console.log(error);
                alert("View not found");
            } else {
                alert("Error when trying to load create view");
            }
            hide();
        }
    });
});

$(document).on("click", ".deleteModalButton", function(event) {
    event.preventDefault();
    let href = $(this).attr("data-attr");

    $("#deleteModalForm").attr("action", href);
    $("#deleteModal").modal("show");
});

$("#deleteModalForm").on("submit", function(e) {
    e.preventDefault();

    let action = $(this).attr("action");

    $.ajax({
        url: action,
        cache: false,
        contentType: false,
        processData: false,
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')},
        method: "DELETE",      
        success: function(data) {
            //TODO: Add loading in button
            $("#response").html(data);
            $("#deleteModal").modal("hide");
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Error when trying to delete a product");
        }       
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
            show();
        },
        success: function(response) {
            $("#response").html(response);
            hide();
        },
        error: function(xhr, status, error) {
            alert("Error when trying to search products");
            hide();
        }
    });
}

$(document).on("search", "#searchInput", function(event) {
    search();
});

$(function() {
    search();
});
