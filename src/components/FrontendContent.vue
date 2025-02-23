<script setup>
    import { ref, onMounted } from 'vue';

    const myProjectVideo = ref(null);

    onMounted(() => {
        console.log('Video ref in onMounted:', myProjectVideo.value);
    });

    const togglePlay = () => {
        console.log('myProjectVideo:', myProjectVideo.value);

        if (myProjectVideo.value) {
            if (myProjectVideo.value.paused) {
                myProjectVideo.value.play();
            } else {
                myProjectVideo.value.pause();
            }
        }
    };
</script>

<template>
    <div class="frontendWork">
        <div class="projekt1">
            <video ref="perfumeVideo" autoplay loop muted class="perfumeVideo">
                <source
                    src="/src/assets/Media/Projekt1 parfym_2.mp4"
                    type="video/mp4"
                />
            </video>
            <div class="projectText">
                <h1>la senteur</h1>
                <p>
                    This project was one of the first assignments we worked on
                    in school, where we were tasked with creating a website that
                    integrates data from an API. For this, I decided to build my
                    own API using a JSON file. The file contains a curated
                    collection of perfumes, including details like the names of
                    the perfumes, their scent notes, and other relevant
                    information.
                </p>
            </div>
        </div>
        <div class="projekt2">
            <video ref="myProjectVideo" muted loop autoplay class="granoVideo">
                <source
                    src="/src/assets/Media/Grano_projekt3.mp4"
                    type="video/mp4"
                />
            </video>
            <div class="projectText">
                <h1>GRANÖ</h1>
                <p>
                    This project was developed as part of a UI/UX course, where
                    I designed a mobile website in Figma for a fictional
                    furniture company. The challenge was to create an intuitive
                    and aesthetically pleasing interface. The design focuses on
                    a warm, classic, and minimalist style, aimed at delivering a
                    sophisticated and clean look. The goal was to ensure the
                    website was both functional and visually appealing.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    * {
        font-family: MyFont5;
    }
    .frontendWork {
        z-index: -1;
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        padding: 0 20rem 0 20rem;
        position: relative;
    }

    .frontendWork video {
        margin: 1rem;
    }

    .perfumeVideo {
        max-width: 40rem;
        height: auto;
    }

    .granoVideo {
        max-width: 25rem;
        height: auto;
    }

    .projectText h1 {
        margin-top: 5rem;
        display: flex;
        justify-content: center;
    }

    /* Project 1 */
    .projekt1 {
        padding: 5rem;
        display: flex;

        top: 0;
    }

    /* End of Project 1 */

    /* Project 2 */
    .projekt2 {
        padding: 5rem;
        display: flex;
        flex-direction: row-reverse;
        top: 0;
    }

    /* End of Project 2 */

    /* MOBILE */
    @media (max-width: 768px) {
        .frontendWork {
            z-index: -1;
            margin-top: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0;
        }

        .projectText p {
            font-size: 0.8rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            padding: 0 2rem 0rem 2rem;
            margin-bottom: 3rem;
        }
        /* Project 1 */
        .projekt1 {
            padding: 0;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }
        /* End of Project 1 */

        /* Project 2 */
        .projekt2 {
            padding: 0;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }
    }

    @media (min-width: 768px) and (max-width: 1500px) {
        .frontendWork {
            z-index: -1;
            margin-top: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0;
        }

        .frontendWork video {
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;

            height: auto;
        }

        .granoVideo {
            justify-content: center;
            align-items: center;
        }

        /* Project 1 */
        .projekt1 {
            padding: 0;
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin-bottom: 8rem;
            align-items: center;
        }
        /* End of Project 1 */

        /* Project 2 */
        .projekt2 {
            padding: 0;
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin-bottom: 8rem;
            align-items: center;
        }
        .projectText p {
            align-items: center;
            width: 50rem;
        }
    }
    @media (min-width: 1500px) and (max-width: 1900px) {
        .frontendWork {
            z-index: -1;
            margin-top: 5rem;
            display: flex;
            flex-direction: column;
            padding: 0 10rem 0 10rem;
            position: relative;
        }

        .projectText {
            font-size: 1rem;

            width: 100rem;
            padding: 0;
            margin-bottom: 3rem;
        }
    }
    @media (min-width: 2400px) {
        .projectText {
            font-size: 1rem;
            width: 50rem;
            padding: 0;
            margin-bottom: 3rem;
        }
    }
</style>
