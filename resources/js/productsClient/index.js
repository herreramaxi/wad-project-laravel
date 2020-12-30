import { show, hide } from "./../spinner";

function search() {
    var searchText = $("#searchInput").val();

    $.ajax({
        url: "productsClient/search",
        type: "get",
        data: {
            name: searchText
        },
        beforeSend: function() {
            show();
        },
        success: function(response) {
            $("#partialProductList").html(response);
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