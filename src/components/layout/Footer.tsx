/**
 * Footer component displaying copyright information and version number.
 * Designed to stay at the bottom of the content area.
 */
export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 px-2 py-2 mt-auto backdrop-blur-sm">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Bengali Text Summarizer | v0.0.1
      </div>
    </footer>
  )
}
