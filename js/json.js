var mainJson = [{ 
"code" : "2023A" , 
"address" : "https://cbu01.alicdn.com/img/ibank/2020/691/900/15631009196_1537626798.600x600.jpg" ,
"isNew" : 1 ,
"name" : "森女风小黑裙" ,
"price" : "¥ 53"
},{ 
"code" : "5070" , 
"address" : "https://cbu01.alicdn.com/img/ibank/2020/018/361/15676163810_1537626798.600x600.jpg" ,
"isNew" : 1 ,
"name" : "蕾丝彩虹裙" ,
"price" : "¥ 49"
},{ 
"code" : "C6585" , 
"address" : "https://cbu01.alicdn.com/img/ibank/2020/804/525/15624525408_1537626798.600x600.jpg" ,
"isNew" : 1 ,
"name" : "领格子泡泡袖裙子" ,
"price" : "¥ 38"
},{ 
"code" : "5069" , 
"address" : "https://cbu01.alicdn.com/img/ibank/2020/543/923/15693329345_1537626798.600x600.jpg" ,
"isNew" : 1 ,
"name" : "民国风格子连衣裙" ,
"price" : "¥ 45"
},{ 
"code" : "5057" , 
"address" : "https://cbu01.alicdn.com/img/ibank/2020/420/868/14730868024_1537626798.600x600.jpg" ,
"isNew" : 1 ,
"name" : "海军领格子风背心裙" ,
"price" : "¥ 40"
},{ 
"code" : "5086" , 
"address" : "https://cbu01.alicdn.com/img/ibank/2020/731/689/15693986137_1537626798.600x600.jpg" ,
"isNew" : 1 ,
"name" : "复古拼接小碎花连衣裙" ,
"price" : "¥ 43"
},{ 
"code" : "5080A" , 
"address" : "https://cbu01.alicdn.com/img/ibank/2020/137/332/15671233731_1537626798.600x600.jpg" ,
"isNew" : 1 ,
"name" : "木耳边の吊带连衣裙" ,
"price" : "¥ 38"
},{ 
"code" : "7069" , 
"address" : "https://cbu01.alicdn.com/img/ibank/2020/488/102/15734201884_1537626798.600x600.jpg" ,
"isNew" : 1 ,
"name" : "宫廷风泡泡袖连衣裙" ,
"price" : "¥ 39"
},{ 
"code" : "B6335" , 
"address" : "https://cbu01.alicdn.com/img/ibank/2020/237/878/14866878732_1537626798.600x600.jpg" ,
"isNew" : 2 ,
"name" : "满天星公主亮片裙" ,
"price" : "¥ 58"
},{ 
"code" : "q5190703" , 
"address" : "https://cbu01.alicdn.com/img/ibank/2020/174/070/14837070471_1537626798.600x600.jpg" ,
"isNew" : 1 ,
"name" : "韩版INS套装连衣裙" ,
"price" : "格子裙¥ 37-背带裙¥ 39"
},{ 
"code" : "5668" , 
"address" : "https://cbu01.alicdn.com/img/ibank/2020/312/553/14907355213_1537626798.600x600.jpg" ,
"isNew" : 2 ,
"name" : "木耳边蓬蓬纱裙" ,
"price" : "¥ 40"
},{ 
"code" : "2009" , 
"address" : "https://cbu01.alicdn.com/img/ibank/2020/889/897/14725798988_1537626798.600x600.jpg" ,
"isNew" : 2 ,
"name" : "V领气质碎花裙" ,
"price" : "¥ 46"
},{ 
"code" : "2020" , 
"address" : "https://cbu01.alicdn.com/img/ibank/2020/367/492/14780294763_1537626798.600x600.jpg" ,
"isNew" : 2 ,
"name" : "太阳花无袖连衣裙" ,
"price" : "¥ 43"
},{ 
"code" : "5058" , 
"address" : "https://cbu01.alicdn.com/img/ibank/2020/897/921/14731129798_1537626798.600x600.jpg" ,
"isNew" : 2 ,
"name" : "樱花吊带连衣裙" ,
"price" : "¥ 37"
},{ 
"code" : "C26047" , 
"address" : "https://cbu01.alicdn.com/img/ibank/2020/205/545/14787545502_1537626798.600x600.jpg" ,
"isNew" : 2 ,
"name" : "油墨画小花连衣裙" ,
"price" : "¥ 36"
},{ 
"code" : "5060" , 
"address" : "https://cbu01.alicdn.com/img/ibank/2020/824/903/14691309428_1537626798.600x600.jpg" ,
"isNew" : 2 ,
"name" : "彩色菊花连衣裙" ,
"price" : "¥ 41"
}]
function check(){
	if(window.localStorage){
		var storage=window.localStorage;
		cleanStorage(storage);
		checkUser(storage);
	}
}
function checkUser(storage){
    var ip = getIpValue();
	var expires = storage.getItem(ip);
	if(null!=expires){//*同一个ip第二次进来*/
		var date = new Date();
		var difference  = date.getTime() - expires;
		var fenzhon = Math.floor((difference/1000/60) << 0);
		if(15<fenzhon){/*超过15分钟，重新加访问次数并更新访问时间*/
			storage.setItem(ip, date.getTime());
			count(storage);
		}
	}else{/*ip首次进来，加访问次数并添加访问键值对*/
		count(storage);
		var date = new Date();
		storage.setItem(ip, date.getTime());
	}
	show(storage);
}
/*计算访问次数*/
function count(storage){
	var counts = storage.getItem("counts");
	if(null==counts){
		storage.setItem("counts", 1);
	}else{
		if("888888888888888"==counts){
			storage.setItem("counts", 1);
		}else{
			counts++;
			storage.setItem("counts", counts);
		}
	}
}
function show(storage){
	$("#counts").html('<a>网站当前被访问：'+numFormat(storage.getItem("counts"))+' 次</a>&nbsp;');
}
/*添加千位分隔符*/
function numFormat(num){
  var res=num.toString().replace(/\d+/, function(n){ // 先提取整数部分
       return n.replace(/(\d)(?=(\d{3})+$)/g,function($1){
          return $1+",";
        });
  })
  return res;
}
/*IP地址处理*/
function getIpValue(){
	var ip = returnCitySN["cip"];
	var value = ip.replace(/\./g, "");
	return value;
}
/*清理*/
function cleanStorage(storage){
	var used = unescape(encodeURIComponent(JSON.stringify(localStorage))).length;
	var difference= 1024 * 1024 * 5 - used;
	if(difference<=40000){
		var counts = storage.getItem("counts");
		storage.clear();
		storage.setItem("counts", counts);
	}
}
window.onload = function() {
	check();
	var boxsStr = '';
	for (var i = 0; i < mainJson.length; i++) {
		boxsStr += '<div class="top-box">';
		boxsStr += '<div class="col_1_of_3 span_1_of_3">';
		boxsStr += '<a href="single.html?code='+mainJson[i].code+'">';
		boxsStr += '<div class="inner_content clearfix">';
		boxsStr += '<div class="product_image">';
		boxsStr += '<img src="'+mainJson[i].address+'" alt=""/>';
		boxsStr += '</div>';
		if(1==mainJson[i].isNew){
			boxsStr += '<div class="sale-box"><span class="on_sale title_shop">New</span></div>';
		}else if(0==mainJson[i].isNew){
			boxsStr += '<div class="sale-box1"><span class="on_sale title_shop">Sale</span></div>';
		}else{
			boxsStr += '';
		}
		boxsStr += '<div class="price">';
		boxsStr += '<div class="cart-left">';
		boxsStr += '<p class="title" style="font-size: 13px;">'+mainJson[i].name+'</p>';
		boxsStr += '<div class="price1">';
		if("q5190703"==mainJson[i].code){
			var prices = mainJson[i].price.split("-");
			boxsStr += '<span class="actual">'+prices[0]+'</span></br>';
			boxsStr += '<span class="actual">'+prices[1]+'</span>';
		}else{
			boxsStr += '<span class="actual">'+mainJson[i].price+'</span>';
		}
		
		boxsStr += '</div>';
		boxsStr += '</div>';
		boxsStr += '<div class="cart-right"> </div>';
		boxsStr += '<div class="clear"></div>';
		boxsStr += '</div>';
		boxsStr += '</div>';
		boxsStr += '</a>';
		boxsStr += '</div>';
		boxsStr += '</div>';
	}
	$("#boxs").html(boxsStr);
}
