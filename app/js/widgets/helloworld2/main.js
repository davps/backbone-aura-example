define(['sandbox', './views/AppView'], function(sandbox, AppView){

	return function(element){
		new AppView({
			el:sandbox.dom.find(element)
		});
	};
	
});