//import table templ
var sloganTmpl = $.templates('<h5 class="mui-content-padded">{{:total_day}}</br>新增关注总数{{:xinzeng}}人，取消关注总数{{:liushi}}人</h5>');

var tableTmpl = $.templates("<h5 class='table-name'>{{:title}}:{{:sec_title}}  </h5><div class='table-responsive'><table class='table table-striped'><thead></thead><tbody></tbody></table></div>");

var tableHeaderTmpl = $.templates("<tr><th>{{:style}}</th><th>{{:present}}</th><th>{{:target}}</th><th>{{:where}}</th></tr>");

var tableBodyTmpl = $.templates("<tr><td>{{:dimen}}</td><td>{{:data}}</td><td>{{:target}}</td><td>{{:where}}</td></tr>");

var laiyuanHeaderTmpl = $.templates("<tr><th>{{:style}}</th><th>{{:present}}</th><th>{{:target}}</th></tr>");

var laiyuanBodyTmpl = $.templates("<tr><td>{{:path}}</td><td>{{:user}}</td><td>{{:bangding}}</td></tr>");
	//render table header
	var tableJSON = $.getJSON('table.json', function(json, textStatus) {
		//read table title&thead
		var UpDown = tableTmpl.render(json.table[0].xinzeng);
    var LaiYuan = tableTmpl.render(json.table[0].laiyuan);
		var DOU = tableTmpl.render(json.table[0].DOU);
		var ARPU = tableTmpl.render(json.table[0].ARPU);
		var UseAge = tableTmpl.render(json.table[0].useage);
    var KeHu = tableTmpl.render(json.table[0].kehu);
		var PinPai = tableTmpl.render(json.table[0].pinpai);
		var Device = tableTmpl.render(json.table[0].device);

		var updownHeader = json.table[0].xinzeng.thead;
    var laiyuanHeader = json.table[0].laiyuan.thead;
		var douHeader = json.table[0].DOU.thead;
		var arpuHeader = json.table[0].ARPU.thead;
		var useageHeader = json.table[0].useage.thead;
    var kehuHeader = json.table[0].kehu.thead;
		var pinpaiHeader = json.table[0].pinpai.thead;
		var deviceHeader = json.table[0].device.thead;

		//render xinzeng header
		$("#updown").html(UpDown);
		var UpDownHeader = tableHeaderTmpl.render(updownHeader);
		$("#updown thead").html(UpDownHeader);

    //render laiyuan header
    $("#laiyuan").html(LaiYuan);
    var LaiYuanHeader = laiyuanHeaderTmpl.render(laiyuanHeader);
    $("#laiyuan thead").html(LaiYuanHeader);

		//ARPU header
		$("#ARPU").html(ARPU);
		var ARPUHeader = tableHeaderTmpl.render(arpuHeader);
		$("#ARPU thead").html(ARPUHeader);

		//dou header
		$("#DOU").html(DOU);
		var DOUHeader = tableHeaderTmpl.render(douHeader);
		$("#DOU thead").html(DOUHeader);

		//useage header
		$("#useage").html(UseAge);
		var UseAgeHeader = tableHeaderTmpl.render(useageHeader);
		$("#useage thead").html(UseAgeHeader);

    //useage header
    $("#kehu").html(KeHu);
    var KeHuHeader = tableHeaderTmpl.render(kehuHeader);
    $("#kehu thead").html(KeHuHeader);

		//pinpai table
		$("#pinpai").html(PinPai);
		var PinPaiHeader = tableHeaderTmpl.render(pinpaiHeader);
		$("#pinpai thead").html(PinPaiHeader);

		//device table
		$("#device").html(Device);
		var DeviceHeader = tableHeaderTmpl.render(deviceHeader);
		$("#device thead").html(DeviceHeader);

    return json;
	});


function renderDouData(tab) {
    // get tab data
    var douData = [];
    var douJson = {};
    var douArray = [];
    console.log('do renderData');
    //save dimen and data 
    var douDimen = ["小于30m", "从30到50m", "从50到100m", "从100到300m", "从300到500m", "从500m到1g", "从1g到2g", "从2g到5g", "从5g到10g", "大于10g", "空dou"];
    for(i = 0;i < douDimen.length;i++){
      douData.push(tab.msg[0][douDimen[i].split('""')]);
      //reset data
      douJson = {"dimen": douDimen[i], "data": douData[i]};
      douArray.push(douJson);
    }
    //render view
    var DOUBody = tableBodyTmpl.render(douArray);
    $("#DOU tbody").html(DOUBody);

    //render sec_title
    $("#DOU .table-name").html('DOU分层：人均DOU  (' + tab.msg[0]["人均dou"] + ')');
  }


var totalXinZeng;
var totalLiuShi;
function renderUpDownData(tab, tabName) {
    // get tab data
    var updownData = [];
    var updownJson = {};
    var updownArray = [];
    console.log('do renderData');
    //save dimen and data 
    if(tabName == 'WX_TOTAL_DAY_xinzeng'){
      var updownDimen = ["新增关注总数", "新增绑定去重总数"];
      totalXinZeng = tab.msg[0]["新增关注总数"];
      $("#updown .table-name").html('新增关注情况');
    } else {
      updownDimen = ["取消关注总数", "取关中绑定去重总数"];
      totalLiuShi = tab.msg[0]["取消关注总数"];
      $("#updown .table-name").html('取消关注情况');
    }

    for(i = 0;i < updownDimen.length;i++){
      updownData.push(tab.msg[0][updownDimen[i].split('""')]);
      //reset data
      updownJson = {"dimen": updownDimen[i], "data": updownData[i]};
      updownArray.push(updownJson);
    }
    //render view
    var UpDownBody = tableBodyTmpl.render(updownArray);
    $("#updown tbody").html(UpDownBody);
    //render slogan
    var sloganData = {"total_day": tab.msg[0]["total_day"], "xinzeng": totalXinZeng, "liushi": totalLiuShi};
    var Slogan = sloganTmpl.render(sloganData);
    $(".slogan").html(Slogan);
  }


function renderArpuData(tab) {
	// get tab data
    var arpuData = [];
    var arpuJson = {};
    var arpuArray = [];
    console.log('do renderData');
    //save dimen and data 
    var arpuDimen = ["小于5", "从5到10", "从10到20", "从20到50", "从50到100", "从100到200", "大于200", "空arpu"];
    for(i = 0;i < arpuDimen.length;i++){
      arpuData.push(tab.msg[0][arpuDimen[i].split('""')]);
      //reset data
      arpuJson = {"dimen": arpuDimen[i], "data": arpuData[i]};
      arpuArray.push(arpuJson);
    }
    //render view
    var ArpuBody = tableBodyTmpl.render(arpuArray);
    $("#ARPU tbody").html(ArpuBody);

    //render sec_title
    $("#ARPU .table-name").html('ARPU分层：人均ARPU  (' + tab.msg[0]["人均arpu"] + ')');
}

function renderKeHuData(tab) {
  //get tab data
  var kehuData = [];
  var kehuJson = {};
  var kehuArray = [];
  console.log('do render');
  //save dimen and data
  var kehuDimen = ["高校用户数", "集团用户数", "公众用户数", "新激活用户数", "空类型"];
  for(i = 0;i < kehuDimen.length;i++){
      kehuData.push(tab.msg[0][kehuDimen[i].split('""')]);
      //reset data
      kehuJson = {"dimen": kehuDimen[i], "data": kehuData[i]};
      kehuArray.push(kehuJson);
  }
  //render view
  var KeHuBody = tableBodyTmpl.render(kehuArray);
  $("#kehu tbody").html(KeHuBody);
}

function renderPinPaiData(tab) {
	// get tab data
    var pinpaiData = [];
    var pinpaiJson = {};
    var pinpaiArray = [];
    console.log('do renderData');
    //save dimen and data 
    var pinpaiDimen = ["全球通", "神州行", "动感地带"];
    for(i = 0;i < pinpaiDimen.length;i++){
      pinpaiData.push(tab.msg[0][pinpaiDimen[i].split('""')]);
      //reset data
      pinpaiJson = {"dimen": pinpaiDimen[i], "data": pinpaiData[i]};
      pinpaiArray.push(pinpaiJson);
    }
    //render view
    var PinPaiBody = tableBodyTmpl.render(pinpaiArray);
    $("#pinpai tbody").html(PinPaiBody);
}

function renderUseAgeData(tab) {
	// get tab data
    var useageData = [];
    var useageJson = {};
    var useageArray = [];
    console.log('do renderData');
    //save dimen and data 
    var useageDimen = ["小于3个月", "从3到6个月", "从6到12个月", "从1到3年", "从3到5年", "从5到10年", "大于10年", "空网龄"];
    for(i = 0;i < useageDimen.length;i++){
      useageData.push(tab.msg[0][useageDimen[i].split('""')]);
      //reset data
      useageJson = {"dimen": useageDimen[i], "data": useageData[i]};
      useageArray.push(useageJson);
    }
    //render view
    var UseAgeBody = tableBodyTmpl.render(useageArray);
    $("#useage tbody").html(UseAgeBody);

    //render sec_title
    $("#useage .table-name").html('网龄分层：人均网龄  (' + tab.msg[0]["人均网龄"] + ')');
}

function renderDeviceData(tab) {
	// get tab data
    var deviceData = [];
    var deviceJson = {};
    var deviceArray = [];
    console.log('do renderData');
    //save dimen and data 
    var deviceDimen = ["苹果", "小米", "三星", "华为", "其他"];
    for(i = 0;i < deviceDimen.length;i++){
      deviceData.push(tab.msg[0][deviceDimen[i].split('""')]);
      //reset data
      deviceJson = {"dimen": deviceDimen[i], "data": deviceData[i]};
      deviceArray.push(deviceJson);
    }
    //render view
    var DeviceBody = tableBodyTmpl.render(deviceArray);
    $("#device tbody").html(DeviceBody);
}

  function renderLaiYuanData(laiyuan) {
    //get data
    var laiyuanData = laiyuan.msg;
    var laiyuanJson = {};
    var laiyuanArray = [];
    console.log('do renderData');
    //save data
    for(i = 0;i < laiyuanData.length;i++){
      laiyuanJson = {"path": laiyuan.msg[i]["新来源"], "user": laiyuan.msg[i]["用户数"], "bangding": laiyuan.msg[i]["绑定号码数"]};
      laiyuanArray.push(laiyuanJson);
    }
    //render view
    var LaiYuanBody = laiyuanBodyTmpl.render(laiyuanArray);
    $("#laiyuan tbody").html(LaiYuanBody);
  }