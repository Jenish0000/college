import React from "react";
import "./registrationform.css";
import DoneIcon from "@mui/icons-material/Done";
import { useState } from "react";
import { useEffect } from "react";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationForm = () => {
     
  const scrollTop = () => {
    window.scrollTo({
      top: 330,
      left: 0,
      behaviour: "smooth",
    });
  };

  const initialValues = {
    student_first_name: "",
    student_middle_name: "",
    student_last_name: "",
    gender: "",
    birth_date: "",
    adress: "",
    Admission_for_grade: "11",
    last_attended_school: "",
    father_full_name: "",
    father_mobile_number: null,
    father_occupation: "",
    mother_full_name: "",
    mother_mobile_number: null,
    mother_occupation: "",
    hostel_service: false,
    bus_service: false,
    agreed_terms: false,
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = ({ target: { name, value, type, checked } }) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCheckboxChange = ({ target: { name, value, type, checked } }) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: name === "gender" ? value : type === "checkbox" ? checked : value,
    }));
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios
        .get("http://localhost:3001/getUsers")
        .then((users) => setFormValues(users.data))
        .catch((err) => console.log(err));
        toast("Successfully Submitted Your Form")
    }
  }, [formErrors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    axios
      .post("http://localhost:3001/registration",  formValues )
      .then((users) => console.log(users))
      .catch((err) => console.log(err));
  };

  const validate = (values) => {
    const errors = {};
    const agreeCheckbox = document.querySelector(".agreeCheckbox");
    const pattern = /^[a-zA-Z ]*$/;
    const numberPattern = /^\d+$/;

    const validateField = (field, errorText, conditions) => {
      if (!values[field]) {
        errors[field] = errorText;
        scrollTop();
      } else {
        conditions.forEach((condition) => {
          const { check, message } = condition;
          if (check(values[field])) {
            errors[field] = message;
            scrollTop();
          }
        });
      }
    };

    validateField("student_first_name", "First name is required!!", [
      {
        check: (value) => value.length < 3,
        message: "First name must be longer than 3 characters",
      },
      {
        check: (value) => value.length > 10,
        message: "First name must be less than 10 characters",
      },
      {
        check: (value) => !value.match(pattern),
        message: "Only characters are allowed",
      },
    ]);

    validateField("student_last_name", "Last name is required!!", [
      {
        check: (value) => value.length < 3,
        message: "Last name must be longer than 3 characters",
      },
      {
        check: (value) => value.length > 10,
        message: "Last name must be less than 10 characters",
      },
      {
        check: (value) => !value.match(pattern),
        message: "Only characters are allowed",
      },
    ]);

    validateField("gender", "Please select your gender", []);

    validateField("birth_date", "Please select your birth date", []);

    validateField("adress", "Please enter your address", [
      {
        check: (value) => !value.match(pattern),
        message: "Only characters are allowed",
      },
      {
        check: (value) => value.length < 5,
        message: "Address must be longer than 5 characters",
      },
    ]);

    validateField(
      "last_attended_school",
      "Please enter your last attended school name",
      [
        {
          check: (value) => !value.match(pattern),
          message: "Only characters are allowed",
        },
        {
          check: (value) => value.length < 7,
          message: "School name must be more than 7 characters",
        },
      ]
    );

    validateField("father_full_name", "Please enter your father name", [
      {
        check: (value) => !value.match(pattern),
        message: "Only characters are allowed",
      },
      {
        check: (value) => value.length < 7,
        message: "This field must be longer than 7 characters",
      },
    ]);

    validateField(
      "father_mobile_number",
      "Please enter your father mobile number",
      [
        {
          check: (value) => value.length < 10,
          message: "Mobile number must be of 10 numbers",
        },
        {
          check: (value) => !value.match(numberPattern),
          message: "Only numbers are allowed",
        },
      ]
    );
    validateField(
      "mother_mobile_number",
      "Please enter your mother mobile number",
      [
        {
          check: (value) => value.length < 10,
          message: "Mobile number must be of 10 numbers",
        },
        {
          check: (value) => !value.match(numberPattern),
          message: "Only numbers are allowed",
        },
      ]
    );

   validateField("mother_full_name", "Please enter your mother name", [
    {
      check: (value) => value.length < 10,
      message: "Mobile number must be of 10 numbers",
    },
      {
        check: (value) => !value.match(pattern),
        message: "Only characters are allowed",
      },
    ]);
    if (!values.agreed_terms || !agreeCheckbox.checked) {
      errors.agreed_terms = "Please accept (tick) for further process";
    }
    return errors;
  };

  const switchBoxOne = () => {
    const switchFemale = document.querySelector("#genderFemale");
    switchFemale.checked = false;
  };
  const switchBoxTwo = () => {
    const switchMale = document.querySelector("#genderMale");
    switchMale.checked = false;
  };
  const unCheckOne = () => {
    const radioTwo = document.querySelector("#radioTwo");
    radioTwo.checked = false;
  };
  const unCheckTwo = () => {
    const radioOne = document.querySelector("#radioOne");
    radioOne.checked = false;
  };
  const unCheckThree = () => {
    const radioFour = document.querySelector("#radioFour");
    radioFour.checked = false;
  };
  const unCheckFour = () => {
    const radioThree = document.querySelector("#radioThree");
    radioThree.checked = false;
  };
  return (
    <>
      {/* <pre>{JSON.stringify(formValues,undefined,2)}</pre> */}
      <form method="POST" className="registerForm">
        <div className="registerInfoOneContent">
          <h4 className="headingRegister">
            Student's Name <span>(In block letters)</span>
          </h4>

          <div className="firstRowflexed">
            <div className="inputsFlexed">
              <label htmlFor="FirstName" className="registerLabel">
                First Name <AutoAwesomeOutlinedIcon className="priority" />
              </label>
              <input
                maxLength={11}
                onChange={handleChange}
                value={formValues.student_first_name}
                name="student_first_name"
                type="text"
                className="inputRegister uppercaseTransform"
              />
              <p className="errorText">{formErrors.student_first_name}</p>
              <label htmlFor="MiddleName" className="registerLabel">
                Middle Name
              </label>
              <input
                maxLength={11}
                onChange={handleChange}
                value={formValues.student_middle_name}
                name="student_middle_name"
                type="text"
                className="inputRegister uppercaseTransform"
              />

              <label htmlFor="LastName" className="registerLabel">
                Last Name <AutoAwesomeOutlinedIcon className="priority" />
              </label>
              <input
                maxLength={11}
                onChange={handleChange}
                value={formValues.student_last_name}
                name="student_last_name"
                type="text"
                className="inputRegister uppercaseTransform"
              />
              <p className="errorText">{formErrors.student_last_name}</p>
            </div>
            <div className="dobAndGenderContainer">
              <div className="dobContent">
                <h4>Date Of Birth</h4>

                <label htmlFor="FirstName" className="registerLabel">
                  English Date <AutoAwesomeOutlinedIcon className="priority" />
                </label>
                <input
                  name="birth_date"
                  type="date"
                  className="inputRegister"
                  onChange={handleChange}
                />
                <p className="errorTextForRight">{formErrors.birth_date}</p>
              </div>

              <div className="genderContent">
                <h4>
                  Gender <AutoAwesomeOutlinedIcon className="priority" />
                </h4>
                <div className="mf">
                  <input
                    onClick={switchBoxOne}
                    id="genderMale"
                    name="gender"
                    type="checkbox"
                    className="genderCheckbox"
                    value="Male"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="genderMale" className="registerLabelGender">
                    Male
                  </label>

                  <input
                    onClick={switchBoxTwo}
                    id="genderFemale"
                    name="gender"
                    type="checkbox"
                    className="genderCheckbox"
                    value="Female"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="genderFemale" className="registerLabelGender">
                    Female
                  </label>
                </div>
                <p className="errorTextForRight">{formErrors.gender}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="registerInfoTwoContent">
          <div className="secondRowflexed">
            <div className="adressregisterContent">
              <div className="labelsandinputs">
                <label htmlFor="FirstName" className="registerLabel">
                  Adress <AutoAwesomeOutlinedIcon className="priority" />
                </label>
                <input
                  maxLength={30}
                  name="adress"
                  type="text"
                  className="inputRegister"
                  onChange={handleChange}
                />
                <p className="errorText">{formErrors.adress}</p>
              </div>
              <div className="labelsandinputs">
                <label htmlFor="FirstName" className="registerLabel">
                  Admission for grade{" "}
                  <AutoAwesomeOutlinedIcon className="priority" />
                </label>
                <input
                  name="Admission_for_grade"
                  value={11}
                  type="text"
                  className="inputRegister"
                />
              </div>
              <div className="labelsandinputs">
                <label htmlFor="FirstName" className="registerLabel">
                  Name of the school last attended{" "}
                  <AutoAwesomeOutlinedIcon className="priority" />
                </label>
                <input
                  maxLength={30}
                  name="last_attended_school"
                  type="text"
                  className="inputRegister"
                  onChange={handleChange}
                />
                <p className="errorText">{formErrors.last_attended_school}</p>
              </div>
            </div>
          </div>
        </div>

        <section className="guardiansInformation">
          <div className="fatherInfo">
            <h4 className="headingRegister">Father's Information</h4>
            <div className="registerFatherInfo">
              <div className="columnStyle">
                <label htmlFor="FirstName" className="registerLabel">
                  Full Name <AutoAwesomeOutlinedIcon className="priority" />
                </label>
                <input
                  maxLength={25}
                  name="father_full_name"
                  type="text"
                  className="inputRegister inputRegisterWidth"
                  onChange={handleChange}
                />
                <p className="errorText">{formErrors.father_full_name}</p>
              </div>
              <div className="columnStyle">
                <label htmlFor="FirstName" className="registerLabel">
                  Mobile Number <AutoAwesomeOutlinedIcon className="priority" />
                </label>
                <input
                  onChange={handleChange}
                  maxLength={10}
                  name="father_mobile_number"
                  // type="number"
                  className="inputRegister inputRegisterWidth"
                />
                <p className="errorText">{formErrors.father_mobile_number}</p>
              </div>

              <div className="columnStyle">
                <label htmlFor="FirstName" className="registerLabel">
                  Occupation
                </label>
                <input
                  maxLength={30}
                  type="text"
                  className="inputRegister inputRegisterWidth"
                  name="father_occupation"
                />
              </div>
            </div>
          </div>
          <div className="motherInfo">
            <h4 className="headingRegister">Mother's Information</h4>
            <div className="registerFatherInfo">
              <div className="columnStyle">
                <label htmlFor="FirstName" className="registerLabel">
                  Full Name <AutoAwesomeOutlinedIcon className="priority" />
                </label>
                <input
                  maxLength={25}
                  name="mother_full_name"
                  type="text"
                  className="inputRegister inputRegisterWidth"
                  onChange={handleChange}
                />
                <p className="errorText">{formErrors.mother_full_name}</p>
              </div>
              <div className="columnStyle">
                <label htmlFor="FirstName" className="registerLabel">
                  Mobile Number
                </label>
                <input
                  maxLength={10}
                  name="mother_mobile_number"
                  // type="number"
                  className="inputRegister inputRegisterWidth"
                  onChange={handleChange}
                />
                <p className="errorText">{formErrors.mother_mobile_number}</p>
              </div>
              <div className="columnStyle">
                <label htmlFor="FirstName" className="registerLabel">
                  Occupation
                </label>
                <input
                  type="text"
                  className="inputRegister inputRegisterWidth"
                  name="mother_occupation"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="serivesSec">
          <h3>Choose the services you need (Optional)</h3>
          <div className="leftSec">
            <div className="hostelWrapper">
              <label className="registerSerice">Hostel</label>

              <input
                type="checkbox"
                id="radioOne"
                className="serviceCheckbox"
                value="Yes"
                name="hostel_service"
                onChange={handleChange}
                onClick={unCheckOne}
              />
              <label className="registerSerice">Yes</label>

              <input
                type="checkbox"
                id="radioTwo"
                className="serviceCheckbox"
                value="No"
                name="hostel_service"
                onChange={handleChange}
                onClick={unCheckTwo}
              />
              <label className="registerSerice">No</label>
            </div>
            <div className="busWrapper">
              <label className="registerSerice">Bus</label>
              <input
                type="checkbox"
                className="serviceCheckbox"
                id="radioThree"
                name="bus_service"
                value="Yes"
                onChange={handleChange}
                onClick={unCheckThree}
              />
              <label className="registerSerice">Yes</label>

              <input
                type="checkbox"
                className="serviceCheckbox"
                id="radioFour"
                name="bus_service"
                value="No"
                onChange={handleChange}
                onClick={unCheckFour}
              />
              <label className="registerSerice">No</label>
            </div>
          </div>
        </section>

        <div className="terms">
          <p>
            Please <DoneIcon /> to confirm that you are eligible for further
            appliccation process
          </p>
          <div className="flexedAgree">
            <input
              value="Yes"
              name="agreed_terms"
              type="checkbox"
              className="agreeCheckbox"
              onChange={handleChange}
            />
            <h4>I confirm</h4>
          </div>
          <p className="errorTextAgree">{formErrors.agreed_terms}</p>
        </div>

        <div className="submition">
          <button className="submitFormBtn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
      <ToastContainer/>
    </>
  );
};

export default RegistrationForm;
