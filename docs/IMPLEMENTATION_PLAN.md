# Implementation Plan — Event Planning & Management App

Source: `docs/Event Planning & Management App.md` (PRD, 42 sections)

Principle: **One place to plan, coordinate, pay for, and track an event from request to completion.**

## Phase 0 — Project Setup
Goal: Runnable skeleton + GitHub workflow.
Outputs:
- Monorepo initialized (`web/`, `api/`, `db/`), `.gitignore`, README
- Dev / staging / prod envs, CI (lint + test + build on push to `main`)
- Auth provider chosen, DB migrations framework ready
Accept: Fresh clone → `install + dev` runs, CI green on `Qubators-App-2`.

## Phase 1 — Identity, Roles & Catalog Foundation
PRD: §6, §7, §9.1, §10, §33, §34
Outputs:
- Tables: `users, roles (customer, admin, vendor), event_categories (8), service_categories (16), packages, package_services`
- APIs: signup/login/profile, CRUD for categories/services/packages (admin-only write)
- UI: Auth, Profile + My Events, Public package browse (name, type, description, included services, starting price, size, customization options)
Accept: Customer creates account; Admin can add/disable category/service/package; Packages show as starting prices only.

## Phase 2 — Customer Event Request
PRD: §11, §12, §13, §14
Outputs:
- Tables: `events, event_services, event_requirements (dynamic Q&A)`
- Flow A: Custom request (type, date, location, guests, budget exact/range, services, description) → progressive questions per service
- Flow B: Package select → add/remove services → submit customized requirements
- UI: 3-step wizard + Review screen with status `Request Submitted`
Accept: PRD §39 Event Request + Package criteria met.

## Phase 3 — Admin Planning, Quotation & Negotiation
PRD: §15, §16, §17, §18
Outputs:
- Tables: `quotations, quotation_items, quotation_events (Draft → Sent → Under Review → Changes Requested → Accepted → Payment Pending → Confirmed → Completed), messages`
- Admin UI: request queue, clarify/recommend/remove services, estimate costs, itemized quotation (items + planning fee + discounts + total)
- Customer UI: view itemized quotation, Accept / Request Changes / Decline / Ask Question
Accept: PRD §39 Quotation criteria. Rule 3: final price only via quotation.

## Phase 4 — Payment & Confirmation
PRD: §19, §20. Rule 2 (customer pays platform only).
Outputs:
- Tables: `payments, payment_schedules`
- Integration: Paystack/Flutterwave (NGN), webhooks
- Logic: Accepted → deposit required → Confirmed → balance schedule → vendor settlement (manual in MVP)
- UI: Pay page, Event Summary, payment history
Accept: PRD §39 Payment criteria.

## Phase 5 — Preparation Tracking, Changes, Communication
PRD: §21, §22, §26, §27, §28, §29
Outputs:
- Tables: `milestones, tasks, change_requests, notifications`
- Customer dashboard: info + financials + services/vendors + milestones + % complete (computed from milestones)
- Admin event detail: requirements, services, vendors, payments, tasks/deadlines, notes
- Change flow: request → admin review → price/schedule impact → updated quotation if needed
- Notifications: request submitted, quotation ready/changed, payment confirmed/upcoming, vendor confirmed, milestones
- Messaging: customer ↔ admin only for MVP
Accept: Customer sees checklist (§21); Admin can update milestones; Changes require admin review (Rule 4).

## Phase 6 — Vendor Directory & Workflow
PRD: §23, §24, §25
Outputs:
- Tables: `vendors, vendor_services, assignments`
- Admin: add/approve/suspend/assign/remove, filter by location/availability/price/performance
- Vendor portal (simple): register/profile, view assignment, accept/decline, confirm availability, update progress, confirm completion
- Customer sees assigned vendors only after confirmed
Accept: Admin assigns by §24 factors; vendor completes 7-step workflow (§25).

## Phase 7 — Completion, Reviews, Dashboards
PRD: §30, §31, §32
Outputs:
- Flow: Admin marks Completed → Customer confirms → rate (overall/professionalism/quality/timeliness/communication) → feedback. Reviews only post-completion, admin moderation.
- Admin dashboard: new requests, awaiting quotations, pending approvals, upcoming/in-prep, outstanding payments, assignments needing attention, completed, revenue. Filter by status/type.
- Success metrics logging (§41)
Accept: PRD §39 Completion + Event Management criteria.

## Phase 8 — MVP Hardening & Launch
PRD: §38, §39, §40
Outputs:
- Enforce Rules 1,5,6: platform-central coordination, no direct customer-vendor pay/chat
- Validate end-to-end scenario §40 (250-guest Jos wedding, ₦3M budget → ₦3.2M quote → revised → deposit → tracking)
- Security, RBAC tests, payment webhook retries, backup, analytics
Explicitly OUT (§37): auto-matching, public marketplace, bidding, loyalty, AI planning, ticketing/RSVP/seating/invitations, subscriptions.

Build order: 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8. Each phase demoable. Phases 2-4 prove willingness to pay; don't start 6 until 3-4 work.
