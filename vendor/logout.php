<?php

setcookie('userId', '', -1, '/');
setcookie('userWork', '', -1, '/');

header('Location: ../index.php');