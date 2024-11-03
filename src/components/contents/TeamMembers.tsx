import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  { name: 'Md Tashfiqul Islam', id: '161 1593 042', avatar: 'tashfiq.png' },
  { name: 'Tashin Mahmud Khan', id: '201 1819 042', avatar: 'tashin.png' },
  { name: 'Amir Hamja Marjan', id: '202 1171 642', avatar: 'amir.png' },
  { name: 'Md Simul Hossain', id: '171 1949 642', avatar: 'simul.png' },
];

export default function TeamMembers() {
  return (
    <Card>
      <CardHeader className="space-y-5">
        <CardTitle>Group Overview</CardTitle>
        <div>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><span className="font-medium">Course ID:</span> CSE 499B.16</li>
            <li><span className="font-medium">Course Name:</span> Senior Design II</li>
            <li><span className="font-medium">Group Number:</span> 01</li>
          </ul>
        </div>
      </CardHeader>
      <CardContent className="pt-1">
        <div className="space-y-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex items-center gap-5">
              <Avatar className="h-16 w-16"> {/* Adjusted size */}
                <AvatarImage src={`/images/${member.avatar}`} alt={member.name} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-lg">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.id}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
