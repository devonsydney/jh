import React from 'react';
import Footer from './components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-900">
        <div className="bg-gray-800 text-gray-200 min-h-screen shadow-lg rounded-lg overflow-hidden">
          <header className="py-6 w-full">
            <div className="container mx-auto">
              <div className="flex justify-center">
                <div className="w-1/3">
                  <Image
                    src="/images/jennifer_logo_wordmark_white_1563_923.png"
                    alt="Jennifer Hazard"
                    width={1563}
                    height={923}
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </header>
          <main className="flex flex-col items-center justify-center">
            <div className="w-full md:w-2/3 text-base leading-relaxed">
              <p className="mb-8">
                <a
                  href="mailto:info@jenniferhazard.com" className="block w-full bg-gray-300 text-gray-700 py-4 px-4 rounded text-center hover:bg-gray-400 transition duration-300 font-bold">
                    Accepting new clients at<br/>info@jenniferhazard.com
                </a>
              </p>
            </div>
            <section id="about" className="mt-4 w-full md:w-2/3">
              <h2 className="text-2xl font-bold uppercase mb-4 text-gray-200">About Me</h2>
              <div>
                <p className="mb-4">
                  I am a Registered Therapeutic Counsellor and graduate of the Orca Institute in British Columbia, Canada. Currently dividing my time between London, UK and Vancouver, BC.
                </p>
                <p className="mb-4">
                  With a foundation in diverse therapeutic techniques, I am dedicated to establishing safe, supportive environments for my clients. My intention is to empower others through compassionate communication, tailored treatment planning, and growth-oriented interventions. I embrace a collaborative approach, fostering individual autonomy and promoting self-efficacy.
                </p>
              </div>
            </section>
            <section id="about" className="mt-4 w-full md:w-2/3">
              <h2 className="text-2xl font-bold uppercase mb-4 text-gray-200">Therapeutic Approach</h2>
              <p className="mb-4">
                I have a warm, client-centered therapeutic technique. In my sessions, I focus on the body-mind connection, self-compassion, mindfulness, pattern identification, and providing you with goal-directed tools and resources. First and foremost, I believe the relationship between client and counselor is critical. Beginning from a strong foundation of trust sets the most successful path forwards.
              </p>
            </section>
            <section className="mt-4 w-full md:w-2/3">
              <h2 className="text-2xl font-bold uppercase mb-4 text-gray-200">Counselling Philosophy</h2>
              <p className="mb-4">
                I embrace a philosophy of dynamic human experience, with respect for the nuance of individualism. I believe that we have the power to transform our lives and outlook using our own pain and self awareness as mechanisms for change. I see suffering as an opportunity to grow and believe that our potential to do so is only limited by our thoughts and habits - all of which are malleable.
              </p>
              <p className="mb-4">
                Fulfillment can be found by engaging in healthy relationships, meaningful work, achieving a sense of belonging and through a practice of resilience. I see the meeting of these as an antidote to feeling lost, lonely, depressed and anxious. However, I do understand that while these symptoms are present, it can be difficult to navigate a path forward, which is why I am here to help.
              </p>
              <p className="mb-4">
                The world can be a heavy place and our bodies are often overwhelmed with thoughts and feelings that have no place to go. I offer you a safe space to be seen and heard, where you can freely express yourself without fear of judgment. We will work together to identify possibilities of change and find the tools that work best for you.
              </p>
            </section>
            <section className="w-full md:w-2/3 mb-4">
              <h2 className="text-xl font-bold mb-4 text-gray-200">Specialising In:</h2>
              <ul className="list-disc list-inside text-gray-400">
              <li>Identity</li>
              <li>Stress Management</li>
              <li>Self Esteem</li>
              <li>LGBTQ+</li>
              <li>Trauma</li>
              <li>Addiction</li>
              <li>Grief & Loss</li>
              <li>Anxiety</li>
              <li>Depression</li>
              <li>Relationship Issues</li>
              <li>Non-Monogamy</li>
              </ul>
            </section>
            <section className="mt-4 w-full md:w-2/3">
              <h2 className="text-2xl font-bold uppercase mb-4 text-gray-200">What to Expect</h2>
              <p className="mb-4">
                We will meet online, via Zoom. I will send you a link prior to our session and all you have to do is click the link and make sure your camera and microphone are working.
              </p>
              <p className="mb-4">
                Our time together will be a collaborative journey. Initially, the most important part will be establishing a trusting relationship. We must be a good fit for you and your healing journey.
              </p>
            </section>
            <section className="mt-4 w-full md:w-2/3">
              <div className="w-full md:w-2/3">
                <div className="aspect-w-3 aspect-h-4 relative">
                  <img
                    src="/images/jennifer_contact.jpg"
                    alt="Jennifer Hazard"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <p className="mt-4">
                <i>The first step in a new direction is often the hardest, but the one that can change everything.</i>
              </p>
            </section>
            <section id="contact" className="mt-8 w-full md:w-2/3">
              <h2 className="text-2xl font-bold uppercase mb-4 text-gray-200">Contact Me</h2>
              <p className="mb-4">
                My services are online, confidential, and secure.
              </p>
              <ul className="mb-4 list-disc list-inside space-y-1">
                <li><b>Free 15-minute phone consults</b> available to see if we&apos;re a good fit.</li>
                <li><b>50-minute video sessions</b> available for <b>£50</b> (UK clients) or <b>$90 CAD</b> (Canadian clients).</li>
              </ul>
            </section>
            <section id="contact" className="mt-8 w-full md:w-2/3">
              <p className="mb-4">
                <a
                  href="mailto:info@jenniferhazard.com" className="block w-full bg-gray-300 text-gray-700 py-4 px-4 rounded text-center hover:bg-gray-400 transition duration-300 font-bold uppercase">
                    Email Now To Book
                </a>
              </p>
            </section>
          </main>
        </div>
      </main>
      <Footer />
    </>
  );
}