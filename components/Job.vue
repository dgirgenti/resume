<template>
    <div class="job">
        <h2 class="job__name">

            <a v-if="job.url" :href="job.url" class="o-link">{{ job.name }}</a>

            <template v-else>
                {{ job.name }}
            </template>

            <span
                v-if="asideHTML"
                v-html="asideHTML"
                class="o-markdown job__aside" />

        </h2>

        <ul class="job__positions">

            <li v-for="position in job.positions">

                <Position :position="position" />

            </li>

        </ul>

        <p v-if="descriptionHTML" v-html="descriptionHTML" class="o-markdown job__description" />

        <p v-if="job.technologies" class="job__tech">
            <h4 v-if="job.technologies" class="job__tech-heading">
                Technologies:
            </h4>

            <span>
                <template v-for="(technology, index) in job.technologies">

                    {{ technology }}{{ index !== job.technologies.length - 1 ? ', ' : '' }}

                </template>
            </span>
        </p>
    </div>
</template>

<script>
import marked from 'marked';

import Position from '~/components/Position.vue';

export default {
    name: 'Job',
    components: {
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
        descriptionHTML() {
            return this.job.description ? marked(this.job.description) : null;
        },
    },
};
</script>

<style lang="scss">
.job {
    padding-bottom: 10px;

    &__name {
        font-size: 1.3rem;
    }

    &__aside {
        font-weight: initial;
        font-style: italic;
        font-size: 0.8rem;
    }

    &__positions {
        margin-bottom: 10px;
    }

    &__tech-heading {
        display: inline;
    }
}
</style>
