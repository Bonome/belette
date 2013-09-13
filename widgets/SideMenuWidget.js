
define(["dojo/dom", "dojo/dom-construct", "dojo/window", "dojo/_base/declare","dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/text!./SideMenuWidget/templates/SideMenuWidget.templ", 
	"dojo/dom-style", "dojo/_base/fx", "dojo/_base/lang", "dijit/MenuBar", "dijit/MenuBarItem", "dijit/PopupMenuBarItem", "dijit/Menu", "dijit/MenuItem", "dijit/DropDownMenu"],
    function(dom, domConstruct, win, declare, WidgetBase, TemplatedMixin, template, 
		domStyle, baseFx, lang, MenuBar, MenuBarItem, PopupMenuBarItem, Menu, MenuItem, DropDownMenu){
        return declare([WidgetBase, TemplatedMixin], {
            // Some default values for our author
            // These typically map to whatever you're handing into the constructor
            //vs: win.getBox(),
			name: "sideMenu",
			
			widthMenu: "202",
			heightHeader: "0",

			layout: null,
            // Using require.toUrl, we can get a path to our AuthorWidget's space
            // and we want to have a default avatar, just in case
            //avatar: require.toUrl("custom/AuthorWidget/images/defaultAvatar.png"),
            //bio: "",
 
            // Our template - important!
            templateString: template,
 
            // A class to be applied to the root node in our template
            baseClass: "sideMenuWidget",
			
			

            // A reference to our background animation
            mouseAnim: null,
 


			postCreate: function(){
    			// Get a DOM node reference for the root of our widget
			    var domNode = this.domNode;
 				//var vs = win.getBox();
			    // Run any parent postCreate processes - can be done at any point
			    this.inherited(arguments);
 				
			    // Set our DOM node's background color to white -
			    // smoothes out the mouseenter/leave event animations

				
			}
        });
});

