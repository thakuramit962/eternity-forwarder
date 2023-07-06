import React, {useState} from 'react'
import {
    alpha,
    Box,
    Checkbox,
    Container,
    FormControl, FormLabel,
    InputAdornment,
    MenuItem,
    Stack,
    Typography,
    useTheme
} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {ThemeTextField} from "../../components/inputs/theme-text-field";
import {Attachment} from "@mui/icons-material";
import {LoadingButton} from "@mui/lab";
import {servicesDetails} from "../../utils/sample-data";
import {Link} from "react-router-dom";
import joinUs from "../../assets/images/aboutIllustrationNew.png";


export default function Career() {


    const {control, handleSubmit, formState: {errors}} = useForm()
    const theme = useTheme()
    const [submitted, setSubmitted] = useState(false)

    const onSubmit = (data: any) => {
        setTimeout(() => {
            console.log(data)
            setSubmitted(true)
        }, 1000)
    }

    return (
        <Box component={'section'} id={'contactUs'} sx={{
            display: 'flex',
            gap :2,
            flexWrap: 'wrap',
            alignItems: 'stretch',
            flex: 1,
            minHeight: 'min(90vh, 700px)',
            px: {xs: 0, sm: 2},
            py: 2,
        }}>
            <Box sx={{
                flex: `1 1 300px`,
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'flex-start',
                textAlign: 'center',
                p: {xs: 0, sm: 2, md: 3},
                '& .headDes': {
                    textAlign: 'left',
                    textIndent: '1.5rem',
                },
                '& img': {
                    maxHeight: '300px',
                    width: '90%',
                    objectFit: 'contain',
                },
            }}>
                <Typography className={'heading'} variant={'h3'} data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            style={{margin: '0 0 1rem'}}>
                    Join Us
                </Typography>
                <Typography variant={'body2'} className={'headDes'}>
                    Established in 2012, Eternity is dedicated to revolutionizing the logistics landscape in
                    India by leveraging digital solutions.
                </Typography>
                <img src={joinUs} alt={'connectivity map'} className={'animate__animated animate__fadeIn'}/>
            </Box>

            <Box className={'animate__animated animate__fadeIn '} sx={{
                flex: '2 1 300px',
                minHeight: {xs: '80vh', sm: 'auto'},
                borderRadius: '20px',
                background: '#fff',
                boxShadow: `0 0 17px -3px #83838370`,
                p: 2,
                py: 3,
                '& .blockHead': {
                    minWidth: '90%',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: theme.palette.secondary.dark,
                },
                '& .blockDes': {
                    minWidth: '90%',
                    fontSize: '0.95rem',
                    lineHeight: '1.5rem',
                    color: theme.palette.secondary.light,
                    mb: 4,
                },
            }}>
                <Box component={'form'} className={'form'} sx={{
                    maxWidth: '500px',
                    mx: 'auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    columnGap: 3,
                    pb: 3,
                    '& .MuiButton-root': {
                        height: '40px',
                        borderRadius: '12px',
                        fontSize: '1rem',
                    },
                }}>
                    <Typography variant={'h3'} className={'blockHead animate__animated animate__fadeInUp'}>
                        Application Form
                    </Typography>
                    <Typography variant={'body1'} className={'blockDes animate__animated animate__fadeInUp'}>
                        Some text to describe why one should join Eternity Forwarders
                    </Typography>

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
                                sx={{flex: '1 1 300px'}}
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
                                    sx={{flex: '1 1 300px'}}
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
                                sx={{flex: '1 1 300px'}}
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
                                sx={{flex: '1 1 300px'}}
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
                                sx={{flex: '1 1 300px'}}
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
                                sx={{flex: '1 1 300px'}}
                            />
                        )}/>
                    </>

                    <Stack direction={'row'} sx={{
                        alignItems: 'flex-start',
                        mb: 2,
                        '& .MuiTypography-root': {
                            mt: 1,
                        },

                    }}>
                        <Checkbox size={'small'}/>
                        <Typography variant={'caption'}>
                            I've read and accept the <Link to={'/'}>Privacy Policy</Link> and <Link to={'/'}>Terms od
                            conditions</Link>
                        </Typography>
                    </Stack>

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
            </Box>
        </Box>
    )
}