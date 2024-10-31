// app/privacy-policy/page.tsx

import React from "react";
import styles from "./Terms.module.css";
import { Container, Grid, Paper, Typography } from "@mui/material";

const TermsAndCondition = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h1" className={styles.heading}>
        Terms & Condition Fairsure Travel and Tour
      </Typography>
      <Container style={{ padding: "20px 0" }}>
        <Grid container spacing={2}>
          {/* Sidebar */}
          <Grid item xs={12} md={3}>
            <Paper className={styles.sidebar}>
              <Typography variant="h6">Terms and Conditions</Typography>
              <ul className={styles.sidebarList}>
                <li>
                  <a href="#introduction">INTRODUCTION</a>
                </li>
                <li>
                  <a href="#information-collection">CONDITION OF USE</a>
                </li>
                <li>
                  <a href="#personal-infomation">RESTRICTIONS</a>
                </li>
                <li>
                  <a href="#use-of-information"> INFORMATION YOU SUBMIT </a>
                </li>
                <li>
                  <a href="#DATA-PROCESSING-PRINCIPLES">
                    OWNERSHIP OF INFORMATION AND MATERIALS
                  </a>
                </li>
                <li>
                  <a href="#data-security"> TRADEMARK INFORMATION</a>
                </li>
                <li>
                  <a href="#data-MINIMIZATION"> LINKS TO OTHER WEBSITES</a>
                </li>
                <li>
                  <a href="#information-control">
                    {" "}
                    FEEDBACK & RULES OF CONDUCT/FORUM/FACILITY
                  </a>
                </li>
                <li>
                  <a href="#SECURITY"> TRAVEL LOCATIONS </a>
                </li>
                <li>
                  <a href="#UPDATES-MODIFICATIONS-AMENDMENTS">DISCLAIMER</a>
                </li>
                <li>
                  <a href="#registration"> TERMINATION OF USE</a>
                </li>
                <li>
                  <a href="#cookies"> GOVERNING LAW: JURISDICTION AND VENUE</a>
                </li>
                <li>
                  <a href="#SHARING">GENERAL PROVISIONS</a>
                </li>
              </ul>
            </Paper>
          </Grid>

          {/* Content */}
          <Grid item xs={12} md={9}>
            <Paper className={styles.content}>
              <Typography variant="h4" id="introduction">
                Terms & Condition of Use
              </Typography>
              <br />

              <Typography variant="body1">
                Welcome to the corporate website of Fairsure Travel & Tours
                Limited (fairsuretravel.com.ng). Fairsure Travel’s website gives
                assistance and acquaints customers with travel information and
                helps customers determine the availability of travel-related
                goods and services. We make legitimate reservations and transact
                business with travel suppliers, bearing in mind that these
                information are for no other purposes. In using the terms "we",
                "us", "our" and "Fairsure Travel" we refer to Fairsure Travel,
                and/or our subsidiaries. The term "you" refers to the customer
                visiting the Website and/or booking a reservation through us on
                this Website, or through our customer service agents.
              </Typography>
              <br />
              <Typography variant="body1">
                The use of this website by you does not create an
                employer/employee relationship, a joint venture shareholder
                agreement, a memorandum of understanding or a partnership
                agreement.
                <br />
              </Typography>
              <Typography variant="body1">
                The use of this site is governed by the Terms and Conditions set
                forth. PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE
                USING THIS WEBSITE. The information and materials provided by
                Fairsure Travel may be used for informational purposes only. By
                using, accessing or downloading materials from this website you
                agree to follow the terms and provisions as outlined in this
                legal notice, which apply to all visits to Fairsure Travel’s
                website, both now and in the future. Fairsure Travel may at any
                time revise and update the Terms and Conditions. You are
                encouraged to periodically visit this page to review the most
                current Terms and Conditions to which you are bound. If you do
                not agree to these Terms and Condition of Use, please do not use
                this website.
                <br />
              </Typography>

              <br />
              <br />

              <Typography variant="h5" id="information-collection">
                Condition of Use
              </Typography>
              <br />

              <Typography variant="body1">
                Your access to this Website would be conditional upon your
                acceptance without alteration/changes of all the terms,
                conditions, and notices set forth below (collectively, the
                "Agreement"). You agree to be bound by the agreement by
                accessing or using this Website in any manner. Ensure that you
                read the Agreement carefully. Please do not use this Website if
                you do not accept all of these terms and conditions. Be sure to
                return to this page periodically to review the most current
                version of the Agreement. We reserve the right at any time, at
                our sole discretion, to revise this Agreement without prior
                notice, and to withdraw or restrict access to the use of this
                Website in whole or in part at any time also without prior
                notice. Your continued use of the website signifies your
                acceptance of the updated or modified Agreement.
              </Typography>
              <br />
              <Typography variant="h5">
                To use this website you must:
              </Typography>
              <br />
              <ul>
                <ol>- Be at least 18 years of age.</ol>
                <ol>
                  - Possess the legal authority to create a binding legal
                  obligation.
                </ol>

                <ol>
                  - Be willing to use this Website in accordance with this
                  Agreement.
                </ol>
                <ol>
                  - Be willing to only use this Website to make legitimate
                  reservations for you or for another person for whom you are
                  legally authorized to act.
                </ol>
                <ol>
                  - ensure all information supplied by you on this Website is
                  true, accurate, current and complete. 
                </ol>
              </ul>

              <br />
              <Typography variant="body1">
                You will take all necessary steps to safeguard your Fairsure
                Travel account if you have one, and will at all times be in
                charge for the use of your account or by any other person. We
                reserve the sole right to deny access to the use of this website
                and related services to anyone, at any time and for any reason,
                which includes the violation of this agreement.
              </Typography>
              <br />
              <br />

              <Typography variant="h5" id="personal-infomation">
                RESTRICTIONS
              </Typography>
              <br />

              <Typography variant="body1">
                There are terms and conditions set apart for the purchase of
                travel related products as well as reservations as you are bound
                by terms and condition of any and all suppliers.
              </Typography>

              <br />
              <Typography variant="body1">
                In making any payments and abiding by the regulations and
                caveats in connection with availability, use of products and
                fares, you are bound by the terms and conditions of usage. We
                bring to your notice that certain service providers offering
                certain services may require that you append to their liability
                waiver before requesting/subscribing/purchasing those services.
              </Typography>
              <br />
              <Typography variant="body1">
                You may view, download and copy information and materials
                available on this website solely for your personal,
                non-commercial use. You may also use such material within your
                organization in connection with the support of Fairsure Travel's
                products. As a condition of use, you agree not to modify or
                revise any of the material in any manner, and to retain all
                copyright and other proprietary notices as contained in the
                original materials on any copies of the materials. No other use
                of the materials or information is authorized. Any violation of
                the foregoing may result in civil and/or criminal liabilities.
              </Typography>
              <br />
              <Typography variant="h5">
                You may lose the following if you violate any suppliers’
                obligations or caveats:
              </Typography>
              <br />
              <ul>
                <ol>
                  - You may forgo monies for reservations of such services. 
                </ol>
                <ol>
                  - You may be denied access to travel packages and or services.
                </ol>
              </ul>
              <br />
              <br />

              <Typography variant="h5" id="use-of-information">
                INFORMATION YOU SUBMIT: 
              </Typography>
              <br />

              <Typography variant="body1">
                In relation to all information you submit to us, you hereby
                agree and warrant:
              </Typography>
              <br />
              <Typography variant="body1">
                That such material or information is not confidential or
                proprietary and Fairsure Travel shall be free to use any such
                information in any manner to use, reproduce, modify, adapt,
                translate, distribute, publish, create derivative works from and
                publicly display and perform such submissions throughout the
                world in any media, now known or hereafter devised; and (b) use
                the name that you submit in connection with such Submission. You
                acknowledge that Fairsure Travel may choose to provide
                attribution of your comments or reviews (for example, listing
                your name and hometown on a hotel review that you submit) at our
                discretion, and that such submissions may be shared with our
                supplier partners. You further grant Fairsure Travel the right
                to pursue at law any person or entity that violates your rights
                or Fairsure Travel’s rights in the Submissions by a breach of
                this Agreement.
              </Typography>
              <br />

              <Typography variant="body1">
                We take no responsibility and assume no liability for any
                Submissions posted or submitted by you. We have no obligation to
                post your comments; we reserve the right in our absolute
                discretion to determine which comments are published on the
                Fairsure Travel website. If you do not agree to these terms and
                conditions, please do not provide us with any submissions and
                you agree not to take any action against Fairsure Travel in
                relation to the use of such material or information.
              </Typography>
              <br />

              <Typography variant="body1">
                If you own or have unrestricted rights to the material or
                information submitted to Fairsure Travel, you shall indemnify
                and render Fairsure Travel harmless against any claims, suits,
                proceedings, expenses of any type whatsoever, brought against
                Fairsure Travel in connection with infringement of third parties
                rights in respect of the material or information that you
                submitted.
              </Typography>
              <br />

              <Typography variant="body1">
                You will take all reasonable steps to ensure that the materials
                or information is free from any known computer viruses, or other
                contaminates, including but not limited to any code or
                instructions that may be used to modify damage or compromise the
                security of this web site, or Fairsure Travel’s computer systems
                or networks.
              </Typography>
              <br />

              <Typography variant="body1">
                You will not transmit to or from this Website or post: (i) any,
                publicly unlawful contents and materials, obscene, pornographic,
                and defamatory or other material or contents and any acts of
                commercialization.{" "}
              </Typography>
              <br />
              <br />

              <Typography variant="h5" id="#DATA-PROCESSING-PRINCIPLES">
                OWNERSHIP OF INFORMATION AND MATERIALS
              </Typography>
              <br />

              <Typography variant="body1">
                The information and any materials (including white papers, press
                releases, data sheets, product descriptions, and FAQs) available
                on or from this website are the copyrighted works of Fairsure
                Travel, and any unauthorized use of that information or
                materials may violate copyright, trademark and other laws. Any
                rights not expressly granted herein are reserved.
                <br />
              </Typography>

              <br />
              <br />

              <Typography variant="h5" id="data-security">
                TRADEMARK INFORMATION
              </Typography>
              <br />

              <Typography variant="body1">
                 Fairsure Travel's trademarks may be used only with written
                permission from Fairsure Travel. Fairsure Travel, products and
                brands are registered trademarks or trademarks of Fairsure
                Travel. All other trademarks, brands, and names are the property
                of their respective owners. Except as expressly specified in
                these terms and legal restrictions, nothing contained herein
                shall be construed as conferring by implication, estoppel or
                otherwise any license or right under any patent, trademark,
                copyright or any proprietary rights of Fairsure Travel or any
                third party.           
              </Typography>

              <br />
              <br />

              <Typography variant="h5" id="data-MINIMIZATION">
                {" "}
                LINKS TO OTHER WEBSITES
              </Typography>
              <br />

              <Typography variant="body1">
                 As a convenience and to make Fairsure Travel’s website truly
                service oriented, we have included links to complementary sites
                on the Internet. These sites are owned and operated by third
                parties. Fairsure Travel makes no representation and is not
                responsible for the availability of, or content located on or
                through, these third party sites. A third party link from
                Fairsure Travel’s website is not an indication that Fairsure
                Travel endorses the third party or its site, or has any
                affiliation with or between Fairsure Travel and the third party
                hosting site.
              </Typography>
              <br />
              <br />

              <Typography variant="h5" id="information-control">
                FEEDBACK & RULES OF CONDUCT/FORUM/FACILITY
              </Typography>
              <br />

              <Typography variant="body1">
                By participating in and using this Facility, you represent,
                undertake, accept and acknowledge that you have read, accept and
                are bound by the disclaimer notice, copyright notice, terms and
                conditions of use and our privacy and data protection policy.
              </Typography>
              <br />
              <Typography variant="body1">
                Participation in the Fairsure Travel’s feedback forum facility
                (“the Facility”) and exchange of e-mails with other users will
                be subject to rules of good practice and courtesy to others. The
                principal purpose of our Facility is to facilitate information
                and feedback by users regarding our services.
              </Typography>
              <br />

              <Typography variant="body1">
                All comments, feedback, information or materials submitted to
                Fairsure Travel through or in association with this website
                shall be considered non-confidential and Fairsure Travel's
                property. By submitting such comments, information, feedback, or
                materials to Fairsure Travel, you agree to a no-charge
                assignment to Fairsure Travel of worldwide rights to use, copy,
                modify, display and distribute the submissions. Fairsure Travel
                may use such comments, information or materials in any way it
                chooses in an unrestricted basis.
              </Typography>
              <br />

              <Typography variant="body1">
                You cannot upload to www.Fairsuretravel.com.ng (“the Website”)
                or otherwise distribute or publish through the Facility or the
                Website any matter or material which is or may be considered
                abusive, pornographic, illegal, defamatory, obscene, racist or
                which is otherwise unlawful or designed to cause disruption to
                any computer systems or network. No user shall post any message
                to the Facility, which is in violation of the acceptable use
                policies in respect of this Facility. We reserve the right to
                delete and remove all postings. You are fully and solely
                responsible for your postings, messages, comments or discussions
                and accept liability for any resulting actions. The comments,
                postings and messages are opinions of the respective
                contributors or authors and do not necessarily reflect our
                opinions. We accept no responsibility for and make no
                representations relating to any messages, postings, comments and
                discussions. We do not confirm or represent the legitimacy,
                accuracy, reliability, correctness or currency of any data or
                postings entered by a user. 
              </Typography>
              <br />

              <Typography variant="body1">
                You consent to the disclosure through the software of your
                e-mail address. We believe and hope that the availability of
                such e-mail addresses can facilitate the growth of an on-line
                community within our Facility and ensure that participants take
                full responsibility for their postings. The Facility cannot
                under any circumstances be used for commercial purposes by any
                participant or user. We do not and cannot review every message
                posted on the Facility or Website. Accordingly, we are not
                responsible for the content of the postings, discussions and
                messages. You grant us a royalty free irrevocable permission to
                reproduce, download and print your postings, comments and
                messages. We reserve and retain the right or ability to remove
                the availability or ability of participants to post comments in
                the event of any breach of these acceptable use provisions. We
                will enforce appropriate sanctions against any of our Facility
                users or customers who are responsible for abuse of the
                Facility. Such sanctions may include, but are not limited to (a)
                a formal warning, (b) suspension of access through our Website
                or machines, (c) suspension of access to the Facility site or
                section, (d) termination of membership, or (e) termination of
                any registration of the user with our Website or services. By
                participation and use of this service, each user acknowledges
                that they will remain solely responsible for the content of
                their messages, comments and postings. We accept no
                responsibility for loss of data, information in any form or
                other matters whatsoever which result from the use of the
                Facility. We shall be entitled without liability to the user and
                at our discretion to remove any such content from our server
                immediately. You agree to indemnify and undertake to keep
                indemnified Fairsure Travel, their officers, servants and agents
                against any costs or expenses (including the cost of any
                settlement) arising out of any claim, action, proceeding or
                demand that may be brought, made or prosecuted against any of
                them arising out of or as a consequence of an unlawful or
                negligent act or omission or an infringement of any third party
                rights which arise out of or are connected in any way with the
                Facility and/or arising out of a breach of this acceptable use
                policy. 
                <br />
                One of our functions may be to facilitate booking reservations
                for you on pre-negotiated terms.
                <br />
                Please note that we are not responsible for remitting tax to
                relevant tax bodies as hotel suppliers will invoice Fairsure
                Travel for tax amount and hotel suppliers will hand over taxes
                applicable to relevant bodies. 
                <br />
                Areas and locations have their different tax rates and in paying
                tax amounts, there could be slight differences from tax recovery
                amount based on taxability and rates. Hotels may attract
                different service fees based on hotel type and amount. You
                should be able to confirm reservation changes where you fail to
                turn up, and must do so in not more than 24hrs or face the risk
                of having your reservation cancelled, as there are various
                cancellation policy periods for different hotels. 
                <br />
                Where you choose to cancel or alter your prepaid hotel
                reservation, you might be charged for such changes subject to
                the rules of the hotels for such changes and agree to pay for
                such changes as may occur. Once your hotel reservation request
                (s) have been lodged, you authorize Fairsure Travel to make
                hotel reservations on your behalf based on the room rates
                displayed on the website and on the availability of
                reservations, which will include payment arrangements, services
                fees, tax recovery charges. You are mandated to make back
                payments for early checkouts or no shows within days after
                checking out.
              </Typography>
              <br />
              <br />

              <Typography variant="h5" id="SECURITY">
                TRAVEL LOCATIONS:
              </Typography>
              <br />

              <Typography variant="body1">
                Please be aware that the degrees of travel risk in each country
                varies and that natural disasters could coincide with your
                travel itinerary. 
                <br />
                You are therefore urged to take all necessary precautions, and
                measures as well as heed to announcements by relevant
                authorities. Fairsure Travel will not be held responsible for
                the injuries suffered, nor loss or damage that may arise out of
                travel to places of risk. Fairsure Travel will not be held to
                responsible for acts of God, force majeure, acts of government
                or authority that might impede your travel. 
                <br />
                Fairsure Travel, its subsidiaries, agents, partners do not
                represent that the dissemination of information through this
                website would be accurate. Fairsure Travel would take all
                responsible steps to transmit up to date information on its
                website but would not held responsible for errors on pages on
                hotels information on hotel’s related operational services,
                booking prices, hotel ratings, products and packages. We will
                take all responsible steps to correct errors made on pricing
                list and reservation made based on those errors and we grant
                that you will be able to keep such reservation at the available
                price out at your option and at no cost. 
                <br />
                The choice for opting for any of these products and services
                contained on this website are yours and Fairsure Travel is not
                obliged and does not represent or make recommendations of
                products and services displayed on its website or by its
                affiliate. 
                <br />
                Fairsure Travel and its affiliates would not be held liable for
                erroneous and fraudulent mails sent through its websites,
                servers and companies and we maintain that our sites are free
                from viruses. Fairsure Travel disengages itself from damage of
                property injuries to persons, acts and omissions, breaches,
                errors or deaths arising from the acts of independent
                contractors, hotel suppliers who are not agents of Fairsure
                Travel and its affiliates. You are therefore prohibited from
                bringing actions against Fairsure Travel where you fail to
                access or use website or in cases of delay as well. 
              </Typography>

              <br />
              <br />

              <Typography variant="h5" id="UPDATES-MODIFICATIONS-AMENDMENTS">
                DISCLAIMER
              </Typography>
              <br />

              <Typography variant="body1">
                The Fairsure Travel Internet team strives to provide you with
                useful, accurate, and timely information on this website.
                Accordingly, Fairsure Travel has attempted to provide accurate
                information and materials on this website but assumes no
                responsibility for the quality, accuracy, efficacy,
                completeness, performance, fitness for a particular purpose of
                this page, the Site or any of its contents, including (but not
                limited) to any price quotes or non-fraudulent representations
                contained within the Site and the completeness of that
                information or materials. Fairsure Travel will not be liable for
                any damages (including, without limitation, damages for any
                consequential loss or loss of business opportunities or
                projects, or loss of profits) howsoever arising and whether in
                contract, tort or otherwise from the use of or inability to use
                the Site, or any of its contents and materials, or from any
                action or omission taken as a result of using the Site or any
                such contents.
                <br />
                This Site contains material in the form of information, price
                quotes or representations submitted by third parties and we
                accept no responsibility for the content or accuracy of such
                material nor do we make any representations by virtue of the
                contents of this Site in respect of the guaranteed availability
                of any services advertised. 
                <br />
                The currency rates pasted on this site if any, are for reference
                purposes and should not be acted on notes of finality because of
                unstable currency rates. You are advised to make further
                verification on the accuracy of currency rates from professional
                experts whose duties are incidental to currency rates
                conversion. You must not distribute the rates herein referenced
                to for commercial activities. 
                <br />
                Fairsure Travel may change the content of any information or
                materials available at this website, or to the products
                described in them, at any time without notice to you. However,
                Fairsure Travel makes no commitment to update the information or
                materials on this website which, as a result, may be out of
                date. Information and opinions expressed in bulletin boards or
                other forums are not necessarily those of Fairsure Travel.
                Neither Fairsure Travel, nor its officers, directors, employees,
                agents, distributors, or affiliates are responsible or liable
                for any loss damage (including, but not limited to, actual,
                consequential, or punitive), liability, claim, or other injury
                or cause related to or resulting from any information posted on
                Fairsure Travel's website. Fairsure Travel reserves the right to
                revise these terms and/or legal restrictions at any time. You
                are responsible for reviewing this page from time to time to
                ensure compliance with the then-current terms and legal
                restrictions because they will be binding on you. Certain
                provisions of these terms and legal restrictions may be
                superseded by expressly designated legal notices or terms
                located on particular pages of this website. We make no warranty
                that the contents of the Site are free from infection by viruses
                or anything else, which has contaminating, or destructive
                properties and shall have no liability in respect thereof as we
                do not have control over the contents of such websites. 
                <br />
                To this end: ALL INFORMATION AND MATERIALS AVAILABLE ON THIS
                WEBSITE ARE PROVIDED "AS IS" WITHOUT ANY WARRANTIES OF ANY KIND,
                EITHER EXPRESS OR IMPLIED, AND FAIRSURE TRAVEL DISCLAIMS AND
                EXCLUDES ALL WARRANTIES AND LIABILITIES OF ANY KIND TO THE
                FULLEST EXTENT PERMITTED BY APPLICABLE LAW, EITHER EXPRESS OR
                IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, NON-INFRINGEMENT OF INTELLECTUAL PROPERTY OR
                ARISING FROM A COURSE OF DEALING, USAGE OR TRADE PRACTICE. IN NO
                EVENT SHALL FAIRSURE TRAVEL BE LIABLE FOR ANY DAMAGES WHATSOEVER
                (INCLUDING, WITHOUT LIMITATION, INDIRECT, SPECIAL, CONSEQUENTIAL
                OR INCIDENTAL DAMAGES OR THOSE RESULTING FROM LOST PROFITS, LOST
                DATA OR BUSINESS INTERRUPTION) ARISING OUT OF THE USE, INABILITY
                TO USE, OR THE RESULTS OF USE OF THIS WEBSITE, ANY WEBSITES
                LINKED TO THIS WEBSITE, OR THE MATERIALS OR INFORMATION
                CONTAINED AT ANY OR ALL SUCH WEBSITES, WHETHER BASED ON
                WARRANTY, CONTRACT, TORT OR ANY OTHER LEGAL THEORY AND WHETHER
                OR NOT ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IF YOUR USE
                OF THE MATERIALS OR INFORMATION ON THIS WEBSITE RESULTS IN THE
                NEED FOR SERVICING, REPAIR OR CORRECTION OF EQUIPMENT OR DATA,
                YOU ASSUME ALL COSTS THEREOF.  
              </Typography>

              <br />
              <br />

              <Typography variant="h5" id="registration">
                TERMINATION OF USE
              </Typography>
              <br />

              <Typography variant="body1">
                Fairsure Travel may, in its sole discretion, terminate or
                suspend your access to all or part of the Fairsure Travel
                website, including, but not limited to any bulletin boards on
                its site, for any reason, including without limitation, breach
                of this agreement. In the event this agreement is terminated,
                the restrictions regarding materials appearing on the site and
                the representations and warranties, indemnities, and limitation
                of liabilities set forth in this agreement shall survive any
                such termination.
              </Typography>
              <br />
              <br />

              <Typography variant="h5" id="cookies">
                 GOVERNING LAW: JURISDICTION AND VENUE
              </Typography>
              <br />

              <Typography variant="body1">
                This Agreement shall be governed by and construed in accordance
                with the laws of the Federal Republic of Nigeria exclusive of
                its choice of law principles. The Nigerian courts shall have
                exclusive jurisdiction and venue over any dispute arising out of
                or relating to this Agreement, and each party hereby consents to
                the jurisdiction and venue of such courts. If you do not agree
                with the governing law of these terms, please do not use this
                Site. Any contentions, claims by you evolving from your access
                to use this website must be brought within six (6) months from
                the time which such action arose.
                <br />
                The question of validity of any part of this agreement to any
                applicable law shall be preceded by a valid provision that
                closely matches the intent of the original agreement.
                <br />
                This Agreement constitutes the entire understanding and
                agreement between you and Fairsure Travel in relation to the
                website with the exception of statements made fraudulently, each
                party agrees that it shall have no remedy in respect of any
                untrue statement made to them upon which they relied in entering
                this Agreement.
                <br />
                All rights not expressly granted herein are reserved.
              </Typography>

              <br />
              <br />

              <Typography variant="h5" id="SHARING">
                GENERAL PROVISIONS
              </Typography>
              <br />

              <Typography variant="body1">
                If any provision of this agreement is deemed void, unlawful or
                otherwise unenforceable for any reason, that provision shall be
                severed from this agreement and the remaining provisions of this
                agreement shall remain in force. This contains the entire
                agreement between you and Fairsure Travel concerning your use of
                the site, and the agreement shall not be modified, except in
                writing, signed by both parties. If you have questions regarding
                Fairsure Travel's Terms and Conditions, please email:{" "}
                <a href="mailto:legal@Fairsure Travel.com. ">
                  legal@Fairsure Travel.com. 
                </a>
                <br />© Copyright 
                <strong>FAIRSURE TRAVEL.COM.NG LIMITED (2012-2024)</strong>. All
                rights reserved. Reproduction, adaptation, or translation
                without permission is prohibited except as allowed under local
                and International copyright laws. All the text, graphics,
                design, content, and other works are the copyrighted works of 
                <strong>FAIRSURE TRAVEL & TOURS LIMITED</strong>. 
              </Typography>

              <br />
              <br />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TermsAndCondition;
