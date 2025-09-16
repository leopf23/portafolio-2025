// Atomic Design - Main Export
// Organized component exports following atomic methodology

// 🔬 ATOMS - Basic building blocks
export * from "./atoms"

// 🧬 MOLECULES - Simple combinations of atoms  
export * from "./molecules"

// 🦠 ORGANISMS - Complex sections with multiple molecules/atoms
export * from "./organisms"

// 📋 LEGACY EXPORTS - For backward compatibility
// These will be moved to their proper atomic levels gradually
export { EntriesTable } from "./EntriesTable"
export { QuotaRequestModule } from "./QuotaRequestModule"
export { ScheduleValidationSection } from "./ScheduleValidationSection"
export { ScheduleValidationCard } from "./ScheduleValidationCard"
export { SubjectValidationCard } from "./SubjectValidationCard"
export { SubjectValidationList } from "./SubjectValidationList"
export { StudentSearch } from "./StudentSearch"
export { SummaryCards } from "./SummaryCards"
export { Portfolio } from "./Portfolio"