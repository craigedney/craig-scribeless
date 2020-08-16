<template>
  <!-- Row click goes to /view without key -->
  <b-table :fields="fields" :items="companies" @row-clicked="(view({}))" hover responsive="true"
           select-mode="single"
           selectable striped>
    <!-- Button click goes to /view/{key} -->
    <template v-slot:cell(key)="cell">
      <b-btn @click.stop="view(cell.item)">
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
        {key: 'key', label: 'key'},
        {key: 'title', label: 'company', sortable: true},
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