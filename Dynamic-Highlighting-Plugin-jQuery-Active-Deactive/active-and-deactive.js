(function ( $ ) {
 
    $.fn.JqueryActiveAeactive = function(options) {
		
		// Extend Plugin
		var settings = $.extend({
			
			ListItem:[['Item-1','Item-1-class'],['Item-2','Item-2-class'],['Item-3','Item-3-class'],['Item-4','Item-4-class'],['Item-5','Item-5-class'],['Item-6','Item-6-class'],['Item-7','Item-8-class'],['Item-9','Item-9-class'],['Item-10','Item-10-class'],['Item-11','Item-11-class'],['Item-12','Item-12-class'],['Item-13','Item-13-class'],['Item-14','Item-14-class'],['Item-15','Item-15-class'],['Item-16','Item-17-class'],['Item-18','Item-18-class'],['Item-19','Item-19-class'],['Item-20','Item-20-class']],
			AddClassOnContainer:'custom-ul-container'
			
			
			},options);
		// Extend Plugin End
		$(this).html('<ul class="custom-active-deactive '+ settings.AddClassOnContainer +'"></ul>');
		for(i=0;i<settings.ListItem.length;i++)
		{
		  $(this).children('ul').append('<li class="active-deactive-item '+settings.ListItem[i][1]+'">'+settings.ListItem[i][0]+'</li>');	
		}
		
		/// On Hover Enter
		$('.custom-active-deactive li').mouseenter(function(){
			
			   $('.custom-active-deactive li').each(function(){
				     $(this).addClass('custom-deactive');
				   
				   });
				$(this).removeClass('custom-deactive');   
			
			});
			
		/// On Hover Out
		$('.custom-active-deactive li').mouseleave(function(){
			
			   $('.custom-active-deactive li').each(function(){
				     $(this).removeClass('custom-deactive');
				   
				   });
				$(this).removeClass('custom-deactive');   
			
	    });	
		
		
       
	   
    };
 
}( jQuery ));