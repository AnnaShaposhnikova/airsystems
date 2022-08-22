<template>
    <b-navbar toggleable="lg" type="light" variant="info" class="nav-wrapper">
        <b-navbar-brand class="d-lg-none">
            <Logo height="50"></Logo>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="mx-auto">
                <b-nav-item to="/"><b-icon icon="house-door-fill"></b-icon></b-nav-item>
                <b-nav-item to="/o-nas">О нас</b-nav-item>
                <b-nav-item-dropdown text="Каталог">
                    <b-dropdown-group header="LMF">
                        <b-dropdown-item  class ="nav-dropdown-items" to="/gvyntovy-kompresory-lmf">{{$t("Гвинтовi компресори")}}</b-dropdown-item>
                    </b-dropdown-group>
                    <b-dropdown-group header="Tamsan">
                        <b-dropdown-item class ="nav-dropdown-items" to="/gvyntovy-kompresory-tamsan">{{$t("Гвинтовi компресори")}}</b-dropdown-item>
                        <b-dropdown-item class ="nav-dropdown-items" to="/osyshyvachi-povitrya-tamsan">{{$t("Осушувачi повiтря")}}</b-dropdown-item>
                        <b-dropdown-item class ="nav-dropdown-items" to="/kompresory-dlya-sypkyh-materialiv-tamsan">{{$t("Компресори для сипких матеріалів")}}</b-dropdown-item>
                        <b-dropdown-item class ="nav-dropdown-items" to="/vysokobarny-kompresory-tamsan">{{$t("Високобарнi компресори")}}</b-dropdown-item>
                        <b-dropdown-item class ="nav-dropdown-items" to="/dizelny-portatyvny-kompresory-tamsan">
                            {{ $t("Дизельнi портативнi гвинтові компресори серії TVK") }}</b-dropdown-item>
                    </b-dropdown-group>

                    <b-dropdown-item  to="/vytratny-materialy-ta-zapasny-chastyny">
                        {{ $t("Витратні матеріали та запасні частини") }}
                    </b-dropdown-item>
                    <b-dropdown-item  to="/systemy-recureratsii-tepla">
                        {{$t("Системи рекуперації тепла")}}
                    </b-dropdown-item>
                    <b-dropdown-item  to="/reciver">
                        {{$t('Ресiвери')}}
                    </b-dropdown-item>

                </b-nav-item-dropdown>
                <b-nav-item to="/poslygy">{{$t("Послуги")}}</b-nav-item>
                <b-nav-item to="/contacts">{{$t("Контакти")}}</b-nav-item>
                <b-nav-item >
                    <nuxt-link :to="switchLocalePath('ua')">UA</nuxt-link>
                    <nuxt-link :to="switchLocalePath('ru')">RU</nuxt-link>
                </b-nav-item>
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
