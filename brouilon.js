// <span data-dojo-type="dijit.MenuBar" tabIndex="0" style="height: 300px; width: 100px; position: absolute; left: 0px; top: 40px; overflow:auto;">
//  <span data-dojo-type="dijit.PopupMenuBarItem" label="Menu 1" iconClass="dijitNoIcon">
//   <span data-dojo-type="dijit.Menu">
//    <span data-dojo-type="dijit.MenuItem" label="Menu Item 1.1"></span>
//    <span data-dojo-type="dijit.MenuItem" label="Menu Item 1.2"></span>
//   </span>
//  </span>
//  <span data-dojo-type="dijit.PopupMenuBarItem" label="Menu 2" iconClass="dijitNoIcon">
//   <span data-dojo-type="dijit.Menu">
//    <span data-dojo-type="dijit.MenuItem" label="Menu Item 2.1"></span>
//    <span data-dojo-type="dijit.MenuItem" label="Menu Item 2.2"></span>
//   </span>
//  </span>
// </span>
//
//
//			postCreate: function(){
//				var domNode = this.domNode;
// 				var vs = win.getBox();
//			    // Run any parent postCreate processes - can be done at any point
//			    this.inherited(arguments);
// 				
//			    // Set our DOM node's background color to white -
//			    // smoothes out the mouseenter/leave event animations
//			    domStyle.set(domNode, "backgroundColor", "yellow");
//
//				domStyle.set(domNode,"width",(vs.w-this.widthMenu)+"px");
//				domStyle.set(domNode,"height",(vs.h-this.heightHeader)+"px");
//
//			}
//
//
//
//
//define(["dojo/dom", "dojo/dom-construct", "dojo/window", "dojo/_base/declare","dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/text!./HomeWidget/templates/HomeWidget.templ", "dojo/dom-style", "dojo/_base/fx", "dojo/_base/lang"],
//    function(dom, domConstruct, win, declare, WidgetBase, TemplatedMixin, template, domStyle, baseFx, lang){
//        return declare([WidgetBase, TemplatedMixin], {
//            // Some default values for our author
//            // These typically map to whatever you're handing into the constructor
//            //vs: win.getBox(),
//			name: "noname",
//			
//			widthMenu: "100",
//			heightHeader: "40",
//
//			layout: null,
//            // Using require.toUrl, we can get a path to our AuthorWidget's space
//            // and we want to have a default avatar, just in case
//            //avatar: require.toUrl("custom/AuthorWidget/images/defaultAvatar.png"),
//            //bio: "",
// 
//            // Our template - important!
//            templateString: template,
// 
//            // A class to be applied to the root node in our template
//            baseClass: "slideWidget",
// 
//            // A reference to our background animation
//            mouseAnim: null,
// 
//            // Colors for our background animation
//            baseBackgroundColor: "#fff",
//            mouseBackgroundColor: "#def",
//
//			postCreate: function(){
//    			// Get a DOM node reference for the root of our widget
//			    var domNode = this.domNode;
// 				var vs = win.getBox();
//			    // Run any parent postCreate processes - can be done at any point
//			    this.inherited(arguments);
// 				
//			    // Set our DOM node's background color to white -
//			    // smoothes out the mouseenter/leave event animations
//			    domStyle.set(domNode, "backgroundColor", "grey");
//
//				domStyle.set(domNode,"width",(vs.w-this.widthMenu)+"px");
//				domStyle.set(domNode,"height",(vs.h-this.heightHeader)+"px");
//				domStyle.set(domNode,"bottom", -1*vs.h+"px");
//				domStyle.set(domNode,"right", -1*vs.w+"px");
//				domStyle.set(domNode,"z-index", "-1");
//					// Get a reference to our container
////					var frame1 = dom.byId("frame1");
//					// Create our widget and place it
////					var widget = new HomeWidget().placeAt(frame1);
//				//var button = domConstruct.create("button", {innerHTML: "push me"}).placeAt(frame1);
//				//this.layout = new Image({src: "https://www.google.fr/logos/2012/50th_anniversary_of_bonne_nuit_les_petits-979007-hp.jpg"},this.frame1);
//				//alert(vs1.w)
//			    // Set up our mouseenter/leave events - using dojo/on
//			    // means that our callback will execute with `this` set to our widget
//			    //on(domNode, "mouseenter", function (e) {
//			    //    this._changeBackground(this.mouseBackgroundColor);
//			    //});
//			    //on(domNode, "mouseleave", function (e) {
//			    //    this._changeBackground(this.baseBackgroundColor);
//			    //});
//			}
//        });
//});
//
//
//
//define(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/text!./SlideWidget/templates/SlideWidget.templ", "dojo/dom-style", "dojo/_base/fx", "dojo/_base/lang"],
//    function(declare, WidgetBase, TemplatedMixin, template, domStyle, baseFx, lang){
//        return declare([WidgetBase, TemplatedMixin], {
//			name: "Accueil"
//
//
//
//        });
//});
//
//
// <span data-dojo-type="dijit.MenuBar" tabIndex="0" style="height: 400px; width: 110px; top: 40px; left: 0px;">
//  <span data-dojo-type="dijit.PopupMenuBarItem" id="IdMenuHome" label="Accueil" iconClass="dijitNoIcon"><span data-dojo-type="dijit.Menu"></span>
//  </span><span data-dojo-type="dijit.PopupMenuBarItem" label="Projets" iconClass="dijitNoIcon">
//   <span data-dojo-type="dijit.Menu">
//    <span data-dojo-type="dijit.MenuItem" label="Protocole narratif"></span>
//    <span data-dojo-type="dijit.MenuItem" label="Paysages sonores urbains"></span>
//   </span>
//  </span>
// </span>
//
//
//////////////////
/////// MENU /////
//////////////////
//
//	pMenuBar = new MenuBar({});
//		            
//	pMenuBar.addChild(new MenuBarItem({
//		label: "Accueil", 
//		id: "IdMenuHome"
//	}));
//		container = new dojox.mobile.Container
//        pSubMenu2 = new DropDownMenu({});
//        pSubMenu2.addChild(new MenuItem({
//            label: "Protocole narratif",
//            iconClass: "puceMenu",
//			id: "IdMenuProject1"
//        }));
//        pSubMenu2.addChild(new MenuItem({
//            label: "Paysages sonores urbains",
//            iconClass: "puceMenu",
//			id: "IdMenuProject2"
//        }));
//        pSubMenu2.addChild(new MenuItem({
//            label: "Ateliers pédagogiques",
//            iconClass: "puceMenu",
//			id: "IdMenuProject3"
//        }));
//        pSubMenu2.addChild(new MenuItem({
//            label: "Portrait sonore de quartiers",
//            iconClass: "puceMenu",
//			id: "IdMenuProject4"
//        }));
//        pSubMenu2.addChild(new MenuItem({
//            label: "Parcours sonores in-situ",
//            iconClass: "puceMenu",
//			id: "IdMenuProject5"
//        }));
//        pSubMenu2.addChild(new MenuItem({
//            label: "Participations",
//            iconClass: "puceMenu",
//			id: "IdMenuProject6"
//        }));
//		
//        pMenuBar.addChild(new MenuBarItem({
//            label: "Projets",
//			id: "idMenuProject",
//            popup: pSubMenu2
//        }));
//
//		pMenuBar.addChild(new MenuBarItem({
//            label: "Ça renâcle", 
//			id: "IdMenuRenacle"
//        }));
//
//		pMenuBar.addChild(new MenuBarItem({
//            label: "Biographie", 
//			id: "IdMenuBio"
//        }));
//
//		pMenuBar.addChild(new MenuBarItem({
//            label: "Liens", 
//			id: "IdMenuLink"
//        }));
//
//		pMenuBar.addChild(new MenuBarItem({
//            label: "Contact", 
//			id: "IdMenuContact"
//        }));
//
//        pMenuBar.placeAt("sideMenuContainer");
//        pMenuBar.startup();
//
//	
//////////////////
/////// MENU /////
//////////////////
//
//	pMenuBar = new MenuBar({});
//		            
//	pMenuBar.addChild(new MenuBarItem({
//		label: "Accueil", 
//		id: "IdMenuHome"
//	}));
//
//        //pSubMenu2 = new DropDownMenu({});
//	pMenuBar.addChild(new MenuBarItem({
//           label: "Projets",
//			id: "idMenuProject"
//        }));
//        pMenuBar.addChild(new MenuItem({
//            label: "Protocole narratif",
//            iconClass: "puceMenu",
//			id: "IdMenuProject1"
//        }));
//        pMenuBar.addChild(new MenuItem({
//            label: "Paysages sonores urbains",
//            iconClass: "puceMenu",
//			id: "IdMenuProject2"
//        }));
//        pMenuBar.addChild(new MenuItem({
//            label: "Ateliers pédagogiques",
//            iconClass: "puceMenu",
//			id: "IdMenuProject3",
//			class: "subMenu"
//        }));
//        pMenuBar.addChild(new MenuItem({
//            label: "Portrait sonore de quartiers",
//            iconClass: "puceMenu",
//			id: "IdMenuProject4",
//			class: "subMenu"
//        }));
//        pMenuBar.addChild(new MenuItem({
//            label: "Parcours sonores in-situ",
//            iconClass: "puceMenu",
//			id: "IdMenuProject5",
//			class: "subMenu"
//        }));
//        pMenuBar.addChild(new MenuItem({
//            label: "Participations",
//            iconClass: "puceMenu",
//			id: "IdMenuProject6",
//			class: "subMenu"
//        }));
//
//		pMenuBar.addChild(new MenuBarItem({
//            label: "Ça renâcle", 
//			id: "IdMenuRenacle"
//        }));
//
//		pMenuBar.addChild(new MenuBarItem({
//            label: "Biographie", 
//			id: "IdMenuBio"
//        }));
//
//		pMenuBar.addChild(new MenuBarItem({
//            label: "Liens", 
//			id: "IdMenuLink"
//        }));
//
//		pMenuBar.addChild(new MenuBarItem({
//            label: "Contact", 
//			id: "IdMenuContact"
//        }));
//
//        pMenuBar.placeAt("sideMenuContainer");
//        pMenuBar.startup();