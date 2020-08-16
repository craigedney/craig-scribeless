<template>
  <b-table :fields="fields" :items="companies" hover responsive="true">
    <template v-slot:cell(key)="cell">
      <b-btn @click.stop="view(cell.item)" variant="info">
        <v-icon name="eye"/>
      </b-btn>
    </template>
  </b-table>
</template>

<script>
import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'List',
  data() {
    return {
      fields: [
        {key: 'key', label: ''},
        {key: 'title', label: '', sortable: true},
      ],
      companies: [],
      errors: [],
      ref: firebase.firestore().collection('companies'),
    }
  },
  created() {
    this.ref.onSnapshot((querySnapshot) => {
      this.companies = [];
      querySnapshot.forEach((doc) => {
        this.companies.push({
          key: doc.id,
          title: doc.data().title
        });
      });
    });
  },
  methods: {
    onRowSelected(items) {
      this.companies = items
    },
    view(data) {
      router.push({name: 'View', params: {id: data.key}})
    }
  }
}
</script>

<style>
</style>
