
define(["dojo/dom", "dojo/dom-construct", "dojo/window", "dojo/_base/declare","dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/text!./SlideWidget/templates/SlideWidget.templ", "dojo/dom-style", "dojo/_base/fx", "dojo/_base/lang"],
    function(dom, domConstruct, win, declare, WidgetBase, TemplatedMixin, template, domStyle, baseFx, lang){
        return declare([WidgetBase, TemplatedMixin], {
            // Some default values for our author
            // These typically map to whatever you're handing into the constructor
            //vs: win.getBox(),
			name: "noname",
			id: "mainSlider",
			widthMenu: "202",
			heightHeader: "0",
			screenNumber: "6",

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
            
            resizeSlide: function(){
              var domNode = this.domNode;
              domStyle.set(domNode,"top", "0px");
              domStyle.set(domNode,"bottom", "0px");
              domStyle.set(domNode,"left", this.widthMenu+"px");
              domStyle.set(domNode,"right", "0px");
            },

			postCreate: function(){
    			// Get a DOM node reference for the root of our widget
			    var domNode = this.domNode;
 				var vs = win.getBox();
			    // Run any parent postCreate processes - can be done at any point
			    this.inherited(arguments);
 				
			    // Set our DOM node's background color to white -
			    // smoothes out the mouseenter/leave event animations
			    domStyle.set(domNode, "backgroundColor", "red");

				//domStyle.set(domNode,"width",(this.screenNumber*(vs.w-this.widthMenu))+"px");
				//domStyle.set(domNode,"height",(vs.h-this.heightHeader)+"px");
				//domStyle.set(domNode,"bottom", -1*vs.h+"px");
				//domStyle.set(domNode,"right", this.screenNumber*-1*vs.w+((this.screenNumber-1)*this.widthMenu)+"px");
				this.resizeSlide();
				domStyle.set(domNode,"z-index", "-3");
				domStyle.set("leftArrow", "left", this.widthMenu+"px");
				domStyle.set("leftArrow", "top", (((vs.h-this.heightHeader)/2)-100)+"px");
				domStyle.set("rightArrow", "right", "0px");
				domStyle.set("rightArrow", "top", (((vs.h-this.heightHeader)/2)-100)+"px");
					// Get a reference to our container
//					var frame1 = dom.byId("frame1");
					// Create our widget and place it
//					var widget = new HomeWidget().placeAt(frame1);
				//var button = domConstruct.create("button", {innerHTML: "push me"}).placeAt(frame1);
				//this.layout = new Image({src: "https://www.google.fr/logos/2012/50th_anniversary_of_bonne_nuit_les_petits-979007-hp.jpg"},this.frame1);
				//alert(vs1.w)
			    // Set up our mouseenter/leave events - using dojo/on
			    // means that our callback will execute with `this` set to our widget
			    //on(domNode, "mouseenter", function (e) {
			    //    this._changeBackground(this.mouseBackgroundColor);
			    //});
			    //on(domNode, "mouseleave", function (e) {
			    //    this._changeBackground(this.baseBackgroundColor);
			    //});
			}        });
});
/*
require([
    "dojo/_base/declare", "dojo/dom-construct", "dojo/ready", "dojo/_base/window",
    "dijit/_WidgetBase",
], function(declare, domConstruct, ready, win, _WidgetBase){

    declare("MyFirstWidget", [_WidgetBase], {
        buildRendering: function(){
            // create the DOM for this widget
            this.domNode = domConstruct.create("button", {innerHTML: "push me"});
        }
    });
*/
