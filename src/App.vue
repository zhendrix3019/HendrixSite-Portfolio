<template>
  <div class="app-container">
    <AnimatedBackground />

    <nav>
      <router-link :to="{ name: 'home' }" class="nav-link" active-class="active">Home</router-link> |
      <router-link :to="{ name: 'projects' }" class="nav-link" active-class="active">Projects</router-link> |
      <router-link :to="{ name: 'contact' }" class="nav-link" active-class="active">Contact</router-link>
    </nav>

    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router';
import AnimatedBackground from '@/components/AnimatedBackground.vue'; // Import the component

// logClick function (if still needed for debugging)
const logClick = (viewName) => {
  console.log(`Navigating to: ${viewName}`);
};
</script>

<style> /* Changed to non-scoped or add global styles elsewhere */
/* Add basic fade transition for page changes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Ensure body/html have no margin/padding that could interfere */
html, body {
  margin: 0;
  padding: 0;
  /* Consider setting background on body if needed, but animated-bg should cover */
  /* background-color: #0f172a; */
  color: #f8fafc; /* Default light text color */
}

.app-container {
  position: relative; /* Needed for stacking context */
  min-height: 100vh;
  /* Remove background color here if it was set, let AnimatedBackground handle it */
}

/* Keep nav styles from previous steps */
nav {
  position: fixed; /* Changed to fixed to stay on top */
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(15, 23, 42, 0.8); /* Dark blue nav, slightly transparent */
  backdrop-filter: blur(5px); /* Optional: blur effect */
  padding: 1rem 0; /* Adjust padding */
  text-align: center;
  z-index: 10; /* Ensure nav is above content but potentially below modals */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* Subtle bottom border */
}

.nav-link {
  color: #cbd5e1; /* Lighter grey for links */
  padding: 0.6em 1.2em;
  border-radius: 5px;
  font-size: 1.1em; /* Slightly smaller font */
  font-weight: 500;
  margin: 0 0.5em;
  text-decoration: none;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff; /* White on hover */
}

.active {
  /* Use a distinct accent color - replace if you have one defined */
  background-color: #36e4da; /* Example accent */
  color: #0f172a; /* Dark text on active */
  font-weight: bold;
}

/* Add padding to main content area to prevent overlap with fixed nav */
/* Apply this to the root element inside each View component */
.view-container {
  padding-top: 80px; /* Adjust based on actual nav height */
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 2rem;
  max-width: 1200px; /* Optional: constrain content width */
  margin: 0 auto; /* Center content */
}

/* Global title styling */
.view-title {
  color: white;
  font-size: 2.5rem; /* Adjust size as needed */
  margin-bottom: 1.5rem; /* Space below title */
  text-align: center; /* Center titles */
}
</style>