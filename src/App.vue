<template>
  <div @click="getPersons">Click me</div>
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
  },
};
</script>

<style lang="scss">
</style>
