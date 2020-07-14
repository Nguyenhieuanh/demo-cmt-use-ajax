$("#btn-cmt").on("click", function () {
    // lay value trong o cmt
    var content = $("#comment").val();

    // lay url hien tai tren trang cmt (http://localhost::8080)
    var url = window.location.origin;
    // ajaxSetup lay csrf token khi post
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
        }
    });
    $.ajax({
        type: "post", //phuong thuc cua route post cmt
        url: url + "/post-comment", //url cua route post cmt
        data: { content: content },
        dataType: "json",
        success: function (response) {
            var html = ''
            if (response) {
                $("#comment").val(''); // o cmt rong sau khi post

                html = '<div class="border-dark border my-1">'
                + response.created_at
                +'<p>'+ response.content +'</p>'
                +'</div>';
                $('#comment-field').append(html); //show du lieu
            }
        }, error: function() {
            console.log('error');
        }
    });
});
