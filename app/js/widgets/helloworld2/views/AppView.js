define(['sandbox'], function(sandbox){


	var AppView = sandbox.mvc.View({
		
		initialize:function(){
			this.$el.html("hello world! (From app number 2)");
		},
		
		render: function(){
			
		}
	});
	return AppView;
	
	
});
