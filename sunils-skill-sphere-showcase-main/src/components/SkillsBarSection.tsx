import React from 'react';

const skills = [
  ['React', 'MongoDB', 'JavaScript', 'TypeScript'],
  ['Express.js', 'Tailwind CSS', 'SQL', 'Git'],
  ['Python', 'Pytorch', 'Node.js', 'Azure']
];

const skillColors: Record<string, string> = {
  'React': '#ee4c2c',
  'MongoDB': '#4DB33D',
  'JavaScript': '#f7df1e',
  'TypeScript': '#3178c6',
  'Express.js': '#3776ab',
  'Tailwind CSS': '#a259fa',
  'SQL': '#ff8c42',
  'Git': '#ff6b35',
  'Python': '#f7931e',
  'Pytorch': '#ffcd38',
  'Node.js': '#8b5cf6',
  'Azure': '#06b6d4'
};

const SkillsBarSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center py-8 space-y-4">
      {skills.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap justify-center gap-4">
          {row.map((skill) => (
            <div
              key={skill}
              className="flex items-center px-5 py-2 rounded-full bg-[#232323] text-white text-base font-medium shadow border border-[#333] min-w-[120px]"
            >
              <span
                className="inline-block w-3 h-3 rounded-full mr-3"
                style={{ backgroundColor: skillColors[skill] }}
              ></span>
              <span className="truncate">{skill}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SkillsBarSection;
