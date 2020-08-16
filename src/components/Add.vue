<template>
  <b-row>
    <b-col cols="12">
      <b-jumbotron>
        <h2>
          Create Entry
        </h2>
        <b-form @submit="onSubmit">
          <!-- Company Title Input -->
          <b-form-input id="title" placeholder="Enter Company Title" v-model.trim="board.title"></b-form-input>
          <!-- Company Description Input -->
          <b-form-textarea id="description" placeholder="Enter Company Description" v-model="board.description">
            {{ board.description }}
          </b-form-textarea>
          <!-- Save Button -->
          <b-button type="submit" variant="primary">Save</b-button>
          &nbsp;
          <!-- Back Button -->
          <b-button href="#/">Back</b-button>
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