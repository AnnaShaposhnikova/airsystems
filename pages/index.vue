<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <h1 class="text-center">
                    "Повітряні Системи" &mdash; робимо стиснене повітря швидко та якісно
                </h1>
                <h4 class="text-center text-secondary">Продаж та обслуговування компресорного обладнання</h4>
            </div>
        </div>

        <section class="row justify-content-center pb-5 pt-5">
            <div class="col-lg-10">
                <div class="carousel-wrapper">
                    <b-carousel
                        class="carousel"
                        img-height="480"
                        img-width="1024"
                        indicators
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
        <div class="row">
            <div class="col">
                <h2 class="text-center mb-4">
                    Каталог обладнання
                </h2>
            </div>
        </div>

        <section class="row justify-content-center">
            <div class="col-lg-3 col-md-6 d-flex">
                <Card>
                    <CardTitle>Гвинтовi <br/>компресори</CardTitle>
                    <CardImage src="/img/vint_index.jpg"/>
                    <CardBody>
                        <ul>
                            <li>
                                <NuxtLink to="/gvyntovy-kompresory-lmf">
                                    LMF
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/gvyntovy-kompresory-tamsan">
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
                    >Компресори для сипких <br/>матерiалiв
                    </CardTitle
                    >
                    <CardImage src="/img/silobas-yan-2.jpg"/>
                    <CardBody>
                        <ul>
                            <li>
                                <NuxtLink
                                    to="/kompresory-dlya-sypkyh-materialiv-tamsan"
                                >
                                    Tamsan
                                </NuxtLink>
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </div>
            <div class="col-lg-3 col-md-6 d-flex">
                <Card>
                    <CardTitle>Высокобарнi<br/>компресори</CardTitle>
                    <CardImage src="/img/highbarcompressor.jpg"/>
                    <CardBody>
                        <ul>
                            <li>
                                <NuxtLink to="/vysokobarny-kompresory-tamsan">
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
                    <CardImage src="/img/dry.jpg"/>
                    <CardBody>
                        <ul>
                            <li>
                                <NuxtLink to="/osyshyvachi-povitrya-tamsan">
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
                        Системи <br/>рекуперації тепла
                    </h5>
                    <figure class="card-img">
                        <img
                            class="card-img-top img-fluid "
                            src="/img/recuperation.jpg"
                        />
                    </figure>
                    <div class="card-body">
                        <ul>
                            <li>
                                <NuxtLink to="/systemy-recureratsii-tepla">
                                    Системи <br/>рекуперації тепла
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
                            class="card-img-top img-fluid "
                            src="/img/reciver.jpg"
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
                        Витратні матеріали <br/>та запасні частини
                    </h5>
                    <figure class="card-img">
                        <img
                            class="card-img-top img-fluid "
                            src="/img/consumables.jpg"
                        />
                    </figure>
                    <div class="card-body">
                        <ul>
                            <li>
                                <NuxtLink
                                    to="/vytratny-materialy-ta-zapasny-chastyny"
                                >
                                    Витратні матеріали <br/>та запасні частини
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
                            class="card-img-top img-fluid "
                            src="/img/dizel.jpg"
                        />
                    </figure>
                    <div class="card-body">
                        <ul>
                            <li>
                                <NuxtLink
                                    to="/dizelny-portatyvny-kompresory-tamsan"
                                >
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
                <h2 class="text-center mb-4">Наші переваги:</h2>
            </div>
            <div class="col-sm-10">
                <h4>
                    <b-icon font-scale="2" icon="check"></b-icon>
                    Надійне, якісне
                    обладнання та сервіс
                </h4>
                <h4>
                    <b-icon font-scale="2" icon="check"></b-icon>
                    Великий досвід
                    роботи на ринку України
                </h4>
                <h4>
                    <b-icon font-scale="2" icon="check"></b-icon>
                    Індивідуальний
                    підхід до кожного клієнта
                </h4>
            </div>
        </article>
        <article class="row justify-content-center pb-3 pt-5 ">
            <div class="col-lg-10">
                <h2 class="text-center mb-4">Наші клієнти:</h2>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <figure>
                        <b-img fluid src="/img/clients/carlsberg.png"></b-img>
                    </figure>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <figure>
                        <b-img fluid src="/img/clients/kav.jpg"></b-img>
                    </figure>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <figure>
                        <b-img fluid src="/img/clients/knauf.png"></b-img>
                    </figure>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <figure>
                        <b-img fluid src="/img/clients/parash.png"></b-img>
                    </figure>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <figure>
                        <b-img fluid src="/img/clients/skf.jpg"></b-img>
                    </figure>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <figure>
                        <b-img fluid src="/img/clients/ashan.png"></b-img>
                    </figure>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <figure>
                        <b-img fluid src="/img/clients/rp275.png"></b-img>
                    </figure>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <figure>
                        <b-img fluid src="/img/clients/stol.png"></b-img>
                    </figure>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <figure>
                        <b-img fluid src="/img/clients/kura.png"></b-img>
                    </figure>
                </div>
            </div>
        </article>
    </div>
</template>
<script>
export default {
    layout: "default",
    head() {
        return {
            title: `Повітряні Системи - продаж та обслуговування компресорного обладнання  - ${process.env.siteName}`,
            meta: [
                {
                    name: "description",
                    content: "AirSystems - Головна"
                }
            ]
        };
    }
};
</script>
