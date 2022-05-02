<template>
    <article class="container-fluid">
        <div class="row">
            <div class="col">
                <h1>
                    Послуги
                </h1>
            </div>
        </div>
        <div class="row pb-3">
            <div class="col">
                <figure class="justify-content-center">
                    <b-img class="mx-auto d-block" fluid src="/img/services.png">
                    </b-img>
                </figure>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <ul>
                    <li>
                        Продаж та встановлення компресорного обладнання: Atlas
                        Copco (Бельгія), LMF (Австрія), Tamsan (Туреччина)
                    </li>
                    <li>Повітряний аудит</li>
                    <li>Сервісне та післягарантійне обслуговування</li>
                    <li>
                        Ремонт та капітальний ремонт гвинтових компресорів
                        будь-яких марок
                    </li>
                </ul>
            </div>
        </div>
    </article>
</template>
<script>
export default {
    layout: "default",
    head() {
        return {
            title: `Послуги - ${process.env.siteName}`,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "AirSystems - Послуги"
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: "ремонт компрессора, техническое обслуживание компрессора, капитальный ремонт компрессора,  ремонт винтового блока, ремонт компресора, технічне обслуговування компресора, капітальний ремонт компресора, ремонт гвинтового блоку, ремонт Atlas Copco, купить Atlas Copco, сервисное обслуживание Atlas Copco, капитальный ремонт Atlas Copco, ремонт Atlas Copco, купити Atlas Copco, сервісне обслуговування Atlas Copco, капітальний ремонт Atlas Copco"
                }
            ]
        };
    }
};
</script>
