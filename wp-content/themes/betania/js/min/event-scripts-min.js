if($("body").hasClass("tribe-theme-betania")){var dateLabelConstruct=function(){var t=$(".tribe-events-list-separator-month");t.each(function(){var t=$(this).find("span"),a=t.text(),s=a.substring(0,3),e=a.split(" "),i=e[1],n='<div class="month-name">'+s+'</div><div class="year">'+i+"</div>";$(this).html("<span>"+n+"</span>").css("visibility","visible")})};dateLabelConstruct(),$(document).ajaxStart(function(){dateLabelConstruct()}),$(document).ajaxComplete(function(){dateLabelConstruct()})}