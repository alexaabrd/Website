<?php

require_once "connect.php";

echo "you are here";
echo $_POST['username'];

function connect() {

 $conn = new mysqli(servername, username, password);

  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
 
  if ($_SERVER['SERVER_NAME'] != "dias11.cs.trinity.edu") {
    echo "<p>You must access this page from on campus through dias11.</p></body></html>";
    die ();
  }

  $conn->query("use abird1;"); 
  return $conn;
}



function checkSession() {
  session_start();
  if(isset($_SESSION['user_id']) )
  {
   header("Location: taskManager.php");
  }

}

function login($u, $p) {
 $conn = connect();
 
 $query = "select * from logins where username = '" . $u .
		"' AND password = '" . $p . "';";

 $result = $conn->query($query);

  if ($result->num_rows != 1) {
   header("Location: login.php");
   $_SESSION['error'] = true;
   return false;
  }


 session_start();
 $row=$result->fetch_row();

 $id = $row[0];

 $query = "select * from users where login = " . $id . ";";
 $result = $conn->query($query);
 $row=$result->fetch_row();

 $_SESSION['user_id'] = $row[0];
 $_SESSION['first'] = $row[2];
 $_SESSION['error'] = false;

 $conn->close();
return true;
}

function getTasks() {

$conn = connect();

$query = "select * from tasks where owner = " . $_SESSION['user_id'] . ";";

return $conn->query($query);

$conn->close();

}

function add($task, $id) {
 $conn = connect();
 $query = "insert into tasks (owner,task) values (" . $id .",'" . $task . "');";
 $conn->query($query);
 $conn->close();
}

function remove($tid) {
 $conn = connect();
 $query = "delete from tasks where id =" . $tid . ";";
 $conn->query($query);
 $conn->close();

}

function update($tid, $uid) {
 $conn = connect();
 $query = "update tasks SET complete = NOT complete where id =" . $tid . ";";
 echo $query;
 $conn->query($query);
 $conn->close();

}


function logout() {
session_start();
session_destroy();
 unset($_SESSION['user_id']);
 unset($_SESSION['first']);
}

?>


