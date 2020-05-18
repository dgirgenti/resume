<template>
    <h2 class="section-header">
        <slot />
    </h2>
</template>

<script>
export default {
    name: 'SectionHeader',
};
</script>

<style lang="scss">
.section-header {
    color: #fff;
    font-size: 1rem;
    font-weight: normal;
    margin: 0 -30px 10px;
    padding: 8px 8px 8px 30px;
    background-color: #657b37;
    text-transform: lowercase;
    letter-spacing: 1px;
    transition: background-color 250ms;

    section:hover & {
        background-color: #a83582;
    }
}

@media print {
    .section-header {
        margin: 0 0 5px;
        padding: 0;
        color: #000;
        text-align: center;
        font-weight: bold;
        text-transform: capitalize;
        border-bottom: 1px solid #ddd;
    }
}
</style>
