const Handlebars = require("handlebars");
const Bloodhound = require("typeahead.js/dist/bloodhound");
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

var citynames = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace("name"),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
        url: "/productsClient/searchAutocomplete?query=%QUERY",
        wildcard: "%QUERY"
    }
});
citynames.initialize();

$("#searchInput").typeahead(
    { highlight: true,
         minLength: 1
     },
    {
        name: "licenses",
        display: "name",
        source: citynames.ttAdapter(),
        templates: {
            suggestion: Handlebars.compile(
                '<div class="tt-suggestion tt-selectable ProfileCard">' +
                    '<span><img class="ProfileCard-avatar" src={{image}}></img>' +
                    '<div class="ProfileCard-details">{{name}}</div></span>' +
                    "</div>"
            )
        }
    }
);

$("#searchInput").on("typeahead:selected", function(evt, item) {
    search();
});
