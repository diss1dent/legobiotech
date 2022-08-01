import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {getCategoryProducts} from "./ProductsFunctions";
import Products from "./Products";
import {RootState} from "../../../state/store";

const Category = (props: PropsFromRedux) => {
  const {activeMenu} = props;
  const category = getCategoryProducts(activeMenu.category);
  return (
    <div>
      <Products products={category.products}/>
    </div>
  );
}

type PropsFromRedux = ConnectedProps<typeof connector>

const stateToProps = (state: RootState) => ({
  activeMenu: state.navigationState.activeMenu,
})

const dispatchToProps = () => ({

})

const connector = connect(stateToProps, dispatchToProps);
export default connector(Category);