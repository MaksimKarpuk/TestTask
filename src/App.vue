<template>
  <div :class="$style.wrapper">
    <div :class="$style.buttons">
      <button @click="getPersons" :class="$style.button">Get Persons</button>
      <button @click="postPerson" :class="$style.button">Post Persons</button>
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
      <div>{{ index + 1 + ") " }}</div>
      <div @click="openInput()">{{ item.firstName }}</div>
      <input
        type="text"
        v-model="newFirstName"
        :class="[{ [$style.newInput]: isVisible }]"
      />
      <div @click="openInput()">{{ item.secondName }}</div>
      <input
        type="text"
        v-model="newSecondName"
        :class="[{ [$style.newInput]: isVisible }]"
      />
      <button :class="$style.button" @click="deletePerson(item._id)">
        Delete Persons
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
      newFirstName: "",
      newSecondName: "",
      isVisible: true,
    };
  },
  name: "App",
  computed: {
    openInput() {
      this.isVisible != this.isVisible;
    },
  },
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
.wrapper {
  margin: 1rem;
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
    input {
      height: 1.5rem;
    }
  }
  .data {
    .newInput {
      display: none;
    }
  }
}
</style>
