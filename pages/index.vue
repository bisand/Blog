<template>
    <div>
        <!-- Replace 'postTitle' and 'postContent' with actual data from your blog post -->
        <BlogPost :postTitle="postTitle" :postContent="postContent" />
    </div>
</template>
  
<script>
import BlogPost from '~/components/BlogPost.vue';

export default {
    components: {
        BlogPost,
    },
    data() {
        return {
            postTitle: 'Your Blog Post Title',
            postContent: '<p>Your blog post content goes here.</p>',
        };
    },
};
</script>
  