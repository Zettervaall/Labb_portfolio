import { ref } from 'vue';

/*
 * Shared state for the enlarged-media overlay.
 *
 *   items : an array of { type: 'video' | 'image', src, alt } — or null when closed.
 *   index : which item is currently shown.
 *
 * A single video opens as a one-item list (no arrows). The visualization
 * gallery opens as a multi-item list, which shows prev/next arrows.
 */
const items = ref(null);
const index = ref(0);

export function useLightbox() {
    function openVideo(src) {
        items.value = [{ type: 'video', src }];
        index.value = 0;
    }

    function openGallery(list, startIndex = 0) {
        items.value = list;
        index.value = startIndex;
    }

    function close() {
        items.value = null;
    }

    function next() {
        if (items.value) index.value = (index.value + 1) % items.value.length;
    }

    function prev() {
        if (items.value) {
            index.value = (index.value - 1 + items.value.length) % items.value.length;
        }
    }

    return { items, index, openVideo, openGallery, close, next, prev };
}
