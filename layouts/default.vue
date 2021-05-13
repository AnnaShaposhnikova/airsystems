<template>
    <div class="body">
        <header class="container-fluid ">
            <section class=" d-lg-none">
                <div class=" text-center contacts-nav">
                    <div>
                        <Tel/>
                    </div>
                   <div>
                       <Mail/>
                   </div>

                </div>
            </section>
            <section class="row align-items-center justify-content-center d-none d-lg-flex contacts">
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
        <div class="row justify-content-center">
            <div class="col-sm-4 text-сenter">
                <div>
                    <h5 class="text-center"> О нас</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit eros vel diam
                        tincidunt,
                        ut consectetur neque porta. Quisque tempus, mauris tristique tempor venenatis, enim nisi
                        imperdiet magna,
                        vel lacinia purus justo commodo felis. Nullam diam neque, convallis vel pretium et, eleifend
                        eget ex.
                        Praesent sit amet molestie libero. Proin placerat dolor ipsum, ac tempor tortor tincidunt vel.
                        Phasellus cursus a massa at tincidunt. Nullam feugiat massa in suscipit ullamcorper.
                    </p>
                    <div class="text-center">
                        <img src="/img/logo111.png" class="mx-auto my-3">
                    </div>
                </div>
            </div>
            <div class="col-sm-4 text-center">
                <h5>
                    Наши контакты
                </h5>
                <p>
                  <Tel/>
                </p>
                <p>
                   <Mail/>
                </p>
            </div>
            <div class="col-sm-4 text-start">
                <div>
                    <h5 class="text-center">Мы в соцсетях</h5>
                    <div class="brand-social p-3">
                        <a href="https://www.instagram.com">
                            <img src="/img/insagram.jpg" style="height: 50px">
                        </a>
                    </div>
                    <div class="brand-social p-3">
                        <a href="https://www.facebook.com">
                            <img src="/img/facebook.jpg" style="height: 50px">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </footer>
    </div>
</template>
