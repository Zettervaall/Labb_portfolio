<script setup>
    import Wix3 from '@/assets/Media/Wix 3.mp4';
    import ZoomableVideo from '../ZoomableVideo.vue';
</script>

<template>
    <div class="video">
        <div class="videoPlay">
            <ZoomableVideo :src="Wix3" />
            <p>
                Ongoing project. 3Ds Max, V-Ray, Unreal Engine & After Effects
            </p>
        </div>
    </div>
</template>

<style scoped>
    .video {
        display: flex;
        justify-content: center;
    }

    .videoPlay {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 10rem;
        width: 100%;
        padding: 10px;
    }

    .videoPlay video {
        height: auto;
        width: 800px;
    }

    .videoPlay > p {
        margin-top: 0.7rem;
        text-align: center;
        font-size: 0.7rem;
    }

    /* MOBILE */
    @media (max-width: 700px) {
        .videoPlay video {
            margin-top: 5rem;
            width: 85%;
        }

        .videoPlay > p {
            font-size: 0.6rem;
        }
    }

    @media (min-width: 700px) and (max-width: 800px) {
        .videoPlay video {
            width: 85%;
            margin-top: 4.5rem;
        }

        .videoPlay p {
            margin-bottom: 0;
        }
    }

    @media (min-width: 800px) and (max-width: 1500px) {
        .videoPlay video {
            margin-top: 8rem;
            width: 70%;
        }
    }

    @media (min-width: 1500px) and (max-width: 1950px) {
        .videoPlay {
            margin-top: 17rem;
            width: 100%;
        }
    }

    @media (min-width: 1950px) {
        .videoPlay {
            margin-top: 15rem;
        }
    }

    @media (min-width: 2000px) {
        .videoPlay video {
            margin-top: 8rem;
            width: 1100px;
        }
    }
</style>
