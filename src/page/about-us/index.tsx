import React, {useState} from 'react'
import NewPageContainer from "../../components/new-page-container";
import {alpha, Box, Container, InputAdornment, Tab, Tabs, Typography, useTheme} from "@mui/material";
import aboutUsIllustration from "../../assets/images/aboutIllustrationNew.png";
import Toolbar from "@mui/material/Toolbar";
import {useLocation} from "react-router-dom";
import {useForm, Controller} from "react-hook-form";
import {LoadingButton} from "@mui/lab";
import {ThemeTextField} from "../../components/inputs/theme-text-field";
import {Attachment} from "@mui/icons-material";
import groupIllustration from "../../assets/images/groupIllustration.svg";
import PageContainer from "../../components/page-container";
import bannerBg from "../../assets/images/hero-banner-1.jpg";
import partnerWithUs from "../../assets/images/aboutIllustrationNew.png";
import bg from "../../assets/images/hero-banner-1.jpg";
import ContactUs from "../contact-us";
import Clients from "../home/clients";


export default function AboutUs() {

    const theme = useTheme()
    const location = useLocation()
    const [submitted, setSubmitted] = useState(false)


    const onSubmit = (data: any) => {
        setTimeout(() => {
            console.log(data)
            setSubmitted(true)
        }, 1000)
    }

    return (
        <NewPageContainer sx={{background: 'none'}}>
            <Box component={'section'} className={'animate__animated animate__fadeIn'} sx={{
                minHeight: {xs: '200px', sm: '240px'},
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
                }}/>

                <Box className={'headingBlock'}>
                    <Typography variant={'h1'}>About Us</Typography>
                    <Typography variant={'body2'} className={'headDes'}>Making the world a smaller place</Typography>
                </Box>

            </Box>


            <Container>
                <Box component={'section'} sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& .contentBlock': {
                        flex: '2 1 300px',
                        '& h1': {
                            fontSize: 'clamp(1.7rem, 8vw, 3.2rem)',
                            fontWeight: 600,
                            color: theme.palette.secondary.dark,
                            textDecoration: 'underline',
                            textDecorationColor: theme.palette.primary.main,
                            mb: 3,
                        },
                        '& .headDes': {
                            textIndent: '1.5rem',
                            fontSize: '15px',
                            lineHeight: '24px',
                            textAlign: 'justify',
                            mb: 2,
                        },
                    },
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap-reverse',
                        justifyContent: 'space-around',
                        alignItems: {xs: 'flex-start', sm: 'flex-end'},
                        minHeight: {xs: 'min(90vh, 600px)', sm: 'min(70vh, 500px)'},
                        '& .desBlock': {
                            flex: '2 1 300px',
                            mb: 5,
                            textAlign: 'justify',
                            mx: 'auto',
                            pt: 5,
                            color: theme.palette.secondary.main,
                            width: {xs: '100%', sm: '90%', md: '80%'},
                            fontSize: theme.typography.pxToRem(15),
                            '& h1': {
                                fontSize: 'clamp(1.7rem, 8vw, 3.2rem)',
                                fontWeight: 600,
                                color: theme.palette.secondary.dark,
                                textDecoration: 'underline',
                                textDecorationColor: theme.palette.primary.main,
                                mb: 3,
                            },
                            '& .headDes': {
                                textIndent: '1.5rem',
                                fontSize: '15px',
                                lineHeight: '24px',
                                textAlign: 'justify',
                                mb: 2,
                            },
                        },
                        '& .imageBlock': {
                            flex: '1 1 300px',
                            textAlign: 'center',
                            '& .groupIllustration': {
                                width: {xs: '85%', sm: '80%'},
                                maxHeight: '350px',
                                objectFit: 'contain',
                                mx: 'auto',
                            },
                        },
                    }}>
                        <Box className={'desBlock'}>
                            {/*<Typography className={'heading'} data-aos="fade-up" data-aos-anchor-placement="center-bottom">*/}
                            {/*    About Us*/}
                            {/*</Typography>*/}
                            <Typography variant={'body2'} className={'headDes'}>
                                Established in 2012, Eternity is dedicated to revolutionizing the logistics
                                landscape in India
                                by leveraging digital solutions. Over the years, Eternity has emerged as a prominent
                                player in
                                the Indian logistics market. With a strong emphasis on efficiency, Eternity excels
                                in providing
                                comprehensive services in the PTL (Partial Truckload), Dropship, and FTL (Full
                                Truckload)
                                sectors. With a widespread operational presence spanning over 21+ states throughout
                                the country,
                                Eternity consistently adds value to the logistics industry, contributing to its
                                growth and
                                success in numerous ways.
                            </Typography>
                            <Typography variant={'body2'} className={'headDes'}>
                                Additionally, Eternity boasts a robust network connectivity that spans both urban
                                and rural
                                areas. Recognizing the importance of reaching every corner of the country, we have
                                strategically
                                established a strong presence in rural regions, ensuring seamless logistics services
                                even in the
                                most remote locations. This extensive network enables us to cater to diverse
                                customer needs,
                                bridging the gap between urban and rural markets. By leveraging our wide-ranging
                                infrastructure
                                and efficient operations, we are committed to delivering reliable and timely
                                logistics solutions
                                to businesses and individuals across India, irrespective of their geographic
                                location. ways.
                            </Typography>
                        </Box>

                        <Box className={'imageBlock'}>
                            <img src={groupIllustration} className={'groupIllustration'}/>
                        </Box>
                    </Box>
                </Box>

                <Box component={'section'} sx={{
                    p: 3,
                    display: 'flex',
                    flexFlow: 'column',
                    flexWrap: 'wrap',
                    gap: 3,
                    '& .contentBlock': {
                        flex: '2 1 300px',
                        '& h1': {
                            fontSize: 'clamp(1.7rem, 8vw, 3.2rem)',
                            fontWeight: 600,
                            color: theme.palette.secondary.dark,
                            textDecoration: 'underline',
                            textDecorationColor: theme.palette.primary.main,
                            mb: 3,
                        },
                        '& .headDes': {
                            textIndent: '1.5rem',
                            fontSize: '15px',
                            lineHeight: '24px',
                            textAlign: 'justify',
                            mb: 2,
                        },
                    },
                    '& .formBlock': {
                        flex: '1 1 300px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        '& .formBox': {
                            flex: 1,
                            maxWidth: '350px',
                            minHeight: '300px',
                            background: theme.palette.background.paper,
                            borderRadius: '20px',
                            boxShadow: `0 0 17px -3px #83838370`,
                            p: 2,
                            outline: `2px solid ${theme.palette.primary.main}`,
                            outlineOffset: '-16px',
                            py: 4,
                        },
                    },
                }}>
                    <Box className={'contentBlock'}>
                        <Typography className={'heading'} variant={'h3'} data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            Our Vision
                        </Typography>
                        <Typography variant={'body2'} className={'headDes'}>
                            At Eternity Forwarders, our vision is to redefine the logistics industry through innovative
                            solutions and exceptional service. We aim to be the leading provider of end-to-end logistics
                            services, empowering businesses worldwide to thrive in a seamless and interconnected global
                            marketplace.
                        </Typography>
                        <Box className={'coreValue'}><Typography className={'title'}>Customer-Centric
                            Approach</Typography></Box>
                        <Box className={'coreValue'}><Typography className={'title'}>Reliability and
                            Efficiency</Typography></Box>
                        <Box className={'coreValue'}><Typography className={'title'}>Innovation and
                            Adaptability</Typography></Box>
                        <Box className={'coreValue'}><Typography className={'title'}>Global Reach with Local
                            Expertise</Typography></Box>
                        <Box className={'coreValue'}><Typography className={'title'}>Environmental
                            Responsibility</Typography></Box>
                    </Box>
                    <Box className={'formBlock'}>
                        <Box className={'formBox'}>
                            {
                                submitted
                                    ? <p>Thank You</p>
                                    : <ApplicationForm onSubmit={onSubmit}/>
                            }
                        </Box>
                    </Box>
                </Box>

                <Clients/>

                <ContactUs/>
            </Container>
        </NewPageContainer>
    )
}

export const ApplicationForm = (props: any) => {

    const {onSubmit} = props

    const {control, handleSubmit, formState: {errors}} = useForm()
    const theme = useTheme()

    return (
        <>
            <Typography variant={'h4'} sx={{
                textAlign: 'center',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: theme.palette.secondary.dark,
                mb: 2,
            }}>Join Us</Typography>

            <Box component={'form'} className={'form'} sx={{
                width: '90%',
                maxWidth: '300px',
                mx: 'auto',
                '& .MuiButton-root': {
                    height: '40px',
                    borderRadius: '12px',
                    fontSize: '1rem',
                },
            }}>
                <>
                    <Controller
                        name={`fullName`}
                        defaultValue={''}
                        control={control}
                        rules={{
                            required: {value: true, message: 'Required'}
                        }} render={({field}) => (
                        <ThemeTextField
                            {...field} required
                            error={Boolean(errors?.fullName)}
                            helperText={(errors?.fullName?.message ?? '').toString()}
                            size={'small'} label={'Full Name'}
                            sx={{flex: 1}}
                            placeholder={'Your Name'}/>
                    )}/>


                    <Controller
                        name={`phone`}
                        control={control}
                        rules={{
                            required: {value: true, message: 'Required'},
                            pattern: {value: /^[6-9]\d{9}$/, message: 'Enter valid phone number'}
                        }}
                        render={({field}) => (
                            <ThemeTextField
                                {...field} required
                                error={Boolean(errors?.phone)}
                                helperText={(errors?.phone?.message ?? '').toString()}
                                size={'small'} label={'Phone'}
                                sx={{flex: 1, minWidth: {xs: '100%', sm: '22%'}}}
                                placeholder={'XXXX XXX XXX'}
                            />
                        )}/>

                    <Controller
                        name={`email`}
                        defaultValue={''}
                        control={control}
                        rules={{
                            required: {value: true, message: 'Required'},
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Enter valid email address'
                            }
                        }} render={({field}) => (
                        <ThemeTextField
                            {...field} required
                            error={Boolean(errors?.email)}
                            helperText={(errors?.email?.message ?? '').toString()}
                            size={'small'} label={'Email'}
                            sx={{flex: 1}}
                            placeholder={'your@email.address'}/>
                    )}/>

                    <Controller
                        name={`education`}
                        defaultValue={''}
                        control={control}
                        rules={{
                            required: {value: false, message: 'Required'},
                        }} render={({field}) => (
                        <ThemeTextField
                            {...field}
                            error={Boolean(errors?.education)}
                            helperText={(errors?.education?.message ?? '').toString()}
                            size={'small'} label={'Qualification'}
                            sx={{flex: 1}}
                            placeholder={'Highest qualification'}/>
                    )}/>
                    <Controller
                        name={`location`}
                        defaultValue={''}
                        control={control}
                        rules={{
                            required: {value: true, message: 'Required'},
                        }} render={({field}) => (
                        <ThemeTextField
                            {...field} required
                            error={Boolean(errors?.location)}
                            helperText={(errors?.location?.message ?? '').toString()}
                            size={'small'} label={'Location'}
                            sx={{flex: 1}}
                            placeholder={'Location'}/>
                    )}/>
                    <Controller
                        name={`cv`}
                        defaultValue={''}
                        control={control}
                        rules={{
                            required: {value: false, message: 'Required'},
                        }} render={({field}) => (
                        <ThemeTextField
                            {...field}
                            error={Boolean(errors?.cv)}
                            helperText={(errors?.cv?.message ?? '').toString()}
                            size={'small'} label={'Upload CV'}
                            type={'file'}
                            InputProps={{
                                startAdornment: <InputAdornment
                                    position="start"><Attachment/></InputAdornment>,
                            }}
                            inputProps={{accept: 'image/png, image/jpeg, image/jpg, application/pdf'}}
                            sx={{flex: 1}}/>
                    )}/>
                </>
                <LoadingButton
                    loading={false}
                    fullWidth
                    onClick={handleSubmit(onSubmit)}
                    loadingPosition="end"
                    endIcon={<></>}
                    variant={'contained'}>
                    Submit Request
                </LoadingButton>
            </Box>
        </>
    )
}