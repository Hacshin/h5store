$(document).ready(function(){
	//hide table
	$('.mui-time-item').hide();
	$('.mui-chart-item').hide();
	$('.mui-dtpicker').hide();
	$('.mui-icon-left-nav').hide();
	
	//click a time-table
	$('#time-table').on('tap',function(){
		$('.mui-chart-item').hide();
		$('.mui-time-item').toggle();
		$('.mui-icon-home').addClass('mui-icon-home-filled');
		$('.mui-icon-gear').removeClass('mui-icon-gear-filled');
	});
	
	//click a chart-table
	$('#chart-table').on('tap',function(){
		$('.mui-time-item').hide();
		$('.mui-chart-item').toggle();
		$('.mui-icon-gear').addClass('mui-icon-gear-filled');
		$('.mui-icon-home').removeClass('mui-icon-home-filled');
	});
	
	//click button select-time
	$('#select-time').on('click',function(){
		$('.mui-dtpicker').show();
	});
	
	//click button search
	$('#search').on('click',function(){
		$('.mui-time-item').hide();
	});
	
	//click button compare
	$('#data-compare').on('click',function(){
		$('#data-compare').addClass('mui-active');
		$('#data-show').removeClass('mui-active');
	});

//click button show
	$('#data-show').on('click',function(){
		$('#data-show').addClass('mui-active');
		$('#data-compare').removeClass('mui-active');
	});
	
	//show back icon
	$('#data-compare,#data-show').on('click', function(){
		$('.mui-icon-left-nav').show();
		$('.mui-icon-bars').hide();
	});
	
	//hide icon cancle button active
	$('.mui-icon-left-nav').on('click', function(){
		$('.mui-icon-left-nav').hide();
		$('#data-compare,#data-show').removeClass('mui-active');
	});
});