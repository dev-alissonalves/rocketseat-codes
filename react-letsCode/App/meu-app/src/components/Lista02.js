import React from 'react';

class Lista02 extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            items: 
            [
                {id:1, nome: 'item1', completo: true},
                {id:2, nome: 'item2', completo: true},
                {id:3, nome: 'item3', completo: false},
                {id:4, nome: 'item4', completo: true},
            ]
        }
    }

  render(){
    return(
        <>
            <ul>
                {this.state.items.map(
                    (item) => (
                        <Item key={item.id} completo={item.completo}>
                            {item.nome}
                        </Item>
                    )
                )}
            </ul>
        </>
    );
  }
}

class Item extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const textDecoration = this.props.completo ? 'line-through' : 'none';

        return(
            <>
                <li data-id={this.props.id} style={{textDecoration}}>
                    {this.props.children}
                </li>
            </>
        );
    }
}

export default Lista02;
