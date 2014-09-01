<?php

if(isset($_GET['users'])) {
    $users = array(
        array(
            "first_name" => "hayk",
            "last_name" => "aghabekyan"
        ),
        array(
            "first_name" => "petros",
            "last_name" => "poghosyan"
        )
    );

    echo json_encode($users);
} else {
/*
?>

<iframe src="http://localhost/~haykaghabekyan/backbonejs/#users"></iframe>

<?php
*/
}
?>