<template>
  <div>
    <div @click="getPersons">Get</div>
    <div @click="postPersons">Post</div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    async getPersons() {
      try {
        await this.$store.dispatch("getPersons");
      } catch (error) {
        console.log("error");
      }
    },
    async postPersons(user) {
      try {
        await this.$store.dispatch("postPersons");
      } catch (error) {
        console.log("error");
      }
    },
  },
};
</script>

<style lang="scss">
</style>
