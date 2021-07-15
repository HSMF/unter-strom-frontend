<?php
//headers
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
function errormsg($errno, $errstr, $errf, $errl)
{
    http_response_code(500);
    die('{ "error": 500 }');
}

set_error_handler("errormsg");

class JSON_OUTPUT
{
}


class Handler
// basically a rest api
{
    private $HOST = "localhost";
    private $USER = "";
    private $PASS = "";
    private $DATABASE = "";
    private $conn;

    function __construct($args)
    {
        if (isset($args["power"])) {
            // if ($this->connectMYSQL()){
            //     return $this->end('{ "error": "internal server error" }', 500);
            // }

            switch ($args["power"]) {
                case 'day':
                    $res = $this->powerDaily();
                    break;
                case 'week':
                    $res = $this->powerWeek();
                    break;
                case 'year':
                    $res = $this->powerYear();
                    break;
                default:
                    $res = $this->getPower();
                    break;
            }
            $this->end(json_encode($res[0]), $res[1]);
        }
    }

    private function end($message, $code)
    {
        http_response_code($code);
        echo $message;
    }

    public function powerDaily()
    {
        $out = new JSON_OUTPUT();
        $data = array(
            1.0539922456186435, 1.5097741845591461,
            2.0961138715109784, 2.8206295169381552, 
            3.6787944117144233, 4.650431881340563, 
            5.69782824730923, 6.7663384616172895, 
            7.788007830714049, 8.688150562628431, 
            9.394130628134757, 9.844964370054084, 
            10.0, 9.844964370054084, 
            9.394130628134757, 8.688150562628431, 
            7.788007830714049, 6.7663384616172895, 
            5.69782824730923, 4.650431881340563, 
            3.6787944117144233, 2.8206295169381552, 
            2.0961138715109784, 1.21232130921039123,
        );
        $out->data = $data;
        return array($out, 200);
    }

    public function powerWeek()
    {
        $out = new JSON_OUTPUT();
        $out->data = array(1, 4, 9, 16, 25, 36, 49);
        return array($out, 200);
    }

    public function powerYear()
    {
        $out = new JSON_OUTPUT();
        $out->data = array(200, 40, 60, 20, 300, 250, 60, 10);
        return array($out, 200);
    }

    private function connectMYSQL()
    {
        // Create connection
        $this->conn = new mysqli($this->HOST, $this->USER, $this->PASS, $this->DATABASE);

        // Check connection
        if ($this->conn->connect_error) {
            return 1;
        }

        return 0;
    }

    public function getPower()
    {
        $out = new JSON_OUTPUT();

        $out->daily = $this->powerDaily()[0]->data;
        $out->weekly = $this->powerWeek()[0]->data;
        $out->yearly = $this->powerYear()[0]->data;


        return array($out, 200);
    }
}





$handler = new Handler($_REQUEST);

// php -S localhost:8808