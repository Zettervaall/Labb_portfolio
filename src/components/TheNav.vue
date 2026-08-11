<script setup>
    // Fixed sidebar / top bar: the name and the section links.
</script>

<template>
    <div class="navBarMenu">
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
        background-color: white;
    }

    .navName > h1 {
        font-size: 4rem;
        font-family: MyFont8;
        margin-bottom: 1rem;
        color: black;
        background-color: white;
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
        font-family: MyFont5;
        margin-bottom: 1rem;
        text-decoration: none;
        color: black;
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
            font-family: MyFont8;
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
            font-family: MyFont5;
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
</style>
