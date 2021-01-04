module.exports = {
    showSuccessMessage: function(message) {
        $("#successMessageDiv").text(message);
        $("#successMessageAlert").show();
    },

    showErrorMessage: function(message) {
        $("#errorMessageDiv").text(message);
        $("#errorMessageAlert").show();
    }
}; 

$(document).on("click", "#errorMessageButtonClose", function(event) {
    $("#errorMessageAlert").hide();
});

$(document).on("click", "#successMessageButtonClose", function(event) {
      $("#successMessageAlert").hide();
});
