var main = function() {
    var main=function(){
    $('.btn').click(function(){
        var post=$('.status-box').val();
        $('<li>').text(post).prependTo('.posts');
        $('.status-box').val(''); 
        
        });


};

$(document).ready(main);

};


$(document).ready(main);ss