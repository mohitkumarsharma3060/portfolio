'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Hero = () => {
  const stats = [
    { num: '8+', label: 'Products shipped' },
    { num: '15+', label: 'APIs engineered' },
    { num: '1.5Y', label: 'Production Experience' },
    { num: '200+', label: 'Problems Solved' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/mohitkumarsharma3060/',
      icon: FaGithub,
      color: 'hover:text-slate-300',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/mohitkumarsharmadev/',
      icon: FaLinkedin,
      color: 'hover:text-blue-400',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/mohitsharma3060',
      icon: FaTwitter,
      color: 'hover:text-cyan-400',
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] text-white pt-28 lg:pt-32">

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[120px]" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[450px] w-[450px] rounded-full bg-purple-500/20 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-10">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="space-y-8">

            {/* Badge */}
            <div>
              <span className="rounded-full border py-2 border-blue-500/20 bg-blue-500/10 px-5  text-sm font-medium text-blue-300 backdrop-blur-xl">
                Full Stack Developer
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-5">
              <h1 className="text-4xl font-bold leading-tight md:text-4xl lg:text-5xl">
                Hi, I’m
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Mohit Kumar Sharma
                </span>
              </h1>

              <h2 className="text-xl text-slate-300 md:text-2xl">
                Full Stack Developer &
                <span className="text-cyan-400">
                  {' '}Technology Enthusiast
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="max-w-2xl text-lg leading-8 text-slate-400">
              Building world-class digital experiences with
              precision, performance, and modern engineering.
              Specialized in creating visually refined, scalable,
              and user-centric web applications.
            </p>
            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({
                      behavior: 'smooth',
                    });
                }}
                className="rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 font-semibold shadow-lg shadow-blue-500/20 transition duration-300 hover:scale-105"
              >
                Get in Touch
              </button>

              <Link
                href="#projects"
                className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition duration-300 hover:bg-white/10"
              >
                View Projects
              </Link>
            </div>

            {/* Social */}
            <div className="flex items-center gap-6 pt-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  className={`text-slate-300 transition duration-300 hover:scale-110 ${social.color}`}
                >
                  <social.icon className="h-7 w-7" />
                </Link>
              ))}

              <Link
                href="mailto:mohitkumarsharma3060@gmail.com"
                className="text-slate-300 transition duration-300 hover:scale-110 hover:text-red-400"
              >
                <IoMdMail className="h-7 w-7" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5 pt-6 md:grid-cols-4">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/10"
                >
                  <h3 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent">
                    {item.num}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">

            {/* Glow */}
            <div className="absolute h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[100px]" />

            {/* Orbit Ring 1 */}
            <div className="absolute h-[420px] w-[420px] rounded-full border border-cyan-400/20 animate-spin [animation-duration:15s]" />

            {/* Orbit Ring 2 */}
            <div className="absolute h-[500px] w-[500px] rounded-full border border-dashed border-purple-400/20 animate-spin [animation-duration:22s]" />

            {/* Orbit Ring 3 */}
            <div className="absolute h-[580px] w-[580px] rounded-full border border-blue-500/10 animate-spin [animation-duration:30s]" />

            {/* Profile Card */}
            <div className="relative h-[320px] w-[320px] overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-2 backdrop-blur-xl shadow-[0_0_60px_rgba(59,130,246,0.2)] md:h-[380px] md:w-[380px] lg:h-[420px] lg:w-[420px]">

              <div className="relative h-full w-full overflow-hidden rounded-[32px]">
                <Image
                  src="/profile.jpg"
                  alt="Mohit Kumar Sharma"
                  fill
                  priority
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;