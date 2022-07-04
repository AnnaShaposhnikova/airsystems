<template>
    <article class="container-fluid">
        <div class="row">
            <div class="col">
                <h1>
                    Витратні матеріали та запасні частини
                </h1>
                <figure class="text-center m-3">
                    <b-img fluid src="/img/consumables.jpg"></b-img>
                </figure>
            </div>
        </div>
        <div class="row pb-3">
            <div class="col">
                <p class="indent">
                    Ми пропонуємо витратні матеріали та оригінальні запасні
                    частини для компресорного устаткування, осушувачів
                    повітря. Пропоновані нами витратні матріали та запасні
                    частини підходять для всесвітньо відомих виробників
                    компресорного обладнання: Airpol, Aerzener, Almig, Alup,
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
                    <li>Повітряні фільтри</li>
                    <li>Масляні фільтри</li>
                    <li>Сепаратори</li>
                    <li>Компресорне масло</li>
                    <li>Ремені, шківи</li>
                    <li>Радіатори і теплообмінники</li>
                    <li>
                        Термостати, датчики температури і тиску для
                        компресорів
                    </li>
                    <li>Сальники і ущільнення</li>
                    <li>Клапани, ремкомплекти клапанів</li>
                    <li>Шланги та рукави високого тиску</li>
                    <li>Пульти керування для компресорного обладнання</li>
                </ul>
            </div>
        </div>
        <OrderForm
        >
            <modal-footer></modal-footer>
        </OrderForm>
    </article>
</template>
<script>
import OrderForm from "../components/OrderForm";

export default {
    components: {OrderForm},
    layout: "default",
    head() {
        return {
            title: `Витратні матеріали та запасні частини - ${process.env.siteName}`,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "AirSystems -  Витратні матеріали та запасні частини",
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
