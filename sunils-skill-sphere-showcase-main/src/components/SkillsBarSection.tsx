import React from 'react';

const skills = [
  { name: 'React', color: '#ee4c2c' },
  { name: 'MongoDB', color: '#4DB33D' },
  { name: 'JavaScript', color: '#f7df1e' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'Express.js', color: '#3776ab' },
  { name: 'Tailwind CSS', color: '#a259fa' },
  { name: 'SQL', color: '#ff8c42' },
  { name: 'Git', color: '#ff6b35' },
  { name: 'Python', color: '#f7931e' },
  { name: 'Pytorch', color: '#ffcd38' },
  { name: 'Node.js', color: '#8b5cf6' },
  { name: 'Azure', color: '#06b6d4' },

];

const SkillsBarSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="w-full max-w-2xl grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill, i) => {
          const direction = i % 2 === 0 ? 'right' : 'left';
          return (
            <div
              key={skill.name}
              className={`flex items-center px-5 py-2 rounded-full bg-[#232323] text-white text-lg font-semibold shadow border border-[#333] relative overflow-hidden animate-skill-move-${direction}`}
              style={{ minWidth: 0, animationDuration: `${4 + (i % 3)}s`, animationIterationCount: 'infinite', animationTimingFunction: 'linear' }}
            >
              <span
                className="inline-block w-3 h-3 rounded-full mr-3"
                style={{ backgroundColor: skill.color }}
              ></span>
              <span className="truncate">{skill.name}</span>
            </div>
          );
        })}
      </div>
      <style>{`
        @keyframes skill-move-right {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
        @keyframes skill-move-left {
          0% { transform: translateX(120%); }
          100% { transform: translateX(-120%); }
        }
        .animate-skill-move-right {
          animation-name: skill-move-right;
        }
        .animate-skill-move-left {
          animation-name: skill-move-left;
        }
      `}</style>
    </div>
  );
};

export default SkillsBarSection; 
