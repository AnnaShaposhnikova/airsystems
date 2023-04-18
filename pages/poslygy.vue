<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h1>
          {{ $t('Послуги') }}
        </h1>
      </div>
    </div>
    <div class="row pb-3">
      <div class="col">
        <figure>
          <nuxt-img class="mx-auto d-block img-fluid" src="/img/services.png" :placeholder="[50, 25, 10]" width="887" height="400"/>
        </figure>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ul>
          <li>
            {{ $t('poslygy-p1') }}
          </li>
          <li>{{ $t('Повітряний аудит') }}</li>
          <li>
            {{ $t('poslygy-p2') }}
            Airpol, Aerzener, Almig, Alup, Atlas Copco, Atmos, Bottarini, Busch, Ceccato, CompАir, Demag, Dalgakiran,
            Donaldson, Ecoair, Ekomak, Fiac, Fini, Gardner Denver, Hydrovane, Ingersoll Rand, Kaeser, Mark, MTA,
            Rotorcomp, Worthington, WAN, Ремеза…
          </li>
          <li>
            {{ $t('poslygy-p3') }}
            Airpol, Aerzener, Almig, Alup, Atlas Copco, Atmos, Bottarini, Busch, Ceccato, CompАir, Demag, Dalgakiran,
            Donaldson, Ecoair, Ekomak, Fiac, Fini, Gardner Denver, Hydrovane, Ingersoll Rand, Kaeser, Mark, MTA,
            Rotorcomp, Worthington, WAN, Ремеза…
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'default',
  head() {
    return {
      title: `${this.$t('Послуги')} - ${process.env.siteName}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `AirSystems - ${this.$t('Послуги')}`,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'ремонт компрессора, техническое обслуживание компрессора, капитальный ремонт компрессора,  ремонт винтового блока, ремонт компресора, технічне обслуговування компресора, капітальний ремонт компресора, ремонт гвинтового блоку, ремонт Atlas Copco, купить Atlas Copco, сервисное обслуживание Atlas Copco, капитальный ремонт Atlas Copco, ремонт Atlas Copco, купити Atlas Copco, сервісне обслуговування Atlas Copco, капітальний ремонт Atlas Copco, ремонт Compair, купить Compair, сервисное обслуживание Compair, капитальный Compair, ремонт Compair, купити Compair, сервісне обслуговування Compair, капітальний ремонт Compair, ремонт Ekomak, купить Ekomak, сервисное обслуживание Ekomak, капитальный ремонт Ekomak,ремонт Ekomak, купити Ekomak, сервісне обслуговування Ekomak, капітальний ремонт Ekomak,',
        },
      ],
    };
  },
};
</script>
