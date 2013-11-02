
define(["dojo/dom", "dojo/dom-construct", "dojo/window", "dojo/_base/declare","dijit/_WidgetBase",
"dijit/_TemplatedMixin", "dojo/text!./HomeWidget/templates/HomeWidget.tpl", "dojo/dom-style", 
"dojo/_base/fx", "dojo/_base/lang", "dojox/image", "dojo/json", "dojo/text!http://bonome.hd.free.fr:8888/belette/json/accueil_text.json"],
    function(dom, domConstruct, win, declare, WidgetBase, 
	TemplatedMixin, template, domStyle, 
	baseFx, lang, dimg, json, texts_accueil){
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
            baseClass: "homeWidget",
            
            id:"homeWidget",
            
            line1:"",
 
            // A reference to our background animation
            mouseAnim: null,
 
            // Colors for our background animation
            baseBackgroundColor: "#fff",
            mouseBackgroundColor: "#def",
            
            resizeFrame: function(){
              var domNode = this.domNode;
              domStyle.set(domNode,"width",(win.getBox().w-this.widthMenu)+"px");
              domStyle.set(domNode,"height",(win.getBox().h-this.heightHeader)+"px");
//            domStyle.set(domNode,"bottom", "0px");
//            domStyle.set(domNode,"right", "0px");
              domStyle.set(domNode,"top", "0px");
              domStyle.set(domNode,"left", "0px");
            },

			postCreate: function(){
    			// Get a DOM node reference for the root of our widget
			    var domNode = this.domNode;
			    // Run any parent postCreate processes - can be done at any point
			    this.inherited(arguments);
			    //var texts = json.parse(http://localhost/belette/json/accueil_text.json);
//			    var texts = JSON.parse( texts_accueil );
			    
//			    this.line1 = texts.line1[1]; 
			    // Set our DOM node's background color to white -
			    // smoothes out the mouseenter/leave event animations
			    domStyle.set(domNode, "backgroundColor", "white");

			    this.resizeFrame();
				domStyle.set(domNode,"z-index", "-2");
			}
        });
});

