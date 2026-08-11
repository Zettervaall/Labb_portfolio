<script setup>
    /*
     * An autoplaying, looping, muted video (same behaviour as before) that
     * opens the enlarged Lightbox when clicked.
     *
     * Sizing is controlled by the PARENT via a class, e.g.
     *   <ZoomableVideo :src="video" class="projectVideo" />
     * The parent's scoped styles reach this video because Vue puts the parent's
     * scope on the child component's root element.
     */
    import { useLightbox } from '../composables/useLightbox';

    defineProps({
        src: { type: String, required: true },
        // Autoplay inline (default). Set :autoplay="false" to show a still
        // frame / poster instead — it still enlarges (and plays) on click.
        autoplay: { type: Boolean, default: true },
        poster: { type: String, default: '' },
    });

    const { openVideo } = useLightbox();
</script>

<template>
    <video
        :src="src"
        :autoplay="autoplay"
        :poster="poster || undefined"
        muted
        loop
        playsinline
        @click="openVideo(src)"
    ></video>
</template>

<style scoped>
    video {
        cursor: pointer;
    }
</style>
