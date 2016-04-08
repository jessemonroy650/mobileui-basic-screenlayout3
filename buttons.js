/*
	Date: 2016-01-11
*/
var appConfig  = {isVisible:false}; // This is tied to appIcon
var menuConfig = {isVisible:false}; // This is tied to menuIcon
var content    = {isVisible:true};
var baton      = {belongsTo:'content'};

var buttons = {
    self : {},
    init : function() {
    },
    connectTopLeftIcon : function() {
        $('#appIcon').click(function()  {
            console.log('#appIcon');
            console.log('baton.belongsTo:' + baton.belongsTo);
            if (baton.belongsTo === 'content' || baton.belongsTo === 'appConfig'){
                if (appConfig.isVisible === false) {
                    $('#appConfig').removeClass('hidden');
                    appConfig.isVisible = true;
                    baton.belongsTo     = 'appConfig';

                    $('#content').addClass('hidden');
                    content.isVisible = false;
                } else {
                    $('#appConfig').addClass('hidden');
                    appConfig.isVisible = false;
                    baton.belongsTo     = 'content';

                    $('#content').removeClass('hidden');
                    content.isVisible = true;
                 }
            }
        });
    },
    connectTopRightIcon : function() {
        $('#menuIcon').click(function() {
            console.log('#menuIcon');
            console.log('baton.belongsTo:' + baton.belongsTo);
            if (baton.belongsTo === 'content' || baton.belongsTo === 'menuConfig'){
                if (menuConfig.isVisible === false) {
                    $('#menuConfig').removeClass('hidden');
                    menuConfig.isVisible = true;
                    baton.belongsTo      = 'menuConfig';

                    $('#content').addClass('hidden');
                    content.isVisible = false;
                } else {
                    $('#menuConfig').addClass('hidden');
                    menuConfig.isVisible = false;
                    baton.belongsTo      = 'content';

                    $('#content').removeClass('hidden');
                    content.isVisible = true;
                }
            }
        });
    }
}

buttons.connectTopRightIcon();
buttons.connectTopLeftIcon();