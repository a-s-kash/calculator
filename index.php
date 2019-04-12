<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Калькулятор</title>
    <style>
        .transitionOpacity-1-5{
            transition: 1.5s;
        }
        .transitionOpacity-1-5:not(.viewTransitionOpacity){
            opacity: 0;
        }
        .viewTransitionOpacity{
            opacity: 1;
        }
        .noFormField{
            display: none;
        }
    </style>
</head>
<body class="adaptive ready" id="body-content">

    <div>
        <div id="calculator_of_materials_and_works"></div>
        <div id="calculator"></div>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            if($("div").is("#calculator_of_materials_and_works")){
                b_block_calculate_init();
            }
        });
    </script>

    <script src="/calculator.js" type="text/javascript"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
</body>
</html>
