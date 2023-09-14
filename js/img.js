$(document).ready(function () {
    $('#imgInp').on('change', function () {
        readPath(this);
    });
});

function readPath(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}