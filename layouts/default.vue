<template>
    <div class="body">
        <header class="container-fluid ">
            <section class=" d-lg-none">
                <div class="text-center">
                    <div>
                        <Tel/>
                    </div>
                   <div>
                       <Mail/>
                   </div>

                </div>
            </section>
            <section class="row align-items-center justify-content-center d-none d-lg-flex">
                <div class="col-lg-4 text-center">
                   <Tel/>
                </div>
                <div class="col-lg-4 text-center">
                     <Logo/>
                </div>
                <div class="col-lg-4 text-center">
                   <Mail/>
                </div>
            </section>

            <section class="row align-items-center justify-content-center">
                <div class="col-12 p-0 m-0">
                    <NavBar/>
                </div>
            </section>
        </header>

        <main>
           <Nuxt/>
        </main>
        <footer>
            <section class="container">
                <div class="row justify-content-center p-3">
                    <div class="col-lg-3 col-md-6 brand text-center">
                        <a href="atlascopco.html">
                            <img src="/img/1_brand.png" class="img-fluid" style="height:50px">
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 brand text-center ">
                        <a href="/tamsan.html">
                            <img src="/img/2_brand.png" class="img-fluid" style="height:50px">
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 brand text-center">
                        <a href="drytec.html">
                            <img src="/img/4_brand.png" class="img-fluid" style="height:50px">
                        </a>
                    </div>
                </div>
    </section>
    <section class="container">
        <div class="row">
            <div class="col-sm-4">
                <h5 class="mb-3 text-center">О нас</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit eros vel diam
                    tincidunt,
                    ut consectetur neque porta. Quisque tempus, mauris tristique tempor venenatis, enim nisi
                    imperdiet magna.
                </p>
            </div>
            <div class="col-sm-4 text-center">
                <h5 class="mb-3">
                    Наши контакты
                </h5>
                <div class="text-center">
                    <div>
                        <Tel/>
                    </div>
                    <div>
                        <Mail/>
                    </div>
                </div>

            </div>
            <div class="col-sm-4 text-center">
                <h5 class="mb-3">Мы в соцсетях</h5>
                <b-icon-facebook class="h1 mx-2"></b-icon-facebook>
                <b-icon-instagram class="h1 mx-2"></b-icon-instagram>
            </div>
        </div>
    </section>

    </footer>
    </div>
</template>

<script>
import {BIcon, BIconArrowUp, BIconFacebook, BIconInstagram} from 'bootstrap-vue';
export default {}
</script>
