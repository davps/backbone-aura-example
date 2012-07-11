define(['sandbox', '../helloworld'], function(sandbox, HelloView){


	var AppView = sandbox.mvc.View({
		
		initialize:function(){
			this.$el.html("hello world! (From app number 1)");
		},
		
		render: function(){
			
		}
	});
	return AppView;
	
	
});
