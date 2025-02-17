<script setup></script>

<template>
    <div class="websiteFooter">
        <div>
            <h1>Contact</h1>
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

            <p id="p3">moa.zettervall@gmail.com</p>
            <!-- <a
                href="https://www.linkedin.com/in/moa-zettervall-006587b0/"
                target="_blank"
                ><img
                    src="../assets/Media/linkedin_bright.png"
                    alt="linkedin"
                    class="linkedinIcon"
            /></a> -->
        </div>

        <p class="copyright">© 2024 Moa Zettervall. Designed & built by me.</p>
    </div>
</template>

<style scoped>
    .websiteFooter {
        width: 100%;
        left: 0;
        bottom: 0;
        background-color: black;
    }

    /* väldigt söt rosa: background-color: rgb(214, 159, 159); */

    div {
        padding-left: 0.3rem;
        display: flex;
        flex-direction: column;

        font-size: 0.8rem;
    }

    h1 {
        font-size: 2rem;
        margin-top: 2rem;
        color: rgb(255, 254, 241);
    }

    #p1 {
        margin-top: 2rem;
        color: rgb(255, 254, 241);
    }
    #p2,
    #p3 {
        margin-top: 1rem;
        color: rgb(255, 254, 241);
    }

    img {
        width: 2rem;
        margin: auto;
    }
    .copyright {
        color: rgb(255, 254, 241);
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
    }

    /* STORA SKÄRMAR */
    @media (min-width: 1500px) {
    }
</style>
