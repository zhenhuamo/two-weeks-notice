// components/ui/alert.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'destructive'
}

interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "relative w-full rounded-lg border p-4",
          variant === "destructive" && "border-red-500 text-red-600",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

const AlertDescription = React.forwardRef<HTMLParagraphElement, AlertDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("text-sm", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Alert.displayName = "Alert"
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertDescription }