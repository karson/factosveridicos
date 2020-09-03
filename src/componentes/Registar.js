import React, { Component } from 'react';

class Registar extends Component {
    render() {
        return (
            <div id="modal2" className="modal" style={{ display: "none" }}>
                <div className="overlay"></div>
                <div className="modal_content">
                    <h2>Não Minta</h2>
                    <form id="factsForm" method="POST" action="#">
                        <textarea placeholder="Informe um facto" rows="2" cols="3"></textarea>
                        <button type="submit" id="addButton">Adicionar</button>
                    </form>
                    <button title="Close" className="close_modal">x</button>
                </div>
            </div>
        )
    }
}

export default Registar;
