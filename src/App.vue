<template>
  <div :class="$style.wrapper">
    <div :class="$style.buttons">
      <v-btn
        elevation="2"
        @click="getPersons"
        :class="$style.button"
        :disabled="isEditNow"
        >Get Persons</v-btn
      >
      <v-btn
        elevation="2"
        @click="postPerson"
        :class="$style.button"
        :disabled="isEditNow"
        >Post Persons</v-btn
      >
      <v-btn
        elevation="2"
        @click="changePerson"
        :class="$style.button"
        v-if="isEditNow"
        >Update Person</v-btn
      >
    </div>
    <div :class="$style.inputs">
      <v-text-field label="FirstName" v-model="firstName"></v-text-field>
      <v-text-field label="SecondName" v-model="secondName"></v-text-field>
    </div>
    <v-container>
      <v-col
        v-for="(item, index) in $store.state.persons.persons"
        :key="item"
        :class="$style.data"
      >
        <v-card>
          <div>{{ index + 1 + ") " }} {{ item.firstName }}</div>
          <div>{{ item.secondName }}</div>
          <v-btn
            elevation="2"
            :class="$style.button"
            @click="deletePerson(item._id)"
            >Delete Person</v-btn
          >
          <v-btn
            elevation="2"
            :class="$style.button"
            @click="setChosenPerson(item)"
            >Edit Person</v-btn
          >
        </v-card>
      </v-col>
    </v-container>
    <!-- <v-banner
      v-for="(item, index) in $store.state.persons.persons"
      :key="item"
      :class="$style.data"
    >
      <div>{{ index + 1 + ") " }} {{ item.firstName }}</div>
      <div>{{ item.secondName }}</div>
      <v-btn
        elevation="2"
        :class="$style.button"
        @click="deletePerson(item._id)"
        >Delete Person</v-btn
      >
      <v-btn elevation="2" :class="$style.button" @click="setChosenPerson(item)"
        >Edit Person</v-btn
      >
    </v-banner> -->
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
        this.firstName = "";
        this.secondName = "";
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
      max-width: 30rem;
    }
    .data {
      margin-bottom: 1rem;
      display: flex;
      gap: 2rem;
    }
  }
}
</style>
