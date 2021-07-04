<template>
  <h2>This is Email Page</h2>
  <!-- BT - Route param - Step 2: Display your list out using v-for and then add the
            router-link to your list.
            params: { id: email.id} - take in an object with id as a key and email.id as value. See step3 index.js -->
  <ul v-for="email in dataEmails" :key="email.id">
    <router-link :to="{name: 'EmailDetail', params: { id: email.id}}">
    <li>{{ email.email }}</li>
    </router-link>
  </ul>


</template>

<script>

import EmailDetail from '../views/EmailDetail.vue'

export default {

  components: { EmailDetail },

  data(){
    return {
      dataEmails: [
        {id: 1, email: 'test1@test1.com', address: '123 test1 street'},
        {id: 2, email: 'test2@test2.com',address: '234 test2 street'}
      ]
    }
  }

}
</script>

<style>

</style>