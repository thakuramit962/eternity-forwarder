import React from 'react'
import NewPageContainer from '../../components/new-page-container'
import { Toolbar, useTheme, Box, alpha, Typography, Container } from '@mui/material'
import bg from "../../assets/images/hero-banner-1.jpg";


export default function TermsOfUses() {

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
                    <Typography variant={'h1'}>Terms and Conditions</Typography>
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
                        textIndent: 16,
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
                    <Typography className={'description'} sx={{mt: 4}}>
                        By downloading or using the app, these terms will automatically apply to you – you should make
                        sure therefore that you read them carefully before using the app. You’re not allowed to copy or
                        modify the app, any part of the app, or our trademarks in any way. You’re not allowed to attempt
                        to extract the source code of the app, and you also shouldn’t try to translate the app into
                        other languages or make derivative versions. The app itself, and all the trademarks, copyright,
                        database rights, and other intellectual property rights related to it, still belong to Eternity
                        Forwarders.
                    </Typography>

                    <Typography className={'description'}>
                        Eternity Forwarders is committed to ensuring that the app is as useful and efficient as
                        possible. For that reason, we reserve the right to make changes to the app or to charge for its
                        services, at any time and for any reason. We will never charge you for the app or its services
                        without making it very clear to you exactly what you’re paying for.
                    </Typography>


                    <Typography className={'description'}>
                        The Ship Rider app stores and processes personal data that you have provided to us, to provide
                        our Service. It’s your responsibility to keep your phone and access to the app secure. We
                        therefore recommend that you do not jailbreak or root your phone, which is the process of
                        removing software restrictions and limitations imposed by the official operating system of your
                        device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise
                        your phone’s security features and it could mean that the Ship Rider app won’t work properly or
                        at all.
                    </Typography>


                    <Typography className={'description'}>
                        The app does use third-party services that declare their Terms and Conditions.
                    </Typography>


                    <Typography className={'description'}>
                        Link to Terms and Conditions of third-party service providers used by the app
                    </Typography>


                    <Typography className={'listOne'}>Google Play Services</Typography>
                    <Typography className={'description'}>
                        You should be aware that there are certain things
                        that Eternity Forwarders will not take responsibility for. Certain functions of the app will
                        require the app to have an active internet connection. The connection can be Wi-Fi or provided
                        by your mobile network provider, but Eternity Forwarders cannot take responsibility for the app
                        not working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of
                        your data allowance left.
                    </Typography>
                    <Typography className={'description'}>
                        If you’re using the app outside of an area with Wi-Fi, you should remember that the terms of the
                        agreement with your mobile network provider will still apply. As a result, you may be charged by
                        your mobile provider for the cost of data for the duration of the connection while accessing the
                        app, or other third-party charges. In using the app, you’re accepting responsibility for any
                        such charges, including roaming data charges if you use the app outside of your home territory
                        (i.e. region or country) without turning off data roaming. If you are not the bill payer for the
                        device on which you’re using the app, please be aware that we assume that you have received
                        permission from the bill payer for using the app.
                    </Typography>
                    <Typography className={'description'}>
                        Along the same lines, Eternity Forwarders cannot always take responsibility for the way you use
                        the app i.e. You need to make sure that your device stays charged – if it runs out of battery
                        and you can’t turn it on to avail the Service, Eternity Forwarders cannot accept responsibility.
                    </Typography>
                    <Typography className={'description'}>
                        With respect to Eternity Forwarders’s responsibility for your use of the app, when you’re using
                        the app, it’s important to bear in mind that although we endeavor to ensure that it is updated
                        and correct at all times, we do rely on third parties to provide information to us so that we
                        can make it available to you. Eternity Forwarders accepts no liability for any loss, direct or
                        indirect, you experience as a result of relying wholly on this functionality of the app.
                    </Typography>
                    <Typography className={'description'}>
                        At some point, we may wish to update the app. The app is currently available on Android – the
                        requirements for the system(and for any additional systems we decide to extend the availability
                        of the app to) may change, and you’ll need to download the updates if you want to keep using the
                        app. Eternity Forwarders does not promise that it will always update the app so that it is
                        relevant to you and/or works with the Android version that you have installed on your device.
                        However, you promise to always accept updates to the application when offered to you, We may
                        also wish to stop providing the app, and may terminate use of it at any time without giving
                        notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights
                        and licenses granted to you in these terms will end; (b) you must stop using the app, and (if
                        needed) delete it from your device.
                    </Typography>


                    <Typography className={'listOne'}>Changes to This Terms and Conditions</Typography>
                    <Typography className={'description'}>
                        We may update our Terms and Conditions from time to time. Thus, you are advised to review this
                        page periodically for any changes. We will notify you of any changes by posting the new Terms
                        and Conditions on this page.
                    </Typography>
                    <Typography className={'description'}>
                        These terms and conditions are effective as of 2023-03-23
                    </Typography>


                    <Typography className={'listOne'}>Contact Us</Typography>
                    <Typography className={'description'}>
                        If you have any questions or suggestions about our Terms and Conditions, do not hesitate to
                        contact us at <a href={'mailto:itsupport@eternityforwarders.com'}
                                         style={{color: theme.palette.primary.main, textDecoration: 'none'}}
                                         target={'_blank'}>itsupport@eternityforwarders.com</a>.
                    </Typography>
                </Box>
            </Box>
            </Container>
        </NewPageContainer>
    )
}