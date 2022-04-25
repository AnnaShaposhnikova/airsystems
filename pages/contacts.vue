<template>
    <div class="container-fluid">
        <article>
            <div class="row">
                <div class="col">
                    <h1 class="justify-content-center">
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
                        <Tel class="contacts-on-white" />
                    </div>
                    <div class="pt-3">
                        <div>email:</div>
                        <Mail class="contacts-on-white" />
                    </div>
                    <div class=" pt-3 pb-3 contacts-on-white">
                        <a href="http://airsystems.com.ua/"
                            >www.airsystems.com.ua</a
                        >
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>
<script>
export default {
    layout: "default",
    data() {
        return {
            title: ` Контакти - ${process.env.siteName}`
        };
    },
    head() {
        return {
            title: this.title,
            meta: [
                {
                    hid: "AirSystems -  Контакти",
                    name: "AirSystems -  Контакти",
                    content: "AirSystems -  Контакти"
                }
            ]
        };
    }
};
</script>
