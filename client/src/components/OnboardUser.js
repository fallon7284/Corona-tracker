import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';\
import NavBar from './NavBar';
import { ReactComponent as Logo } from '../img/Logo_CORONATRACKER_Logo.svg';
import { ReactComponent as TextLogo } from '../img/Logo_CORONATRACKER_Text_Logo.svg';
import profileImg from '../img/profile.png';

const useStyles = makeStyles(theme => ({
  //the styles goes here as an object
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  banner: {
    display: 'inline-block',
  },
  button: {
    color: 'white',
    backgroundColor: 'red',
    fontWeight: 'bold',
    alignSelf: 'center',
    height: '4vh',
    borderRadius: '5px',
    margin: '0 0 0 0',
    maxWidth: '300px',
    minWidth: '42%',
  },
  header: {
    width: 325,
    display: `inline-block`,
    marginBottom: '.5em',
    fontSize: '.5em',
  },
  logo: {
    width: '100px',
    height: '100px',
    [theme.breakpoints.down('xs')]: {
      width: '80px',
    },
  },
  textLogo: {
    width: '350px',
    height: '100px',
    [theme.breakpoints.down('xs')]: {
      width: '200px',
    },
  },
  profile: {
    width: '100px',
    height: '140px',
    marginBottom: '.5em',
    fontSize: '1em',
  },
  image: {
    width: '100%',
  },
  inputArea: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '.5vh',
  },
  inputField: {
    width: '48%',
    textAlign: 'center',
    maxWidth: '180px',
    color: 'white',
    backgroundColor: 'red',
    height: '4vh',
    justifyContent: 'space-between',
    border: 'none',
    borderRadius: '5px',
    '&::placeholder': {
      color: 'white',
    },

    '&:-ms-input-placeholder': {
      color: 'white',
    },

    '&::-ms-input-placeholder': {
      color: 'white',
    },
  },
  inputFieldLabel: {
    textAlign: 'right',
    width: '48%',
  },
  location: {
    border: 'none',
    marginBottom: '10px',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'red',
    width: '33%',
    maxWidth: '60px',
    fontSize: '1em',
    borderRadius: '5px',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial,',
    '&::placeholder': {
      color: 'white',
    },

    '&:-ms-input-placeholder': {
      color: 'white',
    },

    '&::-ms-input-placeholder': {
      color: 'white',
    },
  },
}));

const blankForm = {
  firstName: '',
  age: '',
  sex: '',
  city: '',
  state: '',
  zip: '',
};

export default ({ postNewUser }) => {
  const [formState, setFormState] = useState(blankForm);
  const handleChange = e => {
    e.preventDefault();
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.banner}>
        <Logo className={classes.logo} />
        <TextLogo className={classes.textLogo} />
      </div>
      <div className={classes.header}>
        <h4>
          <b>Welcome to CoronaTracker!</b>
        </h4>
        <h4>Let's get your profile set up with a few quick questions and start logging your health:</h4>
      </div>
      <div className={classes.profile}>
        <img src={profileImg} className={classes.image} />
        <h4>
          <b>PROFILE</b>
        </h4>
      </div>
      <form onSubmit={() => postNewUser(formState).then(setFormState(blankForm))}>
        <div className={classes.inputArea}>
          <h5 className={classes.inputFieldLabel}>
            <b>First Name:</b>
          </h5>
          <input
            className={classes.inputField}
            name="firstName"
            placeholder="Click Here"
            value={formState.firstName}
            onChange={handleChange}
          />
        </div>
        <div className={classes.inputArea}>
          <h5 className={classes.inputFieldLabel}>
            <b>Age (Years):</b>
          </h5>
          <input
            className={classes.inputField}
            name="age"
            placeholder="Click Here"
            value={formState.age}
            onChange={handleChange}
          />
        </div>
        <div className={classes.inputArea}>
          <h5 className={classes.inputFieldLabel}>
            <b>Sex:</b>
          </h5>
          <div>
            <button
              onClick={e => {
                e.preventDefault();
                setFormState({
                  ...formState,
                  sex: 'male',
                });
              }}
              className={classes.button}
              style={formState.sex === 'male' ? { backgroundColor: 'white', color: 'red' } : {}}
            >
              Male
            </button>
            <button
              onClick={e => {
                e.preventDefault();
                setFormState({
                  ...formState,
                  sex: 'female',
                });
              }}
              className={classes.button}
              style={formState.sex === 'female' ? { backgroundColor: 'white', color: 'red' } : {}}
            >
              Female
            </button>
          </div>
        </div>
        <div className={classes.inputArea}>
          <h5 className={classes.inputFieldLabel}>
            <b>{'City, State & ZIP:'}</b>
          </h5>
          <div className={classes.inputField}>
            <input
              name="city"
              value={formState.city}
              onChange={handleChange}
              placeholder="City"
              className={classes.location}
            />
            <input
              name="state"
              value={formState.state}
              onChange={handleChange}
              placeholder="State"
              className={classes.location}
            />
            <input
              name="zip"
              value={formState.zip}
              onChange={handleChange}
              placeholder="Zip"
              className={classes.location}
            />
          </div>
        </div>
        <button
          type="submit"
          className={classes.button}
          style={{
            width: '300px',
            marginTop: '.5em',
            height: '3.5em',
          }}
        >
          SAVE MY RESPONSES
        </button>
      </form>
      <NavBar />
    </div>
  );
};
