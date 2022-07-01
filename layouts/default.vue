<template>
    <div class="body">
        <header class="container-fluid ">
<!--            <section class="d-lg-none">-->
<!--                <div class="text-center">-->
<!--                    <div>-->
<!--                        <Tel class="contacts" />-->
<!--                    </div>-->
<!--                    <div>-->
<!--                        <Mail class="contacts" />-->
<!--                    </div>-->
<!--                </div>-->
<!--            </section>-->
<!--            <section class="row align-items-center justify-content-center d-none d-lg-flex">-->
<!--                <div class="col-lg-4 text-center">-->
<!--                    <Logo />-->
<!--                </div>-->
<!--                <div class="col-lg-5 text-center"></div>-->
<!--                <div class="col-lg-3">-->
<!--                    <Tel class="contacts" />-->
<!--                    <Mail class="contacts" />-->
<!--                </div>-->
<!--            </section>-->

            <section class="row">
                <div class="col p-0 m-0">
                    <NavBar />
                </div>
            </section>
        </header>
        <main>
            <Nuxt />
        </main>
        <footer>
            <section class="container">
                <div class="row justify-content-center pt-5 pb-3">
                    <div class="col-lg-2 d-none d-lg-block catalog-footer">
                        <div>
                            <NuxtLink to="/" class="footernav"
                                >Головна</NuxtLink
                            >
                        </div>

                        <div>
                            <NuxtLink to="/o-nas" class="footernav"
                                >О нас</NuxtLink
                            >
                        </div>

                        <div>
                            <NuxtLink to="/poslygy" class="footernav"
                                >Послуги</NuxtLink
                            >
                        </div>
                        <div>
                            <NuxtLink to="/contacts" class="footernav"
                                >Контакти</NuxtLink
                            >
                        </div>
                    </div>
                    <div class="col-lg-5 d-none d-lg-block catalog-footer">
                        <div>LMF</div>

                        <div class="indent">
                            <NuxtLink
                                to="/gvyntovy-kompresory-lmf"
                                class="footernav"
                                >Гвинтовi компресори</NuxtLink
                            >
                        </div>

                        <div>Tamsan</div>

                        <div class="indent">
                            <NuxtLink
                                to="/gvyntovy-kompresory-tamsan"
                                class="footernav"
                                >Гвинтовi компресори</NuxtLink
                            >
                        </div>
                        <div class="indent">
                            <NuxtLink
                                to="/osyshyvachi-povitrya-tamsan"
                                class="footernav"
                                >Осушувачi повiтря</NuxtLink
                            >
                        </div>
                        <div class="indent">
                            <NuxtLink
                                to="/kompresory-dlya-sypkyh-materialiv-tamsan"
                                class="footernav"
                                >Компресори для сипких матеріалів</NuxtLink
                            >
                        </div>
                        <div class="indent">
                            <NuxtLink
                                to="/vysokobarny-kompresory-tamsan"
                                class="footernav"
                                >Високобарнi компресори</NuxtLink
                            >
                        </div>
                        <div class="indent">
                            <NuxtLink
                                to="/dizelny-portatyvny-kompresory-tamsan"
                                class="footernav"
                                >Дизельнi портативнi гвинтові компресори серії
                                TVK</NuxtLink
                            >
                        </div>
                        <div>
                            <NuxtLink
                                to="/vytratny-materialy-ta-zapasny-chastyny"
                                class="footernav"
                                >Витратні матеріали та запасні частини</NuxtLink
                            >
                        </div>
                        <div>
                            <NuxtLink
                                to="/systemy-recureratsii-tepla"
                                class="footernav"
                                >Системи рекуперації тепла</NuxtLink
                            >
                        </div>
                        <div>
                            <NuxtLink to="/reciver" class="footernav">Ресiвери</NuxtLink>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-2 text-center">
                        <h5 class="mb-3">Ми у соцмережах</h5>
                        <a href="https://www.facebook.com" class="socialmedia"
                            ><b-icon-facebook class="h1 mx-2"></b-icon-facebook
                        ></a>
                        <a href="https://www.instagram.com" class="socialmedia"
                            ><b-icon-instagram
                                class="h1 mx-2"
                            ></b-icon-instagram
                        ></a>
                    </div>

                    <div class="col-sm-12  col-md-6 col-lg-3 text-center">
                        <h5 class="mb-3">
                            Наші контакти
                        </h5>
                        <div class="text-center">
                            <div class="contacts">
                                <Tel />
                            </div>
                            <div class="contacts">
                                <Mail />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    </div>
</template>

<script>
import {
    BIcon,
    BIconArrowUp,
    BIconFacebook,
    BIconInstagram,
    BIconCheck
} from "bootstrap-vue";
export default {};
</script>
