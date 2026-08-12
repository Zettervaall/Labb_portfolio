<script setup>
    /*
     * The enlarged-media overlay. Rendered once (in Home.vue) and driven by the
     * shared useLightbox state. Shows the clicked video (with controls) or image
     * large, on a grey backdrop. When several items are open (the visualization
     * gallery) prev/next arrows appear. Closes on the ×, a click outside, or Esc.
     */
    import { computed, watch, onBeforeUnmount } from 'vue';
    import { useLightbox } from '../composables/useLightbox';

    const { items, index, close, next, prev } = useLightbox();

    const current = computed(() => (items.value ? items.value[index.value] : null));
    const hasMultiple = computed(() => !!items.value && items.value.length > 1);

    function onKeydown(e) {
        if (!items.value) return;
        if (e.key === 'Escape') close();
        else if (e.key === 'ArrowRight') next();
        else if (e.key === 'ArrowLeft') prev();
    }

    // Lock background scrolling and listen for keys only while open.
    watch(items, (val) => {
        if (val) {
            document.addEventListener('keydown', onKeydown);
            document.body.style.overflow = 'hidden';
        } else {
            document.removeEventListener('keydown', onKeydown);
            document.body.style.overflow = '';
        }
    });

    onBeforeUnmount(() => {
        document.removeEventListener('keydown', onKeydown);
        document.body.style.overflow = '';
    });
</script>

<template>
    <Teleport to="body">
        <div v-if="current" class="backdrop" @click.self="close">
            <div class="frame">
                <button class="closeBtn" aria-label="Close" @click="close">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M6 6 L18 18 M18 6 L6 18" />
                    </svg>
                </button>

                <video
                    v-if="current.type === 'video'"
                    :src="current.src"
                    class="media"
                    autoplay
                    muted
                    controls
                    playsinline
                ></video>
                <img
                    v-else
                    :src="current.src"
                    :alt="current.alt || ''"
                    class="media"
                />

                <button
                    v-if="hasMultiple"
                    class="navBtn prev"
                    aria-label="Previous"
                    @click="prev"
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M15 4 L7 12 L15 20" />
                    </svg>
                </button>
                <button
                    v-if="hasMultiple"
                    class="navBtn next"
                    aria-label="Next"
                    @click="next"
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 4 L17 12 L9 20" />
                    </svg>
                </button>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
    .backdrop {
        position: fixed;
        inset: 0;
        z-index: 100000;
        background: rgba(0, 0, 0, 0.85);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.5rem;
    }

    /* Hugs the media so the × sits at its top-right corner. */
    .frame {
        position: relative;
        display: inline-block;
        max-width: 80vw;
        max-height: 90vh;
    }

    .media {
        display: block;
        max-width: 80vw;
        max-height: 90vh;
        width: auto;
        height: auto;
        background: #000;
    }

    .closeBtn {
        position: absolute;
        top: 0.75rem;
        right: 0.75rem;
        z-index: 2;
        width: 2rem;
        height: 2rem;
        border: none;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.201);
        color: #000;
        font-size: 1rem;
        line-height: 1;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
    }

    .closeBtn:hover {
        background: #ffffff85;
    }

    /* Symmetric SVG cross — centres perfectly inside the circle. */
    .closeBtn svg {
        width: 55%;
        height: 55%;
        fill: none;
        stroke: currentColor;
        stroke-width: 2.5;
        stroke-linecap: round;
    }

    /* Prev/next arrows (visualization gallery only) — just the arrow, no ring. */
    .navBtn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
        border: none;
        background: none;
        padding: 0.5rem;
        color: #fff;
        cursor: pointer;
        display: flex;
        opacity: 0.75;
        transition: opacity 0.2s ease, transform 0.2s ease;
        -webkit-tap-highlight-color: transparent;
    }

    .navBtn:focus,
    .navBtn:focus-visible {
        outline: none;
    }

    .navBtn:hover {
        opacity: 1;
        transform: translateY(-50%) scale(1.2);
    }

    .navBtn.prev {
        left: 1rem;
    }

    .navBtn.next {
        right: 1rem;
    }

    .navBtn svg {
        width: 2.25rem;
        height: 2.25rem;
        fill: none;
        stroke: currentColor;
        stroke-width: 2.5;
        stroke-linecap: round;
        stroke-linejoin: round;
        filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.6));
    }

    /* Mobile: use almost the full width. */
    @media (max-width: 768px) {
        .backdrop {
            padding: 0.75rem;
        }

        .frame,
        .media {
            max-width: 94vw;
            max-height: 88vh;
        }

        .closeBtn {
            width: 1.25rem;
            height: 1.25rem;
            font-size: 1rem;
        }

        .navBtn svg {
            width: 1.75rem;
            height: 1.75rem;
        }

        .navBtn.prev {
            left: 0.25rem;
        }

        .navBtn.next {
            right: 0.25rem;
        }
    }
</style>
