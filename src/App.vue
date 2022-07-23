<template>
  <div>
    <button @click="getPersons" :class="$style.button">Get Persons</button>
    <button @click="postPerson" :class="$style.button">Post Persons</button>
    <div v-for="(item, index) in $store.state.persons.persons" :key="item">
      <div>{{ index + 1 + ") " }}</div>
      <div>{{ this.firstName }}</div>
      <input type="text" v-model="newFirstName" />
      <div>{{ this.secondName }}</div>
      <input type="text" v-model="newSecondName" />
      <button @click="deletePerson(item._id)">Delete Persons</button>
    </div>
    <div>
      <input type="text" v-model="firstName" />
      <input type="text" v-model="secondName" />
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      firstName: "",
      secondName: "",
    };
  },
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
        firstName: this.firstName,
        secondName: this.secondName,
      };
      try {
        await this.$store.dispatch("postPerson", user);
      } catch (error) {
        console.log("error");
      }
    },
    async deletePerson() {
      try {
        await this.$store.dispatch("deletePerson", id);
      } catch (error) {
        console.log("error");
      }
    },
  },
};
</script>

<style lang="scss"  module>
.button{
  
}
</style>
