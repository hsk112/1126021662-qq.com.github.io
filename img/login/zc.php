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
$sql="insert into tet1 (user,pwd)values('$u1',$p1)";
//执行SQL
$result=mysqli_query($link,$sql);
if($result){
  header('location:dl.html');
 
}else{
header('location:zc.html');
}
//关闭连接
mysqli_close($link);

?>