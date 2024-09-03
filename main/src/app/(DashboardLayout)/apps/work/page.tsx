"use client"

import React from 'react';
import GanttChart from './GanttChart'; // Assuming GanttChart.tsx is in the same directory
import './styles.css'; // Import your CSS file
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ParentCard from '@/app/(DashboardLayout)/components/shared/ParentCard';



const ScheduleTable: React.FC = () => {
  const data = [
    {
      "date": "2024-07-04",
      "time_chunks": [
        { "start": "09:00", "end": "10:00" },
        { "start": "10:30", "end": "13:00" },
        { "start": "14:00", "end": "16:30" },
        { "start": "17:00", "end": "18:30" }
      
      ]
    },
    {
      "date": "2024-07-05",
      "time_chunks": [
        { "start": "08:00", "end": "19:00" },
       
      ]
    },
    {
      "date": "2024-07-06",
      "time_chunks": [
        { "start": "09:00", "end": "11:00" },
        { "start": "11:30", "end": "13:30" },
      
        { "start": "15:30", "end": "21:00" }
      ]
    },
    {
      "date": "2024-07-07",
      "time_chunks": [
        { "start": "09:00", "end": "11:00" },
        { "start": "11:30", "end": "13:30" },
        { "start": "14:00", "end": "16:00" },
        { "start": "16:30", "end": "21:30" }
      ]
    },
    {
      "date": "2024-07-08",
      "time_chunks": [
        { "start": "07:36", "end": "13:00" },
        { "start": "16:30", "end": "17:30" },
        { "start": "19:00", "end": "21:00" },
       
      ]
    },
  ];

  return (
    <><PageContainer title="Work Hour Tracking Chart" description="This is a work hour tracking chart">
      {/* breadcrumb */}
      {/* end breadcrumb */}
      <ParentCard title="Work Hour Tracking Chart">
      <div>
        <GanttChart data={data} />
        {/* Additional content or components can be added here */}
      </div>
      </ParentCard>
    </PageContainer>
   </>
  );
};

export default ScheduleTable;
