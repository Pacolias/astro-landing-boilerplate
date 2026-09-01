import React, { useState } from 'react';
import * as Lucide from 'lucide-react';

export const BookingCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<number>(1);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const daysInMonth = 30;
  const startDayOffset = 1; 

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: startDayOffset }, (_, i) => i);

  const availableTimes = ['09:30', '10:30', '11:30', '16:00', '17:00', '18:30'];

  const handleBooking = (time: string) => {
    setSelectedTime(time);
    setIsConfirmed(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: Calendar Grid */}
      <div className="lg:col-span-7 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl shadow-slate-900/5 dark:shadow-none transition-all">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100 dark:border-slate-800/80">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 tracking-tight">
              September 2026
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                <Lucide.ChevronDown className="w-3.5 h-3.5" />
              </span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Select your preferred date</p>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800/60 p-1 rounded-full border border-slate-200/60 dark:border-slate-700/50">
            <button aria-label="Previous month" className="p-2 rounded-full hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all shadow-sm">
              <Lucide.ChevronLeft className="w-4 h-4" />
            </button>
            <button aria-label="Next month" className="p-2 rounded-full hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all shadow-sm">
              <Lucide.ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 text-center text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
          <span>M</span>
          <span>T</span>
          <span>W</span>
          <span>T</span>
          <span>F</span>
          <span>S</span>
          <span>S</span>
        </div>

        <div className="grid grid-cols-7 gap-y-3 text-center text-sm font-medium">
          {emptyDays.map((_, index) => (
            <div key={`empty-${index}`} />
          ))}

          {days.map((day) => {
            const isSelected = selectedDate === day;
            const hasAvailability = [1, 2, 3, 4, 7, 8, 9, 10, 11, 15, 17, 18, 22, 24, 25].includes(day);

            return (
              <button
                key={day}
                onClick={() => {
                  setSelectedDate(day);
                  setSelectedTime(null);
                  setIsConfirmed(false);
                }}
                className={`relative mx-auto w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-200 ${
                  isSelected
                    ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/30 scale-105 ring-4 ring-blue-600/20'
                    : hasAvailability
                    ? 'text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 border border-slate-200/60 dark:border-slate-700/50'
                    : 'text-slate-300 dark:text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/20'
                }`}
              >
                {day}
                {hasAvailability && !isSelected && (
                  <span className="absolute bottom-1 w-1 h-1 rounded-full bg-blue-500 dark:bg-blue-400" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Column: Available Times */}
      <div className="lg:col-span-5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl shadow-slate-900/5 dark:shadow-none transition-all">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/80">
          <div>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
              Available Times
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Sep {selectedDate}, 2026 (GMT+2)
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Slots open
          </span>
        </div>

        {isConfirmed ? (
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-slate-900 border border-blue-200 dark:border-blue-800/50 rounded-2xl p-6 text-center transition-all animate-fade-in">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 shadow-xl shadow-blue-500/25">
              <Lucide.Check className="w-7 h-7" />
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">Appointment Confirmed!</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Successfully scheduled for September {selectedDate}, 2026 at <span className="font-semibold text-blue-600 dark:text-blue-400">{selectedTime}</span>. Check your email for details.
            </p>
            <button
              onClick={() => setIsConfirmed(false)}
              className="w-full py-3.5 px-6 rounded-full bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg"
            >
              Choose Another Slot
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {availableTimes.map((time) => (
              <button
                key={time}
                onClick={() => handleBooking(time)}
                className="group relative py-3.5 px-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 text-slate-800 dark:text-slate-200 font-bold text-sm hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-200 text-center shadow-sm overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Lucide.Clock className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  {time}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};