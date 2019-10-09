(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js').attr('src', (dpi>1) ? 'images/e387ece8-9da4-4863-9866-b750963a2a34-540.jpeg' : 'images/e387ece8-9da4-4863-9866-b750963a2a34-270.jpeg');
$('.js-3').attr('src', (dpi>1) ? 'images/296002df-b754-4a5d-8cbf-2d81782959d1-736.jpeg' : 'images/296002df-b754-4a5d-8cbf-2d81782959d1-368.jpeg');};
if(!window.HTMLPictureElement){r();}
if(! document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
$('.js-4').attr('src', 'images/fb-30.png');

}
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-1')[0]);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-2')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});