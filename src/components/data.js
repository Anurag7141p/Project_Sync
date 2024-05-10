import React from "react";
import { AiOutlineAudit } from "react-icons/ai";
import { FaFolderOpen, FaUserFriends } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GoShield } from "react-icons/go";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { LuMessageSquarePlus } from "react-icons/lu";
import { MdDashboard, MdOutlineStickyNote2 } from "react-icons/md";

const surveyData = [
  {
    job: "Project UI Design",
    rating: 4.0,
    date: "20 Nov 2023",
    company: "ThoughtRite Technologies",
    companyRating: "3/4",
    users: [
      {
        received: "25 Nov 2023",
        userRating: 2.0,
        userName: "David Smith",
      },
      {
        received: "25 Nov 2023",
        userRating: 4,
        userName: "David Smith",
      },
      {
        received: "25 Nov 2023",
        userRating: 1.5,
        userName: "David Smith",
      },
    ],
  },
  {
    job: "Project UI Design",
    rating: 4.5,
    date: "20 Nov 2023",
    company: "ThoughtRite Technologies",
    companyRating: "3/4",
    users: [
      {
        received: "25 Nov 2023",
        userRating: 4.5,
        userName: "David Smith",
      },
    ],
  },
  {
    job: "Project UI Design",
    rating: 1.5,
    date: "20 Nov 2023",
    company: "ThoughtRite Technologies",
    companyRating: "3/4",
    users: [
      {
        received: "25 Nov 2023",
        userRating: 4.5,
        userName: "David Smith",
      },
    ],
  },
  {
    job: "Project UI Design",
    rating: 4.0,
    date: "20 Nov 2023",
    company: "ThoughtRite Technologies",
    companyRating: "3/4",
    users: [
      {
        received: "25 Nov 2023",
        userRating: 4.5,
        userName: "David Smith",
      },
    ],
  },
  {
    job: "Project UI Design",
    rating: 4.0,
    date: "20 Nov 2023",
    company: "ThoughtRite Technologies",
    companyRating: "3/4",
    users: [
      {
        received: "25 Nov 2023",
        userRating: 4.5,
        userName: "David Smith",
      },
    ],
  },
];

const moreDetails = [
  {
    projectName: "Project ux design",
    code: "PRSYNC",
    accountName: "Thoughtrite Technologies",
    initiatedDate: "20 Nov 2023",
    sbu: "Testree",
    avgSurveyDetails: [
      { name: "average csat", rating: "4 / 5" },
      { name: "average nsp", rating: "8 / 10" },
      { name: "average details", rating: "4.5 / 5" },
      { name: "Average Tech Skill", rating: "4.5 / 5" },
      { name: "RCA status", rating: "5 / 25" },
    ],
    userData: [
      {
        received: "25 nov 2023",
        userName: "David Smith",
        gmail: "davidsmith@gmail.com",
        ratings: [
          {
            name: "Csat",
            rating: 4.0,
          },
          {
            name: "NPS - Passive",
            rating: 4.2,
          },
          {
            name: "Delivery",
            rating: 4.5,
          },
        ],
      },
    ],
    feedback: [
      {
        question: "How was your overall Experience with ThoughtRite Technologies?",
        answer:
          "ThoughtRite have revolutionized the way our company operates. We used to spend hours manually entering data and managing our systems, but now everything is automated and runs seamlessly. Thankyou for the excellent service and support",
      },
      {
        question: "How was your overall Experience with ThoughtRite Technologies?",
        answer:
          "ThoughtRite have revolutionized the way our company operates. We used to spend hours manually entering data and managing our systems, but now everything is automated and runs seamlessly. Thankyou for the excellent service and support",
      },
    ],
  },
];

const Menus = [
  {
    title: "Dashboard",
    icon: React.createElement(MdDashboard),
    options: ["hhahah"],
  },
  {
    title: "Project Management",
    icon: React.createElement(FaFolderOpen),
    options: [],
  },
  { title: "Risk Management", icon: React.createElement(GoShield), options: [] },
  {
    title: " User Management",
    icon: React.createElement(FaUserFriends),
    options: [],
  },
  {
    title: "Test Case Management ",
    icon: React.createElement(MdOutlineStickyNote2),
    options: [],
  },
  {
    title: " Audit Management",
    icon: React.createElement(AiOutlineAudit),
    options: [],
  },
  {
    title: "CSAT Management",
    icon: React.createElement(LuMessageSquarePlus),
    options: [
      "CSAT Dashboard",
      "Surveys",
      "Initiate Survey",
      "RCA",
      "Configuration",
    ],
  },
  {
    title: "Report",
    icon: React.createElement(HiOutlineDocumentReport),
    options: [],
  },
  { title: "Configuration ", icon: React.createElement(FiSettings), options: [] },
];

export { surveyData, moreDetails, Menus };
