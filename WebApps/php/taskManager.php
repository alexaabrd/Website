<?php 
 require_once "functions.php";

 session_start();

if(!isset($_SESSION['user_id']) ) {
   login($_POST['username'], $_POST['password']);
  }

?>

<html>
<head>
  <link rel="stylesheet" type="text/css" href="../../css/theme.css">
  <link rel="icon" href="../images/icon.png" type="image/x-icon" />
  <link rel="shortcut icon" href="../images/icon.png" type="image/ico"/>
  <title>TaskManager | Home </title>
</head>

<body class="taskman">
<center><h1> TASK MANAGER</h2></center>
<form action="logout.php">
<input id="logout" type="submit" name="logout" value="Logout">
<?php echo "<h2>Hello, " . $_SESSION['first'] ."!</h2>\n"; ?>
</form>

<form action="update.php" method="post">

<table style='width:100%'>
<?php 


$tasks = getTasks();


if ($tasks->num_rows == 0) {echo "You currently have no tasks";}
else {
  echo "Here are your current tasts: <br><br> "; 

  for ($i = 0; $i < $tasks->num_rows; $i++) {
    $row = $tasks->fetch_row();
    
    echo  "<tr>";
if ($row[2] == true) { //if task is completed
	echo "   <td><input class='completed' type='submit' name='completed' value='".$row[0] ."'></td>";
}
else {
	echo "   <td><input class='uncompleted' type='submit' name='uncompleted' value='". $row[0]."'></td>";
}
echo	"<td>". $row[3] . "</td>
        <td> <input class='trash' type='submit'  name='trash' value='". $row[0] ."'> </td>
	</tr> ";
 }
}

?>
<td></td>
<td><input class="task" type="text" onkeypress="if (window.event.keyCode == 13) return false" name="task" ></td>
<td><input type="submit"  name="add" value="Add Task"></td>
</table>
</form>
</body>
</html>

