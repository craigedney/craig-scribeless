<template>
  <b-row>
    <b-col cols="12">
      <b-jumbotron>
        <template slot="header">
          {{ board.title }}
        </template>
        <template slot="lead">
          {{ board.description }}
        </template>
        <hr class="my-4">
        <div class="clearfix">
          <div class="float-left">
            <b-btn @click.stop="edit(key)" class="edit-btn" variant="primary">Edit</b-btn>&nbsp;
            <b-button href="#/">Back</b-button>
          </div>
          <div class="float-right">
            <b-button @click="modalShow = !modalShow" variant="danger">
              <v-icon name="trash-alt"/>
            </b-button>
          </div>
        </div>
        <b-modal centered size="sm" title="Are you sure?" v-model="modalShow">
          <p>This record will be deleted.</p>
          <template v-slot:modal-footer>
            <b-btn @click.stop="del(key)" variant="danger">Delete</b-btn>
            <b-btn @click="modalShow = !modalShow">Cancel</b-btn>
          </template>
        </b-modal>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'View',
  data() {
    return {
      key: '',
      board: {},
      modalShow: false
    }
  },
  created() {
    const ref = firebase.firestore().collection('companies').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.key = doc.id;
        this.board = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    edit(id) {
      router.push({
        name: 'Edit',
        params: {id: id}
      })
    },
    del(id) {
      firebase.firestore().collection('companies').doc(id).delete().then(() => {
        router.push({
          name: 'List'
        })
      }).catch((error) => {
        alert("Error removing document: ", error);
      });
    }
  }
}
</script>

<style>
</style>