const Handlebars = require("handlebars");
const Bloodhound = require("typeahead.js/dist/bloodhound");

$(function() {
    var products = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace("name"),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        remote: {
            url: "/productsClient/searchAutocomplete?query=%QUERY",
            wildcard: "%QUERY"
        }
    });

    products.initialize();

    $("#searchInput").typeahead(
        { highlight: true, minLength: 1 },
        {
            name: "licenses",
            display: "name",
            source: products.ttAdapter(),
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
});
