<template>
  <b-navbar toggleable="lg" type="light" variant="info" class="nav-wrapper">
    <b-navbar-brand class="d-lg-none">
      <Logo height="50"></Logo>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mx-auto">
        <b-nav-item :to="localePath('/')"><b-icon-house-door-fill></b-icon-house-door-fill></b-nav-item>
        <b-nav-item :to="localePath('/o-nas')">О нас</b-nav-item>
        <b-nav-item-dropdown text="Каталог">
          <b-dropdown-group header="LMF">
            <b-dropdown-item class="nav-dropdown-items" :to="localePath('/gvyntovy-kompresory-lmf')">{{
              $t('gvyntovy-kompresory')
            }}</b-dropdown-item>
          </b-dropdown-group>
          <b-dropdown-group header="Tamsan">
            <b-dropdown-item class="nav-dropdown-items" :to="localePath('/gvyntovy-kompresory-tamsan')">{{
              $t('gvyntovy-kompresory')
            }}</b-dropdown-item>
            <b-dropdown-item class="nav-dropdown-items" :to="localePath('/osyshyvachi-povitrya-tamsan')">{{
              $t('Осушувачі повітря')
            }}</b-dropdown-item>
            <b-dropdown-item class="nav-dropdown-items" :to="localePath('/kompresory-dlya-sypkyh-materialiv-tamsan')">{{
              $t('Компресори для сипких матеріалів')
            }}</b-dropdown-item>
            <b-dropdown-item class="nav-dropdown-items" :to="localePath('/vysokobarny-kompresory-tamsan')">{{
              $t('Високобарні компресори')
            }}</b-dropdown-item>
            <b-dropdown-item class="nav-dropdown-items" :to="localePath('/dizelny-portatyvny-kompresory-tamsan')">
              {{ $t('Дизельні портативні гвинтові компресори серії TVK') }}</b-dropdown-item
            >
          </b-dropdown-group>

          <b-dropdown-item :to="localePath('/vytratny-materialy-ta-zapasny-chastyny')">
            {{ $t('Витратні матеріали та запасні частини') }}
          </b-dropdown-item>
          <b-dropdown-item :to="localePath('/systemy-recureratsii-tepla')">
            {{ $t('Системи рекуперації тепла') }}
          </b-dropdown-item>
          <b-dropdown-item :to="localePath('/reciver')">
            {{ $t('Ресівери') }}
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item :to="localePath('/poslygy')">{{ $t('Послуги') }}</b-nav-item>
        <b-nav-item :to="localePath('/contacts')">{{ $t('Контакти') }}</b-nav-item>
        <b-nav-text>
          <nuxt-link v-if="'ua' !== $i18n.locale" class="lang" :to="switchLocalePath('ua')">Укр</nuxt-link
          ><span v-else style="font-weight: bold">Укр</span> |
          <nuxt-link v-if="'ru' !== $i18n.locale" class="lang" :to="switchLocalePath('ru')">Рус</nuxt-link
          ><span v-else style="font-weight: bold">Рус</span>
        </b-nav-text>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import {
  BNavbar,
  BNavbarNav,
  BNavbarToggle,
  BNavbarBrand,
  BNavText,
  BNavItemDropdown,
  BNavItem,
} from 'bootstrap-vue';
import Logo from './Logo.vue'
export default {
  name: 'NavBar',
};
</script>

<style scoped></style>
