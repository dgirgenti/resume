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
    margin: 0 -30px 10px;
    padding: 8px 8px 8px 30px;
    background-color: #a8498a;
    color: #fff;
    font-size: 1rem;
    font-weight: normal;
    text-transform: lowercase;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.25);
    letter-spacing: 1px;
    transition: background-color 250ms;

    section:hover & {
        background-color: #657b37;
    }
}

@media print {
    .section-header {
        // margin: 0 -10px 8px;
        // padding: 5px 0px;
        // text-align: center;
        // border-bottom: 1px solid #a8498a;

        margin: 0 0 5px;
        padding: 0;
        color: #666;
        text-align: center;
        font-weight: bold;
        background: none;
        border-bottom: 1px solid #ddd;
        text-shadow: none;
    }
}
</style>
