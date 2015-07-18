var main = function() {
    $('.article').click(function(){
         $('.article').removeClass('current');
        $('.description').hide();
        $(this).children('.description').show();
       
        $(this).addClass('curent');
        });//article click end
        $(document).keypress(function(event){
            if(event.which === 111) {
             $('.current').children('.description').toggle();
            }
        else if(event.which === 110) {
        var currentArticle = $('.current');
  var nextArticle = currentArticle.next();

  currentArticle.removeClass('current');
  nextArticle.addClass('current');
        }
            
            });//keypress end

};


$(document).ready(main);ss