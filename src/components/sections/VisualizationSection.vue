<script setup>
    import { ref, onMounted } from 'vue';
    import { useLightbox } from '../../composables/useLightbox';

    // Visualization images are loaded from a JSON file in /public.
    const images = ref([]);

    onMounted(async () => {
        try {
            const response = await fetch('/images-data-vue.json');
            if (!response.ok) {
                throw new Error('Failed to fetch JSON');
            }
            const data = await response.json();
            images.value = data.images;
        } catch (error) {
            console.error('Error loading JSON:', error);
        }
    });

    // Click a visualization to open the enlarged gallery (with prev/next arrows).
    const { openGallery } = useLightbox();

    function openImage(startIndex) {
        const gallery = images.value.map((img) => ({
            type: 'image',
            src: img.url,
            alt: img.title,
        }));
        openGallery(gallery, startIndex);
    }
</script>

<template>
    <section class="visualization" id="visualization">
        <h2 class="headline">Visualization</h2>
        <div v-for="(image, i) in images" :key="image.id" class="viz">
            <img :src="image.url" :alt="image.title" @click="openImage(i)" />
            <p class="title">{{ image.title }}</p>
            <p class="description">{{ image.description }}</p>
            <p class="details">{{ image.details }}</p>
        </div>
    </section>
</template>

<style scoped>
    .viz {
        margin: auto;
        height: auto;
        width: 800px;
    }

    .viz > img {
        display: flex;
        justify-content: center;
        width: 100%;
        height: auto;
        padding: 25px;
        padding-bottom: 5px;
        margin-top: var(--heading-content-gap);
        cursor: pointer;
    }

    .viz > p {
        font-family: var(--font-body);
        font-size: 0.8rem;
        margin-left: 25px;
        margin-bottom: 0;
    }

    /* MOBILE */
    @media (max-width: 700px) {
        .viz {
            width: 100%;
            max-width: 380px;
        }

        .viz > img {
            margin-top: var(--heading-content-gap-mobile);
        }

        .viz > p {
            font-size: 0.8rem;
        }
    }

    @media (min-width: 700px) and (max-width: 800px) {
        .viz {
            width: 700px;
        }

        .viz > p {
            font-size: 0.9rem;
        }
    }

    @media (min-width: 800px) and (max-width: 1500px) {
        .viz {
            width: 700px;
        }

        .viz > p {
            font-size: 1rem;
        }
    }

    @media (min-width: 1500px) and (max-width: 1950px) {
        .viz {
            width: 90%;
            max-width: 850px;
        }

        .viz > p {
            font-size: 0.9rem;
        }
    }

    @media (min-width: 2000px) {
        .viz {
            width: 1000px;
        }

        .viz > p {
            font-size: 1rem;
        }
    }
</style>
