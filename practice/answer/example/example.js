var module = [
	{
		'title': 'Reservation / ticketing',
		'links': ['上看见分厘卡军事对抗疗法集散地立刻解放上课JFK老师的讲课浪费的时间考虑', 'bbb', 'ccc', 'ccc']
	}, {
		'title': 'Reservation / ticketing 2',
		'links': ['ccc', 'eee', 'fff']
	},
	{
		'title': 'Reservation / ticketing 3',
		'links': ['ggg', 'hhh', 'iii']
	}];
var loading = 0;

// load data
$(document).ready(function () {
	//建议做成拓展，基于module变量的数组长度去自动生成适应长度的module。不是固定3modules
	//适用不同长度的数据。。
	for (let i = 0; i < module.length; i++) {
		let list = "";
		for (item in module[i].links) {			//数组遍历用item of array
			list = list + "<li>" + module[i].links[item] + "</li>";//module[i].links[item] ===> item
		}													//li 也用上bootstrap布局

		$('.module' + (i + 1)).html("<p>" + module[i].title + "</p> <ul>" + list + "</ul>");
	}
});

// turn on/off loading

//基于切换loading效果会同时打开cover层
// function operateLoading(needCloseCover) {
// 	if ($('.cover').css('display') == 'block' && needCloseCover) {
// 		$('.cover').css('display', 'none');
// 		$('.loading1').css('display', 'none');
// 		$('.loading2').css('display', 'none');
// 	}else {
// 		$('.cover').css('display', 'block');
// 		if (loading == 0) {
// 			$('.loading1').css('display', 'block');
// 			$('.loading2').css('display', 'none');
// 		} else {
// 			$('.loading1').css('display', 'none');
// 			$('.loading2').css('display', 'block');
// 		}
// 	}
// }
// $('.button1').click(function () {
// 	console.log('button1 click');
// 	operateLoading(true);
// });

// // switch loading
// $('.button2').click(function () {
// 	loading = loading == 0 ? 1 : 0;
// 	operateLoading(false);
// });


//基于切换loading效果就是切换下Loading，不会show出来
//常用的DOM元素查找，可以用变量存储下来，下次再用就不需要走$的查找流程了
// var cover = $('.cover');
function operateLoading() {
	if ($('.cover').css('display') == 'block') {
		$('.cover').css('display', 'none');
		$('.loading1').css('display', 'none');
		$('.loading2').css('display', 'none');
	}else {
		$('.cover').css('display', 'block');
		switchLoading();
	}
}

function switchLoading() {
	if($('.cover').css('display') == 'block') {
		if (loading == 0) {
			$('.loading1').css('display', 'block');
			$('.loading2').css('display', 'none');
		} else {
			$('.loading1').css('display', 'none');
			$('.loading2').css('display', 'block');
		}
	}
}
$('.button1').click(function () {
	console.log('button1 click');
	operateLoading();
});

// switch loading
$('.button2').click(function () {
	loading = loading == 0 ? 1 : 0;
	switchLoading();
});



// $('.button1').click(function () {
// 	console.log('button1 click');
// 	if ($('.cover').css('display') == 'block') {
// 		$('.cover').css('display', 'none');
// 		$('.loading1').css('display', 'none');
// 		$('.loading2').css('display', 'none');
// 	} else {
// 		$('.cover').css('display', 'block');
// 		if (loading == 0) {
// 			$('.loading1').css('display', 'block');
// 		} else {
// 			$('.loading2').css('display', 'block');
// 		}
// 	}

// });

// // switch loading
// $('.button2').click(function () {
// 	if (loading == 0) {
// 		loading = 1;
// 		$('.loading1').css('display', 'none');
// 		$('.loading2').css('display', 'block');
// 	} else {
// 		loading = 0;
// 		$('.loading1').css('display', 'block');
// 		$('.loading2').css('display', 'none');
// 	}
// });


