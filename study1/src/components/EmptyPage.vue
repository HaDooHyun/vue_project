<template>
<div class="container">
    <p>Hello {{ their_name }}, this is an empty page</p>
</div>
</template>

<script>
export default {
    name: 'Empty',
    data () {
        return {
            their_name: this.$route.params.name
        }
    }
}
</script>