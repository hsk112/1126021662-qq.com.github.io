//获取操作对象
var row=document.querySelector('.row');
var pagination1=document.querySelector('.pagination');
var mold=document.querySelector(".mold");
var k=document.querySelector(".k");
var m=document.querySelector(".m");
var z=document.querySelector(".z");
var s=document.querySelector(".s");
var x=document.querySelector(".x");
var mj=document.querySelector(".mj");
var aa=document.querySelectorAll(".aa");
(async function(){
    var dt=await promiseAjax({
        url:'../php/list.php',
        datatype:'json'
    })
    
    k.onclick=function(){
    	aa[0].className="aa"
     	aa[1].className="aa bg"
     	aa[2].className="aa"
     	aa[3].className="aa"
     	aa[4].className="aa"
     	aa[5].className="aa"
     	aa[6].className="aa"
    	var str=""
    	  dt.forEach(item=>{
    	if(item.mold=="咖啡冲饮"){
    		 str+=`
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="thumbnail">
                     <img src="${item.imgUrl}" >
                     <div class="caption">
                     <h5 class="h5">${item.name}</h5>
                     <h5>【保税发货】${item.name}值得信赖的良心好产品</h5>
                     <p>${item.jiage}</p>
                     <p>${item.rmb}</p>
                      <s><p style="color:red">原价:${item.yuanjia}</p></s>
                    <p class="ph"><a class="btn btn-primary" role="button">加入购物车</a> <a href="./xiangqing.html?id=${item.id}" class="btn btn-default" role="button" data-id="${item.id}">查看商品</a></p>
                     </div>
               </div>
             </div>    
                `
    	}
    })
    	 mold.innerHTML=str
    }
     m.onclick=function(){
     	aa[0].className="aa"
     	aa[1].className="aa"
     	aa[2].className="aa bg"
     	aa[3].className="aa"
     	aa[4].className="aa"
     	aa[5].className="aa"
     	aa[6].className="aa"
    	var str=""
    	  dt.forEach(item=>{
    	if(item.mold=="美容护肤"){
    		 str+=`
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="thumbnail">
                     <img src="${item.imgUrl}" >
                     <div class="caption">
                     <h5 class="h5">${item.name}</h5>
                     <h5>【保税发货】${item.name}值得信赖的良心好产品</h5>
                     <p>${item.jiage}</p>
                     <p>${item.rmb}</p>
                      <s><p style="color:red">原价:${item.yuanjia}</p></s>
                    <p class="ph"><a class="btn btn-primary" role="button">加入购物车</a> <a href="./xiangqing.html?id=${item.id}" class="btn btn-default" role="button" data-id="${item.id}">查看商品</a></p>
                     </div>
               </div>
             </div>    
                `
    	}
    })
    	 mold.innerHTML=str
    }
     
     z.onclick=function(){
     	aa[0].className="aa"
     	aa[1].className="aa"
     	aa[2].className="aa"
     	aa[3].className="aa bg"
     	aa[4].className="aa"
     	aa[5].className="aa"
     	aa[6].className="aa"
    	var str=""
    	  dt.forEach(item=>{
    	if(item.mold=="滋补保健"){
    		 str+=`
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="thumbnail">
                     <img src="${item.imgUrl}" >
                     <div class="caption">
                     <h5 class="h5">${item.name}</h5>
                     <h5>【保税发货】${item.name}值得信赖的良心好产品</h5>
                     <p>${item.jiage}</p>
                     <p>${item.rmb}</p>
                      <s><p style="color:red">原价:${item.yuanjia}</p></s>
                    <p class="ph"><a class="btn btn-primary" role="button">加入购物车</a> <a href="./xiangqing.html?id=${item.id}" class="btn btn-default" role="button" data-id="${item.id}">查看商品</a></p>
                     </div>
               </div>
             </div>    
                `
    	}
    })
    	 mold.innerHTML=str
    }
     
      s.onclick=function(){
      	aa[0].className="aa"
     	aa[1].className="aa"
     	aa[2].className="aa"
     	aa[3].className="aa"
     	aa[4].className="aa bg"
     	aa[5].className="aa"
     	aa[6].className="aa"
    	var str=""
    	  dt.forEach(item=>{
    	if(item.mold=="食品特产"){
    		 str+=`
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="thumbnail">
                     <img src="${item.imgUrl}" >
                     <div class="caption">
                     <h5 class="h5">${item.name}</h5>
                     <h5>【保税发货】${item.name}值得信赖的良心好产品</h5>
                     <p>${item.jiage}</p>
                     <p>${item.rmb}</p>
                      <s><p style="color:red">原价:${item.yuanjia}</p></s>
                    <p class="ph"><a class="btn btn-primary" role="button">加入购物车</a> <a href="./xiangqing.html?id=${item.id}" class="btn btn-default" role="button" data-id="${item.id}">查看商品</a></p>
                     </div>
               </div>
             </div>    
                `
    	}
    })
    	 mold.innerHTML=str
    }
      
      x.onclick=function(){
      	aa[0].className="aa"
     	aa[1].className="aa"
     	aa[2].className="aa"
     	aa[3].className="aa"
     	aa[4].className="aa"
     	aa[5].className="aa bg"
     	aa[6].className="aa"
    	var str=""
    	  dt.forEach(item=>{
    	if(item.mold=="洗护清洁剂"){
    		 str+=`
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="thumbnail">
                     <img src="${item.imgUrl}" >
                     <div class="caption">
                     <h5 class="h5">${item.name}</h5>
                     <h5>【保税发货】${item.name}值得信赖的良心好产品</h5>
                     <p>${item.jiage}</p>
                     <p>${item.rmb}</p>
                      <s><p style="color:red">原价:${item.yuanjia}</p></s>
                    <p class="ph"><a class="btn btn-primary" role="button">加入购物车</a> <a href="./xiangqing.html?id=${item.id}" class="btn btn-default" role="button" data-id="${item.id}">查看商品</a></p>
                     </div>
               </div>
             </div>    
                `
    	}
    })
    	 mold.innerHTML=str
    }
  
    
     mj.onclick=function(){
    	aa[0].className="aa"
     	aa[1].className="aa"
     	aa[2].className="aa"
     	aa[3].className="aa"
     	aa[4].className="aa"
     	aa[5].className="aa"
     	aa[6].className="aa  bg"
    	var str=""
    	  dt.forEach(item=>{
    	if(item.mold=="墨镜"){
    		 str+=`
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="thumbnail">
                     <img src="${item.imgUrl}" >
                     <div class="caption">
                     <h5 class="h5">${item.name}</h5>
                     <h5>【保税发货】${item.name}值得信赖的良心好产品</h5>
                     <p>${item.jiage}</p>
                     <p>${item.rmb}</p>
                      <s><p style="color:red">原价:${item.yuanjia}</p></s>
                    <p class="ph"><a class="btn btn-primary" role="button">加入购物车</a> <a href="./xiangqing.html?id=${item.id}" class="btn btn-default" role="button" data-id="${item.id}">查看商品</a></p>
                     </div>
               </div>
             </div>    
                `
    	}
    })
    	 mold.innerHTML=str
    }
    
    
    //创建分页器对象
    new Pagination(pagination1,{
        pageInfo:{
            pagenum:1,
            pagesize:12,
            totalsize:dt.length,
            totalpage:Math.ceil(dt.length/12)
        },
        textInfo:{
            first:'首页',
            prev:"上一页",
            next:"下一页",
            last:"尾页"
        },cb(m){
            //获取当前页需要显示的数据
            var ar1=dt.slice((m-1)*12,m*12)
            //创建拼接所有数据的字符串
            var str=''
            //遍历当前ar1数组中所有的数据
            ar1.forEach(item=>{
                str+=`
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="thumbnail">
                     <img src="${item.imgUrl}" >
                     <div class="caption">
                     <h5 class="h5">${item.name}</h5>
                     <h5>【保税发货】${item.name}值得信赖的良心好产品</h5>
                     <p>${item.jiage}</p>
                     <p>${item.rmb}</p>
                      <s><p style="color:red">原价:${item.yuanjia}</p></s>
                    <p class="ph"><a class="btn btn-primary" role="button">加入购物车</a> <a href="./xiangqing.html?id=${item.id}" class="btn btn-default" role="button" data-id="${item.id}">查看商品</a></p>
                     </div>
               </div>
             </div>    
                `
            })
            //把当前拼接好的字符串，添加到row盒子中
            row.innerHTML=str
       } 
    })
})()







//登录注册js
		//获取账号cookie
		var span1=document.querySelector(".span1")
		var name1=getCookie("name")
		var a1=document.querySelector('.a1')
		var cars=document.querySelector(".cars")
        //判断当前cookie是否存在
        if(name1){
            //获取span对象
            span1.innerHTML="欢迎！"+decodeURI(name1)
        }else{
//      	console.log("111")
        }
        
        span1.onclick=function(){
        	if(name1){
        		a1.innerHTML='<a href="dl.html"><span class="span1">登录</span></a>'
        		var a=confirm("确定退出登录？");
        		if(a==true){
        			a1.innerHTML='<a href="dl.html"><span class="span1">登录</span></a>'
        			cars.innerHTML=`<p>请 <a class="a1" href="dl.html">登录</a> 后查看</p>`
        		
        		}else{
        			location="index.html"
        		}
        	}else{
        		location="dl.html"
        	}
        }
        
//      //购物车
//      if(span1.innerHTML=="登录"){
//      	cars.innerHTML=`<p>请 <a class="a1" href="dl.html">登录</a> 后查看</p>`
//      }else{
//      	cars.innerHTML=`<p>购物车空空如也!</p>`
//      }
        
        //二级菜单
        //  获取host_sp下所有的li
        $lis=$(".host_sp>li")
         $host_sp1=$(".host_sp1")
         $d2=$(".d2")
        $(function(){
        	$(".local_sp").hover(function(){
        		$(".host_sp").stop().slideDown(300);
        	},function(){
        		$(".host_sp").stop().slideUp(500);
        	})
        	 
        })

        $(function(){
        	 for(let i=0;i<$lis.length;i++){
        	$lis.eq(i).mouseover(function(){
        		$host_sp1.css("display","block")
        		$host_sp1.html($lis.eq(i).html())
        	})
        }
        })