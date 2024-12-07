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
                <div className="w-full px-4 md:w-2/3 lg:w-1/3">
                  <Image
                    src="/images/jennifer_logo_wordmark_white_1563_923.png"
                    alt="Jennifer Hazard"
                    width={1563}
                    height={923}
                    className="object-contain object-center w-full"
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
                  I am a Registered Therapeutic Counsellor and graduate of the Orca Institute in British Columbia, Canada. Currently dividing my time between London, UK and Vancouver, BC. Before finding my way back to counselling, I obtained a degree in Communications and have worked for over a decade as a professional caregiver.
                </p>
                <p className="mb-4">
                  My presence is genuine and warm. Above all, I am dedicated to creating a safe and supportive environment for my clients. My intention is to empower through compassionate exploration, individualized treatment plans, and growth-oriented interventions. I embrace a collaborative approach, promoting self-efficacy and autonomy.
                </p>
              </div>
            </section>
            <section className="mt-4 w-full md:w-2/3">
              <h2 className="text-2xl font-bold uppercase mb-4 text-gray-200">Counselling Philosophy</h2>
              <p className="mb-4">
                I embrace a philosophy of dynamic human experience, with deep respect for nuance and individualism. I believe that we each have the power to transform our lives and outlook using our own pain and self-awareness as mechanisms for change.
              </p>
            </section>
            <section id="about" className="mt-4 w-full md:w-2/3">
              <h2 className="text-2xl font-bold uppercase mb-4 text-gray-200">Therapeutic Approach</h2>
              <p className="mb-4">
                The world can be a heavy place and we are often overwhelmed with thoughts and feelings that have no place to go. I offer you a safe space to be seen and heard, where you can freely express yourself without fear of judgment.
              </p>
              <p className="mb-4">
                I use a client-centred therapeutic technique that encourages curiosity and exploration, processing of emotions, pattern identification, self-compassion and mindfulness. Together, we will uncover personalized tools and resources to assist you in reaching your goals.
              </p>
              <p className="mb-4">
                First and foremost, a strong foundation of trust between client and counsellor allows the most successful path forwards. <b>So let's start there...</b>
              </p>
            </section>
            <section className="w-full md:w-2/3 mb-4">
              <h2 className="text-xl font-bold mb-4 text-gray-200">Specialising In:</h2>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-gray-400">
                <li className="flex items-center before:content-['•'] before:mr-2">Relationships</li>
                <li className="flex items-center before:content-['•'] before:mr-2">Non-Monogamy</li>
                <li className="flex items-center before:content-['•'] before:mr-2">Self Esteem</li>
                <li className="flex items-center before:content-['•'] before:mr-2">Identity</li>
                <li className="flex items-center before:content-['•'] before:mr-2">LGBTQ+</li>
                <li className="flex items-center before:content-['•'] before:mr-2">Grief & Loss</li>
                <li className="flex items-center before:content-['•'] before:mr-2">Anxiety</li>
                <li className="flex items-center before:content-['•'] before:mr-2">Depression</li>
                <li className="flex items-center before:content-['•'] before:mr-2">Stress Management</li>
                <li className="flex items-center before:content-['•'] before:mr-2">Crisis</li>
              </ul>
            </section>
            <section className="mt-4 w-full md:w-2/3">
              <h2 className="text-2xl font-bold uppercase mb-4 text-gray-200">What to Expect</h2>
              <p className="mb-4">
                We will meet online, via Zoom. I will email you a link for our sessions and all you have to do is click the link and make sure your camera and microphone are working.
              </p>
              <p className="mb-4">
                I offer a free 15-minute phone consultation to get to know each other and decide if we are a good fit before booking a full session.
              </p>
            </section>
            <section className="mt-4 w-full md:w-2/3">
              <div className="w-full md:w-2/3">
                <div className="aspect-w-3 aspect-h-4 relative">
                  <img
                    src="/images/jennifer_contact.png"
                    alt="Jennifer Hazard"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <p className="mt-4">
                <i>The first step in a new direction is often the hardest, but one that can change everything.</i>
              </p>
            </section>
            <section id="contact" className="mt-8 w-full md:w-2/3">
              <h2 className="text-2xl font-bold uppercase mb-4 text-gray-200">Contact Me</h2>
              <p className="mb-4">
                My services are online, confidential, and secure.
              </p>
              <ul className="mb-4 list-disc list-inside space-y-1">
                <li><b>Free 15-minute phone consults</b> available by appointment to see if we're a good fit.</li>
                <li><b>50-minute Zoom video sessions</b> for <b>£50</b> (UK clients) or <b>$90 CAD</b> (Canadian clients).</li>
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