<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        labelOpen: { type: String, default: 'Show less' },
        labelClosed: { type: String, default: 'See the process' },
    });

    const open = ref(false);
</script>

<template>
    <div class="expandable">
        <button
            class="toggleBtn"
            :aria-expanded="open"
            @click="open = !open"
        >
            {{ open ? labelOpen : labelClosed }}
            <span class="arrow" :class="{ rotated: open }">↓</span>
        </button>

        <div class="expandGrid" :class="{ open }">
            <div class="expandInner">
                <slot />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .expandable {
        margin-top: 1.5rem;
    }

    .toggleBtn {
        font-family: var(--font-body);
        font-size: 0.9rem;
        background: none;
        border: none;
        border-bottom: 1px solid #2d2e2b;
        padding: 0 0 0.3rem 0;
        cursor: pointer;
        color: #2d2e2b;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
    }

    .arrow {
        display: inline-block;
        transition: transform 0.3s ease;
    }

    .arrow.rotated {
        transform: rotate(180deg);
    }

    .expandGrid {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.45s ease;
    }

    .expandGrid.open {
        grid-template-rows: 1fr;
    }

    .expandInner {
        overflow: hidden;
    }

    /* On mobile, inset the whole panel (button + content) like the project
       description, so the text isn't edge-to-edge and the toggle button sits
       away from the screen edge (where touch gestures can swallow the tap). */
    @media (max-width: 768px) {
        .expandable {
            box-sizing: border-box;
            padding: 0 2rem;
        }
    }
</style>