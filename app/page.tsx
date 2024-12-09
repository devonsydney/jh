'use client';
import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Image from 'next/image';
import { EnvelopeIcon } from '@heroicons/react/24/outline'

export default function About() {
  const [isUK, setIsUK] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const getRegionalText = (text: string) => {
    if (!isLoading && isUK) {
      return text.replace(/ized/g, 'ised');
    }
    return text;
  };

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        
        const europeanCountries = [
          'GB', 'AD', 'AL', 'AT', 'BA', 'BE', 'BG', 'BY', 'CH', 'CY', 'CZ',
          'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GR', 'HR', 'HU', 'IE', 'IS',
          'IT', 'LI', 'LT', 'LU', 'LV', 'MC', 'MD', 'ME', 'MK', 'MT', 'NL',
          'NO', 'PL', 'PT', 'RO', 'RS', 'SE', 'SI', 'SK', 'SM', 'UA', 'VA'
        ];
        
        setIsUK(europeanCountries.includes(data.country));
        setIsLoading(false);
      })
      .catch(err => {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timezone.startsWith('Europe/')) {
          setIsUK(true);
        } else {
          setIsUK(false);
        }
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <main className="flex flex-col items-center justify-center p-8 bg-gray-900 md:bg-gray-800">
        <div className="bg-gray-900 text-gray-200 rounded-lg overflow-hidden md:shadow-lg">
          <header className="pt-0 pb-6 md:pt-6 md:pb-6 w-full">
            <div className="container mx-auto">
              <div className="flex justify-center">
                <div className="w-full px-4 md:w-2/3 lg:w-1/3">
                  <Image
                    src="/images/jennifer_logo_wordmark_white_1154_923.png"
                    alt="Jennifer Hazard"
                    width={1154}
                    height={923}
                    className="object-contain object-center w-full"
                  />
                </div>
              </div>
            </div>
          </header>
          <main className="flex flex-col items-center justify-center">
            <div className="w-full md:w-2/3 text-base leading-relaxed">
              <p className="mb-4">
                <a
                  href="mailto:info@jenniferhazard.com" 
                  className="block w-4/5 mx-auto bg-gray-300 text-gray-700 py-1.5 px-3 rounded text-center 
                    hover:bg-gray-400 hover:-translate-y-0.5 hover:shadow-lg
                    transition-all duration-300 
                    font-bold shadow-md">
                    <EnvelopeIcon className="w-5 h-5 inline-block mr-2 -mt-1 text-gray-700"/>
                    Accepting new clients at<br/>info@jenniferhazard.com
                </a>
              </p>
            </div>
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
                I use a client-centred therapeutic technique that encourages curiosity and exploration, processing of emotions, pattern identification, self-compassion and mindfulness. Together, we will uncover {getRegionalText("personalized")} tools and resources to assist you in reaching your goals.
              </p>
              <p className="mb-4">
                First and foremost, a strong foundation of trust between client and counsellor allows the most successful path forwards. <b>So let&apos;s start there.</b>
              </p>
            </section>
            <section className="w-full md:w-2/3 mb-4">
              <h2 className="text-xl font-bold mb-4 text-gray-200">Specialising In:</h2>
              <div className="flex gap-x-4">
                <ul className="w-1/2 space-y-0.5 text-gray-400">
                  <li className="flex items-center before:content-['•'] before:mr-2">Relationships</li>
                  <li className="flex items-center before:content-['•'] before:mr-2">Non-Monogamy</li>
                  <li className="flex items-center before:content-['•'] before:mr-2">Self Esteem</li>
                  <li className="flex items-center before:content-['•'] before:mr-2">Identity</li>
                  <li className="flex items-center before:content-['•'] before:mr-2">LGBTQ+</li>
                </ul>
                <ul className="w-1/2 space-y-0.5 text-gray-400">                
                  <li className="flex items-center before:content-['•'] before:mr-2">Grief & Loss</li>
                  <li className="flex items-center before:content-['•'] before:mr-2">Anxiety</li>
                  <li className="flex items-center before:content-['•'] before:mr-2">Depression</li>
                  <li className="flex items-center before:content-['•'] before:mr-2">Stress Management</li>
                  <li className="flex items-center before:content-['•'] before:mr-2">Crisis</li>
                </ul>
              </div>
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
            <section id="about" className="mt-4 w-full md:w-2/3">
              <h2 className="text-2xl font-bold uppercase mb-4 text-gray-200">About Me</h2>
              <div>
                <p className="mb-4">
                I am a {isLoading ? "Registered Therapeutic Counsellor" : (isUK ? "Counsellor based in London, UK" : "Registered Therapeutic Counsellor")} and graduate of the Orca Institute in British Columbia, Canada. Before finding my way back to counselling, I obtained a degree in Communications and have worked for over a decade as a professional caregiver.
                </p>
                <p className="mb-4">
                  My presence is genuine and warm. Above all, I am dedicated to creating a safe and supportive environment for my clients. My intention is to empower through compassionate exploration, {getRegionalText("individualized")} treatment plans, and growth-oriented interventions. I embrace a collaborative approach, promoting self-efficacy and autonomy.
                </p>
              </div>
            </section>
            <section className="mt-4 w-full md:w-2/3">
              <div className="w-full md:w-2/3">
                <div className="aspect-w-3 aspect-h-4 relative">
                  <Image
                    src="/images/jennifer_contact.png"
                    alt="Jennifer Hazard"
                    width={2048}
                    height={1363}
                    className="object-cover rounded-lg shadow-lg"
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
                <li><b>Free 15-minute phone consults</b> available by appointment to see if we&apos;re a good fit.</li>
                <li>
                  <b>50-minute Zoom video sessions</b> for{' '}
                  {isLoading ? (
                    <span className="inline-block w-16">...</span>
                  ) : (
                    <><b>{isUK ? '£50' : '$90 CAD'}</b>.</>
                  )}
                </li>
              </ul>
            </section>
            <section id="contact" className="mt-4 w-full md:w-2/3">
              <p className="mb-0 md:mb-8">
                <a
                  href="mailto:info@jenniferhazard.com" 
                  className="block w-4/5 mx-auto bg-gray-300 text-gray-700 py-2 px-3 rounded text-center 
                    hover:bg-gray-400 hover:-translate-y-0.5 hover:shadow-lg
                    transition-all duration-300 
                    font-bold shadow-md">
                    <EnvelopeIcon className="w-5 h-5 inline-block mr-2 -mt-1 text-gray-700"/>
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