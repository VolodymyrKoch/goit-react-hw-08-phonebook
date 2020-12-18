import React from 'react';
import { NavLink } from 'react-router-dom';

import { routesPath } from '../../../services/routes.js';
import UserProfile from '../UserProfile/UserProfile';
import withAuth from '../hocs/withAuth';
import AuthNavigation from '../AuthNavbar/AuthNavbar.js';
import DashboardNavigation from '../DashBordNavBar/DashBordNavBar.js';
import logoImg from '../../../images/phone-book-icon.png';

const Navbar = ({ loginIn }) => {
  const authNavigation = !loginIn && <AuthNavigation />;
  const dashboardNavigation = loginIn && <DashboardNavigation />;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <ul className="navbar-nav">
          <li>
            <a className="nav navbar-brand" href="/">
              <img src={logoImg} alt="logo" width="30px" />
            </a>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to={routesPath.HOME}
              className="nav-link"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>

          {authNavigation}
          {dashboardNavigation}
        </ul>
        <UserProfile />
      </div>
    </nav>
  );
};

export default withAuth(Navbar);
