
define(["dojo/dom", "dojo/dom-construct", "dojo/window", "dojo/_base/declare","dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/text!./ShortMenuWidget/templates/ShortMenuWidget.templ", "dojo/dom-style", "dojo/_base/fx", "dojo/_base/lang"],
    function(dom, domConstruct, win, declare, WidgetBase, TemplatedMixin, template, domStyle, baseFx, lang){
        return declare([WidgetBase, TemplatedMixin], {
            // Some default values for our author
            // These typically map to whatever you're handing into the constructor
            //vs: win.getBox(),
			name: "noname",
			
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
            baseClass: "shortMenuWidget",
			
			

            // A reference to our background animation
            mouseAnim: null,
 
            // Colors for our background animation
            baseBackgroundColor: "#fff",
            mouseBackgroundColor: "#def",

			postCreate: function(){
    			// Get a DOM node reference for the root of our widget
			    var domNode = this.domNode;
 				//var vs = win.getBox();
			    // Run any parent postCreate processes - can be done at any point
			    this.inherited(arguments);
 				
			    // Set our DOM node's background color to white -
			    // smoothes out the mouseenter/leave event animations
			    domStyle.set(domNode, "backgroundColor", "white");
				
				domStyle.set(domNode,"width","177px");
				domStyle.set(domNode,"height","34px");
				domStyle.set(domNode,"bottom", "12px");
				domStyle.set(domNode,"right", "12px");
				domStyle.set(domNode,"zIndex", "1000");
				
			}
        });
});

