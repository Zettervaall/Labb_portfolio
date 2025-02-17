<script setup>
    /* import Websites from '../../components/Websites.vue'; */
</script>

<template>
    <div class="body">
        <div class="aboutMe">
            <p>Hello. I'm Moa</p>
            <p>
                - a visualizer, VR developer, and front-end enthusiast
                passionate about creating immersive and engaging digital
                experiences.
            </p>
            <p>
                With a strong background in architectural visualization and
                interactive 3D environments, I now focus on crafting intuitive
                and visually compelling user interfaces using modern frameworks
                like React and Vue. I love blending creativity with technology
                to build seamless, beautiful, and functional digital solutions.
            </p>
        </div>
    </div>

    <!-- <div>
        <a href="/#"><h1>Back</h1></a>
    </div>

    <Websites /> -->
</template>

<style scoped>
    @font-face {
        font-family: MyFont7;
        src: url(/src/assets/Media/Fonts/Roslindale-DisplayLight-Testing.ttf);
    }

    .body {
        background-color: rgb(255, 252, 245);
        min-height: 100vh; /* Gör så att bakgrunden fyller hela sidan */
        margin: 0;
        padding: 0;
    }

    .aboutMe {
        font-family: MyFont7;
        color: rgb(20, 20, 20);
        max-width: 30%;
    }
    /* MOBILE */
    @media (min-width: 768px) {
    }
</style>
