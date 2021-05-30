<?php
class Caneta {    
    // ATRIBUTOS DO OBJETO
    public $modelo;
    public $cor;
    public $ponta;
    public $tampada;

    public function Caneta ($m, $c, $p){// o método construtor permite usar o nome da Class não necessariamente usar '__constructor'
        $this->modelo = $m;
        $this->cor = $c;
        $this->ponta = $p;
        $this->tampar();
        $this->setRabiscar=false;
    }

    public function tampar() { 
        $this->tampada = false;
    }

    public function getModelo(){
        return $this->modelo;
    }

    public function setModelo($m){
        $this->modelo = $m;
    }
    
    public function getPonta(){
        return $this->ponta;
    }

    public function setPonta($p){
        $this->ponta = $p;
    }   

    // METODOS DO OBJETO
    public function rabiscar() {
        if ($this->tampada == true) {
            echo "<p> ERRO! Não posso rabiscar. </p>"; 
        } else {
            echo "<div><p><h1>Estou rabiscando ... </p></h1></div>";
        }
    }

    public function escrever() {
        $this->tampada = false;
    }

    public function pintar() {
        $this->tampada = false;
    }

    public function destampar() {
        $this->tampada = false;
    }

}