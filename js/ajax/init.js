$(document).ready(function() {
  var url;
  var tab;
  var laiyuan;
  var tabName;
  var lyTabName;
  var totalDay;
  var searchDate;
  
  //date format hacking
  Date.prototype.format = function(format) {
    var o = {
      "M+": this.getMonth() + 1, //month
      "d+": this.getDate() - 1, //day
      "h+": this.getHours(), //hour
      "m+": this.getMinutes(), //minute
      "s+": this.getSeconds(), //second
      "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
      "S": this.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
          RegExp.$1.length == 1 ? o[k] :
          ("00" + o[k]).substr(("" + o[k]).length));
    return format;
  }

  //index ajax
  url = 'http://120.76.29.164:8888/wxdata/webserver?servicename=QueryTotalDataService';
  tabName = 'WX_TOTAL_DAY_xinzeng';
  lyTabName = 'wx_total_day_laiyuan_xinzeng';
  var today = new Date();
  totalDay = today.format('yyyyMMdd');
  console.log(totalDay);
  Ajax(url, totalDay, tabName);

  //query by searchDate
  $('#search').on('click', function() {
    searchDate = $('#result').text();
    var reg = /-/g;
    totalDay = searchDate.replace(reg, '');
    console.log(totalDay);
    totalXinZeng = '';
    totalLiuShi = '';
    Ajax(url, totalDay, tabName);
  })

  //change tabName : re-render
  $('#menu .add').on('tap', function(){
    tabName = 'WX_TOTAL_DAY_xinzeng';
    lyTabName = 'wx_total_day_laiyuan_xinzeng';
    $('#menu .lost').removeClass('tab-selected');
    $(this).addClass('tab-selected');
    Ajax(url, totalDay, tabName);
  });
  $('#menu .lost').on('tap', function(){
    tabName = 'WX_TOTAL_DAY_LIUSHI';
    lyTabName = 'wx_total_day_laiyuan_liushi';
    $('#menu .add').removeClass('tab-selected');
    $(this).addClass('tab-selected');
    Ajax(url, totalDay, tabName);
  });

    function Ajax(url, totalDay, tabName) {
      $.ajax({
        url: url,
        type: 'post',
        cache: false,
        dataType: 'json',
        async: true,
        data: {'totalDay': totalDay,'tabName': tabName},
        success: function(json) {
          tab = json;
          return tab;
        },
        error: function(json) {
          alert("发送请求失败");
        },
        complete: function(status){
          console.log(status.statusText);
          if(status.statusText == 'ok', 
            renderUpDownData(tab, tabName),
            renderDouData(tab),
            renderArpuData(tab),
            renderKeHuData(tab),
            renderPinPaiData(tab),
            renderUseAgeData(tab),
            renderDeviceData(tab),
            laiyuanAjax(url, totalDay, lyTabName)
            );
        }
      });
    }


    function laiyuanAjax(url, totalDay, lyTabName) {
      $.ajax({
        url: url,
        type: 'post',
        cache: false,
        dataType: 'json',
        async: true,
        data: {'totalDay': totalDay, "tabName": lyTabName},
        success: function(json) {
          laiyuan = json;
          return laiyuan;
        },
        error: function(laiyuan) {
          alert("发送来源请求失败");
        },
        complete: function(status){
          if(status.statusText == 'ok',
            renderLaiYuanData(laiyuan));
        }
      });
    }
});