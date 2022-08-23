<template>
    <article class="container-fluid">
            <div class="row">
                <div class="col">
                    <h1>
                        {{ $t('Контакти') }}
                    </h1>
                    <h5>
                        {{ $t('ТОВ “Повітряні Системи”') }}
                    </h5>
                    <div class="pt-3">
                        <div>Адреса:</div>
                        {{ $t('01015, м.Київ, Вулиця Лейпцизька, будинок 5, офіс 1/7') }}
                    </div>
                    <div class="pt-3">
                        <div>Телефон:</div>
                        <Tel class="contacts-on-white"></Tel>
                        <Tel2 class="contacts-on-white"></Tel2>
                    </div>
                    <div class="pt-3">
                        <div>email:</div>
                        <Mail class="contacts-on-white"></Mail>
                    </div>
                </div>
            </div>
    </article>
</template>

<script>
export default {
    layout: "default",
    head() {
        return {
            title: `${this.$t("Контакти")} - ${process.env.siteName}`,
            meta: [
                {
                    name: "description",
                    content: "AirSystems - Контакти"
                }
            ]
        };
    }
};
</script>
