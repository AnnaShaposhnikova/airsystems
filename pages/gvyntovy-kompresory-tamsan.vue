<template>
    <article class="container-fluid">
        <div class="row">
            <div class="col">
                <h1>
                    {{$t("Гвинтовi компресори")}} Tamsan
                </h1>
            </div>
        </div>
        <div class="row justify-content-center pb-2">
            <figure class="col mx-auto">
                <b-img fluid src="/img/car1.jpg"></b-img>
            </figure>
        </div>
        <div class="row">
            <div class="col">
                <p class="indent">
                    {{$t("gvyntovy-kompresory-tamsan-p1")}}
                </p>
                <p class="indent">
                    {{$t("gvyntovy-kompresory-tamsan-p2")}}

                </p>
                <p class="indent">
                    {{$t("gvyntovy-kompresory-tamsan-p3")}}
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>
                    {{$t("Гвинтові компресори на ресивері та з осушувачем повітря")}}
                </h3>
            </div>
        </div>
        <div class="row justify-content-center text-center">
            <div class="col-lg-6 col-sm-12">
                <figure>
                    <b-img fluid src="/img/tamsan-page/tamsan1.png"></b-img>
                </figure>
            </div>
            <div class="col-lg-6 col-sm-12">
                <figure>
                    <b-img fluid src="/img/tamsan-page/tamsan2.png"></b-img>
                </figure>
            </div>
        </div>
        <div class="row pb-3">
            <div class="col">
                <div class="table-responsive">
                    <table class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>Модель</th>
                            <th>{{$t("Тиск")}}, бар</th>
                            <th>
                               {{$t("Продуктивність")}}, <br/>
                                м3/{{ $t("хв") }}
                            </th>
                            <th>
                                {{$t("Потужність")}}, <br/>
                                кВт/ л.с
                            </th>
                            <th>
                                {{$t("Приєднувальний")}}<br/>{{$t("розмір")}},<br/>дюйм
                            </th>
                            <th>{{$t("Розміри")}}, мм</th>
                            <th>{{$t("Ресівер")}}, lt</th>
                            <th>{{$t("Вага")}}, кг</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td rowspan="3">TVK 550 TK</td>
                            <td>7</td>
                            <td>0.55</td>
                            <td rowspan="3">4 / 5.5</td>
                            <td rowspan="3">3/4</td>
                            <td rowspan="3">720×2020×1600</td>
                            <td rowspan="3">500</td>
                            <td rowspan="3">280</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>0.45</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>0.35</td>
                        </tr>

                        <tr>
                            <td rowspan="3">TVK 800 TK</td>
                            <td>7</td>
                            <td>0.8</td>
                            <td rowspan="3">5,5 / 7.5</td>
                            <td rowspan="3">3/4</td>
                            <td rowspan="3">720×2020×1600</td>
                            <td rowspan="3">500</td>
                            <td rowspan="3">300</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>0.65</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>0.55</td>
                        </tr>

                        <tr>
                            <td rowspan="3">TVK 1100 TK</td>
                            <td>7</td>
                            <td>1.1</td>
                            <td rowspan="3">7.5 / 10</td>
                            <td rowspan="3">3/4</td>
                            <td rowspan="3">720×2020×1600</td>
                            <td rowspan="3">500</td>
                            <td rowspan="3">420</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>0.85</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>0.78</td>
                        </tr>

                        <tr>
                            <td rowspan="3">TVK 1900 TK</td>
                            <td>7</td>
                            <td>1.8</td>
                            <td rowspan="3">11 / 13</td>
                            <td rowspan="3">3/4</td>
                            <td rowspan="3">800×2020×1650</td>
                            <td rowspan="3">500</td>
                            <td rowspan="3">480</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>1.6</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>1.3</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="row mb-5">
            <div class="col">
                <ul>
                    <li>{{$t("Низькі експлуатаційні витрати")}}</li>
                    <li>
                        {{$t("Єдиний дизайн, включаючи компресор, осушувач та повітряний ресивер")}}
                    </li>
                    <li>
                        {{$t("Зручна панель управління з цифровими та аналоговими опціями")}}
                    </li>
                    <li>
                        {{$t("Кращий захист завдяки спеціальній конструкції кабіни")}}
                    </li>
                    <li>{{ $t("Інтелектуальний компактний дизайн") }}</li>
                    <li>{{$t("Захист від перегріву")}}</li>
                    <li>{{$t("Захист головного двигуна від навантаження")}}</li>
                    <li>
                        {{$t("Надійний корпус, розроблений відповідно до норм СЕ")}}
                    </li>
                    <li>
                        {{ $t("Повітряний ресівер зі стандартною місткістю 500 л") }}
                    </li>
                    <li>
                        {{$t("Простота обслуговування завдяки знімним кришкам компресора")}}
                    </li>
                    <li>
                        {{$t("Гідравлічні шланги, стійкі до високого тиску та тепла")}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="row justify-content-center mb-3">
            <div class="col-lg-4 col-md-6 col-sm-12">
                <figure>
                    <b-img fluid src="/img/tamsan-page/tamsan3.png"></b-img>
                </figure>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <figure>
                    <b-img fluid src="/img/tamsan-page/tamsan4.png"></b-img>
                </figure>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 col-sm-12">
                <figure>
                    <b-img fluid src="/img/tamsan-page/tamsan5.png"></b-img>
                </figure>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <figure>
                    <b-img fluid src="/img/tamsan-page/tamsan6.png"></b-img>
                </figure>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div>
                    <h3>
                        {{$t("Компресори гвинтові")}}E series 4-22 кВт
                    </h3>
                </div>
                <p class="indent">
                    {{$t("gvyntovy-kompresory-tamsan-p4")}}
                </p>
                <p class="indent">
                    {{$t("gvyntovy-kompresory-tamsan-p5")}}
                </p>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 col-sm-12">
                <figure>
                    <b-img fluid src="/img/tamsan-page/tamsan8.png">
                    </b-img>
                </figure>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <figure>
                    <b-img fluid src="/img/tamsan-page/tamsan7.png">
                    </b-img>
                </figure>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <figure>
                    <b-img fluid src="/img/tamsan-page/tamsan9.png">
                    </b-img>
                </figure>
            </div>
        </div>
        <div class="row pb-3">
            <div class="col">
                <div class="table-responsive ">
                    <table class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>Модель</th>
                            <th>{{$t("Тиск")}}, бар</th>
                            <th>
                                {{ $t("Продуктивність") }}, <br/>
                                м3/{{$t("хв") }}
                            </th>
                            <th>
                                {{ $t("Потужність") }}, <br/>
                                кВт/ л.с
                            </th>
                            <th>

                                {{$t("Приєднувальний")}}
                                <br/>{{ $t("розмір") }},<br/>дюйм
                            </th>
                            <th>{{ $t("Розміри") }}, мм</th>
                            <th>{{ $t("Вага") }}, кг</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td rowspan="3">TVK 550 E</td>
                            <td>7</td>
                            <td>0.55</td>
                            <td rowspan="3">4 / 5.5</td>
                            <td rowspan="3">3/4</td>
                            <td rowspan="3">
                                730×970×1100
                            </td>
                            <td rowspan="3">185</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>0.45</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>0.35</td>
                        </tr>

                        <tr>
                            <td rowspan="3">TVK 800 E</td>
                            <td>7</td>
                            <td>0.8</td>
                            <td rowspan="3">5.5 / 7.5</td>
                            <td rowspan="3">3/4</td>
                            <td rowspan="3">
                                730×970×1100
                            </td>
                            <td rowspan="3">240</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>0.65</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>0.55</td>
                        </tr>

                        <tr>
                            <td rowspan="3">TVK 1100 E</td>
                            <td>7</td>
                            <td>1.1</td>
                            <td rowspan="3">7.5/10</td>
                            <td rowspan="3">3/4</td>
                            <td rowspan="3">
                                800×1250×1220
                            </td>
                            <td rowspan="3">245</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>0.85</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>0.78</td>
                        </tr>

                        <tr>
                            <td rowspan="3">TVK 1900 E</td>
                            <td>7</td>
                            <td>1.85</td>
                            <td rowspan="3">11/15</td>
                            <td rowspan="3">3/4</td>
                            <td rowspan="3">
                                800×1250×1220
                            </td>
                            <td rowspan="3">360</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>1.6</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>1.4</td>
                        </tr>

                        <tr>
                            <td rowspan="3">TVK 2400 E</td>
                            <td>7</td>
                            <td>2.42</td>
                            <td rowspan="3">15/20</td>
                            <td rowspan="3">3/4</td>
                            <td rowspan="3">
                                800×1250×1220
                            </td>
                            <td rowspan="3">370</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>2.1</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>1.8</td>
                        </tr>

                        <tr>
                            <td rowspan="3">TVK 3000 E</td>
                            <td>7</td>
                            <td>3.01</td>
                            <td rowspan="3">18.5 / 25</td>
                            <td rowspan="3">1</td>
                            <td rowspan="3">
                                800×1310×1320
                            </td>
                            <td rowspan="3">475</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>2.6</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>2.1</td>
                        </tr>

                        <tr>
                            <td rowspan="3">TVK 3600 E</td>
                            <td>7</td>
                            <td>3.6</td>
                            <td rowspan="3">22 / 30</td>
                            <td rowspan="3">1</td>
                            <td rowspan="3">
                                800×1310×1320
                            </td>
                            <td rowspan="3">485</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>3.2</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>2.4</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="row mb-5">
            <div class="col">
                <ul>
                    <li>{{ $t("Низька вартість обслуговування") }}</li>
                    <li>
                        {{
                            $t("Розумний дизайн дозволяє керувати за допомогою навантажувача")
                        }}
                    </li>
                    <li>
                        {{$t("Операція без вібрації з антивібраційними накладками")}}
                    </li>
                    <li>
                        {{$t("Легке змащування із застосуванням термостатичного масляного клапана забезпечує роботу навіть у холодну погоду")}}
                    </li>
                    <li>
                        {{$t("Корпус захищений від корозії електростатичним порошковим покриттям")}}
                    </li>
                    <li>{{$t("Естетичний дизайн")}}</li>
                    <li>{{$t("Економія місця, розумний дизайн")}}</li>
                    <li>
                        {{$t("Легке обслуговування завдяки знімним кришкам компресора")}}
                    </li>
                    <li>{{ $t("Електрична безпека високого тиску") }}</li>
                    <li>{{$t("Механічна безпека високого тиску")}}</li>
                    <li>{{ $t("Основний захист двигуна від перевантаження") }}</li>
                    <li>{{$t("Гідравлічні шланги, стійкі до високого тиску та тепла")}}</li>
                </ul>
            </div>
        </div>
        <div class="row justify-content-center  text-center mb-5">
            <div class="col-lg-3 col-md-5 col-sm-12">
                <figure>
                    <b-img fluid src="/img/tamsan-page/tamsan10.png">
                    </b-img>
                </figure>
            </div>
            <div class="col-lg-3 col-md-5 col-sm-12">
                <figure>
                    <b-img fluid src="/img/tamsan-page/tamsan11.png">
                    </b-img>
                </figure>
            </div>
            <div class="col-lg-3 col-md-5 col-sm-12">
                <figure>
                    <b-img fluid src="/img/tamsan-page/tamsan12.png">
                    </b-img>
                </figure>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>
                    {{ $t("Компресори гвинтові") }} E series 30-250 кВт
                </h3>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h4>{{ $t("Готовий до роботи в важких умовах") }}</h4>
                <p class="indent">
                    {{$t("gvyntovy-kompresory-tamsan-p6")}}
                </p>
                <h4>{{ $t("Міцні набори шлангів") }}</h4>
                <p class="indent">
                    {{$t("gvyntovy-kompresory-tamsan-p7")}}
                </p>
                <h4>{{$t("Натяжні пружини")}}</h4>
                <p class="indent">
                    {{$t("gvyntovy-kompresory-tamsan-p8")}}
                </p>
                <h4>{{$t("Обігрівач проти холодної погоди")}}</h4>
                <p class="indent">
                    {{$t("gvyntovy-kompresory-tamsan-p9")}}
                </p>
            </div>
        </div>
        <div class="row justify-content-center text-center">
            <div class="col-lg-4 col-md-6 col-sm-12">
                <figure>
                    <b-img fluid src="/img/tamsan-page/tamsan13.png"></b-img>
                </figure>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <figure>
                    <b-img fluid src="/img/tamsan-page/tamsan14.png"></b-img>
                </figure>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <figure>
                    <b-img fluid src="/img/tamsan-page/tamsan15.png"></b-img>
                </figure>
            </div>
        </div>
        <div class="row pb-3">
            <div class="col">
                <div class="table-responsive">
                    <table class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>Модель</th>
                            <th>{{ $t("Тиск") }}, бар</th>
                            <th>
                                {{ $t("Продуктивність") }}, <br/>
                                м3/{{ $t("хв") }}
                            </th>
                            <th>
                                {{$t("Потужність")}}, <br/>
                                кВт/ л.с
                            </th>
                            <th>
                                {{ $t("Приєднувальний") }} <br/>{{ $t("розмір") }},<br/>дюйм
                            </th>
                            <th>{{ $t("Розміри") }}, мм</th>
                            <th>{{ $t("Вага") }}, кг</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td rowspan="3">TVK 5200 E</td>
                            <td>7</td>
                            <td>5.2</td>
                            <td rowspan="3">30 / 40</td>
                            <td rowspan="3">1 1/4</td>
                            <td rowspan="3">
                                1020×1260×1685
                            </td>
                            <td rowspan="3">610</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>4.3</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>3.6</td>
                        </tr>

                        <tr>
                            <td rowspan="3">TVK 6300 E</td>
                            <td>7</td>
                            <td>6.2</td>
                            <td rowspan="3">37 / 50</td>
                            <td rowspan="3">1 1/4</td>
                            <td rowspan="3">
                                1020×1260×1685
                            </td>
                            <td rowspan="3">690</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>5.2</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>4.3</td>
                        </tr>

                        <tr>
                            <td rowspan="3">TVK 7200 E</td>
                            <td>7</td>
                            <td>7</td>
                            <td rowspan="3">45 / 60</td>
                            <td rowspan="3">1 1/4</td>
                            <td rowspan="3">
                                1020×1260×1685
                            </td>
                            <td rowspan="3">750</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>5.7</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>4.8</td>
                        </tr>
                        <tr>
                            <td rowspan="3">TVK 8100 E</td>
                            <td>7</td>
                            <td>8.1</td>
                            <td rowspan="3">45 / 60</td>
                            <td rowspan="3">1 1/2</td>
                            <td rowspan="3">
                                1250×1530×1800
                            </td>
                            <td rowspan="3">1230</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>6.6</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>5.5</td>
                        </tr>
                        <tr>
                            <td rowspan="3">TVK 8100 E</td>
                            <td>7</td>
                            <td>8.1</td>
                            <td rowspan="3">45 / 60</td>
                            <td rowspan="3">1 1/2</td>
                            <td rowspan="3">
                                1250×1530×1800
                            </td>
                            <td rowspan="3">1230</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>6.6</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>5.5</td>
                        </tr>
                        <tr>
                            <td rowspan="3">TVK 9800 E</td>
                            <td>7</td>
                            <td>9.8</td>
                            <td rowspan="3">55 / 75</td>
                            <td rowspan="3">1 1/2</td>
                            <td rowspan="3">
                                1250×1530×1800
                            </td>
                            <td rowspan="3">1350</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>8.1</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>6.8</td>
                        </tr>
                        <tr>
                            <td rowspan="3">TVK 12600 E</td>
                            <td>7</td>
                            <td>12</td>
                            <td rowspan="3">75 / 100</td>
                            <td rowspan="3">2</td>
                            <td rowspan="3">
                                1250×1530×1800
                            </td>
                            <td rowspan="3">1445</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>9.6</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td rowspan="3">TVK 15800 E</td>
                            <td>7</td>
                            <td>15.2</td>
                            <td rowspan="3">90 / 120</td>
                            <td rowspan="3">2</td>
                            <td rowspan="3">
                                1600×2050×1900
                            </td>
                            <td rowspan="3">1950</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>13.3</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>11.4</td>
                        </tr>
                        <tr>
                            <td rowspan="3">TVK 18700 E</td>
                            <td>7</td>
                            <td>18</td>
                            <td rowspan="3">110 / 150</td>
                            <td rowspan="3">2</td>
                            <td rowspan="3">
                                1600×2050×1900
                            </td>
                            <td rowspan="3">2200</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>15.2</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>13.3</td>
                        </tr>
                        <tr>
                            <td rowspan="3">TVK 23100 E</td>
                            <td>7</td>
                            <td>22</td>
                            <td rowspan="3">132 / 180</td>
                            <td rowspan="3">2</td>
                            <td rowspan="3">
                                1600×2050×1900
                            </td>
                            <td rowspan="3">2350</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>19.8</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>16.4</td>
                        </tr>
                        <tr>
                            <td rowspan="3">TVK 27800 E</td>
                            <td>7</td>
                            <td>27</td>
                            <td rowspan="3">160 / 215</td>
                            <td rowspan="3">DN80</td>
                            <td rowspan="3">
                                1600×2900×1900
                            </td>
                            <td rowspan="3">2700</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>19</td>
                        </tr>
                        <tr>
                            <td rowspan="3">TVK 33000 E</td>
                            <td>7</td>
                            <td>33</td>
                            <td rowspan="3">200 / 270</td>
                            <td rowspan="3">DN100</td>
                            <td rowspan="3">
                                1600×2900×1900
                            </td>
                            <td rowspan="3">3500</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>29</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td rowspan="3">TVK 43100 E</td>
                            <td>7</td>
                            <td>41</td>
                            <td rowspan="3">250 / 335</td>
                            <td rowspan="3">DN100</td>
                            <td rowspan="3">
                                1600×2900×1900
                            </td>
                            <td rowspan="3">4100</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>37</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>31</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="row mb-5">
            <div class="col">
                <ul>
                    <li>{{$t("Тривалий термін служби сепаратора")}}</li>
                    <li>
                        {{$t("gvyntovy-kompresory-tamsan-p10")}}
                    </li>
                    <li>
                        {{$t("Зручна панель управління з цифровими та аналоговими опціями")}}
                    </li>
                    <li>{{$t("Електрична безпека високого тиску")}}</li>
                    <li>{{ $t("Захист від перегріву") }}</li>
                    <li>{{ $t("Захист головного двигуна від навантаження") }}</li>
                    <li>{{ $t("Захист двигуна вентилятора від перевантаження") }}</li>
                    <li>{{$t("Салонний фільтр забезпечує низький рівень пилу")}}</li>
                    <li>{{$t("Низька вартість обслуговування")}}</li>
                    <li>
                        {{$t("Робота без вібрації з накладками для запобігання вібрації")}}
                    </li>
                    <li>
                        {{$t("Легка експлуатація навіть в холодну погоду завдяки термостатичному масляному клапану")}}
                    </li>
                    <li>
                        {{$t("Шафа захищена електростатичним порошковим покриттям від корозії")}}
                    </li>
                    <li>{{$t("Легко знімні кришки компресора")}}</li>
                    <li>{{ $t("Легкий запуск завдяки швидкому випуску повітря") }}</li>
                    <li>{{$t("Підвішується за допомогою підйомних вушок")}}</li>
                    <li>{{ $t("Естетичний дизайн") }}</li>
                    <li>
                        {{ $t("Гідравлічні шланги, стійкі до високого тиску та тепла") }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="row justify-content-center text-center">
            <div class="col-lg-3 col-md-5 col-sm-12">
                <figure>
                    <b-img fluid src="/img/tamsan-page/tamsan16.jpg"></b-img>
                </figure>
            </div>
            <div class="col-lg-3 col-md-5 col-sm-12">
                <figure>
                    <b-img fluid src="/img/tamsan-page/tamsan17.jpg"></b-img>
                </figure>
            </div>
            <div class="col-lg-3 col-md-5 col-sm-12">
                <figure>
                    <b-img fluid src="/img/tamsan-page/tamsan18.jpg"></b-img>
                </figure>
            </div>
            <div class="col-lg-3 col-md-5 col-sm-12">
                <figure>
                    <b-img fluid src="/img/tamsan-page/tamsan19.jpg"></b-img>
                </figure>
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
            title: `${this.$t("Гвинтовi компресори")} Tamsan - ${process.env.siteName}`,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: `AirSystems - ${this.$t("Гвинтовi компресори")} Tamsan`
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
