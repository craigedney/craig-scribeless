<template>
  <b-row>
    <b-col cols="12">
      <b-jumbotron>
        <h2>
          New Entry
        </h2>
        <hr>
        <b-form @submit="onSubmit">
          <Form>
          </Form>
          <b-button type="submit" variant="primary">Save</b-button>&nbsp;
          <b-button href="#/">Back</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import firebase from '../Firebase'
import router from '../router'
import Form from "@/components/Form";

export default {
  name: 'Add',
  components: {Form},
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
        this.board.phone = ''
        this.board.email = ''
        this.board.url = ''
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