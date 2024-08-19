import React from 'react';
import Footer from './components/Footer';

export default function About() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-900">
        <div className="bg-gray-800 text-gray-200 min-h-screen shadow-lg rounded-lg overflow-hidden">
          <header className="bg-gray-700 py-6">
            <h1 className="text-4xl font-bold text-center text-white uppercase">Jennifer Hazard</h1>
            <p className="text-lg text-center text-gray-300 uppercase">Online Therapeutic Counselling</p>
            <p className="text-center">
              <a href="mailto:info@jenniferhazard.com" className="text-gray-300 hover:text-white transition duration-300">
                info@jenniferhazard.com
              </a>
            </p>
          </header>
          <div className="flex justify-center">
            <div className="w-full md:w-3/4">
              <div className="relative">
                <img
                  src="/images/jennifer_hero.jpg"
                  alt="Jennifer Hazard"
                  className="w-full h-full object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
          <main className="flex flex-col items-center justify-center p-8">
            <div className="w-full md:w-2/3 text-base leading-relaxed">
              <p className="mb-8">
                <a
                  href="mailto:info@jenniferhazard.com" className="block w-full bg-gray-300 text-gray-700 py-4 px-4 rounded text-center hover:bg-gray-400 transition duration-300 font-bold uppercase">
                    Now Accepting Clients - Email Now
                </a>
              </p>
            </div>
            <div className="w-full md:w-2/3 text-base leading-relaxed">
              <h2 className="text-2xl font-bold uppercase mb-4 text-gray-200">Meet Jennifer</h2>
              <div>
                <p className="mb-4">
                  Jennifer is a Registered Therapeutic Counsellor and graduate of the Orca Institute in British Columbia, Canada. Currently dividing time between London, UK and Vancouver, BC.
                </p>
                <p className="mb-4">
                  With a foundation in diverse therapeutic techniques she is dedicated to establishing safe, supportive environments for clients. Her intention is to empower others through compassionate communication, tailored treatment planning, and growth-oriented interventions. She embraces collaborative, client-focused approach, fostering individual autonomy and self-efficacy.
                </p>
              </div>
            </div>
            <section id="about" className="mt-4 w-full md:w-2/3">
              <h2 className="text-2xl font-bold uppercase mb-4 text-gray-200">Therapeutic Approach</h2>
              <p className="mb-4">
                I have a warm, client-centered approach to therapy. In my sessions, I focus on the body-mind connection, self-compassion, mindfulness, redirecting and reframing thoughts, identifying and breaking patterns, and providing goal-directed tools and resources. First and foremost, I believe the relationship between client and counselor is critical. Beginning from a strong foundation of trust is the most successful path forwards.
              </p>
            </section>
            <section className="mt-4 w-full md:w-2/3">
              <h2 className="text-2xl font-bold uppercase mb-4 text-gray-200">Counselling Philosophy</h2>
              <p className="mb-4">
                I embrace a philosophy of dynamic human experience, with consideration and respect for the nuance of individualism. I believe that we have the power to transform our lives and outlook using our own pain and self awareness as mechanisms for change. I see suffering as an opportunity to grow and that our potential to do so is only limited by our thoughts and habits - all malleable through honesty and willingness.
              </p>
              <p className="mb-4">
                I believe that fulfillment can be found by engaging in meaningful work, healthy relationships, achieving a sense of belonging and through the practice of resilience. I see the meeting of these needs as the antidote to feeling lost, lonely, depressed and anxious. However, I do understand that while these symptoms are present, it can be difficult to navigate a path forward, which is why I am here to help.
              </p>
              <p className="mb-4">
                The world is a heavy place and our bodies are often overwhelmed with thoughts and feelings that have no place to go. I will offer you a safe space to be seen and heard, where you can freely and fully express yourself without fear of judgment. I will offer support and insight and we will work together to identify possibilities of change and find solutions and resources that work for you.
              </p>
            </section>
            <section className="w-full md:w-2/3">
              <h2 className="text-xl font-bold mb-4 text-gray-200">Specializing In:</h2>
              <ul className="list-disc list-inside text-gray-400">
              <li>Identity</li>
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
                We will meet online, via Zoom. I will send you a link prior to our session and all you will have to do is click the link and make sure your camera and microphone are working.
              </p>
              <p className="mb-4">
                Our time together will be a collaborative journey. Initially, the most important part will be establishing a trusting relationship. So at the beginning, we will spend time connecting and you can begin to share your story with me. Here, we will start to figure out what some of the best ways of working together will look like. It is important that we are a good fit for you and your healing journey.
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
            </section>
            <section id="contact" className="mt-8 w-full md:w-2/3">
              <h2 className="text-2xl font-bold uppercase mb-4 text-gray-200">Contact Me</h2>
              <p className="mb-4">
                <i>The first step in a new direction is often the hardest, but the one that can change everything.</i>
              </p>
              <p className="mb-4">
                My services are online, fully private, confidential & secure.
              </p>
              <p className="mb-4">
                <li>Book <b>a free 20-minute phone consult</b> to see if we're a good fit.</li>
                <li>Book <b>a 50-minute video session</b> for <b>£50</b> (UK clients) or <b>$90 CAD</b> (Canadian clients).</li>
              </p>
            </section>
            <section id="contact" className="mt-8 w-full md:w-2/3">
              <p className="mb-4">
                <a
                  href="mailto:info@jenniferhazard.com" className="block w-full bg-gray-300 text-gray-700 py-4 px-4 rounded text-center hover:bg-gray-400 transition duration-300 font-bold uppercase">
                    Please Email Me To Schedule
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