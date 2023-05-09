<template>
  <article class="container-fluid">
    <div class="row">
      <div class="col">
        <h1>{{ $t('Компресори для сипких матеріалів') }} Tamsan</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p>
          {{ $t('bulk-material-p1') }}
        </p>
        <h4>
          {{ $t('bulk-material-h2') }}
        </h4>
        <p>
          {{ $t('bulk-material-p2') }}
        </p>
        <h4>
          {{ $t('bulk-material-h3') }}
        </h4>
        <p>
          {{ $t('bulk-material-p3') }}
        </p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-6 col-sm-12">
        <figure>
          <nuxt-img class="img-fluid" width="520" height="400" src="/img/tamsan-page/b-tamsan/b-tamsan1.jpg"></nuxt-img>
        </figure>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <figure>
          <nuxt-img class="img-fluid" width="520" height="400" src="/img/tamsan-page/b-tamsan/b-tamsan2.jpg"> </nuxt-img>
        </figure>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <figure>
          <nuxt-img class="img-fluid" width="520" height="400" src="/img/tamsan-page/b-tamsan/b-tamsan3.png"> </nuxt-img>
        </figure>
      </div>
    </div>

    <div class="row justify-content-center pb-3 pt-3">
      <div class="col-sm-12">
        <h4>{{ $t('Технічні параметри компресорів') }} TAMKO</h4>
      </div>
    </div>
    <div class="row pb-3">
      <div class="col">
        <div class="table-responsive">
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>{{ $t('Технічні параметри') }}</th>
                <th>{{ $t('Одиниці вимірювання') }}</th>
                <th>
                  <span style="font-weight: bold">TAMKO 7200</span>
                </th>
                <th>
                  <span style="font-weight: bold">TAMKO 10000</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ $t('Продуктивність при тиску') }} 2 бар</td>
                <td>м3/хв</td>
                <td>7,2</td>
                <td>10,2</td>
              </tr>
              <tr>
                <td>{{ $t('Максимальний тиск') }}</td>
                <td>Бар</td>
                <td>2</td>
                <td>2</td>
              </tr>
              <tr>
                <td>{{ $t('Потужність электродвигуна') }}</td>
                <td>кВт</td>
                <td>18,5</td>
                <td>22</td>
              </tr>
              <tr>
                <td>{{ $t('Електроживлення') }}</td>
                <td></td>
                <td>400V–3ф-50Гц</td>
                <td>400V–3ф-50Гц</td>
              </tr>
              <tr>
                <td>{{ $t('Розміри') }}, ДхШхВ</td>
                <td>мм</td>
                <td>100×1500×1000</td>
                <td>900×1500×800</td>
              </tr>
              <tr>
                <td>{{ $t('Вага') }}</td>
                <td>кг</td>
                <td>480</td>
                <td>572</td>
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
import OrderForm from '../components/OrderForm';
export default {
  components: {OrderForm},
  layout: 'default',
  head() {
    return {
      title: `${this.$t('Компресори для сипких матерiалiв')} Tamsan - ${process.env.siteName}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `AirSystems - ${this.$t('Компресори для сипких матерiалiв')} Tamsan`,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'компрессор для сыпучих материалов, компрессор для цемента, купить компрессор для сыпучих материалов, компресор для сипких матеріалів, компресор для цементу, купити компресор для сипких матеріалів',
        },
      ],
    };
  },
  nuxtI18n: {
    paths: {
      ua: '/kompresory-dlya-sypkyh-materialiv-tamsan',
      ru: '/kompressory-dlya-sypuchih-materialov-tamsan',
    },
  },
};
</script>
