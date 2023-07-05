import React, {ChangeEvent, useEffect, useState} from 'react'
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
import {useForm, Controller} from "react-hook-form";
import {ThemeTextField} from "../../components/inputs/theme-text-field";
import {LoadingButton} from "@mui/lab";


export default function LastMilePartner() {

    const theme = useTheme()
    const [loading, setLoading] = useState(true)

    const [specialDeliveryConsideration, setSpecialDeliveryConsideration] = useState(false)
    const onChangeDeliveryConsideration = (e: ChangeEvent<HTMLInputElement>) => setSpecialDeliveryConsideration((e.target as HTMLInputElement).value == 'yes' ? true : false)

    const {control, handleSubmit, reset, formState: {errors}} = useForm({
        defaultValues: {
            company: '',
            contactPerson: '',
            email: '',
            phone: '',
            companyAddress: '',
            goodsType: '',
            workingState: '',
            volume: '',
            deliveryFrequency: '',
            expectedTimeline: '',
            deliveryType: '',
            reference: ''
        }
    })


    const onSubmit = (data: any) => {
        setLoading(true)
        console.log(errors)
        setTimeout(() => {
            console.log({specialDeliveryConsideration, ...data})
            setLoading(false)
        }, 1000)
    }

    useEffect(() => {
        setLoading(false)
    }, [])


    return (
        <NewPageContainer sx={{background: 'none'}}>
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
                        display: {xs: 'block', sm: 'none'},
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
                    justifyContent: {xs: 'center', sm: 'flex-end'},
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
                    <img src={partnerWithUs} className={'animate__animated animate__fadeInUp'} alt={'partner with us'}/>
                    <Typography variant={'h1'} className={'animate__animated animate__fadeInUp'}>
                        Last Mile Partner
                    </Typography>
                    <Typography variant={'body2'} className={'headDes animate__animated animate__fadeInUp'}>
                        Your trusted logistics partner, seamlessly serving both urban and rural areas across India.
                    </Typography>
                </Box>

                <Box className={'formSection'} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <h4>Personal Information</h4>

                    <Controller
                        name={`company`}
                        defaultValue={''}
                        control={control}
                        rules={{
                            required: {value: true, message: 'Required'},
                        }} render={({field}) => (
                        <ThemeTextField
                            {...field} required
                            error={Boolean(errors?.company)}
                            helperText={(errors?.company?.message ?? '').toString()}
                            size={'small'} label={'Company'}
                            sx={{flex: 1, minWidth: {xs: '100%', sm: '60%'}}}
                            // className={'formInput'}
                            placeholder={'Company Name'}/>
                    )}/>

                    <Controller
                        name={`contactPerson`}
                        defaultValue={''}
                        control={control}
                        rules={{
                            required: {value: false, message: 'Required'},
                        }} render={({field}) => (
                        <ThemeTextField
                            {...field}
                            error={Boolean(errors?.contactPerson)}
                            helperText={(errors?.contactPerson?.message ?? '').toString()}
                            size={'small'} label={'Contact Person'}
                            sx={{flex: 1, minWidth: {xs: '100%', sm: '30%'}}}
                            // className={'formInput'}
                            placeholder={'Person Name'}/>
                    )}/>
                    <Controller
                        name={`email`}
                        defaultValue={''}
                        control={control}
                        rules={{
                            required: {value: false, message: 'Required'},
                        }} render={({field}) => (
                        <ThemeTextField
                            {...field}
                            error={Boolean(errors?.email)}
                            helperText={(errors?.email?.message ?? '').toString()}
                            size={'small'} label={'Email'}
                            sx={{flex: 1, minWidth: {xs: '100%', sm: '30%'}}}
                            // className={'formInput'}
                            placeholder={'your@email.ext'}/>
                    )}/>
                    <Controller
                        name={`phone`}
                        defaultValue={''}
                        control={control}
                        rules={{
                            required: {value: true, message: 'Required'},
                        }} render={({field}) => (
                        <ThemeTextField
                            {...field} required
                            error={Boolean(errors?.phone)}
                            helperText={(errors?.phone?.message ?? '').toString()}
                            size={'small'} label={'Phone'}
                            sx={{flex: 1, minWidth: {xs: '100%', sm: '30%'}}}
                            // className={'formInput'}
                            placeholder={'XXXX XXX XXX'}/>
                    )}/>
                    <Controller
                        name={`companyAddress`}
                        defaultValue={''}
                        control={control}
                        rules={{
                            required: {value: true, message: 'Required'},
                        }} render={({field}) => (
                        <ThemeTextField
                            {...field}
                            error={Boolean(errors?.companyAddress)}
                            helperText={(errors?.companyAddress?.message ?? '').toString()}
                            size={'small'} label={'Company Address'}
                            multiline rows={3}
                            // className={'formInput'}
                            placeholder={'Company full adddress'}/>
                    )}/>

                </Box>

                <Box className={'formSection'} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <h4>Delivery Requirements</h4>

                    <FormControl className={'questionInput'}>
                        <FormLabel>What type of products or goods do you need to be delivered for the last mile?
                            Please mention Industry. </FormLabel>
                        <Controller
                            name={`goodsType`}
                            defaultValue={''}
                            control={control}
                            rules={{
                                required: {value: false, message: 'Required'},
                            }} render={({field}) => (
                            <ThemeTextField
                                {...field}
                                error={Boolean(errors?.goodsType)}
                                helperText={(errors?.goodsType?.message ?? '').toString()}
                                size={'small'}
                                placeholder={'eg. - electronics, furniture'}/>
                        )}/>
                    </FormControl>

                    <FormControl className={'questionInput'}>
                        <FormLabel>
                            Where do you require the last mile delivery service? Please specify the state or
                            regions. *
                        </FormLabel>
                        <Controller
                            name={`workingState`}
                            defaultValue={''}
                            control={control}
                            rules={{
                                required: {value: true, message: 'Required'},
                            }} render={({field}) => (
                            <ThemeTextField
                                {...field}
                                error={Boolean(errors?.workingState)}
                                helperText={(errors?.workingState?.message ?? '').toString()}
                                size={'small'}
                                placeholder={'state name'}/>
                        )}/>
                    </FormControl>
                </Box>

                <Box className={'formSection'} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <h4>Volume & Frequency</h4>

                    <FormControl className={'questionInput'}>
                        <FormLabel>
                            What is the estimated volume of deliveries you expect on a regular basis?
                        </FormLabel>
                        <Controller
                            name={`volume`}
                            defaultValue={''}
                            control={control}
                            rules={{
                                required: {value: false, message: 'Required'},
                            }} render={({field}) => (
                            <ThemeTextField
                                {...field}
                                error={Boolean(errors?.volume)}
                                helperText={(errors?.volume?.message ?? '').toString()}
                                size={'small'}
                                placeholder={'est volume'}/>
                        )}/>
                    </FormControl>

                    <FormControl className={'questionInput'}>
                        <FormLabel>
                            How frequently will you require last mile deliveries?
                        </FormLabel>
                        <Controller
                            name={`deliveryFrequency`}
                            defaultValue={''}
                            control={control}
                            rules={{
                                required: {value: false, message: 'Required'},
                            }} render={({field}) => (
                            <ThemeTextField
                                {...field}
                                error={Boolean(errors?.deliveryFrequency)}
                                helperText={(errors?.deliveryFrequency?.message ?? '').toString()}
                                size={'small'}
                                placeholder={'eg. - daily, weekly, monthly'}/>
                        )}/>
                    </FormControl>
                </Box>

                <Box className={'formSection'} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <h4>Special Delivery Considerations</h4>

                    <FormControl className={'questionInput'}>
                        <FormLabel>Do you have any specific requirements for handling delicate or fragile
                            items?</FormLabel>
                        <RadioGroup row defaultValue={specialDeliveryConsideration ? 'yes' : 'no'}
                                    name="specialDeliveryConsideration">
                            <FormControlLabel value="yes"
                                              control={<Radio size={'small'} onChange={onChangeDeliveryConsideration}/>}
                                              label="Yes"/>
                            <FormControlLabel value="no"
                                              control={<Radio size={'small'} onChange={onChangeDeliveryConsideration}/>}
                                              label="No"/>
                        </RadioGroup>
                    </FormControl>
                </Box>

                <Box className={'formSection'} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <h4>Delivery Timeline</h4>

                    <FormControl className={'questionInput'}>
                        <FormLabel>
                            What is your expected timeline for last mile deliveries? Is there a specific
                            delivery window that needs to be met?
                        </FormLabel>
                        <Controller
                            name={`expectedTimeline`}
                            defaultValue={''}
                            control={control}
                            rules={{
                                required: {value: false, message: 'Required'},
                            }} render={({field}) => (
                            <ThemeTextField
                                {...field}
                                error={Boolean(errors?.expectedTimeline)}
                                helperText={(errors?.expectedTimeline?.message ?? '').toString()}
                                size={'small'}
                                placeholder={'expected timline'}/>
                        )}/>
                    </FormControl>
                    <FormControl className={'questionInput'}>
                        <FormLabel>
                            Are there any specific value-added services or delivery options you require?
                        </FormLabel>
                        <Controller
                            name={`deliveryType`}
                            defaultValue={''}
                            control={control}
                            rules={{
                                required: {value: false, message: 'Required'},
                            }} render={({field}) => (
                            <ThemeTextField
                                {...field}
                                error={Boolean(errors?.deliveryType)}
                                helperText={(errors?.deliveryType?.message ?? '').toString()}
                                size={'small'}
                                placeholder={'eg. - same-day delivery, express delivery'}/>
                        )}/>
                    </FormControl>
                </Box>

                <Box className={'formSection'} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <h4>References</h4>
                    <FormControl className={'questionInput'}>
                        <FormLabel>
                            Can you provide any references from your industry or other clients who have used
                            your last mile delivery services? </FormLabel>
                        <Controller
                            name={`reference`}
                            defaultValue={''}
                            control={control}
                            rules={{
                                required: {value: false, message: 'Required'},
                            }} render={({field}) => (
                            <ThemeTextField
                                {...field}
                                error={Boolean(errors?.reference)}
                                helperText={(errors?.reference?.message ?? '').toString()}
                                size={'small'}
                                placeholder={'Reference company'}/>
                        )}/>
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
    )
}
