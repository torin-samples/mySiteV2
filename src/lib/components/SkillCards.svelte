<script lang="ts">
    const skillCategories = [
      {
        title: 'Languages',
        description: 'Programming languages I use to build software solutions',
        skills: [
          {
            name: 'C/C++',
            projects: ['RIT Launch Initiative - Sensor Communications', 'Embedded Systems'],
            experience: 'Advanced'
          },
          {
            name: 'Python',
            projects: ['AI Integration', 'Flask Backend Development'],
            experience: 'Advanced'
          },
          {
            name: 'JS/TS',
            projects: ['Web Development', 'React Native Applications'],
            experience: 'Intermediate'
          },
          {
            name: 'Java',
            projects: ['Order System', 'Software Design'],
            experience: 'Advanced'
          },
          {
            name: 'SQL',
            projects: ['Database Management', 'Data Storage Solutions'],
            experience: 'Proficient'
          }
        ]
      },
      {
        title: 'Frameworks & Libraries',
        description: 'Tools I use to build scalable applications',
        skills: [
          {
            name: 'React Native',
            projects: ['RoamRich Mobile App'],
            experience: 'Proficient'
          },
          {
            name: 'Next.js',
            projects: ['Notekan Web Application'],
            experience: 'Proficient'
          },
          {
            name: 'Express.js',
            projects: ['RESTful API Development', 'Backend Services'],
            experience: 'Proficient'
          },
          {
            name: 'Flask',
            projects: ['AI Integration', 'Backend Development'],
            experience: 'Advanced'
          },
          {
            name: 'Node.js',
            projects: ['Server-side Development', 'API Integration'],
            experience: 'Proficient'
          }
        ]
      },
      {
        title: 'Tools & Technologies',
        description: 'Technologies I use to deploy and maintain applications',
        skills: [
          {
            name: 'Git',
            projects: ['Version Control', 'Team Collaboration'],
            experience: 'Advanced'
          },
          {
            name: 'RESTful APIs',
            projects: ['Client-Server Communication', 'Service Integration'],
            experience: 'Proficient'
          },
          {
            name: 'Docker',
            projects: ['Container Management', 'Deployment'],
            experience: 'Proficient'
          },
          {
            name: 'MongoDB',
            projects: ['Database Design', 'Data Management'],
            experience: 'Proficient'
          },
          {
            name: 'AWS',
            projects: ['Cloud Deployment', 'Scalability Management'],
            experience: 'Proficient'
          }
        ]
      }
    ];
  </script>
  
  <section class="mb-12">
    <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Technical Skills</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each skillCategories as category}
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{category.title}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">{category.description}</p>
          <div class="space-y-4">
            {#each category.skills as skill}
              <div class="border-l-4 border-blue-500 pl-4 py-2">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-white">{skill.name}</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {skill.projects.join(' • ')}
                    </p>
                  </div>
                  <span class="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                    {skill.experience}
                  </span>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </section>
  