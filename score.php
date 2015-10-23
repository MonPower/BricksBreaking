<!DOCTYPE HTML> 
<html>
    <head>
        <title>CrashBall Ranking</title>
        <link rel="stylesheet" href="css/bootstrap.min.css">
    </head>
    <body>
    </body>
</html>
<?php
    error_reporting(0);
    session_start();
    $name=$_SESSION['head'];
    $pass=$_SESSION['tail'];
    $flag=$_SESSION['sure'];
    if ($flag == 1)
    {
         $conn=mysql_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS);
        mysql_select_db(SAE_MYSQL_DB);    
        $sql="select * from player where id = '$name' and password = '$pass';";
        $data=array();
        $query=mysql_query($sql);
        while($row=mysql_fetch_assoc($query)){
            $data[]=$row;
        }
        $sql = "select * from player order by score1 desc;";
        $query=mysql_query($sql);
        $data1=array();
        while($row=mysql_fetch_assoc($query)){
            $data1[]=$row;
        }
        mysql_close($conn);   
    }
    else 
    {
        echo '<script>alert("You have not login")</script>';
    }
?>

<html> 
    <head> 
        <title>Login</title> 
    </head>
    <body>
    <div class="row">
        <div class="col-xs-6">
            <h1>Word Score</h1>
                <table  class="table table-striped">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
                    <?php
                    echo '<tr>';
                    echo '<td>1</td>';
                    echo '<td>'.$data1[0]['id'].'</td>';
                    echo '<td>'.$data1[0]['score1'].'</td>';
                    echo '</tr>';
                    echo '<tr>';
                    echo '<td>2</td>';
                    echo '<td>'.$data1[1]['id'].'</td>';
                    echo '<td>'.$data1[1]['score1'].'</td>';
                    echo '</tr>';
                    echo '<tr>';
                    echo '<td>3</td>';
                    echo '<td>'.$data1[2]['id'].'</td>';
                    echo '<td>'.$data1[2]['score1'].'</td>';
                    echo '</tr>';
                    echo '<tr>';
                    echo '<td>4</td>';
                    echo '<td>'.$data1[3]['id'].'</td>';
                    echo '<td>'.$data1[3]['score1'].'</td>';
                    echo '</tr>';
                    echo '<tr>';
                    echo '<td>5</td>';
                    echo '<td>'.$data1[4]['id'].'</td>';
                    echo '<td>'.$data1[4]['score1'].'</td>';
                    echo '</tr>';
                    echo '<tr>';
                    echo '<td>6</td>';
                    echo '<td>'.$data1[5]['id'].'</td>';
                    echo '<td>'.$data1[5]['score1'].'</td>';
                    echo '</tr>';
                    echo '<tr>';
                    echo '<td>7</td>';
                    echo '<td>'.$data1[6]['id'].'</td>';
                    echo '<td>'.$data1[6]['score1'].'</td>';
                    echo '</tr>';
                    echo '<tr>';
                    echo '<td>8</td>';
                    echo '<td>'.$data1[7]['id'].'</td>';
                    echo '<td>'.$data1[7]['score1'].'</td>';
                    echo '</tr>';
                    echo '<tr>';
                    echo '<td>9</td>';
                    echo '<td>'.$data1[8]['id'].'</td>';
                    echo '<td>'.$data1[8]['score1'].'</td>';
                    echo '</tr>';
                    echo '<tr>';
                    echo '<td>10</td>';
                    echo '<td>'.$data1[9]['id'].'</td>';
                    echo '<td>'.$data1[9]['score1'].'</td>';
                    echo '</tr>';
                ?>
            </table>
        </div>
        <div class="col-xs-6">
            <h1>Your Score</h1>
                <table  class="table table-striped">
                <tr>
                    <th>#</th>
                    <th>Five Highest Score</th>
                </tr>
                    <?php
                    echo '<tr>';
                    echo '<td>1</td>';
                    echo '<td>'.$data[0]['score1'].'</td>';
                    echo '</tr>';
                    echo '<tr>';
                    echo '<td>2</td>';
                    echo '<td>'.$data[0]['score2'].'</td>';
                    echo '</tr>';
                    echo '<tr>';
                    echo '<td>3</td>';
                    echo '<td>'.$data[0]['score3'].'</td>';
                    echo '</tr>';
                    echo '<tr>';
                    echo '<td>4</td>';
                    echo '<td>'.$data[0]['score4'].'</td>';
                    echo '</tr>';
                    echo '<tr>';
                    echo '<td>5</td>';
                    echo '<td>'.$data[0]['score5'].'</td>';
                    echo '</tr>';
                ?>
            </table>
        </div>
    </div>
    </body> 
</html>


