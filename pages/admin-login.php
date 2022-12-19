<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>art-gallery</title>

    <link rel="icon" href="images/favicon.ico" type="image/icon" sizes="16x16">

    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/fontawesome.min.css">
    <link rel="stylesheet" href="../css/all.min.css">
    <link rel="stylesheet" href="../css/common.css">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <div class="admin-login">
        <form class="admin-form"  method="post">
            <div class="form-group mb-30">
                <input type="email" class="form-control" id="email" name="u_email" placeholder="Enter your email">
            </div>
            <div class="form-group mb-30">
                <input type="password" class="form-control " id="password" name="u_pass" placeholder="Enter your password">
            </div>
            <button type="submit" name='login-btn' class="btn btn-success">Submit</button>
        </form>
    </div>


    
        <?php

        if(isset($_POST['login-btn'])){
            $u_name = $_POST['u_name'];
            $u_pass = $_POST['u_pass'];

            if($u_name=='rafiakemy421@gmail.com' && $u_pass=='5687'){
                header('Location: admin-dashboard.php');
            }else{
                echo "<script>alert('Incorrect Username or Password')</script>";
            }
        }

        ?>



    <script type="text/javaScript" src="../js/popper.min.js"></script>
    <script type="text/javaScript" src="../js/bootstrap.min.js"></script>
    <script type="text/javaScript" src="../js/jquery.min.js"></script>
    <script type="text/javaScript" src="../js/admin-login.js"></script>


</body>
</html>