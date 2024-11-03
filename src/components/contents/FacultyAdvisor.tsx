import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function FacultyAdvisor() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Faculty Advisor</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-4">
        <Avatar className="h-24 w-24"> {/* Increased size to make avatar larger */}
          <AvatarImage src="/images/nafisa.jpg" alt="Dr. Nafisa Noor (NaN)" />
          <AvatarFallback>NN</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-lg">Dr. Nafisa Noor</h3>
          <p className="text-sm text-muted-foreground">Assistant Professor</p>
          <p className="text-sm text-muted-foreground">Department of Electrical and Computer Engineering (ECE)</p>
          <p className="text-sm text-muted-foreground">North South University</p>
        </div>
      </CardContent>
    </Card>
  );
}
