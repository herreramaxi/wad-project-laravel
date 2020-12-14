function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader()

        reader.onload = function(e) {
            $('#previewImage').attr('src', e.target.result)
        }

        reader.readAsDataURL(input.files[0])
    }
}

$(document).on('change', '#inputFileId', function(event) {
    readURL(this)
})

var forms = document.getElementsByClassName('needs-validation')
    // Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener(
        'submit',
        function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        },
        false
    )
})