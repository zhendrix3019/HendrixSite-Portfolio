<template>
    <div class="project-card">
      <div class="project-info">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <div class="skills">
          <span v-for="skill in project.skills" :key="skill" class="skill-tag">{{
            skill
          }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    project: Object,
  });
  </script>
  
  <style scoped>
  .project-card {
    background: #1e293b; /* Darker card background */
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    transition: transform 0.3s;
  }
  
  .project-card:hover {
    transform: translateY(-5px);
  }
  
  .project-info h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: #f0f9ff; /* Light text color */
  }
  
  .project-info p {
    opacity: 0.8;
    line-height: 1.4;
    margin-bottom: 1rem;
  }
  
  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  
  .skill-tag {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    color: #cbd5e1; /* Lighter text color */
    opacity: 0.8;
    transition: background-color 0.2s, transform 0.2s;
  }
  
  .skill-tag:hover {
    background-color: #3b82f6; /* Blue hover color */
    transform: scale(1.05);
  }
  </style>