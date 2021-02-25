var allsp=document.querySelector(".allsp")
var arr=[];
    	allsp.onclick=function(e){
    		var e=e||window.event
    	    var target=e.target||e.srcElement	    
    	    
    	    if(target.innerHTML=='加入购物车'){
    	    	//图片地址
                var imgurl=target.parentNode.parentNode.firstElementChild.firstElementChild.getAttribute("src")
                //标题
                var title=target.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.innerHTML
                //价格
                var price=target.parentNode.previousElementSibling.previousElementSibling.innerHTML
                var id=target.nextElementSibling.getAttribute("data-id")
                
                var jiage=target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
                //创建存储一条数据的对象
                
                var obj1={
                	 id:id,
                	 imgUrl:imgurl,
                     name:title,
                     rmb:price,
                     num:1,
                     jiage:jiage,
                }
                     //购物车的数量
                    var num=document.querySelector(".num")
			    	var cartList=localStorage.getItem("cartList")
			    	//把当前cartList字符串转为数组对象
			        cartList=JSON.parse(cartList)||[]
			        var sum=0;
			    	cartList.forEach(item=>{
			    		sum+=item.num
			    	})
			    	num.innerHTML=sum
                
                
                
                  //获取localStorage中的cartList
                var cartList=localStorage.getItem('cartList')
                 //判断当前localStorage中是否存在cartList
                if(cartList){
                    //把从localStorage中获取的字符串转为数组对象
                    cartList=JSON.parse(cartList)
                    var a=0 //代码当前商品是否存在与localStorage中相同的
                    //遍历数组中所有的元素
                    cartList.forEach(function(item){
                        //判断当前要添加的元素是否在localStorage中存在
                        if(item['name']===title){
                            a++
                            item['num']++
                        }
                    })
                    //判断当前a是否为true
                    if(a==0){
                        cartList.push(obj1)
                    }
                    //修改localStorage中的内容
                    localStorage.setItem('cartList',JSON.stringify(cartList))
                   }else{
                   	   //把当前要添加的商品存放在数组中
                    var arr=[obj1]
                    //把当前数组添加到localStorage中
                    localStorage.setItem('cartList',JSON.stringify(arr))
                    
                   }
    	    }
    	}
    	
//  	顶部通栏
         //获取操作对象
        var bossdt=document.querySelector('.boss_dt')
        var dt1=document.querySelector('.dt1')
        var top1;
        //给window对象绑定滚动事件
        window.onscroll=function(){
            //获取滚动距离
            top1=document.documentElement.scrollTop
            //判断当滚动距离大于180时，显示隐藏内容
            if(top1>180){
                bossdt.style.transition="all .5s 0s linear"
                bossdt.style.display='block'
            }else{
                bossdt.style.display='none'
            }
        }
//        给p对象绑定点击事件
        dt1.onclick=function(){
            
            var dsq=setInterval(function(){
                //每次移动当前滚动距离的10分之一
                var speed=Math.ceil(top1/10)
                //当滚动距离为0时，清除定时器
                if(top1<=0){
                    clearInterval(dsq)
                }
                //重新设置滚动距离  
                document.documentElement.scrollTop=top1-speed
            },20)
        }
    	
			    	