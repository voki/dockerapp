$('.button').on('click', function() {
$(function(){
    $.getJSON('/api/connect', function(data) {
	$('.column:nth-child(3)').append('<div class="ui info message"><i class="close icon"></i><div class="header">Container ID: '+data.cid+'</div><p>Running on host: '+data.hostname+'</p></div>');
    })
      .fail(function() { 
     	$('.column:nth-child(3)').append('<div class="ui error message"><i class="close icon"></i><div class="header">Connection failed...</div></div>');
      });
});
});

$('.column:nth-child(3)').on('click', '.message .close', function() {
    $(this).closest('.message').transition('fade');
});

