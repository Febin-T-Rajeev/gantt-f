"use client"

import React, { useEffect } from 'react';
import './styles.css';

// Rest of the component code remains the same


interface TimeChunk {
  start: string;
  end: string;
}

interface GanttData {
  date: string;
  time_chunks: TimeChunk[];
}

interface GanttChartProps {
  data: GanttData[];
}

const GanttChart: React.FC<GanttChartProps> = ({ data }) => {
  useEffect(() => {
    const ganttRowsContainer = document.getElementById('gantt-rows');
    const tooltip = document.getElementById('tooltip');

    if (!ganttRowsContainer || !tooltip) return;

    data.forEach(entry => {
      const row = document.createElement('div');
      row.classList.add('gantt-row');

      const dateCell = document.createElement('div');
      dateCell.classList.add('gantt-date');
      dateCell.textContent = formatDate(entry.date);
      row.appendChild(dateCell);

      const barsCell = document.createElement('div');
      barsCell.classList.add('gantt-bars');

      entry.time_chunks.forEach(chunk => {
        const bar = document.createElement('div');
        bar.classList.add('gantt-bar');
        const startPercent = calculatePercent(chunk.start);
        const endPercent = calculatePercent(chunk.end);
        bar.style.left = `${startPercent}%`;
        bar.style.width = `${endPercent - startPercent}%`;

        // Add tooltip on hover
        bar.addEventListener('mouseover', (event) => {
          const tooltipContent = `${chunk.start} - ${chunk.end}`;
          tooltip.textContent = tooltipContent;
          tooltip.style.display = 'block';
          tooltip.style.left = `${event.pageX}px`;
          tooltip.style.top = `${event.pageY - 30}px`; // Adjust the tooltip position as needed
        });

        bar.addEventListener('mouseout', () => {
          tooltip.style.display = 'none';
        });

        barsCell.appendChild(bar);
      });

      row.appendChild(barsCell);

      const summaryCell = document.createElement('div');
      summaryCell.classList.add('gantt-summary');
      summaryCell.textContent = calculateSummary(entry.time_chunks);
      row.appendChild(summaryCell);

      ganttRowsContainer.appendChild(row);
    });

    function calculatePercent(time: string) {
      const [hours, minutes] = time.split(':').map(Number);
      const totalMinutes = hours * 60 + minutes;
      const totalDayMinutes = 24 * 60; // Total minutes in a day
      return (totalMinutes / totalDayMinutes) * 100;
    }

    function formatDate(dateString: string) {
      const date = new Date(dateString);
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      };
      return date.toLocaleDateString(undefined, options);
    }

    function calculateSummary(timeChunks: TimeChunk[]) {
      let totalWorkingMinutes = 0;
      let totalBreakMinutes = 0;

      timeChunks.forEach((chunk, index) => {
        const [startHour, startMinute] = chunk.start.split(':').map(Number);
        const [endHour, endMinute] = chunk.end.split(':').map(Number);
        totalWorkingMinutes += (endHour * 60 + endMinute) - (startHour * 60 + startMinute);

        if (index < timeChunks.length - 1) {
          const [nextStartHour, nextStartMinute] = timeChunks[index + 1].start.split(':').map(Number);
          totalBreakMinutes += (nextStartHour * 60 + nextStartMinute) - (endHour * 60 + endMinute);
        }
      });

      return `${formatTime(totalWorkingMinutes)} / ${formatTime(totalBreakMinutes)}`;
    }

    function formatTime(totalMinutes: number) {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    }
  }, [data]);

  return (
    <div className="gantt-chart">
      <div className="gantt-header">
        <div className="gantt-date"></div>
        <div className="gantt-time">5</div>
        <div className="gantt-time">9</div>
        <div className="gantt-time">13</div>
        <div className="gantt-time">17</div>
        <div className="gantt-time">21</div>
        <div className="gantt-time">1</div>
        <div className="gantt-summary">Working / Break</div>
      </div>
      <div id="gantt-rows"></div>
      <div id="tooltip" className="tooltip"></div>
    </div>
  );
};

export default GanttChart;
