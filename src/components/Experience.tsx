import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, CheckCircle, ExternalLink, Award, Globe, FileText, Download, X, BookCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { experienceData, trainingData } from '../data/experience';
import type { TrainingItem } from '../types';

export const Experience: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<TrainingItem | null>(null);

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#F3F4F6] dark:bg-[#000000] border-y border-neutral-300 dark:border-neutral-800 scroll-mt-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="space-y-3"
        >
          <div className="inline-block">
            <span className="bg-white dark:bg-[#0D0D0D] border-2 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-200 text-[11px] font-bold px-3.5 py-1 rounded-full tracking-wider uppercase shadow-xs">
              CAREER &amp; TRAINING
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 dark:text-white uppercase tracking-tight leading-[1.1]">
            EXPERIENCE &amp; TRAINING
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl font-normal">
            Professional web development internship experience and advanced technical training.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Work Experience */}
          <div className="lg:col-span-1 flex flex-col space-y-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shadow-xs">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-950 dark:text-white tracking-tight">Work Experience</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Industry internships and production applications</p>
              </div>
            </div>

            {experienceData.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                className="bg-white dark:bg-[#0D0D0D] rounded-3xl p-7 sm:p-8 border-2 border-neutral-300 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-500 shadow-md hover:shadow-xl transition-all duration-300 flex-1 flex flex-col justify-between space-y-5"
              >
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-3 border-b border-neutral-200 dark:border-neutral-800 pb-5">
                    <div>
                      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950 text-violet-800 dark:text-violet-300 text-xs font-bold mb-2">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>{exp.type}</span>
                      </div>
                      <h4 className="text-xl font-bold text-neutral-950 dark:text-white tracking-tight">{exp.role}</h4>
                      <div className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mt-0.5">
                        {exp.company} • {exp.location || 'Remote'}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-xs font-bold text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-[#141414] px-3.5 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-800">
                      <Calendar className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                      <span>{exp.timeline}</span>
                    </div>
                  </div>

                  {/* Key Bullet Highlights */}
                  <ul className="space-y-3 pt-4">
                    {exp.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-violet-600 dark:text-violet-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  {/* Technologies */}
                  <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800">
                    <div className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2.5">
                      TECHNOLOGIES &amp; TOOLS USED
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-neutral-100 dark:bg-[#141414] text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {(exp.githubUrl || exp.liveUrl) && (
                    <div className="pt-3 flex flex-wrap items-center justify-end gap-3 border-t border-neutral-200 dark:border-neutral-800">
                      {exp.githubUrl && (
                        <a
                          href={exp.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 text-xs font-bold text-neutral-800 dark:text-neutral-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                        >
                          <span>GitHub Repo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {exp.liveUrl && (
                        <a
                          href={exp.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 text-xs font-bold text-violet-700 dark:text-violet-300 hover:text-violet-900 dark:hover:text-violet-200 transition-colors px-3 py-1.5 rounded-full bg-violet-50 dark:bg-violet-950/70 border border-violet-200 dark:border-violet-800 shadow-3xs"
                        >
                          <Globe className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Training & Specialization */}
          <div className="lg:col-span-1 flex flex-col space-y-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shadow-xs">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-950 dark:text-white tracking-tight">Technical Training</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Intensive academic &amp; domain programs</p>
              </div>
            </div>

            {trainingData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: 0.15 + idx * 0.1 }}
                className="bg-white dark:bg-[#0D0D0D] rounded-3xl p-7 sm:p-8 border-2 border-neutral-300 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-500 shadow-md hover:shadow-xl transition-all duration-300 flex-1 flex flex-col justify-between space-y-5"
              >
                <div>
                  <div className="border-b border-neutral-200 dark:border-neutral-800 pb-5 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                        <Award className="w-3.5 h-3.5" />
                        <span>{item.grade || 'Certified'}</span>
                      </span>

                      <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-[#141414] px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-800 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>{item.timeline}</span>
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-neutral-950 dark:text-white tracking-tight">{item.title}</h4>
                    <div className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                      {item.institution}
                    </div>
                    {item.certificateNo && (
                      <div className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 pt-0.5">
                        {item.certificateNo} • {item.registrationNo}
                      </div>
                    )}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3 pt-4">
                    {item.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  {/* Topics Covered */}
                  {item.topics && (
                    <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800">
                      <div className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2.5">
                        KEY TOPICS COVERED
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.topics.map((topic, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-50 dark:bg-[#141414] text-emerald-900 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/60"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* View Certificate Link */}
                  {item.credentialUrl && (
                    <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                      <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium flex items-center gap-1.5">
                        <BookCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Verified Merit Certificate
                      </span>
                      <button
                        onClick={() => setSelectedCert(item)}
                        className="inline-flex items-center space-x-1.5 text-xs font-bold text-black dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group/link cursor-pointer"
                      >
                        <span className="underline">View Certificate</span>
                        <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Certificate PDF Viewer Modal */}
        {selectedCert && selectedCert.credentialUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="fixed inset-0" onClick={() => setSelectedCert(null)} />

            <div className="relative w-full max-w-4xl bg-white dark:bg-[#0D0D0D] rounded-3xl shadow-2xl border-2 border-neutral-300 dark:border-neutral-800 overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col">
              {/* Header */}
              <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-[#F8F9FA] dark:bg-[#141414]">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shadow-xs">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950 dark:text-white">{selectedCert.title}</h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{selectedCert.institution} • {selectedCert.timeline}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-semibold text-neutral-800 dark:text-neutral-200 bg-white dark:bg-[#1C1C1C] hover:bg-neutral-100 dark:hover:bg-[#252525] border border-neutral-300 dark:border-neutral-700 rounded-full transition-colors shadow-3xs"
                    title="Open in new tab"
                  >
                    <span>Open in tab</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={selectedCert.credentialUrl}
                    download
                    className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-semibold text-white dark:text-black bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-full transition-colors shadow-xs"
                    title="Download Certificate PDF"
                  >
                    <span>Download</span>
                    <Download className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-full text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors ml-1 cursor-pointer"
                    aria-label="Close PDF Viewer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer Frame */}
              <div className="flex-1 bg-neutral-100 dark:bg-black p-2 sm:p-4 min-h-[60vh] sm:min-h-[70vh]">
                <iframe
                  src={`${selectedCert.credentialUrl}#toolbar=0`}
                  title={selectedCert.title}
                  className="w-full h-full min-h-[60vh] sm:min-h-[70vh] rounded-2xl border border-neutral-300 dark:border-neutral-800 bg-white shadow-xs"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
