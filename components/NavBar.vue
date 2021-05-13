<template>

    <b-navbar toggleable="lg" type="light" variant="info">
      <b-navbar-brand href="#" class="d-lg-none"><img src="/img/logo1111.png"/></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto">
          <b-nav-item href="#">О нас</b-nav-item>
          <b-nav-item-dropdown text="Каталог оборудования">
            <b-dropdown-item href="#">Atlas Copco</b-dropdown-item>
            <b-dropdown-item href="#">Tamsan</b-dropdown-item>
            <b-dropdown-item href="#">Drytec</b-dropdown-item>
            <b-dropdown-item href="#">Расходные материалы</b-dropdown-item>
            <b-dropdown-item href="#">Рекуперация</b-dropdown-item>
            <b-dropdown-item href="#">Б/У оборудование</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="services.html" >Услуги</b-nav-item>
          <b-nav-item href="contacts.html" >Контакты</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>







<!--  <nav class="navbar navbar-expand-lg navbar-light ">-->
<!--    <div class="container-fluid">-->
<!--      <a class="navbar-brand d-lg-none" href="index.html"><img src="/img/logo1111.png"/></a>-->
<!--      <button class="navbar-toggler" type="button" data-toggle="collapse"-->
<!--              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"-->
<!--              aria-expanded="false" aria-label="Toggle navigation">-->
<!--        <span class="navbar-toggler-icon"></span>-->
<!--      </button>-->
<!--      <div class="collapse navbar-collapse" id="navbarSupportedContent">-->
<!--        <ul class="navbar-nav mx-auto">-->
<!--          <li class="nav-item">-->
<!--            <a class="nav-link active" aria-current="page" ">Про нас</a>-->
<!--          </li>-->
<!--          <li class="nav-item dropdown">-->
<!--            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"-->
<!--               data-toggle="dropdown" aria-expanded="false">-->

<!--            </a>-->
<!--            <b-nav-item-dropdown text="Каталог оборудования">-->
<!--              <li><a class="dropdown-item" href="atlascopco.html">Atlas Copco</a></li>-->
<!--              <li><a class="dropdown-item" href="tamsan.html">Tamsan</a></li>-->
<!--              <li><a class="dropdown-item" href="drytec.html">Drytec</a></li>-->
<!--              <li><a class="dropdown-item" href="consumables.html">Расходные материалы</a></li>-->
<!--              <li><a class="dropdown-item" href="recuperation.html"> Рекуперация</a></li>-->
<!--              <li><a class="dropdown-item" href="by.html">Б/У оборудование</a></li>-->
<!--            </ul>-->
<!--          </li>-->
<!--          <li class="nav-item">-->
<!--            <a class="nav-link" aria-current="page" href="services.html">Услуги</a>-->
<!--          </li>-->
<!--          <li class="nav-item">-->
<!--            <a class="nav-link" aria-current="page" href="contacts.html">Контакты</a>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </div>-->
<!--    </div>-->
<!--  </nav>-->
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>
