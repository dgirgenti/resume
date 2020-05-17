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
    color: #FFF;
    font-size: 1.1em;
    margin: 10px 0 0;
    padding: 8px 8px 8px 20px;
    background-color: #76923D;
    text-transform: lowercase;
    letter-spacing: 1px;

    section:hover & {
        background-color: #A83582;
    }
}
</style>
