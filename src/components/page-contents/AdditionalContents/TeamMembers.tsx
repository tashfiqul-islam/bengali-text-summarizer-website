'use client';

import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Hash } from "lucide-react";
import imageLoader from '@/lib/imageLoader';

const teamMembers = [
  { name: 'Md Tashfiqul Islam', id: '161 1593 042', image: '/images/team/tashfiq.png', initial: 'M' },
  { name: 'Tashin Mahmud Khan', id: '201 1819 042', image: '/images/team/tashin.png', initial: 'T' },
  { name: 'Amir Hamja Marjan', id: '202 1171 642', image: '/images/team/amir.png', initial: 'A' },
  { name: 'Md Simul Hossain', id: '171 1949 642', image: '/images/team/simul.png', initial: 'M' },
];

export default function TeamMembers() {
  return (
    <Card className="overflow-hidden bg-card text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-[637px]">
      <CardHeader className="bg-gradient-to-r from-[#348f50] to-[#56b4d3] p-6">
        <CardTitle className="text-2xl font-bold text-white">Group Overview</CardTitle>
      </CardHeader>

      <CardContent className="p-5 space-y-4">
        <div className="flex flex-wrap gap-2">
          {['CSE 499B.16', 'Senior Design II', 'Group 01'].map((item, index) => (
            <div key={item} className="bg-secondary text-secondary-foreground rounded-full px-3 py-1.5 flex items-center gap-2 hover:bg-secondary/80 transition-colors">
              {index === 0 && <BookOpen className="h-4 w-4" />}
              {index === 1 && <Users className="h-4 w-4" />}
              {index === 2 && <Hash className="h-4 w-4" />}
              <span className="text-xs">{item}</span>
            </div>
          ))}
        </div>

        <div className="space-y-5">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-accent/50 dark:bg-accent/20 rounded-lg p-5 flex items-center gap-5 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-x-1 dark:shadow-none dark:hover:shadow-md"
            >
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full ring-2 ring-primary overflow-hidden">
                  <Image
                    loader={imageLoader}
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.id}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
