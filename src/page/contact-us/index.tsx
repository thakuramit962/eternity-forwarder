import React, {ChangeEvent, KeyboardEventHandler, useState} from 'react'
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
import {Attachment, MyLocation, Password, PhoneRounded, Place} from "@mui/icons-material";
import {Link, useNavigate} from "react-router-dom";
import {Controller, useForm} from "react-hook-form";
import {ThemeTextField} from "../../components/inputs/theme-text-field";
import {LoadingButton} from "@mui/lab";
import bg from "../../assets/images/hero-banner-1.jpg";


export default function ContactUs() {

    const theme = useTheme()
    const navigate = useNavigate()

    const {control, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <Box component={'section'} id={'contact-us'} sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'stretch',
            flex: 1,
            minHeight: 'min(90vh, 700px)',
            p: 2,
        }}>

            <Box sx={{
                flex: `1 1 400px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& img': {
                    height: '90%',
                    width: '90%',
                    maxHeight: 'min(80vh, 500px)',
                    objectFit: 'contain',
                },
            }}>
                <img src={map} alt={'connectivity map'}/>
            </Box>

            <Box sx={{
                flex: '2 1 300px',
                minHeight: {xs: '80vh', sm: 'auto'},
                borderRadius: '20px',
                background: '#fff',
                boxShadow: `0 0 17px -3px #83838370`,
                p: 2,
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
                    <Typography className={'blockHead'}>We'd love to connect</Typography>
                    <Typography className={'blockDes'}>
                        Reach out and we'll get in touch within 24 hrs.
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
                                sx={{flex: '1 1 400px'}}
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
                                    sx={{flex: '1 1 200px'}}
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
                                sx={{flex: '1 1 200px'}}
                                placeholder={'your@email.address'}/>
                        )}/>

                        <Controller
                            name={`companyName`}
                            defaultValue={''}
                            control={control}
                            rules={{
                                required: {value: false, message: 'Required'},
                            }} render={({field}) => (
                            <ThemeTextField
                                {...field}
                                error={Boolean(errors?.companyName)}
                                helperText={(errors?.companyName?.message ?? '').toString()}
                                size={'small'} label={'Company Name'}
                                sx={{flex: '1 1 200px'}}
                                placeholder={'company name'}/>
                        )}/>
                        <Controller
                            name={`companyWebsite`}
                            defaultValue={''}
                            control={control}
                            rules={{
                                required: {value: true, message: 'Required'},
                            }} render={({field}) => (
                            <ThemeTextField
                                {...field} required type={'url'}
                                error={Boolean(errors?.companyWebsite)}
                                helperText={(errors?.companyWebsite?.message ?? '').toString()}
                                size={'small'} label={'Company Website'}
                                sx={{flex: '1 1 200px'}}
                                placeholder={'eg.- company.domain'}/>
                        )}/>
                        <Controller
                            name={`serviceType`}
                            defaultValue={''}
                            control={control}
                            rules={{
                                required: {value: true, message: 'Required'},
                            }} render={({field}) => (
                            <ThemeTextField
                                {...field} required select
                                error={Boolean(errors?.serviceType)}
                                helperText={(errors?.serviceType?.message ?? '').toString()}
                                size={'small'} label={'Service Type'}
                                sx={{flex: '1 1 200px'}}
                                placeholder={'type of service'}>
                                <MenuItem value={'option1'}>Option 1</MenuItem>
                                <MenuItem value={'option2'}>Option 2</MenuItem>
                                <MenuItem value={'option3'}>Option 3</MenuItem>
                            </ThemeTextField>
                        )}/>
                        <Controller
                            name={`state`}
                            defaultValue={''}
                            control={control}
                            rules={{
                                required: {value: true, message: 'Required'},
                            }} render={({field}) => (
                            <ThemeTextField
                                {...field} required select
                                error={Boolean(errors?.state)}
                                helperText={(errors?.state?.message ?? '').toString()}
                                size={'small'} label={'State or Region'}
                                sx={{flex: '1 1 200px'}}
                                placeholder={'Select state'}>
                                <MenuItem value={'option1'}>Option 1</MenuItem>
                                <MenuItem value={'option2'}>Option 2</MenuItem>
                                <MenuItem value={'option3'}>Option 3</MenuItem>
                            </ThemeTextField>
                        )}/>


                        <FormControl>
                            <FormLabel>How would you prefer to be contacted to discuss your logistics
                                requirements?</FormLabel>
                            <Controller
                                name={`connectionPreference`}
                                defaultValue={''}
                                control={control}
                                rules={{
                                    required: {value: true, message: 'Required'},
                                }} render={({field}) => (
                                <ThemeTextField
                                    {...field} required type={'url'}
                                    error={Boolean(errors?.connectionPreference)}
                                    helperText={(errors?.connectionPreference?.message ?? '').toString()}
                                    size={'small'}
                                    placeholder={'eg.- phone call or email'}/>
                            )}/>
                        </FormControl>

                        <Stack direction={'row'} sx={{
                            alignItems: 'flex-start',
                            mb: 2,
                            '& .MuiTypography-root': {
                                mt: 1,
                            },

                        }}>
                            <Checkbox size={'small'}/>
                            <Typography variant={'caption'}>
                                By submitting this form, you consent to the collection and processing of your
                                personal data for the purpose of addressing your logistics inquiry. Please tick
                                the box to confirm your consent.
                            </Typography>
                        </Stack>


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

            </Box>

        </Box>
    )
}