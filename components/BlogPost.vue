<template>
    <div>
        <h1>{{ postTitle }}</h1>
        <div v-html="postContent" />
    </div>
</template>
  
<script>
export default {
    props: {
        postTitle: {
            type: String,
            required: true,
        },
        postContent: {
            type: String,
            required: true,
        },
    },
};
</script>
  