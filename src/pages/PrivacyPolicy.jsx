/**
 * Privacy Policy (UK GDPR / Data Protection Act 2018 / PECR).
 *
 * The commitments below describe the site as it is actually built: no cookies,
 * no analytics, no tracking pixels, no forms. If tracking, a newsletter, a
 * contact form, or a direct checkout is ever added, the relevant sections here
 * must be updated before that change ships.
 */

const EFFECTIVE_DATE = '14 September 2026'

// Fill these in and they render automatically. Left blank, the corresponding
// line is omitted rather than showing a placeholder on the live page.
const COMPANY = {
  legalName: 'Deep Skin Lab Ltd',
  registeredOffice: 'London, United Kingdom',
  companyNumber: '', // e.g. '12345678' (Companies House)
  icoRegistration: '', // e.g. 'ZB123456' (ICO Data Protection Register)
  privacyEmail: 'deepskinlab@gmail.com',
}

function Section({ id, number, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 mt-12 md:mt-14 first:mt-0">
      <h2 className="font-serif text-[1.5rem] md:text-[1.75rem] font-semibold tracking-[0.01em] text-near-black">
        <span className="text-taupe mr-2.5 font-sans text-[0.95rem] font-medium align-middle">
          {number}
        </span>
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[0.95rem] md:text-[0.92rem] leading-relaxed text-near-black/70 font-light">
        {children}
      </div>
    </section>
  )
}

function Bullets({ items }) {
  return (
    <ul className="space-y-2.5 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span aria-hidden="true" className="text-taupe shrink-0 mt-[0.55em] w-1 h-1 rounded-full bg-taupe" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function PrivacyPolicy() {
  const contactLink = (
    <a
      href={`mailto:${COMPANY.privacyEmail}`}
      className="text-navy underline underline-offset-2 decoration-taupe hover:decoration-navy transition-colors"
    >
      {COMPANY.privacyEmail}
    </a>
  )

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="border-b border-taupe/15">
        <div className="max-w-3xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <a
            href="/"
            className="font-serif text-2xl md:text-[1.65rem] font-semibold tracking-[0.04em] text-near-black"
          >
            DEEP SKIN
          </a>
          <a
            href="/"
            className="text-[0.8rem] text-near-black/45 hover:text-near-black transition-colors"
          >
            Back to site
          </a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 md:px-10 py-12 md:py-20">
        <h1 className="font-serif text-[2.25rem] md:text-[3rem] leading-[1.1] font-semibold tracking-[0.01em] text-near-black">
          Privacy Policy
        </h1>
        <p className="mt-4 text-[0.85rem] text-near-black/45 font-light">
          Effective {EFFECTIVE_DATE}. Applies to deepskinlab.com.
        </p>

        {/* At a glance */}
        <div className="mt-9 md:mt-10 bg-cream-light border border-taupe/25 rounded-2xl p-6 md:p-7">
          <h2 className="font-serif text-[1.35rem] font-semibold text-near-black">
            The short version
          </h2>
          <p className="mt-3 text-[0.92rem] leading-relaxed text-near-black/70 font-light">
            This website is deliberately built to collect as little about you as
            possible. In plain terms:
          </p>
          <div className="mt-4 text-[0.92rem] leading-relaxed text-near-black/70 font-light">
            <Bullets
              items={[
                <>
                  <strong className="font-medium text-near-black/85">
                    We set no cookies.
                  </strong>{' '}
                  There is no consent banner because there is nothing to consent
                  to.
                </>,
                <>
                  <strong className="font-medium text-near-black/85">
                    We run no analytics and no advertising pixels.
                  </strong>{' '}
                  We do not know who you are, and we do not build a profile of
                  you.
                </>,
                <>
                  <strong className="font-medium text-near-black/85">
                    We never sell or rent your data.
                  </strong>{' '}
                  Not to anyone, for any price.
                </>,
                <>
                  <strong className="font-medium text-near-black/85">
                    We do not ask for health information,
                  </strong>{' '}
                  and you should not send us any.
                </>,
                <>
                  <strong className="font-medium text-near-black/85">
                    Purchases happen on Amazon, not here.
                  </strong>{' '}
                  Amazon handles that data under its own privacy notice.
                </>,
              ]}
            />
          </div>
          <p className="mt-5 text-[0.85rem] leading-relaxed text-near-black/50 font-light">
            The sections below set out the full detail, including the two things
            that do happen automatically when you load this page: our host keeps
            security logs, and our fonts are served by Google.
          </p>
        </div>

        <Section id="who-we-are" number="1" title="Who we are">
          <p>
            {COMPANY.legalName} (&ldquo;Deep Skin&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;) is the data controller for personal data collected
            through deepskinlab.com. A data controller is the organisation that
            decides why and how your personal data is used.
          </p>
          <div className="pt-1">
            <Bullets
              items={[
                <>Registered office: {COMPANY.registeredOffice}</>,
                ...(COMPANY.companyNumber
                  ? [<>Company number: {COMPANY.companyNumber}</>]
                  : []),
                ...(COMPANY.icoRegistration
                  ? [
                      <>
                        ICO Data Protection Register: {COMPANY.icoRegistration}
                      </>,
                    ]
                  : []),
                <>Privacy contact: {contactLink}</>,
              ]}
            />
          </div>
          <p>
            We are regulated by the UK Information Commissioner&rsquo;s Office
            (ICO) and handle personal data in line with the UK GDPR, the Data
            Protection Act 2018, and the Privacy and Electronic Communications
            Regulations (PECR).
          </p>
        </Section>

        <Section id="scope" number="2" title="What this policy covers">
          <p>
            This policy covers the website at deepskinlab.com and any email you
            send us. It does not cover:
          </p>
          <Bullets
            items={[
              <>
                <strong className="font-medium text-near-black/85">
                  Amazon.
                </strong>{' '}
                Our product is sold through Amazon. When you click through to buy,
                you leave this site and Amazon becomes the controller of your
                order, payment, and delivery data under its own privacy notice.
                We never see your payment details.
              </>,
              <>
                <strong className="font-medium text-near-black/85">
                  Other sites we link to.
                </strong>{' '}
                We are not responsible for their privacy practices.
              </>,
            ]}
          />
        </Section>

        <Section id="what-we-collect" number="3" title="What we collect">
          <p className="font-medium text-near-black/85">
            Information you choose to give us
          </p>
          <p>
            This site has no contact form, no newsletter sign-up, and no account
            system. The only way to give us personal data directly is to email
            us. If you do, we receive your email address, your name if you
            include it, and whatever you write in the message. We use it solely
            to answer you.
          </p>

          <p className="font-medium text-near-black/85 pt-2">
            Information collected automatically
          </p>
          <p>
            Our hosting provider records standard server logs when your browser
            requests a page. These are generated by the infrastructure, not by
            any tracking code we have added, and typically include:
          </p>
          <Bullets
            items={[
              'Your IP address',
              'The pages or files requested, and the date and time',
              'Your browser type, version, and operating system (the user agent)',
              'The referring page, if you arrived via a link',
            ]}
          />
          <p>
            We use these only to keep the site running, diagnose faults, and
            detect abuse such as denial of service attacks. We do not use them to
            identify individual visitors, and we do not combine them with any
            other data.
          </p>

          <p className="font-medium text-near-black/85 pt-2">
            Fonts served by Google
          </p>
          <p>
            This site loads its typefaces from Google Fonts. Because your browser
            fetches those files directly from Google&rsquo;s servers, Google
            receives your IP address and user agent as part of that request. This
            happens automatically when the page loads, before you interact with
            anything.
          </p>
          <p>
            We flag this because it is a genuine transfer of personal data to a
            third party, and most privacy policies quietly omit it. Google states
            it does not use Google Fonts requests to build advertising profiles.
            If you would rather avoid it, a browser extension that blocks
            third-party font requests will stop it, and the site will still work
            with fallback typefaces.
          </p>
        </Section>

        <Section id="no-tracking" number="4" title="Cookies and analytics">
          <p>
            <strong className="font-medium text-near-black/85">
              We set no cookies whatsoever.
            </strong>{' '}
            Not essential ones, not analytics ones, not advertising ones. We also
            use no local storage, session storage, advertising pixels or cross-site
            tracking.
          </p>
          <p>
            We use Vercel Web Analytics to understand aggregate page views,
            referrers, countries, browsers, operating systems and device types.
            Vercel states that this service stores anonymised, aggregated data,
            uses no cookies and does not identify or track visitors across days or
            across different websites.
          </p>
          <p>
            This measurement helps us understand which pages are useful and how
            the site performs. We do not send names, email addresses, scar details
            or other health information to Vercel Analytics.
          </p>
          <p>To be explicit about what we still do not run:</p>
          <Bullets
            items={[
              'Google Analytics or advertising analytics platforms',
              'Meta Pixel, TikTok Pixel, or any advertising or conversion tag',
              'Session recording, heatmaps, or scroll tracking',
              'Cross-site tracking, retargeting, or audience building',
              'Automated decision-making or profiling of any kind',
            ]}
          />
        </Section>

        <Section id="health-data" number="5" title="Health information">
          <p>
            Deep Skin sells a Class I medical device, so we want to be
            unambiguous here. Information about scars, surgery, injuries, or
            medical conditions is special category data under Article 9 of the UK
            GDPR and deserves particular care.
          </p>
          <p>
            <strong className="font-medium text-near-black/85">
              We do not collect health data through this website.
            </strong>{' '}
            We do not ask about your medical history, your scars, or your
            treatment. Nothing on this site invites you to disclose it.
          </p>
          <p>
            Please do not send us health details by email. If you do, we will use
            them only to reply to you, keep them no longer than needed to resolve
            your enquiry, and delete them afterwards. For medical advice about
            your scar, speak to your GP, surgeon, or pharmacist rather than to
            us.
          </p>
        </Section>

        <Section id="legal-bases" number="6" title="Our legal bases">
          <p>
            UK GDPR requires a lawful basis for each use of personal data. Ours
            are:
          </p>
          <Bullets
            items={[
              <>
                <strong className="font-medium text-near-black/85">
                  Legitimate interests (Article 6(1)(f))
                </strong>{' '}
                for server logs, to keep the site secure, available, and free
                from abuse. We have considered your rights and consider this
                minimal, expected, and low risk. It is the ordinary operation of
                a web server, not surveillance.
              </>,
              <>
                <strong className="font-medium text-near-black/85">
                  Legitimate interests (Article 6(1)(f))
                </strong>{' '}
                for replying to an email you send us, since you contacted us and
                would reasonably expect a response.
              </>,
              <>
                <strong className="font-medium text-near-black/85">
                  Legal obligation (Article 6(1)(c))
                </strong>{' '}
                where we must keep or disclose records to comply with the law, or
                to meet our product safety and vigilance duties as a medical
                device distributor.
              </>,
            ]}
          />
          <p>
            You can object to any processing based on legitimate interests. See
            your rights below.
          </p>
        </Section>

        <Section id="sharing" number="7" title="Who we share data with">
          <p>
            We do not sell, rent, or trade personal data. We share it only with
            the service providers needed to run the site, and only to the extent
            they need it:
          </p>
          <Bullets
            items={[
              <>
                <strong className="font-medium text-near-black/85">
                  Vercel Inc.
                </strong>{' '}
                hosts this website and processes server logs on our behalf, as
                our data processor under a data processing agreement.
              </>,
              <>
                <strong className="font-medium text-near-black/85">
                  Google LLC
                </strong>{' '}
                serves the fonts, and therefore receives your IP address as
                described above.
              </>,
              <>
                <strong className="font-medium text-near-black/85">
                  Our email provider,
                </strong>{' '}
                if you email us, for the purpose of delivering and storing that
                correspondence.
              </>,
            ]}
          />
          <p>
            We may also disclose data where the law requires it, such as a valid
            court order, or to establish or defend legal claims. If we are ever
            involved in a merger or acquisition, personal data may transfer to
            the buyer, and we will tell you before that happens.
          </p>
        </Section>

        <Section id="transfers" number="8" title="International transfers">
          <p>
            Some of our providers are based in the United States, so your data
            may be processed outside the UK. Where that happens, we rely on the
            safeguards UK law recognises: the UK Extension to the EU-US Data
            Privacy Framework where the provider is certified, or the
            International Data Transfer Agreement or UK Addendum to the Standard
            Contractual Clauses where it is not.
          </p>
          <p>
            You can ask us for details of the safeguards that apply to a specific
            transfer by emailing {contactLink}.
          </p>
        </Section>

        <Section id="retention" number="9" title="How long we keep data">
          <Bullets
            items={[
              <>
                <strong className="font-medium text-near-black/85">
                  Server logs:
                </strong>{' '}
                retained for a short period by our host, generally no more than
                30 days, then deleted or aggregated so individuals cannot be
                identified.
              </>,
              <>
                <strong className="font-medium text-near-black/85">
                  Email correspondence:
                </strong>{' '}
                kept while we deal with your enquiry and for up to 24 months
                afterwards, in case you follow up. Deleted sooner on request,
                unless we must keep it by law.
              </>,
              <>
                <strong className="font-medium text-near-black/85">
                  Records we are legally required to keep,
                </strong>{' '}
                such as product safety or accounting records, for the period the
                relevant law specifies.
              </>,
            ]}
          />
        </Section>

        <Section id="your-rights" number="10" title="Your rights">
          <p>
            Under UK GDPR you have the following rights, free of charge in almost
            all cases:
          </p>
          <Bullets
            items={[
              <>
                <strong className="font-medium text-near-black/85">
                  Access:
                </strong>{' '}
                ask for a copy of the personal data we hold about you.
              </>,
              <>
                <strong className="font-medium text-near-black/85">
                  Rectification:
                </strong>{' '}
                ask us to correct anything inaccurate or incomplete.
              </>,
              <>
                <strong className="font-medium text-near-black/85">
                  Erasure:
                </strong>{' '}
                ask us to delete your data where there is no good reason for us
                to keep it.
              </>,
              <>
                <strong className="font-medium text-near-black/85">
                  Restriction:
                </strong>{' '}
                ask us to pause our use of your data while a concern is resolved.
              </>,
              <>
                <strong className="font-medium text-near-black/85">
                  Objection:
                </strong>{' '}
                object to processing we carry out on the basis of legitimate
                interests.
              </>,
              <>
                <strong className="font-medium text-near-black/85">
                  Portability:
                </strong>{' '}
                receive data you gave us in a structured, machine-readable form.
              </>,
              <>
                <strong className="font-medium text-near-black/85">
                  Withdraw consent:
                </strong>{' '}
                where we rely on consent, withdraw it at any time without
                affecting what came before.
              </>,
            ]}
          />
          <p>
            To exercise any of these, email {contactLink}. We will respond within
            one month, and will tell you if we need longer because the request is
            complex. We may ask you to confirm your identity first, so that we do
            not disclose your data to someone else.
          </p>
          <p>
            One honest caveat: because we collect so little, we often cannot link
            a server log to you as an individual. If we genuinely cannot identify
            you from the data we hold, we may be unable to action an access or
            erasure request, and we will explain why if that is the case.
          </p>
        </Section>

        <Section id="complaints" number="11" title="Complaints">
          <p>
            If you are unhappy with how we have handled your personal data,
            please tell us first at {contactLink} so we can try to put it right.
          </p>
          <p>
            You also have the right to complain to the Information
            Commissioner&rsquo;s Office at any time. You can reach the ICO at{' '}
            <a
              href="https://ico.org.uk/make-a-complaint/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy underline underline-offset-2 decoration-taupe hover:decoration-navy transition-colors"
            >
              ico.org.uk/make-a-complaint
            </a>{' '}
            or on 0303 123 1113. Complaining to us first does not affect your
            right to go to the ICO.
          </p>
        </Section>

        <Section id="security" number="12" title="Security">
          <p>
            The site is served over HTTPS, so traffic between your browser and
            our host is encrypted in transit. We keep our software dependencies
            current and limit access to any data we hold to those who need it.
          </p>
          <p>
            Collecting almost nothing is itself our strongest safeguard: data we
            never hold cannot be breached. That said, no method of transmission
            over the internet is completely secure, and we cannot guarantee
            absolute security. If a breach ever affects your rights and freedoms,
            we will notify the ICO within 72 hours where required, and tell you
            directly where the risk is high.
          </p>
        </Section>

        <Section id="children" number="13" title="Children">
          <p>
            This site is intended for adults and is not directed at children
            under 16. We do not knowingly collect data from children. If you
            believe a child has sent us personal data, email {contactLink} and we
            will delete it.
          </p>
          <p>
            Our product should only be used on a child by a parent or guardian
            following advice from a healthcare professional.
          </p>
        </Section>

        <Section id="changes" number="14" title="Changes to this policy">
          <p>
            If we change how we handle personal data, we will update this page
            and revise the effective date at the top. Where a change materially
            affects your rights, for example if we ever introduce analytics or a
            contact form, we will make that prominent rather than burying it
            here.
          </p>
          <p>
            This version is effective from {EFFECTIVE_DATE}. Earlier versions are
            available on request.
          </p>
        </Section>

        <Section id="contact" number="15" title="Contact us">
          <p>
            For any question about this policy or your personal data, email{' '}
            {contactLink} and mark it for the attention of the person responsible
            for data protection.
          </p>
          <p>
            {COMPANY.legalName}
            <br />
            {COMPANY.registeredOffice}
          </p>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-cream-dark/50 border-t border-taupe/12 py-8 md:py-10 px-5 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <a
            href="/"
            className="font-serif text-lg font-semibold tracking-[0.04em] text-near-black"
          >
            DEEP SKIN
          </a>
          <p className="mt-2 text-[0.75rem] text-near-black/35 font-light">
            Medical-grade silicone scar tape · Distributed by{' '}
            {COMPANY.legalName}, London, UK
          </p>
        </div>
      </footer>
    </div>
  )
}
