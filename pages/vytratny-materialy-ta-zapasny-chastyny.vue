<template>
    <article class="container-fluid">
        <div class="row">
            <div class="col">
                <h1>
                    {{ $t("Витратні матеріали та запасні частини") }}
                </h1>
                <figure class="text-center m-3">
                    <b-img fluid src="/img/consumables.jpg"></b-img>
                </figure>
            </div>
        </div>
        <div class="row pb-3">
            <div class="col">
                <p class="indent">
                    {{$t("vytratny-materialy-p1")}}
                    : Airpol, Aerzener, Almig, Alup,
                    Atlas Copco, Atmos, Bottarini, Busch, Ceccato, CompАir,
                    Demag, Dalgakiran, Donaldson, Ecoair, Ekomak, Fiac,
                    Fini, Gardner Denver, Hydrovane, Ingersoll Rand, Kaeser,
                    Mark, MTA, Rotorcomp, Worthington, WAN, Ремеза…
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <ul>
                    <li>{{ $t("Повітряні фільтри") }}</li>
                    <li>{{ $t("Масляні фільтри") }}</li>
                    <li>{{ $t("Сепаратори") }}</li>
                    <li>{{ $t("Компресорне масло") }}</li>
                    <li>{{ $t("Ремені, шківи") }}</li>
                    <li>{{ $t("Радіатори і теплообмінники") }}</li>
                    <li>
                        {{ $t("Термостати, датчики температури і тиску для компресорів") }}
                    </li>
                    <li>{{ $t("Сальники і ущільнення") }}</li>
                    <li>{{ $t("Клапани, ремкомплекти клапанів") }}</li>
                    <li>{{ $t("Шланги та рукави високого тиску") }}</li>
                    <li>{{ $t("Пульти керування для компресорного обладнання") }}</li>
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
import OrderForm from "../components/OrderForm";

export default {
    components: {OrderForm},
    layout: "default",
    head() {
        return {
            title: `${this.$t("Витратні матеріали та запасні частини")} - ${process.env.siteName}`,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: `AirSystems - ${this.$t("Витратні матеріали та запасні частини")}`,
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: "воздушный фильтр компрессора, масляный фильтр компрессора, сепаратор компрессора, масло компрессорное,термостат компрессора,  датчик температуры компрессора, датчик высокого давление компрессора, повітряний фільтр компресора, масляний фільтр компресора, сепаратор компресора, масло компресорне, термостат компресора, датчик температури компресора, датчик високого тиску компресора, винтовой блок, гвинтовий блок, масляный радиатор, шланги, клапан высокого давления, клапан низкого давления, всасывающий клапан, ремень компрессора, электродвигатель компрессора, масляний радіатор, шланги, клапан високого тиску, клапан низького тиску, клапан, що всмоктує, ремінь компресора, електродвигун компресора, запчасти Atlas Copco, запчастини Atlas Copco"
                }
            ]
        };
    }
};
</script>
