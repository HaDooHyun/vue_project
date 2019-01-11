<template>
  <div class="skills">
    <div class="holder">
      <ul>
        <li v-for="(data, index) in skills" :key='index'>{{index}}. {{data.skill}}</li>
      </ul>
      <div v-bind:class="alertObject"></div>
      <div v-bind:style="{ backgroundColor: styleObject.bgColor, width: styleObject.bgWidth, height: styleObject.bgHeight }"></div>
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
