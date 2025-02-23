<script setup>
    /* import Websites from '../../components/Websites.vue'; */
    /*  const togglePlay3 = () => {
        if (myVideoHeader.value.paused) {
            myVideoHeader.value.play();
        } else {
            myVideoHeader.value.pause();
        }
    }; */

    import VideoHeader from '../../components/VideoHeader.vue';
</script>

<template>
    <VideoHeader />
    <div class="body">
        <header>
            <nav>
                <div class="heading-1">
                    <a href="./">go back</a>
                </div>
            </nav>
            <div class="heading-2">
                <h1>moa zettervall</h1>
            </div>
        </header>

        <!--  <div class="aboutMe">
            <p>Hello. I'm Moa</p>
            <p>
                - a visualizer, VR developer, and front-end enthusiast
                passionate about creating immersive and engaging digital
                experiences.
            </p>
        </div> -->

        <!-- <div class="frontendWork">
            <div class="projekt1">
                <video ref="perfumeVideo" autoplay muted>
                    <source
                        src="/src/assets/Media/Projekt1 parfym_1.mp4"
                        type="video/mp4"
                    />
                </video>
                <div class="projectText">
                    <h1>la senteur</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quidem, error.
                    </p>
                </div>
            </div>
            <div class="projekt2">
                <div class="projectText">
                    <h1>hej1</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quidem, error.
                    </p>
                </div>
                <video ref="perfumeVideo" autoplay muted>
                    <source
                        src="/src/assets/Media/Projekt1 parfym_1.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
        </div> -->
    </div>

    <!-- <p>
                With a strong background in architectural visualization and
                interactive 3D environments, I now focus on crafting intuitive
                and visually compelling user interfaces using modern frameworks
                like React and Vue. I love blending creativity with technology
                to build seamless, beautiful, and functional digital solutions.
            </p> -->

    <!-- <div>
        <a href="/#"><h1>Back</h1></a>
    </div>

    <Websites /> -->
</template>

<style scoped>
    * {
        text-decoration: none;
        list-style-type: none;
    }
    @font-face {
        font-family: MyFont7;
        src: url(/src/assets/Media/Fonts/Roslindale-DisplayLight-Testing.ttf);
    }

    .body {
        min-height: 100vh;
        margin: 0;
        padding: 0;
    }

    header {
        width: 100%;
        padding: 1rem;
        position: relative;
    }

    nav {
        display: flex;
        justify-content: flex-start;
    }

    /* "Go Back" */
    .heading-1 a {
        font-size: 1.5rem;
        text-transform: uppercase;
    }

    /* moa zettervall */
    .heading-2 {
        display: flex;
        justify-content: center;
        width: 100%;
        text-align: center;
    }

    .heading-2 h1 {
        font-size: 2rem;
        text-align: center;
    }

    .aboutMe {
        z-index: -1;
        border: 2px solid #2d2e2b;
        position: relative;
        top: 0;
        left: 0;
        font-family: MyFont7;
        color: rgb(20, 20, 20);
        max-width: 30%;
    }

    /* Projects */

    .frontendWork {
        margin-top: 20rem;
        display: flex;
        flex-direction: column;
        padding: 0 10rem 0 10rem;
        position: relative;
        border: 2px solid #2d2e2b;
    }

    .frontendWork video {
        margin: 2rem;
        width: 50rem;
        height: auto;
    }

    .projectText h1 {
        display: flex;
        justify-content: center;
    }

    /* Project 1 */
    .projekt1 {
        padding: 5rem;
        display: flex;
        justify-content: flex-start;
        border: 2px solid #2d2e2b;
        top: 0;
    }

    /* End of Project 1 */

    /* Project 2 */
    .projekt2 {
        padding: 5rem;
        display: flex;
        justify-content: flex-end;
        border: 2px solid #2d2e2b;
        top: 0;
    }

    /* End of Project 2 */

    /* MOBILE */
    @media (min-width: 768px) {
    }
</style>
