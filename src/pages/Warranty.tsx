import { useEffect } from "react";
import Layout from "@/components/layout/Layout";

const Warranty = () => {
  useEffect(() => {
    document.title = "MaxRacing 3-Year Limited Warranty";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Review the MaxRacing 3-year limited warranty policy, coverage details, eligibility requirements, and RMA process for steering dampers.");
  }, []);

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              MaxRacing — <span className="text-primary">3-Year Limited Warranty</span>
            </h1>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground font-body">
              <p><strong>Effective date:</strong> February 25, 2026</p>
              <p><strong>Last updated:</strong> February 25, 2026</p>
            </div>
            <p className="mt-6 text-lg text-foreground/80 font-body leading-relaxed">
              Applies to: MaxRacing steering dampers and model-specific mounting kits purchased from <strong>authorized dealers</strong> or <a href="https://maxracing.us" target="_blank" rel="noopener" className="text-primary hover:underline">maxracing.us</a>.
            </p>
          </div>

          <div className="space-y-12 font-body text-foreground/90 leading-relaxed">
            {/* Section 1 */}
            <div className="border-l-2 border-primary/20 pl-6">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">1) Coverage & Term</h2>
              <p className="mb-4">
                MaxRacing warrants that its products will be free from defects in materials and workmanship for <strong>three (3) years</strong> from the date of retail purchase by the <strong>original owner</strong>.
              </p>
              <div className="rounded-lg bg-card border border-border/50 p-4">
                <p><strong>Remedy:</strong> At MaxRacing’s option, we will repair the product, replace it with a new or refurbished equivalent, or provide equivalent parts needed for repair. This is your exclusive remedy under this warranty.</p>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">2) Eligibility</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>The product was purchased new from an <strong>authorized dealer listed on maxracing.us</strong> or from <a href="https://maxracing.us" target="_blank" rel="noopener" className="text-primary hover:underline">maxracing.us</a>.</li>
                <li>The product has a legible serial/lot number and proof of purchase (receipt/invoice).</li>
                <li>The product was installed correctly, with free lock-to-lock movement, and used per the included instructions.</li>
                <li><strong>Transferability:</strong> Non-transferable; coverage is for the original purchaser only.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">3) What’s Covered</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>Manufacturing defects in the damper body, piston/rod, adjuster mechanism, and CNC brackets.</li>
                <li>Defects in materials (e.g., abnormal porosity, machining faults) or assembly (e.g., internal mis-build).</li>
                <li>Premature seal failure due to a manufacturing defect (not caused by misuse, contamination, or misalignment).</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">4) What’s Not Covered (Exclusions)</h2>

              <div>
                <h3 className="text-lg font-bold text-primary mb-3 uppercase tracking-wider">Misuse / Abuse / Improper Handling</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li className="text-foreground">
                    <strong>Handlebars as a lever:</strong> Using the handlebars as a lever (e.g., lifting the front end, prying against the damper, or forcing steering while the wheel is tied down) can damage seals and cause oil leakage. <strong>Oil leaks resulting from this misuse are not covered.</strong>
                  </li>
                  <li>Impacts, crashes, drops, improper transport, or tie-down compression that forces the rod past normal travel.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary mb-3 uppercase tracking-wider">Improper Installation or Setup</h3>
                <p className="mb-2">Binding, misalignment, incorrect stroke selection, interference at full lock, wrong fasteners/torque, or third-party/unauthorized mounts that cause off-axis loading.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary mb-3 uppercase tracking-wider">Normal Wear & Tear</h3>
                <p className="mb-2">Cosmetic wear (anodize fade, minor scratches), consumables (O-rings/seals) after normal service life, and performance degradation due to age/contamination.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary mb-3 uppercase tracking-wider">Environmental / Chemical Damage</h3>
                <p className="mb-2">Corrosion from road salt/chemicals, immersion, excessive heat, or incompatible cleaners/solvents.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary mb-3 uppercase tracking-wider">Unauthorized Service / Modification</h3>
                <p className="mb-2">Opening the damper or altering components without MaxRacing authorization; use of non-genuine parts.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary mb-3 uppercase tracking-wider">Other</h3>
                <p>Lost/stolen items; freight damage after shipment; products with tampered/removed serials.</p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-muted/30 rounded-xl p-8 border border-border/50">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">5) Returns & Refunds</h2>
              <ul className="list-disc pl-6 space-y-3 font-medium">
                <li><strong>Refunds:</strong> Opened products are not eligible for refund.</li>
                <li><strong>Unopened returns:</strong> Unopened items may be returned within 30 days of delivery subject to our Return Merchandise Authorization (RMA) and inspection. Restocking fees may apply.</li>
                <li><strong>Warranty service:</strong> Warranty service is repair/replace only (no refunds on opened items).</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div id="rma-process">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">6) How to Make a Claim (Simple Portal)</h2>
              <p className="mb-6 font-body leading-relaxed">
                Whether you are in the USA or international, the process is simple. Contact MaxRacing through the <strong>Official Hauer Imports Warranty Portal</strong>, accessible via our Contact or FAQ pages.
              </p>
              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <div className="bg-card border border-border/50 p-6 rounded-lg text-center">
                  <p className="font-bold text-primary mb-2 uppercase tracking-widest text-xs">Primary Channel</p>
                  <a href="/contact" className="text-xl font-heading hover:underline">Hauer Warranty Portal</a>
                </div>
                <div className="bg-card border border-border/50 p-6 rounded-lg text-center">
                  <p className="font-bold text-primary mb-2 uppercase tracking-widest text-xs">Email Backup</p>
                  <a href="mailto:info@maxracing.us" className="text-xl font-heading hover:underline">info@maxracing.us</a>
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-bold">Required Information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your Name and Email address.</li>
                  <li>Order number or any information that helps us recognize your purchase.</li>
                  <li>A brief description of the issue.</li>
                </ul>
                <div className="mt-8 rounded-lg bg-primary/5 border border-primary/20 p-6">
                  <h3 className="font-heading text-lg font-bold text-primary mb-2">Fast Approval Timeline</h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">
                    Our team typically takes <strong>1–5 business days</strong> to approve a claim. Once approved, the replacement product is shipped out immediately.
                  </p>
                </div>

                <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                  <p><strong>Shipping requirement:</strong> If return inspection is required, you must ship your product using a tracked method. MaxRacing pays return shipping for approved claims.</p>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
              <h2 className="font-heading text-2xl font-bold text-primary mb-4">7) Technical Notes (to avoid denial)</h2>
              <ul className="list-disc pl-6 space-y-3 font-body">
                <li>After installation, verify free, non-binding movement lock-to-lock; adjust brackets/spacers as required.</li>
                <li><strong>Do not use the handlebars/damper as a lifting or prying point;</strong> support the bike correctly.</li>
                <li>Keep the rod clean; wipe away grit that can abrade seals.</li>
                <li>Re-check torque after the first rides and after tire/suspension changes.</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">8) Limitation of Liability</h2>
              <p className="text-muted-foreground italic">To the maximum extent permitted by law, MaxRacing is not liable for indirect, incidental, consequential, or special damages (including labor, downtime, or third-party parts). Liability is limited to the purchase price of the product.</p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">9) Implied Warranties & Local Rights</h2>
              <p>Any implied warranties (including merchantability/fitness) are limited to the three-year term. Some regions do not allow limitations or exclusions; in such cases this warranty gives you specific legal rights, and you may have other rights that vary by state/country.</p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">10) Documentation & Decision</h2>
              <p>We reserve the right to inspect, test, and determine whether a claim is covered under this warranty. Products replaced or repaired are covered for the remainder of the original term or 90 days from repair—whichever is longer.</p>
            </div>
          </div>

          <div className="mt-20 border-t border-border/50 pt-12 text-center text-sm text-muted-foreground">
            <p className="font-bold text-foreground uppercase tracking-widest mb-2">MAXRACING</p>
            <p className="mb-8">Race-grade hydraulic steering dampers. Precision-engineered for riders who demand control.</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 opacity-70 hover:opacity-100 transition-opacity">
              <a href="/fitment-guide" className="hover:text-primary">Fitment Guide</a>
              <a href="/engineering" className="hover:text-primary">Engineering</a>
              <a href="/about" className="hover:text-primary">About</a>
              <a href="/contact" className="hover:text-primary">Contact</a>
              <a href="/faq" className="hover:text-primary">FAQ</a>
            </div>
            <p className="mt-8">© 2026 MaxRacing. All rights reserved. Precision engineering, zero compromise.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Warranty;
