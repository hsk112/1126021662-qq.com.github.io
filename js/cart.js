
//获取账号cookie
var name1=getCookie("name")
//获取大盒子对象
var box=document.querySelector(".panel")
//获取地址栏中的地址
var url=location.href
//获取localStorage中的cartList3
var cartList=localStorage.getItem("cartList")
var jies=document.querySelector(".jies")
//把当前cartList字符串转为数组对象
cartList=JSON.parse(cartList)||[]
//判断当前cookie是否存在
if(name1){
    show()
}else{
    alert("你还没登录，请登录在进入")
    location="dl.html"
}
function show(){
    //判断当前localStorage中是否有内容
    if(cartList.length>0){
        //获取全选框是否被选中
        var aa=cartList.every(item=>{
            //判断当前商品是否被选中
            return item.is_select==1
        })
        //获取当前被选中商品的种类和价格
        var sum=total()
        var str2=`
        <div class="panel-heading">
            <input type="checkbox" name="quanxuan" ${aa?"checked":''}>全选
            商品种类：<span>${cartList.length}</span>
            所选商品种类：<span>${sum[0]}</span>
            所选商品价格：<span>￥${sum[1]}</span>
            <a href="" class="btn btn-info btn-xs">结算</a>
            <a href="" class="btn btn-success  btn-xs">清空购物车</a>
        </div>
        <div class="panel-body">
        `
        //遍历数组中所有商品
        cartList.forEach(item=>{
             str2+=`
            <div class="spcar">
                <div class="spacar1">
                <input type="checkbox" ${item.is_select==1?"checked":''} name="xuan" data-id="${item.id}" style="width: 20px;height: 20px;margin-top: 60px;"class="check1">
                <a href="#" class="a_img">
                    <img class="media-object" src="${item.imgUrl}" width="100" height="100" alt="...">
                </a>
                </div>
                <div class="spcar2">
                <span class="m2">${item.name}</span>
                <span class="m1" style="width: 200px;">${item.jiage}THB</span>
                <span class="m3" style="width: 200px;">${item.rmb}</span>
                <button class="no" data-id="${item.id}">删除</button>
                <div class="spcar3">
                    <button type="button" class="btn btn-default" data-id="${item.id}" ${item.num<=1?"disabled":''}>-</button>
                    <button type="button" class="btn btn-default">${item.num}</button>
                    <button type="button" class="btn btn-default" data-id="${item.id}">+</button>
                </div>
                </div>
            </div>
            `
        })
        //给当前字符串拼接结束的标签
        str2+='</div>'
        
        str2+=`
         <div class="jies">
         <a class="a1"><input class="quanxuan" type="checkbox" name="quanxuan" ${aa?"checked":''}>全选</a>
        <div class="j1">
        <div style="float:left">
           所选商品种类：<span style="line-height: 30px;font-size:16px;">${sum[0]}</span>
           <br/>
            所选商品价格：<span style="line-height: 30px;font-size:16px;">${sum[1]}THB</span>
        </div>
            <a href="" class="btn1 btn-info btn-xs">结算</a>
        </div>
        </div>
        `
        //最后把拼接好的内容添加到box大盒子中
        box.innerHTML=str2
        
       
    }else{
        var str1=`
          <div class="jumbotron">
              <h1>您的购物车空空如也</h1>
              <p>点击下方按钮快去选购吧! ^_^</p>
              <p><a class="btn btn-primary btn-lg" href="./list.html" role="button">赶紧去选吧</a></p>
              
          </div>
          
        ` 
        //把当前内容添加到box盒子中
        box.innerHTML=str1
    }
}

//给box大盒子对象绑定点击事件
box.onclick=function(e){
    var e = e || window.event
    //获取点击对象
    var target=e.target || e.srcElement
    //判断当前点击的是否为+
    if(target.innerHTML=="+"){
        //获取当前对象中的id属性
        var id=target.getAttribute("data-id")
        //遍历cartList数组对象
        cartList.forEach(item=>{
            //判断遍历出来的商品是否为当前操作商品
            if(item.id==id){
                item.num++
                
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //判断当前点击的是否为减法按钮
    if(target.innerHTML=='-'){
        //获取当前对象中的id属性
        var id=target.getAttribute("data-id")
        //遍历cartList数组对象
        cartList.forEach(item=>{
            //判断遍历出来的商品是否为当前操作商品
            if(item.id==id){
                item.num--
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //删除
    if(target.innerHTML=="删除"){
        //获取当前点击对象的id
        var id=target.getAttribute("data-id")
        cartList=cartList.filter(item=>{
            //过滤被删除的商品
            return item.id!=id
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //全选
    if(target.name=="quanxuan"){
        //遍历所有商品
        cartList.forEach(item=>{
            //判断当前全选框是否被选中
            if(target.checked){
                item.is_select=1
            }else{
                item.is_select=0
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //选中框
    if(target.name=="xuan"){
        //获取当前商品对应的id 
        var id=target.getAttribute("data-id")
        //遍历数组中所有的商品对象
        cartList.forEach(item=>{
           if(item.id==id){
            //   //判断当前选中框是否被选中
            //   if(item.is_select==1){
            //       item.is_select=0
            //   }else{
            //       item.is_select=1
            //   }
            item.is_select=item.is_select==1?"0":"1"
           }
       })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //去结算
    if(target.innerHTML=="结算"){
        //添加确认框
        if(confirm("你确定要购买吗？")){
            alert("你需要支付：￥"+total()[1])
            cartList=cartList.filter(item=>{
                return item.is_select!=1
            })
            //重新把当前操作完毕的数组添加到localStorage中
            localStorage.setItem("cartList",JSON.stringify(cartList))
            //调用show方法，重新把页面再次渲染
            show()
        }
    }
    //清空购物车
    if(target.innerHTML=="清空购物车"){
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList",JSON.stringify([]))
        //调用show方法，重新把页面再次渲染
        show()
    }

}
//统计所选商品种类和价格
function total(){
    var num=0 //所选商品种类
    var price=0 //所选商品总价格
    //遍历cartList数组对象
    cartList.forEach(item=>{
        //判断当前商品是否被选中
        if(item.is_select==1){
            num++
            price+=item.num*item.jiage
        }
    })
    return [num,price]
}

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