<template>
    <b-navbar toggleable="lg" type="light" variant="info">
        <b-navbar-brand to="/" class="d-lg-none"
            ><img src="/img/logo1111.png"
        /></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="mx-auto">
                <b-nav-item to="/"
                    ><b-icon icon="house-door-fill"></b-icon
                ></b-nav-item>
                <b-nav-item to="/about">О нас</b-nav-item>
                <b-nav-item-dropdown text="Каталог обладнання">
                    <!-- <b-dropdown  text="Каталог обладнання" class="m-2"> -->
                        <b-dropdown-group id="dropdown-group-1" style="color:white" header="LMF">
                            <b-dropdown-item  class ="nav-dropdown-items" to="vint-lmf">Гвинтовi компресори</b-dropdown-item>
                            <b-dropdown-item class ="nav-dropdown-items" to="dryair-lmf">Осушувачi повiтря</b-dropdown-item>
                        </b-dropdown-group>
                        <b-dropdown-group id="dropdown-group-2" header="Tamsan">
                            <b-dropdown-item class ="nav-dropdown-items" to="vint-tamsan">Гвинтові компресори</b-dropdown-item>
                            <b-dropdown-item class ="nav-dropdown-items" to="dryair-tamsan">Осушувачi повiтря</b-dropdown-item>
                            <b-dropdown-item class ="nav-dropdown-items" to="bulkmatereal-tamsan">Компресори для сипких матеріалів</b-dropdown-item> 
                             <b-dropdown-item class ="nav-dropdown-items" to="high-tamsan">Високобарнi компресори</b-dropdown-item> 
                        </b-dropdown-group>
                        
                            <b-dropdown-item  to="/consumables">
                                Витратні матеріали та запасні частини
                             </b-dropdown-item>
                             <b-dropdown-item  to="/recuperation">
                                Системи рекуперації тепла
                            </b-dropdown-item>
                             <b-dropdown-item  to="/reciver">
                                Ресiвери
                            </b-dropdown-item>
                              <b-dropdown-item  to="/dizel-tamsan">
                                Дизельнi портативнi гвинтові компресори серії TVK
                            </b-dropdown-item> 
             
                </b-nav-item-dropdown>
                <b-nav-item to="/services">Послуги</b-nav-item>
                <b-nav-item to="/contacts">Контакти</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import { HouseDoorFill } from "bootstrap-vue";

export default {
    name: "NavBar"
};
</script>

<style scoped></style>
