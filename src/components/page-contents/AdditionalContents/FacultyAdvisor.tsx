'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, FileText, Building, Mail, ExternalLink } from "lucide-react";
import { motion } from 'framer-motion';

// Define advisor details with proper typing
interface AdvisorTag {
  text: string;
  icon: typeof FileText;
}

interface AdvisorDetails {
  name: string;
  position: string;
  university: string;
  email: string;
  image: string;
  tags: AdvisorTag[];
}

const advisorDetails: AdvisorDetails = {
  name: 'Dr. Nafisa Noor',
  position: 'Assistant Professor',
  university: 'North South University',
  email: 'nafisa.noor@northsouth.edu',
  image: '/images/faculty/nafisa.jpg',
  tags: [
    { text: 'CSE499B.16', icon: FileText },
    { text: 'ECE Department', icon: Building },
  ],
};

export default function FacultyAdvisor() {
  const [isClient, setIsClient] = useState(false);

  // Enable client-side features after initial render
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Memoize advisor details
  const memoizedAdvisorDetails = useMemo(() => advisorDetails, []);

  // Calculate card height (35% of 800px minus padding)
  const cardHeight = useMemo(() => {
    const totalHeight = 800;
    const padding = 16;
    return Math.floor((totalHeight - padding) * 0.35);
  }, []);

  return (
    <Card 
      className={`w-full h-[${cardHeight}px] overflow-hidden bg-gradient-to-br from-teal-50/50 to-blue-50/50 dark:from-teal-950/20 dark:to-blue-950/20 transition-all duration-300 ease-in-out hover:shadow-lg group`}
    >
      <CardContent className="p-6 flex flex-col h-full relative">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-2">
            <GraduationCap 
              className="h-6 w-6 text-teal-500 dark:text-teal-400 transition-transform group-hover:scale-110" 
              aria-hidden="true" 
            />
            <h2 className="text-xl font-bold text-teal-700 dark:text-teal-300">
              Faculty Advisor
            </h2>
          </div>
          <Badge 
            variant="secondary" 
            className="bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300"
          >
            Mentor
          </Badge>
        </div>

        {/* Main Content Section */}
        <div className="flex items-start gap-6 mb-6">
          <motion.div 
            className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-teal-200 dark:ring-teal-700 shrink-0"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {isClient ? (
              <Image
                src={memoizedAdvisorDetails.image}
                alt={memoizedAdvisorDetails.name}
                fill
                sizes="96px"
                className="object-cover"
                priority
              />
            ) : (
              <div 
                className="w-full h-full bg-teal-100 dark:bg-teal-800" 
                aria-label="Profile picture placeholder" 
              />
            )}
          </motion.div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
              {memoizedAdvisorDetails.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {memoizedAdvisorDetails.position}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {memoizedAdvisorDetails.university}
            </p>
            <a 
              href={`mailto:${memoizedAdvisorDetails.email}`} 
              className="flex items-center gap-2 text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {memoizedAdvisorDetails.email}
            </a>
          </div>
        </div>

        {/* Tags Section */}
        <div className="flex-grow">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Areas of Expertise
          </h4>
          <div className="flex flex-wrap gap-2">
            {memoizedAdvisorDetails.tags.map(({ text, icon: Icon }) => (
              <Badge 
                key={text} 
                variant="secondary"
                className="bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 transition-colors"
              >
                <Icon className="h-3 w-3 mr-1" aria-hidden="true" />
                {text}
              </Badge>
            ))}
          </div>
        </div>

        {/* Footer Link */}
        <motion.div 
          className="absolute bottom-6 right-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="#" 
            className="flex items-center gap-1 text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors group-hover:translate-x-1"
          >
            View Full Profile
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>
      </CardContent>
    </Card>
  );
}
