<?php
 include "db.php";
 if(isset($_POST['update']))
 {
 $id=$_POST['id'];
 $name=$_POST['name'];
 $email=$_POST['email'];
 $password=$_POST['password'];
 $q=mysqli_query($con,"UPDATE `yid` SET `name`='$name',`email`='$email',`password`='$password' where `id`='$id'");
 if($q)
 echo "success";
 else
 echo "error";
 }
 ?>
