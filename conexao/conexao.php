<?php
ini_set('display_errors', true);
error_reporting(E_ALL);

//Conexão on-line
$hostname = "localhost";
$database = "contatos";
$username = "root";
$password = "";

if($conecta = mysqli_connect($hostname, $username, $password, $database)){
    // echo "Conectado...............<br>";
}else{
    echo "Erro: ".mysqli_connect_error();
}
?>