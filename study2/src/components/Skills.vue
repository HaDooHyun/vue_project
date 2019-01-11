<template>
  <div class="skills">
    <form @submit.prevent="addSkill">
    <input type="text" placeholder="Enter a skill you have.." 
    v-model="skill" v-validate="'min:5'" name="skill">
    <transition name="impormation-in">
      <p class="impormation" v-if="errors.has('skill')">
        {{ errors.first('skill') }}
      </p>
    </transition>
    </form>
    {{ skill }}
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
      },
      checked: false,
    }
  },
  methods: {
    addSkill () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.skills.push({ skill: this.skill });
          this.skill = null;
        } else {
          console.log('Not valid');
        }
      })
      console.log('The checkbox value is : ' + this.checked)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Skills.css" scoped>

</style>
