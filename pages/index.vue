<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h1 class="text-center">
          {{ $t('index-p1') }}
        </h1>
        <h4 class="text-center text-secondary">{{ $t('Продаж та обслуговування компресорного обладнання') }}</h4>
      </div>
    </div>
    <section class="row justify-content-center pb-5 pt-5">
      <div class="col-lg-10">
        <div class="carousel-wrapper">
          <b-carousel class="carousel" img-height="480" img-width="1024" indicators>
            <b-carousel-slide img-src="/img/car1.jpg"></b-carousel-slide>
            <b-carousel-slide img-src="/img/car2.jpg"></b-carousel-slide>
            <b-carousel-slide img-src="/img/car3.jpg"></b-carousel-slide>
          </b-carousel>
        </div>
      </div>
    </section>
    <div class="row">
      <div class="col">
        <h2 class="text-center mb-4">
          {{ $t('Каталог обладнання') }}
        </h2>
      </div>
    </div>
    <section class="row justify-content-center">
      <div class="col-lg-3 col-sm-6 d-flex">
        <Card>
          <CardTitle>{{ $t('Гвинтові') }} <br />{{ $t('компресори') }}</CardTitle>
          <CardImage src="/img/vint_index.jpg"></CardImage>
          <CardBody>
            <ul>
              <li>
                <NuxtLink :to="localePath('/gvyntovy-kompresory-lmf')"> LMF </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/gvyntovy-kompresory-tamsan')"> Tamsan </NuxtLink>
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
      <div class="col-lg-3 col-sm-6 d-flex">
        <Card>
          <CardTitle>{{ $t('Компресори для сипких') }} <br />{{ $t('матеріалів') }}</CardTitle>
          <CardImage src="/img/silobas-yan-2.jpg"></CardImage>
          <CardBody>
            <ul>
              <li>
                <NuxtLink :to="localePath('/kompresory-dlya-sypkyh-materialiv-tamsan')"> Tamsan </NuxtLink>
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
      <div class="col-lg-3 col-sm-6 d-flex">
        <Card>
          <CardTitle>{{ $t('Високобарні') }}<br />{{ $t('компресори') }}</CardTitle>
          <CardImage src="/img/highbarcompressor.jpg"></CardImage>
          <CardBody>
            <ul>
              <li>
                <NuxtLink :to="localePath('/vysokobarny-kompresory-tamsan')"> Tamsan </NuxtLink>
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
      <div class="col-lg-3 col-sm-6 d-flex">
        <Card>
          <CardTitle>{{ $t('Осушувачі повітря') }}</CardTitle>
          <CardImage src="/img/dry.jpg"></CardImage>
          <CardBody>
            <ul>
              <li>
                <NuxtLink :to="localePath('/osyshyvachi-povitrya-tamsan')"> Tamsan </NuxtLink>
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </section>
    <section class="row justify-content-center">
      <div class="col-lg-3 col-sm-6 d-flex">
        <Card>
          <CardTitle>{{ $t('Системи') }} <br />{{ $t('рекуперації тепла') }}</CardTitle>
          <CardImage src="/img/recuperation.jpg"></CardImage>
          <CardBody>
            <ul>
              <li>
                <NuxtLink :to="localePath('/systemy-recureratsii-tepla')">
                  {{ $t('Системи') }} <br />{{ $t('рекуперації тепла') }}
                </NuxtLink>
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
      <div class="col-lg-3 col-sm-6 d-flex">
        <Card>
          <CardTitle>{{ $t('Ресівери') }}</CardTitle>
          <CardImage src="/img/reciver.jpg"></CardImage>
          <CardBody>
            <ul>
              <li>
                <NuxtLink :to="localePath('/reciver')">
                  {{ $t('Ресівери') }}
                </NuxtLink>
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
      <div class="col-lg-3 col-sm-6 d-flex">
        <Card>
          <CardTitle>{{ $t('Витратні матеріали') }} <br />{{ $t('та запасні частини') }}</CardTitle>
          <CardImage src="/img/consumables.jpg"></CardImage>
          <CardBody>
            <ul>
              <li>
                <NuxtLink :to="localePath('/vytratny-materialy-ta-zapasny-chastyny')">
                  {{ $t('Витратні матеріали') }} <br />{{ $t('та запасні частини') }}
                </NuxtLink>
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
      <div class="col-lg-3 col-sm-6 d-flex">
        <Card>
          <CardTitle>{{ $t('Дизельні портативні гвинтові компресори серії TVK') }}</CardTitle>
          <CardImage src="/img/dizel.jpg"></CardImage>
          <CardBody>
            <ul>
              <li>
                <NuxtLink :to="localePath('/dizelny-portatyvny-kompresory-tamsan')">
                  {{ $t('Дизельні портативні гвинтові компресори серії TVK') }}
                </NuxtLink>
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </section>
    <article class="row justify-content-center pb-5 pt-5">
      <div class="col-lg-10">
        <h2 class="text-center mb-4">{{ $t('Наші переваги') }}:</h2>
      </div>
      <div class="col-sm-10">
        <h4>
          <b-icon-check font-scale="2" icon="check"></b-icon-check>
          {{ $t('Надійне, якісне обладнання та сервіс') }}
        </h4>
        <h4>
          <b-icon-check font-scale="2" icon="check"></b-icon-check>
          {{ $t('Великий досвід роботи на ринку України') }}
        </h4>
        <h4>
          <b-icon-check font-scale="2" icon="check"></b-icon-check>
          {{ $t('Індивідуальний підхід до кожного клієнта') }}
        </h4>
      </div>
    </article>
    <article class="row justify-content-center pb-3 pt-5">
      <div class="col-lg-10">
        <h2 class="text-center mb-4">{{ $t('Наші клієнти') }}:</h2>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6 col-sm-12 text-center my-2">
          <figure>
            <b-img fluid src="/img/clients/carlsberg.png"></b-img>
          </figure>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 text-center my-2">
          <figure>
            <b-img fluid src="/img/clients/kav.jpg"></b-img>
          </figure>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 text-center my-2">
          <figure>
            <b-img fluid src="/img/clients/knauf.png"></b-img>
          </figure>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 text-center my-2">
          <figure>
            <b-img fluid src="/img/clients/parash.png"></b-img>
          </figure>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 text-center my-2">
          <figure>
            <b-img fluid src="/img/clients/skf.jpg"></b-img>
          </figure>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 text-center my-2">
          <figure>
            <b-img fluid src="/img/clients/ashan.png"></b-img>
          </figure>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 text-center my-2">
          <figure>
            <b-img fluid src="/img/clients/rp275.png"></b-img>
          </figure>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 text-center my-2">
          <figure>
            <b-img fluid src="/img/clients/stol.png"></b-img>
          </figure>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 text-center my-2">
          <figure>
            <b-img fluid src="/img/clients/kura.png"></b-img>
          </figure>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
import {BCarousel, BCarouselSlide, BIconCheck} from 'bootstrap-vue'
import Card from '../components/Card';
import CardBody from '../components/CardBody';
import CardTitle from '../components/CardTitle';
import CardImage from '../components/CardImage';

export default {
  components: {Card, CardBody, CardTitle, CardImage},
  layout: 'default',
  head() {
    return {
      title: `${this.$t('index-p1')}  - ${process.env.siteName}`,
      meta: [
        {
          name: 'description',
          content: `AirSystems - ${this.$t('Головна')}`,
        },
      ],
    };
  },
};
</script>
