import HeroSection from '@/components/contents/HeroSection'
import FacultyAdvisor from '@/components/contents/FacultyAdvisor'
import TeamMembers from '@/components/contents/TeamMembers'
import ProjectOverview from '@/components/contents/ProjectOverview'

export default function Home() {
  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <HeroSection />
      
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
