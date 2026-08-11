<template>
    <div><router-view /></div>
</template>

<script setup></script>

<style>
    /* Global font faces — defined once here in the root component.
       (Design tokens live in src/styles/tokens.css.) */
    @font-face {
        font-family: MyFont;
        src: url(/src/assets/Media/Fonts/Quinsi.ttf);
    }
    @font-face {
        font-family: MyFont2;
        src: url(/src/assets/Media/Fonts/HenriDidot.otf);
    }
    @font-face {
        font-family: MyFont3;
        src: url(/src/assets/Media/Fonts/Dosis-Medium.ttf);
    }
    /* MyFont4/5/6 (Cormorant Garamond) removed — the serif fallback is preferred.
       Anything set to font-family: MyFont5 now renders in the browser serif. */
    @font-face {
        font-family: MyFont7;
        src: url(/src/assets/Media/Fonts/Roslindale-DisplayLight-Testing.ttf);
    }
    @font-face {
        font-family: MyFont8;
        src: url(/src/assets/Media/Fonts/Roslindale-DisplayMedium-Testing.ttf);
    }
</style>
