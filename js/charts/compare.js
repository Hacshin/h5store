$(document).ready(function(){
	$('#data-compare').on('click',function(){
		$('.mui-chart-item').hide();
		$('.mui-content div').remove();
		var htmlchart = '<div class="charts-content"><div class="mui-card"><div class="mui-card-header"><h3>{{:date}}各渠道新增对比图</h3></div><div class="mui-card-content"><div id="main" style="width: 100%;height:350px;">body</div></div><div class="mui-card-footer"><div id="footer" style="width: 100%;height:80px;">footer</div></div></div></div>';
		$('.mui-content').append(htmlchart);
    // 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('main'));
		option = {
			// title: {
			//     text: '对比图',
			//     left: '10'
			// },
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    legend: {
		        data:['今日关注', '新增', '流失'],
		        top: '5',
		        right: '4%',
		        itemHeight: '16',
		        textStyle: {
		        	fontSize: '14'
		        }
		    },
		    toolbox: {
		    	show: true
		    },
		    grid: {
		    	left: '3%',
		    	right: '5%',
		    	top: '10%',
		    	bottom: '3%',
		      containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'value'
		        }
		    ],
		    yAxis : [
		        {
		            type : 'category',
		            axisTick : {show: false},
		            data : ['集团','App','微厅','微店','红包','红包']
		        }
		    ],
		    series : [
		        {
		            name:'今日关注',
		            type:'bar',
		            label: {
		                normal: {
		                    show: true,
		                    position: 'inside'
		                }
		            },
		            data:[200, 170, 240, 244, 200, 220]
		        },
		        {
		            name:'新增',
		            type:'bar',
		            stack: '总量',
		            label: {
		                normal: {
		                    show: true
		                }
		            },
		            data:[320, 302, 341, 374, 390, 450]
		        },
		        {
		            name:'流失',
		            type:'bar',
		            stack: '总量',
		            label: {
		                normal: {
		                    show: true,
		                    position: 'left'
		                }
		            },
		            data:[-120, -132, -101, -134, -190, -230]
		        }
		    ]
		};
				
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);        
		});
});
