<template>
    <div class="position">
        <div class="position__meta">
            <h3 class="position__name">
                {{ position.name }}
            </h3>

            <p class="position__dates">
                {{ position.start }} &ndash; {{ position.end || 'present' }}
            </p>
        </div>

        <p v-html="descriptionHTML" class="position__description" />

        <p class="position__tech">
            <h4 class="position__tech-heading">
                Technologies: 
            </h4>

            <span>
                <template v-for="(technology, index) in position.technologies">

                    {{ technology }}{{ index !== position.technologies.length - 1 ? ', ' : '' }}

                </template>
            </span>
        </p>
    </div>
</template>

<script>
import * as marked from 'marked';

export default {
    name: 'Position',
    props: {
        position: {
            type: Object,
            required: true,
        },
    },
    computed: {
        descriptionHTML() {
            return marked(this.position.description);
        },
    },
};
</script>

<style lang="scss">
.position {
    margin-bottom: 20px;

    &__meta {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    &__name {

    }

    &__dates {
        font-style: italic;
    }

    &__description {
        p {
            margin-bottom: 10px;
        }
    }

    &__tech {

    }

    &__tech-heading {
        display: inline;
    }
}
</style>
