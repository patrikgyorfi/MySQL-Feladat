<?php

// Adatbázis kapcsolat beállításai.
define("DBNAME", "sqlprojekt");
define("DBUSER", "sqlprojekt");
define("DBPASSWORD", "asd123");

// Routing (útválasztó) beállításai.
define("PREFIX", "api");
define("SQLDIR", "sql");
$router = array(
    // Select kérések.
    "/employees" => "all_employees.sql",
    "/customers" => "all_customer.sql",
    "/customers/:id" => "one_customer.sql",
    "/customers/limit/:s" => "limit_customer.sql",
    // Insert kérések.
    "/customers/insert" => "add_customer.sql",
    // Update kérések.
    "/customers/update/:id" => "update_customer.sql",
    // Delete kérések.
    "/customers/delete/:id" => "delete_customer.sql"
);