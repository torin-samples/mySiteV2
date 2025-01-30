<script>
  import ProjectCards from './ProjectCards.svelte';
  import SkillCards from './SkillCards.svelte';
</script>
  
<main class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-16 transition-colors duration-300">
  <section class="mb-12">
    <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-6">About Me</h2>
    <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
      I'm a passionate software developer with a keen interest in building scalable and efficient applications. 
      With a strong foundation in various programming languages and frameworks, I love tackling complex problems 
      and turning ideas into reality through code.
    </p>
  </section>

  <SkillCards />

  <ProjectCards />

  <section>
    <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Let's Connect</h2>
    <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
      I'm always open to new opportunities and collaborations. Feel free to reach out!
    </p>
    <a href="/Resume.pdf" download="Torin_Samples_Resume.pdf" 
      class="inline-flex items-center justify-center py-3 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 text-lg font-semibold">
      <i data-feather="download" class="mr-2"></i>
      Download Resume
    </a>
  </section>
</main>
  