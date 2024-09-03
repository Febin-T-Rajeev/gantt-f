import React, { useEffect } from 'react';
import './styles.css';

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

    // Clear previous content
    ganttRowsContainer.innerHTML = '';

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
        const startPercent = calculateScalePercent(chunk.start);
        const endPercent = calculateScalePercent(chunk.end);
        bar.style.left = `${startPercent}%`;
        bar.style.width = `${endPercent - startPercent}%`;

        // Add tooltip on hover
        bar.addEventListener('mouseover', () => {
          tooltip.textContent = `${chunk.start} - ${chunk.end}`;
          tooltip.classList.add('show');
        });

        bar.addEventListener('mousemove', (event) => {
          tooltip.style.left = `${event.pageX}px`;
          tooltip.style.top = `${event.pageY - 35}px`; // Adjust the tooltip position as needed
        });

        bar.addEventListener('mouseout', () => {
          tooltip.classList.remove('show');
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

    function calculateScalePercent(time: string) {
      const timeScale = [
        { start: 5 * 60, end: 9 * 60 },          // 5:00 to 8:59
        { start: 9 * 60, end: 13 * 60 },         // 9:00 to 12:59
        { start: 13 * 60, end: 17 * 60 },        // 13:00 to 16:59
        { start: 17 * 60, end: 21 * 60 },        // 17:00 to 20:59
        { start: 21 * 60, end: 25 * 60 },        // 21:00 to 0:59 (consider 25:00 for next day 1:00)
        { start: 1 * 60, end: 5 * 60 }           // 1:00 to 4:59
      ];

      const [hours, minutes] = time.split(':').map(Number);
      const totalMinutes = hours * 60 + minutes;

      for (let i = 0; i < timeScale.length; i++) {
        const { start, end } = timeScale[i];

        // Handle the case for the interval that wraps around midnight
        if (i === 4 && totalMinutes < 60) {
          const startPercent = ((totalMinutes - 1 * 60) * 100) / 240;
          return startPercent;
        }

        if (totalMinutes >= start && totalMinutes < end) {
          const startPercent = (i * 100) / 6;
          const scaleRange = end - start;
          const timePosition = totalMinutes - start;
          return startPercent + (timePosition * 100) / (scaleRange * 6);
        }
      }

      // Default to 0 if not found (shouldn't happen)
      return 0;
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
        <div className="gantt-time"><b>5</b></div>
        <div className="gantt-time"><b>9</b></div>
        <div className="gantt-time"><b>13</b></div>
        <div className="gantt-time"><b>17</b></div>
        <div className="gantt-time"><b>21</b></div>
        <div className="gantt-time"><b>1</b></div>
        <div className="gantt-summary"><b>Working / Break</b></div>
      </div>
      <div id="gantt-rows"></div>
      <div id="tooltip" className="tooltip"></div>
    </div>
  );
};

export default GanttChart;
