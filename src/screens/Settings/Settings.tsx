import React, { useState, useRef, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd/dist';
import { HTML5Backend } from 'react-dnd-html5-backend';
import{isWithinInterval} from 'date-fns/isWithinInterval';
import { parseISO } from 'date-fns/parseISO';
import { format, addHours, setHours, setMinutes, addMinutes } from 'date-fns';
import ReactTooltip from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import 'tailwindcss/tailwind.css'; 

// Types for TypeScript (remove if not using TypeScript)
interface Shift {
  id: string;
  staffId: string;
  startTime: string;
  endTime: string;
  title: string;
  type: string;
  color: string;
}

interface StaffMember {
  id: string;
  name: string;
  role: string;
}

// Generate time slots from 00:00 to 24:00
const generateTimeSlots = () => {
  const slots = [];
  for (let i = 0; i < 24; i++) {
    slots.push({
      hour: i,
      label: `${i.toString().padStart(2, '0')}:00`
    });
  }
  return slots;
};

// Sample data
const sampleStaff: StaffMember[] = [
  { id: '1', name: 'John Doe', role: 'Manager' },
  { id: '2', name: 'Jane Smith', role: 'Reception' },
  { id: '3', name: 'Mike Johnson', role: 'Housekeeping' },
  { id: '4', name: 'Sarah Williams', role: 'Wellbeing Coordinator' },
  { id: '5', name: 'Phone 1', role: 'Device' },
  { id: '6', name: 'Phone 2', role: 'Device' },
];

const sampleShifts: Shift[] = [
  { id: '1', staffId: '1', startTime: '2023-01-01T08:00:00', endTime: '2023-01-01T16:00:00', title: 'Manager', type: 'shift', color: 'bg-blue-400' },
  { id: '2', staffId: '2', startTime: '2023-01-01T07:00:00', endTime: '2023-01-01T15:00:00', title: 'Reception', type: 'shift', color: 'bg-green-400' },
  { id: '3', staffId: '3', startTime: '2023-01-01T09:00:00', endTime: '2023-01-01T17:00:00', title: 'Housekeeping', type: 'shift', color: 'bg-yellow-400' },
  { id: '4', staffId: '4', startTime: '2023-01-01T10:00:00', endTime: '2023-01-01T18:00:00', title: 'Wellbeing', type: 'shift', color: 'bg-purple-400' },
  { id: '5', staffId: '5', startTime: '2023-01-01T08:00:00', endTime: '2023-01-01T12:00:00', title: 'Hilton', type: 'phone', color: 'bg-gray-400' },
  { id: '6', staffId: '6', startTime: '2023-01-01T13:00:00', endTime: '2023-01-01T17:00:00', title: 'ET', type: 'phone', color: 'bg-gray-500' },
];

// Shift item component
const ShiftItem: React.FC<{
  shift: Shift;
  onDrop: (shift: Shift, newStaffId: string) => void;
  onResize: (shift: Shift, newStartTime: string, newEndTime: string) => void;
}> = ({ shift, onDrop, onResize }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'SHIFT',
    item: shift,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'SHIFT',
    drop: (item: Shift) => onDrop(item, shift.staffId),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const handleResizeStart = (e: React.MouseEvent, isStart: boolean) => {
    e.stopPropagation();
    const startX = e.clientX;
    const initialStart = parseISO(shift.startTime);
    const initialEnd = parseISO(shift.endTime);

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const diffX = moveEvent.clientX - startX;
      const diffHours = diffX / 50; // Assuming 50px per hour

      if (isStart) {
        const newStart = addHours(initialStart, diffHours);
        onResize(shift, newStart.toISOString(), shift.endTime);
      } else {
        const newEnd = addHours(initialEnd, diffHours);
        onResize(shift, shift.startTime, newEnd.toISOString());
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      ref={(node) => {
        drag(drop(node));
      }}
      className={`relative h-8 ${isOver ? 'bg-gray-200' : ''}`}
    >
      <div
        ref={(node) => {
          drag(drop(node));
        }}
        data-tip={`${shift.title}: ${format(parseISO(shift.startTime), 'HH:mm')} - ${format(parseISO(shift.endTime), 'HH:mm')}`}
        data-for="shift-tooltip"
        className={`${shift.color} rounded p-1 text-white text-xs cursor-move h-full overflow-hidden ${isDragging ? 'opacity-50' : ''}`}
      >
        {shift.title}
        <div 
          className="absolute left-0 top-0 bottom-0 w-2 cursor-ew-resize"
          onMouseDown={(e) => handleResizeStart(e, true)}
        />
        <div 
          className="absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize"
          onMouseDown={(e) => handleResizeStart(e, false)}
        />
      </div>
    </div>
  );
};

// Main Rota Component
const StaffRota: React.FC = () => {
  const [staff, setStaff] = useState<StaffMember[]>(sampleStaff);
  const [shifts, setShifts] = useState<Shift[]>(sampleShifts);
  const [currentDate] = useState<Date>(new Date());
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const containerRef = useRef<HTMLDivElement>(null);
  const timeSlots = generateTimeSlots();

  // Update current time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Calculate current time position
  const getCurrentTimePosition = () => {
    const now = currentTime;
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return hours * 60 + minutes; // Position in minutes
  };

  // Handle shift drop (moving to different staff)
  const handleShiftDrop = (shift: Shift, newStaffId: string) => {
    if (shift.staffId === newStaffId) return;
    
    setShifts(shifts.map(s => 
      s.id === shift.id ? { ...s, staffId: newStaffId } : s
    ));
  };

  // Handle shift resize
  const handleShiftResize = (shift: Shift, newStartTime: string, newEndTime: string) => {
    setShifts(shifts.map(s => 
      s.id === shift.id ? { ...s, startTime: newStartTime, endTime: newEndTime } : s
    ));
  };

  // Check if a shift should be displayed in a specific hour cell
  const isShiftInHour = (shift: Shift, hour: number) => {
    const shiftStart = parseISO(shift.startTime);
    const shiftEnd = parseISO(shift.endTime);
    const hourStart = setMinutes(setHours(currentDate, hour), 0);
    const hourEnd = addHours(hourStart, 1);
    
    return isWithinInterval(shiftStart, { start: hourStart, end: hourEnd }) ||
           isWithinInterval(shiftEnd, { start: hourStart, end: hourEnd }) ||
           (shiftStart <= hourStart && shiftEnd >= hourEnd);
  };

  // Calculate shift width and position for a specific hour
  const getShiftPosition = (shift: Shift, hour: number) => {
    const shiftStart = parseISO(shift.startTime);
    const shiftEnd = parseISO(shift.endTime);
    const hourStart = setMinutes(setHours(currentDate, hour), 0);
    const hourEnd = addHours(hourStart, 1);

    if (shiftStart >= hourEnd || shiftEnd <= hourStart) {
      return { width: '0%', left: '0%' };
    }

    const cellStart = Math.max(shiftStart.getTime(), hourStart.getTime());
    const cellEnd = Math.min(shiftEnd.getTime(), hourEnd.getTime());
    const duration = cellEnd - cellStart;
    const hourDuration = hourEnd.getTime() - hourStart.getTime();
    const widthPercent = (duration / hourDuration) * 100;

    let leftPercent = 0;
    if (shiftStart < hourStart) {
      leftPercent = 0;
    } else {
      const offset = shiftStart.getTime() - hourStart.getTime();
      leftPercent = (offset / hourDuration) * 100;
    }

    return {
      width: `${widthPercent}%`,
      left: `${leftPercent}%`,
    };
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col h-screen">
        <h1 className="text-xl font-bold p-4">Daily Staff Rota</h1>
        <div className="flex-1 overflow-auto" ref={containerRef}>
          <div className="inline-block min-w-full">
            {/* Header row with time slots */}
            <div className="flex border-b sticky top-0 bg-white z-10">
              <div className="w-48 border-r"></div> {/* Empty cell for staff names */}
              {timeSlots.map((slot) => (
                <div key={slot.hour} className="flex-1 min-w-12 border-r text-center py-2">
                  {slot.label}
                </div>
              ))}
            </div>

            {/* Staff rows */}
            {staff.map((person) => (
              <div key={person.id} className="flex border-b">
                {/* Staff name column */}
                <div className="w-48 border-r p-2 sticky left-0 bg-white z-10">
                  <div className="font-medium">{person.name}</div>
                  <div className="text-xs text-gray-500">{person.role}</div>
                </div>

                {/* Time slots for this staff member */}
                {timeSlots.map((slot) => {
                  const hourShifts = shifts.filter(
                    s => s.staffId === person.id && isShiftInHour(s, slot.hour)
                  );

                  return (
                    <div key={slot.hour} className="flex-1 min-w-12 border-r relative h-8">
                      {hourShifts.map((shift) => {
                        const position = getShiftPosition(shift, slot.hour);
                        return (
                          <div
                            key={shift.id}
                            className="absolute top-0 h-full"
                            style={{
                              left: position.left,
                              width: position.width,
                            }}
                          >
                            <ShiftItem
                              shift={shift}
                              onDrop={handleShiftDrop}
                              onResize={handleShiftResize}
                            />
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            ))}

            {/* Current time indicator */}
            <div
              className="absolute top-0 h-full w-0.5 bg-red-500 z-20 pointer-events-none"
              style={{
                left: `${(getCurrentTimePosition() / (24 * 60)) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
      {/* <ReactTooltip id="shift-tooltip" effect="solid" /> */}
    </DndProvider>
  );
};

export default StaffRota;