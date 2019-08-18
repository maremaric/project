<?php

    require_once "./category.class.php";
    require_once "./User.class.php";
    require_once "./Product.class.php";

    // $c = new category(1);
    // $c->title = "Naziv kategorije";
    // $c->insert();
    // var_dump($c);

    // $c = new category(3);
    // $c->title = "Novi naziv";
    // $c->update();
    // var_dump($c);

    // $c = new category(2);
    // $c->delete();

    // $c = new category(1);
    // $categories = $c->all();

    // var_dump($c);

    // $c = new User();
    // $c->name = "Daki";
    // $c->email = "daki@gmail.com";
    // $c->password = 123 ;
    // $c->insert();
    // var_dump($c);

    // $u = new User(8);
    // $u->name = "vlada";
    // $u->email = "vlada@email.com";
    // $u->password = "bnmcc";
    // $u->acc_type = "admin";
    // $u->update();

    // $u2 = new User(2);
    // var_dump($u2);

    // $c = new User();
    // $c->delete();

    // $p = new Product();
    // $p->title = "novi";
    // $p->cat_id = 4;
    // $p->description = "opisssss";
    // $p->price = "13.66";
    // $p->insert();

    // $p = new Product(3);
    // $p->cat_id = 5;
    // $p->title = "novi naziv";
    // $p->description = "nije lorem";
    // $p->price = "22.45";
    // $p->update();

    // $p = new Product(1);
    // $p->delete();

    // $p = new Product();
    // $categories = $p->all();


//     $p = new Product();
// var_dump( $p->search('s') );

$p = new Product(16);
// $p->rate(1);

var_dump( $p->getRating() );

