import React from 'react'
import { Button, TextField } from '@mui/material'
import Grid from '@mui/material/Grid';
import { useState } from 'react';

function Form() {
    const [detail, setDetail] = useState({
        name: "",
        lastName: "",
        phone: "",
        address: ""
    });

    const submitData = (e) => {
        e.preventDefault();
        //api request
        }

    return (
        <>

            <Grid component="form"
                onSubmit={submitData}
                container
            >

                <Grid item xs={12} md={12}>
                    <TextField
                        id="name"
                        label="First Name"
                        variant="outlined"
                        value={detail.name}
                        onChange={(e) => { setDetail({ ...detail, name: e.target.value }) }}
                    /></Grid>
                <Grid item xs={12} md={12}>
                    <TextField
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        value={detail.lastName}
                        onChange={(e) => { setDetail({ ...detail, lastName: e.target.value }) }}

                    /></Grid>
                <Grid item xs={12} md={12}>
                    <TextField
                        id="outlined-basic"
                        label="Phone Number"
                        variant="outlined"
                        value={detail.phone}
                        onChange={(e) => { setDetail({ ...detail, phone: e.target.value }) }}

                    /></Grid>
                <Grid item xs={12} md={12}>
                    <TextField
                        id="outlined-basic"
                        label="Address"
                        variant="outlined"
                        value={detail.address}  
                        onChange={(e) => { setDetail({ ...detail, address: e.target.value }) }}

                    /></Grid>
                <Grid item xs={12} md={12}>
                    <Button type='submit'>SUBMIT</Button>

                </Grid>
            </Grid>








        </>
    )
}

export default Form
