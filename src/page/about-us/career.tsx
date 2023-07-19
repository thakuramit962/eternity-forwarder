import React, { useState } from 'react'
import {
    alpha,
    Box,
    Button,
    Checkbox,
    Container,
    Dialog,
    DialogContent,
    DialogContentText,
    FormControl, FormHelperText, FormLabel,
    Input,
    InputAdornment,
    InputLabel,
    MenuItem,
    Stack,
    Typography,
    useTheme
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { ThemeTextField } from "../../components/inputs/theme-text-field";
import { Attachment } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { servicesDetails } from "../../utils/sample-data";
import { Link } from "react-router-dom";
import joinUs from "../../assets/images/aboutIllustrationNew.png";
import thankYou from "../../assets/images/earn.svg";
import axios from 'axios'
import ThankYouDialog from '../../components/dialog-box/thank-you-dialog';
import {serverRoute} from "../../utils/app-helper";


export default function Career() {


    const { control, handleSubmit, reset, register, formState: { errors } } = useForm({
        defaultValues: {
            cv: '',
            education: '',
            email: '',
            fullName: '',
            location: '',
            phone: '',
        }
    })
    const theme = useTheme()
    const [submiting, setSubmiting] = useState(false)
    const [submitted, setSubmitted] = useState(false)


    const onDialogClose = () => {
        setSubmitted(false)
    }

    const onSubmit = (data: any) => {
        const newData = {
            ...data,
            cv: data.cv[0]
        }
        console.log(newData)

        setSubmiting(true)
        const url = `${serverRoute}/career`
        axios.post(url, newData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "crossorigin": "anonymous"
            }
        })
            .then((res) => {
                if (res.data.status == true) {
                    reset()
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
                gap: 2,
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
                        // textIndent: '1.5rem',
                    },
                    '& img': {
                        maxHeight: '300px',
                        width: '90%',
                        objectFit: 'contain',
                    },
                }}>
                    <Typography className={'heading'} variant={'h3'} data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        style={{ margin: '0 0 1rem' }}>
                        Join Us
                    </Typography>
                    <Typography variant={'body2'} className={'headDes'}>
                        Established in 2012, Eternity is dedicated to revolutionizing the logistics landscape in
                        India by leveraging digital solutions.
                    </Typography>
                    <img src={joinUs} alt={'connectivity map'} className={'animate__animated animate__fadeIn'} />
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
                    <Box component={'form'} className={'form'} sx={{
                        maxWidth: '500px',
                        mx: 'auto',
                        display: 'flex',
                        flexWrap: 'wrap',
                        columnGap: 3,
                        pb: 3,
                        '& .fileInput': {
                            flex: '1 1 300px',
                            '& .MuiFormLabel-root': {
                                '&:after': {
                                    content: '""',
                                    background: theme.palette.background.paper,
                                    position: 'absolute',
                                    height: '100%',
                                    display: 'block',
                                    width: '100%',
                                    top: 0,
                                    zIndex: '-1',
                                },
                            },
                            '& .MuiInputBase-root': {
                                padding: '8.5px 14px 8.5px 26px',
                                position: 'relative',
                                marginTop: 0,
                                borderRadius: '12px',
                                fontSize: '13px',
                                border: '1px solid #b7c2ce',
                                '&:after, &:before': {
                                    display: 'none',
                                },
                                '&.Mui-error': {
                                    border: `1px solid ${theme.palette.error.main}`,
                                },
                                '& input': {
                                    padding: 0,
                                    '&::-webkit-file-upload-button': {
                                        display: 'none',
                                    },
                                },
                            },
                            '&:has(.Mui-focused)': {},
                            '& svg': {
                                position: 'absolute',
                                left: '6px',
                                top: '8px',
                                height: '22px',
                                width: '22px',
                                color: '#b7c2ce',
                            },
                        },
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
                            {/* Some text to describe why one should join Eternity Forwarders */}
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
                                        sx={{ flex: '1 1 300px' }}
                                        placeholder={'Your Name'} />
                                )} />


                            <Controller
                                name={`phone`}
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
                                        inputProps={{ maxLength: 10 }}
                                        size={'small'} label={'Phone'}
                                        sx={{ flex: '1 1 300px' }}
                                        placeholder={'XXXX XXX XXX'}
                                    />
                                )} />

                            <Controller
                                name={`email`}
                                defaultValue={''}
                                control={control}
                                rules={{
                                    required: { value: true, message: 'Required' },
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Enter valid email address'
                                    }
                                }} render={({ field }) => (
                                    <ThemeTextField
                                        {...field} required type={'tel'}
                                        error={Boolean(errors?.email)}
                                        helperText={(errors?.email?.message ?? '').toString()}
                                        size={'small'} label={'Email'}
                                        sx={{ flex: '1 1 300px' }}
                                        placeholder={'your@email.address'} />
                                )} />

                            <Controller
                                name={`education`}
                                defaultValue={''}
                                control={control}
                                rules={{
                                    required: { value: false, message: 'Required' },
                                }} render={({ field }) => (
                                    <ThemeTextField
                                        {...field}
                                        error={Boolean(errors?.education)}
                                        helperText={(errors?.education?.message ?? '').toString()}
                                        size={'small'} label={'Qualification'}
                                        sx={{ flex: '1 1 300px' }}
                                        placeholder={'Highest qualification'} />
                                )} />
                            <Controller
                                name={`location`}
                                defaultValue={''}
                                control={control}
                                rules={{
                                    required: { value: true, message: 'Required' },
                                }} render={({ field }) => (
                                    <ThemeTextField
                                        {...field} required
                                        error={Boolean(errors?.location)}
                                        helperText={(errors?.location?.message ?? '').toString()}
                                        size={'small'} label={'Location'}
                                        sx={{ flex: '1 1 300px' }}
                                        placeholder={'Location'} />
                                )} />

                            <FormControl className={'fileInput formItem'}
                                error={Boolean(errors?.cv)} sx={{ mb: 3, }}>
                                <InputLabel htmlFor="invoice_image">Upload CV*</InputLabel>
                                <Input id="invoice_image" aria-describedby="invoice-image-text"
                                    startAdornment={<InputAdornment
                                        position="start"><Attachment /></InputAdornment>}
                                    required
                                    inputProps={{ accept: 'image/png, image/jpeg, image/jpg, application/pdf' }}
                                    type={'file'}  {...register('cv', { required: true })} />
                                <FormHelperText
                                    id="invoice-image-text">{Boolean(errors?.cv) && 'Required'}</FormHelperText>
                            </FormControl>
                        </>

                        <Stack direction={'row'} sx={{
                            alignItems: 'flex-start',
                            mb: 2,
                            '& .MuiTypography-root': {
                                mt: 1,
                            },

                        }}>
                            <Checkbox size={'small'} />
                            <Typography variant={'caption'}>
                                I've read and accept the <Link to={'/privacy-policy'}>Privacy Policy</Link> and <Link to={'/terms-of-uses'}>Terms and
                                    conditions</Link>
                            </Typography>
                        </Stack>

                        <LoadingButton
                            loading={submiting}
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
            {submitted && <ThankYouDialog open={submitted} handleClose={onDialogClose} />}
        </>
    )
}

