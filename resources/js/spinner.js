module.exports = {
    show: function() {
        $("#modalSpinner").modal("show");
    },
    hide: function() {
        setTimeout(function() {
            $("#modalSpinner").modal("hide");
        }, 500);
        // $("#modalSpinner").css('display', 'none');
        // $("#modalSpinner").modal("hide");
        // $('#modalSpinner').on('shown.bs.modal', function(e) {
        //     console.log("shown.bs.modal");
        //     $("#modalSpinner").modal("hide");
        // });
    }
};

// $('#progessDialog').on('shown.bs.modal', function(e) {
//     $("#progessDialog").modal("hide");
// });
