$('#data-show').on('click',function(){
	$('.mui-chart-item').hide();
	$('.mui-content div').remove();
	var htmlchart = '<div class="charts-content"><div class="mui-card"><div class="mui-card-header"><h3>各渠道{{:week}}折线图</h3></div><div class="mui-card-content"><div id="main" style="width: 100%;height:350px;">body</div></div><div class="mui-card-footer"><div id="footer" style="width: 100%;height:80px;">footer</div></div></div></div>';
	$('.mui-content').append(htmlchart);
	var myChart = echarts.init(document.getElementById('main'));
	option = {
	    // title: {
	    //     text: '折线图堆叠',
	    //     left: '10'
	    // },
	    tooltip: {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎'],
	        top: '2%',
	        left: '3%'
	    },
	    grid: {
	    	top: '20%',
	        left: '2%',
	        right: '5%',
	        bottom: '3%',
	        containLabel: true
	    },
	    toolbox: {
	        feature: {
				    magicType: {
				        type: ['line', 'bar', 'stack', 'tiled']
				    }
	        },
	        top: '12%',
	        right: '3%'
	    },
	    xAxis: {
	        type: 'category',
	        boundaryGap: false,
	        data: ['周一','周二','周三','周四','周五','周六','周日']
	    },
	    yAxis: {
	        type: 'value'
	    },
	    series: [
	        {
	            name:'邮件营销',
	            type:'line',
	            stack: '总量',
	            data: [1,2,3,4,5,6]
	        },
	        {
	            name:'联盟广告',
	            type:'line',
	            stack: '总量',
	            data:[220, 182, 191, 234, 290, 330, 310]
	        },
	        {
	            name:'视频广告',
	            type:'line',
	            stack: '总量',
	            data:[150, 232, 201, 154, 190, 330, 410]
	        },
	        {
	            name:'直接访问',
	            type:'line',
	            stack: '总量',
	            data:[320, 332, 301, 334, 390, 330, 320]
	        },
	        {
	            name:'搜索引擎',
	            type:'line',
	            stack: '总量',
	            data:[820, 932, 901, 934, 1290, 1330, 1320]
	        }
	    ]
	};
	myChart.setOption(option);
});