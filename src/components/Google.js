import React from "react";
import {GoogleLogin} from "react-google-login";


function Google() {

    const onSuccess = (response) => {
        console.log(response);
        const username = response.profileObj.name;
        window.location.href = `http://localhost:3000/gallery/${username}`;
    }

    return (
        <div className="form-control">
            <GoogleLogin
                clientId=""
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                //onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                //redirectUri={'http://localhost:3000/gallery'}


            />

        </div>
    );


}

export default Google;
