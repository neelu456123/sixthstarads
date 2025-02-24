import { useState } from "react";


// Adjust the import path accordingly

const initState = { values: {}, isLoading: false }; // Initialize values properly

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    country: 'India',
    subject:'', 
    email: '',
    company: '',
    message: ''
  });
  
  const [state, setState] = useState(initState); // Initialize the state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await contactusForm(formData); // Use formData instead of values
      // console.log("Form submitted successfully!");
      alert('Form submitted successfully!')
      setState(initState); // Reset form after successful submission
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit form. Please try again later.');
    } finally {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  return (
    <div className="contact-new-banner">
      <form onSubmit={onSubmit}>
        <div className='form-container'>
          <div className='row form-sub-container-name-banner'>
            <div className='col-sm first-name'>
            <label htmlFor="contact-form-start">
        First-Name
      </label>
      <br/>
      <input
          type="text"
          name="firstname"
          autoComplete="firstname"
          id="contact-form-start"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
            </div>
            <div className='col-sm'>
            <label htmlFor="contact-form-start">
        Last-Name
      </label>
      <br/>
      <input
          type="text"
          name="lastname"
          autoComplete="lastname"
          id="contact-form-start"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
            </div>
            <div className='row'>
            <div className='col-sm'>

            <div className='form-sub-container-banner'>
          <label htmlFor="email">
        Your Email </label>
        <br/>
      <input
          type="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
          </div>


          <div className='form-sub-container-banner'>
          <label>
        Phone
      </label>
      <br/>
      <input
          type="tel"
          name="phone"
          placeholder=""
          value={formData.phone}
          onChange={handleChange}
          required
        />
        </div>



        <div className='form-sub-container-banner'>
        <label htmlFor="subject">
        Subject </label>
        <br/>
      <input
          type="text"
          name="subject"
          autoComplete="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        </div>

        <div className='form-sub-container-banner'>
        <label htmlFor="company">
        Company Name 
      </label>
      <br/>
      <input
          type="text"
          name="company"
          id="company"
          placeholder=""
          value={formData.company}
          onChange={handleChange}
        />
        </div>


       

        <div className='form-sub-container-banner'>
        <button className="btn" type="submit" disabled={state.isLoading}>
          {state.isLoading ? 'Sending...' : 'Send'}
        </button>
        </div>

            </div>
            </div>

          </div>
          

      

        </div>

        



      </form>


































    {/* <form onSubmit={onSubmit}>
        <div className='row'>
        <div className="col-md-6">
        <div className="formField">
      <label htmlFor="dedicated-form-start">
        Name
      </label>
      <br/>
      <input
          type="text"
          name="name"
          autoComplete="name"
          id="dedicated-form-start"
          value={formData.name}
          onChange={handleChange}
          required
        />
        </div>

        <div className="formField">
      <label htmlFor="email">
        Your Email </label>
        <br/>
      <input
          type="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

        <div className="formField">
      <label>
        Phone
      </label>
      <br/>
      <input
          type="tel"
          name="phone"
          placeholder=""
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>


      

      <div className="formField">
      <label htmlFor="cont">
        Choose Your Country
      </label>
      <br/>
      <select
          name="country"
          id="cont"
          value={formData.country}
          onChange={handleChange}
          required
        >
          <option value="India">India</option>
          <option value="Argentina">Argentina</option>
          <option value="Australia">Australia</option>
          <option value="Austria">Austria</option>
          <option value="Bahrain">Bahrain</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Barbados">Barbados</option>
          <option value="Belarus">Belarus</option>
          <option value="Belgium">Belgium</option>
          <option value="Bermuda">Bermuda</option>
          <option value="Bhutan">Bhutan</option>
          <option value="Botswana">Botswana</option>
          <option value="Brazil">Brazil</option>
          <option value="Brunei Darussalam">Brunei Darussalam</option>
          <option value="Bulgaria">Bulgaria</option>
          <option value="Cambodia">Cambodia</option>
          <option value="Canada">Canada</option>
          <option value="Cape Verde">Cape Verde</option>
          <option value="Cayman Islands">Cayman Islands</option>
          <option value="China">China</option>
          <option value="Cuba">Cuba</option>
          <option value="Cyprus">Cyprus</option>
          <option value="Denmark">Denmark</option>
          <option value="Egypt">Egypt</option>
          <option value="El Salvador">El Salvador</option>
          <option value="Eritrea">Eritrea</option>
          <option value="Estonia">Estonia</option>
          <option value="Ethiopia">Ethiopia</option>
          <option value="Fiji">Fiji</option>
          <option value="Finland">Finland</option>
          <option value="France">France</option>
          <option value="Georgia">Georgia</option>
          <option value="Germany">Germany</option>
          <option value="Ghana">Ghana</option>
          <option value="Greece">Greece</option>
          <option value="Guyana">Guyana</option>
          <option value="HongKong">HongKong</option>
          <option value="Hungary">Hungary</option>
          <option value="Iceland">Iceland</option>
          <option value="Indonesia">Indonesia</option>
          <option value="Iran">Iran</option>
          <option value="Ireland">Ireland</option>
          <option value="Israel">Israel</option>
          <option value="Italy">Italy</option>
          <option value="Japan">Japan</option>
          <option value="Jordan">Jordan</option>
          <option value="Kenya">Kenya</option>
          <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
          <option value="Korea, Republic of">Korea, Republic of</option>
          <option value="Kuwait">Kuwait</option>
          <option value="Latvia">Latvia</option>
          <option value="Luxembourg">Luxembourg</option>
          <option value="Macao">Macao</option>
          <option value="Malawi">Malawi</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Maldives">Maldives</option>
          <option value="Mauritius">Mauritius</option>
          <option value="Mexico">Mexico</option>
          <option value="Mongolia">Mongolia</option>
          <option value="Morocco">Morocco</option>
          <option value="Namibia">Namibia</option>
          <option value="Nauru">Nauru</option>
          <option value="Nepal">Nepal</option>
          <option value="Netherlands">Netherlands</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Niger">Niger</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Norway">Norway</option>
          <option value="Oman">Oman</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Panama">Panama</option>
          <option value="Papua New Guinea">Papua New Guinea</option>
          <option value="Philippines">Philippines</option>
          <option value="Poland">Poland</option>
          <option value="Portugal">Portugal</option>
          <option value="Qatar">Qatar</option>
          <option value="Romania">Romania</option>
          <option value="Russian Federation">Russian Federation</option>
          <option value="Rwanda">Rwanda</option>
          <option value="Samoa">Samoa</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="Senegal">Senegal</option>
          <option value="Singapore">Singapore</option>
          <option value="South Africa">South Africa</option>
          <option value="Spain">Spain</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Sudan">Sudan</option>
          <option value="Sweden">Sweden</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Taiwan">Taiwan</option>
          <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
          <option value="Thailand">Thailand</option>
          <option value="Tunisia">Tunisia</option>
          <option value="Turkey">Turkey</option>
          <option value="Uganda">Uganda</option>
          <option value="Ukraine">Ukraine</option>
          <option value="United Arab Emirates">United Arab Emirates</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="United States of America">United States of America</option>
          <option value="Uruguay">Uruguay</option>
          <option value="Viet Nam">Viet Nam</option>
          <option value="Yemen">Yemen</option>
          <option value="Zair">Zair</option>
          <option value="Zambia">Zambia</option>
          <option value="Zimbabwe">Zimbabwe</option>
        </select>
      </div>
        
        
        <div className="formField">
      <label htmlFor="subject">
        Subject </label>
        <br/>
      <input
          type="text"
          name="subject"
          autoComplete="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>

      <div className="formField">
      <label htmlFor="company">
        Company Name 
      </label>
      <br/>
      <input
          type="text"
          name="company"
          id="company"
          placeholder=""
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div className="formField">
      <label>
        Your Message
      </label>
      <br/>
      <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
        
        
        <button className="btn" type="submit" disabled={state.isLoading}>
          {state.isLoading ? 'Sending...' : 'Send'}
        </button>
        </div>
        </div>
    </form> */}









  </div>



















    
    

  );
};

export default ContactUsForm;
