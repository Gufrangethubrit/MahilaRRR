# Founder's Desk Edits — `src/routes/index.tsx`

## 1. Simplify quote text (line ~288)

**Before:**
```tsx
<p className="relative text-[16px] sm:text-[17px] leading-[1.85] text-text font-medium italic">
```

**After:**
```tsx
<p className="relative text-[16px] sm:text-[17px] leading-[1.85] text-text-2">
```

## 2. Remove stats grid (lines ~294–305)

Delete this entire block:
```tsx
<div className="mt-7 grid sm:grid-cols-3 gap-4">
  {[
    { num: "25+", label: "Years of Service" },
    { num: "25K+", label: "Lives Touched" },
    { num: "500+", label: "Villages Reached" },
  ].map((s) => (
    <div key={s.label} className="card-soft p-4 text-center hover-lift">
      <div className="text-orange font-extrabold text-[24px] font-display">{s.num}</div>
      <div className="text-text-2 text-[12px] mt-0.5">{s.label}</div>
    </div>
  ))}
</div>
```

## 3. Remove signature (lines ~306–311)

Delete this entire block:
```tsx
<div className="mt-6 flex items-center gap-4">
  <svg viewBox="0 0 200 60" className="h-12 text-navy" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 40 Q 30 10 50 35 T 90 30 Q 110 50 130 25 T 180 35" />
  </svg>
  <div className="text-[13px] text-text-2">Signature</div>
</div>
```
