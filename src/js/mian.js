$(function(){		
	$("#pane2 , #pane3").hide();
	$("li[id^=tab]").click(function() {
		var oTabid = $(this).attr("id").substring(3);
		var oPaneid = "pane"+oTabid;
		var flag=$(this).hasClass('active');
		if( !flag ){
			$(this).addClass('active')
			           .siblings("li").removeClass('active');
			 $("#"+oPaneid).show()
			                    .siblings("div").hide();
		}
	});
	$(".mr_legend li").click(function(){
		$(this).addClass('disabled');
	});
});
function showLocale(objD,dort)
{
	var str;
	var yy = objD.getYear();
	if(yy<1900) yy = yy+1900;
	var MM = objD.getMonth()+1;
	if(MM<10) MM = '0' + MM;
	var dd = objD.getDate();
	if(dd<10) dd = '0' + dd;
	var hh = objD.getHours();
	if(hh<10) hh = '0' + hh;
	var mm = objD.getMinutes();
	if(mm<10) mm = '0' + mm;
	var ss = objD.getSeconds();
	if(ss<10) ss = '0' + ss;
	var ww = objD.getDay();
	if  (ww==0)  ww="周日";
	if  (ww==1)  ww="周一";
	if  (ww==2)  ww="周二";
	if  (ww==3)  ww="周三";
	if  (ww==4)  ww="周四";
	if  (ww==5)  ww="周五";
	if  (ww==6)  ww="周六";
	if(dort=='d') str =yy + "年" + MM + "月" + dd + "日"  + "  " + ww ;
	if(dort=='t') str=hh + ":" + mm;
	return(str);
}
function tick()
{
	var today;
	today = new Date();
	document.getElementById("showtime").innerHTML = showLocale(today,'t');
	document.getElementById("showdate").innerHTML = showLocale(today,'d');
	window.setTimeout("tick()", 1000);
}
tick();