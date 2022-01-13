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
      { title: 'Vue + Vite', value: 'vue-vite' },
      { title: 'Vue + NuxtJS 3', value: 'vue-nuxt' },
      { title: 'React + Vite', value: 'react-vite' },
      { title: 'React + NextJS', value: 'react-next' }
    ],
    initial : 0
  }
};

export default questions;
