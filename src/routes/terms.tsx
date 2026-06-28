import { createFileRoute } from "@tanstack/react-router";
import LegalPage from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Mahila Chetna Samiti" },
      { name: "description", content: "Read the terms and conditions for using the Mahila Chetna Samiti website and donation services." },
      { property: "og:title", content: "Terms & Conditions — Mahila Chetna Samiti" },
      { property: "og:description", content: "Our website usage and donation terms." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      crumbLabel="Terms & Conditions"
      description="Please read these terms carefully before using our website, services or making a contribution to Mahila Chetna Samiti."
      updated="01 January 2026"
      sections={[
        {
          title: "Acceptance of Terms",
          body: (
            <>
              <p>By accessing or using the website of Mahila Chetna Samiti ("we", "us", "our"), you agree to be bound by these Terms & Conditions. If you do not agree, please discontinue use of the site.</p>
              <p>We reserve the right to update or modify these terms at any time without prior notice. Continued use of the site after changes are posted constitutes your acceptance of the revised terms.</p>
            </>
          ),
        },
        {
          title: "Use of the Website",
          body: (
            <>
              <p>You agree to use this website only for lawful purposes and in a manner consistent with the mission of Mahila Chetna Samiti. You will not:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Misuse, hack or disrupt the website or its services.</li>
                <li>Upload or transmit any harmful, defamatory or illegal content.</li>
                <li>Impersonate any person or entity, including the organisation.</li>
                <li>Attempt to gain unauthorized access to our systems or data.</li>
              </ul>
            </>
          ),
        },
        {
          title: "Donations",
          body: (
            <>
              <p>All donations made through our website or offline are voluntary and used solely to further the charitable objectives of Mahila Chetna Samiti.</p>
              <p>Donations are non-refundable once successfully processed, except as outlined in our Refund Policy. Donors will receive an 80G tax-exemption receipt upon successful contribution.</p>
            </>
          ),
        },
        {
          title: "Intellectual Property",
          body: (
            <>
              <p>All content on this website — including text, graphics, logos, images and videos — is the property of Mahila Chetna Samiti or its licensors and is protected by applicable Indian and international intellectual property laws.</p>
              <p>You may not reproduce, distribute, modify or publicly display any content without prior written consent.</p>
            </>
          ),
        },
        {
          title: "Limitation of Liability",
          body: (
            <>
              <p>Mahila Chetna Samiti shall not be liable for any direct, indirect, incidental or consequential damages arising out of your use of, or inability to use, the website or our services.</p>
              <p>We do not warrant uninterrupted, error-free or fully secure operation of the website.</p>
            </>
          ),
        },
        {
          title: "Third-Party Links",
          body: <p>Our website may include links to external websites for your convenience. We are not responsible for the content, accuracy or privacy practices of these third-party sites.</p>,
        },
        {
          title: "Governing Law",
          body: <p>These terms are governed by the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts in Lucknow, Uttar Pradesh.</p>,
        },
        {
          title: "Contact",
          body: <p>For any questions or concerns regarding these Terms & Conditions, please email us at <a className="text-orange font-semibold" href="mailto:info@mahilachetnasamiti.org">info@mahilachetnasamiti.org</a> or call +91 73733 00737.</p>,
        },
      ]}
    />
  );
}
