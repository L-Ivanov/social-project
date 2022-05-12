import {SiStarship} from "react-icons/si";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import {GoogleLogout} from 'react-google-login';
import Gallery from 'react-grid-gallery';
import {useRef} from "react";

const PicturesGallery = (props) => {

    const inputEl = useRef('');
    const images =
        [{
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{value: "Nature", title: "Nature"}],
            // isSelected: true,
            caption: "Nature leaf"
        },
            {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Nature", title: "Nature"}],
                caption: "Boats Nature"
            },

            {
                src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Pencils", title: "Pencils"}],
                caption: "Pencils"
            },
            {
                src: "https://images.unsplash.com/photo-1501862700950-18382cd41497?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1419&q=80",
                thumbnail: "https://images.unsplash.com/photo-1501862700950-18382cd41497?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1419&q=80",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Space", title: "Space"}],
                caption: "Space nebula"

            },
            {
                src: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1213&q=80",
                thumbnail: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1213&q=80",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Space", title: "Space"}],
                caption: "Space nebula"

            }, {
            src: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=415&q=80",
            thumbnail: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=415&q=80",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{value: "Nature", title: "Nature"}],
            caption: "Nature"

        }, {
            src: "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1287&q=80",
            thumbnail: "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1287&q=80",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{value: "Space", title: "Space"}],
            caption: "Space nebula"

        }, {
            src: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=371&q=80",
            thumbnail: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=371&q=80",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{value: "Space", title: "Space"}],
            caption: "Space"

        }, {
            src: "https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=879&q=80",
            thumbnail: "https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=879&q=80",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{value: "Space", title: "Space"}],
            caption: "Space nebula"

        }, {
            src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=911&q=80",
            thumbnail: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=911&q=80",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{value: "Space", title: "Space"}],
            caption: "Space nebula"

        }, {
            src: "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            thumbnail: "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{value: "Nature", title: "Nature"}],
            caption: "Nature forest"

        }, {
            src: "https://images.unsplash.com/photo-1532798369041-b33eb576ef16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
            thumbnail: "https://images.unsplash.com/photo-1532798369041-b33eb576ef16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{value: "Space", title: "Space"}],
            caption: "Space"

        }, {
            src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            thumbnail: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{value: "Nature", title: "Nature"}],
            caption: "Nature"

        }, {
            src: "https://images.unsplash.com/photo-1595088402198-24d44e48d57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1058&q=80",
            thumbnail: "https://images.unsplash.com/photo-1595088402198-24d44e48d57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1058&q=80",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{value: "Space", title: "Space"}],
            caption: "Space nebula"

        }, {
            src: "https://images.unsplash.com/photo-1590510616176-67c37c34fa28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            thumbnail: "https://images.unsplash.com/photo-1590510616176-67c37c34fa28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{value: "Cars", title: "Cars"}],
            caption: "Cars Camaro"

        }, {
            src: "https://images.unsplash.com/photo-1479854851860-18d97e109331?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
            thumbnail: "https://images.unsplash.com/photo-1479854851860-18d97e109331?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{value: "Nature", title: "Nature"}],
            caption: "Nature"

        }, {
            src: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1237&q=80",
            thumbnail: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1237&q=80",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{value: "Cars", title: "Cars"}],
            caption: "Cars Camaro"

        }, {
            src: "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
            thumbnail: "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{value: "Nature", title: "Nature"}],
            caption: "Boats"

        }, {
            src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
            thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{value: "Nature", title: "Nature"}],
            caption: "Nature"

        }, {
            src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1274&q=80",
            thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1274&q=80",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{value: "Nature", title: "Nature"}],
            caption: "Nature mountain"

        }]
    const username = (decodeURIComponent(window.location.pathname.split('/')[2]));
    const onLogout = () => {
        window.location.href = 'http://localhost:3000/';
    }
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults]= useState([]);

    const searchHandler=(searchTerm)=>{
        setSearchTerm(searchTerm);
        if(searchTerm !== ''){
            const newPictureList = images.filter((contact)=>{
                return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
            })
            setSearchResults(newPictureList);
        }
    }
    const [searchKeyword, setSearchKeyword]= useState('');
    const getSearchTerm=()=> {
        props.searchKeyword(inputEl.current.value);
    }


    return (<h1 className='for-h1'>
        <h4 className='h4'>Welcome, {username}</h4>
        <h4 style={{display: 'block'}}>Pictures Gallery <SiStarship size='40' color='blue'/></h4>
        <Link to='/'>
            <div className='google-logout'>
                <GoogleLogout className='google-logout'
                              clientId="873882491652-ol330f08cvfdrqbuj8n2b8ijho98srg8.apps.googleusercontent.com"
                              buttonText="Logout"
                              onLogoutSuccess={onLogout}
                >
                </GoogleLogout>
            </div>

        </Link>
        <div className='form-control'>
            <label className='h4'>Search picture:</label>
            <input ref={inputEl} type='text' placeholder='Search bar' value={props.caption}
                   onChange={getSearchTerm}/>

        </div>
        <div className='gallery'>
            <Gallery maxRows={5} maxCols={4} images={images}/>
            <div></div>
            {/*images.props = {searchTerm*/}
            {/*        .length <1? images : searchResults}*/}
            {/*    */}
            {/*    term={searchTerm}*/}
            {/*    searchKeyword ={searchHandler}*/}

        </div>


    </h1>)

}
export default PicturesGallery;
