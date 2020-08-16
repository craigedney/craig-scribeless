<template>
  <b-row>
    <b-col cols="12">
      <b-jumbotron>
        <h2>
          {{ board.title }}
        </h2>
        <p>
          {{ board.description }}
        </p>
        <hr class="my-4">

        <!-- -->
        <b-form @submit="onSubmit">
          <b-form-input id="title" v-model.trim="board.title"></b-form-input>
          <b-form-textarea :max-rows="6"
                           :rows="2"
                           id="description"
                           placeholder="Enter something"
                           v-model="board.description">{{ board.description }}
          </b-form-textarea>
          <hr>
          <div class="clearfix">
          <!-- Update Button -->
          <b-button type="submit" variant="primary">Update</b-button>
          &nbsp;
          <!-- Cancel Button -->
          <router-link :to="{ name: 'View', params: { id: key } }" tag="b-button">Cancel</router-link>
          </div>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'Edit',
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
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      const updateRef = firebase.firestore().collection('companies').doc(this.$route.params.id);
      updateRef.set(this.board).then(() => {
        this.key = ''
        this.board.title = ''
        this.board.description = ''
        router.push({name: 'View', params: {id: this.$route.params.id}})
      })
          .catch((error) => {
            alert("Error adding document: ", error);
          });
    }
  }
}
</script>

<style>

</style>