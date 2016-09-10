$(document).ready(function() {
	var sidebar = '<div class="title">电子渠道每日报表</div><div class="content"></div><div class="catalog">渠道列表</div><ul id="offCanvasHide" class="mui-table-view mui-table-view-chevron mui-table-view-inverted"><li class="mui-table-view-cell"><a class="mui-navigate-right mui-selected">微厅</a></li></ul>';
	$('.mui-scroll-wrapper .mui-scroll').append(sidebar);

	var sidemenu = [{sidemenu: "APP客户端"}, {sidemenu: "福利红包"}, {sidemenu: "微店"}, {sidemenu: "商城"}];
	var sideTmpl = $.templates('#side');
	var catalog = sideTmpl.render(sidemenu);
	$('ul.mui-table-view.mui-table-view-chevron').append(catalog);

	//get index text to change titleName
	var titleName = $(".mui-selected").text();
	console.log(titleName);
	$('.mui-title').html(titleName + '日志报表');

	//change titleName
	$(".mui-navigate-right").on('click', function(){
		$("a").removeClass('mui-selected');
		$(this).addClass('mui-selected');
		titleName = $(".mui-selected").text();
		$('.mui-title').html(titleName + '日志报表');
		console.log(titleName);
	});

	mui.init();
			 //侧滑容器父节点
			var offCanvasWrapper = mui('#offCanvasWrapper');
			 //主界面容器
			var offCanvasInner = offCanvasWrapper[0].querySelector('.mui-inner-wrap');
			 //菜单容器
			var offCanvasSide = document.getElementById("offCanvasSide");
			 //移动效果是否为整体移动
			var moveTogether = false;
			 
			 //主界面‘显示侧滑菜单’按钮的点击事件
			document.getElementById('offCanvasShow').addEventListener('tap', function() {
				offCanvasWrapper.offCanvas('show');
			});
			 //菜单界面，‘关闭侧滑菜单’按钮的点击事件
			document.getElementById('offCanvasHide').addEventListener('tap', function() {
				offCanvasWrapper.offCanvas('close');
			});
			 //主界面和侧滑菜单界面均支持区域滚动；
			mui('#offCanvasSideScroll').scroll();
			mui('#offCanvasContentScroll').scroll();
});