import React, {useState, useEffect} from 'react';
import {Button, Card, InputGroup, Form, FormLabel, Row, Col} from "react-bootstrap";

function Login() {
    //State
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });

    //Method
    const onChange = (e)=>{
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
    }
    //Lifecycle
    useEffect(()=>{
        return ()=>{
        }
    })


    return (
        <>
            <div className="login-container">
                <div className="login-main">
                    <Card className="login-card">
                        <div style={{height:"5rem"}}></div>
                        <Card.Title>Login</Card.Title>
                        <Card.Body>
                            <Form.Label htmlFor="basic-url">Username</Form.Label>
                            <InputGroup className="">
                                <Form.Control
                                    placeholder="Username"
                                    name = "username"
                                    onChange={onChange}
                                    value={inputs.username}
                                />
                            </InputGroup>

                            <Form.Label htmlFor="basic-url">Password</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Password"
                                    name = "password"
                                    onChange={onChange}
                                    value={inputs.password}
                                />
                            </InputGroup>
                            <Button className="login-button" type="submit">Login</Button>

                            <Form.Label htmlFor="basic-url">Login with social platforms</Form.Label>
                            <div className="row">
                                <div className="col-auto">
                                    <a href={process.env.REACT_APP_BACKEND_URL + '/login/oauth/code/google'}>
                                        <div className="google-login">
                                            <div className="google-icon">
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Card.Body>
                        <div style={{height:"5rem"}}></div>
                    </Card>
                </div>
            </div>
        </>

    );

}

export default Login;