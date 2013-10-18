/*
 * This file is provided for custom JavaScript logic that your HTML files might need.
 * Maqetta includes this JavaScript file by default within HTML pages authored in Maqetta.
 */
var pMenuBar = null;
var pSubMenu2 = null;
//variables
var widthMenu = "202";

require(["dojo/_base/window","dijit/focus","dojox/image", "dojo/window",  
         "dojo/on", "dojo/fx", "dojo/dom", "dojo/dom-geometry", "dojo/dom-style",
          "dojo/dom-class", "widgets/HomeWidget", "widgets/SlideWidget", 
          "widgets/ProjectWidget", "widgets/RenacleWidget", 
          "widgets/BioWidget", "widgets/LinkWidget", "widgets/ContactWidget", "widgets/ShortMenuWidget", 
          "dijit/MenuBar", "dijit/MenuBarItem", "dijit/PopupMenuBarItem", "dijit/Menu", "dijit/MenuItem", 
          "dijit/DropDownMenu", "dojox/mobile/Container", "dojo/dom-construct",
          "dojo/ready","dojo/domReady!"],
function(bwin,focusUtil,dimg, win, on, 
    coreFx, dom, domGeom, domStyle,
    domClass, HomeWidget, SlideWidget, 
    ProjectWidget, RenacleWidget, BioWidget, 
    LinkWidget, ContactWidget, ShortMenuWidget,  
    MenuBar, MenuBarItem, PopupMenuBarItem, Menu, MenuItem, 
    DropDownMenu,Container,domConstruct,
    ready){
	ready(function() { 
        focusUtil.focus(dom.byId("IdMenuHome")); 
    });
	//dimg.preload(["http://4.bp.blogspot.com/_hk2dup6KMsI/SrZghr1NbXI/AAAAAAAAANE/Bn_MUgbXfGg/s1600/long_tailed_weasel.jpg"]);


	//constantes
	const intHome = 	1;
	const intProject = 	2;
	const intRenacle =	3;
	const intBio = 		4;
	const intLink = 	5;
	const intThanks = 	6;
	const intContact =	7;

	//variables
	var screenRef = 1;
	var newScreen = 1;
	var heightHeader = "0";

pMenuBar = new MenuBar({});
		            
	pMenuBar.addChild(new MenuBarItem({
		label: "Accueil", 
		id: "IdMenuHome"
	}));
		pSubMenu2 = new MenuBar({});
		//pSubMenu2 = new Container({});
        //pSubMenu2 = new DropDownMenu({});
        pSubMenu2.addChild(new MenuItem({
            label: "Protocole narratif",
            iconClass: "puceMenu",
			id: "IdMenuProject1"
        }));
        pSubMenu2.addChild(new MenuItem({
            label: "Paysages sonores urbains",
            iconClass: "puceMenu",
			id: "IdMenuProject2"
        }));
        pSubMenu2.addChild(new MenuItem({
            label: "Ateliers pédagogiques",
            iconClass: "puceMenu",
			id: "IdMenuProject3"
        }));
        pSubMenu2.addChild(new MenuItem({
            label: "Portrait sonore de quartiers",
            iconClass: "puceMenu",
			id: "IdMenuProject4"
        }));
        pSubMenu2.addChild(new MenuItem({
            label: "Parcours sonores in-situ",
            iconClass: "puceMenu",
			id: "IdMenuProject5"
        }));
        pSubMenu2.addChild(new MenuItem({
            label: "Participations",
            iconClass: "puceMenu",
			id: "IdMenuProject6"
        }));
		
        pMenuBar.addChild(new MenuBarItem({
            label: "Projets",
			id: "IdMenuProject"
        }));

		pMenuBar.addChild(new MenuBarItem({
            label: "Ça renâcle", 
			id: "IdMenuRenacle"
        }));

		pMenuBar.addChild(new MenuBarItem({
            label: "Biographie", 
			id: "IdMenuBio"
        }));

		pMenuBar.addChild(new MenuBarItem({
            label: "Liens", 
			id: "IdMenuLink"
        }));

		pMenuBar.addChild(new MenuBarItem({
            label: "Contact", 
			id: "IdMenuContact"
        }));

        pMenuBar.placeAt("sideMenuContainer");
        pMenuBar.startup();

		//Set menu item  project
		var menuItemProject=dom.byId("IdMenuProject");
		var sMenuProject = pSubMenu2.placeAt(menuItemProject);
		domStyle.set("dijit_MenuBar_1", "display", "none");
///////////////
///MAINFRAME///
///////////////
	// Slider
	var slideContainer = dom.byId("slideContainer");
	widSlideContainer = new SlideWidget().placeAt(slideContainer);

	//frame1
	var frame1 = dom.byId("frame1");
	widHome = new HomeWidget().placeAt(frame1);
	//frame2
	var frame2 = dom.byId("frame2");
	widProject = new ProjectWidget().placeAt(frame2);
	//frame3
	var frame3 = dom.byId("frame3");
	widRenacle = new RenacleWidget().placeAt(frame3);
	//frame4
	var frame4 = dom.byId("frame4");
	widBio = new BioWidget().placeAt(frame4);
	//frame5
	var frame5 = dom.byId("frame5");
	widLink = new LinkWidget().placeAt(frame5);
	//frame6
	var frame6 = dom.byId("frame6");
	widContact = new ContactWidget().placeAt(frame6);
	//frame7
//	var frame7 = dom.byId("frame7");
//	var widHome = new HomeWidget().placeAt(frame);		

	//ShortMenu
	var shortMenu = dom.byId("shortMenuContainer");
	var widgetMenu = new ShortMenuWidget().placeAt(shortMenu);
	
	
	//Side Menu
//	var sideMenuContainer = dom.byId("sideMenuContainer");
//	var widSideMenu = new SideMenuWidget().placeAt(sideMenuContainer);
////////////////
///CONTROLLER///
////////////////

	function slide(node, horizontal, vertical){
    	coreFx.slideTo({
      		node: node,
      		top: (domGeom.getMarginBox(node).t + vertical).toString(),
      		left: ( horizontal).toString(),//domGeom.getMarginBox(node).l +
      		unit: "px",
			onEnd: function(){
        		domStyle.set("leftArrow", "display", "none");
				domStyle.set("rightArrow", "display", "none");
      		}
    	}).play();
  	};

	function slideMain(horizontal){
		slide("mainSlider",horizontal,0);
	};

	function slideMainLeft(){
		var vs = win.getBox();
		slideMain(-1*vs.w-widthMenu);
	};

	function deltaSlide(ref){
		var standardSlide = win.getBox().w-widthMenu;
		var coef = ref-1;
		if(ref>screenRef){//to right
			domStyle.set("rightArrow", "display", "block");
		}else if(ref<screenRef){//to left
			domStyle.set("leftArrow", "display", "block");
		}
		slideMain(widthMenu-(coef*standardSlide));
		screenRef = ref;
	};
	
	function removeAllClassSelected(){
		domClass.remove("sqHome", "selected");
		domClass.remove("sqProject", "selected");
		domClass.remove("sqRenacle", "selected");
		domClass.remove("sqBio", "selected");
		domClass.remove("sqLink", "selected");
		domClass.remove("sqContact", "selected");
	};

	function hideSubMenuProject() {
		//domStyle.set("IdMenuProject", "background-image", "none");
		//domStyle.set("IdMenuProject_text", "color", "#929292 !important");
		domStyle.set("IdMenuRenacle", "margin-top", "0px");
		domStyle.set("dijit_MenuBar_1", "display", "none");
	};

	//click home
	function clickHome() {
		deltaSlide(1);
		hideSubMenuProject();
		removeAllClassSelected();
		domClass.add("sqHome", "selected");
	};
	//click project
	function clickProject() {
		removeAllClassSelected();
		var idMenuRenacle = dom.byId("IdMenuRenacle");
		domClass.add("sqProject", "selected");
		domStyle.set(idMenuRenacle, "margin-top", "233px");
//		domStyle.set("IdMenuProject", "background-image", "url('img/fondMenuSurvol.png') !important");
//		domStyle.set("IdMenuProject_text", "color", "white");
		domStyle.set("dijit_MenuBar_1", "display", "block");
		deltaSlide(2);
	};
	//click Renacle
	function clickRenacle() {
		deltaSlide(3);
		hideSubMenuProject();
		removeAllClassSelected();
		domClass.add("sqRenacle", "selected");
	};
	//click Bio
	function clickBio() {
		deltaSlide(4);
		removeAllClassSelected();
		domClass.add("sqBio", "selected");
	};
	//click Link
	function clickLink() {
		deltaSlide(5);
		hideSubMenuProject();
		removeAllClassSelected();
		domClass.add("sqLink", "selected");
	};
	//click Contact
	function clickContact() {
		deltaSlide(6);
		hideSubMenuProject();
		removeAllClassSelected();
		domClass.add("sqContact", "selected");
	};

////////////
///EVENTS///
////////////
	on(dom.byId("sqHome"), "click", function(){
		clickHome();
  	});

	on(dom.byId("IdMenuHome"), "click", function(){
		clickHome();
	});

	on(dom.byId("sqProject"), "click", function(){
		clickProject();
  	});

	on(menuItemProject, "click", function(){
		clickProject();
  	});

	on(dom.byId("IdMenuRenacle"), "click", function(){
		clickRenacle();
  	});
	
	on(dom.byId("sqRenacle"), "click", function(){
		clickRenacle();
  	});

	on(dom.byId("sqBio"), "click", function(){
		clickBio();
  	});
	
	on(dom.byId("IdMenuBio"), "click", function(){
		clickBio();
	});

	on(dom.byId("sqLink"), "click", function(){
		clickLink();
  	});
	
	on(dom.byId("IdMenuLink"), "click", function(){
		clickLink();
	});

	on(dom.byId("sqContact"), "click", function(){
		clickContact();
  	});
	
	on(dom.byId("IdMenuContact"), "click", function(){
		clickContact();
	});
	
	on(bwin.global, 'resize', function() {
	    console.log('window on resize');
	    window.widSlideContainer.resizeSlide();
	    //window.widProject.resizeFrame();
        
	});
	
});