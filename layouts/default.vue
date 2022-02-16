<template>
    <div class="body">
        <header class="container-fluid ">
            <section class=" d-lg-none">
                <div class="text-center">
                    <div>
                        <Tel />
                    </div>
                    <div>
                        <Mail />
                    </div>
                </div>
            </section>
            <section
                class="row align-items-center justify-content-center d-none d-lg-flex"
            >
                <div class="col-lg-4 text-center">
                    <Logo />
                </div>
                <div class="col-lg-5 text-center"></div>
                <div class="col-lg-3">
                    <Tel class="contacts"/>
                    <Mail class="contacts"/>
                </div>
            </section>

            <section class="row align-items-center justify-content-center">
                <div class="col-12 p-0 m-0">
                    <NavBar />
                </div>
            </section>
        </header>
        <main>
            <Nuxt />
        </main>
        <footer>
            <section class="container">
                <div class="row justify-content-center pt-5 pb-5">
                    <div class="col-sm-4 text-center">
                        <h5 class="mb-3">Мы в соцсетях</h5>
                        <a href="https://www.facebook.com" class="socialmedia" ><b-icon-facebook class="h1 mx-2"></b-icon-facebook></a>
                        <a href="https://www.instagram.com" class="socialmedia"><b-icon-instagram class="h1 mx-2"></b-icon-instagram></a>
                    </div>
        
                    <div class="col-sm-5 text-center">
                        <h5 class="mb-3">
                            Наші контакти
                        </h5>
                        <div class="text-center">
                            <div class="contacts">
                                <Tel  />
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
