import React from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronDown, ChevronRight, PenLine, FileText } from "lucide-react"
import { categories } from "../../../lib/constants"

interface SidebarProps {
  isSidebarCollapsed: boolean
  expandedCategory: string | null
  handleEnterOwn: () => void
  handleSelectArticle: (category: string, article: string) => void
  toggleCategory: (category: string) => void
  toggleSidebar: () => void
}

export default function Sidebar({
  isSidebarCollapsed,
  expandedCategory,
  handleEnterOwn,
  handleSelectArticle,
  toggleCategory,
}: SidebarProps) {
  return (
    <div
      className={`border-r border-border transition-all duration-300 ease-in-out ${
        isSidebarCollapsed ? "w-16" : "w-80"
      }`}
    >
      <div className={`h-[60px] px-4 border-b border-border sticky top-0 bg-background z-10 flex items-center ${
        isSidebarCollapsed ? "justify-center" : "justify-start"
      }`}>
        <FileText className="h-5 w-5 flex-shrink-0" />
        <h2 className={`font-semibold whitespace-nowrap overflow-hidden transition-all duration-300 ${
          isSidebarCollapsed ? "w-0 opacity-0 ml-0" : "w-auto opacity-100 ml-2"
        }`}>
          Summary Generator
        </h2>
      </div>
      <ScrollArea className="h-[calc(600px-60px)]">
        <div className="p-4">
          <Button
            variant="outline"
            className={`w-full transition-none ${isSidebarCollapsed ? "px-0 justify-center" : "justify-start"}`}
            onClick={handleEnterOwn}
          >
            <PenLine className={`h-4 w-4 transition-none ${isSidebarCollapsed ? "mx-0" : "mr-2"}`} />
            <span className={`transition-none ${
              isSidebarCollapsed ? "hidden" : "inline"
            }`}>
              Enter your own
            </span>
          </Button>
          {categories.map((category) => (
            <div key={category.name} className="mb-4 mt-4">
              <Button
                variant="ghost"
                className={`w-full transition-none ${isSidebarCollapsed ? "px-0 justify-center" : "justify-start"}`}
                onClick={() => toggleCategory(category.name)}
              >
                <category.icon className={`h-4 w-4 transition-none ${isSidebarCollapsed ? "mx-0" : "mr-2"}`} />
                <span className={`flex items-center transition-none ${
                  isSidebarCollapsed ? "hidden" : "inline"
                }`}>
                  {category.name}
                  {expandedCategory === category.name ? (
                    <ChevronDown className="ml-auto h-4 w-4" />
                  ) : (
                    <ChevronRight className="ml-auto h-4 w-4" />
                  )}
                </span>
              </Button>
              {!isSidebarCollapsed && expandedCategory === category.name && (
                <div className="ml-6 mt-2">
                  {category.articles.map((article) => (
                    <Button
                      key={article.title}
                      variant="ghost"
                      className="w-full justify-start py-1 text-sm"
                      onClick={() => handleSelectArticle(category.name, article.title)}
                    >
                      {article.title}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
