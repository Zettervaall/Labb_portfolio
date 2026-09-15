<script setup>
    /*
     * A single project block: looping video + title + text.
     * Reused for every project in the Frontend section.
     *
     * Props:
     *   title       – project name (shown as the italic heading)
     *   label       – optional small line above the title (e.g. "Degree project · String")
     *   video       – path to the .mp4 to loop
     *   small       – use a smaller video (for portrait/phone mockups like GRANÖ)
     *   dark        – put the project on a full-bleed dark "spotlight" band
     *                 (used for the featured project so its videos pop)
     *   layout      – wide-screen (>1950px) layout:
     *                   'stacked'  → video above text (used for the featured project)
     *                   'normal'   → video and text side by side
     *                   'reversed' → same, but video on the other side
     *
     * Slot: the project description (and anything extra, e.g. an ExpandableSection).
     */
    import ZoomableVideo from './ZoomableVideo.vue';

    defineProps({
        title: { type: String, required: true },
        label: { type: String, default: '' },
        video: { type: String, required: true },
        small: { type: Boolean, default: false },
        dark: { type: Boolean, default: false },
        layout: {
            type: String,
            default: 'normal',
            validator: (v) => ['stacked', 'normal', 'reversed'].includes(v),
        },
    });
</script>

<template>
    <div class="project" :class="[`project--${layout}`, { 'project--dark': dark }]">
        <ZoomableVideo
            :src="video"
            :class="small ? 'granoVideo' : 'projectVideo'"
        />

        <div class="projectText">
            <p v-if="label" class="label">{{ label }}</p>
            <h1>{{ title }}</h1>
            <slot />
        </div>
    </div>
</template>

<style scoped>
    .project {
        font-family: var(--font-body);
    }

    .project video {
        margin: 1rem;
    }

    .projectVideo {
        padding-top: 2rem;
        width: 40rem;
        max-width: 100%;
        height: auto;
    }

    .granoVideo {
        max-width: 25rem;
        height: auto;
    }

    /* help me choose (the featured, stacked project) gets a subtle frame like
       the Figma video below it. The top spacing moves to margin so the border
       hugs the video instead of wrapping the padding. */
    .project--stacked video {
        border: 1px solid rgba(0, 0, 0, 0.08);
        padding-top: 0;
        margin-top: 3rem;
    }

    .projectText h1 {
        margin-top: 2rem;
        font-size: 2rem;
        display: flex;
        justify-content: center;
    }

    /* Wide screens (> 1950px): side-by-side layouts.
       'stacked' keeps the default block flow (video above text). */
    .project--normal {
        padding: 0 5rem;
        display: flex;
    }

    .project--reversed {
        padding: 0 5rem;
        display: flex;
        flex-direction: row-reverse;
    }

    /* Featured project on a full-bleed dark "spotlight" band.
       The ::before paints a full-viewport-width background behind the whole
       block without disturbing the layout. */
    /* .project.project--dark → beats the `.project { padding: 0 }` in the
       responsive media queries, so the band keeps its vertical breathing room
       at every screen size. */
    .project.project--dark {
        position: relative;
        color: var(--dark-text);
        padding: 6rem 0;
    }

    .project--dark::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -50vw;
        width: 100vw;
        background: var(--dark-bg);
        z-index: -1;
    }

    /* Bigger video with a subtle light frame so it stands out on the dark band. */
    .project--dark .projectVideo {
        width: 48rem;
        margin-top: 1rem;
        border-color: rgba(255, 255, 255, 0.14);
    }

    /* MOBILE */
    @media (max-width: 768px) {
        .project {
            padding: 0;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }

        .projectVideo {
            max-width: 20rem;
        }

        .granoVideo {
            max-width: 15rem;
        }

        .projectText h1 {
            margin-top: 2rem;
        }

        .projectText .label,
        .projectText :slotted(p) {
            font-size: 0.8rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            padding: 0 2rem 0rem 2rem;
            margin-bottom: 2rem;
        }
    }

    /* TABLET / LAPTOP */
    @media (min-width: 768px) and (max-width: 1950px) {
        .project {
            padding: 0;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }

        .project video {
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

        .projectText .label,
        .projectText :slotted(p) {
            align-items: center;
            width: 40rem;
        }
    }

    /* EXTRA-WIDE SCREENS */
    @media (min-width: 2400px) {
        .projectText {
            font-size: 1rem;
            width: 50rem;
            padding: 0;
            margin-bottom: 3rem;
        }
    }
</style>
