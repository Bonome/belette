/*
 * This file is provided for custom JavaScript logic that your HTML files might need.
 * Maqetta includes this JavaScript file by default within HTML pages authored in Maqetta.
 */
var pMenuBar = null;
var pSubMenu2 = null;
//variables
var widthMenu = "202";

require(["dojo/request", "dojo/_base/window","dijit/focus","dojox/image", "dojo/window",  
         "dojo/on", "dojo/fx", "dojo/dom", "dojo/dom-geometry", "dojo/dom-style",
          "dojo/dom-class", "widgets/HomeWidget", "widgets/SlideWidget", 
          "widgets/ProjectWidget", "widgets/RenacleWidget", 
          "widgets/BioWidget", "widgets/LinkWidget", "widgets/ContactWidget", "widgets/ShortMenuWidget", 
          "dijit/MenuBar", "dijit/MenuBarItem", "dijit/PopupMenuBarItem", "dijit/Menu", "dijit/MenuItem", 
          "dijit/DropDownMenu", "dojox/mobile/Container", "dojo/dom-construct",
          "dojo/ready","dojo/domReady!"],
function(request_json,bwin,focusUtil,dimg, win, on, 
    coreFx, dom, domGeom, domStyle,
    domClass, HomeWidget, SlideWidget, 
    ProjectWidget, RenacleWidget, BioWidget, 
    LinkWidget, ContactWidget, ShortMenuWidget,  
    MenuBar, MenuBarItem, PopupMenuBarItem, Menu, MenuItem, 
    DropDownMenu,Container,domConstruct,
    ready){
//    request_json("http://localhost/belette/json/accueil_text.json", {
//      handleAs: "json"
//    }).then(function(texts){
//      texts_accueil = texts;
//    });
	ready(function() { 
        focusUtil.focus(dom.byId("IdMenuHome")); 
    });
    
	dimg.preload(["img/loader.jpg"]);


	//constantes
//	const intHome = 	1;
//	const intProject = 	2;
//	const intRenacle =	3;
//	const intBio = 		4;
//	const intLink = 	5;
//	const intThanks = 	6;
//	const intContact =	7;

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
			id: "IdMenuProject6",
        }));
		
        pMenuBar.addChild(new MenuBarItem({
            label: "Projets",
			id: "IdMenuProject",
			
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

	function slide(node, horizontal, vertical, ref, duration){
	  if(duration != 0){
	    duration = 1000;
	  }
    	coreFx.slideTo({
    	    duration: duration,
      		node: node,
      		top: (domGeom.getMarginBox(node).t + vertical).toString(),
      		left: (horizontal).toString(),//domGeom.getMarginBox(node).l +
      		unit: "px",
			onEnd: function(){
        		domStyle.set("leftArrow", "display", "none");
				domStyle.set("rightArrow", "display", "none");
				domClass.add(refToIdFrame(ref), "focused");
      		}
    	}).play();
  	};

	function slideMain(horizontal, ref, duration){
		slide("mainSlider",horizontal,0, ref, duration);
	};

	function slideMainLeft(){
		var vs = win.getBox();
		slideMain(-1*vs.w-widthMenu);
	};

	function deltaSlide(ref, duration){
	    removeAllClassFocusedOnFrames();
		var standardSlide = win.getBox().w-widthMenu;
		var coef = ref-1;
		if(ref>screenRef){//to right
			domStyle.set("rightArrow", "display", "block");
		}else if(ref<screenRef){//to left
			domStyle.set("leftArrow", "display", "block");
		}
		slideMain(widthMenu-(coef*standardSlide), ref, duration);
		screenRef = ref;
	};
	
	function refToIdFrame(ref){
	  if(ref == 1){
	    return "homeWidget";
	  }else if (ref == 2){
	    return "projectWidget";
	  }else if (ref == 3){
        return "renacleWidget";
      }else if (ref == 4){
        return "bioWidget";
      }else if (ref == 5){
        return "linkWidget";
      }else if (ref == 6){
        return "contactWidget";
      }
	  
	};
	
	function pathToId(path){
	     if(path == "home" || path == ""){
	        return 1;
	      }else if (path == "project"){
	        return 2;
	      }else if (path == "renacle"){
	        return 3;
	      }else if (path == "bio" || path == "biography"){
	        return 4;
	      }else if (path == "link" || path == "links"){
	        return 5;
	      }else if (path == "contact"){
	        return 6;
	      }
	      
	    };
	
	//remove selected class 
	function removeAllClassSelected(){
		//class shortMenu
	    domClass.remove("sqHome", "selected");
		domClass.remove("sqProject", "selected");
		domClass.remove("sqRenacle", "selected");
		domClass.remove("sqBio", "selected");
		domClass.remove("sqLink", "selected");
		domClass.remove("sqContact", "selected");
		
		//class side menu item
		domClass.remove("IdMenuHome", "sideMenuItemSelected");
		domClass.remove("IdMenuProject", "sideMenuItemSelected");
        domClass.remove("IdMenuRenacle", "sideMenuItemSelected");
        domClass.remove("IdMenuBio", "sideMenuItemSelected");
        domClass.remove("IdMenuLink", "sideMenuItemSelected");
        domClass.remove("IdMenuContact", "sideMenuItemSelected");
        
        
	};
	
	//class project sub menu item
	function removeAllClassSelectedFromProjectSubMenu(){
      domClass.remove("IdMenuProject1", "sideProjectSubMenuItemSelected");
      domClass.remove("IdMenuProject2", "sideProjectSubMenuItemSelected");
      domClass.remove("IdMenuProject3", "sideProjectSubMenuItemSelected");
      domClass.remove("IdMenuProject4", "sideProjectSubMenuItemSelected");
      domClass.remove("IdMenuProject5", "sideProjectSubMenuItemSelected");
      domClass.remove("IdMenuProject6", "sideProjectSubMenuItemSelected");
	}
	
	function removeAllClassFocusedOnFrames(){
      domClass.remove("homeWidget", "focused");
      domClass.remove("projectWidget", "focused");
      domClass.remove("renacleWidget", "focused");
      domClass.remove("bioWidget", "focused");
      domClass.remove("linkWidget", "focused");
      domClass.remove("contactWidget", "focused");
  };

	function hideSubMenuProject() {
		//domStyle.set("IdMenuProject", "background-image", "none");
		//domStyle.set("IdMenuProject_text", "color", "#929292 !important");
		//domStyle.set("IdMenuRenacle", "margin-top", "0px");
	    if(screenRef == 2){
	      slideMenuOnProject("0");
	    }
		//domStyle.set("dijit_MenuBar_1", "display", "none");
	};

	//click home
	function clickHome(duration) {	  
	    hideSubMenuProject();
		deltaSlide(1, duration);
        var stateObj = { pauline: "home" };
        history.pushState(stateObj, "Pauline Desgrandchamp", "");
		removeAllClassSelected();
		domClass.add("IdMenuHome","sideMenuItemSelected");
        domClass.add("sqHome", "selected");
	};
	//click project
	function clickProject(duration) {
		removeAllClassSelected();
		domClass.add("IdMenuProject","sideMenuItemSelected");
        domClass.add("sqProject", "selected");
		slideMenuOnProject("209");
		deltaSlide(2, duration);
        var stateObj = { pauline: "project" };
		history.pushState(stateObj, "Projets - Pauline Desgrandchamp", "project");
	};
	//click Renacle
	function clickRenacle(duration) {
	    hideSubMenuProject();
		deltaSlide(3, duration);
        var stateObj = { pauline: "renacle" };
		history.pushState(stateObj, "Ça Renacle - Pauline Desgrandchamp", "renacle");
		removeAllClassSelected();
		domClass.add("IdMenuRenacle","sideMenuItemSelected");
        domClass.add("sqRenacle", "selected");
	};
	//click Bio
	function clickBio(duration) {
	    hideSubMenuProject();
	    deltaSlide(4, duration);
        var stateObj = { pauline: "biography" };
        history.pushState(stateObj, "Biographie - Pauline Desgrandchamp", "biography");
        removeAllClassSelected();
        domClass.add("IdMenuBio","sideMenuItemSelected");
		domClass.add("sqBio", "selected");
	};
	//click Link
	function clickLink(duration) {
	    hideSubMenuProject();
		deltaSlide(5, duration);
        var stateObj = { pauline: "link" };
        history.pushState(stateObj, "Liens - Pauline Desgrandchamp", "links");
		removeAllClassSelected();
		domClass.add("IdMenuLink","sideMenuItemSelected");
        domClass.add("sqLink", "selected");
	};
	//click Contact
	function clickContact(duration) {
	    hideSubMenuProject();
		deltaSlide(6, duration);
		var stateObj = { pauline: "contact" };
        history.pushState(stateObj, "Contact - Pauline Desgrandchamp", "contact");
		removeAllClassSelected();
		domClass.add("IdMenuContact","sideMenuItemSelected");
		domClass.add("sqContact", "selected");
	};
	//click on project Submenu item
	function clickProjectSubMenuItem(idMenuItem){
	  removeAllClassSelectedFromProjectSubMenu();
	  domClass.add("IdMenuProject"+idMenuItem,"sideProjectSubMenuItemSelected");
	};
	//effect menu on project item click
	function slideMenuOnProject(length){
	   var duration = 300;
	   if(length == 0){
	     coreFx.combine([
	                     coreFx.slideTo({
	                       duration: duration,
	                       node: "IdMenuRenacle",
	                       top: length,
	                       unit: "px",
	                       onEnd: function(){
	                       }
	                     }),
	                     coreFx.slideTo({
	                       duration: duration,
	                       node: "IdMenuBio",
	                       top: length,
	                       unit: "px",
	                       onEnd: function(){
	                       }
	                     }),
	                     coreFx.slideTo({
	                       duration: duration,
	                       node: "IdMenuLink",
	                       top: length,
	                       unit: "px",
	                       onEnd: function(){
	                       }
	                     }),
	                     coreFx.slideTo({
	                       duration: duration,
	                       node: "IdMenuContact",
	                       top: length,
	                       unit: "px",
	                       onEnd: function(){
	                       }
	                     })
	                     ,
	                     coreFx.wipeOut({
	                       duration: duration,
	                       node: "dijit_MenuBar_1",
	                     })
	                 ]).play();
	   }else{
  	     coreFx.combine([
             coreFx.slideTo({
               duration: duration,
               node: "IdMenuRenacle",
               top: length,
               unit: "px",
               onEnd: function(){
               }
             }),
             coreFx.slideTo({
               duration: duration,
               node: "IdMenuBio",
               top: length,
               unit: "px",
               onEnd: function(){
               }
             }),
             coreFx.slideTo({
               duration: duration,
               node: "IdMenuLink",
               top: length,
               unit: "px",
               onEnd: function(){
               }
             }),
             coreFx.slideTo({
               duration: duration,
               node: "IdMenuContact",
               top: length,
               unit: "px",
               onEnd: function(){
               }
             })
             ,
             coreFx.wipeIn({
               duration: duration,
               node: "dijit_MenuBar_1",
             })
         ]).play();
	   }
	 }
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

    on(dom.byId("IdMenuProject1"), "click", function(){
      //console.log('click on menu item project 1');
      clickProjectSubMenuItem(1);
    });
    on(dom.byId("IdMenuProject2"), "click", function(){
      clickProjectSubMenuItem(2);
    });
    on(dom.byId("IdMenuProject3"), "click", function(){
      clickProjectSubMenuItem(3);
    });
    on(dom.byId("IdMenuProject4"), "click", function(){
      clickProjectSubMenuItem(4);
    });
    on(dom.byId("IdMenuProject5"), "click", function(){
      clickProjectSubMenuItem(5);
    });
	on(dom.byId("IdMenuProject6"), "click", function(){
	  clickProjectSubMenuItem(6);
    });
	
	on(bwin.global, 'resize', function() {
	    console.log('window on resize');
	    deltaSlide(screenRef,0);
	    window.widHome.resizeFrame();
	    window.widProject.resizeFrame();
	    window.widRenacle.resizeFrame();
	    window.widBio.resizeFrame();
	    window.widLink.resizeFrame();
	    window.widContact.resizeFrame();
	});
	
	on(bwin.global, 'onpopstate', function(event){
	  alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
	});
	
	window.onpopstate = function(event) {
	  //alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
	  var path = document.location.pathname.replace("/belette/", "");
	  path = path.replace("/", "");
	  if(path == "home" || path == ""){
        clickHome(0);
      }else if (path == "project"){
        clickProject(0);
      }else if (path == "renacle"){
        clickRenacle(0);
      }else if (path == "bio" || path == "biography"){
        clickBio(0);
      }else if (path == "link" || path == "links"){
        clickLink(0);
      }else if (path == "contact"){
        clickContact(0);
      }
	};
	
});