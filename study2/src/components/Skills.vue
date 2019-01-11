<template>
  <div class="skills">
    <div class="container">
    <input type="text" placeholder="Enter a skill you have.." v-model="skill">
    {{ skill }}
    </div>
    <div class="holder">
      <ul>
        <li v-for="(data, index) in skills" :key='index'>{{data.skill}}</li>
      </ul>
      <p>These are the skills that you prossess.</p>
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
      skill: '',
      skills: [
        { "skill": "Vue.js" },
        { "skill": "Frontend Developer" },
      ],
      alertObject: {
        alert: true,
      },
      styleObject: {
        bgColor: 'green',
        bgWidth: '100%',
        bgHeight: '30px',
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Skills.css" scoped>

</style>
