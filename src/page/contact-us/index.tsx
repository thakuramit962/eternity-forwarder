import React, { ChangeEvent, KeyboardEventHandler, useState } from 'react'
import NewPageContainer from "../../components/new-page-container";
import {
    alpha,
    Box,
    Button,
    Checkbox, FormControl,
    FormControlLabel, FormLabel,
    InputAdornment, lighten, MenuItem, Stack,
    Tab,
    Tabs,
    TextField,
    Typography,
    useTheme
} from "@mui/material";
import map from "../../assets/images/map.png";
import Toolbar from "@mui/material/Toolbar";
import { Attachment, MyLocation, Password, PhoneRounded, Place } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { ThemeTextField } from "../../components/inputs/theme-text-field";
import { LoadingButton } from "@mui/lab";
import bg from "../../assets/images/hero-banner-1.jpg";
import ConnectivityMap from "./connectivity-map";
import ThankYouDialog from '../../components/dialog-box/thank-you-dialog';
import axios from 'axios';


export default function ContactUs() {

    const theme = useTheme()
    const navigate = useNavigate()
    const [submiting, setSubmiting] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const { control, handleSubmit, reset, formState: { errors } } = useForm()
    const [consent, setConsent] = useState(false)


    const onDialogClose = () => {
        setSubmitted(false)
    }

    const onSubmit = (data: any) => {

        const newData = { ...data, consent }
        console.log(newData)

        setSubmiting(true)
        const url = "https://app.shiprider.in/api/career";
        axios.post(url, newData, {
            headers: {
                "Content-Type": "application/json",
                "crossorigin": "anonymous"
            }
        })
            .then((res) => {
                if (res.data.success == true) {
                    reset()
                    setConsent(false)
                    console.log(res)
                    setSubmitted(true)
                } else alert('Some error occured')
            })
            .catch((err) => console.error(JSON.stringify(err)))
            .finally(() => setSubmiting(false))
    }

    return (
        <>
            <Box component={'section'} id={'contactUs'} sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'stretch',
                flex: 1,
                minHeight: 'min(90vh, 700px)',
                px: { xs: 0, sm: 2 },
                py: 2,
            }}>

                <Box sx={{
                    flex: `1 1 300px`,
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'flex-start',
                    textAlign: 'center',
                    p: { xs: 0, sm: 2, md: 3 },
                    '& .headDes': {
                        textAlign: 'left',
                        textIndent: '1.5rem',
                    },
                    '& img': {
                        height: '90%',
                        width: '90%',
                        maxHeight: 'min(80vh, 500px)',
                        objectFit: 'contain',
                    },
                }}>
                    <Typography className={'heading'} variant={'h3'} data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        style={{ margin: '0 0 1rem' }}>
                        Our Locations
                    </Typography>
                    <Typography variant={'body2'} className={'headDes'}>
                        Established in 2012, Eternity is dedicated to revolutionizing the logistics landscape in
                        India by leveraging digital solutions.
                    </Typography>
                    <ConnectivityMap />
                    {/*<img src={map} alt={'connectivity map'} className={'animate__animated animate__fadeIn'}/>*/}
                </Box>

                <Box className={'animate__animated animate__fadeIn '} sx={{
                    flex: '2 1 300px',
                    minHeight: { xs: '80vh', sm: 'auto' },
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
                    <Box sx={{
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
                        <Typography className={'blockHead animate__animated animate__fadeInUp'}>We'd love to connect</Typography>
                        <Typography className={'blockDes animate__animated animate__fadeInUp'}>
                            Reach out and we'll get in touch within 24 hrs.
                        </Typography>

                        <>
                            <Controller
                                name={`fullName`}
                                defaultValue={''}
                                control={control}
                                rules={{
                                    required: { value: true, message: 'Required' }
                                }} render={({ field }) => (
                                    <ThemeTextField
                                        {...field} required
                                        error={Boolean(errors?.fullName)}
                                        helperText={(errors?.fullName?.message ?? '').toString()}
                                        size={'small'} label={'Full Name'}
                                        sx={{ flex: '1 1 400px' }}
                                        placeholder={'Your Name'} />
                                )} />


                            <Controller
                                name={`phone`}
                                defaultValue={''}
                                control={control}
                                rules={{
                                    required: { value: true, message: 'Required' },
                                    pattern: { value: /^[6-9]\d{9}$/, message: 'Enter valid phone number' }
                                }}
                                render={({ field }) => (
                                    <ThemeTextField
                                        {...field} required
                                        error={Boolean(errors?.phone)}
                                        helperText={(errors?.phone?.message ?? '').toString()}
                                        size={'small'} label={'Phone'}
                                        sx={{ flex: '1 1 200px' }}
                                        placeholder={'XXXX XXX XXX'}
                                    />
                                )} />

                            <Controller
                                name={`email`}
                                defaultValue={''}
                                control={control}
                                rules={{
                                    required: { value: false, message: 'Required' },
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Enter valid email address'
                                    }
                                }} render={({ field }) => (
                                    <ThemeTextField
                                        {...field}
                                        error={Boolean(errors?.email)}
                                        helperText={(errors?.email?.message ?? '').toString()}
                                        size={'small'} label={'Email'}
                                        sx={{ flex: '1 1 200px' }}
                                        placeholder={'your@email.address'} />
                                )} />

                            <Controller
                                name={`companyName`}
                                defaultValue={''}
                                control={control}
                                rules={{
                                    required: { value: false, message: 'Required' },
                                }} render={({ field }) => (
                                    <ThemeTextField
                                        {...field}
                                        error={Boolean(errors?.companyName)}
                                        helperText={(errors?.companyName?.message ?? '').toString()}
                                        size={'small'} label={'Company Name'}
                                        sx={{ flex: '1 1 200px' }}
                                        placeholder={'company name'} />
                                )} />
                            <Controller
                                name={`companyWebsite`}
                                defaultValue={''}
                                control={control}
                                rules={{
                                    required: { value: false, message: 'Required' },
                                }} render={({ field }) => (
                                    <ThemeTextField
                                        {...field} type={'url'}
                                        error={Boolean(errors?.companyWebsite)}
                                        helperText={(errors?.companyWebsite?.message ?? '').toString()}
                                        size={'small'} label={'Company Website'}
                                        sx={{ flex: '1 1 200px' }}
                                        placeholder={'eg.- company.domain'} />
                                )} />
                            <Controller
                                name={`serviceType`}
                                defaultValue={''}
                                control={control}
                                rules={{
                                    required: { value: true, message: 'Required' },
                                }} render={({ field }) => (
                                    <ThemeTextField
                                        {...field} required 
                                        // select
                                        error={Boolean(errors?.serviceType)}
                                        helperText={(errors?.serviceType?.message ?? '').toString()}
                                        size={'small'} label={'Service Type'}
                                        sx={{ flex: '1 1 200px' }}
                                        placeholder={'type of service'}/>
                                        //<MenuItem value={'option1'}>Option 1</MenuItem>
                                        //<MenuItem value={'option2'}>Option 2</MenuItem>
                                        //</><MenuItem value={'option3'}>Option 3</MenuItem>
                                    //</ThemeTextField> 
                                )} />
                            <Controller
                                name={`state`}
                                defaultValue={''}
                                control={control}
                                rules={{
                                    required: { value: true, message: 'Required' },
                                }} render={({ field }) => (
                                    <ThemeTextField
                                        {...field} required 
                                        // select
                                        error={Boolean(errors?.state)}
                                        helperText={(errors?.state?.message ?? '').toString()}
                                        size={'small'} label={'State or Region'}
                                        sx={{ flex: '1 1 200px' }}
                                        placeholder={'Select state'}/>
                                       //<MenuItem value={'option1'}>Option 1</MenuItem>
                                        //<MenuItem value={'option2'}>Option 2</MenuItem>
                                        //</><MenuItem value={'option3'}>Option 3</MenuItem>
                                    //</ThemeTextField> 
                                )} />


                            <FormControl>
                                <FormLabel>How would you prefer to be contacted to discuss your logistics
                                    requirements?</FormLabel>
                                <Controller
                                    name={`connectionPreference`}
                                    defaultValue={''}
                                    control={control}
                                    rules={{
                                        required: { value: true, message: 'Required' },
                                    }} render={({ field }) => (
                                        <ThemeTextField
                                            {...field} required type={'url'}
                                            error={Boolean(errors?.connectionPreference)}
                                            helperText={(errors?.connectionPreference?.message ?? '').toString()}
                                            size={'small'}
                                            placeholder={'eg.- phone call or email'} />
                                    )} />
                            </FormControl>

                            <Stack direction={'row'} sx={{
                                alignItems: 'flex-start',
                                mb: 2,
                                '& .MuiTypography-root': {
                                    mt: 1,
                                },

                            }}>
                                <Checkbox size={'small'} checked={consent} onChange={(e) => setConsent(e.target.checked)} />
                                <Typography variant={'caption'}>
                                    By submitting this form, you consent to the collection and processing of your
                                    personal data for the purpose of addressing your logistics inquiry. Please tick
                                    the box to confirm your consent.
                                </Typography>
                            </Stack>


                        </>

                        <LoadingButton
                            loading={submiting}
                            fullWidth
                            disabled={!consent}
                            onClick={handleSubmit(onSubmit)}
                            loadingPosition="end"
                            endIcon={<></>}
                            variant={'contained'}>
                            Submit Request
                        </LoadingButton>
                    </Box>
                </Box>

            </Box>
            {submitted && <ThankYouDialog open={submitted} handleClose={onDialogClose} />}

        </>
    )
}