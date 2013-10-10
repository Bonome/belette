
define(["dojo/dom", "dojo/dom-construct", "dojo/window", "dojo/_base/declare","dijit/_WidgetBase",
"dijit/_TemplatedMixin", "dojo/text!./HomeWidget/templates/HomeWidget.tpl", "dojo/dom-style", 
"dojo/_base/fx", "dojo/_base/lang", "dojox/image"],
    function(dom, domConstruct, win, declare, WidgetBase, 
	TemplatedMixin, template, domStyle, 
	baseFx, lang, dimg){
        return declare([WidgetBase, TemplatedMixin], {
			//dimg.preload(["HomeWidget/images/quatreLogos.png", "HomeWidget/images/enceinte.png","HomeWidget/images/logoPrincipe.png", "HomeWidget/images/casque.png", "HomeWidget/images/ampli.png", "HomeWidget/images/gusOrange.png", "HomeWidget/images/toile.png"]),

            // Some default values for our author
            // These typically map to whatever you're handing into the constructor
            //vs: win.getBox(),
			name: "Accueil",
			
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
            baseClass: "slideWidget",
 
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
			    domStyle.set(domNode, "backgroundColor", "white");

				//domStyle.set(domNode,"width",(vs.w-this.widthMenu)+"px");
				//domStyle.set(domNode,"height",(vs.h-this.heightHeader)+"px");
				domStyle.set(domNode,"bottom","0px");
                domStyle.set(domNode,"right","0px");
				domStyle.set(domNode,"top", "0px");
				domStyle.set(domNode,"left", "0px");
				domStyle.set(domNode,"z-index", "-1");
			}
        });
});

