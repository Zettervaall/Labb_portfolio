<script setup>
    import ZoomableVideo from '../ZoomableVideo.vue';
</script>

<template>
    <h3 class="headline" id="VR">VR</h3>

    <div class="vrVideoText">
        <div class="vrVideoWrap">
            <ZoomableVideo
                class="VR-video"
                src="/VR/VR_tour.mp4"
                poster="/VR/thumbnail_VR.png"
                :autoplay="false"
            />
            <span class="playIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </span>
        </div>

        <p>
            Virtual tour of an architecturally detailed house, crafted using
            tools such as Unreal Engine, 3ds Max, V-Ray, Datasmith and
            Photoshop. Created for Visualisera and optimized for wireless VR
            headsets.
        </p>
    </div>
</template>

<style scoped>
    #VR {
        margin-top: 10rem;
    }

    .vrVideoText {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 3rem;
        width: 100%;
        padding: 10px;
    }

    /* The wrapper carries the responsive sizing so the play icon can sit
       centred on top of the video. */
    .vrVideoWrap {
        position: relative;
        display: block;
        width: 100%;
        max-width: 40rem;
    }

    .VR-video {
        display: block;
        width: 100%;
        height: auto;
    }

    /* Play icon overlay — clicks pass through to the video (opens the lightbox). */
    .playIcon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        width: 4.5rem;
        height: 4.5rem;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.85);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .playIcon svg {
        width: 42%;
        height: 42%;
        margin-left: 3px; /* optically centre the triangle */
        fill: #1a1a1a;
    }

    .vrVideoText > p {
        font-family: MyFont5;
        font-size: 0.8rem;
        margin-top: 2rem;
        margin-bottom: 10rem;
        width: 90%;
        max-width: 40rem;
    }

    /* MOBILE */
    @media (max-width: 700px) {
        .vrVideoWrap {
            max-width: 20rem;
        }

        .playIcon {
            width: 3.25rem;
            height: 3.25rem;
        }
    }

    @media (min-width: 700px) and (max-width: 800px) {
        .vrVideoText > p {
            font-family: MyFont5;
            margin-top: 2rem;
            margin-bottom: 10rem;
            font-size: 1rem;
            width: 90%;
            max-width: 30rem;
        }

        .vrVideoWrap {
            max-width: 30rem;
        }
    }

    @media (min-width: 800px) and (max-width: 1500px) {
        .vrVideoWrap {
            max-width: 30rem;
        }

        .vrVideoText > p {
            margin-top: 2rem;
            margin-bottom: 10rem;
            font-size: 1rem;
            width: 90%;
            max-width: 30rem;
        }
    }

    @media (min-width: 1500px) and (max-width: 1950px) {
        .vrVideoWrap {
            max-width: 29rem;
        }
    }

    @media (min-width: 2000px) {
        .vrVideoWrap {
            width: 1000px;
        }
    }
</style>
