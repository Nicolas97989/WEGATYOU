import {useState} from 'react'
import Nav from '../components/Nav'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import axios from 'axios'

const Onboarding = () => {
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const [formData, setFormData] = useState({
        user_id: cookies.UserId,
        first_name:'',
        dob_day:'',
        dob_month:'',
        dob_year:'',
        show_gender: false,
        gender_identity: 'man',
        gender_interest: 'woman',
        country:'',
        city:'',
        url: '',
        about: '',
        favourite_food:'',
        favourite_drink:'',
        dietary_requirement:'',
        favourite_place_to_eat:'',
        matches: []
    })

    let navigate = useNavigate()


    const handleSubmit = async (e) => {
        console.log('submitted')
        e.preventDefault()
    
        try {
            const response =  await axios.put('http://localhost:8000/user', { formData })
            console.log(response)
            const success = response.status === 200
            if (success) navigate('/dashboard')
        } catch (err) {
            console.log(err)
        }

    }

    const handleChange = (e) => {  
      const value =  e.target.type === 'checkbox' ? e.target.checked : e.target.value
      const name = e.target.name

      setFormData((prevState) =>({
        ...prevState,
        [name] : value
      }))
    }

    return (
        <>
        <Nav
        minimal={true}
        setShowModal={() => {
        }} 
        showModal={false}
         />
        <div className="onboarding">
            <h2>CREATE ACCOUNT</h2>

            <form onSubmit={handleSubmit}>
                <section>
                    <label htmlFor="first_name">First Name</label>
                    <input
                        id="first_name"
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        required={true}
                        value={formData.first_name}
                        onChange={handleChange}
                    
                    />
                    <label >Birthday</label>
                    <div className="multiple-input-container">
                    <input
                        id="dob_day"
                        type="number"
                        name="dob_day"
                        placeholder="DD" // the day required
                        required={true}
                        value={formData.dob_day}
                        onChange={handleChange}
                    
                    />
                    <input
                        id="dob_month"
                        type="number"
                        name="dob_month"
                        placeholder="MM" // the Month required
                        required={true}
                        value={formData.dob_month}
                        onChange={handleChange}
                    
                    />
                    <input
                        id="dob_year"
                        type="number"
                        name="dob_year"
                        placeholder="YYYY" // the year required
                        required={true}
                        value={formData.dob_year}
                        onChange={handleChange}
                    />
                    </div>

                    <label >Gender</label>
                    <div className="multiple-input-container">
                    <input
                        id="man-gender-identity"
                        type="radio"
                        name="gender_identity"
                        value="man"
                        onChange={handleChange}
                        checked={formData.gender_identity === "man"}
                    />
                    <label htmlFor="man-gender-identity">Man</label>
                     <input
                        id="woman-gender-identity"
                        type="radio"
                        name="gender_identity"
                        value="woman"
                        onChange={handleChange}
                        checked={formData.gender_identity === "woman"}
                    />
                    <label htmlFor="woman-gender-identity">woman</label>
                     <input
                        id="none-binary-identity"
                        type="radio"
                        name="gender_identity"
                        value="none-binary"
                        onChange={handleChange}
                        checked={formData.gender_identity === 'none-binary'}
                    />
                    <label htmlFor="none-binary-identity">None-binary</label>
                    </div>

                    <label htmlFor="show-gender">Show gender on my profile</label>
                    <input
                        id="show-gender"
                        type="checkbox"
                        name="show_gender"
                        onChange={handleChange}
                        checked={formData.show_gender}
                    />

                    <label >Show me</label>
                    <div className="multiple-input-container">
                    <input
                        id="man-gender-interest"
                        type="radio"
                        name="gender_interest"
                        value="man"
                        onChange={handleChange}
                        checked={formData.gender_interest === "man"}
                    />
                    <label htmlFor="man-gender-interest">Man</label>
                     <input
                        id="woman-gender-interest"
                        type="radio"
                        name="gender_interest"
                        value="woman"
                        onChange={handleChange}
                        checked={formData.gender_interest === "woman"}
                    />
                    <label htmlFor="woman-gender-interest">woman</label>
                     <input
                        id="everyone-interest"
                        type="radio"
                        name="gender_interest"
                        value="woman"
                        onChange={handleChange}
                        checked={formData.gender_interest === "everyone"}
                    />
                    <label htmlFor="everyone-interest">Everyone</label>
                    </div>
                    
                    <label htmlFor="country">Country</label>
                    <input // The user will need to enter their country
                        id="country"
                        type="text"
                        name="country"
                        required={true}
                        placeholder="United Kingdom"
                        value={formData.country}
                        onChange={handleChange}

                />
                <label htmlFor="city">City</label>
                    <input //The user will need to enter their country
                        id="city"
                        type="text"
                        name="city"
                        required={true}
                        placeholder="London"
                        value={formData.city}
                        onChange={handleChange}

                />
                    <label htmlFor="about">About me</label>
                    <input
                        id="about"
                        type="text"
                        name="about"
                        required={true}
                        placeholder="I love playing Basketball..."
                        value={formData.about}
                        onChange={handleChange}

                />
               
                <label htmlFor="favourite-food">Favourite food</label>
                    <input // The user's favourite food
                        id="favourite-food"
                        type="text"
                        name="favourite_food"
                        required={true}
                        placeholder="Carbonara"
                        value={formData.favourite_food}
                        onChange={handleChange}

                />
               
                
                <label htmlFor="favourite-drink">Favourite drink</label>
                    <input // The user will need to type in their favourite drink
                        id="favourite-drink"
                        type="text"
                        name="favourite_drink"
                        required={true}
                        placeholder="Pineapple Juice"
                        value={formData.favourite_drink}
                        onChange={handleChange}

                />
                <label htmlFor="dietary-requirement">Dietary requirement</label>
                    <input
                        id="dietary-requirement"
                        type="text"
                        name="dietary_requirement"
                        required={true}
                        placeholder="Gluten free"
                        value={formData.dietary_requirement}
                        onChange={handleChange}

                />
                <label htmlFor="favourite-place-to-eat">Favourite place to eat</label>
                    <input
                        id="favourite-place-to-eat"
                        type="text"
                        name="favourite_place_to_eat"
                        required={true}
                        placeholder="Vapiano"
                        value={formData.favourite_place_to_eat}
                        onChange={handleChange}

                />
                <input type="submit"/>

                </section>
               
                <section>
                <label htmlFor="url">Profile profile</label>
                    <input
                        type="url"
                        name="url"
                        id="url"
                        onChange={handleChange}
                        required={true}
                    />
                    <div className="photo-container">
                        {formData.url && <img src={formData.url} alt="profile pic preview"/>}
                    </div>
                </section>

            </form>

        </div>

     </>
        
    )
}
export default Onboarding