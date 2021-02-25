<?php
header("content-type:text/html;charset-utf-8");
//链接数据库
$link=mysqli_connect("localhost","root","","tet");
//设置编码
mysqli_set_charset($link,"utf8");

//获取传入参数
$u1=$_GET["user"];
$p1=$_GET['pwd'];

//SQL语句
$sql="select * from tet1 where user='$u1' and pwd=$p1";
//执行sql
$result=mysqli_query($link,$sql);
//判断结果集中是否存在数据
if(mysqli_fetch_assoc($result)){
 setcookie("name",$u1,time()+100);
 echo "<script>location='main_top.html'</script>";

 
}else{
header('location:dl.html');
}


?>