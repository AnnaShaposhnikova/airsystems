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
                                    Atlas Copco
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
                                <NuxtLink to="/withoutoil-atlascopco">
                                    Atlas Copco
                                </NuxtLink>
                            </li>
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
                                <NuxtLink to="/high-atlascopco">
                                    Atlas Copco
                                </NuxtLink>
                            </li>
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
        </section>

        <section class="row justify-content-center pb-5 pt-5">
            <div class="col-lg-10">
                <img
                    src="/img/atlas-copco-compressor.jpg"
                    class="d-block  w-100"
                />
            </div>
        </section>
        <article class="row justify-content-center">
            <div class="col-lg-10">
                <h3 class="text-center">Наші переваги:</h3>
            </div>
            <div class="col-sm-10">
                <ol>
                    <li>Надійне. якісне обладнання та сервіс</li>
                    <li>Великий досвід роботи на ринку України</li>
                    <li>Індивідуальний підхід до кожного клієнта</li>
                </ol>
            </div>
        </article>
        <article class="row justify-content-center">
            <div class="col-sm-3">
                <h3 class="text-center">О НАС</h3>
            </div>
            <div class="col-sm-10">
                <p>
                    Компанія ПОВІТРЯНІ СИСТЕМИ - це енергійна та надійна
                    компанія, створена з професіоналів, що працює на ринку
                    компресорного обладнання з 1998 року і є офіційним дилером
                    виробників компресорного обладнання: Atlas Copco (Бельгія),
                    LMF (Австрія), Tamsan (Туреччина) на всій території України.
                </p>
                <p>
                    Cпектр послуг, починаючи від повітряного аудиту і закінчуючи
                    сервісним та післягарантійним обслуговуванням, ремонт та
                    капітальний ремонт гвинтових компресорів будь-яких марок. На
                    сьогоднішній день нами встановлено понад 500 одиниць
                    компресорного обладнання.
                </p>
                <p>
                    Поряд із забезпеченням стисненого повітря, іншою перевагою
                    компанії ПОВІТРЯНІ СИСТЕМИ є пошук найбільш вигідного
                    вирішення вашого завдання, що виконується спільно с клієнтом
                    та технічним персоналом компанії. Раціональний підхід до
                    визначення найбільш доцільного рішення при виборі
                    компресорного обладнання, що найбільш підходить для вашого
                    підприємства, є якісною складовою послуг компанії ПОВІТРЯНІ
                    СИСТЕМИ.
                </p>
                <p>
                    Сотні підприємств України змогли переконатися у винятковій
                    надійності та безвідмовності цього обладнання та високій
                    компетентності наших сервіс-інженерів, які щороку проходять
                    курси підвищення кваліфікації.
                </p>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    layout: "default"
};
</script>
