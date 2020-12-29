import { show, hide } from "./../spinner";
import { showSuccessMessage, showErrorMessage } from "./../alertMessages";

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
            $("#editModal").modal("show");
        },
        error: function(xhr, status, error) {
            console.log(status);
            console.log(error);

            if (status == 404) {
                showErrorMessage("Product not found");
            } else {
                showErrorMessage("Error when trying to load edit view   ");
            }
        },
        complete: function(jqXHR, textStatus) {
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
            $("#createModal").modal("show");
        },
        error: function(xhr, status, error) {
            console.log(status);
            console.log(error);

            if (status == 404) {
                showErrorMessage("View not found");
            } else {
                showErrorMessage("Error when trying to load create view");
            }
        },
        complete: function(jqXHR, textStatus) {
            hide();
        }
    });
});

$(document).on("click", ".deleteModalButton", function(event) {
    event.preventDefault();
    let href = $(this).attr("data-attr");
    let menu = $(this).attr("data-menu");

    $("#deleteModalForm").attr("action", href);
    $("#deleteMessage").html('Are you sure you want to delete the menu "' + menu + '" ?');
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
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf_token"]').attr("content")
        },
        method: "DELETE",
        success: function(data) {
            $("#response").html(data);
            showSuccessMessage("Product deleted");
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            showErrorMessage("Error when trying to delete a product");
        },
        complete: function(jqXHR, textStatus) {
            $("#deleteModal").modal("hide");
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
        },
        error: function(xhr, status, error) {
            console.log(status);
            console.log(error);
            showErrorMessage("Error when trying to retrieve products");
        },
        complete: function(jqXHR, textStatus) {
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