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
};
</script>

<style lang="scss">
.position {
    &__meta {
        display: flex;
        justify-content: left;
        align-items: center;
    }

    &__name {
        margin-right: 15px;
        font-size: 1.05rem;
    }

    &__dates {
        font-style: italic;
    }
}
</style>
