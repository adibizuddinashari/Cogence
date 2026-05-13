import { cn } from "@/lib/utils"

function Card({ className, ...props }) {
  return (
    <div
      className={cn("rounded-2xl border border-border/70 bg-card text-card-foreground shadow-sm", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }) {
  return <div className={cn("p-6", className)} {...props} />
}

export { Card, CardContent }
