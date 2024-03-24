/*note comments preceded by // or enclosed within \/**\/ 
are not executed*/
/*
define what happens when the user scrolls the web page 
displayed on the window.define the keepMenuInFocus() 
function, method, behaviour, subroutine as what would 
happen when a user scroll down or up the web browser window.
*/
window.onscroll = function() {keepMenuInFocus()};
//see defintion of keepMenuInFocus() in main.js
/*new code*/
/*This code is placed at the end of the page because
it is important that before it executes,
the page has finished loading.
1. on window resize, read the current values of 
the width and height of s4a div (s4acw, s4ach).
2. if the current values are greater than 
the original values, 
	(a) enforce the original main.css property 
	and values on s4a and other html elements.
3. else
	(a) enforce new set of css property and 
	values to resize s4a, and other html elements.
when window is resized call a function name 
scaleSomeSections with no parameters ().
see the main.js file for the definition
scaleSomeSections()*/
window.onresize = function() {scaleSomeSections()};
/*1. This function is called on page load see <body onload=...>
2. it is responsible for the s1 div image carousel.
3. the window object setInterval(funtion,time) is used to call 
the changeImage() function which does the actual image changing
and then for spaces the calls for the duration of time given
*/
function imagecarousel() {
	const pics = ["pose.jpg", "run.jpg", "slider05.jpg", "igbo.jpg", "aehss-16.jpg"];
	let i = 0;
	setInterval(changeimage, 7000);

	function changeimage() {
		if (i >= pics.length - 1) {
			i = 0;
			$("#s1").css("background-image", "url(\"./images/" + pics[i] + "\")");
		} else {
			i = i + 1;
			$("#s1").css("background-image", "url(\"./images/" + pics[i] + "\")");
		}
	}

}

function keepMenuInFocus() {
	/*
	s1height stores the value of the height of the 
	s1 div.	the value is obtained by calling the 
	JavaScript function parseInt() on top of the 
	s1 height value. the s1 height value is obtained
	from the $() function provided by the JQuery 
	library on top of the #s1 id selector. In like manner,
	the position, opacity and width property of the 
	s1b <div> are obtained and stored in their 
	corresponding variables.
	*/
	var s1height = parseInt($("#s1").css("height"));
	var menuPosition = $("#s1b").css("position");
	var menuOpacity = $("#s1b").css("opacity");
	var menuWidth = $("#s1b").css("width");
	/*
	JavaScript presents the webpage as document 
	object to the developer. The documentElement.scrollTop 
	which gets the length in pixels from the initial 
	top of the webpage to the current top. s1height stores 
	the value of the height of the s1 div. the value is 
	obtained by calling the JavaScript function parseInt() 
	on top of the s1 height value. the s1 height value is 
	obtained from the $() function provided by the JQuery 
	library on top of the #s1 id selector. In like manner, 
	the position, opacity and width property of the s1b 
	<div> are obtained and stored in their corresponding 
	variables.
	*/
  if (document.documentElement.scrollTop >= s1height) {
	  $("#s1b").css("position", "absolute");
	  $("#s1b").css("width", "100%");
	  /*To prevent all child div from being affected by the opacity value of the parent div use the css property:value pair of background-color:rgb(x,y,z,o) to achieve parent div transparency. 
	  rgb(x,y,z,o) is another manner of specifying css color where x is integer value [0-255] for red, y for green, z for blue, and o is the decimal value [0-1] for the transparency of the parent div. 
	  In this manner the child divs would not inherit the parent div's transparency. 
	  This is done because the menu-bar eleents are inside the s1b div, and we do not want them to inherit the transparency of the s1b div*/
	  $("#s1b").css("background-color","rgb(255,255,255,1)");
	  $("#s1b").css("top", Math.floor(document.documentElement.scrollTop));
	  /*new code>> to enable the s1b div stay atop others*/ 
	  $("#s1b").css("z-index", 1);
	  /*new code<<*/
  }else{
	  $("#s1b").css("position", "relative");
	  $("#s1b").css("width", "100%");
	  $("#s1b").css("background-color","rgb(255,255,255,0.7)");
	  $("#s1b").css("top", "0");
  }
}

function scaleSomeSections(){
	/*the width and height of the <div> with id s4a is
	acronymed as (s4aw, s4ah) and height of the div 
	with id s1 acronymed as (s1h).
	the values of s4aw, s4ah, and s1h below are based
	on a screen of pixel resolution 1366px by 768px
	which is a common monitor size.
	to confirm for your sreen, at maximized browser
	window, uncomment the following lines and
	refresh your browser:*/
	//alert("s4aw = "+$("#s4a").css("width"));
	//alert("s4ah = "+$("#s4a").css("height"));
	//alert("s1h = "+$("#s1").css("height"));
	let s4aw = 745;
	let s4ah = 480;
	let s1h = 608;
	/*the current width of s4a is acronymed (s4acw).
	1. the jQuery function $("#s4a") gets the s4a div 
	as object in JavaScript.
	2. the .css("width") function attached to $("#s4a")
	object, gets the width in pixels as String or text.
	3. the .trim() function removes spaces 
	from the width String or text.
	4. the .split("px") function removes the "px" from the
	width String or text e.g. "345px".split("px") will 
	result in a String or text array with two values,
	array[0]="345" and array[1]=""*/
	var s4acw = $("#s4a").css("width").trim().split("px")[0];
	//alert("s4acw = "+s4acw);
	
	/*
	alert is used a lot for debugging purposes. 
	Debugging is used to discover
	bugs or errors in code. One of the commmonest manners
	of finding bugs is displaying values of variables or
	properties or objects using	the window alert function
	*/
	
	/*
	new code: when the side bar is visible add its width
	to s4acw in order that the expected diff between s4acw
	and s4aw is maintained.
	*/
	var sideBarDisplayed = $("#s0b").css("display");
	var sideBarWidth = 0;
	if(sideBarDisplayed!=="none"){
		sideBarWidth = $("#s0b").css("width").trim().split("px")[0];
		//alert("sideBarWidth:="+sideBarWidth);
	}
	s4acw=Math.floor(s4acw)+Math.floor(sideBarWidth);
	//alert("s4acw:="+s4acw);
	/*new code ends*/
	
	/*
	determine the difference -rounded to the nearest
	whole number- (diff) between s4acw and the s4aw
	the function .floor(number) of Math object is used
	*/
	var diff=Math.floor(s4acw-s4aw);
	//alert("diff="+diff);
	/*new code: delay a bit to allow changes to effect*/
	setInterval(1000);
	
	
	/*
	1. what reference value (refvalue)is considered 
	window downsize or upsize? 
	2. I.e., what value of diff would be the mark 
	for window downsizing or upsizing?
	3. what negative change in s4a div width would be worth 
	downsizing, and what positive change in s4a div width
	would be worth upsizing?
	4. when diff is less than refvalue, downsize, and 
	when diff is greater than absolute of refvalue
	upsize
	*/
	var refvalue = -300;
	/*
	diff < refvalue means window downsize and 
	diff >= Math.abs(refvalue) upsize
	if window is downsized,
	1. keep s4b below s4a.
	2. make s4a background image to fit in s4a.
	3. make s4a background image scroll with s4a.
	4. reduce the height of s4a to match that of
	the background image.
	5. adjust the s3a and s3b to stay one on top
	6. fit the background image of s1.
	*/
	if(diff<refvalue){
		//alert("diff<"+refvalue);
		//keep s4b below s4a
		$("#s4a").css("display","table");
		$("#s4a").css("width","100%");
		$("#s4a").css("float","none"); 
		$("#s4a").css("clear","left");
		$("#s4b").css("display","table");
		$("#s4b").css("width","100%");
		//make s4a background image to fit in s4a
		$("#s4a").css("background-size","cover");
		$("#s4a").css("background-position","center center");
		//make s4a background image scroll with s4a
		$("#s4a").css("background-attachment","scroll");
		/*reduce the height of s4a to match that of
		the background image.
		express the diff as percentage and decrease the height
		of s4a by that percentage (pc)
		*/
		var pc = (diff/s4aw)*100;
		var s4ach = s4ah+((pc/100)*s4ah);
		//alert("s4ah="+s4ah+" s4ach="+s4ach);
		$("#s4a").css("height",s4ach);
		
		/*new code*/
		/*adjust the left padding of s4c to 1%*/
		$("#s4c").css("padding-left","1%");
				
		//adjust the s3a and s3b to stay one on top
		$("#s3a").css("display","table");
		$("#s3a").css("width","100%");
		$("#s3a").css("padding-left","5%");
		$("#s3b").css("display","table");
		$("#s3b").css("width","100%");
		$("#s3b").css("padding-left","5%");
		$("#s3b").css("padding-right","1%");
		//fit the background image of s1
		$("#s1").css("background-size","contain");
		//scale the height of s1, s1 current height (s1ch)
		var s1ch = s1h+((pc/100)*s1h);
		//alert("s1ch="+s1ch);
		$("#s1").css("height",s1ch);
		/*
		new code:
		to display the sidebar button on window minimize, and
		then hide the horizontal menubar
		*/
		$("#menu_btn").css("display","inline-block");
		$("#s1bii").css("display","none");
		/*new code*/
		/* 
		keep the carousel visible.
		Sum the heights of s1a, s1b, add them as the displacement 
		from the window top (topDisp) and use it to displace the carousel 
		from the top of the browser window.
		Owing to the hidden s1bii, we multiplied the height_s1b by 1.5 to 
		ensure that the image carousel is completely off the zone of
		s1a, and s1b.
		*/
		let height_s1a = $("#s1a").css("height");
		let height_s1b = $("#s1b").css("height");
		/*
		This will return the heights of s1a and s1b divs in pixels 'px'.
		Remove the 'px' by splitting the height_s1* using 'px'.
		This will create a 1-dimensional-array of 1 row or a 1-column-array with 1 row.
		The first cell of the first row referenced by [0] contains the height without the 'px'.
		Example; 12px.trim().split("px") will yield the following array:
		_____
		0|12|
		-----px
		1|  |
		*/
		height_s1a = height_s1a.trim().split("px")[0];
		height_s1b = height_s1b.trim().split("px")[0];
		var topDisp = Math.floor(height_s1a)+Math.floor(height_s1b)*1.5;
		/*
		displace the image carousel location from 
		the top of window using the background-position 
		css property
		*/
		$("#s1").css("background-position","center "+topDisp+"px");
		/*
		add the displacement from the window top (topDisp) 
		to current s1 height (s1ch) to ensure image 
		carousel is visible
		*/
		s1ch = s1ch+topDisp;
		$("#s1").css("height",s1ch);
		
		/*change the display:flex properties of divs 
		keeping multiple divs parallel in section 5
		to block on window downsize*/
		$("#s5b").css("display","block");
		$("#s5bi2, #s5bii2, #s5biii2").css("display","block");
		
		/*change the property:value pair display:flex; in the
		id selectors applied to divs that keep multiple 
		divs parallel in Recent News section to display:block; 
		on window downsize in order to enable div stacking one 
		atop another.
		Those id selectors are #s6b and #s6bi2 applied to divs
		with s6b and s6bi2 respectively*/
		$("#s6b").css("display","block");
		$("#s6bi2, #s6bii2, #s6biii2").css("display","block");
		
		/*change their widths to occupy all available window 
		space in that manner even the their texts content reflow
		to occupy the whole screen width on smaller windows*/
		$("#s6b").css("width","100%");
		$("#s6bi, #s6bii, #s6biii").css("width","100%");
		/*though not included, change the width of the #s6a id 
		selector to 100% so that the title text "Recent News" 
		occupies the whole screen width*/
		$("#s6a").css("width","100%");
		/*since, we are dealing with a smaller window, align
		everything to the left to maximize space, and zero all
		left margins*/
		$("#s6bii, #s6biii").css("margin-left","0em");
		$("#s6bi, #s6bii, #s6biii").css("text-align","left");
		$("#s6a").css("text-align","left");
		/*to reduce vertical scroll length increased by vertical
		spaces normalize heights of lines, and zero all top 
		margins and paddings of all id and class selectors applied
		to divs stacked up atop each other.*/
		$("#s6a").css("line-height","normal");
		$("#s6bi1b, #s6bii1b, #s6biii1b").css("margin-top","0em");
		$("#s6bi1d, #s6bii1d, #s6biii1d").css("padding-top","0em");
		$("#s6bi2, #s6bii2, #s6biii2").css("margin-top","0em");
		$("#s6bi2, #s6bii2, #s6biii2").css("padding-top","0em");
		$(".hbtn").css("padding","0em 0em");
		/*the Recent News image has a standard size 300x300px, it
		is the background-image of the divs with id s6bi1a, s6bii1a, 
		and s6biii1a, for the background-image to be fully displayed,
		they require a height of 21em at our assumed full windows 
		width of common monitors 1366px by 768px. By trial and error
		we discovered at minimal screen width, they
		display fully at height 9em.*/
		$("#s6bi1a, #s6bii1a, #s6biii1a").css("height","9em");
		
		/* additional modifications to "Announcement" section
		to make more responsive.
		change their widths to occupy all available window 
		space in that manner even the their texts content reflow
		to occupy the whole screen width on smaller windows*/
		$("#s5bi, #s5bii, #s5biii").css("width","100%");
		/*to reduce vertical scroll length increased by vertical
		spaces normalize heights of lines, and zero all top 
		margins and paddings of all id and class selectors applied
		to divs stacked up atop each other.*/
		$("#s5bi1d, #s5bii1d, #s5biii1d").css("padding-top","0em");
		$("#s5bi2, #s5bii2, #s5biii2").css("margin-top","0em");
		$("#s5bi2, #s5bii2, #s5biii2").css("padding-top","0em");
	}
	/*diff < refvalue means the window was downsized and 
	diff >= refvalue means the window was upsized
	if window upsizes
	1. keep s4b beside s4a
	2. return s4a background image to original css position
	3. fix s4a background image
	4. return the height of s4a to original css height
	5. return the s3a and s3b side by side
	6. return the s1 background image to original css size
	7. return s1 to original height*/
	/*new code: remove the Math.abs()*/
	if(diff>=refvalue){
		//alert("diff>"+diff);
		//keep s4b beside s4a
		$("#s4a").css("display","inline-block");
		$("#s4a").css("width","50%");
		$("#s4b").css("display","inline-block");
		$("#s4b").css("width","50%");
		$("#s4a").css("float","left"); 
		$("#s4a").css("clear","both");
		//return s4a background image to original css position
		$("#s4a").css("background-size","contain");
		$("#s4a").css("background-position","-13em 7em");
		//fix s4a background image
		$("#s4a").css("background-attachment","fixed");
		//return the height of s4a to original css height
		$("#s4a").css("height","30rem");
		
		/*new code change back s4c div's padding-left from 1% to 15%*/
		$("#s4c").css("padding-left","15%");
		
		//adjust the s3a and s3b to stay one on top
		$("#s3a").css("display","inline-block");
		$("#s3a").css("width","35%");
		$("#s3a").css("padding-left","15%");
		$("#s3b").css("display","inline-block");
		$("#s3b").css("padding-left","0%");
		$("#s3b").css("width","42%");
		$("#s3b").css("padding-right","6%");
		//return s1 background image to original size
		$("#s1").css("background-size","cover");
		//return s1 to original height
		$("#s1").css("height",s1h);
		/* 
		new code to remove the top displacement added to the 
		image Carousel in s1 div in order to keep it visible 
		as window resizes
		*/
		$("#s1").css("background-position","center center");
		/*
		new code to hide the sidebar button on windows maximize
		*/
		$("#menu_btn").css("display","none");
		$("#s0b").css("display","none");
		$("#s0a").css("width","100%");
		$("#s1bii").css("display","block");
		
		/*change the display:block properties of divs 
		that should keep multiple divs parallel in section 5
		to flex on window upsize*/
		$("#s5b").css("display","flex");
		$("#s5bi2, #s5bii2, #s5biii2").css("display","flex");
		
		/*Revert the change of the property:value pair 
		display:block; to display:flex; in the id selectors 
		applied to divs that should keeping multiple divs 
		parallel in Recent News section on window upsize
		in order to enable div stacking one atop another.
		Those id selectors are #s6b and #s6bi2 applied to divs
		with s6b and s6bi2 respectively*/
		$("#s6b").css("display","flex");
		$("#s6bi2, #s6bii2, #s6biii2").css("display","flex");
		/*change their widths to original CSS values*/
		$("#s6b").css("width","auto");
		$("#s6bi, #s6bii, #s6biii").css("width","27%");
		$("#s6a").css("width","98%");
		/*since, we are dealing with a larger window, return
		all alignments to original CSS document values.*/
		$("#s6bii, #s6biii").css("margin-left","3em");
		$("#s6bi, #s6bii, #s6biii").css("text-align","center");
		$("#s6a").css("text-align","center");
		/*return vertical spaces to original CSS document values.*/
		$("#s6a").css("line-height","10em");
		$("#s6bi1a, #s6bii1a, #s6biii1a").css("height","21em");
		$("#s6bi1b, #s6bii1b, #s6biii1b").css("margin-top","2em");
		$("#s6bi2, #s6bii2, #s6biii2").css("margin-top","2.2em");
		$("#s6bi2, #s6bii2, #s6biii2").css("padding-top","1.8em");
		$("#s6bi1d, #s6bii1d, #s6biii1d").css("padding-top","2.2em");
		$(".hbtn").css("padding","1em 2.2em");
		
		/*return all modifications to "Announcment section" divs to
		original CSS document values*/
		$("#s5bi, #s5bii, #s5biii").css("width","27%");
		$("#s5bi1d, #s5bii1d, #s5biii1d").css("padding-top","2.2em");
		$("#s5bi2, #s5bii2, #s5biii2").css("margin-top","1rem");
		$("#s5bi2, #s5bii2, #s5biii2").css("padding-top","1rem");
	}
}
/*new code menu bar*/

function showSubMenuLevel1(subMenuL1Id){
	$("#"+subMenuL1Id).css("display","block");
}
function hideSubMenuLevel1(subMenuL1Id,subMenuL2Id){
	$("#"+subMenuL1Id).css("display","none");
	$("#"+subMenuL2Id).css("display","none");
}
/*
A function is a unit of code that may receives 0 or more inputs, 
The function showSubMenu takes 3 parameters or inputs (imagine the ATM Machine as a function, the ATM card, the ATM PIN, and all other options selected as input or parameters, the validating and processing as the body of the function, and the release of cash as the output or end-result of the function.

-subMenuId is id of submenu div without the #,
-menuId is the id of the current menu on focus,
-parentId is the id of the parent menu of the current menu,
*/
function showSubMenuLevel2(subMenuId,menuId,parentId){
	//alert($("#"+subMenuId).css("position"));
	$("#"+menuId).css("background-color","#393939");
	$("#"+menuId).css("color","#bb9729");
	$("#"+menuId).css("position","relative");
	$("#"+subMenuId).css("display","block");
	$("#"+subMenuId).css("position","absolute");
	$("#"+parentId).css("display","block");
	//var menuIdPos = document.getElementById(parentId).getBoundingClientRect();/*findPos(document.getElementById(menuId));*/
	//alert($('#subjects-menu').css('display'));
	var x=document.getElementById(parentId).offsetLeft;
	var y=document.getElementById(menuId).offsetTop;
	//alert(" menuIdPos x="+menuIdPos.x+" menuIdPos y="+menuIdPos.y);
	//alert("x="+x+" y="+y);
	var nx=$("#"+parentId).outerWidth();
	var ny=$("#"+menuId).outerHeight();
	//var snx=x+nx;
	//var mf = 0; //multiplication factor
	//var sny=y/*+(ny*mf)*/;
	//alert("nx="+nx+" ny="+ny);
	$("#"+subMenuId).css("left",nx);
	$("#"+subMenuId).css("top",y);
	//$("#"+subMenuId).css("width","auto");
	//$("#"+menuId).css("z-index",$("#"+subMenuId).css("z-index"));
	//$("#"+subMenuId).css("z-index",-3);
	//alert($("#"+subMenuId).css("z-index"));
	showParentMenu(menuId,menuId,parentId);
}
function hideSubMenuLevel2(subMenuL2Id,menuL2Id){
	$("#"+menuL2Id).css("background-color","#1f1f1f");
	$("#"+menuL2Id).css("color","#6c392c");
	$("#"+subMenuL2Id).css("display","none");
}
function hideMenu(menuL3Id,menuL2Id,menuL1Id){
	$("#"+menuL2Id).css("background-color","#1f1f1f");
	$("#"+menuL2Id).css("color","#6c392c");
	$("#"+menuL3Id).css("display","none");
	$("#"+menuL1Id).css("display","none");
}
function showParentMenu(menuId,menuL2Id,menuL1Id){
	$("#"+menuId).css("display","block");
	$("#"+menuL2Id).css("background-color","#393939");
	$("#"+menuL2Id).css("color","#bb9729");
	$("#"+menuL1Id).css("display","block");
}
/* new code: visibility of sidebar*/
function processSideBar(){
	/*
	retrieve the sidebar s0b display property.
	if it has the value "none", set it to inline-block
	(i.e., visible). 
	Once it is visible, set the width of s0a and s0b 
	to 50% 
	else set s0b's display property to "none" and revert s0a's width to 100%
	*/
	var sideBarIsVisible = $("#s0b").css("display");
	if(sideBarIsVisible=="none"){
		$("#s0b").css("display","inline-block");
		$("#s0b").css("width","50%");
		$("#s0a").css("width","50%");
	}else{
		$("#s0b").css("display","none");
		$("#s0a").css("width","100%");
	}
}
/*new code: CSS class visibility
this function receives an array of css class selectors
as classnames, the first css class selector accessible
as $("."+classnames[0]), and is set visible accordingly
$("."+classnames[0]).css("display","block")

via a for-loop, the rest of the class selectors are 
set invisible
*/
function toggleCSSClassVisibility(classnames){
	//alert(classnames.length);
	var i =1;
	for (;i < classnames.length; i++) {
  		$("."+classnames[i]).css("display","none");
	}
	$("."+classnames[0]).css("display","block");
}
function setContainerSizeWithImageSize(thisContainer,thisImage){
	alert($(thisImage).css("width"));
	$(thisContainer).css("width",""+$(thisImage).css("width")+"");
	$(thisImage).css("height",""+$(thisImage).css("height")+"");
	//alert($(thisImage).css("width"));
}