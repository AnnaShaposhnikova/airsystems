<template>
    <article class="container-fluid">
        <div class="row">
            <div class="col">
                <h1>{{$t("Ресівери для стисненого повітря горизонтальне та вертикальне виконання")}}
                </h1>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <p class="indent">
                    {{$t(("reciver-p1"))}}
                </p>
                <p class="indent">
                    {{$t(("reciver-p2"))}}
                </p>
                <p class="indent">
                    {{$t(("reciver-p3"))}}
                </p>
            </div>
        </div>
        <div class="row justify-content-center pb-2">
            <figure>
                <b-img fluid src="/img/reciver1.jpg"></b-img>
            </figure>
        </div>
        <div class="row pb-3">
            <div class="col">
                <p class="indent">
                    {{ $t(("Максимальний тиск")) }} 11 бар(и).
                </p>
                <p class="indent">
                    Комплект поставки:
                </p>
                <ul>
                    <li>паспорт</li>
                    <li>{{ $t("запобіжний клапан") }}</li>
                    <li>манометр</li>
                    <li>{{ $t("кран зливу конденсату") }}</li>
                </ul>
            </div>
        </div>
        <div class="row pb-3">
            <div class="col">
                <div class="table-responsive">
                    <table class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>{{$t("Типорозмір ресивера")}}</th>
                            <th>{{$t("Номінальна місткість")}}, м3</th>
                            <th>{{ $t("Робочий тиск") }} (МПа)</th>
                            <th>{{ $t("Спосіб установки") }}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Р 20-Р 35</td>
                            <td>0,02 - 0,035</td>
                            <td>1,0</td>
                            <td>Гориз/вертик</td>
                        </tr>
                        <tr>
                            <td>Р 50.294</td>
                            <td>0,05</td>
                            <td>1,0</td>
                            <td>Гориз/вертик</td>
                        </tr>
                        <tr>
                            <td>Р 65.294</td>
                            <td>0.065</td>
                            <td>1,0</td>
                            <td>Гориз/вертик</td>
                        </tr>
                        <tr>
                            <td>Р 100.370</td>
                            <td>0.1</td>
                            <td>1,0</td>
                            <td>Гориз/вертик</td>
                        </tr>
                        <tr>
                            <td>Р 150.370</td>
                            <td>0.15</td>
                            <td>1,0</td>
                            <td>Гориз/вертик</td>
                        </tr>
                        <tr>
                            <td>Р 180.370</td>
                            <td>0.18</td>
                            <td>1,0</td>
                            <td>Гориз/вертик</td>
                        </tr>
                        <tr>
                            <td>Р 200.500</td>
                            <td>0.2</td>
                            <td>1,0</td>
                            <td>Гориз/вертик</td>
                        </tr>
                        <tr>
                            <td>Р 200.600</td>
                            <td>0.2</td>
                            <td>1,0</td>
                            <td>Гориз/вертик</td>
                        </tr>
                        <tr>
                            <td>Р 270.500</td>
                            <td>0.27</td>
                            <td>1,0</td>
                            <td>Гориз/вертик</td>
                        </tr>
                        <tr>
                            <td>Р 270.600</td>
                            <td>0.27</td>
                            <td>1,0</td>
                            <td>Гориз/вертик</td>
                        </tr>
                        <tr>
                            <td>Р 300.600</td>
                            <td>0.3</td>
                            <td>1,0</td>
                            <td>Гориз/вертик</td>
                        </tr>
                        <tr>
                            <td>Р 330.600</td>
                            <td>0.33</td>
                            <td>1,0</td>
                            <td>Гориз/вертик</td>
                        </tr>
                        <tr>
                            <td>Р 500.600</td>
                            <td>0.5</td>
                            <td>1.0</td>
                            <td>Гориз/вертик</td>
                        </tr>
                        <tr>
                            <td>Р 500.600</td>
                            <td>0.5</td>
                            <td>1.6</td>
                            <td>Гориз/вертик</td>
                        </tr>
                        <tr>
                            <td>Р 750.800</td>
                            <td>0.75</td>
                            <td>1.0</td>
                            <td>Гориз/вертик</td>
                        </tr>
                        <tr>
                            <td>Р 900.800</td>
                            <td>0.9</td>
                            <td>1.0</td>
                            <td>Гориз/вертик</td>
                        </tr>
                        <tr>
                            <td>Р 900.800</td>
                            <td>0.9</td>
                            <td>1.6</td>
                            <td>Гориз/вертик</td>
                        </tr>
                        <tr>
                            <td>РВ 1150.900</td>
                            <td>1.15</td>
                            <td>1.0</td>
                            <td>Вертик</td>
                        </tr>
                        <tr>
                            <td>РВ 1500.1000</td>
                            <td>1.5</td>
                            <td>1.0</td>
                            <td>Вертик</td>
                        </tr>
                        <tr>
                            <td>РВ 2000.1200</td>
                            <td>2.0</td>
                            <td>1.0</td>
                            <td>Вертик</td>
                        </tr>
                        <tr>
                            <td>РВ 3200.1200</td>
                            <td>3.2</td>
                            <td>1.0</td>
                            <td>Вертик</td>
                        </tr>
                        <tr>
                            <td>РВ 4000.1400</td>
                            <td>4.0</td>
                            <td>1.0</td>
                            <td>Вертик</td>
                        </tr>
                        <tr>
                            <td>РВ 6300.1400</td>
                            <td>6.3</td>
                            <td>1.0</td>
                            <td>Вертик</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="row justify-content-center py-4">
            <div class="col-auto">
                <OrderForm></OrderForm>
            </div>
        </div>
    </article>
</template>
<script>
import OrderForm from "../components/OrderForm";

export default {
    components: {OrderForm},
    layout: "default",
    head() {
        return {
            title: `${this.$t("Ресівери")} - ${process.env.siteName}`,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: `AirSystems - ${this.$t("Ресівери")}`
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: "ресивер, купить ресивер, ресивер 200литров, ресивер 500 литров, ресивер 900 литров, купити ресівер, ресівер 200 літрів, ресівер 500 літрів, ресівер 900 літрів"
                }
            ]
        };
    }
};
</script>
