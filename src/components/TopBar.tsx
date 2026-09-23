import React from 'react';
import { Sparkles, Award } from 'lucide-react';

export type AppView = 'reflection' | 'shirt-lab' | 'roster';

interface TopBarProps {
  currentView: AppView;
  onSelectView: (view: AppView) => void;
  onStartNew: () => void;
  submissionCount: number;
}

export const TopBar: React.FC<TopBarProps> = ({
  currentView,
  onSelectView,
  onStartNew,
  submissionCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Brand title, one line, single text element wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onSelectView('reflection');
          }}
          className="text-lg font-bold tracking-tight text-slate-900 font-display hover:text-indigo-600 transition-colors whitespace-nowrap"
        >
          Tie-Dye Activity Reflection
        </a>

        {/* Zone 2: Navigation links, single-line */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            type="button"
            onClick={() => onSelectView('reflection')}
            className={`transition-colors whitespace-nowrap cursor-pointer ${
              currentView === 'reflection'
                ? 'text-indigo-600 font-semibold'
                : 'hover:text-slate-900'
            }`}
          >
            Dynamic Reflection
          </button>
          <button
            type="button"
            onClick={() => onSelectView('shirt-lab')}
            className={`transition-colors whitespace-nowrap cursor-pointer ${
              currentView === 'shirt-lab'
                ? 'text-indigo-600 font-semibold'
                : 'hover:text-slate-900'
            }`}
          >
            Tie-Dye Shirt Simulator
          </button>
          <button
            type="button"
            onClick={() => onSelectView('roster')}
            className={`transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              currentView === 'roster'
                ? 'text-indigo-600 font-semibold'
                : 'hover:text-slate-900'
            }`}
          >
            <span>Teacher Roster</span>
            <span className="text-xs bg-slate-100 text-slate-700 px-1.5 py-0.2 rounded font-mono">
              {submissionCount}
            </span>
          </button>
        </nav>

        {/* Zone 3: Primary action button */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onStartNew}
            className="px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors cursor-pointer shadow-xs whitespace-nowrap flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>New Reflection</span>
          </button>
        </div>
      </div>

      {/* Mobile nav bar row for small screens */}
      <div className="md:hidden flex items-center justify-around px-3 py-2 border-t border-slate-100 bg-slate-50 text-xs font-medium">
        <button
          type="button"
          onClick={() => onSelectView('reflection')}
          className={`py-1 px-2.5 rounded-md ${
            currentView === 'reflection' ? 'bg-white text-indigo-600 shadow-xs font-bold' : 'text-slate-600'
          }`}
        >
          Reflection
        </button>
        <button
          type="button"
          onClick={() => onSelectView('shirt-lab')}
          className={`py-1 px-2.5 rounded-md ${
            currentView === 'shirt-lab' ? 'bg-white text-indigo-600 shadow-xs font-bold' : 'text-slate-600'
          }`}
        >
          Shirt Lab
        </button>
        <button
          type="button"
          onClick={() => onSelectView('roster')}
          className={`py-1 px-2.5 rounded-md ${
            currentView === 'roster' ? 'bg-white text-indigo-600 shadow-xs font-bold' : 'text-slate-600'
          }`}
        >
          Teacher Roster ({submissionCount})
        </button>
      </div>
    </header>
  );
};
