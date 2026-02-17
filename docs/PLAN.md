# PLAN: B.L.A.S.T. Reboot & Bio-Digital Integration (Option C)

## 🎯 Objective
Realign the project with the **B.L.A.S.T. Protocol**, integrating the new **Bio-Digital Visual Identity** (Teal/Nude) with a robust **Data Layer** (JSON Mocks) and stabilizing the codebase.

## 🛠️ Agents & Roles
| Agent | Role | Focus |
| :--- | :--- | :--- |
| **Project Planner** | Architect | Define Data Schema & Integration Strategy. |
| **Backend Specialist** | Data Layer | Create `data/*.json`, mock API routes, and Zod validations. |
| **Frontend Specialist** | UI Integration | Connect UI to Data, implement Bio-Digital Images (Placeholders). |
| **Test Engineer** | Stabilization | Fix lint/build errors, verify accessibility. |

## 📅 Roadmap

### Phase 1: Data Architecture (Backend Specialist)
1.  **Schema Definition**:
    -   `data/treatments.json`: ID, Title, Description, Duration, Price (Range), Category, Bio-Digital Icon.
    -   `data/doctors.json`: ID, Name, CRO, Bio, Specialties, PhotoURL.
2.  **Mock API**:
    -   `app/api/treatments/route.ts`: GET endpoint.
    -   `app/api/booking/route.ts`: POST endpoint (with Zod validation).

### Phase 2: Frontend Integration (Frontend Specialist)
1.  **Bio-Digital Images**:
    -   Implement `next/image` placeholders with "Cutout" style CSS classes (`rounded-blob`, `drop-shadow-xl`).
    -   Update `HeroVideoMask` to consume dynamic content (if applicable).
2.  **Data Binding**:
    -   Refactor `TreatmentGrid` to fetch from `api/treatments` (or direct import) instead of hardcoded data.
    -   Refactor `BookingForm` to submit to `api/booking` and handle success/error states.

### Phase 3: Stabilization (Test Engineer)
1.  **Lint Fixes**: Resolve `any` types and unused variables.
2.  **Build Verification**: Ensure `npm run build` passes.
3.  **Accessibility**: Verify color contrast for the new Teal/Peach palette.

### Phase 4: Premium UI Polish (Frontend Specialist)
1.  **Remove Emojis**: Replace all Unicode emojis (✨, 🦷, 🚗) with `lucide-react` icons for a cleaner, premium look.
2.  **Typography Check**: Ensure `Playfair Display` is used consistently for headings.

### Phase 7: Kids Section (Bio-Digital Adaptation)
1.  **Concept**: "Odontopediatria Lúdica" - adapting the playful reference to the Teal/Peach palette.
2.  **Component**: `components/KidsSection.tsx`.
3.  **Layout**:
    -   **Left**: Headline ("Sorrisos Brilhantes"), Text (Humanized/Gentle), CTA ("Agendar Consultinha").
    -   **Right**: Organic Blobs (Peach/Teal), 3 Circular Images (Placeholders/Generated), Floating Icons.
### Phase 8: Hero Redesign (Traditional Elegance - Option C)
1.  **Concept**: "The Atelier" - Premium, classic, focusing on the art of dentistry.
2.  **Asset**: Use `public/sorriso.png` (High-end close-up).
3.  **Layout**:
    -   **Typography**: Serif (Playfair Display) prioritized. Gold/Bronze/Peach accents.
    -   **Visuals**: Clean, "magazine cover" aesthetic. Remove "Bio-Digital" noise/scan effects.
    -   **Mask**: Preserve the Organic Wave SVG.
4.  **Refinement**: Ensure the "Premium" feel comes from whitespace and typography, not tech effects.

## 📝 Data Schemas (Draft)

### Treatment
```typescript
interface Treatment {
  id: string;
  title: string;
  description: string;
  category: "Estética" | "Implantes" | "Ortodontia" | "Preventiva";
  durationMinutes: number;
  priceRange: string; // e.g. "R$ 500 - R$ 1000"
  imageUrl?: string;
}
```

### Doctor
```typescript
interface Doctor {
  id: string;
  name: string;
  cro: string;
  specialties: string[];
  bio: string;
  photoUrl: string;
}
```

## ❓ Approval Required
-   **Data Structure**: Are the proposed JSON fields sufficient?
-   **Image Strategy**: Use placeholders for now (Next.js default) until real images are provided?
