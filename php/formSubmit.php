<?php
if (isset($_POST['submit'])){
    $email = $_POST['email'];
    echo "The form has been submitted. The submitted email is $email.";
}
?>