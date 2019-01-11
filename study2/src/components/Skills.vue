<template>
  <div class="skills">
    <div class="holder">
      <ul>
        <li v-for="(data, index) in skills" :key='index'>{{index}}. {{data.skill}}</li>
      </ul>
      <div v-bind:class="{ alert: showAlert, 'another-class': showClass }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data () {
    return {
      name: 'Coursetro',
      btnState: false,
      skills: [
        { "skill": "Vue.js" },
        { "skill": "Frontend Developer" },
      ],
      showAlert: true,
      showClass: true,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Skills.css" scoped>

</style>
