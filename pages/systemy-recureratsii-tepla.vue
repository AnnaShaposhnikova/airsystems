<template>
  <article class="container-fluid">
    <div class="row">
      <div class="col">
        <h1>
          {{ $t('systemy-recureratsii-tepla-h1') }}
        </h1>
      </div>
    </div>
    <div class="row pb-3">
      <div class="col">
        <p class="indent">
          {{ $t('systemy-recureratsii-tepla-p1') }}
        </p>
      </div>
    </div>
    <div class="row justify-content-center pb-2">
      <figure>
        <b-img fluid src="/img/recuperation/recuperation1.jpg"> </b-img>
      </figure>
    </div>
    <div class="row pb-3">
      <div class="col">
        <p class="indent">
          {{ $t('systemy-recureratsii-tepla-p2') }}
        </p>
        <p class="indent">
          {{ $t('systemy-recureratsii-tepla-p3') }}
        </p>
        <p class="indent">
          {{ $t('systemy-recureratsii-tepla-p4') }}
        </p>
        <p class="indent">
          {{ $t('systemy-recureratsii-tepla-p5') }}
        </p>
        <p class="indent">
          {{ $t('systemy-recureratsii-tepla-p6') }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h4>
          {{ $t('Технічні дані') }}
        </h4>
      </div>
    </div>
    <div class="row pb-3">
      <div class="col">
        <div class="table-responsive">
          <table class="table table-bordered table-striped">
            <tbody>
              <tr>
                <td style="text-align: start">{{ $t('Потужність компресора') }}, кВт</td>
                <td>7-22</td>
                <td>30-75</td>
                <td>90-250</td>
              </tr>
              <tr>
                <td style="text-align: start">Рама</td>
                <td>Рама №1</td>
                <td>Рама №2</td>
                <td>Рама №3</td>
              </tr>
              <tr>
                <td style="text-align: start">Модель</td>
                <td>7-22</td>
                <td>30-75</td>
                <td>90-250</td>
              </tr>
              <tr>
                <td style="text-align: start">{{ $t('Вхідна температура води') }}, ºС</td>
                <td>10-40</td>
                <td>10-40</td>
                <td>10-40</td>
              </tr>
              <tr>
                <td style="text-align: start">{{ $t('Вихідна температура води') }}, ºС</td>
                <td>45-80</td>
                <td>45-80</td>
                <td>45-80</td>
              </tr>
              <tr>
                <td style="text-align: start">{{ $t('Потужншсть, що передається') }}, кВт</td>
                <td>5-15</td>
                <td>20-50</td>
                <td>65-180</td>
              </tr>
              <tr>
                <td style="text-align: start">{{ $t('Габарити') }}, мм</td>
                <td>350×500×720</td>
                <td>500×600×850</td>
                <td>700×700×940</td>
              </tr>
              <tr>
                <td style="text-align: start">{{ $t('Вага') }}, кг</td>
                <td>35</td>
                <td>60</td>
                <td>90</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h4>
          {{ $t('Де використовувати рекупероване тепло з компресора') }}
        </h4>
      </div>
    </div>
    <div class="row pb-3">
      <div class="col">
        <div class="table-responsive">
          <table class="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <b-img fluid src="/img/recuperation/rec1.jpg"> </b-img>
                </td>
                <td>
                  <b-img fluid src="/img/recuperation/rec2.jpg"> </b-img>
                </td>
                <td>
                  <b-img fluid src="/img/recuperation/rec3.jpg"> </b-img>
                </td>
                <td>
                  <b-img fluid src="/img/recuperation/rec4.jpg"> </b-img>
                </td>
              </tr>
              <tr>
                <td>{{ $t('Водопостачання') }}</td>
                <td>{{ $t('Обігрів') }}</td>
                <td>{{ $t('Технологічні процеси') }}</td>
                <td>{{ $t('Гаряче повітря для обігріву') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h4>{{ $t('Опції') }}:</h4>
        <ul>
          <li>{{ $t('Примусовий байпас по маслу') }}</li>
          <li>{{ $t('Індикатор температури') }}</li>
          <li>Теплосчетчик</li>
          <li>
            {{ $t('Додатковий розбірний теплообмінник (для непідготовленої води)') }}
          </li>
          <li>{{ $t('Водяний насос') }}</li>
          <li>
            {{ $t('Термостатичні управління вентилятором компресора') }}
          </li>
          <li>{{ $t('Автоматизація процесу нагріву/енергозбереження') }}</li>
          <li>{{ $t('Комплексні рішення під ключ') }}</li>
        </ul>
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
import OrderForm from '../components/OrderForm';

export default {
  components: {OrderForm},
  layout: 'default',
  head() {
    return {
      title: `${this.$t('Системи рекуперації тепла')} - ${process.env.siteName}`,
      meta: [
        {
          hid: '',
          name: 'description',
          content: `AirSystems - ${this.$t('Системи рекуперації тепла')}`,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'рекуперация тепла, система рекуперация тепла, купить систему рекуперации тепла, рекуперація тепла, система рекуперація тепла, купити систему рекуперації тепла',
        },
      ],
    };
  },
};
</script>
