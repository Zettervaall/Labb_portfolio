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
                <p>MZ | Portfolio</p>
            </div>
        </div>
    </div>

    <p class="copyright">&copy; {{ new Date().getFullYear() }} Moa Zettervall</p>
</template>

<style scoped>
    .websiteFooter {
        z-index: 1001;
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

    div {
        display: flex;
        font-size: 0.8rem;
    }

    .footerName {
        margin-left: auto;
        display: flex;
        font-family: var(--font-body);
        position: absolute;
        right: 1.5rem;
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

    /* Smaller screens */
    @media (max-width: 1500px) {
        .contactFooter {
            height: 3rem;
        }

        .footerName {
            margin-top: 0.4rem;
        }
    }
</style>
