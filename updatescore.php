<?php
session_start();
error_reporting(0);
$score=$_POST['score'];
$name=$_SESSION['head'];
$pass=$_SESSION['tail'];
$flag=$_SESSION['sure'];
if ($flag == 1)
{
        // echo "<script>
        //         alert('123');
        //     </script>";
   $conn=mysql_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS);
        mysql_select_db(SAE_MYSQL_DB);        
    $sql="select * from player where id = '$name' and password = '$pass';";
    $data=array();
    $query=mysql_query($sql);
    while($row=mysql_fetch_assoc($query)){
        $data[]=$row;
    }
    $flag1 = 0;
    $allscore[]=$score;
    $allscore[]=(int)($data[0]['score1']);
    $allscore[]=(int)($data[0]['score2']);
    $allscore[]=(int)($data[0]['score3']);
    $allscore[]=(int)($data[0]['score4']);
    $allscore[]=(int)($data[0]['score5']);
    rsort($allscore);
    $index1='score1';
    $index2='score2';
    $index3='score3';
    $index4='score4';
    $index5='score5';
    $sql="update player set $index1 = $allscore[0] where id = '$name' and password = '$pass';";
    if($query=mysql_query($sql))
    {
        $sql="update player set $index2 = $allscore[1] where id = '$name' and password = '$pass';";
        if ($query=mysql_query($sql))
        {
            $sql="update player set $index3 = $allscore[2] where id = '$name' and password = '$pass';";
            if ($query=mysql_query($sql))
            {
                $sql="update player set $index4 = $allscore[3] where id = '$name' and password = '$pass';";
                if ($query=mysql_query($sql))
                {
                    $sql="update player set $index5 = $allscore[4] where id = '$name' and password = '$pass';";
                    if ($query=mysql_query($sql))
                    {
                         echo json_encode(array('status'=>1,'info'=>'Update Success'));
                         $flag1 = 1;
                    }
                }
            }
        }
       
    }
    else
    {
        echo json_encode(array('status'=>0,'info'=>'Update Fail'));
        $flag1 = 2;
        break;
    }
    if ($flag1 == 0)
        echo json_encode(array('status'=>1,'info'=>'No Update'));
    
}
else
{
    echo json_encode(array('status'=>1,'info'=>'No login'));
}