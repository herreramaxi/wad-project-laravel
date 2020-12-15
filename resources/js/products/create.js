$('#createModalForm').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);

    $.post($(this).attr('action'), formData, function(data) {
        var d = data;

    })
})