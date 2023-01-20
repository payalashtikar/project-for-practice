import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const FetchFormData = () => {
    const [data, setData] = useState([]);
    // const Navigate = useNavigate();

    async function fetchData() {
        try {
            const response = await axios.get("http://localhost:5011/getalluserdata")
            console.log(response, 'response')
            return setData(response?.data?.userData)
        }
        catch (error) {
            console.error(error)
        }
        console.log('users entered data... : ', data)
        // Navigate('/formformat')

    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="FormFormat-container"
            style={{
                width: '700px', height: 'auto', margin: '0 auto',
                // border: '2px solid #eee' 
            }}
        >
            <div style={{ margin: '0 auto', justifyContent: 'center', display: 'flex', }}>
                <div>User Information</div>
            </div>

            <div className="FormFormat-wrapper"
                style={{ margin: '5%' }}>

                {data && data.length > 0 && data.map((data, index) => {
                    return (
                        <div
                            style={{
                                // padding: '15px',
                                margin: '5px',
                                marginBottom: '',
                                background: 'whitesmoke',
                                alignItems: 'center',
                                display: 'inline-block',
                                verticalAlign: 'top'
                            }}>
                            <div
                                className="profile"
                                style={{ border: '1px solid #eee', width: '150px', height: '10rem', margin: '5px', marginTop: '5%', }}>
                                <img
                                    src={data.profilePhoto} alt=""
                                    style={{ width: '150px', height: '10rem', }} />
                            </div>

                            <div className="user name" style={{ display: 'flex', flexDirection: 'row', marginTop: '5%' }}>
                                <span style={{ width: '100px', padding: '5px', marginLeft: '5px' }}>FullName : </span>
                                <span style={{ border: '1px solid #eee', width: '220px', padding: '5px', marginLeft: '15px' }}>{data.firstName}</span>
                                <span style={{ border: '1px solid #eee', width: '220px', padding: '5px', marginLeft: '15px' }}>{data.lastName}</span>
                            </div>

                            <div className="gmail" style={{ display: 'flex', flexDirection: 'row', marginTop: '3%' }}>
                                <span style={{ width: '100px', padding: '5px', marginLeft: '5px' }}>Email : </span>
                                <span style={{ border: '1px solid #eee', width: '500px', padding: '5px', marginLeft: '15px' }}>{data.email}</span>
                            </div>

                            <div className="cont" style={{ display: 'flex', flexDirection: 'row', marginTop: '3%' }}>
                                <span style={{ width: '100px', padding: '5px', marginLeft: '5px' }}>Contact : </span>
                                <span style={{ border: '1px solid #eee', width: '500px', padding: '5px', marginLeft: '15px' }}>{data.contact}</span>
                            </div>

                            <div className="address" style={{ display: 'flex', flexDirection: 'row', marginTop: '3%' }}>
                                <span style={{ width: '100px', padding: '5px', marginLeft: '5px' }}>Address : </span>
                                <span style={{ border: '1px solid #eee', width: '500px', padding: '5px', marginLeft: '15px' }}>{data.address}</span>
                            </div>

                            <div className="city" style={{ display: 'flex', flexDirection: 'row', marginTop: '3%' }}>
                                <span style={{ width: '100px', padding: '5px', marginLeft: '5px' }}>City : </span>
                                <span style={{ border: '1px solid #eee', width: '500px', padding: '5px', marginLeft: '15px' }}>{data.city}</span>
                            </div>

                            <div className="gen" style={{ display: 'flex', flexDirection: 'row', marginTop: '3%' }}>
                                <span style={{ width: '100px', padding: '5px', marginLeft: '5px' }}>Gender : </span>
                                <span style={{ border: '1px solid #eee', width: '500px', padding: '5px', marginLeft: '15px' }}>{data.gender}</span>
                            </div>

                            <div className="age" style={{ display: 'flex', flexDirection: 'row', marginTop: '3%' }}>
                                <span style={{ width: '100px', padding: '5px', marginLeft: '5px' }}>Age : </span>
                                <span style={{ border: '1px solid #eee', width: '500px', padding: '5px', marginLeft: '15px' }}>{data.age}</span>
                            </div>

                            <div className="status" style={{ display: 'flex', flexDirection: 'row', marginTop: '3%', marginBottom: '5%', }}>
                                <span style={{ width: '100px', padding: '5px', marginLeft: '5px' }}>Status : </span>
                                <span style={{ border: '1px solid #eee', width: '500px', padding: '5px', marginLeft: '15px' }}>{data.status}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <br></br>

        </div>
    )
}
export default FetchFormData;