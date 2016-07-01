$(function(){
	
	$('#votelist li').on("click",function(){
		var me = $(this);
		var myindex = $("#votelist li").index(this);
		vote(myindex);
	})
	
	
	function vote(choice){
		console.log("MADE A CHOICE",choice)
		// do ajax

		$.get( "http://localhost:8001/rexy",{choice:choice}, function( data ) {
		  console.log( "Data Loaded: " + data );
		}).done(function(res) {
		  console.log('Hey, it is done, and the message is:',res);
		$('body').css('background','red')
		});

	}
	
})
