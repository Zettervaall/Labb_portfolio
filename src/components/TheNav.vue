<script setup>
    // Fixed sidebar / top bar: the name and the section links.
    // On mobile it collapses into a compact top bar once you scroll down.
    // It also turns light while it sits over the dark project band.
    import { ref, onMounted, onBeforeUnmount } from 'vue';

    const scrolled = ref(false);
    const onDark = ref(false);

    function update() {
        const y = window.scrollY || document.documentElement.scrollTop || 0;
        scrolled.value = y > 120;

        // Is the name currently sitting over the dark "spotlight" band?
        const dark = document.querySelector('.project--dark');
        const name = document.querySelector('.navName');
        if (dark && name) {
            const d = dark.getBoundingClientRect();
            const n = name.getBoundingClientRect();
            const nameMid = (n.top + n.bottom) / 2;
            onDark.value = d.top <= nameMid && d.bottom >= nameMid;
        } else {
            onDark.value = false;
        }
    }

    onMounted(() => {
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        update();
    });

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', update);
        window.removeEventListener('resize', update);
    });
</script>

<template>
    <div class="navBarMenu" :class="{ scrolled, onDark }">
        <a href="#">
            <div class="navName">
                <h1 id="moa">Moa</h1>
                <h1 id="zettervall">Zettervall</h1>
            </div>
        </a>
        <nav>
            <div class="navbarLinks">
                <a class="nav-link" href="#visualization">Visualization</a>
                <a class="nav-link" href="#Frontend">Frontend</a>
                <a class="nav-link" href="#VR">VR</a>
            </div>
        </nav>
    </div>
</template>

<style scoped>
    .navBarMenu {
        width: 200px;
        position: fixed;
        margin-left: 1rem;
        margin-top: 0;
        height: 100%;
        padding: 20px;
        z-index: 1000;
    }

    .navBarMenu > a {
        text-decoration: none;
    }

    .navName {
        display: flex;
        flex-direction: column;
        text-align: left;
        margin: 2rem;
        white-space: pre-line;
        font-size: 4rem;
        margin-left: 1rem;
        margin-top: 1rem;
        /* No white box on desktop — the mobile/tablet top bars set their own
           white background in their media queries below. */
    }

    .navName > h1 {
        font-size: 4rem;
        font-family: var(--font-heading);
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
        align-items: flex-start;
        margin-left: 1rem;
    }

    .nav-link {
        font-family: var(--font-heading);
        margin-bottom: 1rem;
        text-decoration: none;
        color: black;
    }

    /* When the fixed nav sits over the dark project band, flip it to light
       (white name + links, no white box) so it stays readable. */
    .navBarMenu.onDark .navName {
        background: transparent;
    }

    .navBarMenu.onDark .navName > h1 {
        color: var(--dark-text);
    }

    .navBarMenu.onDark .nav-link {
        color: var(--dark-text);
    }

    /* MOBILE */
    @media (max-width: 700px) {
        .navName {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: rgb(255, 255, 255);
            padding-top: 20px;
            padding-bottom: 4rem;
            padding-left: 2rem;
            z-index: 10;
            display: flex;
            margin: unset;
            margin-left: 0;
        }

        .navbarLinks {
            position: fixed;
            z-index: 20;
            display: flex;
            flex-direction: row;
            width: 100%;
            margin: unset;
            margin-top: 9rem;
        }

        .nav-link {
            font-size: 0.9rem;
            margin: 0 5px;
        }

        .navName > h1 {
            font-size: 3.5rem;
            padding-bottom: 0.2rem;
            margin-bottom: 0.1rem;
        }

        #zettervall {
            margin-top: -1rem;
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
    }

    /* SMALL SCREENS & TABLETS */
    @media (min-width: 800px) and (max-width: 1500px) {
        .navName > h1 {
            width: 100%;
            margin-left: 1.5rem;
            font-size: 4rem;
        }

        .navName {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: rgb(255, 255, 255);
            padding-top: 20px;
            padding-bottom: 1rem;
            padding-left: 10px;
            z-index: 10;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: unset;
            margin-left: 0;
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
    }

    /* SMALLER DESKTOPS */
    @media (min-width: 1500px) and (max-width: 1950px) {
        .navBarMenu {
            position: fixed;
            width: 200px;
            margin-left: 1rem;
            margin-top: 0;
            height: 100%;
            padding: 20px;
            z-index: 1000;
        }

        .navName::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 15rem;
            z-index: -1;
        }

        .navName {
            display: flex;
            flex-direction: column;
            text-align: left;
            margin: 2rem 0 0 1rem;
            font-size: 3rem;
            z-index: 1001;
        }

        .navName > h1 {
            font-size: 4rem;
            font-family: var(--font-heading);
            margin-bottom: 1rem;
            color: black;
        }

        .navbarLinks {
            margin-top: 1rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-left: 1rem;
            z-index: 1001;
        }

        .nav-link {
            font-family: var(--font-heading);
            margin-bottom: 1rem;
            text-decoration: none;
            color: black;
            font-size: 1.2rem;
        }
    }

    /* Below the sidebar breakpoint the nav becomes a top bar, but the
       .navBarMenu wrapper is still a full-height fixed box on the left.
       Let clicks pass through it (to videos, buttons, etc.) while keeping
       the name and the links themselves clickable. */
    @media (max-width: 1499px) {
        .navBarMenu {
            pointer-events: none;
        }

        .navName,
        .navbarLinks {
            pointer-events: auto;
        }
    }

    /* MOBILE — once scrolled down, collapse into a compact top bar:
       small "Moa Zettervall" on the left, the section links on the right.
       Scrolling back to the top restores the big stacked name. */
    @media (max-width: 700px) {
        .navBarMenu.scrolled {
            pointer-events: auto;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            margin: 0;
            padding: 0.55rem 1.1rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            background-color: #fff;
            z-index: 1000;
        }

        /* Mobile keeps a solid white bar with dark text, even over the dark band
           (the opaque bar covers it, so the text stays readable). */
        .navBarMenu.scrolled.onDark .navName > h1,
        .navBarMenu.scrolled.onDark .nav-link {
            color: black;
        }

        /* Name: small and on one line, at the far left. */
        .navBarMenu.scrolled .navName {
            position: static;
            flex-direction: row;
            align-items: baseline;
            gap: 0.35rem;
            width: auto;
            margin: 0;
            padding: 0;
            background: none;
        }

        .navBarMenu.scrolled .navName > h1 {
            font-size: 1.15rem;
            margin: 0;
            padding: 0;
        }

        .navBarMenu.scrolled #zettervall {
            margin-top: 0;
        }

        /* Links: on the right, on the same row. */
        .navBarMenu.scrolled .navbarLinks {
            position: static;
            flex-direction: row;
            width: auto;
            margin: 0;
        }

        .navBarMenu.scrolled .nav-link {
            margin: 0 0 0 0.7rem;
            font-size: 0.8rem;
        }
    }
</style>
