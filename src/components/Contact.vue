<script setup></script>

<template>
    <div class="websiteFooter">
        <div class="contactFooter">
            <div>
                <a
                    href="https://www.linkedin.com/in/moa-zettervall-006587b0/"
                    target="_blank"
                    ><img
                        src="../assets/Media/linkedin_bright.png"
                        alt="linkedin"
                        class="linkedinIcon"
                /></a>

                <p class="p3">moa.zettervall@gmail.com</p>
            </div>
            <div class="footerName">
                <p>MZ</p>
            </div>
        </div>
    </div>

    <p class="copyright">© 2024 Moa Zettervall. Designed & built by me.</p>

    <!-- <h1>Contact</h1> -->
    <!-- <p id="p1">
            Hi! I'm Moa - a visualizer, VR developer, and frontend enthusiast
            who loves creating engaging digital experiences. With a background
            in architectural visualization and interactive 3D environments, I
            now focus on frontend development, building intuitive and visually
            appealing interfaces with modern frameworks like React and Vue. I'm
            passionate about blending creativity with technology—whether it's
            rendering photorealistic scenes, developing immersive VR
            experiences, or crafting seamless web designs. My goal is always to
            make things both beautiful and functional.
        </p>
        <p id="p2">Feel free to reach out!</p>-->
</template>

<style scoped>
    @font-face {
        font-family: MyFont8;
        src: url(/src/assets/Media/Fonts/Roslindale-DisplayMedium-Testing.ttf);
    }

    .websiteFooter {
        z-index: 10000000;
        margin: 1rem;
        background-color: black;
        position: relative;
    }

    .contactFooter {
        margin-top: 0.5rem;

        height: 5rem;
        line-height: 5rem;

        color: rgb(255, 254, 241);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* väldigt söt rosa: background-color: rgb(214, 159, 159); */

    div {
        display: flex;
        font-size: 0.8rem;
    }

    .footerName {
        margin-left: auto; /* Tryck till höger */
        display: flex;
        font-family: MyFont8;
        position: absolute; /* Absolut positionering */
        right: 1.5rem; /* Sätter den längst till höger */
        align-items: center;
        height: 5rem;
        line-height: 5rem;
        height: 100%;
    }

    img {
        width: 2rem;

        margin: 1rem;
    }
    .copyright {
        margin-left: 1rem;
        color: rgb(0, 0, 0);
        font-size: 0.6rem;
    }

    /* MOBILER */
    @media (max-width: 768px) {
    }

    /* SMÅ SKÄRMAR OCH PADDOR */
    @media (min-width: 768px) and (max-width: 1140px) {
    }

    /* Mindre skärmar */
    @media (max-width: 1500px) {
        .contactFooter {
            height: 3rem;
        }

        .footerName {
            margin-top: 0.4rem;
        }
    }

    /* STORA SKÄRMAR */
    @media (min-width: 1500px) {
    }
</style>
