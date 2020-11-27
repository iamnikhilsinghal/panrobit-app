import React, { Fragment } from 'react';
import { Component } from 'react';
import './profile-detail.css';

export default class ProfileDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: this.props.location.state.userDetails,
    };
  }

  componentDidMount() {
    console.log(this.state.userInfo);
  }

  render() {
    const user = this.state.userInfo;
    return (
      <Fragment>
        <div className='mainContainer'>
          <div className='sidebar'>
            <h2>Sidebar(Pending)</h2>
          </div>
          <div className='detailContainer'>
            <div className='detailHeader'>
              <h3 className='profileHeader'>Profile</h3>
            </div>
            <hr />
            <div className='detailBody'>
              <div className='leftNav'>
                <ul className='userListDetail'>
                  <li className='userDetailImage'>
                    <img
                      className='userImgDetail'
                      src={user.profilepicture}
                      alt='userImg'
                    />
                  </li>
                  <li className='userDetailItem'>{user.name}</li>
                  <li>
                    <span className='title'>Username: </span>
                    {user.username}
                  </li>
                  <li>
                    <span className='title'>e-mail: </span>
                    {user.email}
                  </li>
                  <li>
                    <span className='title'>Phone: </span>
                    {user.phone}
                  </li>
                  <li>
                    <span className='title'>Website: </span>
                    {user.website}
                  </li>
                </ul>

                <ul className='userListDetail'>
                  <li className='userDetailItem title'>Company</li>
                  <li>
                    <span className='title'>Name: </span>
                    {user.company.name}
                  </li>
                  <li>
                    <span className='title'>catchphrase: </span>
                    {user.company.catchPhrase}
                  </li>
                  <li>
                    <span className='title'>bs: </span>
                    {user.company.bs}
                  </li>
                </ul>
              </div>
              <div class='vl'></div>

              <div className='rightNav'>
                {' '}
                <ul className='userListDetail'>
                  <li className='userDetailItem title'>Address:</li>
                  <li>
                    <span className='title'>Street: </span>
                    {user.address.street}
                  </li>
                  <li>
                    <span className='title'>Suite: </span>
                    {user.address.suite}
                  </li>
                  <li>
                    <span className='title'>City: </span>
                    {user.address.city}
                  </li>
                  <li>
                    <span className='title'>Zipcode: </span>
                    {user.address.zipcode}
                  </li>
                  <hr />
                  <li>
                    <h2>Map(Pending)</h2>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
