<template>
    <div class="container-fluid">
        <article>
            <div class="row">
                <div class="col">
                    <h1>
                        Компресори для сипких матеріалів Tamsan
                    </h1>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>
                        Поршневі компресори Tamko спеціально виготовлені для
                        розвантаження цементу з цементовозів.
                    </p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <figure>
                        <b-img
                            src="img/tamsan-page/b-tamsan/b-tamsan1.jpg"
                            fluid
                        >
                        </b-img>
                    </figure>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <figure>
                        <b-img
                            src="img/tamsan-page/b-tamsan/b-tamsan2.jpg"
                            fluid
                        >
                        </b-img>
                    </figure>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <figure>
                        <b-img
                            src="img/tamsan-page/b-tamsan/b-tamsan3.png"
                            fluid
                        >
                        </b-img>
                    </figure>
                </div>
            </div>

            <div class="row justify-content-center pb-3 pt-3">
                <div class="col-sm-12">
                    <h4>Технічні параметри компресорів TAMKO</h4>
                </div>
            </div>
            <div class="row pb-3">
                <div class="col">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Технічні параметри</th>
                                    <th>Одиниці вимірювання</th>
                                    <th>
                                        <span style="font-weight: bold;"
                                            >TAMKO 7200</span
                                        >
                                    </th>
                                    <th>
                                        <span style="font-weight: bold;"
                                            >TAMKO 10000</span
                                        >
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Продуктивність при тиску 2 бар</td>
                                    <td>м3/хв</td>
                                    <td>7,2</td>
                                    <td>10,2</td>
                                </tr>
                                <tr>
                                    <td>Максимальний тиск</td>
                                    <td>Бар</td>
                                    <td>2</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>Потужність электродвигуна</td>
                                    <td>кВт</td>
                                    <td>18,5</td>
                                    <td>22</td>
                                </tr>
                                <tr>
                                    <td>Електроживлення</td>
                                    <td></td>
                                    <td>400V–3ф-50Гц</td>
                                    <td>400V–3ф-50Гц</td>
                                </tr>
                                <tr>
                                    <td>Poзміри, ДхШхВ</td>
                                    <td>мм</td>
                                    <td>100×1500×1000</td>
                                    <td>900×1500×800</td>
                                </tr>
                                <tr>
                                    <td>Вага</td>
                                    <td>кг</td>
                                    <td>480</td>
                                    <td>572</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>
<script>
export default {
    layout: "default",
    data() {
        return {
            title: `Компресори для сипких матерiалiв Tamsan - ${process.env.siteName}`
        };
    },
    head() {
        return {
            title: this.title,
            meta: [
                {
                    hid: "AirSystems - Компресори для сипких матерiалiв Tamsan",
                    name:
                        "AirSystems - Компресори для сипких матерiалiв Tamsan",
                    content:
                        "AirSystems - Компресори для сипких матерiалiв Tamsan"
                }
            ]
        };
    }
};
</script>
