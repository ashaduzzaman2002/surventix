
import React from 'react';
import {
  Link2,
  ShieldCheck,
  Key,
  MapPin,
  AlertTriangle,
  HelpCircle,
  FileInput,
  CheckCircle,
  ScanLine,
  ClipboardCheck,
} from 'lucide-react';

import TimelineItem from './TimelineItem';

const surveyStages = [
  {
    icon: <Link2 className="h-6 w-6" />,
    title: "Access Survey",
    description: "Participants begin the survey process by accessing the provided link or platform for entry.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Provide Consent",
    description: "Respondents must read and agree to terms, confirming willingness to participate in the survey process.",
  },
  {
    icon: <Key className="h-6 w-6" />,
    title: "Verification & HASH Key",
    description: "Distill verifies user legitimacy; a unique HASH KEY ensures secure and authenticated survey entry.",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Location & System Tracking",
    description: "System captures location, IP address, and device details to prevent fraud and ensure data integrity.",
  },
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: "Fraud Profiling & Dedupe",
    description: "Tools assess responses for suspicious patterns, duplicate entries, and signs of fraudulent activity.",
  },
  {
    icon: <HelpCircle className="h-6 w-6" />,
    title: "Red Herring Questions",
    description: "Intentional trick questions validate attentiveness, helping identify inattentive or dishonest survey takers.",
  },
  {
    icon: <FileInput className="h-6 w-6" />,
    title: "Survey Entry",
    description: "Once verified, respondent officially begins answering survey questions based on their knowledge or experience.",
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Complete Survey",
    description: "Participant provides responses to all questions, reaching the end of the survey questionnaire.",
  },
  {
    icon: <ScanLine className="h-6 w-6" />,
    title: "Exit HASH Key Verification",
    description: "System checks exit HASH KEY to ensure survey was completed by the original, verified respondent.",
  },
  {
    icon: <ClipboardCheck className="h-6 w-6" />,
    title: "Survey Complete",
    description: "Survey process is successfully concluded, and participant's data is securely stored for analysis.",
  },
];
const SecurityFlowChart = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-12 text-primary capitalize">Security Flow Chart</h1>
      <div className="relative">
        {surveyStages.map((stage, index) => (
          <TimelineItem
            key={index}
            icon={stage.icon}
            title={stage.title}
            description={stage.description}
            isLast={index === surveyStages.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default SecurityFlowChart;
