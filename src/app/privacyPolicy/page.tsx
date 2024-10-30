// app/privacy-policy/page.tsx

import React from "react";
import styles from "./privacy.module.css";
import { Container, Grid, Paper, Typography } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h1" className={styles.heading}>
        Privacy Policy Fairsure Travel and Tour
      </Typography>
      <Container style={{ padding: "20px 0" }}>
        <Grid container spacing={2}>
          {/* Sidebar */}
          <Grid item xs={12} md={3}>
            <Paper className={styles.sidebar}>
              <Typography variant="h6">Privacy Policy</Typography>
              <ul className={styles.sidebarList}>
                <li>
                  <a href="#introduction">INTRODUCTION</a>
                </li>
                <li>
                  <a href="#information-collection">
                    INFORMATION COLLECTION, USE, AND SHARING 
                  </a>
                </li>
                <li>
                  <a href="#personal-infomation">PERSONAL INFORMATION</a>
                </li>
                <li>
                  <a href="#use-of-information">USE OF PERSONAL INFORMATION</a>
                </li>
                <li>
                  <a href="#DATA-PROCESSING-PRINCIPLES">
                    DATA PROCESSING PRINCIPLES
                  </a>
                </li>
                <li>
                  <a href="#data-security">
                    {" "}
                    LAWFUL BASIS FOR PROCESSING PERSONAL INFORMATION
                  </a>
                </li>
                <li>
                  <a href="#data-MINIMIZATION">
                    {" "}
                    DATA MINIMIZATION AND RETENTION
                  </a>
                </li>
                <li>
                  <a href="#information-control">
                    {" "}
                    YOUR ACCESS TO AND CONTROL OVER INFORMATION
                  </a>
                </li>
                <li>
                  <a href="#SECURITY">SECURITY</a>
                </li>
                <li>
                  <a href="#UPDATES-MODIFICATIONS-AMENDMENTS">
                    UPDATES,MODIFICATIONS AND AMENDMENTS
                  </a>
                </li>
                <li>
                  <a href="#registration">REGISTRATION </a>
                </li>
                <li>
                  <a href="#cookies">COOKIES</a>
                </li>
                <li>
                  <a href="#SHARING">SHARING </a>
                </li>
                <li>
                  <a href="#transfer-policy">
                    TRANSFER OF PERSONAL INFORMATION TO FOREIGN COUNTRY
                  </a>
                </li>
                <li>
                  <a href="#LINKS">LINKS AND VISITINGOUR WEBSITE </a>
                </li>
                <li>
                  <a href="#privacy-policy"> PRIVACY POLICY </a>
                </li>
                <li>
                  <a href="#terms-policy"> TERMS AND CONDITION </a>
                </li>
                <li>
                  <a href="#consent-policy">YOUR CONSENT</a>
                </li>
                <li>
                  <a href="#COMPLIANCE">COMPLIANCE </a>
                </li>
                <li>
                  <a href="#COMPLAINTS-policy">COMPLAINTS AND REMEDIES</a>
                </li>
                <li>
                  <a href="#questions"> QUESTIONS AND INQUIRIES</a>
                </li>
              </ul>
            </Paper>
          </Grid>

          {/* Content */}
          <Grid item xs={12} md={9}>
            <Paper className={styles.content}>
              <Typography variant="h4" id="introduction">
                Privacy Policy
              </Typography>
              <br />

              <Typography variant="body1">
                This Privacy Policy discloses the privacy practices for
                (www.fairsuretravel.com). This privacy policy applies to
                personal information collected by the company and to all types
                of systems, operations and processes within our environment that
                involve the collection, storage, use, transmission, and disposal
                of Personal Information (described below). It is provided to
                help you understand what information we collect about you, how
                the information collected is used, how we protect it,and your
                rights to it, among others.  This Privacy Policy is strictly
                restricted to only our services and therefore does not apply to
                services that are not owned or controlled by us,including
                third-party platforms/websites. We are committed to handling all
                personal data provided to us in compliance with both applicable
                and model dataprivacy and protection laws.  It will inform you
                of the following:
                <br />
              </Typography>
              <ul>
                <ol>
                  1.   What personally identifiable information is collected
                  from you through the web site, how it is used and with whom it
                  may be shared.
                </ol>
                <ol>
                  2.    What choices are available to you regarding the use of
                  your data.
                </ol>
                <ol>
                  3.    The security procedures in place to protect the misuse
                  of your information.
                </ol>
                <ol>
                  4.    How you can correct any inaccuracies in the information.
                </ol>
              </ul>
              <br />
              <br />

              <Typography variant="h5" id="information-collection">
                INFORMATION COLLECTION, USE, AND SHARING 
              </Typography>
              <br />

              <Typography variant="body1">
                We are the sole owners of the information collected on this
                site. We only have access to collect information that you
                voluntarily give us via email or other direct contact from you.
                We will not sell or rent this information to anyone. We will use
                your information to respond to you, regarding the reason you
                contacted us. We will not share your information with any third
                party outside of our organization, other than as necessary to
                fulfill your request. Unless you ask us not to, we may contact
                you via email in the future to tell you about specials, new
                products or services, or changes to this privacy policy.
              </Typography>
              <br />
              <br />

              <Typography variant="h5" id="personal-infomation">
                PERSONAL INFORMATION
              </Typography>
              <br />

              <Typography variant="body1">
                As part of our operations, we collect and process certain types
                of information (such as names, telephone numbers, addresses
                etc.) of individuals that makes them easily identifiable. These
                individuals include current, past, and prospective employees,
                guarantors, referees, suppliers/vendors, customersor former
                customers, and other individuals whom we communicate or deal
                with,jointly and/or severally (“Data Subject(s)”). You may
                voluntarily provide us with certain Personal Information, to
                enable you to gain access to and use our services. This
                information relates to an identified person or information that
                can be used to identify you. We will always solicit for your
                consent before sharing or disclosing your Personal Information
                with a third party except as may be required for thepurpose of
                providing you with our services or under applicable
                legislations.The following are the information that we collect
                and process:
                <br />
              </Typography>
              <ul>
                <ol>
                  i.   Individual personal information (e.g., name, previous
                  names, date, and place of birth, etc.);
                </ol>
                <ol>
                  ii.   Individual personal contact details (e.g.,address, email
                  address, mobile numbers);
                </ol>

                <ol>
                  iii.   Identifying information (e.g., photo ID,nationality,
                  utility bill, national ID card and/or number, guarantor’s
                  details,referee details, vendor’s personal data,);
                </ol>
                <ol>
                  iv.   Information about the ways you interact with thecompany
                  (e.g., channels used, geographic information, software used
                  andinformation concerning your complaints);
                </ol>
                <ol>
                  v.   Information captured in customer documentationor data
                  exchange such as application forms or advisory documents or
                  viatelephone (e.g., records of advice);
                </ol>
                <ol>
                  vi.   Information from cookies and similartechnologies used to
                  remember your preferences and tailor content;
                </ol>
                <ol>
                  vii.   Data or records of correspondence related torelevant
                  exchanges of information (e.g., emails);
                </ol>
                <ol>
                  viii.   Information to fulfill regulatory obligations(e.g.,
                  transaction details, user activity);
                </ol>
                <ol>
                  ix.   Information from other entities (e.g., relevant
                  transaction information)
                </ol>
                <ol>
                  x.   Information from third parties providinginformation to
                  identify and manage fraud;
                </ol>
                <ol>
                  xi.   Data fromclosed circuit television (CCTV) in and around
                  the company’s facilities (thesemay collect photos or videos of
                  you); and
                </ol>
                <ol>
                  xii.   Other information about you that is voluntarilyprovided
                  by filling in online forms or by communicating with us,
                  whether face-to-face or via other available channels (e.g., by
                  phone, email, oronline). .
                </ol>
              </ul>
              <br />
              <br />

              <Typography variant="h5" id="use-of-information">
                WE USE YOURPERSONAL INFORMATION TO:
              </Typography>
              <br />

              <Typography variant="body1">
                <ul>
                  <ol>a.   provide you with the requiredservices;</ol>
                  <ol>b.   respond to your questions or requests;</ol>
                  <ol>
                    c.   improve features, platform and website contentand
                    analyse data to develop services;
                  </ol>
                  <ol>d.   address inappropriate use of our Services;</ol>
                  <ol>
                    e.   prevent, detect and manage risk against fraudand
                    illegal activities using internal and third-party screening
                    tools;
                  </ol>
                  <ol>
                    f.   verify your identity and the information you provide in
                    line with our statutory obligations using internal and
                    third-partytools;
                  </ol>
                  <ol>g.   maintain up-to-date records;</ol>
                  <ol>
                    h.   resolve disputes that may arise,
                    includinginvestigations by law enforcement or regulatory
                    bodies; and
                  </ol>
                  <ol>
                    i.   any other purpose that we disclose to you in thecourse
                    of providing our Services to you.
                  </ol>
                </ul>
              </Typography>
              <br />

              <Typography variant="body1">
                We collect Personal Information only for identified purposes and
                for which consent has been obtained. Such Personal Information
                cannot be reused for another purpose that is incompatible with
                the original purpose, except consentis obtained for such
                purpose.
              </Typography>
              <br />
              <br />

              <Typography variant="h5" id="#DATA-PROCESSING-PRINCIPLES">
                DATA PROCESSING PRINCIPLES
              </Typography>
              <br />

              <Typography variant="body1">
                Your personal data will be:
                <br />
              </Typography>
              <ul>
                <ol>
                  a.  collected and processed in accordance with specific,
                  legitimate, and lawful purposes, consented to by you;
                </ol>
                <ol>
                  b.  adequate, accurate and withoutprejudice to the dignity of
                  the human person;
                </ol>
                <ol>
                  c.    stored only for the period withinwhich it is reasonably
                  needed; and
                </ol>
                <ol>
                  d   secured against all foreseeable hazards and breaches such
                  as theft, cyber attack, viral attack,
                  dissemination,manipulations of any kind, damage by rain, fire,
                  or exposure to other naturalelements
                </ol>
              </ul>
              <br />
              <br />

              <Typography variant="h5" id="data-security">
                OUR LAWFUL BASIS FOR PROCESSING PERSONAL INFORMATION
              </Typography>
              <br />

              <Typography variant="body1">
                We will only use and process your personal data as permitted by
                the Nigerian Data Protection Act, 2023. We have set out below
                adescription of all the legal bases we may rely on to process
                your personaldata:           
              </Typography>
              <br />

              <ul>
                <ol>
                  {" "}
                  a.   Where you have given us consent tothe processing of your
                  personal data for one or more specific purposes;
                </ol>
                <ol>
                  b.   where processing is necessary for the performance of a
                  contract to which you are a party or to take steps at your
                  request prior to entering into a contract;
                </ol>
                <ol>
                  c.    where processing is necessary for compliance with a
                  legal obligation to which we are subject;
                </ol>
                <ol>
                  d.   where processing is necessary toprotect your vital
                  interests or the vital interests of another natural person,and
                </ol>
                <ol>
                  e.   where processing is necessary forthe performance of a
                  task carried out in the public interest or in exercise ofan
                  official public mandate vested in us.
                </ol>
                <ol>
                  f.     For the purpose of the legitimate interests pursued by
                  us as data controller or data processor, or by a third party
                  to whom the data is disclosed.
                </ol>
              </ul>
              <br />

              <Typography variant="body1">
                  Note that we may process your personal data for more than one
                lawful ground depending on the specific purpose for which we are
                using your personal data. Please contact us by sending an email
                to: legal@fairsuretravel.com if you need details about the
                specific legal ground we are relying on to process your personal
                data where more than one ground may have been used to
                processyour personal data.   For the purpose of this Privacy
                Policy, consent means any freely given, specific,informed, and
                unambiguous indication of the Data Subject&apos;s wishes by which
                they, through a statement or a clear affirmative action, signify
                their agreement to the processing of Personal Information
                relating to them.
              </Typography>
              <br />
              <br />

              <Typography variant="h5" id="data-MINIMIZATION">
                {" "}
                DATA MINIMIZATION
              </Typography>
              <br />

              <Typography variant="body1">
                We limit Personal Information collection and usage to data that
                isrelevant, adequate, and necessary for carrying out the purpose
                for which the data is processed. We will evaluate whether and to
                what extent the processing of Personal Information is necessary
                and where the purpose allows, anonymized data will be used.  
              </Typography>
              <br />
              <br />

              <Typography variant="h5"> DATA RETENTION</Typography>
              <br />

              <Typography variant="body1">
                We will retain your Personal Information for as long as is
                needed to provide our services to you, comply with our legal and
                statutory obligations or verify your information with the
                required verification authorities.             We are
                statutorily obligated to retain the Personal Information and
                data you provide us with to carry out our services and in
                compliance with laws andregulatory guidelines applicable to us
                and our partners. Therefore, even after discontinuance of our
                services, we will retain certain Personal Information and
                transaction data to comply with these obligations. For all
                Personal Information and records obtained, used, and stored by
                us, we shall perform periodical reviews of the data retained to
                confirm the accuracy, purpose, validity, and requirement to
                retain. The length of storage of your Personal Information
                shall, amongst other things, be determined by:
                <br /> 
              </Typography>
              <ul>
                <ol>
                  a.   the contract terms agreed between us and the Data Subject
                  or as long as it is needed for the purpose for which it was
                  obtained; or
                </ol>
                <ol>
                  b.   where the relationship has statutory implication or a
                  required retention period; or
                </ol>
                <ol>
                  c.    where there is an express request for deletion of the
                  Personal Information by the Data Subject, provided that such
                  request will only be treated where the Data Subject is not
                  under any investigation which may require us to retain such
                  Personal Information or there is no subsisting contractual
                  arrangement with the Data Subject that would require the
                  processing of the Personal Information; or
                </ol>
                <ol>
                  d.   where we have another lawful basis for retaining that
                  information beyond the period for which it is necessary to
                  serve the original purpose.
                </ol>
              </ul>
              <br />
              <br />

              <Typography variant="h5" id="information-control">
                YOUR ACCESS TO AND CONTROL OVER INFORMATION
              </Typography>
              <br />

              <Typography variant="body1">
                Once your Personal Information is held by us, you are entitled
                to reachout to us to exercise the following rights which are
                guaranteed by the NigeriaData Protection Act with some
                limitations.
              </Typography>
              <br />

              <Typography variant="body1">
                <ul>
                  <ol>
                    a.    Request access to your personal data (commonly known
                    as a “datasubject access request”): This enables you to
                    receive acopy of the personal data we hold about you and to
                    check that we are lawfully processing it. You will not have
                    to pay a fee to access your personal data (or to exercise
                    any of your other rights). However, we may charge a
                    reasonable fee if your request is clearly unfounded,
                    repetitive, or excessive. Alternatively, we may notify you
                    of our refusal to comply with your request in these
                    circumstances. Where we have reasonable doubts concerning
                    the identity of thenatural person making the request for
                    information, we may request the provision of additional
                    information necessary to confirm the identity of the
                    DataSubject. Where data is held electronically in a
                    structured form, such as in a Database, as the Data Subject,
                    you have a right to receive that data in acommon electronic
                    format;
                  </ol>
                  <ol>
                    b.    Right to request correction of the personal data that
                    we hold about you: This enables you to have any incomplete
                    or inaccurate data we hold about you corrected, complete or
                    updated,though we may need to verify the accuracy of the new
                    data you provide to us.
                  </ol>
                  <ol>
                    c.    Right to request erasure or deletion of your personal
                    data: This enables you to ask us to delete or remove
                    personal datawhere there is no good reason for us continuing
                    to process it. You also havethe right to ask us to delete or
                    remove your personal data where you have successfully
                    exercised your right to object to processing (see below),
                    where wemay have processed your information unlawfully or
                    where we are required toerase your personal data to comply
                    with local law. Note, however, that we may not always be
                    able to comply with your request of erasure for specific
                    legalreasons which will be notified to you, if applicable,
                    at the time of your request.
                  </ol>
                  <ol>
                    d.    Right to object to the processing of your personal
                    data: Where we are relying on a legitimate interest (or
                    those of a third party) there maybe something about your
                    situation which could justify an objection to processing on
                    this ground as you may feel it impacts on your fundamental
                    rights and freedoms. You also have the right to object where
                    we are processing your personal data for direct marketing
                    purposes. In some cases, we may demonstrate that we have
                    compelling legitimate grounds to process your information
                    which override your rights and freedoms.
                  </ol>
                  <ol>
                    e.    Right to request restriction of processing of your
                    personal data: This enables you to ask us to suspend the
                    processing of your personal data in the following scenarios:
                    <ol>
                      i.      If you want us to establish thedata’s accuracy;
                    </ol>
                    <ol>
                      ii.      Where our use of the data isunlawful but you do
                      not want us to erase it;{" "}
                    </ol>
                    <ol>
                      iii.      Where you need us to hold the dataeven if we no
                      longer require it as you need it to establish, exercise or
                      defendlegal claims; or
                    </ol>
                    <ol>
                      iv.      You have objected to our use of yourdata but we
                      need to verify whether we have overriding legitimate
                      grounds to useit.
                    </ol>
                  </ol>
                </ul>
                <ol>
                  f.    Request the transfer of your personal data to you or to
                  a third party: We will provide to you, or a third party you
                  have chosen, your personal data in a structured, commonly
                  used, machine-readable format. Note that this right only
                  applies to automated information which you initially provided
                  consent for us to use or where we used the information to
                  perform a contract with you.
                </ol>
                <ol>
                  g.    Right to withdraw consent at any time where we are
                  relying on consent to process your personal data:This will not
                  affect the lawfulness of any processing carried out before you
                  withdraw your consent. If you withdraw your consent, we may
                  not be able to provide certain services to you. We will advise
                  you if this is the case at thetime you withdraw your consent.
                  Your request will be reviewed by us and carried out except as
                  restricted by law or our statutory obligations. You may
                  decline to provide your Personal Information when it is
                  requested by us, however, certain services or all services may
                  be unavailable to you. You may review and update your Personal
                  Information directly or by contacting us.
                </ol>
              </Typography>
              <br />
              <br />

              <Typography variant="h5" id="SECURITY">
                SECURITY
              </Typography>
              <br />

              <Typography variant="body1">
                We take precautions to protect your information. When you
                submitsensitive information via the website, your information is
                protected bothonline and offline. Wherever we collect sensitive
                information (such as creditcard data), that information is
                encrypted and transmitted to us in a secureway. You can verify
                this by looking for a closed lock icon at the bottom ofyour web
                browser, or looking for &quot;https&quot; at the beginning of theaddress
                of the web page.
              </Typography>
              <br />

              <Typography variant="body1">
                While we use encryption to protect sensitive information
                transmitted online, we also protect your information offline.
                Only employees who need the information to perform a specific
                job (for example, billing or customerservice) are granted access
                to personally identifiable information. The computers/servers in
                which we store personally identifiable information are kept in a
                secure environment.
              </Typography>
              <br />
              <br />

              <Typography variant="h5" id="UPDATES-MODIFICATIONS-AMENDMENTS">
                UPDATES,MODIFICATIONS AND AMENDMENTS
              </Typography>
              <br />

              <Typography variant="body1">
                We reserve the right to update, modify, change, or revise this
                Privacy Policy from time to time. The changes will not be
                retroactive, and the mostcurrent version of this Privacy Policy
                which will always be on this page and will continue to govern
                our relationship with you. We advise that you check this page
                often, referring to the date of the last modification on the
                page. We will also try to notify you of any material changes
                which could be done viaemail associated with your account or
                service notification. By continuing touse our services after the
                changes become effective, you agree to be bound bythe revised
                Privacy Policy.
              </Typography>
              <Typography variant="body1">
                If you feel that we are not abiding by this privacy policy, you
                should contact us immediately via email at{" "}
                <a href="mailto:legal@fairsuretravel.com.">
                  legal@fairsuretravel.com.
                </a>
              </Typography>
              <br />
              <br />

              <Typography variant="h5" id="registration">
                REGISTRATION 
              </Typography>
              <br />

              <Typography variant="body1">
                For effective use of this website, users are advised to complete
                the registration form. During registration a user is required to
                give certain information (such as name and email address). This
                information is used to contact you about the products/services
                on our site in which you have expressed interest. At your
                option, you may also provide demographic information (such
                asgender or age) about yourself, but it is not required.
              </Typography>
              <br />
              <br />

              <Typography variant="h5" id="cookies">
                COOKIES
              </Typography>
              <br />

              <Typography variant="body1">
                We use &quot;cookies&quot; on this site. A cookie is a piece of datastored
                on a site visitor&apos;s hard drive to help us improve your access to
                oursite and identify repeat visitors to our site. For instance,
                when we use a cookie to identify you, depending on your browser
                settings you would not have to log in a password more than once,
                thereby saving time while on our site. Cookies can also enable
                us to track and target the interests of our users to enhance the
                experience on our site. Usage of a cookie is in no way linked
                toany personally identifiable information on our site.
              </Typography>
              <br />

              <Typography variant="body1">
                Some of our business partners may use cookies on our site (for
                example,advertisers). However, we have no access to or control
                over these cookies.
              </Typography>
              <br />
              <br />

              <Typography variant="h5" id="SHARING">
                SHARING 
              </Typography>
              <br />

              <Typography variant="body1">
                We share aggregated demographic information with our partners
                and advertisers. This is not linked to any personal information
                that can identifyany individual person. We use a credit card
                processing company to bill usersfor products and services. These
                companies do not retain, share, store or usepersonally
                identifiable information for any secondary purposes beyond
                fulfilling your order.
              </Typography>
              <br />

              <Typography variant="body1">
                We partner with other parties to provide specific services. When
                the user signs up for these services, we will share names, or
                other contact information that is necessary for the third party
                to provide these services.These parties are not allowed to use
                personally identifiable information except for the purpose of
                providing these services.
              </Typography>
              <br />

              <Typography variant="body1">
                We may share your information with law enforcement agencies,
                public ortax authorities or other organizations if legally
                required to do so, or if wehave a good faith belief that such
                use is reasonably necessary to:
                <br />
              </Typography>
              <ul>
                <ol>
                  a.   comply with a legal obligation,process, or request
                  (including tax and related reporting requirements);
                </ol>
                <ol>
                  b.   enforce our Terms of Service andother agreements,
                  policies, and standards, including investigation of
                  anypotential violation thereof;
                </ol>
                <ol>
                  c.    detect, prevent, or otherwise address security, fraud,
                  or technical issues; or
                </ol>
                <ol>
                  d.   protect the rights, property or safety of us, our users,
                  a third party or the public as required or permitted by law
                  (including exchanging information with other companies and
                  organizations for the purposes of fraud protection and credit
                  risk reduction).
                </ol>
              </ul>
              <br />

              <Typography variant="body1">
                Please see the list and details of categories of third-party
                processors we share your personal data with below: Fairsure
                payment- payment gateway.
              </Typography>
              <br />
              <br />

              <Typography variant="h5" id="transfer-policy">
                TRANSFER OF PERSONAL INFORMATION TO FOREIGN COUNTRY
              </Typography>
              <br />

              <Typography variant="body1">
                Where Personal Information is to be transferred to a country
                outside Nigeria, we shall put adequate measures in place to
                ensure the security of such Personal Information. In particular,
                we shall, among other things, confirm whether the country is on
                the Nigeria Data Protection Commission (&quot;NDPC&quot;)Whitelist of
                Countries with adequate data protection laws.
              </Typography>
              <br />

              <Typography variant="body1">
                Transfer of Personal Information out of Nigeria would be in
                accordance with the provisions of the Nigeria Data Protection
                Act (&quot;NDPA&quot;) 2023. We will therefore only transfer Personal
                Information out of Nigeria on one of thefollowing conditions:
                <br />
              </Typography>
              <ul>
                <ol>a.   the consent of the Data Subject has been obtained;</ol>
                <ol>
                  b.   the transfer is necessary for the performance of a
                  contract between us and the Data Subject or implementation of
                  pre-contractual measures taken at the Data Subject’s request;
                </ol>
                <ol>
                  c.    the transfer is necessary to conclude a contract between
                  us and a third party in the interest of the DataSubject;
                </ol>
                <ol>
                  d.   the transfer is necessary for reason of public interest;
                </ol>
                <ol>
                  e.   the transfer is for the establishment, exercise, or
                  defense of legal claims;
                </ol>
                <ol>
                  f.     the transfer is necessary to protect the vital
                  interests of the Data Subjects or other persons, where the
                  DataSubject is physically or legally incapable of giving
                  consent.
                </ol>
              </ul>
              <br />

              <Typography variant="body1">
                We will take all necessary steps to ensure that your
                PersonalInformation is transmitted in a safe and secure manner.
                Details of theprotection given when your Personal Information is
                transferred outside Nigeria shall be provided to you upon
                request.
              </Typography>
              <br />
              <br />

              <Typography variant="h5" id="LINKS">
                LINKS 
              </Typography>
              <br />

              <Typography variant="body1">
                This web site contains links to other sites. Our website
                includeshyperlinks to, and details of, third party websites.
                <br />
                Please be aware that we are not responsible and have no control
                over thecontent or privacy practices of such other sites. We
                encourage our users to beaware when they leave our site to read
                the privacy statements of any other sitethat collects personally
                identifiable information.
              </Typography>
              <br />
              <br />

              <Typography variant="h5" id="">
                VISITINGOUR WEBSITE FROM OUTSIDE NIGERIA
              </Typography>
              <br />

              <Typography variant="body1">
                If you are visiting our website from outside Nigeria, please be
                awarethat your information may be transferred to, stored, and
                processed in Nigeriafrom where our central database is operated.
                The data protection law and otherlaws of Nigeria may vary in
                content or may not be as comprehensive as those inyour country,
                but please be assured that we take steps to ensure that
                yourprivacy is protected. By using our services, you understand
                that your information may be transferred to our facilities and
                to those third partieswith whom we share it as described in this
                Policy.
              </Typography>
              <br />
              <br />

              <Typography variant="h5" id="changes-to-policy">
                SURVEYS& CONTESTS/PROMOTIONS 
              </Typography>
              <br />

              <Typography variant="body1">
                From time-to-time our site requests information via surveys or
                contests. Participation in these surveys or contests is
                completely voluntary and you maychoose whether or not to
                participate and therefore disclose this information. Information
                requested may include contact information (such as name
                andaddress), and demographic information (such as post code, age
                level etc).Contact information will be used to notify the
                winners and award prizes. Survey information will be used for
                purposes of monitoring or improving the use andsatisfaction of
                this site.
              </Typography>
              <br />
              <br />

              <Typography variant="h5" id="privacy-policy">
                 PRIVACY POLICY
              </Typography>
              <br />

              <Typography variant="body1">
                This privacy policy applies  to personal information collected
                through our website and personal information collected offline
              </Typography>
              <br />
              <br />

              <Typography variant="h5" id="terms-policy">
                TERMS AND CONDITIONS
              </Typography>
              <br />

              <Typography variant="body1">
                Please also visit our Terms and Conditions section establishing
                the use, disclaimers and limitations of liability governing the
                use of our website at{" "}
                <a href=" http://www.fairsuretravel.com">
                   http://www.fairsuretravel.com
                </a>
              </Typography>
              <br />
              <br />

              <Typography variant="h5" id="consent-policy">
                YOUR CONSENT
              </Typography>
              <br />

              <Typography variant="body1">
                By accessing or using our services in any manner, you suggest to
                us that you have read and adopted this Privacy Policy and
                consent to the data practices described herein.
                <br />
                You agree that upon granting us your consent, you have the legal
                capacity to give consent and you are aware of your privacy
                rights and your option to withdraw your consent at any given
                time.
                <br />
                If you do not accept this Privacy Policy and do not meet or
                comply with the provisions set forth herein,then you may not use
                our services.
              </Typography>
              <br />
              <br />

              <Typography variant="h5">AGE RESTRICTION</Typography>
              <br />

              <Typography variant="body1">
                If you access our services or platform and you are below 18
                years, you represent and warrant that you have obtained consent
                from your parent(s) or legal guardian(s).  If you have
                inadvertently provided personal data of a child to us, please
                notify us at 
                <a href="https://Alma@wakanow.com">Alma@wakanow.com</a> and we
                will delete such personal data. <br />
                Consistent with Section 8 of the Nigeria Child Rights Act (“the
                Act”),Cap C50, Laws of the Federation of Nigeria 2010, Section
                31 of the Nigeria DataProtection Act 2023, we will never
                knowingly request Personally Identifiable Information from
                anyone below the age of 18 under the Act without prior
                verifiable parental consent. If we become aware that a child
                below the age of 18 under the Act has provided us with personal
                data without verifiable parental consent, we will use our best
                efforts to remove such information from our files. If as a
                parent or guardian, you become aware that your child or
                wardchild has provided us with any information without your
                consent, please contact us through the details provided in this
                Privacy Policy.
              </Typography>
              <br />
              <br />

              <Typography variant="h5" id="COMPLIANCE">
                COMPLIANCE
              </Typography>
              <br />

              <Typography variant="body1">
                Please note that the collection, processing, security, storage,
                and erasure of your personal data including any updates to this
                privacy policy will be in accordance with existing or new
                privacy and data protection provisions and laws in Nigeria which
                includes but not limited to the following:
              </Typography>
              <br />
              <br />

              <Typography variant="h5" id="changes-to-policy">
                CHANGES TO POLICY{" "}
              </Typography>
              <br />

              <Typography variant="body1">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page.
                <br />
              </Typography>
              <ul>
                <ol>
                  a.   Constitution of the Federal Republic of Nigeria 1999 (as
                  Amended);
                </ol>
                <ol>b.   Nigeria Data Protection Act 2023(&quot;NDPA&quot;); </ol>
                <ol>c.    Nigeria Data Protection Regulation2019 (&quot;NDPR&quot;); </ol>
                <ol>d.   NDPR 2019 Implémentation Framework ;</ol>
                <ol>
                  e.   Nigeria Cybercrimes (Prohibition,Prevention, Amendement)
                  Act 2024 ;
                </ol>
                <ol>
                  f.    Nigeria Money Laundering (Preventionand Prohibition)
                  Act, 2022;
                </ol>
                <ol>
                  g.  Nigeria Federal Competition andConsumer Protection Act,
                  2018 (FCCPA);
                </ol>
                <ol>h.   Nigeria Freedom of Information Act2011;</ol>
                <ol>
                  i.     Central Bank of Nigeria Risk-Based Cybersecurity
                  Framework and Guidelines for Other Financial Institutions
                  2022.
                </ol>
              </ul>
              <br />
              <br />

              <Typography variant="h5" id="COMPLAINTS-policy">
                COMPLAINTS AND REMEDIES
              </Typography>
              <br />

              <Typography variant="body1">
                You may file a complaint in accordance with this Privacy Policy
                if you believe that any provision of this Privacy Policy or your
                privacy rights have been violated in respect of your personal
                information or if your access to our Services have been
                compromised, to enable us to take the necessary steps towards
                ensuring the security of your Personal Information. All
                complaints must be addressed to the company by sending an email
                to our Data Protection Officer using the following contact
                details:
                <br />
                Email: 
                <a
                  href="mailto:info@fairsuretravel.com
"
                >
                  info@fairsuretravel.com
                </a>
                <br />
                Please note that, the complaint and resolution procedure is not
                prejudicial to your right to complain to the data protection
                authorities (in this case, you should contact the Nigeria Data
                Protection Commission (NDPC)using the following contact
                details: 
                <br />
                Address:
                <br />
                NDPC: No. 5, Donau Crescent,
                <br />
                Off Amazon Street, Maitama,
                <br />
                 Abuja, Nigeria.
                <br />
                Email: 
                <a href="mailto:info@ndpc.gov.ng">info@ndpc.gov.ng </a>
                <br />
                We will notify you of any breach and also notify Nigeria Data
                ProtectionCommission (NDPC) within 72 hours of becoming aware of
                such breach. 
                <br />
                You may also seek redress in a court of competent jurisdiction.
                We would, however, appreciate the chance to deal with your
                concerns before you approach the data protection authorities.
                Kindly contact us in the first instance by sending an email to:{" "}
                <a href="mailto:info@fairsuretravel.com">
                  {" "}
                  info@fairsuretravel.com
                </a>
              </Typography>
              <br />
              <br />
              <Typography variant="h5" id="questions">
                QUESTIONS AND INQUIRIES
              </Typography>
              <br />
              <Typography variant="body1">
                You may also contact us if you have any questions, comments and
                requests relating to this Privacy Policy or would like to find
                out more about exercising your data protection rights.  Please
                contact us via {" "}
                <a href="mailto:info@fairsuretravel.com">
                  info@fairsuretravel.com
                </a>
                <br />
                If you are in Abuja, we can also be reached at:
                <br />
                <br />
                <strong>FAIRSURETRAVEL.COM  LIMITED</strong> <br />
                7th Floor, Unity Bank Building
                <br />
                785 Herbert Macaulay Way
                <br />
                Central Business District
                <br /> Abuja, Nigeria.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
