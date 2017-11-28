<?php
 include "db.php";
 if(isset($_POST['Insert']))
 {
 $name=$_POST['name'];
 $email=$_POST['email'];
 $password=$_POST['password'];
 $q=mysqli_query($con,"INSERT INTO `user` (`name`,`email`,`password`) VALUES ('$name','$email','$password')");
 if($q)
  echo "success";
 else
  echo "error";
 }
 ?>
