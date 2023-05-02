<template>
    <p>
        {{ start }} &ndash; {{ end || 'present' }}
    </p>
</template>

<script>
export default {
    name: 'Dates',
    props: {
        start: {
            type: String,
            required: true,
        },
        end: {
            type: String,
            required: false,
        },
    }
};
</script>

<style lang="scss">
</style>
