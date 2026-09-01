import React, { useState } from 'react';
import * as Lucide from 'lucide-react';

export const BookingCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<number>(1);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [pendingTime, setPendingTime] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const daysInMonth = 30;
  const startDayOffset = 1; 

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: startDayOffset }, (_, i) => i);

  const availableTimes = ['09:30', '10:30', '11:30', '16:00', '17:00', '18:30'];

  const handleSelectTime = (time: string) => {
    setPendingTime(time);
  };

  const handleConfirmBooking = () => {
    setSelectedTime(pendingTime);
    setPendingTime(null);
    setIsConfirmed(true);
  };

  const handleCancelBooking = () => {
    setPendingTime(null);
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
            <button aria-label="Previous month" className="p-2 rounded-full hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all shadow-sm focus:outline-none">
              <Lucide.ChevronLeft className="w-4 h-4" />
            </button>
            <button aria-label="Next month" className="p-2 rounded-full hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all shadow-sm focus:outline-none">
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

        <div className="grid grid-cols-7 gap-x-3 gap-y-3 text-center text-sm font-medium">
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
                  setPendingTime(null);
                  setIsConfirmed(false);
                }}
                className={`relative mx-auto w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 focus:outline-none ${
                  isSelected
                    ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/30 scale-105 ring-4 ring-blue-600/20 z-10'
                    : hasAvailability
                    ? 'text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 active:scale-95 border border-slate-200/60 dark:border-slate-700/50'
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

      {/* Right Column: Available Times / Confirmation / Success */}
      <div className="lg:col-span-5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl shadow-slate-900/5 dark:shadow-none">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/80 gap-4">
          <div className="transition-all duration-300">
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
              {isConfirmed ? 'Appointment Confirmed' : pendingTime ? 'Confirm Selection' : 'Available Times'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Sep {selectedDate}, 2026 (GMT+2)
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xs font-semibold whitespace-nowrap shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            {isConfirmed ? 'Scheduled' : 'Slots open'}
          </span>
        </div>

        <div className="relative overflow-hidden transition-all duration-300">
          <div className={`transition-all duration-300 ease-in-out ${isConfirmed ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 absolute inset-0 pointer-events-none'}`}>
            {isConfirmed && (
              <div className="bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/50 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 shadow-xl shadow-blue-500/25">
                  <Lucide.Check className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">Appointment Confirmed!</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  Successfully scheduled for September {selectedDate}, 2026 at <span className="font-semibold text-blue-600 dark:text-blue-400">{selectedTime}</span>. Check your email for details.
                </p>
                <button
                  onClick={() => {
                    setIsConfirmed(false);
                    setSelectedTime(null);
                  }}
                  className="w-full py-3.5 px-6 rounded-full bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg focus:outline-none"
                >
                  Choose Another Slot
                </button>
              </div>
            )}
          </div>

          <div className={`transition-all duration-300 ease-in-out ${pendingTime && !isConfirmed ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 absolute inset-0 pointer-events-none'}`}>
            {pendingTime && !isConfirmed && (
              <div className="bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/50 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center mx-auto mb-4 shadow-xl shadow-amber-500/25">
                  <Lucide.HelpCircle className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">Are you sure?</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  You are about to book September {selectedDate}, 2026 at <span className="font-semibold text-slate-900 dark:text-white">{pendingTime}</span>. Do you want to confirm this date and time?
                </p>
                <div className="flex gap-2.5">
                  <button
                    onClick={handleCancelBooking}
                    className="flex-1 py-3 px-3 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-[11px] uppercase tracking-wider transition-all focus:outline-none"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmBooking}
                    className="flex-1 py-3 px-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] uppercase tracking-wider transition-all shadow-md shadow-blue-500/25 focus:outline-none"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className={`transition-all duration-300 ease-in-out ${!pendingTime && !isConfirmed ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4 absolute inset-0 pointer-events-none'}`}>
            {!pendingTime && !isConfirmed && (
              <div className="grid grid-cols-2 gap-3">
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleSelectTime(time)}
                    className="group relative py-3.5 px-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 text-slate-800 dark:text-slate-200 font-bold text-sm hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-200 text-center shadow-sm overflow-hidden focus:outline-none"
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
      </div>
    </div>
  );
};