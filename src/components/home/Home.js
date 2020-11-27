import React, { Fragment } from 'react';
import { Component } from 'react';
import './home.css';
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
    };
  }

  componentDidMount() {
    this.getUserList();
  }

  getUserList = () => {
    this.setState({ userList: [] });
    axios.get('https://panorbit.in/api/users.json').then((res) => {
      console.log('res', res);
      this.setState({ userList: res.data.users });
    });
  };

  onUserNameClick(user) {
    this.props.history.push({
      pathname: '/profileDetails',
      state: {
        userDetails: user,
      },
    });
  }

  render() {
    return (
      <Fragment>
        {this.state.userList ? (
          <div className='container'>
            <div className='box'>
              <div className='header'>Select an account</div>
              <div className='list'>
                <ul className='userList'>
                  {this.state.userList.map((user, index) => (
                    <li
                      key={index}
                      className='userRow'
                      onClick={() => {
                        this.onUserNameClick(user);
                      }}
                    >
                      <img
                        className='userImg'
                        src={user.profilepicture}
                        alt='userImg'
                      />
                      <div className='userName'>{user.name}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </Fragment>
    );
  }
}
