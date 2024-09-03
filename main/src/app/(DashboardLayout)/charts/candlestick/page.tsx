"use client"

import dynamic from "next/dynamic";
import { useTheme } from '@mui/material/styles';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import ParentCard from '@/app/(DashboardLayout)/components/shared/ParentCard';
import React from "react";

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Work Hour Tracking Chart',
  },
];

const WorkHourTrackingChart = () => {

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

 

  

  return (
    <></>
  );
};

export default WorkHourTrackingChart;
