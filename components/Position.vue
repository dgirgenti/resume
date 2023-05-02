<template>
    <div class="position">
        <div class="position__meta">
            <h3 class="position__name">
                {{ position.name }}
            </h3>

            <Dates v-if="position.start && showDates" :start="position.start" :end="position.end" />
        </div>
    </div>
</template>

<script>
import Dates from '~/components/Dates.vue';

export default {
    name: 'Position',
    components: {
        Dates,
    },
    props: {
        position: {
            type: Object,
            required: true,
        },
        showDates: {
            type: Boolean,
            default: false,
        }
    },
};
</script>

<style lang="scss">
.position {
    &__meta {
        display: flex;
        justify-content: left;
        align-items: flex-end;

        @media screen and (max-width: 480px) {
            display: block;
        }
    }

    &__name {
        margin-right: 15px;
        font-size: 1.05rem;
    }
}

@media print {
    .position {
        &__name {
            font-size: 1rem;
        }
    }
}
</style>
