/**
 * Created by dragmon on 02/05/18.
 */

import React, {Component} from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widget/containers/modal';
import Modal from '../../widget/components/modal';
import HandleError from '../../error/containers/handle-error';

class Home extends Component {
    state = {
        modalVisible:false,
    }
    handleOpenModal = () =>{
        this.setState({
            modalVisible: true,
        })
    }
    handleClose = (event) => {
        this.setState({
            modalVisible: false,
        })
    }
    render(){
      return(
          <HandleError>
              <HomeLayout>
                  <Related />
                  <Categories
                      categories={this.props.data.categories}
                      handleOpenModal={this.handleOpenModal}
                  />
                  {
                      this.state.modalVisible && //Si se cumple la condicion ejcuat lo que esta despues de &&
                      <ModalContainer>
                          <Modal
                              handleClick={this.handleClose}
                          >
                              <h1>Esto es un modal</h1>
                          </Modal>
                      </ModalContainer>
                  }
              </HomeLayout>
          </HandleError>
      )
    }
}

export default Home;