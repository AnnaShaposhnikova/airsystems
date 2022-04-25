<template>
    <b-navbar toggleable="lg" type="light" variant="info">
        <b-navbar-brand to="/" class="d-lg-none"
            ><img src="img/logo1111.png"
        /></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="mx-auto">
                <b-nav-item to="/"
                    ><b-icon icon="house-door-fill"></b-icon
                ></b-nav-item>
                <b-nav-item to="o-nas">О нас</b-nav-item>
                <b-nav-item-dropdown text="Каталог обладнання">
                   
                        <b-dropdown-group id="dropdown-group-1" style="color:white" header="LMF">
                            <b-dropdown-item  class ="nav-dropdown-items" to="gvyntovy-kompresory-lmf">Гвинтовi компресори</b-dropdown-item>                           
                        </b-dropdown-group>
                        <b-dropdown-group id="dropdown-group-2" header="Tamsan">
                            <b-dropdown-item class ="nav-dropdown-items" to="gvyntovy-kompresory-tamsan">Гвинтові компресори</b-dropdown-item>
                            <b-dropdown-item class ="nav-dropdown-items" to="osyshyvachi-povitrya-tamsan">Осушувачi повiтря</b-dropdown-item>
                            <b-dropdown-item class ="nav-dropdown-items" to="kompresory-dlya-sypkyh-materialiv-tamsan">Компресори для сипких матеріалів</b-dropdown-item> 
                             <b-dropdown-item class ="nav-dropdown-items" to="vysokobarny-kompresory-tamsan">Високобарнi компресори</b-dropdown-item> 
                             <b-dropdown-item class ="nav-dropdown-items" to="dizelny-portatyvny-kompresory-Tamsan">Дизельнi портативнi гвинтові компресори серії TVK</b-dropdown-item> 
                        </b-dropdown-group>
                        
                            <b-dropdown-item  to="vytratny-materialy-ta-zapasny-chastyny">
                                Витратні матеріали та запасні частини
                             </b-dropdown-item>
                             <b-dropdown-item  to="systemy-recureratsii-tepla">
                                Системи рекуперації тепла
                            </b-dropdown-item>
                             <b-dropdown-item  to="reciver">
                                Ресiвери
                            </b-dropdown-item>                             
             
                </b-nav-item-dropdown>
                <b-nav-item to="poslygy">Послуги</b-nav-item>
                <b-nav-item to="contacts">Контакти</b-nav-item>
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
