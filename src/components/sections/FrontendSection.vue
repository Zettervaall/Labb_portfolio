<script setup>
    import ProjectCard from '../ProjectCard.vue';
    import ExpandableSection from '../ExpandableSection.vue';
    import ZoomableVideo from '../ZoomableVideo.vue';
</script>

<template>
    <h4 class="headline" id="Frontend">Frontend</h4>

    <div class="frontendWork">
        <!-- Degree project -->
        <ProjectCard
            title="help me choose"
            label="Degree project · String"
            video="/public/Frontend/Help-me-choose-REC-2.mp4"
            layout="stacked"
        >
            <p>
                My degree project, carried out at String, where I designed
                and built a prototype for a conversational shopping guide
                that helps customers find the right product by describing
                what they're after, instead of filtering their way through a
                catalogue. Built in Vue.js, TypeScript and Tailwind.
            </p>

            <ExpandableSection>
                <div class="processStep">
                    <h2>The problem</h2>
                    <p>
                        On such a large site it's easy for a customer to get lost
                        before reaching the right product. "Help Me Choose" is
                        meant as a complementary tool that lowers that threshold and
                        letting customers describe what they're looking for in
                        their own words and guiding them straight to relevant
                        suggestions.
                    </p>
                </div>

                <div class="processStep">
                    <h2>Research</h2>
                    <p>
                        A big part of the work was making it feel like a natural
                        part of String's brand rather than a separate feature, so I
                        spent time finding the right tone and feel in Figma. I also
                        thought a lot about the name: "Help Me Choose" is
                        deliberately playful and inviting and avoids sounding
                        technical. It sits as a subheading under "Products", so when
                        a customer heads there to shop but isn't sure where to
                        start, the name speaks directly to that moment.
                    </p>
                </div>

                <div class="processStep">
                    <h2>Design</h2>
                    <p>
                        I put a lot of thought into the "empty state",  how the
                        interface feels before there's any real data. Rather than a
                        blank screen, the chat feels like it's already underway,
                        warm and welcoming, with a few products shown as inspiration
                        before any real recommendations exist. As the conversation
                        continues, quick reply options make it easy to keep going
                        even when the customer isn't sure how to answer.
                    </p>

                    <figure class="figmaVideo">
                        <ZoomableVideo
                            src="/help-me-choose/figma.mp4"
                            aria-label="The design in Figma"
                        />
                        <figcaption>The design in Figma</figcaption>
                    </figure>
                </div>
            </ExpandableSection>
        </ProjectCard>

        <hr class="projectDivider" />

        <!-- GRANÖ -->
        <ProjectCard
            title="GRANÖ"
            video="/public/Frontend/Grano_projekt3.mp4"
            layout="reversed"
            small
        >
            <p>
                This project was developed as part of a UI/UX course, where
                I designed a mobile website in Figma for a fictional
                furniture company. The challenge was to create an intuitive
                and aesthetically pleasing interface. The design focuses on
                a warm, classic, and minimalist style, aimed at delivering a
                sophisticated and clean look. The goal was to ensure the
                website was both functional and visually appealing.
            </p>
        </ProjectCard>

        <hr class="projectDivider" />

        <!-- la senteur -->
        <ProjectCard
            title="la senteur"
            video="/public/Frontend/Projekt1 parfym_2.mp4"
            layout="normal"
        >
            <p>
                This project was one of the first assignments we worked on
                in school, where we were tasked with creating a website that
                integrates data from an API. For this, I decided to build my
                own API using a JSON file. The file contains a curated
                collection of perfumes, including details like the names of
                the perfumes, their scent notes, and other relevant
                information.
            </p>
        </ProjectCard>

        
    </div>
</template>

<style scoped>
    #Frontend {
        margin-top: 10rem;
        margin-bottom: 1rem;
    }

    .frontendWork {
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        gap: var(--project-gap);
        padding: 0 20rem 0 20rem;
        position: relative;
        font-family: var(--font-display);
    }

    /* Subtle separator between projects. The flex `gap` above puts an equal
       space on both sides, so the line stays centred between the projects. */
    .projectDivider {
        border: none;
        width: var(--divider-width);
        height: 2px;
        margin: 0 auto;
        background-color: currentColor;
        opacity: var(--divider-opacity);
    }

    /* Steps inside the "See the process" panel (help me choose).
       Cap the width so the panel doesn't stretch the whole text block wider
       than the description (which would break the centering of the project). */
    .processStep {
        max-width: 40rem;
    }

    .processStep h2 {
        font-size: 1.5rem;
        margin-top: 4rem;
        margin-bottom: 1rem;
    }

    .figmaVideo {
        margin: 1.5rem 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .figmaVideo video {
        width: 100%;
        max-width: 40rem;
        height: auto;
        border: 1px solid rgba(0, 0, 0, 0.08);
    }

    .figmaVideo figcaption {
        margin-top: 0.5rem;
        font-size: 0.85rem;
        opacity: 0.55;
    }

    .stringVideo {
        border: 1px solid rgba(0, 0, 0, 0.08);
    }

    /* MOBILE */
    @media (max-width: 768px) {
        .frontendWork {
            margin-top: 1rem;
            justify-content: center;
            padding: 0;
        }

        /* Match the project description's smaller text on mobile. */
        .processStep p {
            font-size: 0.8rem;
        }
    }

    /* TABLET / LAPTOP */
    @media (min-width: 768px) and (max-width: 1950px) {
        .frontendWork {
            margin-top: 1rem;
            justify-content: center;
            align-items: center;
            padding: 0;
        }
    }
</style>
