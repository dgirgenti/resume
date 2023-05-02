<template>
    <div class="job">
        <div class="job__header">
            <h3 class="job__name">

                <a v-if="job.url" :href="job.url" class="o-link" target="_blank">
                    {{ job.name }}
                </a>

                <template v-else>
                    {{ job.name }}
                </template>

                <span
                    v-if="asideHTML"
                    class="o-markdown job__aside"
                    v-html="asideHTML"> </span>

            </h3>

            <Dates v-if="dates.start" class="job__dates" :start="dates.start" :end="dates.end" />
        </div>

        <ul class="job__positions">

            <li v-for="position in job.positions.toReversed()" :key="position.start">

                <Position :position="position" :showDates="showPositionDates" />

            </li>

        </ul>

        <p v-if="descriptionHTML" class="o-markdown job__description" v-html="descriptionHTML" />

        <div v-if="job.technologies" class="job__tech">
            <h4 class="job__tech-heading">
                Technologies:
            </h4>

            <span>
                {{ technologies }}
            </span>
        </div>
    </div>
</template>

<script>
import marked from 'marked';

import Dates from '~/components/Dates.vue';
import Position from '~/components/Position.vue';

export default {
    name: 'Job',
    components: {
        Dates,
        Position,
    },
    props: {
        job: {
            type: Object,
            required: true,
        },
    },
    computed: {
        asideHTML() {
            return this.job.aside ? marked.inlineLexer(this.job.aside, {}) : null;
        },
        dates() {
            const { positions } = this.job;
            return {
                start: positions[0].start,
                end: positions[positions.length - 1].end,
            };
        },
        descriptionHTML() {
            return this.job.description ? marked(this.job.description) : null;
        },
        showPositionDates() {
            return this.job.positions.length > 1;
        },
        technologies() {
            return this.job.technologies ? this.job.technologies.join(', ') : null;
        },
    },
};
</script>

<style lang="scss">
.job {
    padding-bottom: 10px;

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__name {
        font-size: 1.3rem;
    }

    &__aside {
        font-weight: initial;
        font-style: italic;
        font-size: 0.8rem;

        @media screen and (max-width: 480px) {
            display: none;
        }
    }

    &__positions {
        margin-bottom: 5px;
    }

    &__tech-heading {
        display: inline;
    }
}

@media print {
    .job {
        padding-bottom: 5px;

        &__description {
            li {
                p {
                    margin-bottom: 5px;
                }
            }
        }

        &__name {
            font-size: 1.05rem;
        }

        &__positions {
            margin-bottom: 5px;
        }
    }
}
</style>
