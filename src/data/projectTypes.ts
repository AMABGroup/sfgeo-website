/**
 * One list for both enquiry forms (the home-hero quote card, every quote
 * modal, and the /contact form) so a lead is labelled the same way wherever
 * it comes from. The two inspection/assessment entries exist because the
 * construction-phase-support and assessments pages send builders here and
 * "Other" was the only fit.
 */
export const PROJECT_TYPES = [
  "New home",
  "Knockdown rebuild",
  "Extension or addition",
  "Granny flat",
  "In-ground pool",
  "Retaining wall",
  "Footing, pier or pile inspection",
  "Cracking, slope or settlement assessment",
  "Commercial or multi-residential",
  "B2B subcontract drilling",
  "Design parameters for engineers",
  "Environmental sampling",
  "Concrete coring",
  "Other",
] as const;

export const START_DATES = [
  "Within 2 weeks",
  "2–4 weeks",
  "1–3 months",
  "More than 3 months",
  "Not sure yet",
] as const;
