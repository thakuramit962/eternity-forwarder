import React, { ChangeEvent, useEffect, useState } from 'react'
import NewPageContainer from "../../components/new-page-container"
import {
    alpha,
    Box, Button,
    Container,
    FormControl, FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Typography,
    useTheme
} from "@mui/material"
import partnerWithUs from "../../assets/images/aboutIllustrationNew.png";
import { useForm, Controller } from "react-hook-form";
import { ThemeTextField } from "../../components/inputs/theme-text-field";
import { LoadingButton } from "@mui/lab";
import { getFirstErrorMessage } from "../../utils/app-helper";
import ThankYouDialog from '../../components/dialog-box/thank-you-dialog';


export default function Carrier() {

    const theme = useTheme()
    const [loading, setLoading] = useState(true)
    const [submitted, setSubmitted] = useState(false)


    const onDialogClose = () => {
        setSubmitted(false)
    }

    const [validLicense, setLeaseVehicle] = useState(false)
    const onChangeDeliveryConsideration = (e: ChangeEvent<HTMLInputElement>) => setLeaseVehicle((e.target as HTMLInputElement).value == 'yes' ? true : false)

    const { control, handleSubmit, reset, setFocus, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            preferredState: '',
            email: '',
            phone: '',
            address: '',
            workingYears: '',
            expDetails: '',
            validLicense: 'yes',
            isAvailable: 'yes',
            isFlexible: 'yes',
            isCompliant: 'yes',
            drivingRecord: 'yes',
            reference: ''
        }
    })


    const onSubmit = (data: any) => {
        setLoading(true)
        console.log(errors)
        setTimeout(() => {
            console.log({ validLicense, ...data })
            setLoading(false)
            setSubmitted(true)
            reset()
        }, 1000)
    }

    useEffect(() => {
        setLoading(false)
    }, [])

    React.useEffect(() => {
        if (errors) {
            const errorField = Object.keys(errors)?.[0]
            console.log('error', errorField, errors)
            setFocus("email")
        }
    }, [errors, setFocus])


    return (
        <>
            <NewPageContainer sx={{ background: 'none' }}>
                <Container sx={{
                    '& .headingBlock': {
                        width: '100%',
                        display: 'flex',
                        flexFlow: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        py: 3,
                        '& h1': {
                            mt: 3,
                            fontSize: 'clamp(1.7rem, 8vw, 1.8rem)',
                            fontWeight: 600,
                            color: theme.palette.secondary.main,
                            // textDecoration: 'underline',
                            // textDecorationColor: theme.palette.primary.main,
                        },
                        '& .headDes': {
                            mt: 1,
                            color: theme.palette.text.secondary,
                            maxWidth: '600px',
                            width: '90%',
                            mx: 'auto',
                            textAlign: 'center',
                            fontSize: '14px',
                        },
                        '& img': {
                            display: { xs: 'block', sm: 'none' },
                            maxHeight: '100px',
                            objectFit: 'contain',
                        },
                    },
                    '& .formSection': {
                        maxWidth: '800px',
                        mx: 'auto',
                        borderRadius: '20px',
                        p: 2,
                        pb: 4,
                        display: 'flex',
                        flexWrap: 'wrap',
                        columnGap: 3,
                        mb: 2,
                        alignItems: 'flex-start',
                        alignContent: 'flex-start',
                        background: alpha(theme.palette.background.paper, 0.6),
                        '& h4': {
                            minWidth: '90%',
                            m: 0,
                            mb: 2,
                            fontSize: '1rem',
                            fontWeight: 500,
                            // textDecoration: 'underline',
                            textDecorationColor: theme.palette.secondary.light,
                            color: theme.palette.secondary.light,

                        },
                        '& .questionInput': {
                            width: '100%',
                            px: 1,
                            '& label.MuiFormLabel-root': {
                                fontSize: '16px',
                                paddingLeft: '8px',
                                marginBottom: '6px',
                                color: theme.palette.secondary.main,
                            },
                            '& .MuiFormGroup-root': {
                                pl: 1,
                                '& .MuiTypography-root': {
                                    fontSize: '15px',
                                },
                            },
                        },
                        '&:has(.MuiInputBase-root.Mui-focused)': {
                            background: theme.palette.background.paper,
                            boxShadow: '0 0 17px -3px #83838380',
                            '& .questionInput': {
                                '& label.MuiFormLabel-root': {
                                    color: theme.palette.secondary.dark,
                                },
                            },
                            '&  h4': {
                                color: theme.palette.secondary.main,
                                textDecoration: 'underline',
                                textDecorationColor: theme.palette.primary.main,
                            },
                        },
                        '&:hover': {
                            boxShadow: '0 0 17px -3px #83838380',
                            '&  h4': {
                                color: theme.palette.secondary.main,
                                textDecoration: 'underline',
                                textDecorationColor: theme.palette.primary.main,
                            },
                        },

                    },
                    '& .actionBlock': {
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        flexWrap: 'wrap',
                        justifyContent: { xs: 'center', sm: 'flex-end' },
                        maxWidth: '800px',
                        mx: 'auto',
                        mb: 6,
                        mt: 4,
                        '& .MuiButton-root': {
                            padding: '0.6rem 1.5rem',
                            borderRadius: '16px',
                            fontSize: '16px'
                        },
                    },
                }}>
                    <Box className={'headingBlock'}>
                        <img src={partnerWithUs} className={'animate__animated animate__fadeInUp'} alt={'partner with us'} />
                        <Typography variant={'h1'} className={'animate__animated animate__fadeInUp'}>
                            Register as Driver
                        </Typography>
                        <Typography variant={'body2'} className={'headDes animate__animated animate__fadeInUp'}>
                            Your trusted logistics partner, seamlessly serving both urban and rural areas across India.
                        </Typography>
                    </Box>

                    <Box className={'formSection'} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <h4>Personal Information</h4>

                        <Controller
                            name={`name`}
                            defaultValue={''}
                            control={control}
                            rules={{
                                required: { value: true, message: 'Required' },
                            }} render={({ field }) => (
                                <ThemeTextField
                                    {...field}
                                    error={Boolean(errors?.name)}
                                    helperText={(errors?.name?.message ?? '').toString()}
                                    size={'small'} label={'Contact Person'}
                                    sx={{ flex: 1, minWidth: { xs: '100%', sm: '60%' } }}
                                    // className={'formInput'}
                                    placeholder={'Person Name'} />
                            )} />
                        <Controller
                            name={`preferredState`}
                            defaultValue={''}
                            control={control}
                            rules={{
                                required: { value: true, message: 'Required' },
                            }} render={({ field }) => (
                                <ThemeTextField
                                    {...field} required
                                    error={Boolean(errors?.preferredState)}
                                    helperText={(errors?.preferredState?.message ?? '').toString()}
                                    size={'small'} label={'Company'}
                                    sx={{ flex: 1, minWidth: { xs: '100%', sm: '30%' } }}
                                    // className={'formInput'}
                                    placeholder={'Company Name'} />
                            )} />

                        <Controller
                            name={`email`}
                            defaultValue={''}
                            control={control}
                            rules={{
                                required: { value: true, message: 'Required' },
                            }} render={({ field }) => (
                                <ThemeTextField
                                    {...field}
                                    error={Boolean(errors?.email)}
                                    helperText={(errors?.email?.message ?? '').toString()}
                                    size={'small'} label={'Email'}
                                    sx={{ flex: 1, minWidth: { xs: '100%', sm: '30%' } }}
                                    // className={'formInput'}
                                    placeholder={'your@email.ext'} />
                            )} />
                        <Controller
                            name={`phone`}
                            defaultValue={''}
                            control={control}
                            rules={{
                                required: { value: true, message: 'Required' },
                            }} render={({ field }) => (
                                <ThemeTextField
                                    {...field} required
                                    error={Boolean(errors?.phone)}
                                    helperText={(errors?.phone?.message ?? '').toString()}
                                    size={'small'} label={'Phone'}
                                    sx={{ flex: 1, minWidth: { xs: '100%', sm: '30%' } }}
                                    // className={'formInput'}
                                    placeholder={'XXXX XXX XXX'} />
                            )} />
                        <Controller
                            name={`address`}
                            defaultValue={''}
                            control={control}
                            rules={{
                                required: { value: false, message: 'Required' },
                            }} render={({ field }) => (
                                <ThemeTextField
                                    {...field}
                                    error={Boolean(errors?.address)}
                                    helperText={(errors?.address?.message ?? '').toString()}
                                    size={'small'} label={'Address'}
                                    multiline rows={3}
                                    placeholder={'complete address'} />
                            )} />

                    </Box>

                    <Box className={'formSection'} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <h4>Experience and Qualifications</h4>

                        <FormControl className={'questionInput'}>
                            <FormLabel>How many years of experience do you have as a professional driver?</FormLabel>
                            <Controller
                                name={`workingYears`}
                                defaultValue={''}
                                control={control}
                                rules={{
                                    required: { value: false, message: 'Required' },
                                }} render={({ field }) => (
                                    <ThemeTextField
                                        {...field} type={'number'}
                                        error={Boolean(errors?.workingYears)}
                                        helperText={(errors?.workingYears?.message ?? '').toString()}
                                        size={'small'}
                                        placeholder={'no. of years'} />
                                )} />
                        </FormControl>
                        <FormControl className={'questionInput'} sx={{ mb: 2, }}>
                            <FormLabel>Have you previously worked in the logistics or transportation industry? If yes,
                                please provide details.</FormLabel>
                            <Controller
                                name={`expDetails`}
                                defaultValue={''}
                                control={control}
                                rules={{
                                    required: { value: false, message: 'Required' },
                                }} render={({ field }) => (
                                    <ThemeTextField
                                        {...field}
                                        error={Boolean(errors?.expDetails)}
                                        helperText={(errors?.expDetails?.message ?? '').toString()}
                                        size={'small'} multiline rows={2}
                                        placeholder={'experience details'} />
                                )} />
                        </FormControl>

                        <FormControl className={'questionInput'}>
                            <FormLabel>Do you possess a valid driver's license for the type of vehicles used in our
                                logistics company? *</FormLabel>
                            <Controller
                                name={`validLicense`}
                                defaultValue={'no'}
                                control={control}
                                render={({ field }) => (
                                    <RadioGroup row defaultValue={'yes'} {...field}>
                                        <FormControlLabel value="yes" control={<Radio size={'small'} />} label="Yes" />
                                        <FormControlLabel value="no" control={<Radio size={'small'} />} label="No" />
                                    </RadioGroup>
                                )} />
                        </FormControl>

                    </Box>

                    <Box className={'formSection'} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <h4>Availability and Schedule</h4>

                        <FormControl className={'questionInput'} sx={{ mb: 2, }}>
                            <FormLabel>Are you available for full-time or part-time employment as a driver? *
                            </FormLabel>
                            <Controller
                                name={`isAvailable`}
                                defaultValue={'yes'}
                                control={control}
                                render={({ field }) => (
                                    <RadioGroup row defaultValue={'yes'} {...field}>
                                        <FormControlLabel value="yes" control={<Radio size={'small'} />} label="Yes" />
                                        <FormControlLabel value="no" control={<Radio size={'small'} />} label="No" />
                                    </RadioGroup>
                                )} />
                        </FormControl>

                        <FormControl className={'questionInput'}>
                            <FormLabel>Are you willing to work flexible hours, including weekends or evenings, if
                                required?</FormLabel>
                            <Controller
                                name={`isFlexible`}
                                defaultValue={'yes'}
                                control={control}
                                render={({ field }) => (
                                    <RadioGroup row defaultValue={'yes'} {...field}>
                                        <FormControlLabel value="yes" control={<Radio size={'small'} />} label="Yes" />
                                        <FormControlLabel value="no" control={<Radio size={'small'} />} label="No" />
                                    </RadioGroup>
                                )} />
                        </FormControl>
                    </Box>

                    <Box className={'formSection'} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <h4>Driving Record and Background Check</h4>
                        <FormControl className={'questionInput'}>
                            <FormLabel>Do you have a clean driving record without any major traffic violations or accidents?
                                *</FormLabel>
                            <Controller
                                name={`drivingRecord`}
                                defaultValue={'yes'}
                                control={control}
                                render={({ field }) => (
                                    <RadioGroup row defaultValue={'yes'} {...field}>
                                        <FormControlLabel value="yes" control={<Radio size={'small'} />} label="Yes" />
                                        <FormControlLabel value="no" control={<Radio size={'small'} />} label="No" />
                                    </RadioGroup>
                                )} />
                        </FormControl>
                    </Box>

                    <Box className={'formSection'} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <h4>References</h4>
                        <FormControl className={'questionInput'}>
                            <FormLabel>
                                Can you provide references from previous employers or individuals who can vouch for your
                                driving skills and work ethic?</FormLabel>
                            <Controller
                                name={`reference`}
                                defaultValue={''}
                                control={control}
                                rules={{
                                    required: { value: false, message: 'Required' },
                                }} render={({ field }) => (
                                    <ThemeTextField
                                        {...field}
                                        error={Boolean(errors?.reference)}
                                        helperText={(errors?.reference?.message ?? '').toString()}
                                        size={'small'}
                                        placeholder={'Reference company'} />
                                )} />
                        </FormControl>

                    </Box>

                    <Box className={'actionBlock'} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <Button variant={'outlined'} color={'secondary'} onClick={() => reset()}>Reset</Button>
                        <LoadingButton
                            loading={loading}
                            onClick={handleSubmit(onSubmit)}
                            loadingPosition={'end'}
                            endIcon={<></>}
                            variant={'contained'}
                            color={'secondary'}>
                            Save & Submit
                        </LoadingButton>
                    </Box>

                </Container>
            </NewPageContainer>

            {submitted && <ThankYouDialog open={submitted} handleClose={onDialogClose} />}

        </>
    )
}
