<?php
session_start();
 require_once('functions.php');
 if ($_POST['trash'] != "")       { remove($_POST['trash']); }
 if ($_POST['completed'] != "")   { update($_POST['completed']); }
 if ($_POST['uncompleted'] != "") { update($_POST['uncompleted']); }
 if ($_POST['add'] != "") {
			add($_POST['task'], $_SESSION['user_id']);
			}
	

header("Location: taskManager.php");



?>
