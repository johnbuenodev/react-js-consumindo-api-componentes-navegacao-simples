import React, { useState } from "react";
import apiAxios from "../api";

class Main extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            listfilme: [],
        }  
    }

    async componentDidMount() {
        const response = await apiAxios.get('/search/shows?q=star%20wars');

        console.log(response);
        console.log(response.data);

        if(response) {
         this.setState({listfilme: response.data});
        }
    }

    render() {

        //desestruturação
        const { filmes } = this.state;

        return(
            <>
              <h1 style={{display:"flex",flexDirection:'row',justifyItems:'center',alignItems:"center"}}>Pagina Main Principal - LISTAR API</h1>
              <ul>
                {
                  this.state.listfilme.map((item) => 
                    <li style={{listStyle: 'none'}} key={item.show.id}>
                     <div style={{padding:16,margin:8,border:'solid 1px black',borderRadius:6,display:'flex',flexDirection:'column', maxWidth:300,alignItems:'start',justifyContent:'center'}}>
                       <h5 style={{paddingTop:8, paddingBottom:8,paddingLeft:16,paddingRight:16, backgroundColor:'greenyellow',border:'solid gray 1.5px',borderRadius:100}}>{ item.show.id }</h5>
                       <h5>Titulo: <strong>{ item.show.name }</strong></h5> 
                       <h6>{ item.show.type }</h6> 
                     </div>
                    </li>
                  )
                }
              </ul>
            </>
        );
    }
}

export default Main;
