import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  return (
    <div name='projects' className='w-full bg-[#0a192f] text-gray-300 pb-16'>
      <div className='max-w-[1000px] mx-auto px-4 pt-6 pb-4 flex flex-col justify-center w-full h-full'>

        {/* Section Header */}
        <div className='pb-10'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
          <p className='py-4 text-[#8892b0]'>From large-scale platforms serving millions to personal full-stack builds</p>
        </div>

        {/* Professional Work */}
        <div className='mb-12'>
          <p className='text-xs font-semibold tracking-[0.2em] text-pink-400 uppercase mb-6 border-l-2 border-pink-600 pl-3'>
            Professional Work
          </p>
          <div className='grid sm:grid-cols-2 gap-6'>

            {/* Zameen CRM */}
            <div className='group shadow-lg shadow-[#040c16] rounded-md p-6 bg-gradient-to-br from-gray-800 to-gray-700 hover:from-green-800 hover:to-green-900 transition-all duration-300 flex flex-col justify-between min-h-[280px]'>
              <div>
                <div className='flex items-center justify-between mb-3'>
                  <span className='text-xl font-bold text-white'>Zameen CRM</span>
                  <span className='text-xs bg-green-700 group-hover:bg-green-500 text-white px-2 py-1 rounded-full transition-all duration-300'>PropForce</span>
                </div>
                <p className='text-xs text-green-400 mb-3 font-medium'>Pakistan's #1 Real Estate Platform</p>
                <p className='text-sm text-gray-300 leading-relaxed mb-4'>
                  Cloud-based CRM and affiliate network platform serving 8,000+ members with automated lead management, property lifecycle tracking, and comprehensive reporting dashboards.
                </p>
              </div>
              <div className='flex flex-wrap gap-2'>
                {['React', 'Node.js', 'REST APIs', 'Web Platform'].map(t => (
                  <span key={t} className='text-xs bg-green-700 group-hover:bg-white group-hover:text-green-800 text-white px-2 py-1 rounded-full transition-all duration-300'>{t}</span>
                ))}
              </div>
            </div>

            {/* OLX Pakistan */}
            <div className='group shadow-lg shadow-[#040c16] rounded-md p-6 bg-gradient-to-br from-gray-800 to-gray-700 hover:from-blue-800 hover:to-blue-900 transition-all duration-300 flex flex-col justify-between min-h-[280px]'>
              <div>
                <div className='flex items-center justify-between mb-3'>
                  <span className='text-xl font-bold text-white'>OLX Pakistan</span>
                  <span className='text-xs bg-blue-700 group-hover:bg-blue-500 text-white px-2 py-1 rounded-full transition-all duration-300'>Dubizzle</span>
                </div>
                <p className='text-xs text-blue-400 mb-3 font-medium'>30M+ Downloads · 5M Monthly Visitors</p>
                <p className='text-sm text-gray-300 leading-relaxed mb-4'>
                  Pakistan's biggest online marketplace with 3M+ active listings. Full-featured web platform spanning real estate, fashion, electronics, vehicles, and services across the country.
                </p>
              </div>
              <div className='flex flex-wrap gap-2'>
                {['React', 'Next.js', 'Microservices', 'REST APIs'].map(t => (
                  <span key={t} className='text-xs bg-blue-700 group-hover:bg-white group-hover:text-blue-800 text-white px-2 py-1 rounded-full transition-all duration-300'>{t}</span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Personal Projects */}
        <div className='mb-8'>
          <p className='text-xs font-semibold tracking-[0.2em] text-pink-400 uppercase mb-6 border-l-2 border-pink-600 pl-3'>
            Personal Projects
          </p>
          <div className='grid sm:grid-cols-2 gap-6'>

            {/* FinFlow */}
            <div className='group shadow-lg shadow-[#040c16] rounded-md p-6 bg-gradient-to-br from-gray-800 to-gray-700 hover:from-emerald-800 hover:to-teal-900 transition-all duration-300 flex flex-col justify-between min-h-[320px]'>
              <div>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-xl font-bold text-white'>FinFlow</span>
                  <a
                    href='https://github.com/Khursands/finflow'
                    target='_blank'
                    rel='noreferrer'
                    className='text-gray-400 hover:text-white transition-colors duration-200'
                    onClick={e => e.stopPropagation()}
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
                <p className='text-xs text-emerald-400 mb-3 font-medium'>Personal Finance Tracker</p>
                <p className='text-sm text-gray-300 leading-relaxed mb-4'>
                  Full-stack finance management app with a net-worth dashboard, budget tracking, multi-account management, and 6-month analytics charts. Secured with RSA-2048 client-side encryption, JWT auth in httpOnly cookies, and rate limiting.
                </p>
              </div>
              <div className='flex flex-wrap gap-2'>
                {['Next.js 14', 'TypeScript', 'MongoDB', 'Express.js', 'TanStack Query', 'JWT'].map(t => (
                  <span key={t} className='text-xs bg-emerald-700 group-hover:bg-white group-hover:text-emerald-800 text-white px-2 py-1 rounded-full transition-all duration-300'>{t}</span>
                ))}
              </div>
            </div>

            {/* MediCare+ */}
            <div className='group shadow-lg shadow-[#040c16] rounded-md p-6 bg-gradient-to-br from-gray-800 to-gray-700 hover:from-purple-800 hover:to-indigo-900 transition-all duration-300 flex flex-col justify-between min-h-[320px]'>
              <div>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-xl font-bold text-white'>MediCare+</span>
                  <a
                    href='https://github.com/Khursands/Online-Pharmacy'
                    target='_blank'
                    rel='noreferrer'
                    className='text-gray-400 hover:text-white transition-colors duration-200'
                    onClick={e => e.stopPropagation()}
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
                <p className='text-xs text-purple-400 mb-3 font-medium'>Online Pharmacy Platform</p>
                <p className='text-sm text-gray-300 leading-relaxed mb-4'>
                  Production-ready e-commerce pharmacy with 85+ medicines across 8 categories. Features complete cart & order lifecycle, prescription management, JWT authentication, real-time inventory tracking, and HIPAA-ready data handling.
                </p>
              </div>
              <div className='flex flex-wrap gap-2'>
                {['React 18', 'TypeScript', 'Node.js', 'SQLite', 'Express.js', 'JWT'].map(t => (
                  <span key={t} className='text-xs bg-purple-700 group-hover:bg-white group-hover:text-purple-800 text-white px-2 py-1 rounded-full transition-all duration-300'>{t}</span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* LeetCode Banner */}
        <div className='p-5 bg-[#112240] rounded-lg border border-gray-700/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8'>
          <div>
            <p className='font-semibold text-white flex items-center gap-2'>
              <span className='text-yellow-400 text-lg'>⚡</span> LeetCode Submissions
            </p>
            <p className='text-sm text-gray-400 mt-1'>Ongoing DSA practice tracked in JavaScript — consistent problem-solving and algorithmic thinking</p>
          </div>
          <a
            href='https://github.com/Khursands/LeetCode_Submissions'
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 text-sm border border-gray-600 hover:border-pink-600 hover:text-pink-400 text-gray-300 px-4 py-2 rounded transition-all duration-200 whitespace-nowrap'
          >
            <FaGithub size={16} /> View Submissions
          </a>
        </div>

        {/* GitHub CTA */}
        <div className='text-center'>
          <a
            href='https://github.com/Khursands'
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-2 text-gray-400 hover:text-pink-400 border border-gray-700 hover:border-pink-600 px-6 py-3 rounded transition-all duration-200'
          >
            <FaGithub size={18} /> View All Projects on GitHub
          </a>
        </div>

      </div>
    </div>
  )
}

export default Projects
