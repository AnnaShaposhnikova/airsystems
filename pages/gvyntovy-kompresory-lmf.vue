<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <h1>{{ $t("gvyntovy-kompresory") }} LMF</h1>
            </div>
        </div>
        <div class="row pb-2">
            <figure class="col-auto mx-auto">
                <b-img class="lmf-lg" fluid src="/img/vint_index.jpg"></b-img>
            </figure>
        </div>
        <div class="row">
            <div class="col">
                <p class="indent">
                    {{ $t('gvyntovy-kompresory-lmf-p1') }}

                </p>
                <p class="indent">
                    {{ $t('gvyntovy-kompresory-lmf-p2') }}
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>{{$t("gvyntovy-kompresory")}}:</h3>

                <ul>
                    <li>{{ $t("Одно- та двоступеневі рішення") }}</li>
                    <li>{{$t("Діапазон потужності від")}} 4 до 450 кВт</li>
                    <li>{{$t("Варіант приводу зі змінною швидкістю від")}} 22 кВт</li>
                    <li>{{$t("Чудова продуктивність та ефективність")}}</li>
                    <li>
                        {{$t("Одні з найкращих гарантій на гвинтові елементи стиснення")}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div>
                    <h3 class="justify-content-center">
                        {{$t("Компресори гвинтові виробництва LMF серії LX")}}
                    </h3>
                </div>
                <p class="indent">
                    {{$t("gvyntovy-kompresory-lmf-p3")}}

                </p>
                <p class="indent">
                    {{$t("gvyntovy-kompresory-lmf-p17")}}

                </p>
                <p class="indent">
                    {{$t("gvyntovy-kompresory-lmf-p18")}}

                </p>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-4 col-sm-12">
                <figure class="text-center">
                    <b-img fluid src="/img/lmf1.jpg"></b-img>
                </figure>
            </div>
            <div class="col-lg-4 col-sm-12">
                <figure class="text-center">
                    <b-img fluid src="/img/lmf2.jpg"></b-img>
                </figure>
            </div>

            <div class="col-lg-4 col-sm-12">
                <figure class="text-center">
                    <b-img fluid src="/img/lmf3.jpg"></b-img>
                </figure>
            </div>
        </div>

        <div class="row pb-3">
            <div class="col">
                <div class="table-responsive">
                    <table class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th id="first" rowspan="3">Модель</th>
                            <th rowspan="3">
                                {{ $t("Потужність") }},<br/>
                                кВт
                            </th>
                            <th colspan="3">
                                {{$t("Максимальний робочий тиск")}},<br/>
                                Бар
                            </th>

                            <th rowspan="3">
                                {{ $t("Вага") }}, <br/>
                                кг
                            </th>
                            <th rowspan="3">
                                {{ $t("Приєднувальні") }} <br/>
                                {{$t("розміри")}}
                            </th>
                        </tr>
                        <tr>
                            <td class="th">8.5 bar</td>
                            <td class="th">10.5 бар</td>
                            <td class="th">13 бар</td>
                        </tr>
                        <tr>
                            <td class="th" colspan="3">м3/хв</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>LX5</td>
                            <td>5.5</td>
                            <td>0.7</td>
                            <td>0.6</td>
                            <td>0.5</td>
                            <td>240</td>
                            <td>G1</td>
                        </tr>
                        <tr>
                            <td>LX7</td>
                            <td>7.5</td>
                            <td>1.09</td>
                            <td>0.87</td>
                            <td>0.75</td>
                            <td>260</td>
                            <td>G1</td>
                        </tr>

                        <tr>
                            <td>LX11</td>
                            <td>11</td>
                            <td>1.66</td>
                            <td>1.35</td>
                            <td>1.15</td>
                            <td>450</td>
                            <td>G1</td>
                        </tr>
                        <tr>
                            <td>LX15</td>
                            <td>15</td>
                            <td>2.34</td>
                            <td>1.88</td>
                            <td>1.7</td>
                            <td>500</td>
                            <td>G1</td>
                        </tr>
                        <tr>
                            <td>LX18</td>
                            <td>18.5</td>
                            <td>3.2</td>
                            <td>2.5</td>
                            <td>-</td>
                            <td>600</td>
                            <td>G1</td>
                        </tr>
                        <tr>
                            <td>LX22</td>
                            <td>22</td>
                            <td>3.8</td>
                            <td>3.3</td>
                            <td>2.7</td>
                            <td>650</td>
                            <td>G1</td>
                        </tr>
                        <tr>
                            <td>LX30</td>
                            <td>30</td>
                            <td>5.4</td>
                            <td>4.5</td>
                            <td>3.5</td>
                            <td>680</td>
                            <td>G1 1/2</td>
                        </tr>
                        <tr>
                            <td>LX37</td>
                            <td>37</td>
                            <td>6.7</td>
                            <td>5.3</td>
                            <td>3.7</td>
                            <td>700</td>
                            <td>G1 1/2</td>
                        </tr>
                        <tr>
                            <td>LX45</td>
                            <td>45</td>
                            <td>8.3</td>
                            <td>6.5</td>
                            <td>5.3</td>
                            <td>880</td>
                            <td>G1 1/2</td>
                        </tr>
                        <tr>
                            <td>LX55</td>
                            <td>55</td>
                            <td>10.5</td>
                            <td>8.3</td>
                            <td>6.5</td>
                            <td>1350</td>
                            <td>G1 1/2</td>
                        </tr>
                        <tr>
                            <td>LX75</td>
                            <td>75</td>
                            <td>14.1</td>
                            <td>11.6</td>
                            <td>9.4</td>
                            <td>1550</td>
                            <td>G2</td>
                        </tr>
                        <tr>
                            <td>LX90</td>
                            <td>90</td>
                            <td>16.6</td>
                            <td>14.1</td>
                            <td>11.3</td>
                            <td>2000</td>
                            <td>G2</td>
                        </tr>
                        <tr>
                            <td>LX110</td>
                            <td>110</td>
                            <td>21</td>
                            <td>16.8</td>
                            <td>13.8</td>
                            <td>2700</td>
                            <td>DN65</td>
                        </tr>
                        <tr>
                            <td>LX132</td>
                            <td>132</td>
                            <td>23.5</td>
                            <td>20.7</td>
                            <td>16.3</td>
                            <td>2800</td>
                            <td>DN65</td>
                        </tr>
                        <tr>
                            <td>LX160</td>
                            <td>160</td>
                            <td>28.2</td>
                            <td>24.3</td>
                            <td>20.3</td>
                            <td>4200</td>
                            <td>DN80</td>
                        </tr>
                        <tr>
                            <td>LX200</td>
                            <td>200</td>
                            <td>36.6</td>
                            <td>31.9</td>
                            <td>28.4</td>
                            <td>4300</td>
                            <td>DN80</td>
                        </tr>
                        <tr>
                            <td>LX250</td>
                            <td>250</td>
                            <td>45.9</td>
                            <td>39.7</td>
                            <td>33</td>
                            <td>6000</td>
                            <td>DN100</td>
                        </tr>
                        <tr>
                            <td>LX315</td>
                            <td>315</td>
                            <td>55.2</td>
                            <td>49.5</td>
                            <td>45.4</td>
                            <td>7200</td>
                            <td>DN125</td>
                        </tr>
                        <tr>
                            <td>LX355</td>
                            <td>355</td>
                            <td>65.3</td>
                            <td>54.6</td>
                            <td>49.3</td>
                            <td>7400</td>
                            <td>DN125</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h4>{{$t("Стандартні функції")}}</h4>
                <ul>
                    <li>
                        {{$t("gvyntovy-kompresory-lmf-p4")}}
                    </li>
                    <li>
                        {{$t("gvyntovy-kompresory-lmf-p5")}}

                    </li>
                    <li>
                        {{$t("gvyntovy-kompresory-lmf-p6")}}

                    </li>
                    <li>{{$t("gvyntovy-kompresory-lmf-p7")}}</li>
                    <li>{{$t("gvyntovy-kompresory-lmf-p8")}}

                    </li>
                    <li>{{$t("gvyntovy-kompresory-lmf-p9")}}

                    </li>
                    <li>{{$t("gvyntovy-kompresory-lmf-p10")}}

                    </li>
                    <li>{{$t("gvyntovy-kompresory-lmf-p11")}}

                    </li>
                    <li>{{$t("gvyntovy-kompresory-lmf-p12")}}

                    </li>
                    <li>{{$t("gvyntovy-kompresory-lmf-p13")}}
                        </li>
                    <li>{{$t("gvyntovy-kompresory-lmf-p14")}}

                    </li>
                    <li>{{$t("gvyntovy-kompresory-lmf-p15")}}

                    </li>
                    <li>{{$t("gvyntovy-kompresory-lmf-p16")}}

                    </li>
                </ul>
            </div>
        </div>
        <div class="row justify-content-center py-4">
            <div class="col-auto">
                <OrderForm></OrderForm>
            </div>
        </div>
    </div>
</template>
<script>
import OrderForm from "../components/OrderForm";

export default {
    components: {OrderForm},
    layout: "default",
    head() {
        return {
            title: `${this.$t("gvyntovy-kompresory")} LMF - ${process.env.siteName}`,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "AirSystems - Гвинтовi компресори LMF",
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: "компрессор, компрессор винтовой, компресор Atlas Copco, компресор гвинтовий Atlas Copco, купити компресор Atlas Copco, компрессор Atlas Copco, компрессор винтовой Atlas Copco, купить компрессор Atlas Copco, компрессор электрический, компрессор турецкий, компрессор Tamsan, компрессор LMF, компрессор винтовой австрийский, купить компрессор винтовой, купити компресор гвинтовий, компресор, компресор гвинтовий, компресор електричний, компресор турецький, компресор Tamsan, компресор LMF, компресор гвинтовий австрійський, купить компрессор винтовой"
                }
            ]
        };
    }
};
</script>
