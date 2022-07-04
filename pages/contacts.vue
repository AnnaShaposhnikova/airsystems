<template>
    <article class="container-fluid">
            <div class="row">
                <div class="col">
                    <h1>
                        Контакти
                    </h1>
                    <h5>
                        ТОВ “Повітряні Системи”
                    </h5>
                    <div class="pt-3">
                        <div>Адреса:</div>
                        01015, м.Київ, Вулиця Лейпцизька, будинок 5, офіс 1/7
                    </div>
                    <div class="pt-3">
                        <div>Телефон:</div>
                        <Tel class="contacts-on-white"/>
                    </div>
                    <div class="pt-3">
                        <div>email:</div>
                        <Mail class="contacts-on-white"/>
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
            title: ` Контакти - ${process.env.siteName}`,
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
