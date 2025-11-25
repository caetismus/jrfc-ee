import React from 'react';
import { SectionId } from '../types';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        
        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <GraduationCap className="w-6 h-6 mr-3 text-primary-600" /> Education
          </h3>
          <div className="grid gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <div className="flex flex-col md:flex-row justify-between md:items-start mb-2">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Pamantasan ng Lungsod ng Maynila</h4>
                  <p className="text-primary-600 font-medium">Bachelor of Science in Electrical Engineering</p>
                </div>
                <span className="text-slate-500 text-sm mt-1 md:mt-0">Intramuros, Manila • 2020 - 2026</span>
              </div>
              <ul className="list-disc list-inside text-slate-600 text-sm mt-3 space-y-1">
                <li>Member: PLM DOST Scholars Association</li>
                <li>Member: PLM Junior Institute of Electrical Engineers</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <div className="flex flex-col md:flex-row justify-between md:items-start mb-2">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">De La Salle University Manila</h4>
                  <p className="text-primary-600 font-medium">Senior High School (STEM)</p>
                </div>
                <span className="text-slate-500 text-sm mt-1 md:mt-0">Malate, Manila • 2018 - 2020</span>
              </div>
              <ul className="list-disc list-inside text-slate-600 text-sm mt-3 space-y-1">
                <li>Member: DLSU SHS Robotics and Engineering Club</li>
                <li>Member: DLSU SHS Student Ambassadors</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <Briefcase className="w-6 h-6 mr-3 text-primary-600" /> Internship Experience
          </h3>
          <div className="relative border-l-2 border-slate-200 ml-3 space-y-12">
            
            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-600 border-4 border-white shadow-sm"></div>
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                <h4 className="text-lg font-bold text-slate-900">Intern, Plant Performance and Asset Management</h4>
                <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded">July – Oct 2025</span>
              </div>
              <div className="text-primary-600 font-medium mb-2">ACEN (Ayala Triangle, Makati)</div>
              <ul className="list-disc list-outside ml-4 text-slate-600 text-sm space-y-2 leading-relaxed">
                <li>Assisted the Plant Operations Performance Team in consolidating operational data from multiple plant sites.</li>
                <li>Prepared and presented performance reports for management using Tableau and Excel Power Query.</li>
                <li>Utilized Snowflake SQL for data extraction and analysis to support reporting accuracy.</li>
                <li>Applied advanced MS Excel skills for data validation, trend analysis, and report automation.</li>
                <li>Coordinated with several solar and wind plants regarding RCA reports of issues for team analysis.</li>
                <li>Successfully facilitated the transition of Daily Asset Performance Report to the data management team.</li>
              </ul>
            </div>

            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 border-4 border-white shadow-sm"></div>
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                <h4 className="text-lg font-bold text-slate-900">Engineering Intern</h4>
                <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded">July – Aug 2024</span>
              </div>
              <div className="text-primary-600 font-medium mb-2">IRAH Solutions and Service, Inc. (Quezon City)</div>
              <ul className="list-disc list-outside ml-4 text-slate-600 text-sm space-y-2 leading-relaxed">
                <li>Assisted in the designing and implementation of auxiliary and FDAS systems through AutoCAD.</li>
                <li>Installed wiring and electrical/electronic systems under the supervision of electricians.</li>
                <li>Coordinated with main office on the transfer of incomplete equipment to the site.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Certs */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <Award className="w-6 h-6 mr-3 text-primary-600" /> Certifications & Awards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="border border-slate-200 p-4 rounded bg-white">
                <div className="font-semibold text-slate-800">Lean Six Sigma Yellow Belt</div>
                <div className="text-sm text-slate-500">MF Treinamentos, 2025</div>
             </div>
             <div className="border border-slate-200 p-4 rounded bg-white">
                <div className="font-semibold text-slate-800">Electrical Installation & Maintenance NCII</div>
                <div className="text-sm text-slate-500">TESDA, 2025</div>
             </div>
             <div className="border border-slate-200 p-4 rounded bg-white">
                <div className="font-semibold text-slate-800">Photovoltaic System Installation NCII</div>
                <div className="text-sm text-slate-500">eTESDA, 2025</div>
             </div>
             <div className="border border-slate-200 p-4 rounded bg-white">
                <div className="font-semibold text-slate-800">Merit Scholar</div>
                <div className="text-sm text-slate-500">DOST-Science Education Institute, 2020</div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;