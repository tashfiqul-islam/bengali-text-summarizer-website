import ArticleHub from '@/components/page-contents/SummaryGenerator/SummaryGenerator'
import FacultyAdvisor from '@/components/page-contents/AdditionalContents/FacultyAdvisor'
import TeamMembers from '@/components/page-contents/AdditionalContents/TeamMembers'
import ProjectOverview from '@/components/page-contents/AdditionalContents/ProjectOverview'
import SummaryGenerator from '@/components/page-contents/SummaryGenerator/SummaryGenerator'

export default function Home() {
  return (
    <main className="flex-1 container mx-auto px-4 py-2">
      <SummaryGenerator />

      <div className="grid md:grid-cols-[2fr_1fr] gap-8 mt-12">
        <div className="space-y-8">
          <ProjectOverview />
          <FacultyAdvisor />
        </div>

        <TeamMembers />
      </div>
    </main>
  )
}
