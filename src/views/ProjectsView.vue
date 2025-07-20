<template>
  <section class="projects view-container">
    <h2 class="view-title projects-title">My Projects</h2>
    
    <!-- New Featured Project Section -->
    <div class="featured-project">
      <h3 class="featured-title">Featured Project: Schwab API (2025)</h3>
      <div class="featured-card">
        <div class="image-placeholder">
          <img v-if="featuredProject.image" :src="featuredProject.image" :alt="`${featuredProject.title} Screenshot`">
          <span v-else>Image Coming Soon</span>
        </div>
        <div class="card-content">
          <h4>{{ featuredProject.title }}</h4>
          <p>{{ featuredProject.description }}</p>
          <div class="skills">
            <span v-for="skill in featuredProject.skills" :key="skill" class="skill-tag">{{ skill }}</span>
          </div>
          <div class="project-links" v-if="featuredProject.liveUrl || featuredProject.repoUrl">
            <a v-if="featuredProject.liveUrl" :href="featuredProject.liveUrl" target="_blank" rel="noopener noreferrer" class="link-button">Live Demo</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Existing Projects Grid -->
    <h3 class="grid-title">Other Projects</h3>
    <div class="projects-grid">
      <div v-for="project in projects" :key="project.title" class="project-card">
        <div class="image-placeholder">
          <img v-if="project.image" :src="project.image" :alt="`${project.title} Screenshot`">
          <span v-else>Image Coming Soon</span>
        </div>
        <div class="card-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="skills">
            <span v-for="skill in project.skills" :key="skill" class="skill-tag">{{ skill }}</span>
          </div>
          <div class="project-links" v-if="project.liveUrl || project.repoUrl">
            <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="link-button">Live Demo</a>
            <a v-if="project.repoUrl" :href="project.repoUrl" target="_blank" rel="noopener noreferrer" class="link-button repo">View Code</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const getImageUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};

// Featured Project (Schwab API) - Integrated new PNG here
const featuredProject = ref({
  title: 'Schwab API',
  description: 'A stock market application integrating the Charles Schwab API for real-time data and automated trading features.', // Placeholder - replace with your actual description
  skills: ['Vue3', 'Python Flask', 'Charles Schwab Stock Market API'],
  image: getImageUrl('SchwabAPI.png'), // Updated to your new PNG
  liveUrl: null, // Add if available
  repoUrl: 'https://github.com/zhendrix3019?tab=repositories', // Update to specific repo if available
});

// Other Projects (existing, with years added to titles/descriptions if relevant)
const projects = ref([
  {
    title: 'Vehicle Vault',
    description: 'Vehicle inventory management system with Vue 3 and .NET backend.',
    skills: ['Vue.js', 'C#', '.NET', 'SQL Server'],
    image: getImageUrl('VV.png'),
    liveUrl: null,
    repoUrl: 'https://github.com/zhendrix3019?tab=repositories',
  },
  {
    title: 'Turner Financial (2024)',
    description: 'Financial services website with WordPress customization.',
    skills: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
    image: getImageUrl('tf.png'),
    liveUrl: 'https://turnerfinancial.com/',
    repoUrl: null,
  },
  {
    title: 'ItsTrippy',
    description: 'Travel image-sharing platform using Quasar (Vue) and Firebase.',
    skills: ['Vue.js', 'Quasar', 'Firebase', 'JavaScript'],
    image: getImageUrl('MyTrips.png'),
    liveUrl: null,
    repoUrl: 'https://github.com/zhendrix3019?tab=repositories',
  },
  // Add Bartolottas if it has a project aspect, e.g.:
  // {
  //   title: 'Bartolottas (2023)',
  //   description: 'Description of any related project or work.',
  //   skills: ['Relevant skills'],
  //   image: getImageUrl('bartolottas.png'),
  //   liveUrl: null,
  //   repoUrl: null,
  // },
]);
</script>

<style scoped>
/* Existing styles remain, plus new ones for featured section */

.featured-project {
  margin-bottom: 3rem;
  text-align: center;
}

.featured-title {
  font-size: 1.8rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
}

.featured-card {
  background: rgba(30, 41, 59, 0.9); /* Slightly darker for emphasis */
  max-width: 800px;
  margin: 0 auto;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.featured-card .image-placeholder {
  height: 250px; /* Larger image area */
}

.featured-card h4 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

.grid-title {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-align: center;
}


.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.project-card {
  background: #1e293b;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
}

.image-placeholder {
  height: 180px;
  background-color: #334155; /* Visible if image fails */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  font-size: 0.9rem;
  overflow: hidden; /* Keep this */
}

.image-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Changed to cover to fill without side space */
    display: block;
}

/* Text shown if image doesn't load or isn't specified */
.image-placeholder span {
    padding: 1rem;
    text-align: center;
}


.card-content {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-content h3 {
  font-size: 1.4rem;
  margin-bottom: 0.75em;
  color: #ffffff;
}

.card-content p {
  color: #cbd5e1;
  opacity: 0.9;
  margin-bottom: 1.25em;
  flex-grow: 1;
  line-height: 1.5;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6em;
  margin-bottom: 1.25rem;
}

.skill-tag {
  background-color: rgba(54, 228, 218, 0.15);
  color: #36e4da;
  padding: 0.3em 0.8em;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  opacity: 0.9;
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: auto;
}

.link-button {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  font-size: 0.9rem;
  border: 1px solid transparent;
  text-align: center;
}

.link-button:hover {
    transform: translateY(-2px);
}

.link-button.repo {
    background-color: transparent;
    border: 1px solid #475569;
    color: #94a3b8;
}
.link-button.repo:hover {
    background-color: rgba(71, 85, 105, 0.3);
    border-color: #526886;
    color: #cbd5e1;
}

.link-button { /* Default style (Live Demo) */
    background-color: #36e4da;
    color: #0f172a;
    border-color: #36e4da;
}
.link-button:hover {
    background-color: #2ac0b6;
    border-color: #2ac0b6;
}

/* For the featured project (larger image area) */
.featured-card .image-placeholder {
  height: 250px; /* Keep larger height */
}

.featured-card .image-placeholder img {
  object-fit: cover; /* Apply same change here */
}
</style>