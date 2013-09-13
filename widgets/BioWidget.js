
define(["dojo/dom", "dojo/dom-construct", "dojo/window", "dojo/_base/declare","dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/text!./BioWidget/templates/BioWidget.templ", "dojo/dom-style", "dojo/_base/fx", "dojo/_base/lang"],
    function(dom, domConstruct, win, declare, WidgetBase, TemplatedMixin, template, domStyle, baseFx, lang){
        return declare([WidgetBase, TemplatedMixin], {
            // Some default values for our author
            // These typically map to whatever you're handing into the constructor
            //vs: win.getBox(),
			name: "Biographie",
			
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
            baseClass: "bioWidget",
 
            // A reference to our background animation
            mouseAnim: null,
 
            // Colors for our background animation
            baseBackgroundColor: "#fff",
            mouseBackgroundColor: "#def",

			postCreate: function(){
    			// Get a DOM node reference for the root of our widget
			    var domNode = this.domNode;
 				var vs = win.getBox();
			    // Run any parent postCreate processes - can be done at any point
			    this.inherited(arguments);
 				
			    // Set our DOM node's background color to white -
			    // smoothes out the mouseenter/leave event animations
			    domStyle.set(domNode, "backgroundColor", "black");

				domStyle.set(domNode,"width",(vs.w-this.widthMenu)+"px");
				domStyle.set(domNode,"height",(vs.h-this.heightHeader)+"px");
				domStyle.set(domNode,"top", "0px");
				domStyle.set(domNode,"left", (3*(vs.w-this.widthMenu))+"px");
				domStyle.set(domNode,"z-index", "-1");
			}
        });
});

