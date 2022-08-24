<template>
    <article class="container-fluid">
        <div class="row">
            <div class="col">
                <h1>
                    О нас
                </h1>
                <p class="indent">
                    {{$t("about-p1")}}
                </p>
                <p class="indent">
                    {{$t("about-p2")}}
                </p>
                <p class="indent">
                    {{$t("about-p3")}}
                </p>
                <p class="indent">
                    {{$t("about-p4")}}
                </p>
            </div>
        </div>
    </article>
</template>
<script>
export default {
    layout: "default",
    head() {
        return {
            title: `О нас - ${process.env.siteName}`,
            meta: [
                {
                    name: "description",
                    content: "AirSystems - О нас"
                }
            ]
        };
    }
};
</script>
