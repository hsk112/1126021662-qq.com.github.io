//获取当前地址栏中的参数信息
var search=location.search
//获取大盒子对象
var box=document.querySelector(".panel")
var dt;
var num=1
var s=1;
//判断当前search对象中是否有值
if(search){
    //分割search字符串
    var id=search.split('=')[1];

    (async function(){
        dt=await promiseAjax({
            url:'../php/xiangqing.php',
            data:'id='+id,
            datatype:'json'
        })
        //创建拼接所有内容的字符串
        var str=`
        <div class="panel-heading">品详细信息</div>
        <div class="panel-body">
            <div class="media">
                <div class="media-left media-middle">
                
                <div class="box1">
               
                    <img class="media-object img1" src="${dt.imgUrl}" alt="..." >
                
                <div class="fangdajing"></div>
                </div>
                
                </div>
                <div class="media-body">
                <h3 class="media-heading">${dt.name}</h3>
                <h3>【保税发货】${dt.name}值得信赖的良心好产品</h3>
                <h5 style="color:red;">国民好品牌值得信赖</h5>
                <h5>商品编码:THT8177033</h5>
                <h5 style="color:red;">累计销量:9012</h5>
                <h4 style="color:red;">含税约:<h3>${dt.jiage}THB</h3>${dt.rmb}</h4>
                <br/><br/>
                <h5>促销:  满1500泰铢包邮 保税区任选3件包邮</h5>
                <br/><br/>
                <h5>发货仓:  宁波保税仓</h5>
                <br/><br/>
                 <div class="btn-group" id="btn" role="group" aria-label="...">
                    <button type="button" class="btn btn-default" data-id="${dt.id}" ${dt.num<=1?"disabled":''}>-</button>
                    <button type="button" class="btn btn-default"><span class="spans">${num}</span></button>
                    <button type="button" class="btn btn-default" data-id="${dt.id}">+</button>
                </div>
                <a href="./cart.html" class="btn btn-info">立即购买</a>
                <a class="btn btn-success">加入购物车</a>
                </div>
            </div>
            
            <div class="rightbox">
			<img src="${dt.imgUrl}" class="img2">
		    </div>
		    
            <ul class="nav nav-tabs">
                <li role="presentation" class="active"><a href="#">购物需知</a></li>
                <li role="presentation"><a href="#">商品详情</a></li>
                <li role="presentation"><a href="#">同类产品推荐</a></li>
            </ul>
           <p class="p1">
          <b><h3>泰海淘购物说明</h3></b>
           <h5>感谢光临泰海淘，在本站购物期间为避免因对我们的服务或商品有任何疑惑导致可能产生的误解，我们建议您预先阅览并清楚理解我们的服务条款及细则。当您进行购买即代表您已清楚并接受有关条款的内容。
                    如您在购物中有任何问题，请及时联系客服咨询详情。
                      泰海淘将持续完善服务，祝您购物愉快。</h5>
            <br/><br/>
            <b><h4>服务承诺 SERVICE COMMITMENT</h4></b>
            <h5>泰海淘是泰国kingpower王权免税集团旗下跨境海淘平台，精选王权免税店热销商品，涵盖食品、美妆、居家日用、个护、滋补、调味品、服饰等多个品类，
                             致力于让泰国好商品触手可及，让您足不出户轻松购遍泰国好货。泰海淘，泰好商品任你淘！
            </h5>
             <br/><br/>
             <b><h4>常见问题 COMMON PROBLEM </h4></b>
             <h5>Q: 可以开发票吗？</h5>
             <h5>A: 我们是海外公司，无法提供国内商家开具的发票，敬请谅解。</h5>
             <h5>Q: 店铺支持7天无理由退货吗？</h5>
             <h5>A: 鉴于跨境交易在物流、外汇、出入境方面的复杂性，泰海淘商品暂不支持7天无理由退换货。
                       若有任何问题，欢迎咨询我们的客服！</h5>
             <img src="https://upload.taihaitao.com/image/dd/a8/dda847e780172e901ca5d4dee8e31641.jpg">
           </p>
        </div>
        `
        //把当前内容添加到大盒子中
        box.innerHTML=str;
        //放大镜部分
        var fangdajing=document.querySelector(".fangdajing")
		var box1=document.querySelector(".box1")
		var rightbox=document.querySelector(".rightbox")
		var img1=document.querySelector(".img1")
		var img2=document.querySelector(".img2")
		function move1(e){
                     var y1=e.pageY-box1.clientTop-parseInt(fangdajing.offsetHeight*2)
                     var minY=0;
                     var maxY=box1.offsetHeight-fangdajing.offsetHeight
                     var rightY;
                     if(y1<minY){
                     	 fangdajing.style.top=minY+'px'
                         rightY=minY
                     }else if(y1>maxY){
                         fangdajing.style.top=maxY+'px'
                         rightY=maxY
                    }else{
                          fangdajing.style.top=y1+'px'
                          rightY=y1
                    }
                    img2.style.top=-2*rightY+'px'
				}
			
			 box1.onmouseover=function(e){
				 e=e||window.event
				fangdajing.style.display="block"
				rightbox.style.display="block"
			}
		    box1.onmousemove=function(e){
		    	 var e = e || window.event(e)
		    	 move1(e)
		    }
		    
			box1.onmouseout=function(e){
				var e=e||window.event
				fangdajing.style.display="none"
				rightbox.style.display="none"
			}
		

        
    })()

}else{
    alert("你还没选中商品")
    location="./list.html"
}
//给大盒子对象绑定点击事件
box.onclick=function(e){
    var e = e || window.event
    //获取点击对象
    var target=e.target || e.srcElement
    var spans=document.querySelector(".spans")
    if(target.innerHTML=="+"){
    	s++;
    	spans.innerHTML=s
    }
     if(target.innerHTML=="-"){
    	if(s>1){
    		s--;
    	spans.innerHTML=s
    	}else{
    		spans.innerHTML=1
    	}
    	
    }
    
    
    
    
    //判断点击的对象是否为加入购物车按钮
    if(target.innerHTML=="加入购物车"){
        //获取localStorage中的cartList3
        var cartList=localStorage.getItem("cartList")
        //判断当前获取的cartList是否存在
        if(cartList){
            //把localStorage中获取的内容转为数组对象
            cartList=JSON.parse(cartList)
            var a=0 //判断当前添加的商品是否在localStorage中存在
            //遍历数组中所有元素啊
            cartList.forEach(item=>{
                //判断当前遍历的商品是否等于要添加的商品
                if(item.id==dt.id){
                    a++
                    item.num++
                }
            })
            //判断a变量是否等于0
            if(a==0){
                //修改商品数量
                dt.num=1
                //把当前对象追加到数组中
                cartList.push(dt)
            }
            //把当前商品添加到localStorage中
            localStorage.setItem("cartList",JSON.stringify(cartList))
        }else{
            //修改当前商品数量
            dt['num']=1
            //把当前商品添加到localStorage中
            localStorage.setItem("cartList",JSON.stringify([dt]))
        }

    }  
    
    //判断点击的对象是否为立即购买按钮
    if(target.innerHTML=="立即购买"){
        //获取localStorage中的cartList3
        var cartList=localStorage.getItem("cartList")
        //判断当前获取的cartList是否存在
        if(cartList){
            //把localStorage中获取的内容转为数组对象
            cartList=JSON.parse(cartList)
            var a=0 //判断当前添加的商品是否在localStorage中存在
            //遍历数组中所有元素啊
            cartList.forEach(item=>{
                //判断当前遍历的商品是否等于要添加的商品
                if(item.id==dt.id){
                    a++
                    item.num++
                }
            })
            //判断a变量是否等于0
            if(a==0){
                //修改商品数量
                dt.num=1
                //把当前对象追加到数组中
                cartList.push(dt)
            }
            //把当前商品添加到localStorage中
            localStorage.setItem("cartList",JSON.stringify(cartList))
        }else{
            //修改当前商品数量
            dt['num']=1
            //把当前商品添加到localStorage中
            localStorage.setItem("cartList",JSON.stringify([dt]))
        }

    }  
    
    
}


 

		