<template>
    <div>
<nav id="tblnav" class="navbar sticky-top navbar-expand bg-light">
        <a class="navbar-brand badge-pill" href="#">
            <router-link class="nav-link" to="/tableHome"><img src="../assets/part2/monster.svg" width="35" height="35" alt="logo monster"></router-link>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/tableTbl">Productos</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link disabled" to="#">Clientes</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link disabled" to="#">Proveedores</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link disabled" to="#">Personal</router-link>
                </li>
            </ul>
        </div>
        <div class="collapse navbar-collapse justify-content-end d-none" id="navbarSupportedContent">
        </div>
    </nav>
    </div>
</template>
<style>
    #tblnav {
        padding: 30px;
    }

    #tblnav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #tblnav a.router-link-exact-active {
        color: #42b983;
    }
</style>