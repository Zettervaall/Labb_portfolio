<script setup>
    import TheNav from '../../components/TheNav.vue';
    import HeroSection from '../../components/sections/HeroSection.vue';
    import VisualizationSection from '../../components/sections/VisualizationSection.vue';
    import FrontendSection from '../../components/sections/FrontendSection.vue';
    import VrSection from '../../components/sections/VrSection.vue';
    import TheFooter from '../../components/TheFooter.vue';
    import Lightbox from '../../components/Lightbox.vue';
</script>

<template>
    <div class="body">
        <TheNav />
        <HeroSection />

        <VisualizationSection />
        <FrontendSection />
        <VrSection />

        <footer id="contact">
            <TheFooter />
        </footer>

        <!-- Enlarged-media overlay (shared by videos and the visualization gallery) -->
        <Lightbox />
    </div>
</template>

<style scoped>
    .body {
        max-width: 100%;
        overflow-x: hidden;
    }

    @media (min-width: 800px) and (max-width: 1500px) {
        .body {
            margin: unset;
        }
    }
</style>
