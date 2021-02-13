<template>
    <div>
<nav class="navbar sticky-top navbar-expand bg-light">
        <a class="navbar-brand badge-pill" href="#">
            <img src="../assets/part2/monster.svg" width="35" height="35" alt="logo monster">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="productos.html">Productos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Clientes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Proveedores</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Personal</a>
                </li>
            </ul>
        </div>
        <div class="collapse navbar-collapse justify-content-end d-none" id="navbarSupportedContent">
        </div>
    </nav>
    </div>
</template>
<style>
    nav {
        padding: 30px;
    }

    nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #navbar a.router-link-exact-active {
        color: #42b983;
    }
</style>