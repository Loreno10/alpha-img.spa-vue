<template>
    <div>
        <button :disabled="disablePrevious" @click="$emit('previous-clicked')">Previous</button>
        <button @click="$emit('next-clicked')">Next</button>
    </div>
</template>

<script>
export default {
    props: ["disablePrevious"]
}
</script>