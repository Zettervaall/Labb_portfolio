<script setup>
    /* För att synka med JSON */
    import { ref, onMounted } from 'vue';

    const images = ref([]);
    onMounted(async () => {
        try {
            const response = await fetch('/images-data-vue.json'); // Här hämtas JSON-filen
            if (!response.ok) {
                throw new Error('Misslyckades att hämta JSON');
            }
            const data = await response.json();
            console.log('Laddade bilder:', data.images);
            images.value = data.images; // Här tilldelas data till images
        } catch (error) {
            console.error('Fel vid laddning av JSON:', error);
        }
    });

    import Wix3 from '@/assets/Media/Wix 3.mp4';
    import Contact from '../../components/Contact.vue';
    import FrontendContent from '../../components/FrontendContent.vue';

    const myVideo = ref(null);
    const myVrVideo = ref(null);

    const togglePlay = () => {
        if (myVideo.value.paused) {
            myVideo.value.play();
        } else {
            myVideo.value.pause();
        }
    };

    const togglePlay2 = () => {
        if (myVrVideo.value.paused) {
            myVrVideo.value.play();
        } else {
            myVrVideo.value.pause();
        }
    };
</script>

<template>
    <div class="body">
        <div class="row align-items-start">
            <div class="col, navBarMenu">
                <a href="#"
                    ><div class="navName">
                        <h1 id="moa">Moa</h1>
                        <h1 id="zettervall">Zettervall</h1>
                    </div>
                </a>
                <nav>
                    <div class="navbarLinks">
                        <a class="nav-link" href="#visualization"
                            >Visualization</a
                        >
                        <a class="nav-link" href="#VR">VR</a>
                        <a class="nav-link" href="#Frontend">Frontend</a>

                        <!-- router-link fungerar men jag vill endast visa bara en sida! -->

                        <!-- <router-link class="nav-link" to="/Frontend"
                            >Frontend</router-link
                        > -->
                        <a class="nav-link" id="contact-link" href="#contact"
                            >Contact</a
                        >
                    </div>
                </nav>
            </div>
            <div class="col, video">
                <div class="videoPlay">
                    <video
                        ref="myVideo"
                        autoplay
                        muted
                        loop
                        class="video-player"
                    >
                        <source :src="Wix3" type="video/mp4" />
                    </video>
                    <p>
                        Ongoing project. 3Ds Max, V-Ray, Unreal Engine & After
                        Effects
                    </p>
                </div>
            </div>
        </div>

        <section class="visualization" id="visualization">
            <h2 class="headline">Visualization</h2>
            <div v-for="image in images" :key="image.id" class="viz">
                <img :src="image.url" :alt="image.title" />
                <p class="title">{{ image.title }}</p>
                <p class="description">{{ image.description }}</p>
                <p class="details">{{ image.details }}</p>
            </div>
        </section>

        <h3 class="headline" id="VR">VR</h3>

        <div class="vrVideoText">
            <video
                ref="myVrVideo"
                class="VR-video"
                src="/src/assets/Media/Lasse_VR.mp4"
                muted
                loop
                @click="togglePlay2"
            ></video>
            <p>
                Virtual tour of an architecturally detailed house, crafted using
                tools such as Unreal Engine, 3ds Max, V-Ray, Datasmith and
                Photoshop. Created for Visualisera and optimized for wireless VR
                headsets.
            </p>
        </div>

        <h4 class="headline" id="Frontend">Frontend</h4>

        <FrontendContent />

        <footer id="contact">
            <Contact />
        </footer>
    </div>
</template>

<style scoped>
    /* FONTS */
    @font-face {
        font-family: MyFont;
        src: url(Media/Quinsi.ttf);
    }
    @font-face {
        font-family: MyFont2;
        src: url(Media/HenriDidot.otf);
    }
    @font-face {
        font-family: MyFont3;
        src: url(Media/Dosis-Medium.ttf);
    }
    @font-face {
        font-family: MyFont4;
        src: url(Media/Fonts/Cormorant/CormorantGaramond-Regular.ttf);
    }
    @font-face {
        font-family: MyFont5;
        src: url(Media/Fonts/Cormorant/CormorantGaramond-Bold.ttf);
    }
    @font-face {
        font-family: MyFont6;
        src: url(Media/Fonts/Cormorant/CormorantGaramond-Light.ttf);
    }
    @font-face {
        font-family: MyFont7;
        src: url(/src/assets/Media/Fonts/Roslindale-DisplayLight-Testing.ttf);
    }
    @font-face {
        font-family: MyFont8;
        src: url(/src/assets/Media/Fonts/Roslindale-DisplayMedium-Testing.ttf);
    }

    .body {
        max-width: 100%;
        overflow-x: hidden;
    }

    .contentContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 20px);
        padding: 10px;
        box-sizing: border-box;
        width: calc(100% - 200px);
    }

    /* Huvudrubrik centrering */
    .headline {
        font-family: MyFont5;
        display: flex;
        justify-content: center;
        font-size: 2rem;
        margin: auto;
    }

    /* NAVBAR */
    .navName {
        display: flex;
        flex-direction: column;
        text-align: left;
        margin: 2rem;
        white-space: pre-line;
        font-size: 4rem;
        margin-left: 1rem;
        margin-top: 1rem;
    }

    .navName > h1 {
        font-size: 4rem;
        font-family: MyFont8;
        margin-bottom: 1rem;
        color: black;
    }

    #zettervall {
        margin-top: -1.5rem;
    }

    .navbarLinks {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
    }

    .nav-link {
        font-family: MyFont5;
        margin-bottom: 1rem;
        text-decoration: none;
        color: black;
    }

    /* VIDEO */
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

    .video {
        display: flex;
        justify-content: center;
    }

    /* VISUALIZATIONS */
    .viz > img {
        display: flex;
        justify-content: center;
        width: 100%;
        height: auto;
        padding: 25px;
        padding-bottom: 5px;
        margin-top: 3rem;
    }

    /* .viz:hover {
        color: #424242;
        -webkit-transition: all 0.3s ease-in;
        -moz-transition: all 0.3s ease-in;
        -ms-transition: all 0.3s ease-in;
        -o-transition: all 0.3s ease-in;
        transition: all 0.3s ease-in;
        opacity: 1;
        transform: scale(1.15);
        -ms-transform: scale(1.15);
        -webkit-transform: scale(1.15);
    } */

    .viz > p {
        font-family: MyFont5;
        font-size: 0.8rem;
        margin-left: 25px;
        margin-bottom: 0;
    }

    .navBarMenu {
        width: 100%; /* Gör navbaren fullbredd på små skärmar */
        position: absolute;

        padding: 10px;
    }
    .contentContainer {
        margin-left: 0;
        flex-direction: column;
    }

    .containerFirstpage {
        border: 1px solid black;
        background-color: rgb(255, 246, 232);
        display: flex;
        justify-content: start;
        align-items: flex-start;
    }

    #app > div > div > div > div.col\,.navBarMenu > a {
        text-decoration: none;
    }

    .navBarMenu {
        width: 200px;
        position: fixed;
        margin-left: 1rem;
        margin-top: 0;
        height: 100%;

        padding: 20px;
    }

    .navbarLinks {
        align-items: flex-start;
        margin-left: 1rem;
    }

    .headline {
        margin-top: 20rem;
    }

    .visualization {
        margin-top: 100px;
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

    .VR-video {
        width: 100%;
        max-width: 40rem;
        height: auto;
    }

    video::-webkit-media-controls-panel {
        background-color: transparent !important;
        box-shadow: none !important;
    }

    .vrVideoText > p {
        font-family: MyFont5;
        font-size: 0.8rem;

        margin-top: 2rem;
        margin-bottom: 10rem;
        font-size: 0.8rem;
        width: 90%;
        max-width: 40rem;
    }

    /* VISUALIZATIONS */
    /* .viz {
            margin: auto;
            height: auto;
            width: 900px;
        } */

    .viz {
        margin: auto;
        height: auto;
        width: 800px;
    }

    #Frontend {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    /* MOBILER */
    @media (max-width: 700px) {
        .navName {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: rgb(255, 255, 255);
            padding-top: 20px;
            padding-bottom: 4rem;
            padding-left: 10px;
            z-index: 10;
            display: flex;
            padding-left: 2rem;
            margin: unset;
            margin-left: 0;
        }

        .navbarLinks {
            position: fixed;
            z-index: 20;

            display: flex;
            flex-direction: row;
            padding-left: 1rem;
            margin: unset;
            margin-top: 9rem;
        }

        .nav-link {
            font-size: 0.9rem;
            margin-right: 2rem;
        }

        .headline {
            margin-top: 10rem;
        }
        .navName > h1 {
            font-size: 3.5rem;
            padding-bottom: 0.2rem;
            margin-bottom: 0.1rem;
        }

        .videoPlay video {
            margin-top: 5rem;
            width: 85%;
        }

        .visualization {
            margin-top: 2px;
        }

        .viz {
            width: 100%;
            max-width: 380px;
        }

        .viz > p {
            font-size: 0.8rem;
        }
    }

    @media (min-width: 700px) and (max-width: 800px) {
        .navName {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: rgb(255, 255, 255);
            padding-top: 20px;
            padding-bottom: 2.5rem;
            padding-left: 10px;
            z-index: 10;
            display: flex;

            margin: unset;
            margin-left: 0;
        }

        .navbar-nav {
            margin-left: auto;
        }

        .navbarLinks {
            position: fixed;
            z-index: 20;
            margin-top: 6.8rem;
            display: flex;
            flex-direction: row;
            right: 1rem;
            padding-right: 1rem;
        }

        .nav-link {
            font-size: 0.9rem;
            margin-right: 2rem;
        }

        .viz {
            width: 100%;
            max-width: 700px;
        }
        .vrVideoText > p {
            font-family: MyFont5;
            margin-top: 2rem;
            margin-bottom: 10rem;
            font-size: 1rem;
            width: 90%;
            max-width: 30rem;
        }

        .videoPlay video {
            width: 85%;
        }

        .VR-video {
            max-width: 30rem;
        }

        .viz {
            width: 700px;
        }

        .viz > p {
            font-size: 0.9rem;
        }
    }

    /* SMÅ SKÄRMAR OCH PADDOR */
    @media (min-width: 800px) and (max-width: 1140px) {
        * {
            box-sizing: border-box;
        }
        .body {
            margin: unset;
        }

        .navName > h1 {
            width: 100%;
            margin-left: 1.5rem;
        }

        .navName {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: rgb(255, 255, 255);
            padding-top: 20px;
            padding-bottom: 2.5rem;
            padding-left: 10px;
            z-index: 10;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: unset;
            margin-left: 0;
        }

        .navbar-nav {
            margin-left: auto;
        }

        .navbarLinks {
            position: fixed;
            z-index: 20;
            margin-top: 6.8rem;
            display: flex;
            flex-direction: row;
            right: 1rem;
            padding-right: 1rem;
        }

        .nav-link {
            font-size: 1.2rem;
            margin-right: 2rem;
        }

        .videoPlay video {
            margin-top: 8rem;
            width: 85%;
        }

        .VR-video {
            max-width: 30rem;
        }

        .viz {
            width: 700px;
        }

        .viz > p {
            font-size: 1rem;
        }

        .vrVideoText > p {
            margin-top: 2rem;
            margin-bottom: 10rem;
            font-size: 1rem;
            width: 90%;
            max-width: 30rem;
        }
    }

    /* Mindre skärmar */
    @media (min-width: 1140px) and (max-width: 1450px) {
        .navBarMenu {
            position: fixed;
            width: 100%;
            padding-bottom: 2rem;
        }

        .navbarLinks {
            position: absolute;
            z-index: 20;
            margin-top: 6.5rem;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            max-width: 25rem;
            right: 3rem;
        }

        .nav-link {
            font-size: 1.2rem;
            margin-right: 2rem;
        }

        .navName > h1 {
            width: 100%;
            margin-left: 1.5rem;
        }

        .navbar-nav {
            margin-left: auto;
        }

        .navName {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: rgb(255, 255, 255);
            padding-top: 20px;
            padding-bottom: 20px;
            padding-left: 10px;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
            margin: unset;
            margin-left: 0;
        }

        .videoPlay {
            margin-top: 17rem;
            width: 100%;
        }
    }

    /* STORA SKÄRMAR */
    @media (min-width: 1500px) {
        .content {
            max-width: 1200px;
        }
        .videoPlay {
            margin-top: 15rem;
        }
    }
    @media (min-width: 2000px) {
        .videoPlay video {
            margin-top: 8rem;
            width: 1100px;
        }

        .VR-video {
            width: 1000px;
            height: auto;
        }

        .viz {
            width: 1000px;
        }

        .viz > p {
            font-size: 1rem;
        }
    }
</style>
