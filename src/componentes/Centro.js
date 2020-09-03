import React, { Component } from 'react';
import Mostrar from './Mostrar';
import Registar from './Registar';

class Centro extends Component {

    toggleModal(modal) {
        let currentState = modal.style.display;

        // If modal is visible, hide it. Else, display it.
        if (currentState === 'none') {
            modal.style.display = 'block';

            let close = modal.querySelector('.close_modal');
            close.addEventListener("click", function () {
                modal.style.display = 'none';
            });

            let overlay = modal.querySelector('.overlay');
            overlay.addEventListener("click", function () {
                modal.style.display = 'none';
            });

        } else {
            modal.style.display = 'none';

            let close = modal.querySelector('.close_modal');
            close.addEventListener("click", function () {
                modal.style.display = 'block';
            });

            let overlay = modal.querySelector('.overlay');
            overlay.addEventListener("click", function () {
                modal.style.display = 'block';
            });
        }
    }

    callModal1() {
        let modal = document.querySelector('#modal1');
        this.toggleModal(modal);
    }

    callModal2() {
        let modal = document.querySelector('#modal2');
        this.toggleModal(modal);
    }

    render() {
        return (
            <div>
                <div id="centerDiv">
                    <h2 style={{ textAlign: "center" }}>Factos Verídicos</h2>
                    <button id="showModalBtn" className="btn-show" onClick={() => { this.callModal1() }}>Mostrar</button>
                    <button id="addModalBtn" className="btn-show" onClick={() => { this.callModal2() }}>Adicionar</button>
                </div>

                <Mostrar />
                <Registar />
            </div>
        );
    }
}

export default Centro;
