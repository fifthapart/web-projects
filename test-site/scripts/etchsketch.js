$(document).ready(function() {
    var newEtch
    newEtch = function(size) {
        for (i = 0; i < size*size; i++) {
            $('.screen').append('<div class="box"></div>');
        };
        screenSize = 440
        var boxSide = screenSize/size;
        
        $('.box').css("width", boxSide.toString());
        $('.box').css("height", boxSide.toString());
        
        $('.box').hover(function() {
            $(this).css('background-color', 'white');
        }, function() {
            $(this).css('background-color', '#191E19');
        });
    };
    
    size = 40
    newEtch(size)
    
    $('button').click(function() {
        $('.game').effect('shake');
        $('.box').css("background-color", "");
    });
    
    function vanish(){
        $('.box').hover(function() {
            $(this).css('opacity', function(){
                return parseFloat($(this).css('opacity')) + 0.2;
            });
        });
    }
    
    $('#shake').click(function() {
        $('.box').off();
        $('.box').css('opacity', '100%');
        $('.box').hover(function() {
            $(this).css('background-color', 'white');
        }, function() {
            $(this).css('background-color', '#191E19');
        });
    });
    
    $('#grayscale').click(function() {
        $('.box').off();
        $('.box').css('opacity', '100%');
        $('.box').hover(function() {
            $(this).css('background-color', 'white');
        }, function() {
            $(this).css('background-color', '#191E19');
        });
        $('.box').css('opacity', 0);
        $('.box').hover(function(){
            $(this).css('opacity', function(){
                return parseFloat($(this).css('opacity')) + 0.2;
            });
        });
    });
        
    
    $('#resolution').click(function() {
        var res = false
        while (res === false) {
            var oldSize = size;
            // size does not get var b/c it is global
            size = prompt("Please enter a grid size from 1 - 128.");
            if (0 < size <= 128) {res = true}
            else if (size === null) {
                size = oldSize;
                res = true
            }
            else {alert("The size you entered is outside the range.")};
        };
        newEtch(size);
    });
});
