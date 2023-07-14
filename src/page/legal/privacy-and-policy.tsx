import React from 'react'
import NewPageContainer from '../../components/new-page-container'
import { Toolbar, useTheme, Box, alpha, Typography, Container } from '@mui/material'
import bg from "../../assets/images/hero-banner-1.jpg";


export default function PrivacyAndPolicy() {

    const theme = useTheme()

    return (
        <NewPageContainer>
            <Box component={'section'} className={'animate__animated animate__fadeIn'} sx={{
                minHeight: { xs: '200px', sm: '240px' },
                backgroundImage: `linear-gradient(${alpha(theme.palette.text.primary, 0.1)}, ${alpha(theme.palette.text.primary, 0.4)}), url(${bg})`,
                backgroundColor: theme.palette.background.default,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                display: 'flex',
                flexFlow: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignContent: 'center',
                gap: 3,
                px: 3,
                pb: 4,
                '& .headingBlock': {
                    width: '100%',
                    display: 'flex',
                    flexFlow: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    alignContent: 'center',
                    '& h1': {
                        fontSize: 'clamp(1.7rem, 8vw, 3.5rem)',
                        fontWeight: 600,
                        color: theme.palette.primary.light,
                    },
                    '& .headDes': {
                        color: alpha(theme.palette.secondary.contrastText, 0.85),
                    },
                },
            }}>

                <Toolbar disableGutters sx={{
                    height: '90px',
                    transition: 'all 300ms ease-in-out',
                }} />

                <Box className={'headingBlock'}>
                    <Typography variant={'h1'}>Privacy Policy</Typography>
                    {/* <Typography variant={'body2'} className={'headDes'}>Making the world a smaller place</Typography> */}
                </Box>

            </Box>

            <Container>
                <Box sx={{
                    mt: 5,
                    maxWidth: '900px',
                    mx: 'auto',
                }}>
              
                    <Box sx={{
                        '& .listOne': {
                            fontSize: '1.2rem',
                            color: theme.palette.primary.main,
                            mt: 2,
                        },
                        '& .description': {
                            textAlign: 'justify',
                            fontSize: '0.9rem',
                            mb: 1,
                        },
                        '& ul': {
                            fontSize: '0.9rem',
                            listStyleType: 'decimal'
                        },
                        '& ol': {
                            fontSize: '0.9rem',
                            '& li span': {
                                fontWeight: 500,
                            },
                        },

                    }}>

                        <Typography className={'description'}>
                            <strong>Welcome to Eternity Forwarders</strong><br />
                            Eternity Forwarders we operates https://www.eternityforwarders.com (hereinafter referred to as
                            “Service”).
                        </Typography>
                        <Typography className={'description'}>
                            Our Privacy Policy governs your visit to https://www.eternityforwarders.com , and explains how
                            we collect, safeguard and disclose information that results from your use of our Service.
                        </Typography>
                        <Typography className={'description'}>
                            We use your data to provide and improve Service. By using Service, you agree to the collection
                            and use of information in accordance with this policy. Unless otherwise defined in this Privacy
                            Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and
                            Conditions.
                        </Typography>
                        <Typography className={'description'}>
                            Our Terms and Conditions (“Terms”) govern all use of our Service and together with the Privacy
                            Policy constitutes your agreement with us (“agreement”).
                        </Typography>


                        <Typography className={'listOne'}>Definitions</Typography>
                        <Typography className={'description'}>
                            <strong>SERVICE</strong> means the https://www.eternityforwarders.com website operated by
                            Eternity Forwarders
                        </Typography>
                        <Typography className={'description'}>
                            <strong>PERSONAL DATA</strong> means data about a living individual who can be identified from
                            those data (or from those and other information either in our possession or likely to come into
                            our possession).
                        </Typography>
                        <Typography className={'description'}>
                            <strong>USAGE DATA</strong> is data collected automatically either generated by the use of
                            Service or from Service infrastructure itself (for example, the duration of a page visit).
                        </Typography>
                        <Typography className={'description'}>
                            <strong>COOKIES</strong> are small files stored on your device (computer or mobile device).
                        </Typography>
                        <Typography className={'description'}>
                            <strong>DATA CONTROLLER</strong> means a natural or legal person who (either alone or jointly or
                            in common with other persons) determines the purposes for which and the manner in which any
                            personal data are, or are to be, processed. For the purpose of this Privacy Policy, we are a
                            Data Controller of your data.
                        </Typography>
                        <Typography className={'description'}>
                            <strong>DATA PROCESSORS</strong> (OR SERVICE PROVIDERS) means any natural or legal person who
                            processes the data on behalf of the Data Controller. We may use the services of various Service
                            Providers in order to process your data more effectively.
                        </Typography>
                        <Typography className={'description'}>
                            <strong>DATA SUBJECT</strong> is any living individual who is the subject of Personal Data.
                        </Typography>
                        <Typography className={'description'}>
                            <strong>THE USER</strong> is the individual using our Service. The User corresponds to the Data
                            Subject, who is the subject of Personal Data.
                        </Typography>

                        <Typography className={'listOne'}>Information Collection and Use</Typography>
                        <Typography className={'description'}>
                            For a better experience, while using our Service, we may require you to provide us with certain
                            personally identifiable information, including but not limited to Location access, Camera
                            Access. The information that we request will be retained by us and used as described in this
                            privacy policy.
                        </Typography>

                        <Typography className={'listOne'}>Types of Data Collected</Typography>
                        <Typography className={'description'}>
                            <strong>Personal Data</strong><br /> While using our Service, we may ask you to provide us with
                            certain personally identifiable information that can be used to contact or identify you
                            (“Personal Data”). Personally identifiable information may include, but is not limited to:
                        </Typography>

                        <ul>
                            <li>Email address</li>
                            <li>First name and last name</li>
                            <li>Phone number</li>
                            <li>Address, State, Province, ZIP/Postal code, City</li>
                            <li>Cookies and Usage Data</li>
                        </ul>
                        <Typography className={'description'}>
                            We may use your Personal Data to contact you with newsletters, marketing or promotional
                            materials and other information that may be of interest to you. You may opt out of receiving
                            any, or all, of these communications from us by following the unsubscribe link.
                        </Typography>


                        <Typography className={'description'}>
                            <strong>Usage Data</strong><br /> We may also collect information that your browser sends
                            whenever you visit our Service or when you access Service by or through a mobile device (“Usage
                            Data”).
                        </Typography>
                        <Typography className={'description'}>
                            This Usage Data may include information such as your computer’s Internet Protocol address (e.g.
                            IP address), browser type, browser version, the pages of our Service that you visit, the time
                            and date of your visit, the time spent on those pages, unique device identifiers and other
                            diagnostic data.
                        </Typography>
                        <Typography className={'description'}>
                            When you access Service with a mobile device, this Usage Data may include information such as
                            the type of mobile device you use, your mobile device unique ID, the IP address of your mobile
                            device, your mobile operating system, the type of mobile Internet browser you use, unique device
                            identifiers and other diagnostic data.
                        </Typography>


                        <Typography className={'description'}>
                            <strong>Location Data</strong><br />We may use and store information about your location if you
                            give us permission to do so (“Location Data”). We use this data to provide features of our
                            Service, to improve and customize our Service.
                        </Typography>
                        <Typography className={'description'}>
                            You can enable or disable location services when you use our Service at any time by way of your
                            device settings.
                        </Typography>


                        <Typography className={'description'}>
                            <strong>Location Data – Shadow</strong><br />To participate as a Shadow driver, you must permit
                            the Shadow Services to access location services through the permission system used by your
                            mobile operating system (“Platform”) or browser. We may collect the precise location of your
                            device when the Shadow app is running in the foreground or background of your device. We may
                            also derive your approximate location from your IP address. We use your location information to
                            verify that you are present in your preferred region or city when you begin or engage in a
                            delivery through the Eternity Forwarders. connect you with delivery opportunities in your zone,
                            and track the progress and completion of your Deliveries. You can enable the location tracking
                            feature through the settings on your device or Platform or when prompted by the Shadow mobile
                            app. If you choose to disable the location feature through the settings on your device or
                            Platform, Eternity Forwarders will not receive precise location information from your device,
                            which will prevent you from being able to Trip and receiving delivery opportunities in your
                            area.
                        </Typography>


                        <Typography className={'description'}>
                            <strong>Tracking Cookies Data</strong><br />We use cookies and similar tracking technologies to
                            track the activity on our Service and we hold certain information.
                        </Typography>
                        <Typography className={'description'}>
                            Cookies are files with a small amount of data which may include an anonymous unique identifier.
                            Cookies are sent to your browser from a website and stored on your device. Other tracking
                            technologies are also used such as beacons, tags and scripts to collect and track information
                            and to improve and analyze our Service.
                        </Typography>
                        <Typography className={'description'}>
                            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                            However, if you do not accept cookies, you may not be able to use some portions of our Service.
                        </Typography>
                        <Typography className={'description'}>
                            Examples of Cookies we use:</Typography>

                        <ul>
                            <li>Session Cookies: We use Session Cookies to operate our Service.</li>
                            <li>Preference Cookies: We use Preference Cookies to remember your preferences and various
                                settings.
                            </li>
                            <li>Security Cookies: We use Security Cookies for security purposes.</li>
                            <li>Advertising Cookies: Advertising Cookies are used to serve you with advertisements that may
                                be
                                relevant to you and your interests.
                            </li>
                        </ul>

                        <Typography className={'description'}>
                            <strong>Other Data</strong><br />While using our Service, we may also collect the following
                            information: sex, age, date of birth, place of birth, passport details, citizenship,
                            registration at place of residence and actual address, telephone number (work, mobile), details
                            of documents on education, qualification, professional training, employment agreements,
                            non-disclosure agreements, information on bonuses and compensation, information on marital
                            status, family members, social security (or other taxpayer identification) number, office
                            location and other data.
                        </Typography>


                        <Typography className={'listOne'}>Use of Data</Typography>
                        <Typography className={'description'}>
                            Eternity Forwarders uses the collected data for various purposes:</Typography>

                        <ul>
                            <li>to provide and maintain our Service</li>
                            <li>to notify you about changes to our Service</li>
                            <li>to allow you to participate in interactive features of our Service when you choose to do
                                so
                            </li>
                            <li>to provide customer support</li>
                            <li>to gather analysis or valuable information so that we can improve our Service</li>
                            <li>to monitor the usage of our Service</li>
                            <li>to detect, prevent and address technical issues</li>
                            <li>to fulfill any other purpose for which you provide it</li>
                            <li>to carry out our obligations and enforce our rights arising from any contracts entered into
                                between
                                you and us, including for billing and collection
                            </li>
                            <li>to provide you with notices about your account and/or subscription, including expiration and
                                renewal notices, email-instructions, etc.
                            </li>
                            <li>to provide you with news, special offers and general information about other goods, services
                                and events which we offer that are similar to those that you have already purchased or
                                enquired about unless you have opted not to receive such information
                            </li>
                            <li>in any other way we may describe when you provide the information</li>
                            <li>for any other purpose with your consent</li>
                        </ul>


                        <Typography className={'listOne'}>Retention of Data</Typography>
                        <Typography className={'description'}>
                            We will retain your Personal Data only for as long as is necessary for the purposes set out in
                            this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply
                            with our legal obligations (for example, if we are required to retain your data to comply with
                            applicable laws), resolve disputes, and enforce our legal agreements and policies.
                        </Typography>
                        <Typography className={'description'}>
                            We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained
                            for a shorter period, except when this data is used to strengthen the security or to improve the
                            functionality of our Service, or we are legally obligated to retain this data for longer time
                            periods.
                        </Typography>


                        <Typography className={'listOne'}>Transfer of Data</Typography>
                        <Typography className={'description'}>
                            Your information, including Personal Data, may be transferred to – and maintained on – computers
                            located outside of your state, province, country or other governmental jurisdiction where the
                            data protection laws may differ from those of your jurisdiction.
                        </Typography>
                        <Typography className={'description'}>
                            If you are located outside United States, Puerto Rico and choose to provide information to us,
                            please note that we transfer the data, including Personal Data, to United States, Puerto Rico
                            and process it there.
                        </Typography>
                        <Typography className={'description'}>
                            Your consent to this Privacy Policy followed by your submission of such information represents
                            your agreement to that transfer.
                        </Typography>
                        <Typography className={'description'}>
                            Eternity Forwarders will take all the steps reasonably necessary to ensure that your data is
                            treated securely and in accordance with this Privacy Policy and no transfer of your Personal
                            Data will take place to an organisation or a country unless there are adequate controls in place
                            including the security of your data and other personal information.
                        </Typography>


                        <Typography className={'listOne'}>Disclosure of Data</Typography>
                        <Typography className={'description'}>
                            We may disclose personal information that we collect, or you provide:
                        </Typography>

                        <ol>
                            <li>
                                <span>Disclosure for Law Enforcement</span><br />
                                Under certain circumstances, we may be required to disclose your Personal Data if required
                                to do so by law or in response to valid requests by public authorities.
                            </li>
                            <li><span>Business Transaction</span><br />
                                If we or our subsidiaries are involved in a merger, acquisition or asset sale, your Personal
                                Data may be transferred.
                            </li>
                            <li><span>Other cases. We may disclose your information also:</span><br />
                                <ul style={{ listStyleType: 'disc' }}>
                                    <li>to our subsidiaries and affiliates</li>
                                    <li>to contractors, service providers, and other third parties we use to support our
                                        business
                                    </li>
                                    <li>to fulfill the purpose for which you provide it</li>
                                    <li>for the purpose of including your company’s logo on our website</li>
                                    <li>for any other purpose disclosed by us when you provide the information</li>
                                    <li>with your consent in any other cases</li>
                                    <li>if we believe disclosure is necessary or appropriate to protect the rights,
                                        property, or safety of the Company, our customers, or others
                                    </li>
                                </ul>
                            </li>
                        </ol>


                        <Typography className={'listOne'}>Security of Data</Typography>
                        <Typography className={'description'}>
                            The security of your data is important to us but remember that no method of transmission over
                            the Internet or method of electronic storage is 100% secure. While we strive to use commercially
                            acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                        </Typography>


                        <Typography className={'listOne'}>Service Providers</Typography>
                        <Typography className={'description'}>
                            We may employ third-party companies and individuals to facilitate our Service (“Service
                            Providers”), provide Service on our behalf, perform Service-related services or assist us in
                            analyzing how our Service is used.
                        </Typography>
                        <Typography className={'description'}>
                            These third parties have access to your Personal Data only to perform these tasks on our behalf
                            and are obligated not to disclose or use it for any other purpose.
                        </Typography>


                        <Typography className={'listOne'}>Analytics</Typography>
                        <Typography className={'description'}>
                            We may use third-party Service Providers to monitor and analyze the use of our Service.
                        </Typography>

                        <Typography className={'listOne'}>CI/CD tools</Typography>
                        <Typography className={'description'}>
                            We may use third-party Service Providers to automate the development process of our Service.
                        </Typography>

                        <Typography className={'listOne'}>Advertising</Typography>
                        <Typography className={'description'}>
                            We may use third-party Service Providers to show advertisements to you to help support and
                            maintain our Service.
                        </Typography>

                        <Typography className={'listOne'}>Behavioral Remarketing</Typography>
                        <Typography className={'description'}>
                            We may use remarketing services to advertise on third party websites to you after you visited
                            our Service. We and our third-party vendors use cookies to inform, optimise and serve ads based
                            on your past visits to our Service.
                        </Typography>

                        <Typography className={'listOne'}>Payments</Typography>
                        <Typography className={'description'}>
                            We may provide paid products and/or services within Service. In that case, we use third-party
                            services for payment processing (e.g. payment processors).
                        </Typography>
                        <Typography className={'description'}>
                            We will not store or collect your payment card details. That information is provided directly to
                            our third-party payment processors whose use of your personal information is governed by their
                            Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by
                            the PCI Security Standards Council, which is a joint effort of brands like Visa, Mastercard,
                            American Express and Discover. PCI-DSS requirements help ensure the secure handling of payment
                            information.
                        </Typography>


                        <Typography className={'listOne'}>Links to Other Sites</Typography>
                        <Typography className={'description'}>
                            Our Service may contain links to other sites that are not operated by us. If you click a third
                            party link, you will be directed to that third party’s site. We strongly advise you to review
                            the Privacy Policy of every site you visit.
                        </Typography>
                        <Typography className={'description'}>
                            We have no control over and assume no responsibility for the content, privacy policies or
                            practices of any third party sites or services.
                        </Typography>
                        <Typography className={'description'}>
                            For example, the outlined Privacy Policy has been created using PolicyMaker.io, a free web
                            application for generating high-quality legal documents. PolicyMaker’s online privacy policy
                            generator is an easy-to-use free tool for creating an excellent privacy policy template for a
                            website, blog, online store or app.
                        </Typography>


                        <Typography className={'listOne'}>Children’s Privacy</Typography>
                        <Typography className={'description'}>
                            Our Services are not intended for use by children under the age of 18 (“Child” or “Children”).
                            <br />
                            We do not knowingly collect personally identifiable information from Children under 18. If you
                            become aware that a Child has provided us with Personal Data, please contact us. If we become
                            aware that we have collected Personal Data from Children without verification of parental
                            consent, we take steps to remove that information from our servers.
                        </Typography>


                        <Typography className={'listOne'}>Changes to This Privacy Policy</Typography>
                        <Typography className={'description'}>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting
                            the new Privacy Policy on this page.
                        </Typography>
                        <Typography className={'description'}>
                            We will let you know via email and/or a prominent notice on our Service, prior to the change
                            becoming effective and update “effective date” at the top of this Privacy Policy.
                        </Typography>
                        <Typography className={'description'}>
                            You are advised to review this Privacy Policy periodically for any changes. Changes to this
                            Privacy Policy are effective when they are posted on this page.
                        </Typography>


                        <Typography className={'listOne'}>Contact Us</Typography>
                        <Typography className={'description'}>
                            If you have any questions about this Privacy Policy, please contact us by <strong>email:
                                support@eternityforwarders.com</strong><br /><br />
                            <strong>Company Name</strong> : Eternity Forwarders Private Limited<br />
                            <strong>Website Url</strong> : https://www.eternityforwarders.com<br />
                            <strong>Support Email</strong> : support@eternityforwarders.com<br />
                            <strong>App Name</strong> : ShipRider
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </NewPageContainer>
    )
}