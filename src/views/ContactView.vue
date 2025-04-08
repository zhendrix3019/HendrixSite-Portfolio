<template>
  <section class="contact view-container">
    <h2 ref="title" class="view-title contact-title">Get in Touch</h2>

    <div ref="content" class="contact-content">
      <p ref="intro" class="intro-text">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
      </p>

      <div ref="contactMethods" class="contact-methods">
        <div class="contact-card email-card">
          <div class="icon-container">
            <FontAwesomeIcon icon="fa-solid fa-envelope" class="icon" />
          </div>
          <h3>Email Me</h3>
          <p>The best way to reach me for inquiries.</p>
          <a href="mailto:zhendrix319@gmail.com" class="contact-link">
            zhendrix319@gmail.com
          </a>
           </div>

        <div class="contact-card linkedin-card">
           <div class="icon-container">
             <FontAwesomeIcon icon="fa-brands fa-linkedin" class="icon" />
           </div>
           <h3>Connect on LinkedIn</h3>
           <p>Let's connect professionally.</p>
           <a href="https://www.linkedin.com/in/zachary-hendrix-8672432ba/" target="_blank" rel="noopener noreferrer" class="contact-link">
             View Profile
           </a>
           </div>

        <div class="contact-card github-card">
           <div class="icon-container">
              <FontAwesomeIcon icon="fa-brands fa-github" class="icon" />
           </div>
           <h3>View My Code</h3>
           <p>Check out my projects on GitHub.</p>
           <a href="https://github.com/zhendrix3019?tab=repositories" target="_blank" rel="noopener noreferrer" class="contact-link">
             Go to GitHub
           </a>
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
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import brands

// Add required icons to the library
library.add(faEnvelope, faLinkedin, faGithub);

// Refs for animation targets
const title = ref(null);
const content = ref(null); // Parent container for stagger animation
const intro = ref(null);
const contactMethods = ref(null); // Ref for the container of cards

onMounted(() => {
  const tl = gsap.timeline({
    defaults: { duration: 0.7, ease: 'power3.out', opacity: 0 },
  });

  tl.from(title.value, { y: -40, delay: 0.2 })
    .from(intro.value, { y: 30, delay: 0.1 }, '-=0.5') // Animate intro text
    // Animate the contact cards staggering in
    .from(contactMethods.value.children, {
        y: 50,
        stagger: 0.15, // Stagger the animation for each card
        delay: 0.2, // Start shortly after intro text
      }, '-=0.4'); // Overlap slightly with previous animation
});

</script>

<style scoped>
.contact {
  /* view-container handles base padding */
  color: #f8fafc; /* Light text color */
  min-height: calc(100vh - 60px); /* Ensure it takes height minus header */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
  padding-bottom: 4rem; /* Add padding at the bottom */
}

.contact-title {
  /* view-title handles base styling (color, margin) */
  font-size: clamp(2rem, 5vw, 2.8rem); /* Larger, responsive title */
  margin-bottom: 2rem; /* Space below title */
  color: #ffffff; /* Explicitly white */
}

.contact-content {
  max-width: 900px;
  width: 90%;
  text-align: center; /* Center align text within the content area */
}

.intro-text {
  font-size: 1.1rem; /* Slightly larger intro text */
  color: #cbd5e1; /* Lighter grey */
  line-height: 1.6;
  margin-bottom: 3rem; /* More space before contact methods */
  max-width: 650px; /* Keep intro text line length reasonable */
  margin-left: auto;
  margin-right: auto;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Responsive grid */
  gap: 2rem; /* Space between cards */
  width: 100%; /* Take full width of the container */
}

.contact-card {
  background: rgba(30, 41, 59, 0.7); /* Semi-transparent dark blue */
  backdrop-filter: blur(5px); /* Blur effect */
  padding: 2rem 1.5rem; /* Padding inside card */
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08); /* Subtle border */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center card content */
}

.contact-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.icon-container {
  background: rgba(54, 228, 218, 0.1); /* Accent color background */
  border-radius: 50%;
  width: 60px; /* Larger icon container */
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.icon {
  font-size: 1.8rem; /* Size of the icon */
  color: #36e4da; /* Accent color */
}

.contact-card h3 {
  font-size: 1.3rem; /* Larger heading */
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.contact-card p {
  color: #cbd5e1;
  font-size: 0.95rem;
  margin-bottom: 1.5rem; /* Space before the link */
  flex-grow: 1; /* Push link towards bottom if needed */
  line-height: 1.5;
}

.contact-link {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background-color: #36e4da; /* Accent color */
  color: #0f172a; /* Dark text */
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-size: 0.9rem;
  margin-top: auto; /* Ensure link is at the bottom */
}

.contact-link:hover {
  background-color: #2ac0b6; /* Darker accent */
  transform: translateY(-2px);
}

/* Optional: Style specific cards differently if desired */
/* .email-card { } */
/* .linkedin-card { } */
/* .github-card { } */

</style>