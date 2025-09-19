"use client";

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import EventModal from '../ui/EventModal';

interface Event {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  location: string;
  details: {
    hotel: string;
    alimentacion: string;
    inscripciones: string;
    movilizacion: string;
    vuelos: string;
  };
}

const AgendaProxima: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
    {
      id: 'tour-profesional',
      title: 'TOUR PROFESIONAL',
      subtitle: 'DE RAQUETBALL',
      date: 'Septiembre - Junio',
      location: '',
      details: {
        hotel: 'Por definir',
        alimentacion: 'Por definir',
        inscripciones: 'Abiertas',
        movilizacion: 'Por definir',
        vuelos: 'Por definir'
      }
    },
    {
      id: 'juegos-bolivarianos',
      title: 'JUEGOS BOLIVARIANOS',
      date: 'Noviembre 2025',
      location: 'Ayacucho/Lima',
      details: {
        hotel: 'Paga El COE',
        alimentacion: 'Paga El COE',
        inscripciones: 'Paga El COE',
        movilizacion: 'Paga El COE',
        vuelos: 'Paga El COE'
      }
    },
    {
      id: 'campeonato-panamericano',
      title: 'CAMPEONATO',
      subtitle: 'PANAMERICANO',
      date: 'Semana Santa 2026',
      location: 'Sede por definir',
      details: {
        hotel: 'Por confirmar',
        alimentacion: 'Por confirmar',
        inscripciones: 'Por confirmar',
        movilizacion: 'Por confirmar',
        vuelos: 'Por confirmar'
      }
    },
    {
      id: 'juegos-sudamericanos',
      title: 'JUEGOS',
      subtitle: 'SUDAMERICANOS',
      date: 'Fecha por confirmar',
      location: 'Argentina',
      details: {
        hotel: 'Por confirmar',
        alimentacion: 'Por confirmar',
        inscripciones: 'Por confirmar',
        movilizacion: 'Por confirmar',
        vuelos: 'Por confirmar'
      }
    },
    {
      id: 'mundial-open',
      title: 'MUNDIAL OPEN',
      date: 'Julio 2026',
      location: 'Sede por definir',
      details: {
        hotel: 'Por definir',
        alimentacion: 'Por definir',
        inscripciones: 'Por definir',
        movilizacion: 'Por definir',
        vuelos: 'Por definir'
      }
    }
  ];

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="bg-black text-white p-8 rounded-lg max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-8 text-center">AGENDA PRÓXIMA</h1>
      
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            onClick={() => handleEventClick(event)}
            className="border-b border-gray-700 pb-4 cursor-pointer hover:bg-gray-900 p-2 rounded transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">
                  {event.title}
                  {event.subtitle && (
                    <div className="text-sm">{event.subtitle}</div>
                  )}
                </div>
              </div>
              <div className="bg-white rounded-full p-1 group-hover:bg-gray-200 transition-colors">
                <ChevronRight className="w-4 h-4 text-black" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={closeModal} />
      )}
    </div>
  );
};

export default AgendaProxima;