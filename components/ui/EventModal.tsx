import React from 'react';
import { X } from 'lucide-react';

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

interface EventModalProps {
  event: Event;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Función para formatear el título del evento
  const getEventTitle = () => {
    if (event.id === 'juegos-bolivarianos') {
      return 'JUEGOS BOLIVARIANOS (2025)';
    }
    return event.subtitle ? `${event.title} ${event.subtitle}` : event.title;
  };

  // Función para obtener el subtítulo apropiado
  const getEventSubtitle = () => {
    if (event.id === 'juegos-bolivarianos') {
      return 'Competencia oficial representando a Ecuador';
    }
    return 'Competencia oficial de raquetball';
  };

  // Función para formatear la fecha
  const getFormattedDate = () => {
    if (event.id === 'juegos-bolivarianos') {
      return '22 de noviembre al 7 de diciembre';
    }
    return event.date;
  };

  // Función para formatear la ubicación
  const getFormattedLocation = () => {
    if (event.id === 'juegos-bolivarianos') {
      return 'Lima, Perú';
    }
    return event.location || 'Por definir';
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-black text-white rounded-2xl p-8 max-w-sm w-full border border-gray-700 relative">
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Título del evento */}
        <h2 className="text-xl font-bold mb-2 pr-8">
          {getEventTitle()}
        </h2>

        {/* Subtítulo */}
        <p className="text-gray-300 text-sm mb-6">
          {getEventSubtitle()}
        </p>

        {/* Detalles del evento */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-white font-medium">Fecha del Torneo</span>
            <span className="text-gray-300 text-right text-sm">
              {getFormattedDate()}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-white font-medium">Lugar</span>
            <span className="text-gray-300 text-right text-sm">
              {getFormattedLocation()}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-white font-medium">Hotel</span>
            <span className="text-gray-300 text-right text-sm">
              {event.details.hotel}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-white font-medium">Alimentación</span>
            <span className="text-gray-300 text-right text-sm">
              {event.details.alimentacion}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-white font-medium">Inscripciones</span>
            <span className="text-gray-300 text-right text-sm">
              {event.details.inscripciones}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-white font-medium">Movilización</span>
            <span className="text-gray-300 text-right text-sm">
              {event.details.movilizacion}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-white font-medium">Vuelos</span>
            <span className="text-gray-300 text-right text-sm">
              {event.details.vuelos}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;