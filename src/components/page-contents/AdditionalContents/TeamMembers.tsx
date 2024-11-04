import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Hash } from "lucide-react";

const teamMembers = [
  { name: 'Md Tashfiqul Islam', id: '161 1593 042', avatar: 'tashfiq.png' },
  { name: 'Tashin Mahmud Khan', id: '201 1819 042', avatar: 'tashin.png' },
  { name: 'Amir Hamja Marjan', id: '202 1171 642', avatar: 'amir.png' },
  { name: 'Md Simul Hossain', id: '171 1949 642', avatar: 'simul.png' },
];

export default function TeamMembers() {
  return (
    <Card className="overflow-hidden bg-white/10 dark:bg-gray-800/10 backdrop-filter backdrop-blur-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <CardHeader className="bg-gradient-to-r from-[#348f50] to-[#56b4d3] text-white">
        <CardTitle className="text-2xl font-bold">Group Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="flex flex-wrap gap-4 pt-4">
          <Badge variant="secondary" className="flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100">
            <BookOpen className="h-4 w-4" />
            <span>CSE 499B.16</span>
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100">
            <Users className="h-4 w-4" />
            <span>Senior Design II</span>
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100">
            <Hash className="h-4 w-4" />
            <span>Group 01</span>
          </Badge>
        </div>
        <div className="space-y-5">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex items-center gap-5 bg-emerald-50 dark:bg-emerald-900/20 backdrop-filter backdrop-blur-sm p-4 rounded-lg shadow-md">
              <Avatar className="h-16 w-16 ring-2 ring-[#348f50] dark:ring-[#56b4d3] ring-offset-2 ring-offset-background">
                <Image
                  src={`/images/${member.avatar}`}
                  alt={member.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-lg text-black dark:text-white">{member.name}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{member.id}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
