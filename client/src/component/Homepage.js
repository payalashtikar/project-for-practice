import React, { Fragment, useEffect, useState } from "react";
import { Button } from 'antd'
import { Link } from "react-router-dom";

const Homepage = () => {

    return (
        <div className="homepage">
            <div> Do you wanna create your template??</div>
            <Button><Link to='/register'>Register</Link></Button>
            <p>Already have account?</p>
            <Button><Link to='/login'>Login</Link></Button>
        </div>
    )
};

export default Homepage;
