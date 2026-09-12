import React, { useState, useEffect } from 'react';
import { Code2, GraduationCap, ArrowUpRight, X, CheckCircle, BookOpen, Award } from 'lucide-react';
import { GithubIcon, LeetCodeIcon } from './SocialIcons';
import { profileData } from '../data/profile';
import { motion, AnimatePresence } from 'framer-motion';

export const Achievements: React.FC = () => {
  const [isAcademicModalOpen, setIsAcademicModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsAcademicModalOpen(false);
    };

    if (isAcademicModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isAcademicModalOpen]);

  const achievements = [
    {
      id: 'projects',
      icon: <Code2 className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
      iconBg: 'bg-sky-100 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 shadow-sky-100',
      border: 'border-2 border-sky-300 dark:border-sky-900/80 hover:border-sky-500 dark:hover:border-sky-400',
      badge: 'bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800',
      shadowHover: 'hover:shadow-[0_20px_35px_-10px_rgba(14,165,233,0.25)]',
      value: '9 Live',
      label: 'Projects Built',
      description: 'Production-ready web applications deployed live on Vercel with clean code architecture.',
      link: profileData.vercel || 'https://vercel.com/sparsh88s-projects',
      isExternal: true
    },
    {
      id: 'cgpa',
      icon: <GraduationCap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      iconBg: 'bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 shadow-emerald-100',
      border: 'border-2 border-emerald-300 dark:border-emerald-900/80 hover:border-emerald-500 dark:hover:border-emerald-400',
      badge: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
      shadowHover: 'hover:shadow-[0_20px_35px_-10px_rgba(16,185,129,0.25)]',
      value: '8.53',
      label: 'Overall CGPA',
      description: 'Academic excellence in Computer Science Engineering at Lovely Professional University (LPU).',
      link: '#',
      isModalTrigger: true
    },
    {
      id: 'leetcode',
      icon: <LeetCodeIcon className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
      iconBg: 'bg-amber-100 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 shadow-amber-100',
      border: 'border-2 border-amber-300 dark:border-amber-900/80 hover:border-amber-500 dark:hover:border-amber-400',
      badge: 'bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800',
      shadowHover: 'hover:shadow-[0_20px_35px_-10px_rgba(245,158,11,0.25)]',
      value: '100+ Solved',
      label: 'LeetCode Problems',
      description: 'Solved 100+ Data Structures & Algorithms problems across arrays, trees, graphs, and dynamic programming.',
      link: profileData.leetcode,
      isExternal: true
    },
    {
      id: 'github',
      icon: <GithubIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      iconBg: 'bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 shadow-purple-100',
      border: 'border-2 border-purple-300 dark:border-purple-900/80 hover:border-purple-500 dark:hover:border-purple-400',
      badge: 'bg-purple-50 dark:bg-purple-950 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800',
      shadowHover: 'hover:shadow-[0_20px_35px_-10px_rgba(168,85,247,0.25)]',
      value: '500+ Contributions',
      label: 'GitHub Profile',
      description: 'Active open source contributions, repositories, and full-stack web application builds.',
      link: profileData.github,
      isExternal: true
    }
  ];

  return (
    <section id="achievements" className="py-20 sm:py-28 bg-[#F3F4F6] dark:bg-[#000000] border-t border-neutral-300 dark:border-neutral-800 scroll-mt-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="space-y-3"
        >
          <div className="inline-block">
            <span className="bg-white dark:bg-[#0D0D0D] border-2 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-200 text-[11px] font-bold px-3.5 py-1 rounded-full tracking-wider uppercase shadow-xs">
              MILESTONES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 dark:text-white uppercase tracking-tight leading-[1.1]">
            KEY ACHIEVEMENTS
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl font-normal">
            Quantifiable academic milestones, project deliveries, and developer benchmarks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {achievements.map((item, idx) => {
            const isLink = item.isExternal;
            const CardWrapper = isLink ? 'a' : 'div';
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
              >
                <CardWrapper
                  {...(isLink ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' } : {})}
                  onClick={() => {
                    if (item.isModalTrigger) setIsAcademicModalOpen(true);
                  }}
                  className={`group bg-white dark:bg-[#0D0D0D] rounded-3xl p-7 ${item.border} shadow-md ${item.shadowHover} transition-all duration-300 ease-out flex flex-col justify-between text-center relative cursor-pointer h-full`}
                >
                  <div>
                    <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center mx-auto mb-5 shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>

                    <div className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
                      {item.value}
                    </div>

                    <div className="mt-2 inline-block">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${item.badge}`}>
                        {item.label}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-3.5 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-center text-[11px] font-semibold text-neutral-400 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                    <span>Explore</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {isAcademicModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="fixed inset-0" onClick={() => setIsAcademicModalOpen(false)} />

            <div className="relative w-full max-w-2xl bg-white dark:bg-[#0D0D0D] rounded-3xl shadow-2xl border-2 border-neutral-300 dark:border-neutral-800 overflow-hidden z-10 my-6 max-h-[90vh] flex flex-col">
              <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-[#F8F9FA] dark:bg-[#141414]">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shadow-xs border border-emerald-300 dark:border-emerald-800">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-950 dark:text-white">Academic Record &amp; Coursework</h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">Lovely Professional University (LPU) • B.Tech CSE</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsAcademicModalOpen(false)}
                  className="p-2 rounded-full text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-6 overflow-y-auto flex-1 text-sm font-normal">
                <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 dark:from-emerald-950/40 dark:via-teal-950/30 dark:to-emerald-950/40 p-5 rounded-2xl border border-emerald-200 dark:border-emerald-800/70 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      CURRENT ACADEMIC PERFORMANCE
                    </span>
                    <div className="text-3xl font-black text-neutral-950 dark:text-white mt-0.5 tracking-tight">
                      8.53 <span className="text-base font-semibold text-neutral-500 dark:text-neutral-400">/ 10.0 CGPA</span>
                    </div>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-xs flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    <span>First-Class Academic Distinction</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-[#F8F9FA] dark:bg-[#141414] p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-1">
                    <div className="text-neutral-400 font-bold uppercase tracking-wider text-[10px]">Degree Program</div>
                    <div className="text-neutral-900 dark:text-white font-bold text-sm">B.Tech in Computer Science</div>
                  </div>
                  <div className="bg-[#F8F9FA] dark:bg-[#141414] p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-1">
                    <div className="text-neutral-400 font-bold uppercase tracking-wider text-[10px]">Academic Timeline</div>
                    <div className="text-neutral-900 dark:text-white font-bold text-sm">Aug 2024 – Present (Ongoing)</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Core Engineering Coursework
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { title: 'Data Structures & Algorithms', detail: 'Complexity, Arrays, Trees, Graphs, DP' },
                      { title: 'Database Systems (DBMS)', detail: 'PostgreSQL, MySQL, Relational Schemas' },
                      { title: 'Object-Oriented Programming', detail: 'C++, Java, Modular Code Architecture' },
                      { title: 'Operating Systems & Networks', detail: 'Concurrency, Memory, TCP/IP, Sockets' },
                      { title: 'Full-Stack Web Development', detail: 'React.js, Node.js, Express.js, REST APIs' },
                      { title: 'Software Engineering', detail: 'Agile Workflows, Git & GitHub Governance' }
                    ].map((subject, sIdx) => (
                      <div key={sIdx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-[#F8F9FA] dark:bg-[#141414] border border-neutral-200 dark:border-neutral-800">
                        <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold text-neutral-900 dark:text-white">{subject.title}</div>
                          <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">{subject.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-neutral-200 dark:border-neutral-800 bg-[#F8F9FA] dark:bg-[#141414] flex items-center justify-between">
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">Verified Academic Benchmark</span>
                <button
                  onClick={() => setIsAcademicModalOpen(false)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-black hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 rounded-full transition-colors shadow-xs cursor-pointer"
                >
                  Close Record
                </button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
