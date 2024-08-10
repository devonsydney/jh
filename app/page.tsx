'use client';

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

export default function About() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold">Jennifer Hazard</h1>
        <p className="text-lg">Online Therapeutic Counselling</p>
        <img src="/path/to/photo.jpg" alt="Jennifer Hazard" className="my-4 w-48 h-48 rounded-full" />
        <p className="mt-4 text-lg">
          Email Address - <a href="mailto:info@jenniferhazard.com">info@jenniferhazard.com</a>
        </p>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Who am I:</h2>
          <p className="mt-2">
            A Registered Therapeutic Counsellor and graduate of the Orca Institute in British Columbia, Canada. Currently dividing time between London, UK, and Vancouver, BC.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Therapeutic Approach:</h2>
          <p className="mt-2">
            I have a warm, client-centered approach to therapy. In my sessions, I focus on the body-mind connection, self-compassion, mindfulness, redirecting and reframing thoughts, identifying and breaking patterns, and providing goal-directed tools and resources. First and foremost, I believe the relationship between client and counselor is critical. Beginning from a strong foundation of trust is the most successful path forwards.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Counselling Philosophy:</h2>
          <p className="mt-2">
            I embrace a philosophy of dynamic human experience, with consideration and respect for the nuance of individualism. I believe that we have the power to transform our lives and outlook using our own pain and self awareness as mechanisms for change. I see suffering as an opportunity to grow and that our potential to do so is only limited by our thoughts and habits - all malleable through honesty and willingness.
          </p>
          <p className="mt-2">
            I believe that fulfillment can be found by engaging in meaningful work, healthy relationships, achieving a sense of belonging and through the practice of resilience. I see the meeting of these needs as the antidote to feeling lost, lonely, depressed and anxious. However, I do understand that while these symptoms are present, it can be difficult to navigate a path forward, which is why I am here to help.
          </p>
          <p className="mt-2">
            The world is a heavy place and our bodies are often overwhelmed with thoughts and feelings that have no place to go. I will offer you a safe space to be seen and heard, where you can freely and fully express yourself without fear of judgment. I will offer support and insight and we will work together to identify possibilities of change and find solutions and resources that work for you.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Specializing In:</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Identity Crisis</li>
            <li>Establishing Sense of Self</li>
            <li>LGBTQ2S</li>
            <li>Trauma</li>
            <li>Addiction</li>
            <li>Grief and Loss</li>
            <li>Anxiety</li>
            <li>Depression</li>
            <li>Relationship Conflict</li>
            <li>Non-Monogamy</li>
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">What to Expect:</h2>
          <p className="mt-2">
            We will meet online, via Zoom. I will send you a link prior to our session and all you will have to do is click the link and make sure your camera and microphone are working.
          </p>
          <p className="mt-2">
            Our time together will be a collaborative journey. Initially, the most important part will be establishing a trusting relationship. So at the beginning, we will spend time connecting and you can begin to share your story with me. Here, we will start to figure out what some of the best ways of working together will look like. It is important that we are a good fit for you and your healing journey.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Book a Consultation:</h2>
          <p className="mt-2">
            Book a free 20 minute consultation with me now. <a href="link-to-scheduler">Book Now</a>
          </p>
          <p className="mt-2">
            20-minute phone consultation - FREE
          </p>
          <p className="mt-2">
            50-minute online virtual session - 50 GBP
          </p>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}