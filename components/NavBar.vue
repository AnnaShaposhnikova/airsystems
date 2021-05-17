<template>

    <b-navbar toggleable="lg" type="light" variant="info">
      <b-navbar-brand to="/" class="d-lg-none"><img src="/img/logo1111.png"/></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto">
          <b-nav-item to="/about">О нас</b-nav-item>
          <b-nav-item-dropdown text="Каталог оборудования">
            <b-dropdown-item to="/atlascopco">Atlas Copco</b-dropdown-item>
            <b-dropdown-item to="/tamsan">Tamsan</b-dropdown-item>
            <b-dropdown-item to="/drytec">Drytec</b-dropdown-item>
            <b-dropdown-item to="/consumables">Расходные материалы</b-dropdown-item>
            <b-dropdown-item to="recuperation">Рекуперация</b-dropdown-item>
            <b-dropdown-item to="/second">Б/У оборудование</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/services">Услуги</b-nav-item>
          <b-nav-item to="/contacts">Контакты</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>
