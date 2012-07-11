/*global require, requirejs*/
// Require.js allows us to configure shortcut alias
require.config({
    shim: {
        'underscore': {
            exports: '_'
        },

        'backbone': {
            deps: ['underscore', 'dom'],
            exports: 'Backbone'
        },

        'deferred':{
            deps: ['dom']
        }
    },

    paths: {

        // jQuery
        dom: '../../assets/js/jquery/jquery',

        // Zepto
        // dom: '../../aura/lib/zepto/zepto',
        // deferred: '../../aura/lib/zepto/deferred',

        core: 'core/mediator',
        perms: 'security/permissions',
        sandbox: 'sandbox/facade',

        aura_core: '../../assets/js/aura/mediator',
        aura_perms: '../../assets/js/aura/permissions',
        aura_sandbox: '../../assets/js/aura/facade',

        text: '../../assets/js/text',
        backbone: '../../assets/js/backbone',
        localstorage: '../../assets/js/localstorage',

        underscore: '../../assets/js/underscore',
        fullcalendar: '../../assets/js/fullcalendar.min',
        jquery_ui: '../../assets/js/jquery-ui.min'
    }
});




if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}

// Starts main modules
// Publishing from core because that's the way that Nicholas did it...
requirejs(['core'], function (core) {
	core.start('helloworld', "#helloworldapp");
	core.start('helloworld2', "#helloworld2app");
    core.start('controls', "#controlsapp");
});
