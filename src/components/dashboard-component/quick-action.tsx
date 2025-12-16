import { Button } from "@/components/ui/button"
import { Plus, Upload, Wand2 } from "lucide-react"

export function QuickActions() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="sm">
        <Upload className="w-4 h-4 mr-2" />
        Upload Media
      </Button>
      <Button variant="outline" size="sm">
        <Wand2 className="w-4 h-4 mr-2" />
        AI Assistant
      </Button>
      <Button size="sm">
        <Plus className="w-4 h-4 mr-2" />
        Create Post
      </Button>
    </div>
  )
}
