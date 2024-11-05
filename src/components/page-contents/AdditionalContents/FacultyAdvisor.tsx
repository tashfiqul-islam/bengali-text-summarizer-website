'use client';

import Image from 'next/image';
import { Card } from "@/components/ui/card";
import { UserCircle2, GraduationCap, MapPin, NotebookPen, Building } from "lucide-react";

export default function FacultyAdvisor() {
  return (
    <Card className="overflow-hidden bg-card text-card-foreground shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] h-[250px]">
      <div className="bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59] p-6 h-full">
        <div className="flex items-center gap-2 text-white mb-4">
          <UserCircle2 className="h-6 w-6" />
          <span className="text-2xl font-semibold">Faculty Advisor</span>
        </div>

        <div className="flex items-start gap-6">
          <div className="relative w-24 h-24 flex-shrink-0">
            <div className="absolute inset-0 rounded-full ring-4 ring-white/20 overflow-hidden shadow-md">
              <Image
                src="/images/faculty/nafisa.jpg"
                alt="Dr. Nafisa Noor"
                fill
                sizes="96px"
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </div>

          <div className="flex flex-col text-white">
            <h2 className="text-2xl font-bold mb-2">Dr. Nafisa Noor</h2>

            <div className="flex flex-col gap-2 mb-3">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                <span>Assistant Professor</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>North South University</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="bg-white/20 rounded-full px-3 py-1.5 flex items-center gap-2 hover:bg-white/30 transition-colors shadow-sm">
                <NotebookPen className="h-4 w-4" />
                <span className="text-sm">CSE499B.16</span>
              </div>
              <div className="bg-white/20 rounded-full px-3 py-1.5 flex items-center gap-2 hover:bg-white/30 transition-colors shadow-sm">
                <Building className="h-4 w-4" />
                <span className="text-sm">ECE Department</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
