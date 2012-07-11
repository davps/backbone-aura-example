define(['sandbox', 'text!../templates/controls.html'],
        function(sandbox, controlTemplate) {

    var AppView = sandbox.mvc.View({

        controlTemplate: sandbox.template.parse(controlTemplate),

        events: {
          "click .stop-helloworld": "stophelloworld",
          "click .stop-helloworld2": "stophelloworld2",
          "click .start-helloworld": "starthelloworld",
          "click .start-helloworld2": "starthelloworld2"
        },


        initialize: function() {
          this.$el.html(controlTemplate);
        },

        render: function() {
         //...
        },

        stophelloworld: function(){
          sandbox.widgets.stop('helloworld', '#helloworldapp');
        },

        stophelloworld2: function(){
          sandbox.widgets.stop('helloworld2', '#helloworld2app');
        },

        starthelloworld: function(){
          sandbox.widgets.start('helloworld', '#helloworldapp');
        },

        starthelloworld2: function(){
          sandbox.widgets.start('helloworld2', '#helloworld2app');
        }

    });
    
    return AppView;

});
