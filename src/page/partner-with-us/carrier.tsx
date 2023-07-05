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


export default function Carrier() {

    const theme = useTheme()
    const [loading, setLoading] = useState(true)

    const [leaseVehicle, setLeaseVehicle] = useState(false)
    const onChangeDeliveryConsideration = (e: ChangeEvent<HTMLInputElement>) => setLeaseVehicle((e.target as HTMLInputElement).value == 'yes' ? true : false)

    const {control, handleSubmit, reset, formState: {errors}} = useForm({
        defaultValues: {
            company: '',
            contactPerson: '',
            email: '',
            phone: '',
            companyAddress: '',
            workingYears: '',
            areaOfDelivery: '',
            leaseVehicle: 'no',
            fleetSize: '',
            typeOfShipment: '',
            specializedTransportation: 'no',
            valueAddedServices: 'no',
            isCompliant: 'yes',
            reference: '',
        }
    })


    const onSubmit = (data: any) => {
        setLoading(true)
        console.log(errors)
        setTimeout(() => {
            console.log({leaseVehicle, ...data})
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
                        Carrier Partner
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
                    <h4>Experience and Expertise</h4>

                    <FormControl className={'questionInput'}>
                        <FormLabel>How many years has your company been operating as a carrier in the logistics
                            industry? </FormLabel>
                        <Controller
                            name={`workingYears`}
                            defaultValue={''}
                            control={control}
                            rules={{
                                required: {value: false, message: 'Required'},
                            }} render={({field}) => (
                            <ThemeTextField
                                {...field} type={'number'}
                                error={Boolean(errors?.workingYears)}
                                helperText={(errors?.workingYears?.message ?? '').toString()}
                                size={'small'}
                                placeholder={'no. of years'}/>
                        )}/>
                    </FormControl>

                </Box>

                <Box className={'formSection'} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <h4>Coverage Area</h4>

                    <FormControl className={'questionInput'}>
                        <FormLabel>
                            Which geographical areas or regions does your company currently cover for transportation
                            services? *
                        </FormLabel>
                        <Controller
                            name={`areaOfDelivery`}
                            defaultValue={''}
                            control={control}
                            rules={{
                                required: {value: true, message: 'Required'},
                            }} render={({field}) => (
                            <ThemeTextField
                                {...field}
                                error={Boolean(errors?.areaOfDelivery)}
                                helperText={(errors?.areaOfDelivery?.message ?? '').toString()}
                                size={'small'}
                                placeholder={'est areaOfDelivery'}/>
                        )}/>
                    </FormControl>

                </Box>

                <Box className={'formSection'} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <h4>Fleet and Resources</h4>

                    <FormControl className={'questionInput'}>
                        <FormLabel>What is the size of your transportation fleet?</FormLabel>
                        <Controller
                            name={`fleetSize`}
                            defaultValue={''}
                            control={control}
                            rules={{
                                required: {value: false, message: 'Required'},
                            }} render={({field}) => (
                            <ThemeTextField
                                {...field}
                                error={Boolean(errors?.fleetSize)}
                                helperText={(errors?.fleetSize?.message ?? '').toString()}
                                size={'small'}
                                placeholder={'eg. - number of vehicles, types of vehicles'}/>
                        )}/>
                    </FormControl>

                    <FormControl className={'questionInput'}>
                        <FormLabel>Do you own or lease your transportation vehicles?</FormLabel>
                        <Controller
                            name={`leaseVehicle`}
                            defaultValue={'no'}
                            control={control}
                            render={({field}) => (
                                <RadioGroup row defaultValue={'no'} {...field}>
                                    <FormControlLabel value="yes" control={<Radio size={'small'}/>} label="Yes"/>
                                    <FormControlLabel value="no" control={<Radio size={'small'}/>} label="No"/>
                                </RadioGroup>
                            )}/>
                    </FormControl>

                </Box>

                <Box className={'formSection'} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <h4>Service Capabilities</h4>

                    <FormControl className={'questionInput'}>
                        <FormLabel>
                            What types of goods or products can you transport?
                        </FormLabel>
                        <Controller
                            name={`typeOfShipment`}
                            defaultValue={''}
                            control={control}
                            rules={{
                                required: {value: false, message: 'Required'},
                            }} render={({field}) => (
                            <ThemeTextField
                                {...field}
                                error={Boolean(errors?.typeOfShipment)}
                                helperText={(errors?.typeOfShipment?.message ?? '').toString()}
                                size={'small'}
                                placeholder={'eg. - general cargo, hazardous materials, etc.'}/>
                        )}/>
                    </FormControl>

                    <FormControl className={'questionInput'} sx={{mb: 2,}}>
                        <FormLabel>Can you handle specialized transportation requirements? (like: oversize cargo,
                            fragile items)
                        </FormLabel>
                        <Controller
                            name={`specializedTransportation`}
                            defaultValue={'no'}
                            control={control}
                            render={({field}) => (
                                <RadioGroup row defaultValue={'no'} {...field}>
                                    <FormControlLabel value="yes" control={<Radio size={'small'}/>} label="Yes"/>
                                    <FormControlLabel value="no" control={<Radio size={'small'}/>} label="No"/>
                                </RadioGroup>
                            )}/>
                    </FormControl>

                    <FormControl className={'questionInput'}>
                        <FormLabel>Do you offer any value-added services such as warehousing, packaging, or customs
                            clearance?</FormLabel>
                        <Controller
                            name={`valueAddedServices`}
                            defaultValue={'no'}
                            control={control}
                            render={({field}) => (
                                <RadioGroup row defaultValue={'no'} {...field}>
                                    <FormControlLabel value="yes" control={<Radio size={'small'}/>} label="Yes"/>
                                    <FormControlLabel value="no" control={<Radio size={'small'}/>} label="No"/>
                                </RadioGroup>
                            )}/>
                    </FormControl>
                </Box>

                <Box className={'formSection'} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <h4>Insurance and Compliance</h4>
                    <FormControl className={'questionInput'}>
                        <FormLabel>Are you compliant with all relevant regulations and permits required for
                            transportation operations?</FormLabel>
                        <Controller
                            name={`isCompliant`}
                            defaultValue={'no'}
                            control={control}
                            render={({field}) => (
                                <RadioGroup row defaultValue={'yes'} {...field}>
                                    <FormControlLabel value="yes" control={<Radio size={'small'}/>} label="Yes"/>
                                    <FormControlLabel value="no" control={<Radio size={'small'}/>} label="No"/>
                                </RadioGroup>
                            )}/>
                    </FormControl>
                </Box>


                <Box className={'formSection'} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <h4>References</h4>
                    <FormControl className={'questionInput'}>
                        <FormLabel>
                            Can you provide references from your current or previous clients that can vouch for your
                            carrier services? </FormLabel>
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
