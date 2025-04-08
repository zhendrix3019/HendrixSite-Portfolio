<template>
  <div class="animated-bg">
    <div v-for="i in particleCount" :key="i" class="particle" :style="particleStyle(i)"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
// Note: 'random' is part of the gsap core, no need for separate import unless using an older version explicitly
// import { random } from 'gsap/gsap-core';

const particleCount = 70; // Increased particle count slightly for better coverage

// Use GSAP's utility function for randomness
const random = gsap.utils.random;

const particleStyle = (i) => {
  const size = random(1, 2.5); // Slightly larger particles for visibility
  const startX = random(0, 100);
  const startY = random(0, 100);
  const opacity = random(0.05, 0.15); // Keep subtle opacity
  const delay = random(0, 15); // Slightly longer delay window

  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${startX}vw`,
    top: `${startY}vh`,
    opacity: opacity,
    // animationDelay: `${delay}s`, // GSAP handles delays better via stagger
    // Remove CSS animation for 'float' as GSAP handles movement
  };
};

onMounted(() => {
    // Ensure particles exist before animating
    // Use nextTick if needed, but usually direct selection works with onMounted
    gsap.to('.particle', {
        duration: () => random(25, 50), // Slower animation duration
        x: () => `+=${random(-8, 8)}vw`, // Adjusted movement range
        y: () => `+=${random(-4, 4)}vh`, // Adjusted movement range
        opacity: () => random(0.05, 0.2), // Animate opacity slightly
        repeat: -1,
        yoyo: true,
        ease: 'none', // Use 'none' for linear movement
        stagger: { // Use object form for more control
          each: 0.1, // Time between each particle start
          from: 'random' // Start staggering randomly
        }
    });
});
</script>

<style scoped>
.animated-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Ensure it's behind other content */
  overflow: hidden;
  background: #0f172a; /* Dark blue background */
  isolation: isolate; /* Create new stacking context */
}

.particle {
  position: absolute;
  background: rgba(200, 220, 255, 0.3); /* Lighter, slightly blue particle color */
  border-radius: 50%;
  /* Remove CSS animation - GSAP handles movement and timing */
  /* animation: float 20s infinite linear; */
}

/* Remove the @keyframes float rule */
</style>