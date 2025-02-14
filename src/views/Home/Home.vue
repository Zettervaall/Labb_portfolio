<script setup>
    import { ref } from 'vue';

    import Wix3 from '@/assets/Media/Wix 3.mp4';
    import VillaCaliza from '@/assets/Media/Villa Caliza.jpg';
    import BoFDalenum from '@/assets/Media/BoF Dalénum förskola.jpg';
    import Lillgardsskolan from '@/assets/Media/BoF Lillgårdsskolan i Tungelsta.jpg';
    import VillaCaliza02 from '@/assets/Media/Villa Caliza_02.jpg';

    import DinnerTable from '@/assets/Media/DinnerTable_01.jpg';
    import Vy01Kvall from '@/assets/Media/Vy_01_kvall.jpg';
    import Vy05 from '@/assets/Media/Vy_05.jpg';
    import Vy02 from '@/assets/Media/Vy02.jpg';
    import Vy03 from '@/assets/Media/Vy03.jpg';
    import Port108 from '@/assets/Media/port108.jpg';
    import LinneaBarnrum from '@/assets/Media/Linnea_barnrum.jpg';
    import Sovrum02 from '@/assets/Media/sovrum_02 kopiera_low.jpg';
    import AlviksStrand from '@/assets/Media/BoF Alviks strand.jpg';
    import Contact from '../../components/Contact.vue';

    const myVideo = ref(null);

    const togglePlay = () => {
        if (myVideo.value.paused) {
            myVideo.value.play();
        } else {
            myVideo.value.pause();
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
                        <a class="nav-link" href="/Frontend">Frontend</a>
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
                        @click="togglePlay"
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
            <div class="viz">
                <img :src="VillaCaliza" alt="Villa Caliza" />
                <p>Villa Caliza, Gotland</p>
                <p>Brunnberg & Forshed Arkitektkontor</p>
                <p>3ds Max, V-Ray, Photoshop</p>
            </div>

            <div class="viz">
                <img :src="BoFDalenum" alt="Dalénum" />
                <p>Dalénum school</p>
            </div>

            <div class="viz">
                <img :src="Lillgardsskolan" alt="Lillgårdsskolan" />
                <p>Lillgårdsskolan</p>
            </div>

            <div class="viz">
                <img :src="VillaCaliza02" alt="Villa Caliza" />
                <p>Villa Caliza</p>
            </div>

            <div class="viz">
                <img :src="DinnerTable" alt="Dinner Table" />
                <p>Viskafors</p>
            </div>

            <div class="viz">
                <img :src="Vy01Kvall" alt="Viskafors" />
                <p>Viskafors</p>
            </div>

            <div class="viz">
                <img :src="Vy05" alt="Viskafors" />
                <p>Viskafors</p>
            </div>

            <div class="viz">
                <img :src="Vy02" alt="Viskafors" />
                <p>Viskafors</p>
            </div>

            <div class="viz">
                <img :src="Vy03" alt="Viskafors" />
                <p>Viskafors</p>
            </div>

            <div class="viz">
                <img :src="Port108" alt="Viskafors" />
                <p>Viskafors</p>
            </div>

            <div class="viz">
                <img :src="LinneaBarnrum" alt="Viskafors" />
                <p>Viskafors</p>
            </div>

            <div class="viz">
                <img :src="Sovrum02" alt="Viskafors" />
                <p>Viskafors</p>
            </div>

            <div class="viz">
                <img :src="AlviksStrand" alt="Viskafors" />
                <p>Viskafors</p>
            </div>
        </section>

        <h3 class="headline" id="VR">VR</h3>

        <div class="vrVideoText">
            <video
                class="VR-video"
                src="/src/assets/Media/Lasse_VR.mp4"
                ref="video-vr"
                muted
                @click="togglePlay"
            ></video>
            <p>abput ideo</p>
        </div>

        <!--  <video ref="myVideo"
                        autoplay
                        muted
                        loop
                        @click="togglePlay"
                        class="video-player"
                    >
                        <source :src="Wix3" type="video/mp4" />
                    </video> -->

        <!-- <div class="col, videoVR">
            <div class="videoPlayVR">
                <video
                    ref="VRvideo"
                    autoplay
                    muted
                    loop
                    @click="togglePlay"
                    class="video-playerVR"
                >
                    <source :src="Lasse_VR.avi" type="video" />
                </video>
                <p>
                    Ongoing project. 3Ds Max, V-Ray, Unreal Engine & After
                    Effects
                </p>
            </div>
        </div> -->

        <footer>
            <h5 class="headline" id="contact">Contact</h5>
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
        src: url(Media/Fonts/Cormorant/CormorantGaramond-LightItalic.ttf);
    }

    .body {
        max-width: 100%;
        overflow-x: hidden;
    }

    .contentContainer {
        display: flex;
        justify-content: center; /* Centrera horisontellt */
        align-items: center; /* Centrera vertikalt */
        height: calc(100vh - 20px); /* Justera höjden med eventuell padding */
        padding: 10px;
        box-sizing: border-box;
        width: calc(
            100% - 200px
        ); /* Säkerställ att bredden inte överskrider skärmen */
    }

    /* Huvudrubrik centrering */
    .headline {
        display: flex;
        justify-content: center;
        font-size: 2rem;
        margin: auto;
    }

    /* NAVBAR */
    .navName {
        font-family: MyFont5;
        display: flex;
        flex-direction: column;
        text-align: left;
        margin: 2rem;
        /* white-space: pre-line; */
    }

    .navName > h1 {
        font-size: 4.5rem;
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

    /* #contact-link {
        margin-top: 2rem;
    } */

    #contact {
        padding-top: 2rem;
        color: rgb(255, 254, 241);
    }

    /* VIDEO */
    .videoPlay {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 10rem;
        width: 100%; /* Video tar upp hela bredden */
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

    .viz:hover {
        color: #424242;
        -webkit-transition: all 0.3s ease-in;
        -moz-transition: all 0.3s ease-in;
        -ms-transition: all 0.3s ease-in;
        -o-transition: all 0.3s ease-in;
        transition: all 0.3s ease-in;
        opacity: 1;
        transform: scale(1.15);
        -ms-transform: scale(1.15); /* IE 9 */
        -webkit-transform: scale(1.15); /* Safari and Chrome */
    }

    .viz > p {
        font-family: MyFont6;
        font-size: 0.6rem;
        margin-left: 25px;
        margin-bottom: 0;
    }

    footer {
        height: 30rem;
        background-color: rgb(18, 53, 24);
    }

    .navBarMenu {
        width: 100%; /* Gör navbaren fullbredd på små skärmar */
        position: static; /* Placera den ovanför innehållet */

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

    .navName > h1 {
        font-size: 4rem;
        font-family: MyFont5;
        margin-bottom: 1rem;
        color: black;
    }

    #app > div > div > div > div.col\,.navBarMenu > a {
        text-decoration: none;
    }

    /* NAVBAR */
    .navName {
        white-space: pre-line;
        font-size: 4rem;
        margin-left: 1rem;
        margin-top: 1rem;
    }

    .navBarMenu {
        width: 200px;
        position: fixed;
        margin-left: 1rem;
        margin-top: 0;
        height: 100%; /* Full höjd */

        padding: 20px;
    }

    .navbarLinks {
        align-items: flex-start; /* Flytta länkar till vänster */
        margin-left: 1rem;
    }

    .viz > p {
        font-size: 0.7rem;
    }

    .headline {
        margin-top: 20rem;
    }

    .visualization {
        margin-top: 100px;
        /* background-color: brown; */
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
        width: 40rem;
    }

    .vrVideoText > p {
        margin-top: 0.7rem;
        text-align: center;
        font-size: 0.7rem;
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

    /* Mindre skärmar */

    @media (max-width: 1500px) {
        .navBarMenu {
            position: fixed;
            width: 100%;
            padding-bottom: 2rem;
        }

        .navName > h1 {
            margin-top: 0;

            width: 100%;
            background-color: white;
        }

        .videoPlay {
            margin-top: 14rem;
            width: 100%;
        }
    }
    /* Små skärmar och mobil */
    @media (max-width: 1140px) {
    }
    /* Stora skärmar */
    @media (min-width: 1800px) {
        .videoPlay {
            margin-top: 15rem;
        }
    }
</style>
