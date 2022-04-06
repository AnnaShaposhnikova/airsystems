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
                <div class="row justify-content-center pt-5 pb-3">
                    <div class="col-lg-2 d-none d-lg-block catalog-footer">
                       
                            <div><a href="/" class="footernav">Головна</a></div>
                             
                            <div><a href="/about" class="footernav">О нас</a></div>
                            
                            <div><a href="/services" class="footernav">Послуги</a></div>
                            <div><a href="/contacts" class="footernav">Контакти</a></div>                          
                        
                    </div>
                    <div class="col-lg-5 d-none d-lg-block catalog-footer">
                      
                        <div>LMF</div>
                                                  
                            <div class="indent"> <a href="/vint-lmf"  class="footernav">Гвинтовi компресори</a></div>
                       
                        <div>Tamsan</div>
                                                 
                            <div class="indent"><a href="/vint-tamsan"  class="footernav">Гвинтовi компресори</a></div>
                            <div class="indent"><a href="/dryair-tamsan"  class="footernav">Осушувачi повiтря</a></div>
                            <div class="indent"><a href="/bulkmatereal-tamsan"  class="footernav">Компресори для сипких матеріалів</a></div>
                            <div class="indent"><a href="/high-tamsan"  class="footernav">Високобарнi компресори</a> </div  >
                            <div class="indent"><a href="/dizel-tamsan"  class="footernav">Дизельнi портативнi гвинтові компресори серії TVK</a></div>
                            <div><a href="/consumables"  class="footernav">Витратні матеріали та запасні частини</a></div>
                            <div><a href="/recuperation"  class="footernav">Системи рекуперації тепла</a></div>
                            <div><a href="/reciver"  class="footernav">Ресiвери</a></div>                       
                                                
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-2 text-center">
                        <h5 class="mb-3">Ми у соцмережах</h5>
                        <a href="https://www.facebook.com" class="socialmedia" ><b-icon-facebook class="h1 mx-2"></b-icon-facebook></a>
                        <a href="https://www.instagram.com" class="socialmedia"><b-icon-instagram class="h1 mx-2"></b-icon-instagram></a>
                    </div>
        
                    <div class="col-sm-12  col-md-6 col-lg-3 text-center">
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
    BIconCheck,
   

   
} from "bootstrap-vue";
export default {};
</script>
