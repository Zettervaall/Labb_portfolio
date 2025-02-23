<script setup>
    import { ref } from 'vue';

    const showVideo = ref(true);

    const hideVideo = () => {
        showVideo.value = false;
    };
</script>

<template>
    <div>
        <video
            ref="myVideoHeader"
            autoplay
            muted
            class="videoHeader"
            v-if="showVideo"
            @ended="hideVideo"
        >
            <source
                src="/src/assets/Media/Animation_name_website_4 (1).mp4"
                type="video/mp4"
            />
        </video>
    </div>
</template>

<style scoped>
    .videoHeader {
        z-index: 2;
        width: 100%;
        height: auto;
        animation: fadeOut 1s ease;
        animation-delay: 3.5s;
        animation-fill-mode: forwards;
        -webkit-animation: fadeOut 1s ease 3s forwards;
        -moz-animation: fadeOut 1s ease 3s forwards;
        -o-animation: fadeOut 1s ease 3s forwards;
        -ms-animation: fadeOut 1s ease 3s forwards;
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    @-webkit-keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    @-moz-keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    @-o-keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    @-ms-keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
</style>
