module.exports = {
    showSuccessMessage: function(message) {
        $("#successMessageDiv").text(message);
        $("#successMessageAlert").removeAttr("hidden");
    },

    showErrorMessage: function(message) {
        $("#errorMessageDiv").text(message);
        $("#errorMessageAlert").removeAttr("hidden");
    } 
};
