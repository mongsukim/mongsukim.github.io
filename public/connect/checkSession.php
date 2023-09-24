<?php
  if( !isset($_SESSION['memberID'])  ){
    Header("Location:/sign/logIn.php");
    exit;
  }
?>