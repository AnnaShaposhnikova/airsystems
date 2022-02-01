<template>
    <div class="container-fluid">
        <section class="row justify-content-center pb-5 pt-5">
            <div class="col-lg-10">
                <div class="carousel-wrapper">
                    <b-carousel
                        indicators
                        img-width="1024"
                        img-height="480"
                        class="carousel"
                    >
                        <b-carousel-slide
                            img-src="/img/car1.jpg"
                        ></b-carousel-slide>
                        <b-carousel-slide
                            img-src="/img/car2.jpg"
                        ></b-carousel-slide>
                        <b-carousel-slide
                            img-src="/img/car3.jpg"
                        ></b-carousel-slide>
                    </b-carousel>
                </div>
            </div>
        </section>
        <h1 class="text-center">
            Каталог обладнання
        </h1>
        <section class="row justify-content-center">
            <div class="col-lg-3 col-md-6 d-flex">
                <Card>
                    <CardTitle>Гвинтовi <br />компресори</CardTitle>
                    <CardImage src="/img/vintcompressor.jpg" />
                    <CardBody>
                        <ul>
                            <li>
                                <NuxtLink to="/vint-atlascopco">
                                    LMF
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/vint-tamsan">
                                    Tamsan
                                </NuxtLink>
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </div>
            <div class="col-lg-3 col-md-6  d-flex">
                <Card>
                    <CardTitle
                        >Компресори для сипких <br />матерiалiв</CardTitle
                    >
                    <CardImage src="/img/silobas-yan-2.jpg" />
                    <CardBody>
                        <ul>
                            <li>
                                <NuxtLink to="/withoutoil-tamsan">
                                    Tamsan
                                </NuxtLink>
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </div>
            <div class="col-lg-3 col-md-6 d-flex">
                <Card>
                    <CardTitle>Высокобарнi<br />компресори</CardTitle>
                    <CardImage src="/img/highbarcompressor.jpg" />
                    <CardBody>
                        <ul>
                            <li>
                                <NuxtLink to="/high-tamsan">
                                    Tamsan
                                </NuxtLink>
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </div>
            <div class="col-lg-3 col-md-6 d-flex">
                <Card>
                    <CardTitle>Осушувачі повітря</CardTitle>
                    <CardImage src="/img/dry.jpg" />
                    <CardBody>
                        <ul>
                            <li>
                                <NuxtLink to="/drytec">
                                    Осушувачі повітря
                                </NuxtLink>
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </div>
        </section>
        <section class="row justify-content-left">
            <div class="col-lg-3 col-md-6 d-flex">
                <article class="card card1 flex-fill">
                    <h5 class="card-title py-3 text-center">
                        Системи <br />рекуперації тепла
                    </h5>
                    <figure class="card-img">
                        <img
                            src="/img/recup.jpg"
                            class="card-img-top img-fluid "
                        />
                    </figure>
                    <div class="card-body">
                        <ul>
                            <li>
                                <NuxtLink to="/recuperation">
                                    Системи <br />рекуперації тепла
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
            <div class="col-lg-3 col-md-6  d-flex">
                <article class="card card1 flex-fill">
                    <h5 class="card-title py-3 text-center">Ресiвери</h5>
                    <figure class="card-img">
                        <img
                            src="/img/reciver.jpg"
                            class="card-img-top img-fluid "
                        />
                    </figure>
                    <div class="card-body">
                        <ul>
                            <li>
                                <NuxtLink to="/reciver">
                                    Ресiвери
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
            <div class="col-lg-3 col-md-6 d-flex">
                <article class="card card1 flex-fill">
                    <h5 class="card-title py-3 text-center">
                        Витратні матеріали <br />та запасні частини
                    </h5>
                    <figure class="card-img">
                        <img
                            src="/img/consumables.jpg"
                            class="card-img-top img-fluid "
                        />
                    </figure>
                    <div class="card-body">
                        <ul>
                            <li>
                                <NuxtLink to="/consumables">
                                    Витратні матеріали <br />та запасні частини
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
            <div class="col-lg-3 col-md-6 d-flex">
                <article class="card card1 flex-fill">
                    <h5 class="card-title py-3 text-center">
                        Вживане обладнання
                    </h5>
                    <figure class="card-img">
                        <img
                            src="/img/second.jpg"
                            class="card-img-top img-fluid "
                        />
                    </figure>
                    <div class="card-body">
                        <ul>
                            <li>
                                <NuxtLink to="/second">
                                    Вживане обладнання
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
        <!-- 
        <section class="row justify-content-center pb-5 pt-5">
            <div class="col-lg-10">
                <img
                    src="/img/atlas-copco-compressor.jpg"
                    class="d-block  w-100"
                />
            </div>
        </section> -->
        <article class="row justify-content-center pb-5 pt-5 ">
            <div class="col-lg-10">
                <h1 class="text-center">Наші переваги:</h1>
            </div>
            <div class="col-sm-10">
                <div class="perevagy-wrapper">
                    <b-icon icon="check" font-scale="3" ></b-icon>
                    <h4 class="perevagy">Надійне, якісне обладнання та сервіс</h4>
                </div>
                
                <h4> <b-icon icon="check" font-scale="2"></b-icon> Великий досвід роботи на ринку України</h4>
                <h4> <b-icon icon="check" font-scale="2"></b-icon> Індивідуальний підхід до кожного клієнта</h4>
              
            </div>
        </article>
    </div>
</template>

<script>
export default {
    layout: "default"
};
</script>
