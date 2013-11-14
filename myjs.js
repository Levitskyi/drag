$(document).ready(function(){
		var slides = $('#slider ul').children().length;
		var slideWidth = $('#slider').width();
		var min = 0;
		var max = -((slides - 1) * slideWidth);
$('#slider ul').draggable({ 
cursor: "pointer",
axis: "x",
revertDuration: 200,
revert : function(event, ui) {
            // on older version of jQuery use "draggable"
            // $(this).data("draggable")
            // on 2.x versions of jQuery use "ui-draggable"
            // $(this).data("ui-draggable")			
			var parser = $('#slider ul').css('left');		
			var regV = /\d+/g;
			var left = parser.match(regV);
			left = parseInt(left);	
						
			if( left <= 450){
			$(this).data("uiDraggable").originalPosition = {
                top : 0,
                left : 0
            };
			}
			if( left > 450 && left < 1350){
			$(this).data("uiDraggable").originalPosition = {
                top : 0,
                left : -900
            };}
			else if(left > 1350){
			$(this).data("uiDraggable").originalPosition = {
                top : 0,
                left : -1800
            };}			
            // return boolean
            return !event;
            // that evaluate like this:
            // return event !== false ? false : true;
        },
drag: function (event, ui) {		
        if (ui.position.left > min) ui.position.left = min;
            if (ui.position.left < max) ui.position.left = max;
        }		
});
$('.but').click(function(){
	alert(' Ти страшний баняк, написано ж, не натискай це!!! :))');
});

});//end ready