# **Product Requirements Document (PRD)**

## **Event Planning & Management App**

### **1\. Product Overview**

The Event Planning & Management App is a platform that helps individuals, families, organizations, churches, businesses, and other groups plan and manage events.

Customers can explore ready-made event packages or submit customized event requests. They can select services, provide their event requirements and budget, receive quotations, make payments, and track event preparation.

The platform's admin team manages the planning process, including event requests, quotations, vendors, payments, schedules, and event progress.

The business generates revenue through planning fees, vendor commissions, and margins on event packages.

---

# **2\. Product Vision**

To make event planning easier by giving customers one place to **request, plan, price, pay for, and track an event**, while allowing the business to coordinate the vendors and services required to deliver the event.

---

# **3\. Target Users**

### **Primary Users**

#### **Individual Customers**

People planning:

* Weddings  
* Birthdays  
* Naming ceremonies  
* Funeral/burial events  
* Religious events  
* Other personal events

#### **Organizational Customers**

Organizations planning:

* Conferences  
* Corporate events  
* Meetings and gatherings  
* Religious events  
* Other organizational events

### **Secondary Users**

#### **Event Vendors**

Businesses and individuals providing services such as:

* Catering  
* Decoration  
* Photography  
* Videography  
* Venue  
* DJ/music  
* MC services  
* Security  
* Event rentals  
* Sound and lighting  
* Cake  
* Transportation  
* Other event services

#### **Admin/Event Managers**

The platform's internal team responsible for coordinating customers, quotations, vendors, payments, and event delivery.

---

# **4\. Problem Statement**

Planning an event often requires coordinating several independent services and vendors.

Customers may struggle with:

* Finding suitable vendors  
* Comparing services  
* Staying within budget  
* Knowing what services they need  
* Negotiating prices  
* Coordinating multiple vendors  
* Tracking preparation  
* Knowing what has been completed  
* Managing payments  
* Communicating changes

The platform addresses these problems by providing a centralized event planning and management experience.

---

# **5\. Product Goals**

The product should enable customers to:

1. Discover event packages.  
2. Create customized event requests.  
3. Select the services they need.  
4. Set an event budget.  
5. Receive a structured quotation.  
6. Request changes to the quotation.  
7. Approve an event plan.  
8. Make payments.  
9. Track preparation.  
10. Communicate important updates.  
11. Review the completed event.

The product should enable the admin to:

1. Manage event requests.  
2. Create event plans.  
3. Prepare quotations.  
4. Negotiate prices.  
5. Manage vendors.  
6. Assign vendors to events.  
7. Track event tasks.  
8. Monitor payments.  
9. Manage customer changes.  
10. Track overall event progress.

---

# **6\. Event Categories**

The initial product will support eight event categories:

1. Wedding  
2. Birthday  
3. Naming Ceremony  
4. Funeral/Burial  
5. Conference  
6. Corporate Event  
7. Religious Event  
8. Other

The admin should be able to add, disable, or modify event categories as the business grows.

---

# **7\. Service Categories**

The initial platform will support:

1. Venue  
2. Catering  
3. Drinks  
4. Decoration  
5. Photography  
6. Videography  
7. DJ/Music  
8. MC/Host  
9. Ushers  
10. Security  
11. Event Rentals  
12. Sound & Lighting  
13. Cake  
14. Transportation  
15. Event Planning/Coordination  
16. Other

The admin should be able to enable or disable services.

---

# **8\. Core Customer Journey**

The primary customer journey should be:

**Discover → Select/Create Event → Customize → Submit Request → Review → Quotation → Changes/Negotiation → Approval → Payment → Preparation → Event → Completion → Review**

---

# **9\. Customer Features**

## **9.1 Account Creation**

Customers should be able to create an account and provide basic information such as:

* Name  
* Phone number  
* Email  
* Location

Customers should be able to manage their profile and view their previous and current events.

---

# **10\. Explore Event Packages**

Customers should be able to browse available packages.

Each package should contain:

* Package name  
* Event type  
* Description  
* Included services  
* Starting price or estimated price  
* Suitable event size  
* Available customization options

Examples:

* Basic Wedding Package  
* Premium Wedding Package  
* Birthday Package  
* Corporate Conference Package  
* Naming Ceremony Package

Packages should be presented as **starting options rather than guaranteed final prices**.

---

# **11\. Package Customization**

Customers should be able to customize packages.

For example:

**Wedding Package**

Included:

* Venue  
* Catering  
* Decoration  
* Photography  
* DJ

Customer can:

* Remove DJ  
* Add videography  
* Change catering requirements  
* Add transportation  
* Request additional services

Significant modifications should be reviewed by the admin before the final quotation is issued.

### **Acceptance Criteria**

* Customer can select a package.  
* Customer can view included services.  
* Customer can add available services.  
* Customer can remove eligible services.  
* Customer can submit customized requirements.  
* Customized packages are sent to the admin for review.  
* Customer receives a final quotation after review.

---

# **12\. Custom Event Request**

Customers who do not want an existing package can create a custom event.

The initial request should collect basic information:

* Event type  
* Event date  
* Event location  
* Expected number of guests  
* Budget  
* Required services  
* Basic description

The platform should then ask additional questions based on the customer's event and selected services.

For example:

If the customer selects **Catering**, additional information may include:

* Number of guests  
* Food preferences  
* Meal requirements  
* Special dietary requirements

If the customer selects **Venue**, additional information may include:

* Preferred venue/location  
* Indoor or outdoor preference  
* Expected capacity  
* Venue requirements

This is the **progressive request approach**.

---

# **13\. Budget Management**

Customers should be able to provide either:

### **Exact Budget**

Example:

> ₦2,000,000

### **Budget Range**

Example:

> ₦1,000,000 – ₦2,000,000

The budget should be treated as the customer's **planning budget**, not a guaranteed final price.

The final amount is determined through the quotation process.

---

# **14\. Event Request Review**

After submitting an event request, the customer should see a confirmation containing:

* Event type  
* Date  
* Location  
* Guest estimate  
* Budget  
* Selected services  
* Additional requirements  
* Request status

Initial status:

**Request Submitted**

The admin then reviews the request.

---

# **15\. Admin Event Planning**

The admin should be able to:

* Review the customer's requirements.  
* Ask for clarification.  
* Recommend additional services.  
* Remove unsuitable services.  
* Select suitable vendors.  
* Estimate costs.  
* Negotiate vendor prices.  
* Create an event plan.  
* Prepare the quotation.  
* Update the customer when necessary.

The admin should have the ability to communicate with the customer during the planning process.

---

# **16\. Quotation System**

The platform should use an **itemized quotation with a clear total price**.

Example:

| Item | Amount |
| ----- | ----- |
| Venue | ₦700,000 |
| Catering | ₦1,000,000 |
| Decoration | ₦500,000 |
| Photography | ₦300,000 |
| Planning Fee | ₦150,000 |
| **Total** | **₦2,650,000** |

The customer should be able to view:

* Individual service costs  
* Planning fee  
* Discounts, where applicable  
* Additional charges  
* Total amount  
* Payment requirements

---

# **17\. Quotation Actions**

Customers should be able to:

### **Accept**

Accept the quotation and proceed to payment.

### **Request Changes**

Ask the admin to modify the quotation.

### **Decline**

Decline the quotation.

### **Ask a Question**

Contact the admin for clarification.

Quotation statuses should include:

**Draft → Sent → Under Review → Changes Requested → Accepted → Payment Pending → Confirmed → Completed**

---

# **18\. Negotiation**

Negotiation should be supported through the admin rather than allowing unrestricted customer-to-vendor negotiation during the MVP.

For example:

Customer:

> "My budget is ₦2 million. Can we reduce the package?"

Admin:

> Reviews services and vendor costs.

Admin proposes:

> Remove videography and adjust decoration → New total ₦2.1 million.

Customer can then accept or request another change.

This keeps the customer experience centralized and allows the business to protect its margins.

---

# **19\. Payment**

The customer should pay the platform rather than paying individual vendors directly.

Recommended payment structure:

**Quotation accepted → Customer pays required deposit → Event becomes confirmed → Remaining balance paid according to agreed schedule → Platform settles vendors**

The exact deposit requirement can vary according to the event or package.

Customers should be able to see:

* Total event cost  
* Amount paid  
* Amount remaining  
* Payment due dates  
* Payment history

---

# **20\. Event Confirmation**

An event becomes **Confirmed** after the required initial payment has been successfully made.

The customer should then receive a clear event summary:

* Event name  
* Event type  
* Date  
* Location  
* Guest count  
* Approved services  
* Assigned vendors  
* Total cost  
* Amount paid  
* Outstanding balance  
* Preparation status

---

# **21\. Event Preparation Tracking**

Customers should be able to monitor preparation through clear milestones.

Example:

**Event Preparation**

* ✓ Event request received  
* ✓ Event plan approved  
* ✓ Venue confirmed  
* ✓ Caterer confirmed  
* ✓ Decorator confirmed  
* ✓ Photographer confirmed  
* ◉ Final preparations  
* ○ Event day  
* ○ Completed

The purpose is to give the customer confidence that the event is progressing.

---

# **22\. Admin Event Progress**

The admin should have a complete view of each event.

The admin should be able to track:

* Customer requirements  
* Approved services  
* Vendors  
* Vendor assignments  
* Payments  
* Outstanding balance  
* Tasks  
* Deadlines  
* Preparation status  
* Customer requests  
* Changes  
* Important notes

---

# **23\. Vendor Management**

The platform should maintain a vendor directory.

Vendor information should include:

* Business/person name  
* Service categories  
* Location/service area  
* Contact information  
* Services offered  
* Pricing information  
* Availability  
* Verification status  
* Customer ratings  
* Event history

The admin should be able to:

* Add vendors  
* Approve vendors  
* Suspend vendors  
* Assign vendors  
* Remove vendors from assignments  
* Review vendor performance  
* Manage vendor commissions

---

# **24\. Vendor Assignment**

The admin should select vendors based on factors such as:

* Service required  
* Event location  
* Availability  
* Price  
* Customer requirements  
* Previous performance  
* Ratings  
* Vendor capacity

The customer should be able to see the vendors assigned to their event once the relevant assignment is confirmed.

---

# **25\. Vendor Workflow**

A vendor assigned to an event should be able to:

1. Receive assignment.  
2. Review event details.  
3. Accept or decline the assignment.  
4. Confirm availability.  
5. Complete assigned preparation tasks.  
6. Provide progress updates.  
7. Confirm completion of their service.

The admin remains responsible for overall event coordination.

---

# **26\. Event Changes**

Customers may request changes after an event has been confirmed.

Examples:

* Add another service.  
* Increase guest count.  
* Change venue.  
* Change catering requirements.  
* Add additional equipment.

The admin should review the requested change and determine whether it affects:

* Price  
* Schedule  
* Vendor assignment  
* Event plan

If the price changes, the customer should receive an updated quotation for approval.

---

# **27\. Notifications**

Customers should receive important notifications about:

* Request submission  
* Quotation availability  
* Quotation changes  
* Payment confirmation  
* Upcoming payment  
* Vendor confirmation  
* Event preparation milestones  
* Important event updates  
* Event completion

Notifications should focus on important actions rather than generating unnecessary messages.

---

# **28\. Customer Communication**

Customers should have a way to communicate with the event management team.

Communication should support:

* Questions  
* Clarifications  
* Change requests  
* Planning discussions  
* Important event updates

For the MVP, communication should primarily be **customer ↔ admin**, rather than unrestricted customer ↔ vendor communication.

---

# **29\. Event Dashboard**

Each customer should have an event dashboard showing:

### **Event Information**

* Event type  
* Date  
* Location  
* Guest count

### **Financial Information**

* Total cost  
* Amount paid  
* Balance  
* Payment status

### **Planning**

* Selected services  
* Assigned vendors  
* Event milestones  
* Outstanding actions

### **Status**

Example:

**Planning — 65% Complete**

The percentage should be based on completed event milestones rather than simply giving an arbitrary number.

---

# **30\. Event Completion**

After the event, the admin should mark the event as completed.

The customer can then:

* View final event information.  
* Confirm completion.  
* Rate vendors/services.  
* Provide feedback.  
* View payment history.

---

# **31\. Ratings and Reviews**

Customers should be able to rate completed services.

Ratings can cover:

* Overall service  
* Vendor professionalism  
* Quality  
* Timeliness  
* Communication

Reviews should only be available after the relevant event/service has been completed.

The admin should be able to moderate inappropriate reviews.

---

# **32\. Admin Dashboard**

The admin dashboard should provide a summary of:

* New event requests  
* Events awaiting quotations  
* Pending customer approvals  
* Upcoming events  
* Events currently being prepared  
* Outstanding payments  
* Vendor assignments  
* Events requiring attention  
* Completed events  
* Revenue

The admin should be able to filter events by status and event type.

---

# **33\. Package Management**

Admin should be able to:

* Create packages  
* Edit packages  
* Disable packages  
* Set included services  
* Set package descriptions  
* Set starting prices  
* Add package-specific requirements  
* Control which packages are displayed to customers

---

# **34\. Service Management**

Admin should be able to:

* Add services  
* Edit services  
* Disable services  
* Categorize services  
* Control which services customers can request

---

# **35\. Pricing and Business Model**

The platform will generate revenue through three primary sources.

### **1\. Planning Fees**

A fee charged for organizing and coordinating an event.

### **2\. Vendor Commissions**

The platform receives an agreed commission from vendors for services obtained through the platform.

### **3\. Package Margins**

The platform can purchase or negotiate services at a particular cost and sell a bundled package at a higher price.

The quotation should allow the business to account for these revenue components.

---

# **36\. MVP Definition**

The MVP should focus on proving that customers are willing to use the platform to organize real events.

### **MVP Customer Features**

The MVP should include:

* Account creation  
* Event category selection  
* Package browsing  
* Package customization  
* Custom event requests  
* Progressive event questions  
* Budget selection  
* Service selection  
* Event request tracking  
* Quotation viewing  
* Quotation acceptance  
* Quotation change requests  
* Payment  
* Event preparation tracking  
* Customer/admin communication  
* Event completion  
* Ratings and reviews

### **MVP Admin Features**

* Customer management  
* Event request management  
* Event planning  
* Package management  
* Service management  
* Vendor management  
* Vendor assignment  
* Quotation creation  
* Quotation negotiation  
* Payment tracking  
* Event progress tracking  
* Customer communication  
* Event completion  
* Review management

### **MVP Vendor Features**

Keep the vendor experience relatively simple initially:

* Vendor registration  
* Vendor profile  
* Services offered  
* Assignment notification  
* Assignment acceptance/rejection  
* Event details  
* Task/progress updates  
* Completion confirmation

---

# **37\. Features Deliberately Outside the Initial MVP**

The following can be introduced later:

* Fully automated vendor matching  
* Public vendor marketplace  
* Advanced vendor bidding  
* Customer-to-vendor direct messaging  
* Complex loyalty programmes  
* AI event planning  
* Automated event budgeting  
* Advanced analytics  
* Vendor subscription plans  
* Premium customer memberships  
* Multi-event organizational management  
* Event insurance  
* Ticketing  
* Guest invitation management  
* Guest RSVP management  
* Seating plans  
* Digital wedding invitations  
* Live event-day coordination features

These features can be considered after the core planning and management workflow has been validated.

---

# **38\. Important Product Rules**

### **Rule 1 — The Platform Controls the Planning Process**

The platform should remain the central coordinator rather than simply connecting customers and vendors.

### **Rule 2 — Customer Pays the Platform**

Customers should not need to make multiple independent payments to several vendors.

### **Rule 3 — Final Price Requires Approval**

Package prices can be starting prices. The final event price comes through the quotation process.

### **Rule 4 — Major Changes Require Review**

Customers can request changes, but significant changes should be reviewed by the admin.

### **Rule 5 — Vendors Are Coordinated Through the Platform**

The admin manages vendor assignments and overall delivery.

### **Rule 6 — Event Progress Must Be Visible**

Customers should always have a clear understanding of where their event stands.

---

# **39\. Key Acceptance Criteria**

The MVP should be considered successful from a product perspective when:

### **Event Request**

* A customer can create an event request.  
* The customer can select an event category.  
* The customer can select services.  
* The customer can provide a budget.  
* The customer can provide event details.  
* The customer can submit the request successfully.

### **Package**

* Customer can browse packages.  
* Customer can view package contents.  
* Customer can customize eligible packages.  
* Customized packages can be submitted for admin review.

### **Quotation**

* Admin can create a quotation.  
* Customer can view the quotation.  
* Customer can see the total price.  
* Customer can see itemized costs.  
* Customer can request changes.  
* Customer can accept or decline the quotation.

### **Payment**

* Customer can see the amount required.  
* Customer can make the required payment.  
* Payment status is reflected in the event.  
* The event moves toward confirmation after the required payment is received.

### **Event Management**

* Admin can assign vendors.  
* Admin can track preparation.  
* Customer can see event progress.  
* Admin can update event milestones.  
* Customer receives important event updates.

### **Completion**

* Admin can mark an event as completed.  
* Customer can confirm completion.  
* Customer can rate and review services.

---

# **40\. Example End-to-End Scenario**

### **Customer**

A customer wants to organize a wedding for 250 guests.

They enter:

**Event:** Wedding  
**Date:** December 12  
**Location:** Jos  
**Guests:** 250  
**Budget:** ₦3,000,000

They select:

* Venue  
* Catering  
* Decoration  
* Photography  
* Videography  
* DJ

They can either submit the custom request or start from a wedding package and customize it.

### **Admin**

The admin reviews the request and contacts appropriate vendors.

The admin prepares:

| Service | Cost |
| ----- | ----- |
| Venue | ₦700,000 |
| Catering | ₦1,000,000 |
| Decoration | ₦600,000 |
| Photography | ₦250,000 |
| Videography | ₦300,000 |
| DJ | ₦150,000 |
| Planning Fee | ₦200,000 |
| **Total** | **₦3,200,000** |

The customer requests a reduction because the budget is ₦3 million.

The admin adjusts the package and sends a revised quotation.

The customer accepts and pays the required deposit.

The event becomes confirmed.

The customer then sees:

**Event Preparation:**

✓ Planning approved  
✓ Venue confirmed  
✓ Caterer confirmed  
✓ Photographer confirmed  
◉ Decoration preparation  
○ Final preparations  
○ Event day  
○ Completed

After the wedding, the admin marks the event completed and the customer can review the services.

---

# **41\. Success Measures**

The product should ultimately measure whether it is successfully helping people organize events.

Important measures include:

* Number of event requests  
* Number of quotations issued  
* Percentage of quotations accepted  
* Number of confirmed events  
* Average event value  
* Average planning fee  
* Vendor commission revenue  
* Package margin  
* Payment completion rate  
* Event completion rate  
* Customer repeat usage  
* Customer ratings  
* Customer satisfaction  
* Vendor performance  
* Number of cancelled events

---

# **42\. Future Product Direction**

Once the core event-planning workflow is proven, the platform can evolve from an **event planning service** into a broader **event ecosystem**.

Potential future areas include:

* Vendor marketplace  
* Event ticketing  
* Guest management  
* RSVP  
* Invitations  
* Seating arrangements  
* Event budgeting  
* Event-day coordination  
* Corporate event management  
* Vendor subscriptions  
* Premium planning services  
* Event analytics  
* Event insurance  
* Digital event invitations  
* Event livestreaming

The central product principle should remain:

> **One place to plan, coordinate, pay for, and track an event from request to completion.**

---

# **43. Technical Decision Note (2026-09-27)**

**Decision (by Gee01):**
- Framework: Next.js + TypeScript
- Database: Postgres (local install)
- Authentication: Better Auth
- File storage: Local disk `uploads/`
- App & DB run locally for now. Repo is public: `https://github.com/Gee01/Qubators-App-2`

**Reason:**
- Next.js + TS: full-stack in one app (web + `app/api/`), runs locally on Node v24, easiest local dev.
- Postgres local: prod-like relational DB, works with Prisma ORM for type-safe migrations and easy move to hosted Postgres later.
- Better Auth: email + password locally with no cloud auth service, roles (`customer | admin | vendor`) stored in DB, TypeScript-first with plugins for future needs. Keeps secrets out of the public repo and demo recordings.
- Local disk `uploads/`: gitignored folder abstracted via `storage.ts` so we can swap to S3/Cloudinary later with no page churn and no bucket keys needed now.

