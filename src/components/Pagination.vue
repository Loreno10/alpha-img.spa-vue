<template>
    <div class="pagination-container">
        <button :disabled="disablePrevious" @click="$emit('previous-clicked')">Previous</button>
        <button @click="$emit('next-clicked')">Next</button>
    </div>
</template>

<script>
export default {
    props: ["disablePrevious"]
}
</script>

<style scoped>
.pagination-container {
    display: flex;
    justify-content: center;
}
</style>