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
                    <CardImage src="/img/vint_index.jpg" />
                    <CardBody>
                        <ul>
                            <li>
                                <NuxtLink to="/vint-lmf">
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
                                <NuxtLink to="/bulkmatereal-tamsan">
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
                                <NuxtLink to="/dryair-tamsan">
                                    Tamsan
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
                            src="/img/recuperation.jpg"
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
                        Дизельнi портативнi гвинтові компресори серії TVK
                    </h5>
                    <figure class="card-img">
                        <img
                            src="/img/dizel.jpg"
                            class="card-img-top img-fluid "
                        />
                    </figure>
                    <div class="card-body">
                        <ul>
                            <li>
                                <NuxtLink to="/dizel-tamsan">
                                    Дизельнi портативнi гвинтові компресори
                                    серії TVK
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>

        <article class="row justify-content-center pb-5 pt-5 ">
            <div class="col-lg-10">
                <h1 class="text-center">Наші переваги:</h1>
            </div>
            <div class="col-sm-10">
                <h4>
                    <b-icon icon="check" font-scale="2"></b-icon>Надійне, якісне
                    обладнання та сервіс
                </h4>
                <h4>
                    <b-icon icon="check" font-scale="2"></b-icon> Великий досвід
                    роботи на ринку України
                </h4>
                <h4>
                    <b-icon icon="check" font-scale="2"></b-icon> Індивідуальний
                    підхід до кожного клієнта
                </h4>
            </div>
        </article>
        <article class="row justify-content-center pb-3 pt-5 ">
            <div class="col-lg-10">
                <h1 class="text-center">Наші клієнти:</h1>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <figure>
                        <b-img src="/img/clients/carlsberg.png" fluid> </b-img>
                    </figure>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <figure>
                        <b-img src="/img/clients/kav.jpg" fluid> </b-img>
                    </figure>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <figure>
                        <b-img src="/img/clients/knauf.png" fluid> </b-img>
                    </figure>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <figure>
                        <b-img src="/img/clients/parash.png" fluid> </b-img>
                    </figure>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <figure>
                        <b-img src="/img/clients/skf.jpg" fluid> </b-img>
                    </figure>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <figure>
                        <b-img src="/img/clients/ashan.png" fluid> </b-img>
                    </figure>
                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <figure>
                        <b-img src="/img/clients/rp275.png" fluid> </b-img>
                    </figure>
                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <figure>
                        <b-img src="/img/clients/stol.png" fluid> </b-img>
                    </figure>
                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <figure>
                        <b-img src="/img/clients/kura.png" fluid> </b-img>
                    </figure>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    layout: "default"
};

</script>
