$('.button').on('click', function() {
$(function(){
    $.getJSON('http://insomnia:3000/api/info', function(data) {
      $('.column:nth-child(3)').append('<div class="ui info message"><i class="close icon"></i><div class="header">Container ID: '+data.cid+'</div><p>Running on host: '+data.hostname+'</p></div>');
    });
});
});


$('.column:nth-child(3)').on('click', '.message .close', function() {
    $(this).closest('.message').transition('fade');
});

