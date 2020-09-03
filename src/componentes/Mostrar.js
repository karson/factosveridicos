import React, { Component } from 'react';

class Mostrar extends Component {

    buscaFactos() {

    }

    render() {
        return (
            <div id="modal1" className="modal" style={{ display: "none" }}>
                <div className="overlay"></div>
                <div className="modal_content">
                    <h2>Ouse Duvidar</h2>
                    <p>O céu é azul.</p>
                    <p>A água não tem cor.</p>
                    <p>Ninguem é perfeito.</p>
                    <p>A terra não é plana.</p>
                    <button title="Close" className="close_modal">x</button>
                </div>
            </div>
        );
    }
}

export default Mostrar;
