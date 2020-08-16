<template>
  <b-row>
    <b-col cols="12">
      <b-jumbotron>
        <h2>
          Create Entry
        </h2>
        <hr class="my-4">
        <b-form @submit="onSubmit">
          <b-form-input id="title" placeholder="Enter Company Title" v-model.trim="board.title"></b-form-input>
          <br>
          <b-form-textarea id="description" placeholder="Enter Company Description" v-model="board.description">
            {{ board.description }}
          </b-form-textarea>
          <hr>
          <b-button type="submit" variant="primary">Save</b-button>
          &nbsp;
          <b-button href="#/">Cancel</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'Add',
  data() {
    return {
      ref: firebase.firestore().collection('companies'),
      board: {}
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.ref.add(this.board).then(() => {
        this.board.title = ''
        this.board.description = ''

        router.push({
          name: 'List'
        })
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