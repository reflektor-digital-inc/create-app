const questions = {
  projectName : {
    type: 'text',
    name: 'projectName',
    message: 'What is the name of the project?'
  },
  template : {
    type: 'select',
    name: 'template',
    message: 'Which template would you like to use?',
    choices: [
      { title: 'React + Vite', value: 'react-vite' },
      { title: 'React + NextJS', value: 'react-next', disabled : true },
      { title: 'Vue + Vite', value: 'vue-vite', disabled : true },
      { title: 'Vue + NuxtJS 3', value: 'vue-nuxt', disabled : true }
    ],
    initial : 0
  }
};

export default questions;
