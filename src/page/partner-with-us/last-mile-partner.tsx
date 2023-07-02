import React from 'react'
import NewPageContainer from "../../components/new-page-container"
import Toolbar from "@mui/material/Toolbar"
import {Box, Container, Typography, useTheme} from "@mui/material"
import partnerWithUs from "../../assets/images/aboutIllustrationNew.png";
import {useForm, Controller} from "react-hook-form";
import {ThemeTextField} from "../../components/inputs/theme-text-field";


export default function LastMilePartner() {

    const theme = useTheme()

    const {control, handleSubmit, formState: {errors}} = useForm()

    return (
        <NewPageContainer sx={{background: 'none'}}>
            <Toolbar disableGutters sx={{
                height: '90px',
                transition: 'all 300ms ease-in-out',
            }}/>
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
                        mt: 5,
                        fontSize: 'clamp(1.7rem, 8vw, 3.5rem)',
                        fontWeight: 600,
                        color: theme.palette.secondary.main,
                    },
                    '& .headDes': {
                        mt: 1,
                        color: theme.palette.text.secondary,
                        maxWidth: '600px',
                        width: '90%',
                        mx: 'auto',
                        textAlign: 'center',
                        fontSize: '16px',
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
                    background: '#fff',
                    borderRadius: '20px',
                    minHeight: '300px',
                    p: 2,
                    py: 4,
                    '& .formInput': {
                        flex: '1 1 300px',
                        maxWidth: '450px',
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

                <Box className={'formSection'}>
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
                            className={'formInput'}
                            placeholder={'Highest qualification'}/>
                    )}/>
                </Box>
            </Container>


        </NewPageContainer>
    )
}