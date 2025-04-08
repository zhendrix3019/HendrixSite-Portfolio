<template>
  <section class="hero view-container"> <div class="hero-content">
      <div class="profile-image-container">
        <img src="@/assets/meee.jpg" alt="Zachary Hendrix" class="profile-image">
      </div>
      <h1 ref="name" class="name">Zachary Hendrix</h1>
      <h2 ref="title" class="title">Full Stack & Mobile Developer</h2>
      <div class="highlights">
        <div v-for="item in highlights" :key="item.title" class="highlight">
          <div class="icon-container">
            <FontAwesomeIcon :icon="item.icon" class="icon" />
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.details }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCode,
  faBriefcase,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';

library.add(faCode, faBriefcase, faGraduationCap);

const name = ref(null);
const title = ref(null);
// Removed highlightsRef as it's not needed for the animation target
// const highlightsRef = ref(null);

const highlights = ref([
 {
    icon: 'fa-solid fa-code',
    title: 'Skills',
    // Using the expanded list from previous step - adjust as needed
    details: 'Vue.js • C# • .NET • SQL Server • JavaScript (ES6+) • HTML5 • CSS3 • Git • REST APIs • Java • Python (Basic)',
  },
  {
    icon: 'fa-solid fa-briefcase',
    title: 'Experience',
    details: "Turner Financial (Full Stack Dev) • Bartolotta's (Bartender)", // Kept original experience detail
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    title: 'Education',
    details: 'WCTC: Web/Software Dev • Mobile App Dev',
  },
]);

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // Animate profile image container along with name/title if desired
  // Example: Add a target for the image container if you want it animated
  // tl.from('.profile-image-container', { scale: 0.5, opacity: 0, duration: 0.8, delay: 0.1 })

  tl.from(name.value, { y: -30, opacity: 0, duration: 1, delay: 0.2 })
    .from(title.value, { y: 30, opacity: 0, duration: 0.8, delay: 0.1 }, '-=0.8')
    // Corrected animation to target the .highlight class directly
    .from(".highlight", {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6,
      delay: 0.5, // Delay after name/title animation
      ease: 'elastic.out(1, 0.5)',
    }, '-=0.6'); // Offset start relative to previous animation
});
</script>

<style scoped>
/* Added view-container class to the root element for padding below fixed nav */
.hero {
  min-height: 100vh; /* Changed to 100vh to take full viewport height */
  display: flex; /* Use flex for easier centering */
  flex-direction: column; /* Stack content vertically */
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  text-align: center;
  /* Background is handled by AnimatedBackground component */
  /* background: #0f172a; */
  color: #f8fafc; /* Ensure light text color */
  overflow: hidden; /* Prevent content overflow issues */
}

.hero-content {
  max-width: 900px; /* Slightly wider max-width */
  width: 90%; /* Ensure it doesn't touch edges on smaller screens */
  padding: 2rem 0; /* Add some vertical padding within the content */
}

/* Profile Image Styles */
.profile-image-container {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1.5rem auto; /* Center the container horizontally */
  border: 3px solid rgba(255, 255, 255, 0.2); /* Optional subtle border */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Optional shadow */
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block; /* Remove potential extra space below image */
}


.name {
  font-size: clamp(2rem, 5vw, 3rem); /* Responsive font size */
  margin-bottom: 0.5rem;
  color: #ffffff; /* Ensure pure white */
  font-weight: 600;
}

.title {
  font-size: clamp(1.1rem, 3vw, 1.3rem); /* Responsive font size */
  color: #94a3b8;
  opacity: 0.9;
  margin-bottom: 3rem; /* Increased space before highlights */
  font-weight: 400;
}

.highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); /* Adjusted minmax */
  gap: 1.5rem; /* Adjusted gap */
}

.highlight {
  background: rgba(30, 41, 59, 0.7); /* Slightly transparent background */
  backdrop-filter: blur(4px); /* Blur effect */
  padding: 1.75rem; /* Increased padding */
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05); /* Subtle border */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.highlight:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
}

.icon-container {
  background: rgba(54, 228, 218, 0.1); /* Use accent color */
  border-radius: 50%;
  width: 50px; /* Adjusted size */
  height: 50px;
  display: inline-flex; /* Use inline-flex */
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.icon {
  font-size: 1.8rem; /* Adjusted size */
  color: #36e4da; /* Accent color */
}

h3 {
  font-size: 1.25rem; /* Slightly larger */
  margin-bottom: 0.6rem;
  color: #ffffff; /* White */
  font-weight: 500;
}

p {
  opacity: 0.85;
  color: #cbd5e1; /* Lighter grey */
  font-size: 0.95rem;
  line-height: 1.5;
}
</style>