'use client';

import { createContext, useContext, useReducer, ReactNode } from 'react';
import { ServiceBooking, Service } from '@/types';

interface BookingState {
  booking: ServiceBooking | null;
}

type BookingAction = 
  | { type: 'SET_BOOKING'; payload: ServiceBooking }
  | { type: 'CLEAR_BOOKING' };

interface BookingContextType extends BookingState {
  setBooking: (service: Service, date: string, time: string, requirements: string) => void;
  clearBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

function bookingReducer(state: BookingState, action: BookingAction): BookingState {
  switch (action.type) {
    case 'SET_BOOKING':
      return { booking: action.payload };
    case 'CLEAR_BOOKING':
      return { booking: null };
    default:
      return state;
  }
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(bookingReducer, {
    booking: null,
  });

  const setBooking = (service: Service, date: string, time: string, requirements: string) => {
    const booking: ServiceBooking = {
      id: `${service.id}-${Date.now()}`,
      service,
      date,
      time,
      requirements,
    };
    dispatch({ type: 'SET_BOOKING', payload: booking });
  };

  const clearBooking = () => {
    dispatch({ type: 'CLEAR_BOOKING' });
  };

  return (
    <BookingContext.Provider value={{ ...state, setBooking, clearBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
} 