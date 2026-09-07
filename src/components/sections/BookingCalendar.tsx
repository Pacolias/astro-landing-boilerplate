import React, { useState, useRef, useEffect } from 'react';
import * as Lucide from 'lucide-react';

// Static demo data lives across a small real calendar window (Sep-Dec 2026) so month
// navigation, weekdays and day counts are all correct - only "availability" is simulated.
const BASE_YEAR = 2026;
const BASE_MONTH = 8; // September (0-indexed)
const MONTH_COUNT = 4;

const getMonthDate = (offset: number) => new Date(BASE_YEAR, BASE_MONTH + offset, 1);

const getMonthInfo = (offset: number) => {
  const date = getMonthDate(offset);
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const firstWeekday = new Date(year, monthIndex, 1).getDay(); // 0 = Sunday
  const startDayOffset = (firstWeekday + 6) % 7; // shift so Monday = 0
  const label = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  return { year, monthIndex, daysInMonth, startDayOffset, label };
};

// Deterministic pseudo-random availability: closed on weekends (matches the business
// hours shown in the Location section), open on roughly 70% of weekdays.
const isDayAvailable = (day: number, monthOffset: number, year: number, monthIndex: number) => {
  const weekday = new Date(year, monthIndex, day).getDay();
  if (weekday === 0 || weekday === 6) return false;
  const seed = (day * 17 + monthOffset * 131 + 7) % 97;
  return seed > 28;
};

const getFirstAvailableDay = (monthOffset: number) => {
  const { daysInMonth, year, monthIndex } = getMonthInfo(monthOffset);
  for (let day = 1; day <= daysInMonth; day++) {
    if (isDayAvailable(day, monthOffset, year, monthIndex)) return day;
  }
  return 1;
};

export const BookingCalendar: React.FC = () => {
  const [monthOffset, setMonthOffset] = useState(0);
  const [monthLoading, setMonthLoading] = useState(false);
  const [slideDir, setSlideDir] = useState<'left' | 'right'>('left');
  const [selectedDate, setSelectedDate] = useState(() => getFirstAvailableDay(0));
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [pendingTime, setPendingTime] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const monthTimeoutRef = useRef<number | null>(null);
  const dateTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (monthTimeoutRef.current) window.clearTimeout(monthTimeoutRef.current);
      if (dateTimeoutRef.current) window.clearTimeout(dateTimeoutRef.current);
    };
  }, []);

  const { year, monthIndex, daysInMonth, startDayOffset, label: monthLabel } = getMonthInfo(monthOffset);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: startDayOffset }, (_, i) => i);

  const availableTimes = ['09:30', '10:30', '11:30', '16:00', '17:00', '18:30'];

  const selectedDayHasAvailability = isDayAvailable(selectedDate, monthOffset, year, monthIndex);

  const fullDateLabel = new Date(year, monthIndex, selectedDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const shortDateLabel = new Date(year, monthIndex, selectedDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const changeMonth = (direction: 'prev' | 'next') => {
    const nextOffset = monthOffset + (direction === 'next' ? 1 : -1);
    if (nextOffset < 0 || nextOffset >= MONTH_COUNT || monthLoading) return;

    setSlideDir(direction === 'next' ? 'left' : 'right');
    setMonthLoading(true);

    if (monthTimeoutRef.current) window.clearTimeout(monthTimeoutRef.current);
    monthTimeoutRef.current = window.setTimeout(() => {
      setMonthOffset(nextOffset);
      setSelectedDate(getFirstAvailableDay(nextOffset));
      setSelectedTime(null);
      setPendingTime(null);
      setIsConfirmed(false);
      setMonthLoading(false);
    }, 450);
  };

  const handleSelectDate = (day: number) => {
    if (day === selectedDate) return;
    setSelectedDate(day);
    setSelectedTime(null);
    setPendingTime(null);
    setIsConfirmed(false);
    setIsCheckingAvailability(true);

    if (dateTimeoutRef.current) window.clearTimeout(dateTimeoutRef.current);
    dateTimeoutRef.current = window.setTimeout(() => {
      setIsCheckingAvailability(false);
    }, 380);
  };

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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
      {/* Left Column: Calendar Grid */}
      <div className="lg:col-span-7 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl shadow-slate-900/5 dark:shadow-none transition-all">
        <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-slate-100 dark:border-slate-800/80">
          <div className="relative overflow-hidden">
            <h2
              key={monthOffset}
              className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 tracking-tight animate-[month-in_0.35s_ease-out]"
            >
              {monthLabel}
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                <Lucide.ChevronDown className="w-3.5 h-3.5" />
              </span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Select your preferred date</p>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/60 p-1 rounded-full border border-slate-200/80 dark:border-slate-700/50">
            <button
              onClick={() => changeMonth('prev')}
              disabled={monthOffset === 0 || monthLoading}
              aria-label="Previous month"
              className="p-2 rounded-full hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all shadow-sm focus:outline-none disabled:opacity-30 disabled:pointer-events-none active:scale-90"
            >
              <Lucide.ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => changeMonth('next')}
              disabled={monthOffset === MONTH_COUNT - 1 || monthLoading}
              aria-label="Next month"
              className="p-2 rounded-full hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all shadow-sm focus:outline-none disabled:opacity-30 disabled:pointer-events-none active:scale-90"
            >
              <Lucide.ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="relative z-0 grid grid-cols-7 gap-x-1 sm:gap-x-3 text-center text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
          <span>M</span>
          <span>T</span>
          <span>W</span>
          <span>T</span>
          <span>F</span>
          <span>S</span>
          <span>S</span>
        </div>

        <div className="relative z-10 pt-1" aria-live="polite" aria-busy={monthLoading}>
          {/* Skeleton shown while "loading" the new month */}
          <div
            className={`grid grid-cols-7 gap-x-1 gap-y-1 sm:gap-x-3 sm:gap-y-3 transition-opacity duration-200 ${
              monthLoading ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
            }`}
            aria-hidden={!monthLoading}
          >
            {Array.from({ length: 35 }, (_, i) => (
              <div
                key={i}
                className="w-full max-w-11 aspect-square mx-auto rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-slate-800/50 animate-pulse"
                style={{ animationDelay: `${(i % 7) * 40}ms` }}
              />
            ))}
          </div>

          {/* Real day grid */}
          <div
            key={monthOffset}
            className={`grid grid-cols-7 gap-x-1 gap-y-1 sm:gap-x-3 sm:gap-y-3 text-center text-sm font-medium transition-all duration-300 ease-out ${
              monthLoading
                ? 'opacity-0 absolute inset-0 pointer-events-none'
                : `opacity-100 ${slideDir === 'left' ? 'animate-[slide-in-left_0.35s_ease-out]' : 'animate-[slide-in-right_0.35s_ease-out]'}`
            }`}
          >
            {emptyDays.map((_, index) => (
              <div key={`empty-${index}`} />
            ))}

            {days.map((day) => {
              const isSelected = selectedDate === day;
              const hasAvailability = isDayAvailable(day, monthOffset, year, monthIndex);
              const dayLabel = new Date(year, monthIndex, day).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric'
              });

              return (
                <button
                  key={day}
                  onClick={() => handleSelectDate(day)}
                  aria-pressed={isSelected}
                  aria-label={`${dayLabel}${hasAvailability ? ', available' : ', no availability'}${isSelected ? ', selected' : ''}`}
                  className={`relative mx-auto w-full max-w-11 aspect-square rounded-xl sm:rounded-2xl flex items-center justify-center text-xs sm:text-sm border ring-4 transition-all duration-300 focus:outline-none ${
                    isSelected
                      ? 'bg-blue-600 border-blue-600 text-white font-bold shadow-lg shadow-blue-500/30 scale-105 ring-blue-600/20 z-10'
                      : hasAvailability
                      ? 'text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800/40 hover:bg-slate-200 dark:hover:bg-slate-800 hover:scale-105 active:scale-95 border-slate-200/80 dark:border-slate-700/50 ring-transparent'
                      : 'text-slate-300 dark:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800/20 border-transparent ring-transparent'
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
      </div>

      {/* Right Column: Available Times / Confirmation / Success */}
      <div className="lg:col-span-5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl shadow-slate-900/5 dark:shadow-none">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/80 gap-4">
          <div className="transition-all duration-300">
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
              {isConfirmed
                ? 'Appointment Confirmed'
                : pendingTime
                ? 'Confirm Selection'
                : isCheckingAvailability
                ? 'Checking availability…'
                : selectedDayHasAvailability
                ? 'Available Times'
                : 'No Availability'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {shortDateLabel} (GMT+2)
            </p>
          </div>
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-300 ${
              isConfirmed || selectedDayHasAvailability
                ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400'
                : 'bg-slate-100 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                isConfirmed || selectedDayHasAvailability ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400 dark:bg-slate-500'
              }`}
            />
            {isConfirmed ? 'Scheduled' : selectedDayHasAvailability ? 'Slots open' : 'Fully booked'}
          </span>
        </div>

        <div className="relative overflow-hidden transition-all duration-300" aria-live="polite">
          <div className={`transition-all duration-300 ease-in-out ${isConfirmed ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 absolute inset-0 pointer-events-none'}`}>
            {isConfirmed && (
              <div className="bg-slate-100/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/50 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 shadow-xl shadow-blue-500/25">
                  <Lucide.Check className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">Appointment Confirmed!</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  Successfully scheduled for {fullDateLabel} at <span className="font-semibold text-blue-600 dark:text-blue-400">{selectedTime}</span>. Check your email for details.
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
              <div className="bg-slate-100/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/50 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center mx-auto mb-4 shadow-xl shadow-amber-500/25">
                  <Lucide.HelpCircle className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">Are you sure?</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  You are about to book {fullDateLabel} at <span className="font-semibold text-slate-900 dark:text-white">{pendingTime}</span>. Do you want to confirm this date and time?
                </p>
                <div className="flex gap-2.5">
                  <button
                    onClick={handleCancelBooking}
                    className="flex-1 py-3 px-3 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-[11px] uppercase tracking-wider transition-all focus:outline-none"
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

          <div className={`transition-all duration-300 ease-in-out ${isCheckingAvailability && !pendingTime && !isConfirmed ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 absolute inset-0 pointer-events-none'}`}>
            {isCheckingAvailability && !pendingTime && !isConfirmed && (
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {availableTimes.map((_, index) => (
                  <div
                    key={index}
                    className="h-[46px] sm:h-[50px] rounded-2xl bg-slate-100/80 dark:bg-slate-800/40 animate-pulse"
                    style={{ animationDelay: `${index * 60}ms` }}
                  />
                ))}
              </div>
            )}
          </div>

          <div className={`transition-all duration-300 ease-in-out ${!isCheckingAvailability && !pendingTime && !isConfirmed && !selectedDayHasAvailability ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4 absolute inset-0 pointer-events-none'}`}>
            {!isCheckingAvailability && !pendingTime && !isConfirmed && !selectedDayHasAvailability && (
              <div className="rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 p-6 text-center">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800/60 text-slate-400 dark:text-slate-500 flex items-center justify-center mx-auto mb-3">
                  <Lucide.CalendarX className="w-6 h-6" />
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  No slots available on this day. Try another date on the calendar.
                </p>
              </div>
            )}
          </div>

          <div className={`transition-all duration-300 ease-in-out ${!isCheckingAvailability && !pendingTime && !isConfirmed && selectedDayHasAvailability ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4 absolute inset-0 pointer-events-none'}`}>
            {!isCheckingAvailability && !pendingTime && !isConfirmed && selectedDayHasAvailability && (
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleSelectTime(time)}
                    className="group relative py-3.5 px-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-800/30 text-slate-800 dark:text-slate-200 font-bold text-sm hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-200 text-center shadow-sm overflow-hidden focus:outline-none"
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
