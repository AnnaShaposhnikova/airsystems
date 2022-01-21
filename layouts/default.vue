<template>
    <div class="body">
        <header class="container-fluid ">
            <section class=" d-lg-none">
                <div class="text-center">
                    <div>
                        <Tel class="contacts"/>
                    </div>
                   <div>
                       <Mail class="contacts"/>
                   </div>

                </div>
            </section>
            <section class="row align-items-center justify-content-center d-none d-lg-flex">
                <div class="col-lg-4 text-center">
                   <Tel class="contacts"/>
                </div>
                <div class="col-lg-4 text-center">
                     <Logo/>
                </div>
                <div class="col-lg-4 text-center contacts">
                   <Mail class="contacts"/>
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
            <div class="col-sm-5">
                <h5 class="mb-3 text-center">О нас</h5>
                <p class="indent">
             ПОВІТРЯНІ СИСТЕМИ - це енергійна та надійна компанія,
              що працює на ринку компресорного обладнання з 1998 року і є 
              офіційним дилером виробників компресорного обладнання: Atlas Copco (Бельгія), 
              LMF (Австрія), Tamsan (Туреччина) на всій території України.              
                </p>      
            </div>
            <div class="col-sm-4 text-center">
                <h5 class="mb-3">
                    Наші  контакти
                </h5>
                <div class="text-center">
                    <div>
                        <Tel  class="a-footer-color"/>
                    </div>
                    <div>
                        <Mail  class="a-footer-color"/>
                    </div>
                </div>

            </div>
            <div class="col-sm-2 text-center">
                <!-- <h5 class="mb-3">Ми у соцмережах</h5>
                <b-icon-facebook class="h1 mx-2"></b-icon-facebook>
                <b-icon-instagram class="h1 mx-2"></b-icon-instagram> -->
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
