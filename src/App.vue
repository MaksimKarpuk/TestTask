<template>
  <div>
    <div @click="getPersons">Get</div>
    <div @click="postPerson">Post</div>
    <div @click="deletePerson">Delete</div>
    <p v-for="(item, index) in $store.state.persons.persons" :key="item">
      {{ index + 1 + ") " }}{{ item.text }} {{item._id}}
    </p>
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
    async postPerson() {
      let user = {
        text: "Test",
      };
      try {
        await this.$store.dispatch("postPerson", user);
      } catch (error) {
        console.log("error");
      }
    },
    async deletePerson() {
      let id = "62dbfaa66f047803e8aed9f4";
      try {
        await this.$store.dispatch("deletePerson", id);
      } catch (error) {
        console.log("error");
      }
    },
  },
};
</script>

<style lang="scss">
</style>
