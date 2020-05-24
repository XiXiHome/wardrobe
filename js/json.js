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
}]
window.onload = function() {
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
		}else{
			boxsStr += '<div class="sale-box1"><span class="on_sale title_shop">Sale</span></div>';
		}
		boxsStr += '<div class="price">';
		boxsStr += '<div class="cart-left">';
		boxsStr += '<p class="title" style="font-size: 13px;"></p>';
		boxsStr += '<div class="price1">';
		boxsStr += '<span class="actual">'+mainJson[i].price+'</span>';
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
