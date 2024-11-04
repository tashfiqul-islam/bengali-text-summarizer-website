import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, UserCheck, Building, MapPin, NotebookPen } from "lucide-react";

export default function FacultyAdvisor() {
  return (
    <Card className="overflow-hidden bg-white/10 dark:bg-gray-800/10 backdrop-filter backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59] opacity-90"></div>
        <CardHeader className="relative z-10">
          <CardTitle className="flex items-center gap-2 text-white">
            <UserCheck className="h-6 w-6" />
            <span className="text-2xl font-bold">Faculty Advisor</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 pt-6 pb-8">
          <Avatar className="h-32 w-32 ring-4 ring-white dark:ring-gray-800 shadow-lg">
            <AvatarImage src="/images/nafisa.jpg" alt="Dr. Nafisa Noor (NaN)" />
            <AvatarFallback>NN</AvatarFallback>
          </Avatar>
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-bold text-2xl text-white">Dr. Nafisa Noor</h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-white/90">
                <GraduationCap className="h-5 w-5" />
                <span>Assistant Professor</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/90">
                <MapPin className="h-5 w-5" />
                <span>North South University</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
              <Badge variant="secondary" className="bg-white/20 text-white flex items-center gap-1 px-3 py-1">
                <NotebookPen className="h-4 w-4" />
                CSE499B.16
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white flex items-center gap-1 px-3 py-1">
                <Building className="h-4 w-4" />
                ECE Department
              </Badge>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
