<template>
  <article class="container-fluid">
    <div class="row">
      <div class="col">
        <h1>{{ $t('Високобарні компресори') }} Tamsan</h1>
      </div>
    </div>
    <div class="row justify-content-center text-center">
      <div class="col-lg-6 col-sm-12">
        <figure>
          <nuxt-img class="img-fluid" width="520" height="400" src="/img/tamsan-page/high-tamsan/high-tamsan1.png"> </nuxt-img>
        </figure>
      </div>
      <div class="col-lg-6 col-sm-12">
        <figure>
          <nuxt-img class="img-fluid" width="520" height="400" src="/img/tamsan-page/high-tamsan/high-tamsan2.jpg"> </nuxt-img>
        </figure>
      </div>
    </div>
    <div class="row pb-3">
      <div class="col">
        <p class="indent">
          {{ $t('vysokobarny-kompresory-tamsan-p1') }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h4>{{ $t('Технічні параметри компресорів') }} TAMKO</h4>
      </div>
    </div>

    <div class="rowpb-3">
      <div class="col">
        <div class="table-responsive">
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th id="first" rowspan="2">Модель</th>

                <th colspan="3">{{ $t('Продуктивність') }}, л3</th>
                <th rowspan="2">
                  {{ $t('Максимальний') }} <br />
                  {{ $t('робочий тиск') }}, Бар
                </th>

                <th rowspan="2">
                  {{ $t('Потужність') }},<br />
                  кВт / л.c
                </th>

                <th rowspan="2">
                  {{ $t('Приєднувальні') }} <br />
                  {{ $t('розміри') }}
                </th>
                <th rowspan="2">{{ $t('Розміри') }}, мм</th>
                <th rowspan="2">
                  {{ $t('Вага') }}, <br />
                  кг
                </th>
              </tr>
              <tr>
                <td class="th">8.5 bar</td>
                <td class="th">10.5 бар</td>
                <td class="th">13 бар</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TB 6/40 BOOSTER</td>
                <td>5800</td>
                <td>8000</td>
                <td>10400</td>
                <td>40</td>
                <td>30/40</td>
                <td>1 1/4</td>
                <td>1550×900×1100</td>
                <td>650</td>
              </tr>
              <tr>
                <td>TB 5/40 BOOSTER</td>
                <td>4500</td>
                <td>6500</td>
                <td>8400</td>
                <td>40</td>
                <td>22/30</td>
                <td>1 1/4</td>
                <td>1040×880×1100</td>
                <td>550</td>
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
      title: `${this.$t('Високобарні компресори')} Tamsan - ${process.env.siteName}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `AirSystems - ${this.$t('Високобарні компресори')} Tamsan`,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'компрессор высокого давления, компресор високого тиску',
        },
      ],
    };
  },
};
</script>
