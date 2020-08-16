<template>
  <b-row>
    <b-col cols="12">
      <b-jumbotron>
        <template slot="lead">
          {{ board.title }}
        </template>
        <b-form @submit="onSubmit">
          <Form>
          </Form>
          <b-button type="submit" variant="primary">Update</b-button>&nbsp;
          <router-link :to="{ name: 'View', params: { id: key } }" tag="b-button">Cancel</router-link>
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
  name: 'Edit',
  components: {Form},
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
        this.board.phone = ''
        this.board.email = ''
        this.board.url = ''
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