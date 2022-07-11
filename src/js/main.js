@@include("./lib/jquery.fancybox.min.js")
@@include("./lib/wpcf7.js")
@@include("./lib/select.js")
/*end of inludes*/


$(document).ready(function () {

	$(window).on("wl_resize", function (event, ww) {
		console.log("some_code");
	});

});