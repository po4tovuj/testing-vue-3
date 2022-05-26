<template>
    <div class="loading">
        <img class="loading__spinner" src="../assets/Gear-0.2s-200px.svg" alt="spinner" />
    </div>
</template>

<style scoped lang="scss">
.loading {
    width: 100%;
    height: 100%;
    background-color: transparent;
    position: absolute;
    .loading__spinner {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
