<template>
  <div :class="$style.wrapper">
    <div :class="$style.buttons">
      <button @click="getPersons" :class="$style.button" :disabled="isEditNow">
        Get Persons
      </button>
      <button @click="postPerson" :class="$style.button" :disabled="isEditNow">
        Post Persons
      </button>
      <button @click="changePerson" :class="$style.button" v-if="isEditNow">
        Update Person
      </button>
    </div>
    <div :class="$style.inputs">
      <input type="text" v-model="firstName" placeholder="firstName" />
      <input type="text" v-model="secondName" placeholder="secondName" />
    </div>
    <div
      v-for="(item, index) in $store.state.persons.persons"
      :key="item"
      :class="$style.data"
    >
      <div>{{ index + 1 + ") " }} {{ item.firstName }}</div>
      <div>{{ item.secondName }}</div>
      <button :class="$style.button" @click="deletePerson(item._id)">
        Delete Person
      </button>
      <button :class="$style.button" @click="setChosenPerson(item)">
        Edit Person
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      secondName: "",
      isEditNow: false,
      chosenPerson: {},
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
    async deletePerson(id) {
      try {
        await this.$store.dispatch("deletePerson", id);
      } catch (error) {
        console.log("error");
      }
    },
    async changePerson() {
      let user = {
        id: this.chosenPerson._id,
        firstName: this.firstName,
        secondName: this.secondName,
      };
      try {
        if (user.firstName && user.secondName) {
          await this.$store.dispatch("changePerson", user);
          this.firstName = "";
          this.secondName = "";
        }
      } catch (error) {
        console.log("error");
      }
      this.isEditNow = false;
    },
    setChosenPerson(item) {
      this.chosenPerson = item;
      this.firstName = item.firstName;
      this.secondName = item.secondName;
      this.isEditNow = true;
    },
  },
  mounted() {
    this.getPersons();
  },
};
</script>

<style lang="scss"  module>
body {
  margin: 0;
  .wrapper {
    min-height: 100vh;
    background: linear-gradient(104.11deg, #ff7e5f 14.52%, #feb567 87.26%);
    padding: 1rem;
    .buttons {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
      .button {
        padding: 0.5rem 1rem;
      }
    }
    .inputs {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
      input {
        height: 1.5rem;
      }
    }
    .data {
      border: 0.0625rem solid black;
      margin-bottom: 1rem;
      display: flex;
      gap: 2rem;
      .newInput {
        display: none;
      }
    }
  }
}
</style>
