<script setup></script>

<template>
    <div>
        <p id="p1">
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
        <p id="p2">Feel free to reach out!</p>

        <p id="p3">moa.zettervall@gmail.com</p>
        <a
            href="https://www.linkedin.com/in/moa-zettervall-006587b0/"
            target="_blank"
            ><img src="../assets/Media/linkedin.png" alt="linkedin"
        /></a>
    </div>

    <p class="copyright">
        © 2024 Moa Zettervall. Designed & built by me. All rights reserved.
    </p>
</template>

<style scoped>
    div {
        display: flex;
        flex-direction: column;
        width: 30%;
        font-size: 0.8rem;
        margin: auto;
        text-align: center;
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
        font-size: 0.7rem;
    }
</style>
