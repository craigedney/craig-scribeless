<template>
  <div>
    <b-form-input id="title" placeholder="Company" v-model.trim="board.title"></b-form-input>
    <b-form-textarea :rows="4" id="description" placeholder="Description" v-model="board.description">
      {{ board.description }}
    </b-form-textarea>
    <b-form-input id="phone" placeholder="Phone" v-model.trim="board.phone"></b-form-input>
    <b-form-input id="email" placeholder="Email" v-model.trim="board.email"></b-form-input>
    <b-form-input id="url" placeholder="URL" v-model.trim="board.url"></b-form-input>
  </div>
</template>

<script>
import firebase from '../Firebase'

export default {
  name: "Form",
  data() {
    return {
      key: this.$route.params.id,
      board: {}
    }
  },
  created() {
    const ref = firebase.firestore().collection('companies').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.board = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
}
</script>

<style scoped>

</style>