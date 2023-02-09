import React from "react";
import Index from "../views/dashboard/index";
import { Switch, Route } from "react-router-dom";
// user
import UserProfile from "../views/dashboard/app/user-profile";
import UserAdd from "../views/dashboard/app/user-add";
import UserList from "../views/dashboard/app/user-list";
import userProfileEdit from "../views/dashboard/app/user-privacy-setting";

//extra
import PrivacyPolicy from "../views/dashboard/extra/privacy-policy";
import TermsofService from "../views/dashboard/extra/terms-of-service";

//TransitionGroup
import { TransitionGroup, CSSTransition } from "react-transition-group";
//Special Pages
import Billing from "../views/dashboard/special-pages/billing";

//admin
import Admin from "../views/dashboard/admin/admin";
// categories
import Categories from "../views/dashboard/categories/categories";
// product
import ProductDetail from "../views/dashboard/product/product-detail";
import ProductList from "../views/dashboard/product/product-list";
import ProductAdd from "../views/dashboard/product/product-add";

const DefaultRouter = () => {
  return (
    <TransitionGroup>
      <CSSTransition classNames="fadein" timeout={300}>
        <Switch>
          <Route path="/dashboard" exact component={Index} />
          {/* user */}
          <Route
            path="/dashboard/app/user-profile"
            exact
            component={UserProfile}
          />
          <Route path="/dashboard/app/user-add" exact component={UserAdd} />
          <Route path="/dashboard/app/user-list" exact component={UserList} />
          <Route
            path="/dashboard/app/user-privacy-setting"
            exact
            component={userProfileEdit}
          />
          {/*special pages */}
          <Route
            path="/dashboard/special-pages/billing"
            exact
            component={Billing}
          />
          {/* extra */}
          <Route
            path="/dashboard/extra/privacy-policy"
            exact
            component={PrivacyPolicy}
          />
          <Route
            path="/dashboard/extra/terms-of-service"
            exact
            component={TermsofService}
          />
          {/*admin*/}
          <Route path="/dashboard/admin/admin" exact component={Admin} />
          {/* Categories */}
          <Route
            path="/dashboard/categories/categories"
            exact
            component={Categories}
          />
          {/* user */}
          <Route
            path="/dashboard/product/product-detail"
            exact
            component={ProductDetail}
          />
          <Route
            path="/dashboard/product/product-add"
            exact
            component={ProductAdd}
          />
          <Route
            path="/dashboard/product/product-list"
            exact
            component={ProductList}
          />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default DefaultRouter;
