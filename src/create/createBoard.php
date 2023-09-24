<?php
	include '../connect/connect.php';

	$sql = "CREATE TABLE myBoard (";
	$sql .= "boardID int(10) unsigned NOT NULL AUTO_INCREMENT,";
	$sql .= "memberID int(10) unsigned NOT NULL,";
	$sql .= "title varchar(50) NOT NULL,";
	$sql .= "content longtext NOT NULL,";
	$sql .= "regTime int(10) unsigned NULL,";
	$sql .= "PRIMARY KEY (boardID)";
	$sql .= ") CHARSET=utf8";

	$result = $dbConnect->query($sql);

	if($result){
		echo "Create Table Complete";
	} else {
		echo "Create Table False";
	}
?>