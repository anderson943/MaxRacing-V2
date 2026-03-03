

# Update: 24-Click to 20-Click Adjustability

A simple find-and-replace across the site to correct the adjustability spec from 24 to 20 clicks.

---

## Files to Update

### 1. `src/components/home/ValuePillars.tsx`
- Change title from "24-Level Adjustability" to "20-Level Adjustability"
- Update description: "24 precision clicks" → "20 precision clicks"

### 2. `src/components/home/ComparisonTable.tsx`
- Change "24 clicks" → "20 clicks" in the MaxRacing column

### 3. `src/pages/Engineering.tsx`
- Change title from "24-Click Adjustability" to "20-Click Adjustability"
- Update content: "24-position precision adjuster" → "20-position precision adjuster"
- Adjust click ranges: Low (1-6), Medium (7-13), High (14-20) instead of the current 1-8 / 9-16 / 17-24

### 4. Any other references
- Quick search across all files for any remaining "24" references related to adjustability to ensure nothing is missed.

---

All changes are text-only — no structural or layout modifications needed.

